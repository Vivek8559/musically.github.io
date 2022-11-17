const music = new Audio('audio/1.mp3');
//music.play();

const songs = [
    {
        id: "1",
        songName : `On My Way <br> 
        <div class="subtitle">Alan walker</div>`,
        poster: "img/1.jpg"
    },
    {
        id: "2",
        songName : `Faded <br> 
        <div class="subtitle">Alan walker</div>`,
        poster: "img/2.jpg"
    },
    {
        id: "3",
        songName : `Cartoon - on &  on <br> 
        <div class="subtitle">Daniel Levi</div>`,
        poster: "img/3.jpg"
    },
    {
        id: "4",
        songName : `Warriyo <br> 
        <div class="subtitle">Mortals</div>`,
        poster: "img/4.jpg"
    },
    {
        id: "5",
        songName : `Ertugrul Gazi <br> 
        <div class="subtitle">Ertugrul</div>`,
        poster: "img/5.jpg"
    },
    {
        id: "6",
        songName : `Electronic Music <br> 
        <div class="subtitle">Electro</div>`,
        poster: "img/6.jpg"
    },
    {
        id: "7",
        songName : `Agar Tum Sath ho <br> 
        <div class="subtitle">Tamashaa</div>`,
        poster: "img/7.jpg"
    },
    {
        id: "8",
        songName : `Suna Hai <br> 
        <div class="subtitle">Neha Kakker</div>`,
        poster: "img/8.jpg"
    },
    {
        id: "9",
        songName : `Dilber <br> 
        <div class="subtitle">Satyameva Jayate</div>`,
        poster: "img/9.jpg"
    },
    {
        id: "10",
        songName : `Duniya <br> 
        <div class="subtitle">Luka Chuppi</div>`,
        poster: "img/10.jpg"
    },
    {
        id: "11",
        songName : `Lagdi Lahore Di <br> 
        <div class="subtitle">Street Dancer 3D</div>`,
        poster: "img/11.jpg"
    },
    {
        id: "12",
        songName : `Put Jutt Da <br> 
        <div class="subtitle">Putt Jutt da</div>`,
        poster: "img/12.jpg"
    },
    {
        id: "13",
        songName : `Baarishein <br> 
        <div class="subtitle">Atif Aslame</div>`,
        poster: "img/13.jpg"
    },
    {
        id: "14",
        songName : `Vaaste <br> 
        <div class="subtitle">Dhvani Bhanushali</div>`,
        poster: "img/14.jpg"
    },
    {
        id: "15",
        songName : `Lut Gaye <br> 
        <div class="subtitle">Jubin Nautiyal</div>`,
        poster: "img/15.jpg"
    },
    {
        id: "16",
        songName : `Tu Meri Jundgi Hai Tu <br> 
        <div class="subtitle">Jubin Nautiyal</div>`,
        poster: "img/16.jpg"
    },
    {
        id: "17",
        songName : `Batao Yaad hai tumko wo jab dil ko Churaya tha <br> 
        <div class="subtitle">Rahat Fateh Ali Khan</div>`,
        poster: "img/17.jpg"
    },
    {
        id: "18",
        songName : `Mere Dhol Judaiyan <br> 
        <div class="subtitle">Ali Sethi Seha Gill</div>`,
        poster: "img/18.jpg"
    },
    {
        id: "19",
        songName : `Eh Munda pagal Ne Saare <br> 
        <div class="subtitle">Ap Dhillon, Gurinder Gill, Shinda Kahlon</div>`,
        poster: "img/19.jpg"
    },
    {
        id: "20",
        songName : `Dunny 82k <br> 
        <div class="subtitle">Ap Dhillon, Gurinder Gill, Shinda Kahlon </div>`,
        poster: "img/20.jpg"
    },
    {
        id: "21",
        songName : `At my worst <br> 
        <div class="subtitle">Pink Sweats </div>`,
        poster: "img/21.jpg"
    },
    {
        id: "22",
        songName : `Lovely <br> 
        <div class="subtitle">Billie Eilish, Khalid </div>`,
        poster: "img/22.jpg"
    },
    {
        id: "23",
        songName : `Love Me Llike You Do <br> 
        <div class="subtitle">Ellie Goulding </div>`,
        poster: "img/23.jpg"
    },
    {
        id: "24",
        songName : `Let me Love You <br> 
        <div class="subtitle">Alec Benjamin </div>`,
        poster: "img/24.jpg"
    },
    {
        id: "25",
        songName : `Memories <br> 
        <div class="subtitle">Maroon 5 </div>`,
        poster: "img/25.jpg"
    },
    {
        id: "26",
        songName : `Unstoppable <br> 
        <div class="subtitle">Sia </div>`,
        poster: "img/26.jpg"
    },
    {
        id: "27",
        songName : `Worth it <br> 
        <div class="subtitle">Fifth Harmony ft. </div>`,
        poster: "img/27.jpg"
    },
    {
        id: "28",
        songName : `Kings & Queens <br> 
        <div class="subtitle">Ava Max</div>`,
        poster: "img/28.jpg"
    },
    {
        id: "29",
        songName : `Havana <br> 
        <div class="subtitle">Camila Cabello </div>`,
        poster: "img/29.jpg"
    },
    {
        id: "30",
        songName : `Hey Mama <br> 
        <div class="subtitle">Bebe Rexa, Nicki </div>`,
        poster: "img/30.jpg"
    },
    {
        id: "31",
        songName : `Attention <br> 
        <div class="subtitle">Charlie Puth </div>`,
        poster: "img/31.jpg"
    },
    {
        id: "32",
        songName : `Stereo Hearts <br> 
        <div class="subtitle">Maroon 5 </div>`,
        poster: "img/32.jpg"
    },
    {
        id: "33",
        songName : `Bad Liar<br> 
        <div class="subtitle">Imagine Dragons </div>`,
        poster: "img/33.jpg"
    },
    {
        id: "34",
        songName : `Enemy <br> 
        <div class="subtitle">Imagine Dragons </div>`,
        poster: "img/34.jpg"
    },
    {
        id: "35",
        songName : `Let Me love You <br> 
        <div class="subtitle">Justine Biber </div>`,
        poster: "img/35.jpg"
    },
    {
        id: "36",
        songName : `Side to Side <br> 
        <div class="subtitle">Ariana Grande </div>`,
        poster: "img/36.jpg"
    },
    {
        id: "37",
        songName : `7 rings <br> 
        <div class="subtitle">Ariana Grande </div>`,
        poster: "img/37.jpg"
    },
    {
        id: "38",
        songName : `Old Town Road <br> 
        <div class="subtitle">Vivek Kumawat </div>`,
        poster: "img/38.jpg"
    },
    {
        id: "39",
        songName : `Jalebi Baby <br> 
        <div class="subtitle">Jasan sandoro </div>`,
        poster: "img/39.jpg"
    },
    {
        id: "40",
        songName : `Demons <br> 
        <div class="subtitle">Imagine Dragons </div>`,
        poster: "img/40.jpg"
    },
    {
        id: "41",
        songName : `Closer <br> 
        <div class="subtitle">The Chainsmokers </div>`,
        poster: "img/41.jpg"
    },
    {
        id: "42",
        songName : `Taki Taki <br> 
        <div class="subtitle">Dj Snake, Selena Gomez </div>`,
        poster: "img/42.jpg"
    },
    {
        id: "43",
        songName : `Safari <br> 
        <div class="subtitle">Vivek Kumawat </div>`,
        poster: "img/43.jpg"
    },
    {
        id: "44",
        songName : `Rockabye <br> 
        <div class="subtitle">Vivek Kumawat </div>`,
        poster: "img/44.jpg"
    },
    {
        id: "45",
        songName : `Senorita <br> 
        <div class="subtitle">Shawan Mendes, Camelia Cebella </div>`,
        poster: "img/45.jpg"
    },
    {
        id: "46",
        songName : `Something Just Like This <br> 
        <div class="subtitle">The Chainsmokers </div>`,
        poster: "img/46.jpg"
    },
    {
        id: "47",
        songName : `Ram Siya Ram <br> 
        <div class="subtitle">Sachet tandon </div>`,
        poster: "img/47.jpg"
    },
    {
        id: "48",
        songName : `Teri Deewani <br> 
        <div class="subtitle">Kailash Kher </div>`,
        poster: "img/48.jpg"
    },
    {
        id: "49",
        songName : `Khairiyat <br> 
        <div class="subtitle">Arijit Singh </div>`,
        poster: "img/49.jpg"
    },
    {
        id: "50",
        songName : `Kun Faaya Kun <br> 
        <div class="subtitle">A.R. Rahman, Javed </div>`,
        poster: "img/50.jpg"
    },
    {
        id: "51",
        songName : `Bhar Do Jholi Meri <br> 
        <div class="subtitle">Adnan Sami, Pritam </div>`,
        poster: "img/51.jpg"
    },
    {
        id: "52",
        songName : `O Paalan Haare <br> 
        <div class="subtitle">Udit Narayan, Lata Mangeshkar </div>`,
        poster: "img/52.jpg"
    },
    {
        id: "53",
        songName : `Tum Sath ho <br> 
        <div class="subtitle">Vivek Kumawat </div>`,
        poster: "img/53.jpg"
    },
    {
        id: "54",
        songName : `Bhagwan Hai Kahan re Tu <br> 
        <div class="subtitle">Shantanu Moitra, S </div>`,
        poster: "img/54.jpg"
    },
    {
        id: "55",
        songName : `Pasoori <br> 
        <div class="subtitle">Shae Gill, Ali Sethi </div>`,
        poster: "img/55.jpg"
    },
    {
        id: "56",
        songName : `Jo Tainu Dhup Lagya ve <br> 
        <div class="subtitle">Rito Riba </div>`,
        poster: "img/56.jpg"
    },
    {
        id: "57",
        songName : `Sajdaa <br> 
        <div class="subtitle">Rahat Fateh Ali Khan </div>`,
        poster: "img/57.jpg"
    },
    {
        id: "58",
        songName : `Saiyyan <br> 
        <div class="subtitle">Kailash Kher </div>`,
        poster: "img/58.jpg"
    },
    {
        id: "59",
        songName : `Mora Piya <br> 
        <div class="subtitle">Aadesh Shrivastva </div>`,
        poster: "img/59.jpg"
    },
    {
        id: "60",
        songName : `Such Keh rha hai <br> 
        <div class="subtitle">KK </div>`,
        poster: "img/60.jpg"
    },
    {
        id: "61",
        songName : `Kaise hua <br> 
        <div class="subtitle">Vishal Mishra </div>`,
        poster: "img/61.jpg"
    },
    {
        id: "62",
        songName : `Hamari Adhuri Kahani <br> 
        <div class="subtitle">Arijit Singh </div>`,
        poster: "img/62.jpg"
    },
    {
        id: "63",
        songName : `Tumhen Dillagi Bhool <br> 
        <div class="subtitle">Nusrat Fateh Ali Khan </div>`,
        poster: "img/63.jpg"
    },
    {
        id: "64",
        songName : `Zaroori Tha <br> 
        <div class="subtitle">Rahat Fateh Ali Khan </div>`,
        poster: "img/64.jpg"
    },
    {
        id: "65",
        songName : `Sanam teri Kasam <br> 
        <div class="subtitle">Ankit Tiwari </div>`,
        poster: "img/65.jpg"
    },
    {
        id: "66",
        songName : `Ye Jo halka Halka suroor <br> 
        <div class="subtitle">Vivek Kumawat </div>`,
        poster: "img/66.jpg"
    },
    {
        id: "67",
        songName : `Tere Mast Mast Do Nain <br> 
        <div class="subtitle">Shreya Ghoshal </div>`,
        poster: "img/67.jpg"
    },
    {
        id: "68",
        songName : `Kinna Sohna <br> 
        <div class="subtitle"> Nusrat FAteh Ali Khan</div>`,
        poster: "img/68.jpg"
    },
    {
        id: "69",
        songName : `Mann Mera <br> 
        <div class="subtitle">Gajendra verma </div>`,
        poster: "img/69.jpg"
    },
    {
        id: "70",
        songName : `Kalaavati <br> 
        <div class="subtitle">Sid Sriram </div>`,
        poster: "img/70.jpg"
    },
    {
        id: "71",
        songName : `Arabic Kuthu <br> 
        <div class="subtitle">Anirudh Ravichandran, Gonitha Gandhi </div>`,
        poster: "img/71.jpg"
    },
    {
        id: "72",
        songName : `Tum Tum <br> 
        <div class="subtitle">Enemy Movie </div>`,
        poster: "img/72.jpg"
    },
    {
        id: "73",
        songName : `Srivalli <br> 
        <div class="subtitle">Javed Ali </div>`,
        poster: "img/73.jpg"
    },
    {
        id: "74",
        songName : `Sita Rammam  <br> 
        <div class="subtitle">Sita Rammam </div>`,
        poster: "img/74.jpg"
    },
    {
        id: "75",
        songName : `Fer Ohi Hoyea <br> 
        <div class="subtitle">Jassi Gill </div>`,
        poster: "img/75.jpg"
    },
    {
        id: "76",
        songName : `Na Ja <br> 
        <div class="subtitle">Pav Dharia </div>`,
        poster: "img/76.jpg"
    },
    {
        id: "77",
        songName : `Brown Rang <br> 
        <div class="subtitle">YO YO Honey Singh </div>`,
        poster: "img/77.jpg"
    },
    {
        id: "78",
        songName : `Lover <br> 
        <div class="subtitle">Diljit Dosanjh </div>`,
        poster: "img/78.jpg"
    },
    {
        id: "79",
        songName : `Desi Kalakaar <br> 
        <div class="subtitle">YO YO Honey Singh </div>`,
        poster: "img/79.jpg"
    },
    {
        id: "80",
        songName : `Dheere dheere <br> 
        <div class="subtitle">YO YO Honey Singh</div>`,
        poster: "img/80.jpg"
    },{
        id: "81",
        songName : `Backbone <br> 
        <div class="subtitle">Harrdy Sandhu </div>`,
        poster: "img/81.jpg"
    },
    {
        id: "82",
        songName : `BreakUp Party <br> 
        <div class="subtitle">YO YO Honey Singh </div>`,
        poster: "img/82.jpg"
    },
    {
        id: "83",
        songName : `Dope Shope <br> 
        <div class="subtitle">YO YO Honey Singh </div>`,
        poster: "img/83.jpg"
    },
    {
        id: "84",
        songName : `Blue eyes <br> 
        <div class="subtitle">YO YO Honey Singh </div>`,
        poster: "img/84.jpg"
    },
    {
        id: "85",
        songName : `One Bottle down <br> 
        <div class="subtitle">YO YO Honey Singh </div>`,
        poster: "img/85.jpg"
    },
    {
        id: "86",
        songName : `Chaar Botal Vodka <br> 
        <div class="subtitle">YO YO Honey Singh </div>`,
        poster: "img/86.jpg"
    },
    {
        id: "87",
        songName : `Aankhon Aankhon <br> 
        <div class="subtitle">YO YO Honey Singh </div>`,
        poster: "img/87.jpg"
    },
    {
        id: "88",
        songName : `Nazar lag Jayegi <br> 
        <div class="subtitle">Milind GAba </div>`,
        poster: "img/88.jpg"
    },
    {
        id: "89",
        songName : `High Heels <br> 
        <div class="subtitle">YO YO Honey Singh </div>`,
        poster: "img/89.jpg"
    },
    {
        id: "90",
        songName : `Angreji Beat <br> 
        <div class="subtitle">YO YO Honey Singh </div>`,
        poster: "img/90.jpg"
    }
];


