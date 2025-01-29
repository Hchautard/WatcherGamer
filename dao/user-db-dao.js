import { UserDao } from "./user-dao.js";

export class UserDbDao extends UserDao {

    constructor(db) {
        super();
        this.db = db;
    }

    async getUserById(id) {
        try {
            const result = await this.db.run(
                `SELECT * FROM users WHERE id = ?`, [id]
            )
            return result;
        } catch (error) {
            console.log(error);
        }
    }

    async getUserByUsername(username) {
        console.log("dao:" + username + " " + this.db);
        try {
            const result = await this.db.run(
                `SELECT * FROM users WHERE username = ?`, [username]
            )
            return result;
        } catch (error) {
            console.log(error);
        }
    }

    async createUser(user) {
        try {
            const result = await this.db.run(
                `INSERT INTO users (username, password) VALUES (?)`, [user.username, user.password]
            )
            return result;
        } catch (error) {
            console.log(error);
        }
    }

}