import React, {Component} from 'react';
import './Cell.css';

//Cell has a key, a isLit boolean, and a function to flip the isLit boolean

class Cell extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(evt) {
        this.props.flipCellsAroundMe();
    }
    render() {
        let classes = "Cell" + (this.props.isLit ? " Cell-lit" : "");
        return (
        <div className={classes} onClick={this.handleClick} />
        );
    }
}   

export default Cell;