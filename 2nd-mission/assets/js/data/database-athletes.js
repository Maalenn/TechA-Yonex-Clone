export function Bedmanton() {
    const names = ["VIKTOR AXELSEN", "CHEN YU FEI", "CAROLINA MARIN", 
                    "LUCAS MAZUR", "CHEN QING CHEN", "WANG CHANG", 
                    "BAEK HA NA", "JIA YI FAN", "SATWIKSAIRAJ RANKIREDDY", 
                    "RATACHANOK INTANO", "KUNLAVUT VIDIDSARN", "AN SE YOUNG", 
                    "AKANE YAMAGUCHI", "LI SHI FENG", "CHOU TIEN CHEN", 
                    "CHIRAG SHETTY", "LIANG WEI KENG", "LEE SO HEE"];
    const images = [
        "../assets/images/athletes/Contents/VIKTORAXELSEN_square.jpeg",
        "../assets/images/athletes/Contents/ChenYuFe_square.jpeg",
        "../assets/images/athletes/Contents/CarolinaMarin_square.jpeg ",
        "../assets/images/athletes/Contents/LUCAS_MAZUR_square.jpeg",
        "../assets/images/athletes/Contents/CHEN_QING_CHEN_square.jpeg",
        "../assets/images/athletes/Contents/WangChang_570x570.jpeg",
        "../assets/images/athletes/Contents/BaekHana_400x560.webp",
        "../assets/images/athletes/Contents/JIA_YI_FAN_square.jpeg",
        "../assets/images/athletes/Contents/SatwiksairajRankireddy_square.jpeg",
        "../assets/images/athletes/Contents/RatchanokIntanon_square.jpeg",
        "../assets/images/athletes/Contents/KUNLAVUT_VITIDSARN_square_1.jpeg",
        "../assets/images/athletes/Contents/AnSeyoung_square.jpeg",
        "../assets/images/athletes/Contents/yamaguchi_tall.jpeg",
        "../assets/images/athletes/Contents/LiShifeng_570x570.jpeg",
        "../assets/images/athletes/Contents/ChouTienChen_square.jpeg",
        "../assets/images/athletes/Contents/ChiragShetty_squarel_1.jpeg",
        "../assets/images/athletes/Contents/LiangWeikeng_570x570.jpeg",
        "../assets/images/athletes/Contents/LeeSohee_570x570.webp",
        // Repeat images if necessary
    ];
    const countries = ["DENMARK", "CHINA", "SPAIN", 
                    "FRANCE", "CHINA", "CHINA", 
                    "KOREA", "CHINA", "INDIA", 
                    "THAILAND", "THAILAND", "KOREA", 
                    "JAPAN", "CHINA", "CHINESE TAIPEI", 
                    "INDIA", "CHINA", "KOREA"];
    const links = [
        "../public/athlete-profile-badminton.html",
        "../public/athlete-profile-badminton.html",
        "../public/athlete-profile-badminton.html",
        "../public/athlete-profile-badminton.html",
        "../public/athlete-profile-badminton.html",
        "../public/athlete-profile-badminton.html",
        "../public/athlete-profile-badminton.html",
        "../public/athlete-profile-badminton.html",
        "../public/athlete-profile-badminton.html",
        "../public/athlete-profile-badminton.html",
        "../public/athlete-profile-badminton.html",
        "../public/athlete-profile-badminton.html",
        "../public/athlete-profile-badminton.html",
        "../public/athlete-profile-badminton.html",
        "../public/athlete-profile-badminton.html",
        "../public/athlete-profile-badminton.html",
        "../public/athlete-profile-badminton.html",
        "../public/athlete-profile-badminton.html",
    ]

    return names.map((name, index) => ({
        id: index + 1,
        name,
        image: images[index % images.length], // Cycle through images if there are fewer images than names
        country: countries[index % countries.length], // Assign countries
        link: links[index % links.length] // Assign links
    }));
}

