import "./App.css";
import Navbar from "./Components/Navbar";
import HeadlineCard from "./Components/HeadlineCard";
import Collections from "./Components/Collections";
import Locations from "./Components/Locations";
import GetApp from "./Components/GetApp";
// import Practice from "./Components/Practice";
import Explore from "./Components/Explore";
import Zomato from "./Components/Zomato";

function App() {
  return (
    <div>
      <Navbar />
      <HeadlineCard />
      <Collections />
      <Locations />
      <GetApp />
      <Explore />
      {/* <Practice /> */}
      <Zomato />
    </div>
  );
}

export default App;
