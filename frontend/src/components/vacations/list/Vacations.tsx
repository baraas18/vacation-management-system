import { NavLink, useNavigate } from "react-router-dom";
import Vacation from "../../../models/Vacation";
import vacationsService from "../../../services/Vacations";
import useTitle from "../../../utils/useTitle";
import VacationCard from "../vacationCard/VacationCard";
import "./Vacations.css";
import { useEffect, useState } from "react";
import notify from "../../../services/Notify";
import Spinner from "../../common/spinner/Spinner";
import { vacationsStore } from "../../../redux/VacationsState";
import { authStore } from "../../../redux/AuthState";
import { jwtDecode } from "jwt-decode";

function VacationsList(): JSX.Element {
    const navigate = useNavigate();
    useTitle('Northwind vacations');

    const [vacations, setVacations] = useState<Vacation[]>([]);
    const [isManager, setIsManager] = useState<Boolean>(false);
    const [userId, setUserId] = useState<string>('');
    useEffect(() => {
        const token = authStore.getState().token || "";
        if(!token){
            notify.error("You must be logged in to view this page.");
            navigate("/login");
            return;
        }
        const decodedToken = jwtDecode<{user: {id: string, role: string}}>(token);

        const currentManager = decodedToken.user.role ==="MANAGER";
        setIsManager(currentManager);
        
        const currentUserId = decodedToken.user.id;
        setUserId(currentUserId);

        vacationsService.getAllVacationsByUser(currentUserId)
        .then(vacationsFromServer => setVacations(vacationsFromServer))
        .catch(error => notify.error(error));

        const unsubscribe = vacationsStore.subscribe(() => {
            setVacations([...vacationsStore.getState().vacations])
        })

        return unsubscribe;
        
    }, []);

    return (

        <div className="VacationsList">
            <span>
             { isManager && <button onClick={()=>navigate(`/vacations/add`)}>Click Here to Add A New Vacation....</button> }
            </span>
            <br />
            {vacations.length === 0 && <Spinner />}
            <div id="operations" className="row">
                {vacations.map(p => <VacationCard key={p.id} vacation={p} />)}     
            </div>
        </div>
    );
}

export default VacationsList;