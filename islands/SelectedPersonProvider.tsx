import {PageProps} from "https://deno.land/x/fresh@1.3.0/src/server/types.ts";
import {useState} from "https://esm.sh/stable/preact@10.15.1/denonext/hooks.js";
import {SelectedPerson} from "../contexts/selectedPerson.ts";

export default function SelectedPersonProvider(props: PageProps) {
    const [person, setPerson] = useState({});

    return (
        <SelectedPerson.Provider value={{person, setPerson}}>
            {props.children}
        </SelectedPerson.Provider>
    )
};