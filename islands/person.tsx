import {useEffect, useState} from "preact/hooks";
import IconChevronUp from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/chevron-up.tsx";
import IconChevronDown from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/chevron-down.tsx";
import {JSX} from "preact";

interface PersonModel {
    person: [
        {
            id: string,
            name: string,
            email: string,
            phone: string,
            city: string,
            photo: string,
            managerId: string,
            createdAt: string,
            updatedAt: string,
            positionId: string
        }
    ]
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

function formatarData(data) {
    const dia = data.getDate().toString().padStart(2, '0'); // Obtém o dia e adiciona um zero à esquerda, caso seja necessário
    const mes = (data.getMonth() + 1).toString().padStart(2, '0'); // O mês é baseado em zero, por isso adicionamos 1, e em seguida adicionamos um zero à esquerda, se necessário
    const ano = data.getFullYear();
    return `${dia}/${mes}/${ano}`;
}

export default function Person(props: PersonModel) {
    console.log('props: ', props);
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
        {props.person.map((item) => (
            <div className='person-card-container' style={personStyles.personCardContainer}>
                {/*<h1 style={personStyles.profileName}>Project Manager</h1>*/}

                <div className='person-profile-info' style={personStyles.personProfileInfo}>
                    <img src={item.photo} alt={item.name} style={personStyles.profileImg}/>
                    <p style={personStyles.profileName}>{item.name}</p>
                </div>

                <PersonDescription class='person-description-container' email={item.email} joined={formatarData(new Date(item.createdAt))} city={item.city}/>

                {/*<div className='person-btn-container' style={personStyles.personBtnContainer}>*/}
                {/*    <a onClick={toggleEnabled} style={personStyles.personBtn}>*/}
                {/*        1 {icon}*/}
                {/*    </a>*/}
                {/*</div>*/}
            </div>
        ))}

        <SubPerson hidden={!enabled}/>
    </>
    );
}

export function SubPerson(props: JSX.HTMLAttributes) {
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