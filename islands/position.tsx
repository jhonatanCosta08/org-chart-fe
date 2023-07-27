import Person from "./person.tsx";

interface PositionModel {
    position: {
        id: string,
        name: string
    },
    person: [];
}

const positionStyles = {
    positionContainer: {
        width: '25%'
    }
}


export default function Position(props: PositionModel) {
    return (
        <>
            <div class='position-container' style={positionStyles.positionContainer}>
                <p>Position name</p>
                <Person person={props.person}/>
            </div>
        </>
    );
}