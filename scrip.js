const $video = document.querySelector('#video')
const $play = document.querySelector('#play')
const $pause = document.querySelector('#pause')
const $forward = document.querySelector('#forward')
const $backward = document.querySelector('#backward')


$play.addEventListener('click',handlePlay)
function handlePlay(){
    $video.play()
    $play.hidden = true
    $pause.hidden = false
    console.log('Click a boton play')
}

$pause.addEventListener('click',handlePause)
function handlePause(){
    $video.pause()
    $play.hidden = false
    $pause.hidden = true
    console.log('Click a boton pause')
}

$backward.addEventListener('click', handleBackward)

function handleBackward(){
    $video.currentTime = $video.currentTime - 10
    console.log('Atras 10 segundos',$video.currentTime)
}

$forward.addEventListener('click', handleForward)

function handleForward (){
    $video.currentTime = $video.currentTime + 10
    console.log('Adelante 10 segundos', $video.currentTime)
}
const $progress = document.querySelector("#progress")
$video.addEventListener('loadedmetadata',hanleloadded)
$video.addEventListener('timeupdate',hanleTimeUdate)

function hanleloadded(){
    $progress.max = $video.duration
    console.log("ha cargado mi video",$video.duration)
}

function hanleTimeUdate(){
    $progress.value = $video.currentTime
    //console.log("tiempo actual",$video.currentTime)
}

$progress.addEventListener("input", hanleInput)

function hanleInput(){
    $video.currentTime = $progress.value
    console.log($progress.value)
}


