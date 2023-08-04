import {Endpoints} from "../endpoints.ts";


export async function getAllPositions() {
    try {
        const response = await fetch(Endpoints.getAllPositions());
        return await response.json();
    } catch (error) {
        console.error('Ocorreu um erro:', error);
        throw error;
    }
}