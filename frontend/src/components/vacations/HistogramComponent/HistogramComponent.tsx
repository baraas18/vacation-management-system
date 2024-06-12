import React, { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from 'recharts';
import vacationsService from '../../../services/Vacations'
import { authStore } from '../../../redux/AuthState';
import notify from '../../../services/Notify';
import { useNavigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';
import Vacation from '../../../models/Vacation';



function HistogramComponent(): JSX.Element {


    const [vacations, setVacations] = useState<Vacation[]>([]);
    const [countFollowers, setcountFollowers] = useState<Number[]>([]);
    const [isManager, setIsManager] = useState(false);
    const navigate = useNavigate();

    useEffect(()=> {
        const token = authStore.getState().token || "";
        if (!token) {
            notify.error("You must be logged in to view this page.");
            navigate("/login");
            return;
        }
        const decodedToken = jwtDecode<{ user: { id: string, role: string } }>(token);
        if(decodedToken.user.role === "USER") {
            notify.error("you must be a manager")
            navigate("/vacations");
        }
        const currentManager = decodedToken.user.role === "MANAGER";
        setIsManager(currentManager);

            vacationsService.getAllVacationsByUser(decodedToken.user.id)
                .then(vacationsFromServer => {
                    setVacations(vacationsFromServer)
                }) 
        
     
       setcountFollowers(vacations.map(v => v?.followersCount || 0)); 
    },[]);

    const downloadCSV = () => {
        const csvHeader = "destination,followersCount\n";
        const csvContent = vacations.map(vacation => `${vacation.destination},${vacation.followersCount}`).join("\n");
        const blob = new Blob([csvHeader, csvContent], { type: 'text/csv' });
        const blobURL = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.setAttribute("href", blobURL);
        link.setAttribute("download", "vacations.csv");
        document.body.appendChild(link);
        link.click();
        // Clean up
        setTimeout(() => {
            URL.revokeObjectURL(blobURL);
            document.body.removeChild(link);
        }, 0);
    };

    return (
        <div className="HistogramComponent">
            <h4>Here you can see all the vacations with the followersCount:</h4>
            <button onClick={downloadCSV} type="button" className="btn btn-info">Download CSV</button>
            <div className="chart-container">
                <BarChart width={950} height={350} data={vacations}>
                    <XAxis dataKey="destination" textAnchor= "end" interval={0} angle={-45} height={140} />
                    <YAxis tick={{dy: 0, dx: -10, fontSize: 14, fontFamily: 'sans-serif', fill: 'black'}} domain={[0, 'dataMax']} tickCount={4} />
                    <Tooltip />
                    {/* <Legend /> */}
                    <Bar dataKey="followersCount" fill="#17A2B8" />
                </BarChart>
            </div>
        </div>
    )
}

export default HistogramComponent;