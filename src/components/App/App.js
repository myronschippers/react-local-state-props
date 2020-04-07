import React, { Component } from 'react';
import Header from '../Header/Header';
import Counter from '../Counter/Counter';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: 'Hello Ursus',
      headingText: 'My Heading',
      pageHeading: 'React Local State',
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

  clickGreeting = () => {
    this.setState({
      pageHeading: 'Hey There...'
    });
  }

  render() {
    return (
      <div>
        <Header title={this.state.pageHeading} somethingElse={this.clickGreeting} />

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

          <Counter />
        </div>
      </div>
    );
  }
}

export default App;
