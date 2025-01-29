import mysql from 'mysql';
import { UserDbDao } from './user-db-dao.js';

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
        });
    }

    getUserDao() {
        return new UserDbDao(this.db);
    }
}