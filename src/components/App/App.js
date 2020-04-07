import React from 'react';
import Header from '../Header/Header';
import Body from '../Body/Body';

class App extends React.Component {
  // render
  render() {
    // return
    return (
      <div>
        {/* a single wrapping element */}
        <Header />

        <Body />
      </div>
    );
  }
}

export default App;
