import Section from "./component/Section1";
import Section2 from "./component/Section2";
import Section3 from "./component/Section3";
import "./App.css";
import Next from "./component/Next";
import { Title } from "./component/Title";
function App() {
  return (
    <>
      <div className="font-['DM Sans'] my-[10svh] mx-[5svw]  flex flex-col">
        <Section />
        <Next />
        <Section2 />
        <Next />
        <Title
          title="key Features"
          className="flex justify-center font-bold lg:text-[4rem] mt-[6rem] text-5xl"
        />
        <Section3 />
      </div>
    </>
  );
}

export default App;
