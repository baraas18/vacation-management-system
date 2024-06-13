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
import PaginationComponent from "../PaginationVacations/PaginationVacations";

function VacationsList(): JSX.Element {
    const navigate = useNavigate();
    useTitle('Booking');

    const [vacations, setVacations] = useState<Vacation[]>([]);
    const [filteredVacations, setFilteredVacations] = useState<Vacation[]>([]);
    const [isManager, setIsManager] = useState<Boolean>(false);
    const [followFilter, setFollowFilter] = useState<Boolean>(false);
    const [dateFilter, setDateFilter] = useState<string>('noFilter');
    const [userId, setUserId] = useState<string>('');

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;
    const totalPages = Math.ceil(filteredVacations.length / itemsPerPage);

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredVacations.slice(indexOfFirstItem, indexOfLastItem);


    useEffect(() => {
        const token = authStore.getState().token || "";
        if (!token) {
            notify.error("You must be logged in to view this page.");
            navigate("/login");
            return;
        }
        const decodedToken = jwtDecode<{ user: { id: string, role: string } }>(token);

        const currentManager = decodedToken.user.role === "MANAGER";
        setIsManager(currentManager);

        const currentUserId = decodedToken.user.id;
        setUserId(currentUserId);

        vacationsService.getAllVacationsByUser(currentUserId)
            .then(vacationsFromServer => {
                setVacations(vacationsFromServer)
                setFilteredVacations(vacationsFromServer)
            })
            .catch(error => notify.error(error));

        const unsubscribe = vacationsStore.subscribe(() => {
            setVacations([...vacationsStore.getState().vacations])
        })

        return unsubscribe;

    }, []);

    useEffect(() => {
        let newVacations=vacations;
        if(followFilter){
            newVacations = vacations.filter((v: Vacation) => v.isFollower === 1)
        }
            switch (dateFilter) {
                case "noFilter" : 
                    setFilteredVacations(newVacations)
                    break;
                case "pending" :
                    setFilteredVacations(newVacations.filter((v: Vacation) => (new Date(v?.startDate || '')) > new Date() ));
                    break;
                case "ongoing" :
                    setFilteredVacations(newVacations.filter((v: Vacation) => (new Date(v?.startDate || '')) <  new Date() && (new Date(v?.endDate || '')) > new Date()));
                    break;
            }

            setCurrentPage(1);
    }, [dateFilter,followFilter])

    
    return (

        <div className="VacationsList">
            <span>
                {isManager && <>
                    <button type="button" className="btn btn-success" onClick={() => navigate('/vacations/add')} style={{margin: '10px'}}>+ Add Vacation</button>
                    <button type="button" className="btn btn-info" onClick={() => navigate('/vacations/graphs')} style={{margin: '10px'}}>View Graphs</button>
                    </>
                }
                {!isManager && <>
                    <div className="form-check form-switch">
                        <input className="form-check-input" type="checkbox" onChange={(e) => setFollowFilter(e.target.checked)} />
                        <label className="form-check-label"  >followed by me</label>
                    </div>
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <input type="radio" value="noFilter" checked={dateFilter === "noFilter"} name="dateFilter" onChange={(e) => {
                                if (e.target.checked) {
                                    setDateFilter(e.target.value)
                                }
                            }} />
                            <label>No Filter</label>
                        </div>
                        <div className="input-group-prepend">
                            <input type="radio" value="pending" name="dateFilter" checked={dateFilter === "pending"} onChange={(e) => {
                                if (e.target.checked) {
                                    setDateFilter(e.target.value)
                                }
                            }} />
                            <label>Pending</label>
                        </div>
                        <div className="input-group-prepend">
                            <input type="radio" value="ongoing" name="dateFilter" checked={dateFilter === "ongoing"} onChange={(e) => {
                                if (e.target.checked) {
                                    setDateFilter(e.target.value)
                                }
                            }} />
                            <label>Ongoing</label>
                        </div>
                    </div>
                    </>
                }
            </span>
            <br />
            {vacations.length === 0 && <Spinner />}
            <div id="operations" className="row">
                {currentItems.map((v: Vacation) => <VacationCard key={v.id} vacation={v} />)}
            </div>
            <PaginationComponent totalPages={totalPages} currentPage={currentPage} setCurrentPage={setCurrentPage} />
        </div>
    );
}

export default VacationsList;