import { useForm } from "react-hook-form";
import "./AddVacation.css";
import Vacation from "../../../models/Vacation";
import vacationsService from "../../../services/Vacations";
import { useNavigate } from "react-router-dom";
import notify from "../../../services/Notify";
import { useEffect, useState } from "react";
import { authStore } from "../../../redux/AuthState";
import { jwtDecode } from "jwt-decode";

function AddVacation(): JSX.Element {

    const { register, handleSubmit, setValue } = useForm<Vacation>();

    const navigate = useNavigate();
    const [userId, setUserId] = useState<string>('');

    const [isManager, setIsManager] = useState<Boolean>(false);

    useEffect(() => {
        const token = authStore.getState().token || "";
        if (!token) {
            notify.error("You must be logged in to view this page.");
            navigate("/login");
            return;
        }

        const decodedToken = jwtDecode<{ user: { id: string, role: string } }>(token);

        if (isManager)
            setIsManager(decodedToken.user.role === "MANAGER");

        setUserId(decodedToken.user.id);
    }, [])

    async function submitVacationData(vacation: Vacation) {

            
        try {
            vacation.image = (vacation.image as unknown as FileList)[0];
            await vacationsService.addVacation(vacation, userId);
            notify.success(`added a new vacation `);
            navigate('/vacations');
            setValue('destination', '')
            setValue('description', '')
            setValue('startDate', undefined)
            setValue('endDate', undefined)


        } catch (err) {
            notify.error(err);
        }
    }

    return (
        <div className="AddVacation">
            <h2>Add Vacation</h2>
            <form onSubmit={handleSubmit(submitVacationData)}>

                <label>Destination:</label>
                <input type="text" {...register('destination')} />

                <label>Description:</label>
                <input type="text" step="0.01" {...register('description')} />

                <label>Price:</label>
                <input type="number" step="0.01" {...register('price')} />

                <label>Start Date:</label>
                <input type="Date" {...register('startDate')} />

                <label>End Date:</label>
                <input type="Date" {...register('endDate')} />

                <label>Image:</label>
                <input type="file" accept="image/*" {...register('image')} />

                <button type="submit" className="btn btn-success">Add</button>

            </form>
        </div>
    );
}

export default AddVacation;
