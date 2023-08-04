import {People} from "../people/people.tsx";
import {PositionModel} from "../../interfaces/PositionModel.ts";
import {positionStyles} from "./position-styles.ts"

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
                    <People person={item.person}/>
                </div>
            ))}
        </>
    );
}