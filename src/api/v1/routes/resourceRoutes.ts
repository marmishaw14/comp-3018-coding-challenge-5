import express from "express";
import * as resourceController from "../controllers/resourceControllers";

const resourcesRouter = express.Router();

resourcesRouter.post(
    "/resources",
    resourceController.createResource
);

resourcesRouter.get(
    "/resources",
    resourceController.getAllResources
);

resourcesRouter.get(
    "/resources/:id",
    resourceController.getResourceById
);

/**
 * resourcesRouter.put(
    "/resources/:id",
    resourceController.updateResource
);
*/

/**
 * resourcesRouter.delete(
    "/resources/:id",
    resourceController.deleteResource
)
*/

export default resourcesRouter;