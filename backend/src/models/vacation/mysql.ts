import { OkPacketParams } from "mysql2";
import query from "../../db/mysql";
import DTO from "./dto";
import Model from "./model";
import { v4 } from 'uuid';


class Vacation implements Model {
    // public async getAll(): Promise<DTO[]> {
    //     const vacations = await query(`
    //         SELECT  id,
    //                 destination,
    //                 description,
    //                 startDate,
    //                 endDate,
    //                 price,
    //                 imageName
    //         FROM    vacations
    //         ORDER BY startDate
    //     `)
    //     return vacations;
    // }

    
    public async getAllVacationsByUser(userId): Promise<DTO[]> {
        const vacations = await query(`
        SELECT v.id,
               v.destination,
               v.description,
               v.startDate,
               v.endDate,
               v.price,
               v.imageName,
               count(f.userId) as followersCount,
               (select count(*) from followers where vacationId = v.id and userId = ?) as isFollower
            FROM vacations AS v
            LEFT JOIN followers AS f
            ON f.vacationId = v.id
            GROUP BY v.id
            ORDER BY startDate
        `, [userId])
        return vacations;
    }
    public async getOne(id: string): Promise<DTO> {
        const vacations = await query(`
        SELECT  id,
                destination,
                description,
                startDate,
                endDate,
                price,
                imageName
        FROM    vacations
            WHERE   id = ?
        `, [id]);
        return vacations[0];
    }

    public async getOneByUser(vacationId: string, userId: string): Promise<DTO> {
        const vacations = await query(`
        SELECT v.id,
               v.destination,
               v.description,
               v.startDate,
               v.endDate,
               v.price,
               v.imageName,
               count(f.userId) as followersCount,
               (select count(*) from followers where vacationId = v.id and userId = ?) as isFollower
            FROM vacations AS v
            LEFT JOIN followers AS f
            ON f.vacationId = v.id
            WHERE v.id = ?
            GROUP BY v.id
        `, [userId, vacationId]);
        return vacations[0];
    }

    public async add(vacation: DTO): Promise<DTO> {
        const { destination, description, startDate, endDate, price, imageName } = vacation;
        const id = v4();
        const result: OkPacketParams = await query(`
            INSERT INTO vacations(id, destination, description, startDate, endDate, price, imageName) 
            VALUES(?,?,?,?,?,?,?) 
        `, [id, destination, description, startDate, endDate, price, imageName]);
        console.log(result);

        return this.getOne(id);
    }

    public async update(vacation: DTO): Promise<DTO> {
        const { id, destination, description, startDate, endDate, imageName } = vacation;
        await query(`
            UPDATE  vacations
            SET     destination = ?, 
                    description = ?,
                    startDate = ?,
                    endDate = ?,
                    imageName = ?

            WHERE   id = ?
        `, [destination, description, startDate, endDate, imageName, id]);
        return this.getOne(id);
    }

    public async delete(id: string): Promise<boolean> {
        const result: OkPacketParams = await query(`
            DELETE FROM vacations
            WHERE       id = ?
        `, [id]);
        return Boolean(result.affectedRows);
    }

    public async addFollow(vacationId: string, userId: string): Promise<DTO> {
        await query(
            `INSERT INTO followers (userId, vacationId) VALUES (?, ?)`,
            [userId, vacationId]);
        return this.getOneByUser(vacationId, userId);
    }

    public async removeFollow(vacationId: string, userId: string): Promise<DTO> {
        await query(
            `DELETE FROM followers WHERE userId = ? AND vacationId = ? `,
            [userId, vacationId]);
        return this.getOneByUser(vacationId, userId);
    }

}

const vacation = new Vacation();
export default vacation;