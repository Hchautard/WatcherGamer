import mysql from 'mysql';
import { UserDbDao } from './user-db-dao.js';
import { GameDbDao } from './game-db-dao.js';

export default class FactoryDAO {

    // init db
    constructor() {
        
    }

    init() {
        this.db = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: '',
            database: 'watcher_gamer',
            port: 3306
        });
        
        this.db.connect((err) => {
            if (err) {
                console.error('error connecting: ' + err.stack);
                return;
            }
            console.log('connected as id ' + this.db.threadId);
        });
    }

    getUserDao() {
        return new UserDbDao(this.db);
    }

    getGameDao() {
        return new GameDbDao(this.db);
    }
}