import React from 'react';
import { Main } from './components/Main';

class App extends React.Component {
  render() {
    return (
        <div>
            <div className="header">
                <h1>Who are you?</h1>
                <h2>Just another Star Wars game</h2>
            </div>
            <div className="main">
                <Main />
            </div>
            <div className="footer">
                Impressum
            </div>
        </div>
    );
  }
}

export default App;
