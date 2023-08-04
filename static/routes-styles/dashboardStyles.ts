export const dashboardStyles = {
    dashboardContainer: {
        height: '100vh',
        backgroundColor: 'rgba(109, 207, 246, 0.3)',
        display: 'flex',
    },
    positionContainer: {
        minWidth: '80%',
        display: 'flex',
        padding: '1.5rem',
        width: '100%',
        overflowX: 'scroll',
        overflowY: 'scroll',
    },
    titleContainer: {
        textAlign: 'center',
        width: '100%',
        margin: '1rem 2rem 2rem 2rem'
    },
    dashboadTitle: {
        fontSize: '2rem',
        letterSpacing: '1px',
        textTransform: 'uppercase',
        fontWeight: 500
    }
}

export const drawerSyle = {
    drawerContainer: {
        width: '15%',
        height: '100%',
        maxHeight: '100vh',
        backgroundColor: '#cecece',
        boxShadow: '-1px 0px 5px rgba(0, 0, 0, 0.2)',
        transition: 'transform 0.3s ease',
        padding: '1rem'
    },
    drawerContainerOpen: {
        visibility: 'visible',
        transition: 'transform 0.3s ease',
    },
    drawerContainerClose: {
        visibility: 'hidden',
        transition: 'transform 0.3s ease',
    }
}