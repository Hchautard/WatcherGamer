import FactoryDAO from "../dao/factory-dao.js";
const factoryDAO = new FactoryDAO();
factoryDAO.init();

export const setUserToken = async (req, next) => {
    try {
        const user = await factoryDAO.getUserDao().setUserToken(req);
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