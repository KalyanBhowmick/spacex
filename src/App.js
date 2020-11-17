
import './App.css';
import Header from './components/Header';
import History from './components/History';
import PayloadList from './components/PayloadList';

function App() {
  return (
    <div className="App">
      <Header />
      {/* <History /> */}
      <PayloadList />
    </div>
  );
}

export default App;
