// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Login';
import DataPage from './DataPage';
import { Fragment } from 'react';

function App() {
  return (
    <div className="App">
      {/* <Router>
        <Fragment>
          <Routes>
            <Route exact path="/">
              <Login />
            </Route>
            <Route path="/data">
              <DataPage />
            </Route>
          </Routes>
        </Fragment>
    </Router> */}
    <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Login/>} />
          <Route path="/data" element={<DataPage/>} />
        </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
