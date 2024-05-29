import { OkPacketParams } from "mysql2";
import query from "../../db/mysql";
import DTO from "./dto";
import Model from "./model";
import { v4 } from 'uuid';


class Vacation implements Model {
    public async getAll(): Promise<DTO[]> {
        const vacations = await query(`
            SELECT  id,
                    destination,
                    description,
                    startDate,
                    endDate,
                    price,
                    imageName
            FROM    vacations
        `)
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
        const { id, destination, description, startDate, endDate, imageName} = vacation;
        await query(`
            UPDATE  vacations
            SET     destination = ?, 
                    description = ?,
                    startDate = ?,
                    endDate = ?,
                    imageName = ?

            WHERE   id = ?
        `, [destination, description, startDate, endDate, imageName, id ]);
        return this.getOne(id);
    }

    public async delete(id: string): Promise<boolean> {
        const result: OkPacketParams = await query(`
            DELETE FROM vacations
            WHERE       id = ?
        `, [id]);
        return Boolean(result.affectedRows) ;
    }

}

const vacation = new Vacation();
export default vacation;