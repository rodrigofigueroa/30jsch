
let containerVideo  = [],
      video         = [],
      controls      = [],
      progress      = [],
      play          = [],
      volume        = [],
      playBack      = [],
      btnSkip       = [],
      setIntPrg     = []

const changeButton = () => {
  play.textContent === '||'
  ? play.textContent = '►'
  : play.textContent = '||'
}

const playVideo = () => {
  const method = video.paused ? 'play' : 'pause'
  video[method]()
}

const progressOfVideo = () => {
  let child     = progress.querySelector( '.progress_filled' ).style,
      duration  = video.duration,
      cTime     = video.currentTime
      !child.width 
        ? child.width = '0px' 
        : child.width = `${ ( cTime * 100 ) / duration }%`
}

const stopVideo = () => {
  video.pause()
  video.currentTime = 0
}
const changeVolume = e => video.volume = +e.target.value 

const playBackfunc = e => video.playbackRate  = e.target.value

const lessOrMore = e => {
  let data  = +e.target.dataset.skip
      cTime = video.currentTime
      cTime <= 0 ? cTime = 0 : ''
      data === 25 
        ? video.currentTime += 2.5 
        : video.currentTime -= 1.0
}

const scrub = e => video.currentTime = ( 
    e.offsetX * video.duration ) / progress.offsetWidth

function startEverything(){
  containerVideo = document.querySelector( '.container_video' )
  video          = containerVideo.querySelector( 'video' )
  controls       = containerVideo.querySelector( '.controls' )
  progress       = controls.querySelector( '.progress' )
  play           = controls.querySelector( 'button[id="play"]' )
  volume         = controls.querySelector( 'input[class="volume"]' )
  playBack       = controls.querySelector( 'input[name="playBackRate"]')
  btnSkip        = controls.querySelectorAll( '.player__button' ),
  flag           = false
  
  //console.log(containerVideo, video ,controls,  progress, play, volume, playBack, btnSkip)
  video.addEventListener( 'click', playVideo )
  video.addEventListener( 'ended' , stopVideo )
  video.addEventListener( 'play', changeButton )
  video.addEventListener( 'timeupdate', progressOfVideo  )
  video.addEventListener( 'pause', changeButton )
  play.addEventListener( 'click', playVideo )
  volume.addEventListener( 'input', changeVolume )
  playBack.addEventListener( 'input', playBackfunc )
  btnSkip.forEach( btn => btn.addEventListener( 'click', lessOrMore ) )
  progress.addEventListener( 'click', scrub )
  progress.addEventListener( 'mousemove', e => flag && scrub( e ) )
  progress.addEventListener( 'mousedown', () => flag = true )
  progress.addEventListener( 'mouseup' , () => flag = false )
}

window.addEventListener( 'load' , startEverything )