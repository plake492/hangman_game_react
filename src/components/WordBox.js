import React, { Component } from "react";
import words from "../utilities/Words.json";

class WordBox extends Component {
  state = {
    lettersGuessed: [],
    randomWord: ""
  };

  pickRandomWord = () => {
    words.forEach(x => {
      if (x.id === Math.floor(Math.random() * words.length)) {
        this.setState({ randomWord: x.word });
      }
    });
  };

  componentDidMount() {
    this.pickRandomWord();
  }

  render() {
    console.log(this.state.randomWord);
    return (
      <div>
        <h1>{this.state.randomWord}</h1>
      </div>
    );
  }
}

export default WordBox;
