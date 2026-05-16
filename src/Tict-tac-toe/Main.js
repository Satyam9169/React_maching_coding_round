import React, {useState} from 'react'

const initialBoard = Array(9).fill(null)

const Main = () => {
    const[board, setBoard] = useState(initialBoard);
   


  return (
    <div className='game'>
         <h1>Tic Tac Toe</h1>
            <div className='status'>
                Player 1: X is Turn
                <button className='' >Reset Game</button>
            </div>
            <div className='board'>
            </div>
    </div>
  )
}

export default Main