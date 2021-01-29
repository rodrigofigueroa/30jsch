const handSec = document.querySelector( '.hand.sec_hand' )
const handMin = document.querySelector( '.hand.min_hand' )
const handHrs = document.querySelector( '.hand.hrs_hand' )

const setDate = () => {
  const now = new Date() ,
        sec = now.getSeconds(),
        min = now.getMinutes() ,
        hrs = now.getHours(),
        dse = ( ( sec * 360 ) / 60 ) + 90,
        dmi = ( ( min * 360 ) / 60 ) + 90,
        dhr = ( ( ( hrs ) * 360 ) / 12 ) + 90
      if( dse === 90 ){
        handSec.style.transition = 'auto'
      }
      handSec.style.transform = `rotate( ${ dse }deg )`
      handMin.style.transform = `rotate( ${ dmi }deg )`
      handHrs.style.transform = `rotate( ${ dhr }deg )`
}
setInterval( setDate, 1000 )