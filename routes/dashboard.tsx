import {fetchPositionData} from "./api/position.ts";
import Position from "../islands/position.tsx";

const dashboardStyles = {
    dashboardContainer: {
        display: 'flex',
        height: '100%',
        minHeight: '100vh',
        padding: '1.5rem'
    }
}

export default async function Dashboard() {
    const positionResp = await fetchPositionData();
    return (
        <main>
            <div class='dashboard-container' style={dashboardStyles.dashboardContainer}>
                <Position position={positionResp} />
            </div>
        </main>
    );
}