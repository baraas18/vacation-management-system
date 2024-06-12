import { NavLink, useNavigate } from "react-router-dom";
import Vacation from "../../../models/Vacation";
import vacationsService from "../../../services/Vacations";
import useTitle from "../../../utils/useTitle";
import VacationCard from "../vacationCard/VacationCard";
import "./Vacations.css";
import { useEffect, useState } from "react";
import notify from "../../../services/Notify";
import Spinner from "../../common/spinner/Spinner";
import Stats from "../stats/Stats";
import VacationsList from "../list/Vacations";
import { jwtDecode } from "jwt-decode";
import { authStore } from "../../../redux/AuthState";

function Vacations(): JSX.Element {

    useTitle('Booking');

    const navigate = useNavigate();
    const [user, setUser] = useState<{
        id: string,
        firstName: string,
        lastName: string,
        email: string,
        password: string,
        role: string
    }>();
    useEffect(()=> {
        const token = authStore.getState().token || "";
        if(!token){
            notify.error("You must be logged in to view this page.");
            navigate("/login");
        }
    },[])
 
    return (

        <div className="Vacations">
            <div>
                <br />
                <br />
                <VacationsList />
            </div>
            <aside>
                {/* {isManager && <AddVacation />} */}
            </aside>
        </div>
    );
}

export default Vacations;
