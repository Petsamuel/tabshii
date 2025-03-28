import { CiCircleCheck } from "react-icons/ci";
import img2 from "../assets/2.svg";
const Section2 = () => {
  const list = [
    {
      icon: <CiCircleCheck />,
      title: "Increase Visibility",
      description: "Track every action taken by employees.",
    },
    {
      icon: <CiCircleCheck />,
      title: "Enhanced Security",
      description: "Prevent unauthorized changes and fraud",
    },  
    {
      icon: <CiCircleCheck />,
      title: "Boost Collaboration",
      description:
        "Keep your team connected with built-in ",
    },
  ];

  return (
    <div className="flex gap-3 md:flex-row flex-reverse-col">
      <div className="w-[683px]">
        <img src={img2} alt="HR Solution tab" className="w-fit" />
      </div>
      <div className="flex gap-4 flex-col ">
        <h2 className="text-[#1c1c1c] font-bold  text-[4rem] w-[42.7rem]">
          Why Tabs?
        </h2>

        <p className="text-2xl font-semibold text-[#1C1C1C]/70 w-[36.5rem] font-['DM Sans']">
          With Tabs HR Solutions, you get a seamless way to monitor employee
          actions, assign roles, and enable real-time collaboration, all in one
          platform.
        </p>
        <div className="">
          {
            list.map((item, index) => (
              <div key={index} className="flex gap-4 items-center my-4">
                <div className="text-[#2895C6] text-[2rem]">{item.icon}</div>
                <div className="flex gap-1">
                  <h3 className="text-[#1C1C1C] font-semibold text-xl">
                    {item.title}-
                  </h3>
                  <p className="text-[#1C1C1C]/70 text-lg">{item.description}</p>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default Section2;
