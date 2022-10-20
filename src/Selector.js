import './Selector.css';

function Selector(props) {

  const formatted = () => {

    // Encode HTML entities
    let encoded = props.markup.replace(/[&<>'"]/g,
      tag => ({
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        "'": '&#39;',
        '"': '&quot;'
      }[tag])
    );

    // Highlight elements
    let regex = /==(.*)==/gi;
    encoded = encoded.replace(regex, '<mark>$1</mark>');

    return encoded;
  };

  return (
    <div className="Selector">
      <div className="Selector-Letter">Under the &ldquo;{props.letter}&rdquo;</div>
      <div className="Selector-Code" dangerouslySetInnerHTML={{ __html: formatted()}}></div>
      {props.note && <span>({props.note})</span>}
    </div>
  );
}

export default Selector;
