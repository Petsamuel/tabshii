import { FaCircleCheck } from "react-icons/fa6";
import img2 from "../assets/2.svg";
const Section2 = () => {
  const list = [
    {
      icon: <FaCircleCheck />,
      title: "Increase Visibility",
      description: "Track every action taken by employees.",
    },
    {
      icon: <FaCircleCheck />,
      title: "Enhanced Security",
      description: "Prevent unauthorized changes and fraud",
    },
    {
      icon: <FaCircleCheck />,
      title: "Boost Collaboration",
      description: "Keep your team connected with built-in ",
    },
  ];

  return (
    <div className="flex gap-3 lg:flex-row flex-col my-[4rem] items-center lg:h-[473.31px]">
      <div className="">
        <img src={img2} alt="HR Solution tab" className="" />
      </div>
      <div className="flex gap-4 flex-col lg:w-[42.7rem]">
        <h2 className="text-[#1c1c1c] font-bold  text-[4rem] ">Why Tabs?</h2>

        <p className="text-2xl font-semibold text-[#1C1C1C]/70 text-pretty font-['DM Sans'] lg:text-left">
          With Tabs HR Solutions, you get a seamless way to monitor employee
          actions, assign roles, and enable real-time collaboration, all in one
          platform.
        </p>
        <div className="flex flex-col lg:items-center ">
          {list.map((item, index) => (
            <div key={index} className="flex lg:gap-1 gap-2 items-center my-4">
              <div className="text-[#1C1C1C]/70 text-[1.57rem]">
                {item.icon}
              </div>
              <div className="flex lg:gap-1 lg:w-[559px] w-full flex-col lg:flex-row">
                <h3 className="text-[#1C1C1C]/70 font-bold text-xl">
                  {item.title}-
                </h3>
                <p className="text-[#1C1C1C]/70 text-lg  ">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Section2;
