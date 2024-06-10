import DTO from "./dto";

export default interface Model {
    // getAll(): Promise<DTO[]>;
    getOne(id: string): Promise<DTO>;
    add(vacation: DTO , userId: string): Promise<DTO[]>;
    update(vacation: DTO , userId: string): Promise<DTO[]>;
    delete(id: string): Promise<boolean>;
    getAllVacationsByUser(userId: string): Promise<DTO[]>;
    addFollow(vacationId: string, userId: string): Promise<DTO>;
    removeFollow(vacationId: string, userId: string): Promise<DTO>;
}