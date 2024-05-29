import { useForm } from "react-hook-form";
import "./AddVacation.css";
import Vacation from "../../../models/Vacation";
import vacationsService from "../../../services/Vacations";
import { useNavigate } from "react-router-dom";
import notify from "../../../services/Notify";

function AddVacation(): JSX.Element {

    const { register, handleSubmit, setValue } = useForm<Vacation>();

    const navigate = useNavigate();


    async function submitVacationData(vacation: Vacation) {
        try {
            vacation.image = (vacation.image as unknown as FileList)[0];
            const addedVacation = await vacationsService.addVacation(vacation);
            // alert(`added a new vacation with id ${addedVacation.id}`)
            notify.success(`added a new vacation with id ${addedVacation.id}`);
            // navigate(`/vacations/details/${addedVacation.id}`);
            // navigate('/vacations');
            setValue('destination', '')
            setValue('description', '')
            setValue('startDate', undefined)
            setValue('endDate', undefined)


        } catch (err) {
            // alert(err);
            notify.error(err);
        }
    }

    return (
        <div className="AddVacation">
            <h2>please add your new vacation</h2>
            <form onSubmit={handleSubmit(submitVacationData)}>

                <label>destination:</label>
                <input type="text" {...register('destination')} />

                <label>description:</label>
                <input type="text" step="0.01" {...register('description')} />

                <label>price:</label>
                <input type="number" step="0.01" {...register('price')} />

                <label>startDate:</label>
                <input type="Date" {...register('startDate')} />

                <label>endDate:</label>
                <input type="Date" {...register('endDate')} />

                <label>Image:</label>
                <input type="file" accept="image/*" {...register('image')} />

                <button>add</button>

            </form>
        </div>
    );
}

export default AddVacation;
