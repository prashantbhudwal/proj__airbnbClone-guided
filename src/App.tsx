import "./App.css";
import Card from "./Components/Card/Card";
import Hero from "./Components/Hero/Hero";
import Navbar from "./Components/Navbar/Navbar";
const App = function () {
  return (
    <>
      {/* <Navbar /> */}
      <div className="app-container">
        {/* <Hero /> */}
        <Card />
      </div>
    </>
  );
};

export default App;
