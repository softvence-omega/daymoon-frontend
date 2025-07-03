import CommonSpace from "@/common/CommonSpace";
import { FaPlus } from "react-icons/fa";

const counterList = [
  { id: 1, title: "1.5M", label: "Active users buyers" },
  { id: 2, title: "5,000K", label: "Daily inquiries" },
  { id: 3, title: "120", label: "Buyer countries and regions" },
];
const Counter = () => {
  return (
    <CommonSpace>
      <div className="w-full max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {counterList.map((counter) => (
          <div className="shadow rounded-2xl">
            <div className="  flex items-center justify-center flex-col  gap-3  py-10 ">
              <div className="text-sunset-orange flex items-center ">
                <h2 className="text-5xl text-sunset-orange font-medium leading-12 tracking-tight ">
                  {counter.title}
                </h2>
                <span className="text-3xl">
                  <FaPlus />
                </span>
              </div>

              <p>{counter.label}</p>
            </div>
          </div>
        ))}
      </div>
    </CommonSpace>
  );
};

export default Counter;
