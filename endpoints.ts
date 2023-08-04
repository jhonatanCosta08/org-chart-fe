import {environment} from "./environments/environment.ts"

export class Endpoints {

    //Person routes
    static getPersonById(id: string): string {
        return `${environment.baseUrl}/person/${id}`;
    }

    //Positions routes
    static getAllPositions(): string {
        return `${environment.baseUrl}/position`;
    }

}