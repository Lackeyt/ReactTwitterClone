import React from "react";

class TweetForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      value: 'What are you thinking?'
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('An essay was submitted: ' + this.state.value);
    event.preventDefault();
  }


  render() {
    return(
      <form>
        <textarea value={this.state.value} onChange={this.handleChange} />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default TweetForm;