Array.from(document.getElementsByClassName('songItem')).forEach((e, i) =>{
    e.getElementsByTagName('img')[0].src = songs[i].poster;
    e.getElementsByTagName('h5')[0].innerHTML = songs[i].songName;
});

//search Data start
let search_results = document.getElementsByClassName('search_results')[0];

songs.forEach(element => {
    const {id, songName, poster} = element;
    let card = document.createElement('a');
    card.classList.add('card');
    card.href = "#" + id;
    card.innerHTML = `
    <img src="${poster}" alt="">
                                <div class="content">
                                    ${songName}
                                </div>
    `;
    search_results.appendChild(card);
});


let input =document.getElementsByTagName('input')[0];

input.addEventListener('keyup', ()=>{
    let input_value = input.value.toUpperCase();
    let items = search_results.getElementsByTagName('a');

    for (let index = 0; index < items.length; index++) {
        let as = items[index].getElementsByClassName('content')[0];
        let text_value = as.textContent || as.innerHTML;

        if (text_value.toUpperCase().indexOf(input_value) >  -1) {
            items[index].style.display = "flex";
        } else {
            items[index].style.display = "none";
        }
        
        if (input.value == 0) {
            search_results.style.display = "none"; 
        } else {
            search_results.style.display = "";
        }
    }
})
// Search Data end


