export function Bedmanton() {
    const names = ["VIKTOR AXELSEN", "CHEN YU FEI", "CAROLINA MARIN", "LUCAS MAZUR", "CHEN QING CHEN", 
    "WANG CHANG", "BAEK HA NA", "JIA YI FAN", "SATWIKSAIRAJ RANKIREDDY", "RATACHANOK INTANO", 
    "KUNLAVUT VIDIDSARN", "AN SE YOUNG", "AKANE YAMAGUCHI", "LI SHI FENG", "CHOU TIEN CHEN", "CHIRAG SHETTY", "LIANG WEI KENG", "LEE SO HEE"];
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
    const countries = ["DENMARK", "CHINA", "SPAIN", "FRANCE", "CHINA", "CHINA", "KOREA", "CHINA", "INDIA", "THAILAND", "THAILAND", "KOREA", "JAPAN", "CHINA", "CHINESE TAIPEI", "INDIA", "CHINA", "KOREA"];

    return names.map((name, index) => ({
        id: index + 1,
        name,
        image: images[index % images.length], // Cycle through images if there are fewer images than names
        country: countries[index % countries.length] // Assign countries
    }));
}

export function Tennis() {
    const names = ["Roger", "Rafael", "Novak", "Andy", "Serena", "Venus", "Maria", "Steffi", "Andre", "Pete", "Bjorn", "John"];
    const images = [
        "./assets/images/athletes/tennis/roger.jpeg",
        "./assets/images/athletes/tennis/rafael.jpeg",
        "./assets/images/athletes/tennis/novak.jpeg",
        // Repeat images if necessary
    ];
    const countries = ["Switzerland", "Spain", "Serbia", "UK", "USA", "USA", "Russia", "Germany", "USA", "USA", "Sweden", "USA"];

    return names.map((name, index) => ({
        id: index + 1,
        name,
        image: images[index % images.length], // Cycle through images if there are fewer images than names
        country: countries[index % countries.length] // Assign countries
    }));
}

export function Running() {
    const names = ["Usain", "Mo", "Eliud", "Paula", "Haile", "Florence", "Kenenisa", "David", "Sifan", "Almaz"];
    const images = [
        "./assets/images/athletes/running/usain.jpeg",
        "./assets/images/athletes/running/mo.jpeg",
        "./assets/images/athletes/running/eliud.jpeg",
        // Repeat images if necessary
    ];
    const countries = ["Jamaica", "UK", "Kenya", "UK", "Ethiopia", "Kenya", "Ethiopia", "Kenya", "Netherlands", "Ethiopia"];

    return names.map((name, index) => ({
        id: index + 1,
        name,
        image: images[index % images.length], // Cycle through images if there are fewer images than names
        country: countries[index % countries.length] // Assign countries
    }));
}
