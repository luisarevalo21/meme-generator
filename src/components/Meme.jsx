import { useState, useEffect } from "react";
const Meme = () => {
  const [meme, setMeme] = useState({ topText: "", bottomText: "", randomImage: "http://i.imgflip.com/1bij.jpg" });
  const [allMemes, setAllMemes] = useState([]);

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then(res => res.json())
      .then(({ data }) => setAllMemes(data.memes));
  }, []);

  const handleChange = event => {
    const { name, value } = event.target;
    setMeme(prevMeme => {
      return {
        ...prevMeme,

        [name]: value,
      };
    });
  };
  const getMemes = () => {
    const randomNum = Math.floor(Math.random() * allMemes.length);
    setMeme(prevMeme => {
      return {
        ...prevMeme,
        randomImage: allMemes[randomNum].url,
      };
    });
  };

  return (
    <main>
      <div className="meme">
        <div className="form">
          <input
            type="text"
            className="form-input"
            placeholder="Top Text"
            onChange={handleChange}
            value={meme.topText}
            name="topText"
          />
          <input
            type="text"
            className="form-input"
            placeholder="Bottom Text"
            onChange={handleChange}
            value={meme.bottomText}
            name="bottomText"
          />
          <button
            className="form-button"
            onClick={() => {
              getMemes();
            }}
          >
            Get a new meme image 🖼️
          </button>
        </div>
        <div className="meme">
          <img src={meme.randomImage} alt="meme" className="meme-image" />
          <h2 className="meme-text top">{meme.topText}</h2>
          <h2 className="meme-text bottom">{meme.bottomText}</h2>
        </div>
      </div>
    </main>
  );
};

export default Meme;
