import {PositionModel} from "../interfaces/PositionModel.ts";
import {getAllPositions} from "../api/position.ts";
import {dashboardStyles, drawerSyle} from "../static/routes-styles/dashboardStyles.ts";
import Position from "../islands/position/position.tsx";
import {getPersonById} from "../api/person.ts";

export const handler: Handlers<User | null> = {
    async GET(_, ctx) {
        const resp = await getAllPositions();
        if (resp.status === 404) return ctx.render(null);
        const position = await resp;
        return ctx.render(position);
    },
};

export async function showPersonDetails(person) {
    if(person) {
        const personRes = await getPersonById(person.id);
        console.log('dashboard person: ', personRes);
    }
}

export default function Dashboard({data}: PageProps<PositionModel[]>) {
    if (!data) {
        return <div>Loading...</div>;
    }


    return (
        <main>
            <div className='dashboard-container' style={dashboardStyles.dashboardContainer}>
                <div className='drawer-container' style={drawerSyle.drawerContainer}>
                    <p>Drawer here...</p>
                </div>

                <div className='position-container' style={dashboardStyles.positionContainer}>
                    <Position position={data} />
                </div>
            </div>
        </main>
    );
}