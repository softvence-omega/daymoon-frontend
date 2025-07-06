import { FC } from "react";

interface ToggleProps {
  on: boolean;
  setOn: (data: boolean) => void;
}

const Toggle: FC<ToggleProps> = ({ on, setOn }) => {
  const handleClick = () => {
    const next = !on;
    setOn(next);
  };

  return (
    <div className="flex items-center gap-4">
      <button
        type="button"
        role="switch"
        aria-checked={on}
        onClick={handleClick}
        className={`relative w-14 h-8 flex-shrink-0 rounded-full transition-colors duration-300 focus:outline-none cursor-pointer
          ${on ? "bg-sunset-orange" : "bg-gray-300"}
        `}
      >
        <span
          className={`absolute left-1 top-1 w-6 h-6 rounded-full bg-white transition-transform duration-300
            ${on ? "translate-x-6" : "translate-x-0"}
          `}
        />
      </button>
    </div>
  );
};

export default Toggle;
