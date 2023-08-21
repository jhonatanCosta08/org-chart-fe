import {PositionModel} from "../interfaces/PositionModel.ts";
import {getAllPositions} from "../services/position.service.ts";
import {dashboardStyles} from "../static/routes-styles/dashboardStyles.ts";
import Position from "../islands/position/position.tsx";
import Drawer from "../islands/drawer/drawer.tsx";
import SelectedPersonProvider from "../islands/person/SelectedPersonProvider.tsx";
import {Handlers, PageProps} from "https://deno.land/x/fresh@1.3.0/src/server/types.ts";


export const handler: Handlers<User | null> = {
    async GET(_, ctx): Promise<PositionModel[]> {
        const resp = await getAllPositions();
        const position = await resp;
        return ctx.render(position);
    },
};

export default function Dashboard({data}: PageProps<PositionModel[]>) {
    if (!data) return <div>Loading...</div>;

    return (
        <main>
            <SelectedPersonProvider>
            <div className='dashboard-container' style={dashboardStyles.dashboardContainer}>
                <Drawer/>
                <div className='position-container' style={dashboardStyles.positionContainer}>
                    <Position position={data} />
                </div>
            </div>
            </SelectedPersonProvider>
        </main>
    );
}