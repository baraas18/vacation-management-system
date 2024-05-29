import axios from "axios";
import Vacation from "../models/Vacation";
import appConfig from "../utils/AppConfig";
import { VacationsAction, VacationsActionType, vacationsStore } from "../redux/VacationsState";


class Vacations {

    public async getAll(): Promise<Vacation[]> {

        // get the vacations from redux
        let vacations = vacationsStore.getState().vacations;

        if (vacations.length === 0) {
            // get the vacations from remote server
            const response = await axios.get<Vacation[]>(appConfig.vacationsUrl);

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

    public async getOne(id: string ): Promise<Vacation | undefined> {

        let vacations = vacationsStore.getState().vacations;

        let vacation = vacations.find(v => v.id === id)

        if (!vacation) {

            await this.getAll();

            vacations = vacationsStore.getState().vacations;

            vacation = vacations.find(v => v.id === id)

            // // get a vacation from remote server
            // const response = await axios.get<Vacation>(appConfig.vacationsUrl + `/${id}`);

            // // extract the data from the response
            // vacation = response.data;
        }

        return vacation;

    }

    public async addVacation(vacation: Vacation): Promise<Vacation> {
        const config = {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }
        const response = await axios.post<Vacation>(appConfig.vacationsUrl, vacation, config);

        const addedVacation = response.data;

        // create an AddVacation action for redux
        const action: VacationsAction = {
            type: VacationsActionType.AddVacation,
            payload: addedVacation
        }

        // perform the action on redux
        vacationsStore.dispatch(action);

        return addedVacation;

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

    public async editVacation(vacation: Vacation): Promise<Vacation> {
        const config = {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }


        console.log(vacation);

        const response = await axios.put<Vacation>(appConfig.vacationsUrl + `/${vacation.id}`, vacation, config);

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

}

// singleton
const vacations = new Vacations();
export default vacations;