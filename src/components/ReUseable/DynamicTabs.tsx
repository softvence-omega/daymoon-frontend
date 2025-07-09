import { Tabs, TabsList, TabsTrigger } from "@radix-ui/react-tabs";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const contentVariants = {
  initial: { opacity: 0, x: 20 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -20 },
};

interface TabItem {
  value: string;
  label: string;
  icon: string; // image path
  content: React.ReactNode;
}

interface DynamicTabsProps {
  tabItems: TabItem[];
}

const DynamicTabs = ({ tabItems }: DynamicTabsProps) => {
  const [tabValue, setTabValue] = useState(tabItems[0]?.value || "");

  return (
    <div className="flex justify-center mt-12 items-center">
      <Tabs value={tabValue} onValueChange={setTabValue} className="w-full">
        <TabsList className="flex justify-center gap-10 bg-transparent p-0 border-none">
          {tabItems.map((tab) => (
            <TabsTrigger
              key={tab.value}
              value={tab.value}
              className="relative px-2 py-2 text-sm sm:text-base font-medium text-muted-foreground
                data-[state=active]:text-black data-[state=active]:font-semibold
                data-[state=active]:after:content-[''] data-[state=active]:after:absolute
                data-[state=active]:after:left-0 data-[state=active]:after:bottom-[-1px]
                data-[state=active]:after:h-[2px] data-[state=active]:after:w-full
                data-[state=active]:after:bg-[#FCAB3F] rounded-none bg-transparent
                border-none shadow-none text-center cursor-pointer flex items-center gap-4"
            >
              <img src={tab.icon} alt={tab.label} className="w-12 h-12" />
              {tab.label}
            </TabsTrigger>
          ))}
        </TabsList>

        <AnimatePresence mode="wait" initial={false}>
          {tabItems.map(
            (tab) =>
              tabValue === tab.value && (
                <motion.div
                  key={tab.value}
                  variants={contentVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  transition={{ duration: 0.3 }}
                >
                  {tab.content}
                </motion.div>
              )
          )}
        </AnimatePresence>
      </Tabs>
    </div>
  );
};

export default DynamicTabs;
