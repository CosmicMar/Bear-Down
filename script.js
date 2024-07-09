const playerCards = document.getElementById("player-cards");
const rosterDropDown = document.getElementById("roster-options");
const players = [
  {
    img: "https://static.clubs.nfl.com/image/upload/t_thumb_squared/f_auto/v1715703686/bears/tejh8jk8nrvoulnxtab4.jpg",
    name: "Caleb Williams",
    number: 18,
    team: "offense",
    position: "QB",
    height: "6ft 1",
    weight: 215,
    college: "USC"
  }, 
  { 
    img: "https://static.clubs.nfl.com/image/upload/t_thumb_squared/f_auto/v1715702824/bears/vofadqdu8np6zfll6i9d.jpg",
    name: "D'Andre Swift",
    number: 4,
    team: "offense",
    position: "RB",
    height: "5ft 8",
    weight: 215,
    college: "Georgia"
  }, 
  { 
    img: "https://static.clubs.nfl.com/image/upload/t_thumb_squared/f_auto/v1715705436/bears/tb9s8th6pxniflzslkfk.jpg",
    name: "DJ Moore",
    number: 2,
    team: "offense",
    position: "WR",
    height: "5ft 9",
    weight: 210,
    college: "Maryland"
  }, 
  { 
    img: "https://static.clubs.nfl.com/image/upload/t_thumb_squared/f_auto/v1710513383/bears/ff7xidr4674c880nqyxn.jpg",
    name: "Keenan Allen",
    number: 13,
    team: "offense",
    position: "WR",
    height: "6ft 2",
    weight: 211,
    college: "California"
  }, 
  { 
    img: "https://static.clubs.nfl.com/image/upload/t_thumb_squared/f_auto/v1715703718/bears/trekrtbqyqsazopib6gt.jpg",
    name: "Rome Odunze",
    number: 15,
    team: "offense",
    position: "WR",
    height: "6ft 3",
    weight: 215,
    college: "Washington"
  }, 
  { 
    img: "https://static.clubs.nfl.com/image/upload/t_thumb_squared/f_auto/v1715704221/bears/pf9o2xid9arlz5ovvblh.jpg",
    name: "Cole Kmet",
    number: 85,
    team: "offense",
    position: "TE",
    height: "6ft 5",
    weight: 260,
    college: "Notre Dame"
  }, 
  { 
    img: "https://static.clubs.nfl.com/image/upload/t_thumb_squared/f_auto/v1715705024/bears/oyqays2eoolyfrdkm4rm.jpg",
    name: "Khari Blasingame",
    number: 35,
    team: "offense",
    position: "FB",
    height: "6ft 0",
    weight: 233,
    college: "Vanderbilt"
  }, 
  { 
    img: "https://static.clubs.nfl.com/image/upload/t_thumb_squared/f_auto/bears/pk9angyjw6elz52sjqsp.jpg",
    name: "Braxton Jones",
    number: 70,
    team: "offense",
    position: "LT",
    height: "6ft 4",
    weight: 310,
    college: "Southern Utah State"
  }, 
  { 
    img: "https://static.clubs.nfl.com/image/upload/t_thumb_squared/f_auto/v1715704305/bears/snc5weotpdknqnftx2da.jpg",
    name: "Teven Jenkins",
    number: 76,
    team: "offense",
    position: "LG",
    height: "6ft 5",
    weight: 320,
    college: "Oklahoma State"
  }, 
  { 
    img: "https://static.clubs.nfl.com/image/upload/t_thumb_squared/f_auto/v1715703019/bears/otandwe5rb9hxr1nh4y9.jpg",
    name: "Coleman Shelton",
    number: 65,
    team: "offense",
    position: "C",
    height: "6ft 4",
    weight: 285,
    college: "Washington"
  }, 
  { 
    img: "https://static.clubs.nfl.com/image/private/t_thumb_squared/f_auto/v1678981664/bears/c8ghxyyasbpfef937u7o.jpg",
    name: "Nate Davis",
    number: 64,
    team: "offense",
    position: "RG",
    height: "6ft 3",
    weight: 316,
    college: "Charlotte"
  }, 
  { 
    img: "https://static.clubs.nfl.com/image/upload/t_thumb_squared/f_auto/v1715704784/bears/cml0hthvtffy3p6si7e4.jpg",
    name: "Darnell Wright",
    number: 58,
    team: "offense",
    position: "RT",
    height: "6ft 5",
    weight: 333,
    college: "Tennessee"
  }, 
  { 
    img: "https://static.clubs.nfl.com/image/upload/t_thumb_squared/f_auto/v1715704130/bears/u8udxwxjkujjfkig8sqz.jpg",
    name: "DeMarcus Walker",
    number: 95,
    team: "defense",
    position: "LDE",
    height: "6ft 3",
    weight: 280,
    college: "Florida State"
  }, 
  { 
    img: "https://static.clubs.nfl.com/image/upload/t_thumb_squared/f_auto/v1715703831/bears/ty7gg3dkjrdanlgwlpul.jpg",
    name: "Andrew Billings",
    number: 97,
    team: "defense",
    position: "LDT",
    height: "6ft 1",
    weight: 311,
    college: "Baylor"
  }, 
  { 
    img: "https://static.clubs.nfl.com/image/upload/t_thumb_squared/f_auto/v1715703763/bears/cvhbzxjasgpeoty4po0e.jpg",
    name: "Gervon Dexter Sr.",
    number: 99,
    team: "defense",
    position: "RDT",
    height: "6ft 5",
    weight: 312,
    college: "Florida"
  }, 
  { 
    img: "https://static.clubs.nfl.com/image/private/t_thumb_squared/f_auto/bears/d4zm9vmyz4yuk8dndacr.jpg",
    name: "Montez Sweat",
    number: 98,
    team: "defense",
    position: "RDE",
    height: "6ft 5",
    weight: 262,
    college: "Mississippi State"
  }, 
  { 
    img: "https://static.clubs.nfl.com/image/upload/t_thumb_squared/f_auto/v1715704854/bears/nmlxd6u2z2rbubtre1kj.jpg",
    name: "T.J. Edwards",
    number: 53,
    team: "defense",
    position: "WLB",
    height: "6ft 1",
    weight: 242,
    college: "Wisconsin"
  }, 
  { 
    img: "https://static.clubs.nfl.com/image/upload/t_thumb_squared/f_auto/v1715704901/bears/ake48kapwoyyzljl5gsh.jpg",
    name: "Tremaine Edmunds",
    number: 49,
    team: "defense",
    position: "MLB",
    height: "6ft 4",
    weight: 250,
    college: "Virginia Tech"
  }, 
  { 
    img: "https://static.clubs.nfl.com/image/upload/t_thumb_squared/f_auto/v1715704814/bears/qkcgxb1jpxyxuzgbxcq8.jpg",
    name: "Jack Sanborn",
    number: 57,
    team: "defense",
    position: "SLB",
    height: "6ft 2",
    weight: 234,
    college: "Wisconsin"
  }, 
  { 
    img: "https://static.clubs.nfl.com/image/private/t_thumb_squared/f_auto/bears/rkenaicapfkb5sh1kd8z.jpg",
    name: "Jaylon Johnson",
    number: 1,
    team: "defense",
    position: "LCB",
    height: "6ft 0",
    weight: 195,
    college: "Utah"
  }, 
  { 
    img: "https://static.clubs.nfl.com/image/private/t_thumb_squared/f_auto/v1651816338/bears/epd9tdx8tqq7xi2fefiw.jpg",
    name: "Jaquan Brisker",
    number: 9,
    team: "defense",
    position: "SS",
    height: "6ft 1",
    weight: 200,
    college: "Penn State"
  }, 
  { 
    img: "https://static.clubs.nfl.com/image/upload/t_thumb_squared/f_auto/v1715703242/bears/jrfhyjkr1yggdkgsdzit.jpg",
    name: "Kevin Byard III",
    number: 31,
    team: "defense",
    position: "FS",
    height: "5ft 9",
    weight: 212,
    college: "Middle Tennessee State"
  }, 
  { 
    img: "https://static.clubs.nfl.com/image/upload/t_thumb_squared/f_auto/v1715705080/bears/cmmhujyuz97alrfszxzm.jpg",
    name: "Tyrique Stevenson",
    number: 29,
    team: "defense",
    position: "RCB",
    height: "6ft 0",
    weight: 204,
    college: "Miami"
  }, 
  { 
    img: "https://static.clubs.nfl.com/image/upload/t_thumb_squared/f_auto/v1715705401/bears/pkmixw027khpuq57i5pz.jpg",
    name: "Kyler Gordon",
    number: 6,
    team: "defense",
    position: "NB",
    height: "6ft 0",
    weight: 200,
    college: "Washington"
  }, 
  { 
    img: "https://static.clubs.nfl.com/image/upload/t_thumb_squared/f_auto/v1715705379/bears/c4akuxuichat7twcidsq.jpg",
    name: "Cairo Santos",
    number: 8,
    team: "special",
    position: "PK",
    height: "5ft 7",
    weight: 175,
    college: "Tulane"
  }, 
  { 
    img: "https://static.clubs.nfl.com/image/upload/t_thumb_squared/f_auto/v1715703579/bears/ncywp7mrslfquzhsn3pc.jpg",
    name: "Tory Taylor",
    number: 19,
    team: "special",
    position: "P/H",
    height: "6ft 3",
    weight: 223,
    college: "Iowa"
  }, 
  { 
    img: "https://static.clubs.nfl.com/image/upload/t_thumb_squared/f_auto/v1715702867/bears/f3ebcmveiogfmzblzory.jpg",
    name: "Dante Pettis",
    number: 81,
    team: "special",
    position: "PR",
    height: "6ft 1",
    weight: 195,
    college: "Washington"
  }, 
  { 
    img: "https://static.clubs.nfl.com/image/upload/t_thumb_squared/f_auto/v1715705324/bears/ouzaf92xvj6cuxqyaxpd.jpg",
    name: "Velus Jones Jr.",
    number: 12,
    team: "special",
    position: "KR",
    height: "6ft 0",
    weight: 200,
    college: "Tennessee"
  }, 
  { 
    img: "https://static.clubs.nfl.com/image/upload/t_thumb_squared/f_auto/v1715704936/bears/ntbh4z9zzgxsojkbgvax.jpg",
    name: "Patrick Scales",
    number: 48,
    team: "special",
    position: "LS",
    height: "6ft 3",
    weight: 226,
    college: "Utah State"
  }    
];

Object.freeze(players);
const { img, name, number, team, position, height, weight, college } = players;

const setPlayerCards = (arr = players) => {
  playerCards.innerHTML += arr
    .map(
      ({ img, name, number, position, height, weight, college }) =>
        `
        <div class="player-card">
          <img
            id="headshot"
            alt="player headshot"
            src="${img}"
          />
          <h2 class="name">${name}</h2>
          <h3 class="position">${position}</h3>
          <h3 class="number">#${number}</h3>
          <p class="stat">${height}</p>
          <p class="stat">${weight} lbs</p>
          <p class="college">${college}</p>
        </div>
      `
    ).join("");
};

rosterDropDown.addEventListener("change", (e) => {
  playerCards.innerHTML = "";

  switch (e.target.value) {
    case "offense":
      setPlayerCards(
        players.filter((player) => player.team === "offense")
      );
      break;
    case "defense":
      setPlayerCards(
        players.filter((player) => player.team === "defense")
      );
      break;
    case "special":
      setPlayerCards(
        players.filter((player) => player.team === "special")
      );
      break;
    default:
      setPlayerCards();
  }
})