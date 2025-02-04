import FactoryDAO from '../dao/factory-dao.js';
const factoryDAO = new FactoryDAO();
factoryDAO.init();

export const createUser = async (req, next) => {
    try {
        const user = await factoryDAO.getUserDao().createUser(req);
        if (!user) {
            throw new Error("User not created");
        }
        return user;
    } catch (error) {
        console.error("Error creating user:", error);
        if (next) {
            return next(error); 
        }
        return { error: error.message || "Failed to create user" }; // Retourne un objet d'erreur lisible
    }
}

export const getUserById = async (req, next) => {
    try {
        const user = await factoryDAO.getUserDao().getUserById(req);
        if (!user) {
            throw new Error("User not found");
        }
        return user;
    } catch (error) {
        console.error("Error fetching user:", error);
        if (next) {
            return next(error);
        }
        return { error: error.message || "Failed to fetch user" };
    }
}

export const getUserByUsername = async (req, next) => {
    try {
        const user = await factoryDAO.getUserDao().getUserByUsername(req);
        if (!user) {
            throw new Error("User not found");
        }
        return user;
    } catch (error) {
        console.error("Error fetching user:", error);
        if (next) {
            return next(error); 
        }
        return { error: error.message || "Failed to fetch user" };
    }
};