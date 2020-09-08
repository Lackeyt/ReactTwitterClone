import React from "react";
import PropTypes from "prop-types";

function Tweet(props){
  return (
    <React.Fragment>
    <p>{props.tweetText}</p>
    <p>Tweet by: {props.userName}</p>
    </React.Fragment>
  );
}

Tweet.propTypes = {
  tweetText: PropTypes.string.isRequired,
  userName: PropTypes.string.isRequired
};

export default Tweet;

// function ListItem(props) {
//   // Correct! There is no need to specify the key here:
//   return <li>{props.value}</li>;
// }

// function NumberList(props) {
//   const numbers = props.numbers;
//   const listItems = numbers.map((number) =>
//     // Correct! Key should be specified inside the array.
//     <ListItem key={number.toString()} value={number} />
//   );
//   return (
//     <ul>
//       {listItems}
//     </ul>
//   );
// }

// const numbers = [1, 2, 3, 4, 5];
// ReactDOM.render(
//   <NumberList numbers={numbers} />,
//   document.getElementById('root')
// );