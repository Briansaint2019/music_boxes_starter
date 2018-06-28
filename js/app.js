//create variables at the top
var keys = document.querySelectorAll(".key")
var notes = {
    cKey: document.querySelector("#cAudio"),
    dKey: document.querySelector("#dAudio"),
    eKey: document.querySelector("#eAudio"),
    fKey: document.querySelector("#fAudio"),
    gKey: document.querySelector("#gAudio"),
    aKey: document.querySelector("#aAudio"),
    bKey: document.querySelector("#bAudio"),

}


//define functions in the middle
function playNote(key) {
    notes[key].currentTime = 0
    notes[key].play()

}




// call functions and/or add event listners
keys.forEach(function (key) {
    key.addEventListener("click", function () {
        playNote(key.id)
    })
})
document.addEventListener('keydown', function (event) {
    if (event.key == "a") {
        playNote("cKey")
    }
    if (event.key == "s") {
        playNote("dKey")
    }
    if (event.key == "d") {
        playNote("eKey")
    }
    if (event.key == "f") {
        playNote("fKey")
    }
    if (event.key == "j") {
        playNote("gKey")
    }
    if (event.key == "k") {
        playNote("aKey")
    }
    if (event.key == "l") {
        playNote("bKey")
    }


})