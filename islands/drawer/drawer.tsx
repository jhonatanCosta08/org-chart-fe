import IconX from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/x.tsx"
import IconMail from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/mail.tsx"
import IconMapPin from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/map-pin.tsx"
import IconBriefcase from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/briefcase.tsx"
import IconCalendar from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/calendar.tsx"
import IconPhone from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/phone.tsx"
import {SelectedPerson} from "../person/selectedPerson.ts";
import {useContext} from "https://esm.sh/stable/preact@10.15.1/denonext/hooks.js";
import {drawerStyle} from "./drawer-styles.ts";
import {PersonModel} from "../../interfaces/PersonModel.ts";

export default function Drawer() {
    const context = useContext(SelectedPerson);
    const person: PersonModel = context.person
    function hideDrawer(): void {
        context.setSelected(false);
    }
    return (
        <>
            <div className='drawer-container' style={drawerStyle.drawerContainer} hidden={!context.selected}>
                <div className='drawer-header' style={drawerStyle.drawerHeader}>
                    <img src="/img/logo-two.jpeg" alt="drawer-logo" style={drawerStyle.drawerHeaderImg}/>
                    <IconX class="inline-block w-6 h-6" style={drawerStyle.drawerHeaderIcon} onClick={hideDrawer}/>
                </div>

                <div className='person-info-container' style={drawerStyle.personInfoContainer}>
                    <img src={person.photo} alt="person-profile-picture" style={drawerStyle.personImg}/>
                    <p style={drawerStyle.personName}>{person.name}</p>
                </div>

                <div className='divisor' style={drawerStyle.drawerDivisor}></div>

                <div className='person-details'>
                    <p style={drawerStyle.personDetail} className='truncate'>
                        <IconMail class="inline-block w-4 h-4" style={drawerStyle.personDetailIcon}/> {person.email}
                    </p>
                </div>
                <div className='person-details'>
                    <p style={drawerStyle.personDetail} className='truncate'>
                        <IconMapPin class="inline-block w-4 h-4" style={drawerStyle.personDetailIcon}/> {person.city}
                    </p>
                </div>
                <div className='person-details'>
                    <p style={drawerStyle.personDetail} className='truncate'>
                        <IconBriefcase class="inline-block w-4 h-4" style={drawerStyle.personDetailIcon}/> {person.personPositionName}
                    </p>
                </div>
                <div className='person-details'>
                    <p style={drawerStyle.personDetail} className='truncate'>
                        <IconCalendar class="inline-block w-4 h-4" style={drawerStyle.personDetailIcon}/> {person.joinedDate}
                    </p>
                </div>
                <div className='person-details'>
                    <p style={drawerStyle.personDetail} className='truncate'>
                        <IconPhone class="inline-block w-4 h-4" style={drawerStyle.personDetailIcon}/> {person.phone}
                    </p>
                </div>

                <div className='divisor' style={drawerStyle.drawerDivisor}></div>

                <div className='rocker-description' style={drawerStyle.rockerContainer}>
                    <img src="/img/rocker.png" alt="rocker-description" style={drawerStyle.rockerImg}/>
                    <p style={drawerStyle.personName}>Rocker's Curiosity</p>
                    <p style={drawerStyle.rockerDescription}>{person.personDescription}</p>
                </div>
            </div>
        </>
    );
}