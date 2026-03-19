import { Request, Response, NextFunction } from "express";
import * as resourceService from "../services/resourceServices";
import { HTTP_STATUS } from "../../../constants/httpConstants";
import { Resource } from "../models/resourceModel";

/**
 * Handles getting all resources with count.
 * @param {Request} req - The request object.
 * @param {Response} res - The response object.
 * @param {NextFunction} next - The next middleware function.
 * @returns {Promise<void>}
 */
export const getAllResources = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const resources = resourceService.getAllResources();
        res.status(HTTP_STATUS.OK).json({
            message: "Resources retrieved",
            count: resources.length,
            data: resources,
        });
    } catch (error: unknown) {
        next(error);
    }
};

/**
 * Handles creating a new resource (requires title, type, url).
 * @param {Request} req - The request object.
 * @param {Response} res - The response object.
 * @param {NextFunction} next - The next middleware function.
 * @returns {Promise<void>}
 */
export const createResource = (req: Request, res: Response, next: NextFunction) => {
    try {
        const resourceData: Omit<Resource, "id"> = req.body as Omit<Resource, "id">;
        const resource: Resource = resourceService.createResource(resourceData);

        res.status(HTTP_STATUS.CREATED).json({
            message: "Resource created",
            data: resource,
        });
    } catch (error: unknown) {
        next(error);
    }
};

/**
 * Handles getting a resource by id.
 * @param {Request} req - The request object.
 * @param {Response} res - The response object.
 * @param {NextFunction} next - The next middleware function.
 * @returns {Promise<void>}
 */
export const getResourceById = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    const resourceId = Number(req.params.id);

    try {
        const resource = await resourceService.getResourceById(resourceId);

        if (!resource) {
            res.status(HTTP_STATUS.NOT_FOUND).json({
                message: `Resource with id ${resourceId} not found`,
            });
            return;
        }

        res.status(HTTP_STATUS.OK).json({
            message: "Resource retrieved successfully",
            data: resource,
        });
    } catch (error: unknown) {
        next(error);
    }
};

/**
 * Handles updating a resource.
 * @param {Request} req - The request object.
 * @param {Response} res - The response object.
 * @param {NextFunction} next - The next middleware function.
 * @returns {Promise<void>}
 */
/**
 * export const updateResource = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    try {
        const event: Event = await eventService.updateEventById(req.params.id as string, req.body);
        res.status(HTTP_STATUS.OK).json(successResponse(event, "Event updated"));
    } catch (error: unknown) {
        next(error);
    }
};
*/

/**
 * Handles deleting a resource.
 * @param {Request} req - The request object.
 * @param {Response} res - The response object.
 * @param {NextFunction} next - The next middleware function.
 * @returns {Promise<void>}
 */
/**
 * export const deleteResource = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    try {
        await eventService.deleteEventById(req.params.id as string);
        res.status(HTTP_STATUS.OK).json(successResponse({}, "Event deleted"));
    } catch (error: unknown) {
        next(error);
    }
};
*/
