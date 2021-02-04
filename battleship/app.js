let section     = document.querySelector( 'section' )
      $html     = '',
      board = [ 
      [".", ".", ".", ".", ".", ".", ".", ".", "."],
      [".", ".", ".", ".", ".", ".", ".", ".", "."],
      [".", ".", ".", ".", ".", ".", ".", ".", "."],
      [".", ".", ".", ".", ".", ".", ".", ".", "."],
      [".", ".", ".", ".", ".", ".", ".", ".", "."],
      [".", ".", ".", ".", ".", ".", ".", ".", "."],
      [".", ".", ".", ".", ".", ".", ".", ".", "."],
      [".", ".", ".", ".", ".", ".", ".", ".", "."],
      [".", ".", ".", ".", ".", ".", ".", ".", "."] 
    ],
    flag = true

const sailing = () => {
    $html = board.map( point => { 
      return point.map( p => `<div>${p}</div>`).join('')
    }).join('')
    section.innerHTML = $html
}
const turns = () => {
  if( flag ){
    p1()
  }

  if( flag ){
    p2()
  }
  if( flag ){
    turns()
  }
}

const p1 = () => {
  let x = '',
      y = ''
  
  x = prompt( 'P1 insert your x coordinate to fire')
  y = prompt( 'P1 insert your y coordinate to fire')
  
  if( board[y][x] === '#p2' ){
    alert('You did it')
    flag = false
    winner('p1')
  }else{
    alert('you missed')
    console.table(board);
  }

}

const p2 = () => {
  let x = '',
  y = ''

  x = prompt( 'P2 insert your x coordinate to fire')
  y = prompt( 'P2 insert your y coordinate to fire')

  if( board[y][x] === '#p1' ){
    alert('You did it')    
    flag = false
    winner('p2')
  }else{
    alert('you missed')
    console.table(board);
  }
}

const winner = win => {
  alert( `you are the winner best player 🦁; ${win}` )
}

const fire = () => {
  let x1 = '', x2 = '', y1 = '', y2  = ''
  x1 = prompt( 'insert the X coordinate of your ship P1 ( 0, 8 )' , )
  y1 = prompt( 'insert the Y coordinate of your ship P1 ( 0, 8 )' , )
  board[ y1 ][ x1 ] = '#p1'

  x2 = prompt( 'insert the X coordinate of your ship P2 ( 0, 8 )' , )
  y2 = prompt( 'insert the Y coordinate of your ship P3 ( 0, 8 )' , )
  board[ y2 ][ x2 ] = '#p2'
    
  turns()
}



window.addEventListener( 'load', () => {
  sailing()
  document.querySelector( 'button' ).addEventListener( 'click', fire )
})