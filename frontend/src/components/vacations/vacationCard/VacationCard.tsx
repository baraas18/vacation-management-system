import { NavLink } from "react-router-dom";
import Vacation from "../../../models/Vacation";
import "./VacationCard.css";
import formatPrice from "../../../utils/formatPrice";
import { useEffect, useState } from "react";
import EditVacation from "../editVacation/EditVacation";
import { useNavigate } from "react-router-dom";
import { authStore } from "../../../redux/AuthState";
import { jwtDecode } from "jwt-decode";
import notify from "../../../services/Notify";


interface VacationCardProps {
    vacation: Vacation,
}   

function VacationCard(props: VacationCardProps): JSX.Element {
    const [isManager, setIsManager] = useState<Boolean>(false);
    const navigate = useNavigate();
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
            </div>
            <div>
                {isManager &&
                    <button onClick={()=>navigate(`/vacations/edit/${props.vacation.id}`)}>edit vacation</button> 
                }
            </div>
        </div>
    );
}

export default VacationCard;
