// import Img1 from "./svg/SvgImg1";
import Img1 from "../assets/1.svg";
const Section = () => {
  return (
    <div className="flex gap-3 lg:flex-row flex-col-reverse ">
      <div className="flex gap-4 flex-col lg:w-1/2">
        <h2 className="text-[#1c1c1c] font-bold  lg:text-[4rem] lg:w-[42.7rem] text-5xl leading-normal">
          HR Solutions in Tabs: Track, Manage & Collaborate with Ease
        </h2>

        <p className="text-xl font-normal text-[#1C1C1C]/70 lg:w-[36.5rem] font-['DM Sans']">
          Your business is in safe hands because you’re always in control. Tabs
          is more than an inventory management system—it’s a workforce and
          collaboration hub.
        </p>

        <div>
          <button className="bg-[#2895C6] capitalize font-['Montserrat'] rounded-lg font-semibold text-white mt-6 w-[8.6rem] h-[48px] ">
            join Waitlist
          </button>
        </div>
      </div>

      <div className="">
        {/* <Img1 className="w-fit" /> */}
        <img src={Img1} alt="HR Solution tab" />
      </div>
    </div>
  );
};

export default Section;
