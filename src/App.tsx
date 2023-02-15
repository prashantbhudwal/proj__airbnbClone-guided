import "./App.css";
import Card from "./Components/Card/Card";
import Hero from "./Components/Hero/Hero";
import Navbar from "./Components/Navbar/Navbar";
import guide from "./data";

const App = function () {
  const cardArray = guide.map((guide) => <Card guideData={guide} />);

  return (
    <>
      <Navbar />
      <div className="app-container">
        <Hero />
        <>{cardArray}</>
      </div>
    </>
  );
};

export default App;