export function Tennis() {
    const names = ["ELENA RYBAKINA", "NICK KYGIOS", "JESSICA PEGULA", 
                    "FRANCES TAFOE", "MARKETA VONDROUSOVA", "JASMINE PAOLINI", 
                    "DAYANA YASTREMSKA", "SEBASTIAN BAEZ", "STAN WAWRINKA", 
                    "NAOMI OSAKA", "HUBERT HURKACZ", "CASPER RUUD",
                    "CAROLINE GARCIA", "TOMMY PAUL","BEN SHELTON",
                    "BELINDA BENCIC", "ANGELIQUE KERBER", "BENIS SHAPOVALOV"];
    const images = [
        "../assets/images/athletes/Tennis/RYBAKINA_570x570_240517.jpeg",
        "../assets/images/athletes/Tennis/kyrgios_570x570.jpeg",
        "../assets/images/athletes/Tennis/pegula_570_570_1.jpeg",
        "../assets/images/athletes/Tennis/FrancesTiafoe_570x570_240510_.jpeg",
        "../assets/images/athletes/Tennis/vondrousova_570x570.jpeg",
        "../assets/images/athletes/Tennis/JASMINE_PAOLINI_570_570_1.jpeg",
        "../assets/images/athletes/Tennis/Yastremska_570_570.jpeg",
        "../assets/images/athletes/Tennis/baez_570x570_1.jpeg",
        "../assets/images/athletes/Tennis/wawrinka_400x560.jpeg",
        "../assets/images/athletes/Tennis/Osaka_570x570_07.jpeg",
        "../assets/images/athletes/Tennis/hurkacz_570x570_240517.jpeg",
        "../assets/images/athletes/Tennis/ruud_570x570_240517.jpeg",
        "../assets/images/athletes/Tennis/garcia_570x570_240517.jpeg",
        "../assets/images/athletes/Tennis/Paul_400x560.jpeg",
        "../assets/images/athletes/Tennis/shelton_570_570.jpeg",
        "../assets/images/athletes/Tennis/bencic_570x570.webp",
        "../assets/images/athletes/Tennis/ANGELIQUE_KERBER570x570.png",
        "../assets/images/athletes/Tennis/shapovalov_570x570.jpeg",
        
        // Repeat images if necessary
    ];
    const countries = ["KAZAKHSTAN", "AUSTRALIA", "UNITED STATES", 
                        "UNITED STATES", "CZECH REPUBLIC", "ITALY", 
                        "UKRAINE", "ARGENTINA", "SWITZERLAND", 
                        "JAPAN", "POLAND", "NORWAY",
                        "FRANCE","UNITED STATES","UNITED STATES"
                        ,"SWITZERLAND","GERMANY","CANADA"];
    const links = [
        "../public/athlete-profile-tennis.html",
        "../public/athlete-profile-tennis.html",
        "../public/athlete-profile-tennis.html",
        "../public/athlete-profile-tennis.html",
        "../public/athlete-profile-tennis.html",
        "../public/athlete-profile-tennis.html",
        "../public/athlete-profile-tennis.html",
        "../public/athlete-profile-tennis.html",
        "../public/athlete-profile-tennis.html",
        "../public/athlete-profile-tennis.html",
        "../public/athlete-profile-tennis.html",
        "../public/athlete-profile-tennis.html",
        "../public/athlete-profile-tennis.html",
        "../public/athlete-profile-tennis.html",
        "../public/athlete-profile-tennis.html",
        "../public/athlete-profile-tennis.html",
        "../public/athlete-profile-tennis.html",
        "../public/athlete-profile-tennis.html",
    ]

    return names.map((name, index) => ({
        id: index + 1,
        name,
        image: images[index % images.length], // Cycle through images if there are fewer images than names
        country: countries[index % countries.length], // Assign countries
        link: links[index % links.length] // Assign links
    }));
}

export function Golf() {
    const names = ["HYO JOO KIM", "CHISATO IWAI", "SUZUKA YAMAGUCHI", 
                    "AKIE IWAI","HYO JOO KIM", "CHISATO IWAI", 
                    "SUZUKA YAMAGUCHI", "AKIE IWAI","HYO JOO KIM", 
                    "CHISATO IWAI", "SUZUKA YAMAGUCHI", "AKIE IWAI",
                    "HYO JOO KIM", "CHISATO IWAI", "SUZUKA YAMAGUCHI", 
                    "AKIE IWAI","HYO JOO KIM", "CHISATO IWAI",
                    ];
    const images = [
        "../assets/images/athletes/Golf/akie_iwai_570x570.jpeg",
        "../assets/images/athletes/Golf/chisato_iwai_570x570.jpeg",
        "../assets/images/athletes/Golf/kim_570x570_.jpeg",
        "../assets/images/athletes/Golf/suzuka_square.jpeg",
        "../assets/images/athletes/Golf/akie_iwai_570x570.jpeg",
        "../assets/images/athletes/Golf/chisato_iwai_570x570.jpeg",
        "../assets/images/athletes/Golf/kim_570x570_.jpeg",
        "../assets/images/athletes/Golf/suzuka_square.jpeg",
        "../assets/images/athletes/Golf/akie_iwai_570x570.jpeg",
        "../assets/images/athletes/Golf/chisato_iwai_570x570.jpeg",
        "../assets/images/athletes/Golf/kim_570x570_.jpeg",
        "../assets/images/athletes/Golf/suzuka_square.jpeg",
        "../assets/images/athletes/Golf/akie_iwai_570x570.jpeg",
        "../assets/images/athletes/Golf/chisato_iwai_570x570.jpeg",
        "../assets/images/athletes/Golf/kim_570x570_.jpeg",
        "../assets/images/athletes/Golf/suzuka_square.jpeg",
        "../assets/images/athletes/Golf/akie_iwai_570x570.jpeg",
        "../assets/images/athletes/Golf/chisato_iwai_570x570.jpeg",
    ];
    const countries = ["KOREA","JAPAN","JAPAN","JAPAN"];
    const links = [
        "../public/athlete-profile-golf.html",
        "../public/athlete-profile-golf.html",
        "../public/athlete-profile-golf.html",
        "../public/athlete-profile-golf.html",
        "../public/athlete-profile-golf.html",
        "../public/athlete-profile-golf.html",
        "../public/athlete-profile-golf.html",
        "../public/athlete-profile-golf.html",
        "../public/athlete-profile-golf.html",
        "../public/athlete-profile-golf.html",
        "../public/athlete-profile-golf.html",
        "../public/athlete-profile-golf.html",
        "../public/athlete-profile-golf.html",
        "../public/athlete-profile-golf.html",
        "../public/athlete-profile-golf.html",
        "../public/athlete-profile-golf.html",
        "../public/athlete-profile-golf.html",
        "../public/athlete-profile-golf.html",
]

    return names.map((name, index) => ({
        id: index + 1,
        name,
        image: images[index % images.length], // Cycle through images if there are fewer images than names
        country: countries[index % countries.length], // Assign countries
        link: links[index % links.length] // Assign links
    }));
}

