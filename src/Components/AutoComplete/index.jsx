import React, { Component } from "react";
import OnOutsiceClick from "react-outclick";
import { debounce } from "lodash"
import getSuggestions from "../../Api";
import KEYS from "../../constants";
import "./Autocomplete.css";

/* Component is used to display input field and get autocomplete suggestions  */
class AutoComplete extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: '',
      options: [],
      activeIndex: 0,
      searchedWord: '',
      isFocused: false,
      showOptions: false
    }

    // Creating the ref to input for the focus
    this.inputRef = React.createRef()
    this.debouncedInputChange = debounce(this.getSuggestedOptions, 500);
  }

  handleChange = (event) => {
    this.setState({ value: event.target.value }, () => {
      this.getWords()
    });
  };

  getSuggestedOptions = (toBeSearched) => {
    getSuggestions(toBeSearched)
      .then((suggestions) => {
        this.setState({ ...this.state, options: suggestions });
      });
  }

  // Edge case to not display suggestions when input is empty string is handeled here
  getWords = () => {
    const { value } = this.state
    const tempValue = value
    if (value !== "") {
      const lastCharacter = tempValue.slice(-1);
      if (lastCharacter === " ") {
        this.setState({ ...this.state, options: [] });
        return;
      }
      const inputs = value.split(" ")
        .filter((word) => word !== "");
      const toBeSearched = inputs.pop();
      this.setState({ ...this.state, searchedWord: toBeSearched });
      this.debouncedInputChange(toBeSearched)
    } else {
      this.setState({ ...this.state, options: [] });
    }
  }

  // Space is appended to a suggestion once its selected and incomplete word is replaced with
  // suggestion here.
  selectOption = (inputOption) => {
    const { value } = this.state
    const option = `${inputOption} `;
    let newValue = value;
    if (value === "") {
      newValue.append(option);
    } else {
      const words = newValue.split(" ").slice(0, -1);
      words.push(option);
      newValue = words.join(" ");
    }

    this.setState({ value: newValue, activeIndex: 0 }, () => {
      this.getWords()
    });
    if (this.inputRef && this.inputRef.current) {
      this.inputRef.current.focus();
    }
  };

  // Regex is used to find current incomplete word in the suggestions displayed to highlight them
  highlightOption = (option) =>
    option.replace(new RegExp(this.state.searchedWord, "gi"), (match) =>
      `<span class="highlight">${match}</span>`);

  handleKeyPress = (e) => {
    const { activeIndex, options } = this.state
    // When enter key is pressed, use the selected suggestion
    if (e.keyCode === KEYS.ENTER) {
      if (options && options.length && options[activeIndex])
        this.selectOption(options[activeIndex]);
    } else if (e.keyCode === KEYS.UP) {
      e.preventDefault();
      if (activeIndex === 0) {
        return;
      }
      this.setState({ activeIndex: this.state.activeIndex - 1 });
    } else if (e.keyCode === KEYS.DOWN) {
      e.preventDefault();
      if (activeIndex === options.length - 1) {
        return;
      }
      this.setState({ activeIndex: this.state.activeIndex + 1 });
    }
  };

  handleFocus = () => {
    this.setState({
      isFocused: !this.state.isFocused,
      showOptions: true
    }, () => {
      this.getWords()
    });
  };

  render() {
    const { value, showOptions, options, activeIndex } = this.state

    return (
      <OnOutsiceClick onOutsideClick={
        () => {
          this.setState({
            showOptions: false
          });
        }
      }>
        <div
          id="inputOptionWrapper"
          className="inputOptionWrapper"
        >
          <input
            className="search"
            ref={this.inputRef}
            type="text"
            onChange={this.handleChange}
            onKeyDown={this.handleKeyPress}
            onFocus={this.handleFocus}
            value={value}
          />
          {!!showOptions && (
            <div className="options">
              {
                options.map((option, index) => (
                  <div
                    key={option}
                    className={index === activeIndex ? "activeOption option" : "option"}
                    onClick={() => this.selectOption(option)}
                    dangerouslySetInnerHTML={{ __html: this.highlightOption(option) }}
                  />
                ))
              }
            </div>
          )}
        </div>
      </OnOutsiceClick >
    );
  }
};

export default AutoComplete;
