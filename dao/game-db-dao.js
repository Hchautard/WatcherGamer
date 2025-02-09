import { GameDao } from "./game-dao.js";

export class GameDbDao extends GameDao {

    constructor(db) {
        super(db);
    }

    getGameById(id) {
        return new Promise((resolve, reject) => {
            this.db.query("SELECT * FROM game WHERE id = ?", [id], function (err, result) {
                if (err) {
                    reject(err); 
                } else {
                    resolve(result); 
                }
            });
        });
    }

    createGame(game) {
        return new Promise((resolve, reject) => {
            this.db.query(`INSERT INTO game (name, description) VALUES (?, ?)`, [game.name, game.description], function (err, result) {
                if (err) {
                    reject(err); 
                } else {
                    resolve(result); 
                }
            });
        });
    }
}