let isLocal = location.hostname == ""
if (isLocal) document.title = "." + document.title

const LOCALS = getAll('local')
if (isLocal) { for (let local of LOCALS) local.style.display = 'block' }

function get(id) { return document.getElementById(id) }

function getAll(name) { 
    let byClass = document.getElementsByClassName(name)
    if (byClass.length != 0) return byClass
    return document.getElementsByTagName(name)
}

function random(min, max) { return (min + (Math.floor(Math.random() * (max + 1 - min)))) }

function increment(value, maxValue) { return value === maxValue ? 0 : value + 1 }

function decrement(value, maxValue) { return value === 0 ? maxValue : value - 1 }

function shuffle(array) {
    for (i = 0; i < array.length; i++) {
        randomIndex = random(i, array.length - 1)
        temp = array[i]
        array[i] = array[randomIndex]
        array[randomIndex] = temp
    }
}

let sounds = new Audio();
function playSound(name, volume = 1, audio = sounds) { 
    audio.volume = volume
    let src = 'sound/' + name + (name.includes('.') ? '' : '.wav')
    console.log(src)
    if (audio.src != src) { audio.src = src }
    audio.play();
}