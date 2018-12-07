/******************************* 
    VÆNTANLEGAR MYNDIR 
 ******************************/

var comingSoon = [ 
    {
        date:"14.des",
        title:"Mortal Engines",
        iframeSource: "https://www.youtube.com/embed/cuL5yXsOAIA",
        about:"Mörgum árum eftir Sextíu mínútna stríðið, þá lifir borgarbúar á eyðilegri Jörðinni, með því að færa sig á mili staða á risastórum farartækjum, og ráðast á smærri þorp.",
        director:"Christian Rivers",
        actors:"Hera Hilmarsdóttir, Hugo Weaving, <br> Stephen Lang, Jihae Kim",
        technical:"Lengd:2h 08min <br> Frumsýnd: 14.12.2008 <br> Dreifingaraðili: Myndform <br> Tegund: Hasar, Ævintýri, Fantasía<br> Aldurstakmark: Bönnuð innan 12 ára"
    },
    {
        date:"19.des",
        title:"Aquaman",
        iframeSource: "https://www.youtube.com/embed/WDkg3h8PCVU",
        about:"Arthur Curry kemst að því að hann er erfingi neðansjávarríkisins Atlantis, og þarf að stíga fram og verða leiðtogi þjóðar sinnar, og drýgja hetjundáðir fyrir allan heiminn.",
        director:"James Wan",
        actors:"Jason Momoa, Amber Heard,<br> Patrick Wilson, Nicole Kidman, <br>Willem Dafoe",
        technical:"Lengd: 2h 23min<br> Frumsýnd: 19.12.2018<br> Dreifingaraðili: SAMfilm<br> Tegund: Hasar, Vísindaskáldskapur, Ævintýri<br> Aldurstakmark: Bönnuð innan 12 ára"
    },
    {
        date:"26 des",
        title:"Mary Poppins Returns",
        iframeSource: "https://www.youtube.com/embed/-3jsfXDZLIY",
        about:"Mary snýr aftur til Banks fjölskyldunnar í London á tímum kreppunnar miklu. Börnin sem hún passaði í fyrstu myndinni, þau Jane og Michael, eru nú vaxin úr grasi. Michael á nú sjálfur þrjú börn, en þau þurfa öll aðstoð við að finna gleðina í lífinu á nýjan leik, eftir að hafa orðið fyrir persónulegum missi.",
        director:"Rob Marshall",
        actors:"Emily Blunt, Lin-Manuel Miranda, <br> Meryl Streep, Ben Whishaw,<br> Colin Firth",
        technical:"Lengd: 2h 19min<br> Frumsýnd: 26.12.2018<br> Dreifingaraðili: SAMfilm<br> Tegund: Fantasía, Tónlistarmynd, Fjölskyldumynd<br> Aldurstakmark: Leyfð öllum"
    },
    {
        date:"26.des",
        title:"Bumblebee",
        iframeSource: "https://www.youtube.com/embed/RoyuzCVJWEQ",
        about:"Árið 1987 leitar vélmennið Bumblebee skjóls í ruslahaug í litlum strandbæ í Kaliforníu. Charlie, sem er að verða 18 ára gömul og leitar að sínum stað í heiminum, finnur hinn baráttulúna og bilaða Bumblebee og nær að blása lífi í fyrirbærið og kemsta að því að þarna er enginn venjulegur gulur Volkswagen bíll á ferðinni.",
        director:"Travis Knight",
        actors:"Hailee Steinfeld, John Cena, <br>Martin Short",
        technical:"Lengd: 1h 54min<br> Frumsýnd: 26.12.2018<br> Dreifingaraðili: SAMfilm<br> Tegund: Hasar, Vísindaskáldskapur, Ævintýri <br> Aldurstakmark: Bönnuð innan 12 ára"
    }
]
var tab = document.querySelector ('#tab')

tab.onclick = function() {
    postersContainer.innerHTML = `
        <h2 class="fyrirsogn"> 
            Væntanlegar kvikmyndir á leiðinni í bíóhús <br> <span style="color:#0E82C5; display: inline-block;">SAM</span><span style="color:#EB1026; display: inline-block;">BÍÓANNA
        </h2>
        <div class="soon-tainer">       
    `
    var comingSoonContainer = document.querySelector('.soon-tainer');

    for (var i = 0; i<comingSoon.length; i++) {  
        comingSoonContainer.innerHTML += `
        <div class="comingSoonContainer">   
            <div class="headline">
                <div class="date">${comingSoon[i].date}</div>
                <h1>${comingSoon[i].title}</h1>
                <div class="undirlina"></div>
                <img src="img/star.png" class="star"/>
            </div>
            <div class="youtube">
                 <iframe src="${comingSoon[i].iframeSource}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
                <div class="textabox"> 
                   <div class="tech">
                        <p>${comingSoon[i].technical}</p>   
                        <p>Leikarar:<br> ${comingSoon[i].actors}</p> 
                        <p>Leikstjóri:<br> ${comingSoon[i].director}</p>
                    </div>
                    <div class="about">${comingSoon[i].about}</div>
                    <img src="img/strip.png"/>    
                 </div>
            </div>
    `;
    }
}