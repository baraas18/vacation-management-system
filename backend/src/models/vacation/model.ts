import DTO from "./dto";

export default interface Model {
    // getAll(): Promise<DTO[]>;
    getOne(id: string): Promise<DTO>;
    add(vacation: DTO): Promise<DTO>;
    update(vacation: DTO): Promise<DTO>;
    delete(id: string): Promise<boolean>;
    getAllVacationsByUser(userId: string): Promise<DTO[]>;
}