let masterPlay = document.getElementById('masterPlay');
let wave = document.getElementById('wave');

masterPlay.addEventListener('click', ()=> {
    if (music.paused || music.currentTime <=0) {
        music.play();
        wave.classList.add('active1');
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');
    } else {
        music.pause();
        wave.classList.remove('active1');
        masterPlay.classList.add('bi-play-fill');
        masterPlay.classList.remove('bi-pause-fill');
    }
});

const makeAllplays = ()=> {
    Array.from(document.getElementsByClassName('PlayListPlay')).forEach((el)=> {
        el.classList.add('bi-play-circle-fill');
        el.classList.remove('bi-pause-circle-fill');
    });
};


const makeAllBackground = ()=> {
    Array.from(document.getElementsByClassName('songItem')).forEach((el)=> {
        el.style.background = 'rbg(105, 105, 105, .0)';
    });
};

let index=0;
let poster_master_play = document.getElementById('poster_master_play');
let download_music = document.getElementById('download_music');
let title = document.getElementById('title');
Array.from(document.getElementsByClassName('PlayListPlay')).forEach((e)=> {
    e.addEventListener('click', (el) => {
        index = el.target.id;
        //console.log(index);
        music.src = `audio/${index}.mp3`;
        poster_master_play.src = `img/${index}.jpg`;
        music.play();
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');

        download_music.href = `audio/${index}.mp3`;

        let songTitles = songs.filter((els) => {
            return els.id == index;
        });

        songTitles.forEach(elss => {
            let {songName} = elss;
            title.innerHTML = songName;
            download_music.setAttribute('download', songName);
        });

        makeAllBackground();
        Array.from(document.getElementsByClassName('songItem'))[index-1].style.background = "rbg(105, 105, 105, .1)";
        makeAllplays();
        el.target.classList.remove('bi-play-circle-fill');
        el.target.classList.add('bi-pause-circle-fill');
        wave.classList.add('active1');
    });
});


