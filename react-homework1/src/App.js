import "./App.css";
import { Navbar } from "./navbar";
import { ReusableComponent } from "./reusableComponent";
import { Visitors } from "./visitors";

function App() {
  return (
    <div className="app">
      <Navbar />
      <div className="reusable_data">
        <ReusableComponent name="Reviews" value="1,281" />
        <ReusableComponent name="Average Rating" value="4.6" />
        <ReusableComponent
          name="Sentiment Analysis"
          value="960"
          value2="122"
          value3="321"
        />
      </div>
      <Visitors />
    </div>
  );
}

export default App;
