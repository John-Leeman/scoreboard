function addScore(arg, num) {
    let id = arg + "-score"
    let target = document.getElementById(id)
    target.textContent = Number(target.textContent) + num
    leader()
}

const homeScore = document.getElementById("home-score")
const guestScore = document.getElementById("guest-score")

function leader() {
if (Number(guestScore.textContent) > Number(homeScore.textContent)) {
    guestScore.style.outline = 'solid #F94F6D 5px';
    homeScore.style.outline = '';
} else if (Number(guestScore.textContent) == Number(homeScore.textContent)){
    guestScore.style.outline = '';
    homeScore.style.outline = '';
} else {
    homeScore.style.outline = 'solid #F94F6D 5px';
    guestScore.style.outline = '';
}}