import FactoryDAO from '../dao/factory-dao.js';
const factoryDAO = new FactoryDAO();
factoryDAO.init();

export const createUser = async (req, next) => {
    try {
        const user = await factoryDAO.getUserDao().createUser(req);
        return user;
    } catch (error) {
        return error;
    }
}

export const getUserById = async (req, next) => {
    try {
        const user = await factoryDAO.getUserDao().getUserById(req);
        return user;
    } catch (error) {
        return error;
    }
}

export const getUserByUsername = async (req, next) => {
    try {
        const user = await factoryDAO.getUserDao().getUserByUsername(req);
        return user;
    } catch (error) {
        return error;
    }
}