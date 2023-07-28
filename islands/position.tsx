import Person from "./person.tsx";

interface PositionModel {
    position: [{
        id: string,
        name: string,
        created_at: string,
        person: []
    }]
}

const positionStyles = {
    positionContainer: {
        width: '25%'
    }
}


export default function Position(props: PositionModel) {
    return (
        <>
            {props.position.map((item) => (
                <div className='position-container' style={positionStyles.positionContainer}>
                    <p>{item.name}</p>
                    <Person person={item.person}/>
                </div>
            ))}
        </>
    );
}