import Model from "./model";
import CredentialsDTO from './credentials-dto';
import UserDTO from './user-dto';
import { OkPacketParams } from "mysql2";
import query from "../../db/mysql";
import config from "config";
import { hashPassword } from "../../utils/crypto";
import mysql from 'mysql2';
import IdDTO from "./id-dto";
import { v4 } from 'uuid';



class User implements Model {

    public async getOne(id: string): Promise<UserDTO> {
        // id = '"3"; drop table users;' 
        console.log(id);
        
        const user = (await query(`
            SELECT  id,
                    firstName,
                    lastName,
                    email,
                    password,
                    role
            FROM    users  
            WHERE   id = ?
        `, [id]))[0];
        console.log(user);
        
        return user;
    }

    public async login(credentials: CredentialsDTO): Promise<UserDTO> {
        const { email, password } = credentials;
        
        const user = (await query(`
        SELECT  id,
                firstName,
                lastName,
                email,
                password,
                role
        FROM    users  
            WHERE   email = ?
            AND     password = ?
        `,[ email, hashPassword(password, config.get<string>('app.secret'))]))[0];
        return user;
    }

    public async signup(user: UserDTO): Promise<UserDTO> {
        const id = v4();
        const { firstName, lastName, email, password } = user;
        const result: OkPacketParams = await query(`
            INSERT INTO users(id, firstName, lastName, email, password, role) 
            VALUES(?,?,?,?,?,?);
        `, [id,firstName, lastName, email, hashPassword(password, config.get<string>('app.secret')), "USER"])

        return this.getOne(id);
    }
}

const user = new User();
export default user;