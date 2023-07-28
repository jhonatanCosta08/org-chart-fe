import Person from "./person.tsx";

interface PositionModel {
    position: [{
        id: string,
        position: string,
        createdAt: string,
        updatedAt: string,
        people: []
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
                    <p>{item.position}</p>
                    <Person person={item.people}/>
                </div>
            ))}
        </>
    );
}