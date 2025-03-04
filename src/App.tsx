import React from 'react';
import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import ExternalAlertPage from './components/ExternalAlertPage';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
  let items = [
    'New York' ,
    'San Francisco' ,
    'Tokyo' ,
    'London' ,
    'Paris'
  ];
  const handleSelectItem = (item: string) => {
    console.log(item);
  }

  // Handler for main page-Button
    const handleMainButtonClick = () => {
      console.log('Button clicked on main page.');
    };

  return (
      <Router>
        <div className="container mt-3">
          <nav>
            <Link to="/" className="btn btn-link">Home</Link>
            <Link to="/external-alert" className="btn btn-link">External Alert</Link>
          </nav>

          <Routes>
            <Route path="/" element={
              <>
                <Alert onButtonClick={handleMainButtonClick} />
                <ListGroup items={items} heading={"Cities"} onSelectItem={handleSelectItem}
                />
              </>
            } />
            <Route path="/external-alert" element={<ExternalAlertPage/>} />
          </Routes>
        </div>
      </Router>
  );
 // return <div><ListGroup items = {items} heading="Cities" onSelectItem={handleSelectItem} /></div>
}

export default App;