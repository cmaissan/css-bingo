import './Answer.css';

function Answer(props) {

  return (
    <tr className="Answer">
      <td className="Answer-Letter">{props.letter}</td>
      <td className="Answer-Selector">{props.selector}</td>
      <td className="Answer-Code">{props.markup.replaceAll('==', '')}</td>
    </tr>
  );
}

export default Answer;
