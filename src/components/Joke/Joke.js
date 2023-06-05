import { useState } from "react";

const Joke = ({ setup, punchline }) => {
  const [isShown, setIsShown] = useState(false);

  const toggleShown = () => {
    setIsShown(prev => {
      return !prev;
    });
  };
  console.log(isShown);
  return (
    <div>
      {setup && <h3>{setup}</h3>}
      {isShown && <p>{punchline}</p>}

      <button onClick={toggleShown}>Show Punchline</button>
      <hr />
    </div>
  );
};

export default Joke;
