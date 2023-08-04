import {Endpoints} from "../endpoints.ts";


export async function getPersonById(id: string) {
    try {
        const response = await fetch(Endpoints.getPersonById(id));
        return await response.json();
    } catch (error) {
        console.error('Ocorreu um erro:', error);
        throw error;
    }
}