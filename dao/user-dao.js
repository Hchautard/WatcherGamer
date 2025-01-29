
export class UserDao {

    constructor(db) {
        if (this.constructor === UserDao) {
            throw new TypeError('Abstract class "UserDao" cannot be instantiated directly.');
        }
    }

    getUserById(id) {
        throw new Error('Abstract method "getUserById" !');
    }

    getUserByUsername(username) {
        throw new Error('Abstract method "getUserByUsername" !');
    }

    createUser(user) {
        throw new Error('Abstract method "createUser" !');
    }

}
