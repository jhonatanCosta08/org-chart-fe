import {createContext} from "preact";

export type Person = {
    city: string;
    email: string;
    id: string;
    joinedDate: null;
    managerId: string;
    name: string;
    person: Person[];
    personDescription: null;
    personPositionName: string;
    phone: string;
    photo: string;
    positionId: string;
};

export const SelectedPerson = createContext({});