import {PositionModel} from "../interfaces/PositionModel.ts";
import {getAllPositions} from "../services/position.service.ts";
import {dashboardStyles, drawerSyle} from "../static/routes-styles/dashboardStyles.ts";
import Position from "../islands/position/position.tsx";
import Drawer from "../islands/drawer/drawer.tsx";
import SelectedPersonProvider from "../islands/SelectedPersonProvider.tsx";


export const handler: Handlers<User | null> = {
    async GET(_, ctx) {
        const resp = await getAllPositions();
        if (resp.status === 404) return ctx.render(null);
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
                <div className='drawer-container' style={drawerSyle.drawerContainer}>
                    <Drawer/>
                </div>

                <div className='position-container' style={dashboardStyles.positionContainer}>
                    <Position position={data} />
                </div>
            </div>
            </SelectedPersonProvider>
        </main>
    );
}