import "./App.css";
import Hero from "./Components/Hero/Hero";
import Navbar from "./Components/Navbar/Navbar";
const App = function () {
  return (
    <>
      <Navbar />
      <div className="app-container">
        <Hero />
      </div>
    </>
  );
};

export default App;
