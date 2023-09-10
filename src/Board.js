import React, {Component} from 'react';
import Cell from './Cell';
import './Board.css';

class Board extends Component{
    static defaultProps = {
        nrows : 5,
        ncols : 5,
        chanceLightStartsOn : 0.25
    }
    constructor(props){
        super(props)
        this.state = {
            hasWon : false,
            //board : this.createBoard()
        }
    }

    render(){
        return(
            <div className='Board'>
                <Cell isLit={false} />
                <Cell isLit={true} />
                <Cell isLit={true} />
            </div>
        )
    }
}

export default Board;