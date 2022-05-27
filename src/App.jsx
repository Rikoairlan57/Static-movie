import "./App.css";
import "./style/LandingPage.css";
import Navigation from "./components/Navigation";
import Intro from "./components/Intro";
import Populer from "./components/Populer";
import AnimeList from "./components/AnimeList";

function App() {
  return (
    <div>
      <div className="banner">
        <Navigation />
        <Intro />
      </div>

      <div className="populer">
        <Populer />
      </div>

      <div className="animelist">
        <AnimeList />
        <h1 className="text-white text-center">Learn More</h1>
      </div>
    </div>
  );
}

export default App;
