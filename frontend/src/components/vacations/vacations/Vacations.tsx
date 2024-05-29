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
import AddVacation from "../AddVacation/AddVacation";
import { jwtDecode } from "jwt-decode";

function Vacations(): JSX.Element {

    useTitle('our Vacations');

    const navigate = useNavigate();
    const [user, setUser] = useState<{
        id: string,
        firstName: string,
        lastName: string,
        email: string,
        password: string,
        role: string
    }>();
    const [isManager, setIsManager] = useState<Boolean>(false);
    
    useEffect(() => {
        const decodedUser = jwtDecode<{
            user: {
                id: string,
                firstName: string,
                lastName: string,
                email: string,
                password: string,
                role: string
            }
        }>(localStorage.getItem("token") || "")?.user;
        setUser(decodedUser);
        if (!decodedUser) {
            navigate('/login');
        } else if (decodedUser.role === "MANAGER") {
            setIsManager(true);
        } else {
            setIsManager(false);
        }
    }, [])

    return (

        <div className="Vacations">
            <div>
                <br />
                <Stats />
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
