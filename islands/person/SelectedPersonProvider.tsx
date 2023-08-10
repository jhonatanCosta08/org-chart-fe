import {PageProps} from "https://deno.land/x/fresh@1.3.0/src/server/types.ts";
import {useState} from "https://esm.sh/stable/preact@10.15.1/denonext/hooks.js";
import {SelectedPerson} from "./selectedPerson.ts";

export default function SelectedPersonProvider(props: PageProps) {
    const [person, setPerson] = useState({});
    const [selected, setSelected] = useState(false);

    return (
        <SelectedPerson.Provider value={{person, setPerson, selected, setSelected}}>
            {props.children}
        </SelectedPerson.Provider>
    )
};