let currentStart = document.getElementById('currentStart'); 
let currentEnd = document.getElementById('currentEnd'); 
let seek = document.getElementById('seek'); 
let bar2 = document.getElementById('bar2'); 
let dot = document.getElementsByClassName('dot')[0]; 

music.addEventListener('timeupdate', ()=>{
    let music_curr = music.currentTime;
    let music_dur = music.duration;

    let min1 = Math.floor(music_dur / 60);
    let sec1 = Math.floor(music_dur % 60);

    if(sec1 < 10){
        sec1 = `0${sec1}`;
    }
    currentEnd.innerText = `${min1}:${sec1}`;

    let min2 = Math.floor(music_curr / 60);
    let sec2 = Math.floor(music_curr % 60);

    if(sec2 < 10){
        sec2 = `0${sec2}`;
    }
    currentStart.innerText = `${min2}:${sec2}`;


    let progressBar = parseInt((music_curr / music_dur) * 100);
    seek.value = progressBar;
    let seekbar = seek.value;

    bar2.style.width = `${seekbar}%`;
    dot.style.left = `${seekbar}%`;
})

seek.addEventListener('change', ()=> {
    music.currentTime = seek.value * music.duration / 100;
});

let vol_icon = document.getElementById('vol_icon');
let vol = document.getElementById('vol');
let vol_bar = document.getElementsByClassName('vol_bar')[0];
let vol_dot = document.getElementById('vol_dot');

