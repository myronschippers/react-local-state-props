import React, { Component } from 'react';
import Header from '../Header/Header';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: 'Hello Ursus',
      headingText: 'My Heading',
    };

  }

  changeWords = (event) => {
    console.log('CHANGE WORDS!!!');
    // the element is represented by...
    const elementChanged = event.target;

    this.setState({
      text: elementChanged.value,
    });
  }

  alterHeading() {
    this.setState({
      headingText: 'TOTES CHANGED IT'
    });
  }

  clickMe = (event) => {
    this.alterHeading();
  }

  render() {
    return (
      <div>
        <Header />

        <div>
          {/* <input
            type="text"
            name="AltText"
            placeholder="New Words..."
            onChange={this.changeWords}
          /> */}
          <input
            type="text"
            name="newText"
            placeholder="New Words..."
            onChange={this.changeWords}
          />
          <p>{this.state.text}</p>

          <h2>{this.state.headingText}</h2>

          <button onClick={this.clickMe}>Click Me</button>
        </div>
      </div>
    );
  }
}

export default App;
