import React, { Component } from "react";
import words from "../utilities/Words.json";

const randomize = Math.floor(Math.random() * words.length); //? generates random word from word list //
const wordDashedArr = [];
const indexNum = 0;

class WordBox extends Component {
  state = {
    lettersGuessed: [],
    randomWord: [],
    wordDashed: ""
  };

  addDashes = word => {
    word.forEach(x => {
      if (x !== " " && x !== "!" && x !== "?" && x !== ".") {
        wordDashedArr.push(x.replace(x, "-"));
      } else {
        wordDashedArr.push(x);
      }
    });
    this.setState({ wordDashed: wordDashedArr });
  };

  pickRandomWord = () => {
    words.forEach(x => {
      if (x.id === randomize) {
        this.setState({ randomWord: x.word.toLowerCase().split("") });
        this.addDashes(x.word.split("")); //? turns random word into dashes
      }
    });
  };

  handleKeyUp = event => {
    this.state.randomWord.forEach(x => {
      if (x === event.key) {
        console.log(this.state.randomWord.indexOf(x));
        // console.log("That letter is correct", x.indexOf(this.state.randomWord));
      }
    });
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  componentDidMount() {
    this.pickRandomWord();
  }

  render() {
    console.log(this.state.randomWord);
    console.log(this.state.wordDashed);
    return (
      <div>
        <h1>{this.state.wordDashed}</h1>
        <input type="text" ref="letterGuess" onKeyUp={this.handleKeyUp} />
      </div>
    );
  }
}

export default WordBox;
