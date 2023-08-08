import {SelectedPerson} from "../../contexts/selectedPerson.ts";
import {useContext} from "https://esm.sh/stable/preact@10.15.1/denonext/hooks.js";

export default function Drawer() {
    const person = useContext(SelectedPerson);
    return (
        <>
            <p>{person.person.name}</p>
        </>
    );
}