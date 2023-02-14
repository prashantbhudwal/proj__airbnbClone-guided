import "./App.css";
import Card from "./Components/Card/Card";
import Hero from "./Components/Hero/Hero";
import Navbar from "./Components/Navbar/Navbar";

const guide = [{
  img: "katie-zaferes.png",
  rating: "5.0",
  reviewCount: 6,
  country: "USA",
  title: "Life Lessons with Katie Zaferes",
  price: 136
}];


const App = function () {
  return (
    <>
      {/* <Navbar /> */}
      <div className="app-container">
        {/* <Hero /> */}
        <Card guideData={guide[0]}/>
      </div>
    </>
  );
};

export default App;
