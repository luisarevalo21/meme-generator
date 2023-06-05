import "./App.css";
import Header from "./components/Header";
import Meme from "./components/Meme";
import Test from "./components/Test";
// import Boxes from "./components/Boxes/Boxes";
// import Joke from "./components/Joke/Joke";
// import jokes from "./components/Joke/jokesData.js";

function App() {
  // const joke = jokes.map(joke => {
  //   return <Joke key={joke.id} setup={joke.setup} punchline={joke.punchline} />;
  // });
  return (
    <div className="App">
      <Header />
      {/* <Boxes darkMode={true} /> */}

      {/* {joke} */}
      {/* <Test /> */}
      <Meme />
    </div>
  );
}

export default App;
