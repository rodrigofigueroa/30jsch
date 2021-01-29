
function removeTrantition ( e ) {
  if( e.propertyName !== 'transform' ) return
  this.classList.remove( 'playing' )
}

function playingDrums ( e ){
  let key = '', audio = null, attribute = '', keys = []
  key = document.querySelector( `.key[data-key="${ e.keyCode }"]` )
  if( !key ) return
  if( key ){
    attribute = key.getAttribute( 'data-key' )
    audio     = document.querySelector(`audio[data-key="${ attribute }"]`)
    audio.currentTime = 0
    audio.play()
    key.classList.add('playing')
  }
  keys        = document.querySelectorAll( '.key' )
  keys.forEach( key => 
      key.addEventListener( 'transitionend' , removeTrantition ) )
}

window.addEventListener( 'load', function() {
    this.addEventListener( 'keypress', playingDrums )
})