import './App.css';
import LeftSide from './components/LeftSide/LeftSide';
import MiddleSide from './components/MiddleSide/MiddleSide';

function App() {
  return (
    <div className="row">
      <div class="col-md-4">
        <LeftSide></LeftSide>
      </div>
      <div class="col-md-4">
        <MiddleSide></MiddleSide>
      </div>
      <div class="col-md-4">
        C
      </div>
    </div>

  );
}

export default App;
