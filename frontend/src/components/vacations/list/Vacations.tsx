import { NavLink } from "react-router-dom";
import Vacation from "../../../models/Vacation";
import vacationsService from "../../../services/Vacations";
import useTitle from "../../../utils/useTitle";
import VacationCard from "../vacationCard/VacationCard";
import "./Vacations.css";
import { useEffect, useState } from "react";
import notify from "../../../services/Notify";
import Spinner from "../../common/spinner/Spinner";
import { vacationsStore } from "../../../redux/VacationsState";

function VacationsList(): JSX.Element {

    useTitle('Northwind vacations');

    const [vacations, setVacations] = useState<Vacation[]>([]);

    useEffect(() => {

    
        vacationsService.getAll()
            .then(vacationsFromServer => setVacations(vacationsFromServer))
            .catch(error => notify.error(error));

        const unsubscribe = vacationsStore.subscribe(() => {
            setVacations([...vacationsStore.getState().vacations])
        })

        return unsubscribe;

    }, []);

    return (

        <div className="VacationsList">
            {vacations.length === 0 && <Spinner />}
            {vacations.map(p => <VacationCard key={p.id} vacation={p} />)}
        </div>
    );
}

export default VacationsList;
