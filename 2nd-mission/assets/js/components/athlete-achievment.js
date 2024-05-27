import {BadmintonAthleteDataAchivement, TennisAthleteDataAchivement, GolfAthleteDataAchivement, SnowboardDataAchievement} from '../data/athlete-achiev-data.js'

const achievDataSource = {
    'listBadminton-data' : BadmintonAthleteDataAchivement,
    'listTennis-data' : TennisAthleteDataAchivement,
    'listGolf-data' : GolfAthleteDataAchivement,
    'listSnowbaord-data' : SnowboardDataAchievement
}

const UlistContainer = (listAchievements) => {
    return `
    <ul class=" md:flex md:flex-wrap mb-[2.75rem] text-[#1f2427] font-[Figtree] break-word">
        ${listAchievements.map((contentli) =>`
        
        <li class="lis">
            <span class="circle ">
                ${contentli.date} 
            </span >${contentli.des}<span class="italic">${contentli.year}</span >
        </li>
        `).join("")}
    </ul>
    `
}

class ListComponent extends HTMLElement {
    connectedCallback(){
        const dataAtt = this.getAttribute("data-source")
        const dataSourceKey = achievDataSource[dataAtt]
        this.innerHTML = UlistContainer(dataSourceKey)
    }
}
customElements.define("li-achievement", ListComponent )
