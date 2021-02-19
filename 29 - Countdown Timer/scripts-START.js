let timerInterval = ''
const timeName  = document.querySelector( '.display__time-left' ),
      timeEnd   = document.querySelector( '.display__end-time' ),
      buttons   = document.querySelectorAll( 'button' ),
      form      = document.querySelector( '#custom' )

function timer( seconds ){
  if( typeof seconds !== 'number' ) return 
  const now   = Date.now(),
        then  = now + seconds * 1000
    displayTime( seconds )
    timeReturn( then )
    timerInterval = setInterval( () => {
    const leftSeconds = Math.round( ( then - Date.now() ) / 1000 )
    if( leftSeconds === 0 ){
      clearInterval( timerInterval )
    }
    displayTime( leftSeconds )  
  }, 1000)
}

function displayTime( seconds ){
  const minutes = Math.floor( seconds / 60 )
  const secLeft = seconds % 60
  const display = `${ minutes }:${ secLeft < 10 ? 0 : '' }${ secLeft }`
  timeName.textContent = display
  document.title = display
}

function timeReturn( timestamp ){
  const date    = new Date( timestamp )
  const hours   = date.getHours()
  const minutes = date.getMinutes()
  const adjustedHour = hours > 12 ? hours - 12 : hours
  timeEnd.textContent = `${adjustedHour}:${minutes < 10 ? '0' : ''}${ minutes }`
}

buttons.forEach( button => button.addEventListener( 'click', function() {
  clearInterval( timerInterval )
  timer( +this.dataset.time );
}))

form.addEventListener( 'submit' , function(e){
  e.preventDefault()
  const inMinutes = this.minutes.value
  timer( inMinutes * 60 );
  this.reset()
})