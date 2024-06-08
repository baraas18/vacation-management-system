import { useNavigate, useParams } from "react-router-dom";
import "./EditVacation.css";
import { useEffect, useState } from "react";
import vacationsService from "../../../services/Vacations";
import { Control, useForm, useWatch } from "react-hook-form";
import Vacation from "../../../models/Vacation";
import notify from "../../../services/Notify";
import { authStore } from "../../../redux/AuthState";
import { jwtDecode } from "jwt-decode";

function EditVacation(): JSX.Element {

    const params = useParams();
    const vacationId = String(params.vacationId);

    const { register, handleSubmit, setValue, control } = useForm<Vacation>();

    const navigate = useNavigate();
    const [userId, setUserId] = useState<string>('');
    const [src, setSrc] = useState<string>('');
    const [isManager, setIsManager] = useState<Boolean>(false);
    useEffect(()=> {
        const token = authStore.getState().token || "";
        if(!token){
            notify.error("You must be logged in to view this page.");
            navigate("/login");
            return;
        }
        const decodedToken = jwtDecode<{user: {id: string, role: string}}>(token);

        const currentManager = decodedToken.user.role === "MANAGER";
        setIsManager(currentManager);

        if(!currentManager) {
            notify.error("You must be a manager to edit this vacations")
            navigate(`/vacations`);
        }

        setUserId(decodedToken.user.id);
        
    },[])

    function ImageWatched({ control }: { control: Control<Vacation> }) {
        const imageSrc = useWatch({
            control,
            name: 'image',
        })
        if (imageSrc) {
            const file = ((imageSrc as unknown as FileList)[0])
            if (file) {
                const newSrc = window.URL.createObjectURL(file)
                return <img src={newSrc} />
            }
        }
        return <img src={src} />
    }


    useEffect(() => {
        vacationsService.getOne(userId, vacationId)
            .then(vacationFromServer => {
                setValue('destination', vacationFromServer?.destination);
                setValue('description', vacationFromServer?.description);
                setValue('startDate', vacationFromServer?.startDate);
                setValue('endDate', vacationFromServer?.endDate);
                setValue('price', vacationFromServer?.price); 


                setSrc(vacationFromServer?.imageUrl || '')
            })
            .catch(err => notify.error(err))

    }, [])

    async function submitVacationData(vacation: Vacation) {
        console.log(vacation);
        try {
            vacation.image = (vacation.image as unknown as FileList)[0];
            console.log(vacation.image)
            vacation.id = vacationId;
            const updatedVacation = await vacationsService.editVacation(vacation);
            notify.success(`updated a vacation with id ${updatedVacation.id}`)
            navigate(`/vacations`);

        } catch (err) {
            notify.error(err);
        }
    }

    return (
        <div className="EditVacation">
            <h2>Edit Vacation</h2>
            <form onSubmit={handleSubmit(submitVacationData)}>

                <label>destination:</label>
                <input type="text" {...register('destination')} />

                
                <label>description:</label>
                <input type="text" {...register('destination')} />

                <label>startDate:</label>
                <input type="date" {...register('startDate')} />

                <label>endDate:</label>
                <input type="date" {...register('endDate')} />

                <label>Price:</label>
                <input type="number" step="0.01" {...register('price')} />

                <label>Image:</label>
                <input type="file" accept="image/*" {...register('image')} />

                <ImageWatched control={control} />
                <button>update</button>

            </form>

        </div>
    );
}

export default EditVacation;
