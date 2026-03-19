import resources, { Resource } from "../models/resourceModel";

/**
 * Retrieves all resources
 * @returns Array of all resources
 */
export const getAllResources = (): Resource[] => {
    return structuredClone(resources);
};

/**
 * Creates a new resource
 * @param resourceData - The data for the new resource (title, type, url) 
 */
export const createResource = (resourceData: Omit<Resource, "id">) => {
    const newResource: Resource = { id: resources.length + 1, ...resourceData};

    resources.push(newResource);
    return newResource;
};

/**
 * Retrieves resource by id
 * @returns Resource with specified id
 */
export const getResourceById = async(id: number): Promise<Resource | undefined> => {
    return resources.find(resource => resource.id === id)
};

/**
 * Updates a resource's information
 * @param id - The id of the resource to update
 * @param resourceData - The data to update the resource with
 * @returns The updated resource
 */
/**
 * export const updateResource = async(id: number, resourceData: Partial<Pick<Resource, "phone" | "email">>    
): Promise<Resource | null> => {
    const index: number = resources.findIndex((resource: Resource) => resource.id === id);

    if (index === -1) {
        return null;
    }

    resources[index] = {
        ...resources[index],
        ...resourceData
    };

    return structuredClone(resources[index]);
};
*/

/**
 * Deletes a resource by id
 * @param id - The id of the resource to delete
 * @returns The deleted resource
 */
/** 
 * export const deleteResource = async(id: number): Promise<Resource | null> => {
    const index: number = resources.findIndex((resource: Resource) => resource.id === id);

    if (index === -1) {
        return null;
    }

    const deletedResource = resources[index];
    resources.splice(index, 1);
    return structuredClone(deletedResource);
};
*/
