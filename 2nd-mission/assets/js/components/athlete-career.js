import {BadmintonAthleteData, TennisAthleteData, GolfAthleteData, SnowboardAthleteData} from '../data/athlete-career-data.js'

const dataSource = {
    'badminton-athleteData' : BadmintonAthleteData,
    'tennis-athleteData' : TennisAthleteData,
    'golf-athleteData' :    GolfAthleteData,
    'snowboard-athleteData' : SnowboardAthleteData
}

const AltheteCareerContainer = (contents) => {
    return `
    <div class="lg:pl-[90px] mt-[40px] lg:m-0  pb-[80px] relative flext flex-row " id="career">
        ${contents.map((content) => `
            <div class=" bg-[#f7f8f9] absolute  bottom-0 right-0  h-[40%] w-[105%]"></div>
                <!-- content part -->
                <div class="  text-center lg:text-left">
                    <!-- block title -->
                    <h2 class="text-[#1f2427] uppercase text-[26px] tracking-[4px] mb-[30px] ">Career</h2>
                    <!-- block info -->
                    <div class="text-[#737a7e] font-[Figtree] text-[17px] flex flex-column items-center lg:block lg:max-w-[960px] pb-[80px] relative">

                        <div class="box-border max-w-[1000px] text-left mx-auto lg:m-0">
                            <!-- content box -->
                            <div
                                class="flex justify-start flex-col bg-left-top bg-cover bg-no-repeat bg-scroll mx-0 mt-0 mb-[10px] px-[10px] py-[10px] box-border border-none border lg:w-[100%]">
                                <!-- container content -->
                                <div class="border-none border flex items-center flex-col px-[30px] py-0 lg:p-0 lg:block lg:mx-0  w-[100%]">
                                    ${content.athleteInfo.map((info) => ` 
                                        <p class=" mb-[24px] ">${info}</p>
                                    `).join("")}
                                    
                                    <p class="mb-[24px]">
                                        <span class="text-[12px] text-secondary-800 font-Figtree">
                                            <em>${content.athleteTitle}</em>
                                        </span>
                                    </p>
                                    <!-- imag wrapper -->
                                    <div
                                        class="relative flex flex-col items-center lg:block lg:right-[15px] mx-auto lg:mx-0 mb-[24px] py-0 px-[30px] lg:p-0  border max-w-[760px] lg:max-w-none lg:w-[100%]">
                                        <img class="w-[90%] lg:w-[810px]  max-w-[100%] lg:max-w-[90%] h-auto border-0 ml-[10px] "
                                            src="${content.athleteImg1}" alt="">
                                        <div
                                            class="absolute mx-auto mt-[300px] md:mt-[350px] lg:m-0 lg:top-[53px] lg:right-0 md:w-[65%] lg:w-[300px]  max-w-[100%] lg:max-w-[35%]  ">
                                            <img class="mb-[45px] w-[100%] "
                                                src="${content.athleteImg2}" alt="">
                                            <img class="w-[100%]"
                                                src="${content.athleteImg3}" alt="">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        
        `).join("")}

        
    </div>

    
    
    `
}


class AthleteCareer extends HTMLElement {
    connectedCallback(){
        const dataAtt = this.getAttribute('data-source')
        const dataSourceKey = dataSource[dataAtt]
        this.innerHTML = AltheteCareerContainer(dataSourceKey)
    }
}

customElements.define('althete-career', AthleteCareer)