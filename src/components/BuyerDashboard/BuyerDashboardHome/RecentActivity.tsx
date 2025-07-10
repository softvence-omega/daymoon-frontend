import React from "react";
import { FiAlertCircle } from "react-icons/fi";
import { BsFillBoxSeamFill } from "react-icons/bs";
import { MdOutlineCreditCard, MdOutlineMessage } from "react-icons/md";
import { FaTruck } from "react-icons/fa";
import { Link } from 'react-router-dom';

// Activity data structure
interface Activity {
  id: number;
  type: "purchase" | "message" | "completed" | "payment";
  description: string;
  time: string;
}

// Sample activity data
const activities: Activity[] = [
  {
    id: 1,
    type: "purchase",
    description: "You placed an order for 25 Bluetooth Headphones",
    time: "2h ago",
  },
  {
    id: 2,
    type: "message",
    description: "New message received from TechWave supplier",
    time: "4h ago",
  },
  {
    id: 3,
    type: "completed",
    description: "Your order #54789 has been shipped",
    time: "8h ago",
  },
  {
    id: 4,
    type: "payment",
    description: "Payment of $1500 received for order #12345",
    time: "1d ago",
  },
];

// Activity Icon Configuration
interface IconConfig {
  icon: React.ReactNode;
  bgColor: string;
  iconColor: string;
}

// Icon configuration object for each activity type
const activityIconConfig: Record<Activity["type"], IconConfig> = {
  purchase: {
    icon: <BsFillBoxSeamFill />,
    bgColor: "bg-[#FFA6001A]",
    iconColor: "text-[#FFA600]",
  },
  message: {
    icon: <MdOutlineMessage />,
    bgColor: "bg-[#1565D81A]",
    iconColor: "text-[#1565D8]",
  },
  completed: {
    icon: <FaTruck />,
    bgColor: "bg-[#CC12C91A]",
    iconColor: "text-[#CC12C9]",
  },

  payment: {
    icon: <MdOutlineCreditCard />,
    bgColor: "bg-[#FB2B2B1A]",
    iconColor: "text-[#FB2B2B]",
  },
};

// Activity Icon Component
interface ActivityIconProps {
  type: Activity["type"];
}

const ActivityIcon: React.FC<ActivityIconProps> = ({ type }) => {
  const config = activityIconConfig[type] || {
    icon: <FiAlertCircle />,
    bgColor: "bg-gray-100",
    iconColor: "text-gray-500",
  };

  return (
    <div className={`p-2 ${config.bgColor} rounded-lg`}>
      <div className={`text-base ${config.iconColor}`}>{config.icon}</div>
    </div>
  );
};

// Activity Card Component
interface ActivityCardProps {
  activity: Activity;
}

const ActivityCard: React.FC<ActivityCardProps> = ({ activity }) => {
  return (
    <div className="flex items-center gap-4 rounded-lg hover:bg-gray-50 transition-colors">
      {/* Left side - Icon */}
      <ActivityIcon type={activity.type} />

      {/* Right side - Activity info and time */}
      <div className="flex-1">
        <p className="text-[#484848] font-regular text-base">
          {activity.description}
        </p>
        <span className="text-sm text-[#666666]">{activity.time}</span>
      </div>
    </div>
  );
};

const RecentActivity = () => {
  return (
    <div className="border border-[#E5E5E5] rounded-2xl shadow-sm p-6 overflow-x-auto space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-medium text-[#484848] leading-tight">
          Recent Activity
        </h1>
        <Link to="/buyer/dashboard/orders" className="underline text-[#F04436] text-base font-medium hover:text-[#d6332a] transition-colors">
          View All
        </Link>
      </div>

      {/* Cards stacked vertically */}
      <div className="flex flex-col gap-5">
        {activities.map((activity) => (
          <ActivityCard key={activity.id} activity={activity} />
        ))}
      </div>
    </div>
  );
};

export default RecentActivity;
