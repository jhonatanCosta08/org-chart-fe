import {useEffect, useState} from "preact/hooks";
import IconChevronUp from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/chevron-up.tsx";
import IconChevronDown from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/chevron-down.tsx";
import {JSX} from "preact";

interface PersonModel {
    person: {
        id: string,
        name: string,
        positionId: string,
        positionName: string,
        email: string,
        phone: string,
        city: string,
        photo: string
    }
}

const personStyles = {
    personCardContainer: {
        borderRadius: '5px',
        boxShadow: '0 0 6px #5B5B5B',
        backgroundColor: '#eaeaea',
        padding: '0.5rem',
        margin: '0.5rem',
    },
    personProfileInfo: {
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: '0.8rem',
        marginBottom: '0.8rem'
    },
    profileImg: {
        width: '20%',
        borderRadius: '10px',
        marginRight: '0.5rem'
    },
    profileName: {
        fontSize: '1rem',
        letterSpacing: '2px',
        fontWeight: '600',
        color: '#000'
    },
    profileDescription: {
        fontSize: '0.8rem',
        letterSpacing: '2px',
        fontWeight: '500',
        color: '#a1a1a1'
    },
    personBtnContainer: {
        textAlign: 'end',
        margin: '0.8rem 0 0.8rem 0'
    },
    personBtn: {
        cursor: 'pointer',
        border: '1px solid #000',
        margin: '0.3rem',
        padding: '0.3rem',
    }
}

function useToggle(state: boolean = false) {
    const [toggle, setToggle] = useState(state);
    return [toggle, setToggle.bind(null, !toggle)];
}

export default function Person(props: PersonModel) {
    const iconClass = 'inline-block w-5 h-5 transition group-hover:translate-x-0.5';
    const [enabled, toggleEnabled] = useToggle(false);
    const [icon, setIcon] = useState(new IconChevronDown({className: iconClass}));
    useEffect(() => {
        if(enabled) {
            setIcon(new IconChevronDown({className: iconClass}));
        }else {
            setIcon(new IconChevronUp({className: iconClass}));
        }
    }, [enabled]);
    return (
    <>
        <div class='person-card-container' style={personStyles.personCardContainer}>
            <h1 style={personStyles.profileName}>Project Manager</h1>

            <div class='person-profile-info' style={personStyles.personProfileInfo}>
                <img src='https://ca.slack-edge.com/T01NM46J0A0-U0201D2AM6E-26b028fc09ca-512' alt="" style={personStyles.profileImg}/>
                <p style={personStyles.profileName}>Daniel Anhelli</p>
            </div>

            <PersonDescription class='person-description-container' email='daniel.anhelli@aoatechpartners.com.br' joined='Joined in march 2020 ' city='Curitiba'/>

            <div class='person-btn-container' style={personStyles.personBtnContainer}>
                <a onClick={toggleEnabled} style={personStyles.personBtn}>
                    1 {icon}
                </a>
            </div>
        </div>

        <Batatinha hidden={!enabled} class='bg-red-50'/>
    </>
    );
}

export function Batatinha(props: JSX.HTMLAttributes) {
    return(
        <div {...props}>
            <div>
                <p>person here</p>
            </div>
        </div>
    );
}

type PersonDescriptionProps = {
    email: string,
    joined: string,
    city: string
};

export function PersonDescription(props: JSX.HTMLAttributes & PersonDescriptionProps){
    const {email, joined, city, ...remaining} = props;
    return(
        <div {...remaining}>
            <p style={personStyles.profileDescription}>{email}</p>
            <p style={personStyles.profileDescription}>{joined} <span>/ {city}</span></p>
        </div>
    );
}