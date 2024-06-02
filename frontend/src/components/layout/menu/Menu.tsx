import { NavLink } from "react-router-dom";
import "./Menu.css";
import { useEffect, useState } from "react";
import { authStore } from "../../../redux/AuthState";

function Menu(): JSX.Element {
    const [isUserLoggedIn, setIsUserLoggedIn] = useState<boolean>(false);
    const [isManager, setIsManager] = useState<boolean>(false);

    useEffect(() => {
        setIsUserLoggedIn(authStore.getState().token !== '');
        const unsubscribe = authStore.subscribe(() => {
            setIsUserLoggedIn(authStore.getState().token !== '');
        })


        return unsubscribe;
    }, []);

    return (
        <div className="Menu">
            {/* <a href="/home">Home wiwi </a>
            <a href="/vacations">Vacations</a>
            <a href="/about">About</a> */}

            <NavLink to="/home">Home</NavLink>
            {isUserLoggedIn && <NavLink to="/vacations">Vacations</NavLink>}
            
            <NavLink to="/about">About</NavLink>
        </div>
    );
}

export default Menu;
