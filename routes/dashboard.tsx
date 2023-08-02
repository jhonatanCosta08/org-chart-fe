import {fetchPositionData} from "../api/position.ts";
import Position from "../islands/position.tsx";

const dashboardStyles = {
    dashboardContainer: {
        height: '100%',
        minHeight: '100vh',
        padding: '1.5rem',
    },
    positionContainer: {
        display: 'flex',
    },
    titleContainer: {
        textAlign: 'center',
        width: '100%',
        margin: '1rem 2rem 2rem 2rem'
    },
    dashboadTitle: {
        fontSize: '2rem',
        letterSpacing: '1px',
        textTransform: 'capitalize',
        fontWeight: 500
    }
}

export default async function Dashboard() {
    const positionResp = await fetchPositionData();
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