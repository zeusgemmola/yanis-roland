import AppBar from "./AppBar/AppBar";
import Convertisseur from "./Convertisseur/Convertisseur";

const Home = () => (
  <div className="App">
    <header>
      <AppBar />
    </header>
    <main>
      <div className="container">
        <Convertisseur />
      </div>
    </main>
  </div>
);

export default Home;
