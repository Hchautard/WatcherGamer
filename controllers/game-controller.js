import FactoryDAO from "../dao/factory-dao";
const factoryDAO = new FactoryDAO();
factoryDAO.init();

export const createGame = async (req, next) => {
    try {
        const game = await factoryDAO.getGameDao().createGame(req);
        if (!game) {
            throw new Error("Game not created");
        }
        return game;
    } catch (error) {
        console.error("Error creating game:", error);
        if (next) {
            return next(error);
        }
        return { error: error.message || "Failed to create game" };
    }
};

export const getGameById = async (req, next) => {
    try {
        const game = await factoryDAO.getGameDao().getGameById(req);
        if (!game) {
            throw new Error("Game not found");
        }
        return game;
    } catch (error) {
        console.error("Error fetching game:", error);
        if (next) {
            return next(error);
        }
        return { error: error.message || "Failed to fetch game" };
    }
};

