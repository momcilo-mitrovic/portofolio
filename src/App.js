import "./App.css";
import Card from "./components/Card/Card";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Title from "./components/Title/Title";

function App() {
  return (
    <div>
      <div className="App">
        <Header />
        <Hero />
      </div>
      <Title />
      <Card />
    </div>
  );
}

export default App;
