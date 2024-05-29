import { NavLink } from "react-router-dom";
import Vacation from "../../../models/Vacation";
import "./VacationCard.css";
import formatPrice from "../../../utils/formatPrice";
import { useState } from "react";
import EditVacation from "../editVacation/EditVacation";

interface VacationCardProps {
    vacation: Vacation,
}   

function VacationCard(props: VacationCardProps): JSX.Element {
    const [isManager, setIsManager] = useState<Boolean>(false);
      
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
                {isManager 
                &&
                <NavLink to={`/vacations/edit/${props.vacation.id}`}>
                    {/* <img src={props.vacation.imageUrl} /> */}
                    {<button onClick={EditVacation}>edit vacation</button> }

                </NavLink>}
            </div>
        </div>
    );
}

export default VacationCard;
