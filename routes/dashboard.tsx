import {fetchData} from "./api/position.ts";
import {PageProps} from "https://deno.land/x/fresh@1.3.0/src/server/types.ts";
import Person from "../islands/person.tsx";

interface Person {
    id: string,
    name: string,
    positionId: string,
    positionName: string,
    email: string,
    phone: string,
    city: string,
    photo: string
}


export const handler: Handlers<User | null> = {
    async GET(_, ctx) {
        const resp = await fetchData();
        if (resp.status === 404) {
            return ctx.render(null);
        }
        const person: Person = await resp;
        return ctx.render(person);
    },
};

export default function Dashboard({data}: PageProps<Position>) {
    if (!data) {
        return <div>Carregando...</div>;
    }

    return (
        <main>
            <div class='p-4 mx-auto max-w-screen-md`'>
                <Person data={data} />
            </div>
        </main>
    );
}