vol.addEventListener('change', ()=>{
    if (vol.value == 0) {
        vol_icon.classList.remove('bi-volume-up-fill');
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.add('bi-volume-off-fill');
    }
    if (vol.value > 0 ) {
        vol_icon.classList.remove('bi-volume-up-fill');
        vol_icon.classList.add('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-off-fill');
    }
    if (vol.value > 50) {
        vol_icon.classList.add('bi-volume-up-fill');
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-off-fill');
    }
    let vol_a = vol.value;
    vol_bar.style.width = `${vol_a}%`;
    vol_dot.style.left = `${vol_a}%`;
    music.volume = vol_a / 100;
});


let back = document.getElementById('back');
let next = document.getElementById('next');

back.addEventListener('click' , ()=>{
    index -=1;
    if (index < 1) {
        index = Array.from(document.getElementsByClassName('songItem')).length; 
    }
    music.src = `audio/${index}.mp3`;
        poster_master_play.src = `img/${index}.jpg`;
        music.play();
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');

        let songTitles = songs.filter((els) => {
            return els.id == index;
        });

        songTitles.forEach(elss => {
            let {songName} = elss;
            title.innerHTML = songName;
        });

        makeAllBackground();
        Array.from(document.getElementsByClassName('songItem'))[index-1].style.background = "rbg(105, 105, 105, .1)";
        makeAllplays();
        el.target.classList.remove('bi-play-circle-fill');
        el.target.classList.add('bi-pause-circle-fill');
        wave.classList.add('active1');
});

