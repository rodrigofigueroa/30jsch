

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
        console.warn( `Dude You Really Needs to Change your Browser, this won't Work!`)
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
  },
  domCheck: (function(){
    function _private (){
      // privadte
      console.log('object');
    }
    return {
       setDom(){
         console.log('setDom');
         _private()
       },
       getDom(){
        console.log('getDom');
       }
      }
  }())
}

const MY_MODULE = {
  in_action: (function(){
    //other modules
    const another = {
      another_module: 'Other'
    }
    //local Variables and private
    const local_variableA = 'a',
          local_variableB = 'b'
      //private
    function hidden(){}
    // public
    function initModul(){
      console.log('new Module imported');
    }
    return {
      hi: initModul
    }
  })()
} 

document.querySelectorAll( 'button' )
.forEach( btn => MYAPP.addListener( btn, 'click', function(e) {
    console.log( this, e )
  })
)

window.allStyles = MYAPP.checkStyles( document.querySelector( 'button' ) )
window.domCheck = MYAPP.domCheck
window.MY_MODULE = MY_MODULE