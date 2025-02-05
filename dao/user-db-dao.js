import { UserDao } from "./user-dao.js";

export class UserDbDao extends UserDao {

    constructor(db) {
        super();
        this.db = db;
    }

    async getUserById(id) {
        try {
            const result = await this.db.run(
                `SELECT * FROM users WHERE id = ?`, 
                [id]
            )
            return result;
        } catch (error) {
            console.log(error);
        }
    }

    getUserByUsername(username) {
        return new Promise((resolve, reject) => {
            this.db.query("SELECT * FROM user WHERE username = ?", [username], function (err, result) {
                if (err) {
                    reject(err); 
                } else {
                    resolve(result); 
                }
            });
        });
    }

    createUser(user) {
        return new Promise((resolve, reject) => {
            this.db.query(`INSERT INTO user (username, password) VALUES (?, ?)`, [user.username, user.password], function (err, result) {
                if (err) {
                    reject(err); 
                } else {
                    resolve(result); 
                }
            });
        });
    }

    setUserToken(req) {
        return new Promise((resolve, reject) => {
            this.db.query(`UPDATE user SET token = ? WHERE username = ?`, [req.token, req.username], function (err, result) {
                if (err) {
                    reject(err); 
                } else {
                    resolve(result); 
                }
            });
        });
    }

}