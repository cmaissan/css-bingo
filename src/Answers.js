import './Answers.css';
import Answer from './Answer';

function Answers(props) {

  return (
    <div className="Answers">
      <table>
        <thead>
          <tr>
            <th>Letter</th>
            <th>Selector</th>
            <th>Markup</th>
          </tr>
        </thead>
        <tbody>
          {props.selectors.map((selector, index) => {
            return (
              <Answer
                key={index}
                letter={selector.letter}
                selector={selector.selector}
                markup={selector.markup}
              />
            );
          })}
        </tbody>
      </table>
      <button className="Button" onClick={props.onClose}>Close</button>
    </div>
  );
}

export default Answers;