next.addEventListener('click', ()=> {
    index ++;
    if (index > Array.from(document.getElementsByClassName('songItem')).length) {
        index = 1; 
    }
    music.src = `audio/${index}.mp3`;
        poster_master_play.src = `img/${index}.jpg`;
        music.play();
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');

        let songTitles = songs.filter((els) => {
            return els.id == index;
        });

        songTitles.forEach(elss => {
            let {songName} = elss;
            title.innerHTML = songName;
        });

        makeAllBackground();
        Array.from(document.getElementsByClassName('songItem'))[index-1].style.background = "rbg(105, 105, 105, .1)";
        makeAllplays();
        el.target.classList.remove('bi-play-circle-fill');
        el.target.classList.add('bi-pause-circle-fill');
        wave.classList.add('active1');
});







let pop_song_left = document.getElementById('pop_song_left');
let pop_song_right = document.getElementById('pop_song_right');
let pop_song = document.getElementsByClassName('pop_song')[0];


pop_song_right.addEventListener('click', ()=> {
    pop_song.scrollLeft +=300;
});
pop_song_left.addEventListener('click', ()=> {
    pop_song.scrollLeft -=300;
});

let pop_art_left = document.getElementById('pop_art_left');
let pop_art_right = document.getElementById('pop_art_right');
let Artists_bx = document.getElementsByClassName('Artists_bx')[0];


pop_art_right.addEventListener('click', ()=> {
    Artists_bx.scrollLeft +=300;
});
pop_art_left.addEventListener('click', ()=> {
    Artists_bx.scrollLeft -=300;
});




let shuffle = document.getElementsByClassName('shuffle')[0];

