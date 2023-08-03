import Person from "./person.tsx";

interface PositionModel {
    position: [{
        id: string,
        name: string,
        created_at: string,
        person: [],
        positionColor: string
    }]
}

const positionStyles = {
    positionContainer: {
        width: '25%',
        opacity: '1'
    },
    positionBox: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '1rem',
        margin: '0 0.5rem 1.5rem 0.5rem',
        borderRadius: '5px'
    },
    textStyles: {
        fontSize: '1rem',
        letterSpacing: '1px',
        textTransform: 'capitalize',
        fontWeight: 600
    }
}

function hexToRgba(hex) {
    if(!hex.includes('rgb')) {
        let rgbColor;
        const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
        hex = hex.replace(shorthandRegex, (m, r, g, b) => r + r + g + g + b + b);
        const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        rgbColor = result ? {r: parseInt(result[1], 16), g: parseInt(result[2], 16), b: parseInt(result[3], 16),} : null;
        return `rgba(${rgbColor.r}, ${rgbColor.g}, ${rgbColor.b}, ${0.4})`;
    }else {
        return hex;
    }
}


export default function Position(props: PositionModel) {
    return (
        <>
            {props.position.map((item) => (
                <div className='position-container' style={positionStyles.positionContainer}>
                    <div class='position-box' style={{ ...positionStyles.positionBox, backgroundColor: hexToRgba(item.positionColor), borderTop: `2px solid ${item.positionColor}` }}>
                        <p style={positionStyles.textStyles}>{item.name}</p>
                        <p style={positionStyles.textStyles}>{item.person.length}</p>
                    </div>
                    <Person person={item.person}/>
                </div>
            ))}
        </>
    );
}