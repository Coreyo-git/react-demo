import './App.css';
import Header from './components/Header';
import JobList from './components/JobList';
import TextField from './components/TextField';

function App() {
  return (
    <div className="container">
      <Header />
      <JobList />
      <TextField />
    </div>
  );
}

export default App;
