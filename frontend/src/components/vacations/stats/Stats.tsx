import { useEffect, useState } from "react";
import "./Stats.css";
import vacationsService from "../../../services/Vacations";
import notify from "../../../services/Notify";
import { vacationsStore } from "../../../redux/VacationsState";

function Stats(): JSX.Element {

    const [totalVacations, setTotalVacations] = useState<number>()
    const [totalPrice, setTotalPrice] = useState<number>()
    const [totalStock, setTotalStock] = useState<number>()

    useEffect(() => {
        setTotalVacations(vacationsStore.getState().vacations.length);
        setTotalPrice(vacationsStore.getState().vacations.reduce((acc, curr) => acc + (curr.price || 0), 0))

        const unsubscribe = vacationsStore.subscribe(() => {
            setTotalVacations(vacationsStore.getState().vacations.length);
            setTotalPrice(vacationsStore.getState().vacations.reduce((acc, curr) => acc + (curr.price || 0), 0))
        })

        return unsubscribe

    }, []);

    return (
        <div className="Stats">
            Total Vacations: {totalVacations} | Total price: {totalPrice}
        </div>
    );
}

export default Stats;
