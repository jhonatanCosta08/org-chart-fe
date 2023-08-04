import {getAllPositions} from "../api/position.ts";
import Position from "../islands/position/position.tsx";
import {dashboardStyles} from "../static/routes-styles/dashboardStyles.ts"
import {getPersonById} from "../api/person.ts";

export async function showPersonDetails(person) {
    if(person) {
        const personRes = await getPersonById(person.id);
        console.log('dash personRes: ', personRes);
    }
}

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