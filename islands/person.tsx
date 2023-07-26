import {useState} from "https://esm.sh/stable/preact@10.15.1/denonext/hooks.js";

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
        fontSize: '0.6rem',
        letterSpacing: '2px',
        fontWeight: '500',
        color: '#a1a1a1'
    }
}


export default function Person(props: PersonModel) {
    const [enabled, setEnabled] = useState(false);
    return (
    <>
        <div class='person-card-container' style={personStyles.personCardContainer}>
            <h1 style={personStyles.profileName}>Project Manager</h1>

            <div class='person-profile-info' style={personStyles.personProfileInfo}>
                <img src='https://ca.slack-edge.com/T01NM46J0A0-U0201D2AM6E-26b028fc09ca-512' alt="" style={personStyles.profileImg}/>
                <p style={personStyles.profileName}>Daniel Anhelli</p>
            </div>

            <div class='person-description-container'>
                <p style={personStyles.profileDescription}>daniel.anhelli@aoatechpartners.com.br</p>
                <p style={personStyles.profileDescription}>Joined in march 2020 <span>/ Curitiba</span></p>
            </div>

            <div class='person-btn-container'>
                <button onClick={() => setEnabled(!enabled)} type='button'>1</button>
            </div>
        </div>

        {/*<div style={{ display: enabled  ? 'block' : 'none' }} class='expanded-person'>*/}
        {/*    <div className='person-card-container' style={personStyles.personCarContainer}>*/}
        {/*        <div className='position-name-container'>*/}
        {/*            <h1 style={personStyles.positionName}>Frontend developer</h1>*/}
        {/*        </div>*/}

        {/*        <div className='person-info-container' style={personStyles.personInfoContainer}>*/}
        {/*            <div style={personStyles.profilePicture} className='person-profile-picture'>*/}
        {/*                <img style="border-radius: 10px"*/}
        {/*                     src='https://ca.slack-edge.com/T01NM46J0A0-U02FHLWHL6T-e8aff7fe0ae7-512'*/}
        {/*                     alt=""/>*/}
        {/*            </div>*/}

        {/*            <div className='person-profile-info'>*/}
        {/*                <p style={personStyles.positionName}>Jhonatan Costa</p>*/}
        {/*                <p style={personStyles.personSubInfo}>jhonatan.costa@aoatehpartners.com</p>*/}
        {/*                <p style={personStyles.personSubInfo}>Joined in march 2021 <span>/ Curitiba</span></p>*/}
        {/*            </div>*/}
        {/*        </div>*/}
        {/*    </div>*/}
        {/*</div>*/}
    </>
    );
}