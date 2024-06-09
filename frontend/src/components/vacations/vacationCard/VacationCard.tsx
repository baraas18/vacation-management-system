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
import Heart from "react-animated-heart";


interface VacationCardProps {
    vacation: Vacation,
}

function VacationCard(props: VacationCardProps): JSX.Element {
    const [isManager, setIsManager] = useState<Boolean>(false);
    const [userId, setUserId] = useState<string>('');
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


    async function deleteThis(vacationId: string): Promise<void> {
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
    useEffect(() => {
        const token = authStore.getState().token || "";
        if (token) {
            const decodedToken = jwtDecode<{ user: { role: string, id: string } }>(token);
            setIsManager(decodedToken.user.role === "MANAGER");

            setUserId(decodedToken.user.id);

        } else {
            notify.error("You must be logged in to view this page.");
            navigate("/login");
        }
    }, [])
    return (
        <div className="VacationCard">

            <div className="card" style={{ width: '18rem', height: '30rem' }}>
                <img className="card-img-top" src={props.vacation.imageUrl} />
                <div className="card-body">
                    <div style={{ display: "flex", alignItems: 'center', justifyContent: 'space-between' }}>
                        <h5 className="card-title">{props.vacation.destination}</h5>
                        {isManager &&
                            <>
                                <button onClick={() => {
                                    if (props.vacation.id)
                                        deleteThis(props.vacation.id)
                                    else notify.error('Vacation id not found')
                                }}>
                                    delete vacation</button>
                                <button onClick={() => navigate(`/vacations/edit/${props.vacation.id}`)}>edit vacation</button>
                            </>
                        }

                        {!isManager &&
                            <div style={{ display: "flex", alignItems: 'center', width: '100px' }}>
                                <Heart
                                    isClick={props.vacation.isFollower ? props.vacation.isFollower === 1 : false}
                                    onClick={() => vacationsService.updateFollow(props.vacation.id || '', userId, props.vacation.isFollower || 0)}
                                />
                                {props.vacation.followersCount}
                            </div>
                        }
                    </div>
                    <h5 className="card-title">{formatPrice(props.vacation.price)}</h5>
                    <p className="card-text">{props.vacation.description}</p>
                    <p className="card-text">{startedDate} - {endDate}</p>

                </div>
            </div>
        </div>
    );
}

export default VacationCard;