export function Snowboarding() {
    const names = ["YUTO TOSTUKA", "SENA TOMITA", "HIROAKI KUNITAKE", 
                    "RUKI TOMITA", "RUKA HIRANO", "ALESSANDRO BARBIERI",
                    "YUTO TOSTUKA", "SENA TOMITA", "HIROAKI KUNITAKE", 
                    "RUKI TOMITA", "RUKA HIRANO", "ALESSANDRO BARBIERI",
                    "YUTO TOSTUKA", "SENA TOMITA", "HIROAKI KUNITAKE", 
                    "RUKI TOMITA", "RUKA HIRANO", "ALESSANDRO BARBIERI", 
                    ];
    const images = [
        "../assets/images/athletes/snowboarding/alessandro_570x570.png",
        "../assets/images/athletes/snowboarding/Kunitake_570x570_square.jpeg",
        "../assets/images/athletes/snowboarding/Ruka-square.jpeg",
        "../assets/images/athletes/snowboarding/Ruki-square.jpeg",
        "../assets/images/athletes/snowboarding/Sena-square.jpeg",
        "../assets/images/athletes/snowboarding/Yuto-square.jpeg",
        "../assets/images/athletes/snowboarding/alessandro_570x570.png",
        "../assets/images/athletes/snowboarding/Kunitake_570x570_square.jpeg",
        "../assets/images/athletes/snowboarding/Ruka-square.jpeg",
        "../assets/images/athletes/snowboarding/Ruki-square.jpeg",
        "../assets/images/athletes/snowboarding/Sena-square.jpeg",
        "../assets/images/athletes/snowboarding/Yuto-square.jpeg",
        "../assets/images/athletes/snowboarding/alessandro_570x570.png",
        "../assets/images/athletes/snowboarding/Kunitake_570x570_square.jpeg",
        "../assets/images/athletes/snowboarding/Ruka-square.jpeg",
        "../assets/images/athletes/snowboarding/Ruki-square.jpeg",
        "../assets/images/athletes/snowboarding/Sena-square.jpeg",
        "../assets/images/athletes/snowboarding/Yuto-square.jpeg",
        // Repeat images if necessary
    ];
    const countries = ["JAPAN", "JAPAN", "JAPAN", 
                        "JAPAN", "JAPAN", "UNITED STATES",
                        "JAPAN", "JAPAN", "JAPAN", 
                        "JAPAN", "JAPAN", "UNITED STATES",
                        "JAPAN", "JAPAN", "JAPAN", 
                        "JAPAN", "JAPAN", "UNITED STATES", 
                        ];
    const links = [
        "../public/athlete-profile-snowboarding.html",
        "../public/athlete-profile-snowboarding.html",
        "../public/athlete-profile-snowboarding.html",
        "../public/athlete-profile-snowboarding.html",
        "../public/athlete-profile-snowboarding.html",
        "../public/athlete-profile-snowboarding.html",
        "../public/athlete-profile-snowboarding.html",
        "../public/athlete-profile-snowboarding.html",
        "../public/athlete-profile-snowboarding.html",
        "../public/athlete-profile-snowboarding.html",
        "../public/athlete-profile-snowboarding.html",
        "../public/athlete-profile-snowboarding.html",
        "../public/athlete-profile-snowboarding.html",
        "../public/athlete-profile-snowboarding.html",
        "../public/athlete-profile-snowboarding.html",
        "../public/athlete-profile-snowboarding.html",
        "../public/athlete-profile-snowboarding.html",
        "../public/athlete-profile-snowboarding.html",
]

    return names.map((name, index) => ({
        id: index + 1,
        name,
        image: images[index % images.length], // Cycle through images if there are fewer images than names
        country: countries[index % countries.length], // Assign countries
        link: links[index % links.length] // Assign links
    }));
}