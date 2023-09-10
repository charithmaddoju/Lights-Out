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
        return board;
    }

    flipCellsAround(coord){
        const {nrows, ncols} = this.props;
        const board = this.state.board;
        let [x,y] = coord.split('-').map(Number)

        function flipCell(x,y){
            if(x>=0 && x<nrows && y>=0 && y<ncols){
                board[x][y] = !board[x][y];
            }
        }

        flipCell(x,y);
        flipCell(x,y-1);
        flipCell(x,y+1);
        flipCell(x-1,y);
        flipCell(x+1,y);
        
        let hasWon = board.every(row => row.every(cell => !cell))

        this.setState({hasWon,board})
    }

    render(){
        if(this.state.hasWon){
            return(
                <h1>You WIN!!!</h1>
            )
        }
        let tblboard = [];
        const board = this.state.board;
        const {nrows, ncols} = this.props;
        for(let i = 0; i < nrows; i++){
            let row = [];
            for(let j = 0; j < ncols; j++){
                const coord = `${i}-${j}`
                row.push(<Cell key={coord}
                isLit={this.state.board[i][j]}
                flipCellsAroundMe={
                    () => this.flipCellsAround(coord)
                }/>)
            }
            tblboard.push(<tr key={i}>{row}</tr>);
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