shuffle.addEventListener('click', ()=>{
    let a = shuffle.innerHTML;

    switch (a) {
        case "next":
            shuffle.classList.add('bi-arrow-repeat');
            shuffle.classList.remove('bi-music-note-beamed');
            shuffle.classList.remove('bi-shuffle');
            shuffle.innerHTML = 'repeat';
            break;
    
            case "repeat":
                shuffle.classList.remove('bi-arrow-repeat');
                shuffle.classList.remove('bi-music-note-beamed');
                shuffle.classList.add('bi-shuffle'); 
                shuffle.innerHTML = 'random';
                break;

            case "random":
                shuffle.classList.remove('bi-arrow-repeat');
                shuffle.classList.add('bi-music-note-beamed');
                shuffle.classList.remove('bi-shuffle'); 
                shuffle.innerHTML = 'next';
                break;
    }
});



const next_music = () => {
    if (index == songs.length) {
        index =1;
    } else {
        index++;
    }
    music.src = `audio/${index}.mp3`;
    poster_master_play.src = `img/${index}.jpg`;
    music.play();
    masterPlay.classList.remove('bi-play-fill');
    masterPlay.classList.add('bi-pause-fill');

    download_music.href = `audio/${index}.mp3`;

    let songTitles = songs.filter((els) => {
        return els.id == index;
    });

    songTitles.forEach(elss => {
        let {songName} = elss;
        title.innerHTML = songName;
        download_music.setAttribute('download', songName);
    });

    makeAllBackground();
    Array.from(document.getElementsByClassName('songItem'))[index-1].style.background = "rbg(105, 105, 105, .1)";
    makeAllplays();
    el.target.classList.remove('bi-play-circle-fill');
    el.target.classList.add('bi-pause-circle-fill');
    wave.classList.add('active1');
}

const repeat_music = () => {
    index;
    music.src = `audio/${index}.mp3`;
    poster_master_play.src = `img/${index}.jpg`;
    music.play();
    masterPlay.classList.remove('bi-play-fill');
    masterPlay.classList.add('bi-pause-fill');

    download_music.href = `audio/${index}.mp3`;

    let songTitles = songs.filter((els) => {
        return els.id == index;
    });

    songTitles.forEach(elss => {
        let {songName} = elss;
        title.innerHTML = songName;
        download_music.setAttribute('download', songName);
    });

    makeAllBackground();
    Array.from(document.getElementsByClassName('songItem'))[index-1].style.background = "rbg(105, 105, 105, .1)";
    makeAllplays();
    el.target.classList.remove('bi-play-circle-fill');
    el.target.classList.add('bi-pause-circle-fill');
    wave.classList.add('active1');
}

const random_music = () => {
    if (index == songs.length) {
        index = 1;
    } else {
        index = Math.floor((Math.random() * songs.length) + 1);
    }
    music.src = `audio/${index}.mp3`;
    poster_master_play.src = `img/${index}.jpg`;
    music.play();
    masterPlay.classList.remove('bi-play-fill');
    masterPlay.classList.add('bi-pause-fill');

    download_music.href = `audio/${index}.mp3`;

    let songTitles = songs.filter((els) => {
        return els.id == index;
    });

    songTitles.forEach(elss => {
        let {songName} = elss;
        title.innerHTML = songName;
        download_music.setAttribute('download', songName);
    });

    makeAllBackground();
    Array.from(document.getElementsByClassName('songItem'))[index-1].style.background = "rbg(105, 105, 105, .1)";
    makeAllplays();
    el.target.classList.remove('bi-play-circle-fill');
    el.target.classList.add('bi-pause-circle-fill');
    wave.classList.add('active1');
}


music.addEventListener('ended', ()=>{
    let b = shuffle.innerHTML;
    switch (b) {
        case 'repeat':
            repeat_music();
            break;
    
        case 'random':
            random_music();
            break;

        case 'next':
            next_music();
            break;
    }
});

let menu_list_active_button = document.getElementById('menu_list_active_button');
let menu_side = document.getElementsByClassName('menu_side')[0];

menu_list_active_button.addEventListener('click', ()=> {
    menu_side.style.transform = "unset";
    menu_list_active_button.style.opacity = 0;
});

let song_side = document.getElementsByClassName('song_side')[0];

song_side.addEventListener('click', ()=> {
    menu_side.style.transform = "translateX(-100%)";
    menu_list_active_button.style.opacity = 1;
});