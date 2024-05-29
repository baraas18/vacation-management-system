import { useNavigate, useParams } from "react-router-dom";
import "./VacationDetails.css";
import vacationsService from "../../../services/Vacations";
import { useEffect, useState } from "react";
import Vacation from "../../../models/Vacation";
import formatPrice from "../../../utils/formatPrice";
import { NavLink } from "react-router-dom";
import notify from "../../../services/Notify";
import Spinner from "../../common/spinner/Spinner";

function VacationDetails(): JSX.Element {

    const params = useParams();
    const vacationId = String(params.vacationId);

    const [vacation, setVacation] = useState<Vacation>();

    useEffect(() => {
        vacationsService.getOne(vacationId)
            .then(vacationFromServer => setVacation(vacationFromServer))
            .catch(err => notify.error(err))

    }, [])

    const navigate = useNavigate();

    async function deleteThis(): Promise<void> {
        if (window.confirm('are you sure you want to delete this vacation?')) {
            try {
                await vacationsService.deleteVacation(vacationId);
                notify.success('this vacation has been deleted');
                navigate('/vacations');
            } catch (err) {
                notify.error(err)
            }
        }
    }

    if (!vacation) {
        return (
            <Spinner />
        )
    }

    return (
        <div className="VacationDetails">
            <h2>Vacation Details</h2>

            <h3>destination: {vacation?.destination}</h3>
            <h3>description: {vacation?.description}</h3>
            <h3>Price: {formatPrice(vacation?.price)}</h3>
             {/* <h3>startDate: {vacation?.startDate}</h3>
            <h3>endDate: {vacation?.endDate}</h3>  */}
            

            <img src={vacation?.imageUrl} />

            <br /><br />

            <NavLink to='/vacations'>back</NavLink>
            <span> | </span>
            <NavLink to={`/vacations/edit/${vacationId}`}>update</NavLink>
            <span> | </span>
            <NavLink to='#' onClick={deleteThis}>delete</NavLink>
        </div>
    );
}

export default VacationDetails;
