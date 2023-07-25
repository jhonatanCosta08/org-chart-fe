import {fetchPositionData} from "../routes/api/position.ts";

interface Position {
    id: string,
    name: string,
    personList?: any[]
}

export const handler: Handlers<User | null> = {
    async GET(_, ctx) {
        const resp = await fetchPositionData();
        if (resp.status === 404) return ctx.render(null);
        const pos: Position = await resp;
        return ctx.render(pos);
    },
};

export default function Position(props: Position) {
    return (
        <>
            <div class='position-container'>

            </div>
        </>
    );
}