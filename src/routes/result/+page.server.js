import { Property } from '$lib/server/db.js';

export async function load({ }) {
    return {
        properties: await Property.readAllProperties(),
    };
}