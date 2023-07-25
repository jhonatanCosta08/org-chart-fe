import {useState} from "https://esm.sh/stable/preact@10.15.1/denonext/hooks.js";

interface Person {
    data: {
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
    personCarContainer: {
        backgroundColor: '#eaeaea',
        padding: '1rem',
        margin: '1rem',
        borderRadius: '5px',
        boxShadow: '0 0 6px #5B5B5B',
        width: '100%',
        maxWidth: '400px',
    },
    positionName: {
        fontSize: '1rem',
        letterSpacing: '2px',
        lineHeight: '24px',
        color: '#000',
        fontWeight: '700',
    },
    personInfoContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: '15px'
    },
    profilePicture: {
        marginRight: '10px'
    },
    personSubInfo: {
        fontSize: '0.8rem',
        letterSpacing: '1px',
        color: '#a6a6a6',
        fontWeight: '500',
    },
    personButtonContainer: {
        textAlign: 'end'
    },
    personBtn: {
        padding: '0 10px',
        margin: '5px',
        border: '1px solid #5B5B5B'
    }
}

export default function Person(props: Person) {
    const [enabled, setEnabled] = useState(false);
    return (
    <>
        <div className='person-card-container' style={personStyles.personCarContainer}>
            <div className='position-name-container'>
                <h1 style={personStyles.positionName}>Project Manager</h1>
            </div>

            <div className='person-info-container' style={personStyles.personInfoContainer}>
                <div style={personStyles.profilePicture} className='person-profile-picture'>
                    <img style="border-radius: 10px"
                         src='https://ca.slack-edge.com/T01NM46J0A0-U0201D2AM6E-26b028fc09ca-512'
                         alt=""/>
                </div>

                <div className='person-profile-info'>
                    <p style={personStyles.positionName}>Daniel Anhelli</p>
                    <p style={personStyles.personSubInfo}>daniel.anhelli@aoatechpartners.com.br</p>
                    <p style={personStyles.personSubInfo}>Joined in march 2020 <span>/ Curitiba</span></p>
                </div>
            </div>

            <div className='person-btn-container' style={personStyles.personButtonContainer}>
                <button onClick={() => setEnabled(!enabled)} style={personStyles.personBtn} type='button'>1</button>
            </div>
        </div>
        <div style={{ display: enabled  ? 'block' : 'none' }} class='expanded-person'>
            <div className='person-card-container' style={personStyles.personCarContainer}>
                <div className='position-name-container'>
                    <h1 style={personStyles.positionName}>Frontend developer</h1>
                </div>

                <div className='person-info-container' style={personStyles.personInfoContainer}>
                    <div style={personStyles.profilePicture} className='person-profile-picture'>
                        <img style="border-radius: 10px"
                             src='https://ca.slack-edge.com/T01NM46J0A0-U02FHLWHL6T-e8aff7fe0ae7-512'
                             alt=""/>
                    </div>

                    <div className='person-profile-info'>
                        <p style={personStyles.positionName}>Jhonatan Costa</p>
                        <p style={personStyles.personSubInfo}>jhonatan.costa@aoatehpartners.com</p>
                        <p style={personStyles.personSubInfo}>Joined in march 2021 <span>/ Curitiba</span></p>
                    </div>
                </div>
            </div>
        </div>
    </>
    );
}