
window.addEventListener( 'load', () => {
  const unfriendly = window.open(
    '/anoter',
    'unfriendly1',`height=200, width=200`
    )
  let hw2 = 200, hw4 = 400, flag = false, stop = false

  unfriendly.addEventListener( 'load', () => {
    
    while( !stop && !flag && hw2 <= hw4 ){
      unfriendly.resizeTo( hw2, hw2 )
      if( hw2 >= 400 ){
        flag = !flag
      }
      ++hw2
    }
    while( !stop && flag && hw2 >= 200  ){
      unfriendly.resizeTo( hw2, hw2 )
      if( hw2 <= 200 ){
        flag = false
      }
      --hw2
    }
    const earthquake = setInterval( () => {
      if( stop ){
          unfriendly.moveTo( 800, 100 )
          unfriendly.moveTo( 700, 100 )
      }
    }, 100 )
    setTimeout( () => {
      stop = true
    }, 3000 )
  })
    setInterval( () => {
      const date = new Date()
      document.title = `${ 
        date.getHours() >= 12 
          ? ( date.getHours() - 12 ) 
          : date.getHours() }:${
             date.getMinutes() >= 10 
             ? date.getMinutes() 
             : '0' + date.getMinutes() }:${ date.getSeconds() }`
    }, 1000)
})