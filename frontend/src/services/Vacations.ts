import axios from "axios";
import Vacation from "../models/Vacation";
import appConfig from "../utils/AppConfig";
import { VacationsAction, VacationsActionType, vacationsStore } from "../redux/VacationsState";


class Vacations {

    public async getAllVacationsByUser(userId: string): Promise<Vacation[]> {

        // get the vacations from redux
        let vacations = vacationsStore.getState().vacations;

        if (vacations.length === 0) {
            // get the vacations from remote server
            const response = await axios.get<Vacation[]>(`${appConfig.vacationsUrl}/user/${userId}`);

            // const { data } = await axios.get<Vacation[]>(appConfig.vacationsUrl);
            // return data;

            // extract the data from the response
            vacations = response.data;

            // create an action to set the vacations into the state,
            // and set the action payload, to hold the vacations themselves
            const action: VacationsAction = {
                type: VacationsActionType.SetVacations,
                payload: vacations
            }

            // now all is left to do, is to send this action to redux
            vacationsStore.dispatch(action);
        }

        return vacations;
    }

    public async getOne(userId: string, id: string): Promise<Vacation | undefined> {

        let vacations = vacationsStore.getState().vacations;

        let vacation = vacations.find(v => v.id === id)

        if (!vacation) {

            await this.getAllVacationsByUser(userId);

            vacations = vacationsStore.getState().vacations;

            vacation = vacations.find(v => v.id === id)

            // // get a vacation from remote server
            // const response = await axios.get<Vacation>(appConfig.vacationsUrl + /${id});

            // // extract the data from the response
            // vacation = response.data;
        }

        return vacation;

    }

    public async addVacation(vacation: Vacation, userId: string): Promise<Vacation> {
        const config = {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }
        const response = await axios.post<Vacation>(appConfig.vacationsUrl + `/${userId}`, vacation, config);

        const vacations = response.data;

        // create an AddVacation action for redux
        const action: VacationsAction = {
            type: VacationsActionType.SetVacations,
            payload: vacations
        }

        // now all is left to do, is to send this action to redux
        vacationsStore.dispatch(action);

        return vacations;

    }

    public async deleteVacation(id: string): Promise<void> {

        await axios.delete(appConfig.vacationsUrl + `/${id}`);

        // create a DeleteVacation action for redux
        const action: VacationsAction = {
            type: VacationsActionType.DeleteVacation,
            payload: id
        }

        // perform the action on redux
        vacationsStore.dispatch(action);

    }

    public async updateFollow(vacationId: string, userId: string, isFollower: number): Promise<void> {

        let response;
        if (isFollower === 1) {
            response = await axios.delete(`${appConfig.vacationsUrl}/${vacationId}/${userId}`);
        } else {
            response = await axios.post(`${appConfig.vacationsUrl}/${vacationId}/${userId}`);
        }

        const updatedVacation = response.data;

        // create an UpdateVacation action for redux
        const action: VacationsAction = {
            type: VacationsActionType.UpdateVacation,
            payload: updatedVacation
        }

        // perform the action on redux
        vacationsStore.dispatch(action);

        return updatedVacation;

    }

    public async editVacation(vacation: Vacation, userId: string): Promise<Vacation> {
        const config = {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }

        let response;
        if (vacation.image) {
            response = await axios.put<Vacation>(appConfig.vacationsUrl + `/${vacation.id}/${userId}`, vacation, config);
        } else {
            response = await axios.patch<Vacation>(appConfig.vacationsUrl + `/${vacation.id}/${userId}`, vacation, config);
        }

        const vacations = response.data;

        // create an UpdateVacation action for redux
        const action: VacationsAction = {
            type: VacationsActionType.SetVacations,
            payload: vacations
        }

        // now all is left to do, is to send this action to redux
        vacationsStore.dispatch(action);

        return vacations;

    }

}

// singleton
const vacations = new Vacations();
export default vacations;