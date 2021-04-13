
import './App.css';
import { Main } from './components'
import   {DataLayer } from './datalayer/DataLayer';
import reducer, { initialState } from './datalayer/reducer'

function App() {
  return (
    <div className="app">
      <DataLayer initialState={initialState} reducer= {reducer}>
      <Main />
      </DataLayer>
    </div>
  );
}

export default App;
