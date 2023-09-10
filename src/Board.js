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
            board : this.createBoard()
        }
    }
    //board having true or false is created.
    createBoard(){
        let board = [];
        const {nrows, ncols, chanceLightStartsOn} = this.props;

        for(let i = 0; i < nrows; i++){
            let row = [];
            for(let j = 0; j < ncols; j++){
                
                row.push(Math.random() < chanceLightStartsOn)
            }
            board.push(row);
        }
        console.log(board);
        return board;
    }
    render(){
        let tblboard = [];
        const board = this.state.board;
        const {nrows, ncols} = this.props;
        for(let i = 0; i < nrows; i++){
            let row = [];
            for(let j = 0; j < ncols; j++){
                const coord = `${i}-${j}`
                row.push(<Cell isLit={this.state.board[i][j]}/>)
            }
            tblboard.push(<tr >{row}</tr>);
        }
        
        return(
            <div className='Board'>
                <table>
                    <tbody>
                        {tblboard}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Board;