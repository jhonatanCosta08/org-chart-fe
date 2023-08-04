import Person from "../person/person.tsx";
import {PersonModel} from "../../interfaces/PersonModel.ts";

export function People({person}: PersonModel[]) {
    return (
        <>
            {
                person.map((item) => (
                    <Person {...item}/>
                ))
            }
        </>
    );
}