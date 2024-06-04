import { NavLink, useParams } from "react-router-dom";
import Vacation from "../../../models/Vacation";
import "./VacationCard.css";
import formatPrice from "../../../utils/formatPrice";
import { useEffect, useState } from "react";
import EditVacation from "../editVacation/EditVacation";
import { useNavigate } from "react-router-dom";
import { authStore } from "../../../redux/AuthState";
import { jwtDecode } from "jwt-decode";
import notify from "../../../services/Notify";
import { format } from 'date-fns';
import vacationsService from "../../../services/Vacations";


interface VacationCardProps {
    vacation: Vacation,
}   

function VacationCard(props: VacationCardProps): JSX.Element {
    const [isManager, setIsManager] = useState<Boolean>(false);
    const navigate = useNavigate();

    let startedDate: string = '';
    
    if (props.vacation.startDate) {
        startedDate = format(props.vacation.startDate, 'dd/MM/yyyy'); 
    } else {
        notify.error('Start date cannot be empty');
    }

    let endDate: string = '';
    
    if (props.vacation.endDate) {
        endDate = format(props.vacation.endDate, 'dd/MM/yyyy'); 
    } else {
        notify.error('end date cannot be empty');
    }


    async function deleteThis(vacationId : string): Promise<void> {
        if (window.confirm('are you sure you want to delete this vacation?')) {
            try {
                console.log(vacationId);
                
                await vacationsService.deleteVacation(vacationId);
                notify.success('this vacation has been deleted');
                navigate('/vacations');
            } catch (err) {
                notify.error(err)
            }
        }
    }
    useEffect(()=> {
        const token = authStore.getState().token || "";
        if(token){
        console.log(jwtDecode(token));
        setIsManager(jwtDecode<{user: {role: string}}>(token).user.role ==="MANAGER");
        } else {
            notify.error("You must be logged in to view this page.");
            navigate("/login");
        }
    },[])
    return (
        <div className="VacationCard">
            <div>
             destination: {props.vacation.destination}
                <br />
                price: {formatPrice(props.vacation.price)}
                <br />
                description: {props.vacation.description}
                <br /> 
                Start Date: {startedDate}
                <br />
                End Date: {endDate}
                <br />
            </div>
            <div>
                {isManager &&
                    <button onClick={()=>navigate(`/vacations/edit/${props.vacation.id}`)}>edit vacation</button> 
                }
                {isManager &&      
                <button  onClick={()=>{
                    if (props.vacation.id)
                    deleteThis(props.vacation.id)
                else notify.error('Vacation id not found')
                }}>
                    delete vacation</button> }
            </div>
        </div>
    );
}

export default VacationCard;
