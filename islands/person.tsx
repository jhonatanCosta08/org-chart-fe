import IconEye from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/eye.tsx"
import IconMail from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/mail.tsx"
import IconMapPin from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/map-pin.tsx"
import IconBriefcase from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/briefcase.tsx"
import {getPersonById} from "../api/people.ts";


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
            created_at: string,
            positionId: string,
            personPositionName: string,
            personDescription: string,
            joinedDate: string
        }
    ]
}

const personStyles = {
    personCardContainer: {
        borderRadius: '5px',
        boxShadow: '0 0 6px #5B5B5B',
        backgroundColor: '#fff',
        padding: '0.5rem',
        margin: '1rem 0.5rem',
    },
    personProfileInfo: {
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: '0.8rem',
        marginBottom: '0.8rem'
    },
    profileImg: {
        width: '15%',
        borderRadius: '50%',
        marginRight: '0.5rem'
    },
    profileName: {
        fontSize: '1.2rem',
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
    },
    personPositionNameText: {
        fontSize: '0.8rem',
        letterSpacing: '1px',
        fontWeight: '400',
        color: '#737373',
        display: 'contents',
        alignItems: 'center'
    },
    personIconsContainer: {
        textAlign: 'end'
    },
    personIcon: {
        color: '#a1a1a1',
        cursor: 'pointer'
    }
}

async function showPersonDetails(person) {
    if(person) {
        const personRes = await getPersonById(person.id);
        console.log('personRes: ', personRes);
    }
}

export default function Person(props: PersonModel) {
    return (
    <>
        {
            props.person.map((item) => (
                <>
                    <div class='person-card-container' style={personStyles.personCardContainer}>
                        <div class='person-profile-info' style={personStyles.personProfileInfo}>
                            <img src={item.photo} alt={item.name} style={personStyles.profileImg}/>
                            <p style={personStyles.profileName}>
                                {item.name} <br/>
                                <p style={personStyles.personPositionNameText}><IconBriefcase class="inline-block w-4 h-4"/> <em>{item.personPositionName}</em></p>
                            </p>
                        </div>

                        <div class='person-dedscription-items'>
                            <p style={personStyles.profileDescription}><IconMail class="inline-block w-4 h-4" /> {item.email}</p>
                            <p style={personStyles.profileDescription}><IconMapPin  class="inline-block w-4 h-4" /> {item.city}</p>
                        </div>

                        <div class='person-icons' style={personStyles.personIconsContainer}>
                            <a style={personStyles.personIcon} onClick={() => showPersonDetails(item)}><IconEye class="inline-block w-6 h-6"/></a>
                        </div>
                    </div>
                </>
            ))
        }
    </>
    );
}
