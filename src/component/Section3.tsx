import { FaCircleCheck } from "react-icons/fa6";
import img4 from "../assets/4.svg";
import img3 from "../assets/3.svg";
import img5 from "../assets/5.svg";
const Section3 = () => {
  const list = [
    {
      svg: img4,
      name: "Employee Activity Tracking",
      discription:
        "Stay informed about every activity in your business with Tabs. It tracks all employee actions, providing complete visibility and accountability.",
      items: [
        {
          icons: <FaCircleCheck />,
          title: "increase visibility",
        },
        {
          icons: <FaCircleCheck />,
          title: "Enhanced Security",
        },
        {
          icons: <FaCircleCheck />,
          title: "Boost Collaboration",
        },
      ],
    },
    {
      svg: img5,
      name: "Role-Base Access & Permission",
      discription:
        "Give your team access to only what they need, reducing risk and protecting your business.",
      items: [
        {
          icons: <FaCircleCheck />,
          title: "Customizable Roles",
        },
        {
          icons: <FaCircleCheck />,
          title: "Restricted Access",
        },
        {
          icons: <FaCircleCheck />,
          title: "Approval Workflows",
        },
        {
          icons: <FaCircleCheck />,
          title: "Data Security",
        },
      ],
    },
    {
      svg: img3,
      name: "Team Collaboration Hub",
      discription:
        "Tabs isn’t just about tracking—it’s about teamwork. Employees can communicate seamlessly within the platform to enhance collaboration and efficiency.",
      items: [
        {
          icons: <FaCircleCheck />,
          title: "Real-Time Chat System",
        },
        {
          icons: <FaCircleCheck />,
          title: "Task Based Conversation",
        },
        {
          icons: <FaCircleCheck />,
          title: "Stronger TeamWork",
        },
      ],
    },
  ];
  return (
    <section>
      <div className="grid lg:grid-cols-3 grid-col-1 gap-5 mt-[4rem] ">
        {list.map((item, index) => (
          <div
            key={index}
            className={`${
              index === 0
                ? "bg-[#EFA3DA]/10"
                : index === 1
                ? "bg-[#00B090]/10"
                : "bg-[#5243C2]/10"
            } p-6 rounded-xl`}
          >
            <div className="flex justify-center items-center gap-3 my-3">
              <img
                src={item.svg}
                alt="HR Solution tab"
                className="w-[10.5rem] h-[10.5rem] bg-white p-6 rounded-full"
              />
            </div>
            <div className="flex gap-4 flex-col justify-center items-center   my-4 text-center">
              <h2 className="text-[#1c1c1c] font-bold  text-4xl text-pretty ">
                {item.name}
              </h2>
              <p className=" font-semibold text-[#1C1C1C]/70 text-pretty font-['DM Sans'] text-lg ">
                {item.discription}
              </p>
              <div className="flex flex-col">
                {item.items.map((item, index) => (
                  <div key={index} className="flex gap-1 items-center my-2">
                    <div className="text-[#1C1C1C]/70 text-[25px] flex ">
                      {item.icons}
                    </div>
                    <div className="flex gap-1 ">
                      <h3 className="text-[#1C1C1C]/70 font-bold text-pretty text-xl capitalize w-full">
                        {item.title}
                      </h3>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Section3;
