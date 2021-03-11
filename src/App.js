import './App.css';
import Charts from './components/Charts';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <div className="container">
      <h1 className="text-bg-start mb-3" >Covid Cases Dashboard</h1>
      <Charts/>
      <Dashboard/>
    </div>
  );
}

export default App;
