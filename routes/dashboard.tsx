import {getAllPositions} from "../api/position.ts";
import Position from "../islands/position/position.tsx";
import {dashboardStyles} from "../static/routes-styles/dashboardStyles.ts"

export default async function Dashboard() {
    const positionResp = await getAllPositions();
    return (
        <main>
            <div class='dashboard-container' style={dashboardStyles.dashboardContainer}>
                <div class='org-chart-title-container' style={dashboardStyles.titleContainer}>
                    <h1 style={dashboardStyles.dashboadTitle}>Tunts Rocks - Org chart</h1>
                </div>

                <div class='position-container' style={dashboardStyles.positionContainer}>
                    <Position position={positionResp} />
                </div>
            </div>
        </main>
    );
}