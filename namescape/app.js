

const MYAPP = {
  addListener(element, type, callback, 
      conf = { capture: false, once: false} 
    ){
    if( 'addEventListener' in window ){
      MYAPP.addListener = function(
        element, type, callback, 
      conf = { capture: false, once: false} 
      ){
        element.addEventListener( type, callback, conf )
      }
    }else{
      MYAPP.addListener = function(){
        console.warn( `Dude You Really Needs to Change Browser, this won't Work!`)
      }
    }
    element.addEventListener( type, callback, conf )
  },
  checkStyles( element ){
    let styles = element.style
    let allStyles = function(){return styles}
    return {
      init: allStyles,
      yetAnother: allStyles
    }
  },
  namespace( string ){
    let current = MYAPP,
        parts   = string.split( '.' )
      for( let i = 0; i < parts.length; i++ ){
        if( !current[ parts[ i ] ] ){
          current[ parts[ i ] ] = {}
        }
        current = current[ parts[ i ] ]
      }
  },
  eventCross:{
    addEventListener
  }
}

document.querySelectorAll( 'button' )
.forEach( btn => MYAPP.addListener( btn, 'click', function(e) {
    console.log( this, e )
  })
)

window.allStyles = MYAPP.checkStyles( document.querySelector( 'button' ) )