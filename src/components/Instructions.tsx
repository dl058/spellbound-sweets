import "./Instructions.css";

const Instructions = () => {
  return (
    <div className="Instructions">
      <h2 className="instruct"> Instructions</h2>
      <ul className="steps">
        <li>Lets make a cake!</li>
        <li>1. Click Add Layer</li>
        <li>2. Select a cake flavor</li>
        <li>3. Change the height and width to your liking</li>
      </ul>
    </div>
  );
};

export default Instructions;
