import Section from "./component/Section1";
import Section2 from "./component/Section2";
import Section3 from "./component/Section3";
import "./App.css";
import Next from "./component/Next"
function App() {
  return (
    <>
      <div className="font-['DM Sans'] my-[10svh] mx-[5svw]">
        <Section />
        <Next />
        <Section2 />
        <Next />
        <Section3 />
      </div>
    </>
  );
}

export default App;
