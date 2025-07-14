import React from "react";

interface MultiStepTrackerProps {
  totalSteps: number;
  currentStep: number;
  title?: string;
}

const MultiStepTracker: React.FC<MultiStepTrackerProps> = ({
  totalSteps,
  currentStep,
  title,
}) => {
  return (
    <>
      <div className="flex gap-2 justify-center items-center w-full max-w-md mx-auto">
        {[...Array(totalSteps)].map((_, i) => {
          const stepNum = i + 1;
          const isCompleted = stepNum < currentStep;
          const isActive = stepNum === currentStep;

          return (
            <div
              key={i}
              className={`flex h-2 w-10 sm:w-[62px] rounded-md transition-colors duration-300
              ${
                isCompleted
                  ? "bg-[#F14141]"
                  : isActive
                  ? "bg-[#F14141]"
                  : "bg-[#FCDDDC]"
              }
            `}
            />
          );
        })}
      </div>

      <div className="w-full max-w-md mx-auto text-center py-10  text-jet-black font-semibold text-3xl">
        <h2>{title}</h2>
      </div>
    </>
  );
};

export default MultiStepTracker;
