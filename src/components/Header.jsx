import troll from "../assets/troll-face.png";
const Header = () => {
  return (
    <header className="header">
      {/* <div className="left-header"> */}
      <img src={troll} alt="troll-face" className="troll-image" />
      <h2 className="header-title">Meme Generator</h2>
      {/* </div> */}

      <p className="header-project">React Course - Project 3</p>
    </header>
  );
};
export default Header;
