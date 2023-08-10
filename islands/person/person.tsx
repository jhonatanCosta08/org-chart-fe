import IconEye from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/eye.tsx"
import IconMail from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/mail.tsx"
import IconMapPin from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/map-pin.tsx"
import IconBriefcase from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/briefcase.tsx"
import {getPersonById} from "../../services/person.service.ts";
import IconChevronUp from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/chevron-up.tsx";
import IconChevronDown from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/chevron-down.tsx";
import {useContext, useState} from "https://esm.sh/stable/preact@10.15.1/denonext/hooks.js";
import {People} from "../people/people.tsx";
import {PersonModel} from "../../interfaces/PersonModel.ts";
import {personStyles} from "./person-styles.ts"
import {SelectedPerson} from "./selectedPerson.ts";


export default function Person(props: PersonModel) {
    const personContext = useContext(SelectedPerson);
    async function showPersonDetails(personProp): Promise<void> {
        if(personProp) {
            const personInfo =  await getPersonById(personProp.id);
            personContext.setPerson(personInfo);
            personContext.setSelected(true);
        }
    }
    const [minions, setMinions] = useState([]);
    async function toggleMinions(person) {
        if(minions.length) {
            setMinions([]);
        }else {
            setMinions(person.person || []);
            const personRes = await getPersonById(person.id);
            setMinions(personRes.person);
        }
    }
    const {name, photo, personPositionName, email, city, person} = props;
    return (
        <>
            <div className='person-card-container' style={personStyles.personCardContainer}>
                <div className='person-profile-info' style={personStyles.personProfileInfo}>
                    <img src={photo} alt={name} style={personStyles.profileImg}/>
                    <p style={personStyles.profileName}>
                        {name} <br/>
                        <p style={personStyles.personPositionNameText}><IconBriefcase class="inline-block w-4 h-4"/>
                            <em>{personPositionName}</em></p>
                    </p>
                </div>

                <div className='person-dedscription-items'>
                    <p style={personStyles.profileDescription} class='truncate'><IconMail class="inline-block w-4 h-4"/> {email}</p>
                    <p style={personStyles.profileDescription}><IconMapPin class="inline-block w-4 h-4"/> {city}</p>
                </div>

                <div className='person-icons' style={personStyles.personIconsContainer}>
                    <a style={personStyles.showDetailIcon} onClick={() => showPersonDetails(props)}><IconEye
                        class="inline-block w-6 h-6"/>
                    </a>
                    <a style={personStyles.personIcon} onClick={() => toggleMinions(props)} className={person?.length ? '' : 'hidden'}>
                        {person?.length}
                        {minions.length ? <IconChevronUp class="inline-block w-6 h-6"/> : <IconChevronDown class="inline-block w-6 h-6"/>}
                    </a>
                </div>
            </div>

            <div class='pl-4'>
                <People person={minions}/>
            </div>
        </>
    );
}

