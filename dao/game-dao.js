
export class GameDao {

    constructor(db) {
        if (this.constructor === GameDao) {
            throw new TypeError('Abstract class "GameDao" cannot be instantiated directly.');
        }
    }

    getGameById(id) {
        throw new Error('Abstract method "getGameById" !');
    }

    createGame(game) {
        throw new Error('Abstract method "createGame" !');
    }

}