import Board from './Board';
import './App.css';

//The structure of the app is as follows:
// -App
//  -Board
//    -Cell

//App is the parent component, and it renders the Board component.
//Board renders the Cell components, and keeps track of the game state.
//Cell renders a single cell, and handles the click event to flip the cell.

function App() {
  return (
    <div className="App">
      <Board nrows={3} ncols={3}/>
    </div>
  );
}

export default App;
