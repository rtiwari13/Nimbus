import { useState } from "react";

// Import images
import workItems from "../assets/image1.png";
import projects from "../assets/image2.png";
import initiatives from "../assets/image1.png";
import workflows from "../assets/image1.png";
import intake from "../assets/image1.png";
import wiki from "../assets/image1.png";
import ai from "../assets/image1.png";

const tabs = [
  { name: "Work Items", image: workItems },
  { name: "Projects", image: projects },
  { name: "Initiatives", image: initiatives },
  { name: "Workflows", image: workflows },
  { name: "Intake", image: intake },
  { name: "Wiki", image: wiki },
  { name: "AI", image: ai },
];

export default function TabSwitcher() {
  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <div className="bg-[var(--background)] flex flex-col items-center space-y-6 px-4 py-8  min-h-screen text-white">
      {/* Tab Switcher */}
      <h2 className="font-semibold text-4xl text-center">Ready to rain productivity? <br /> Step into your Nimbus</h2>
      <p className="text-center">
        Nimbus transforms Planning & Vision into agile workflows. <br />
         Collaborate  &
          track Progress like
        changing skies — all in one atmospheric ecosystem.
      </p>
      <div className="flex space-x-6 border-b border-gray-700 pb-2">
        {tabs.map((tab) => (
          <button
            key={tab.name}
            onClick={() => setActiveTab(tab)}
            className={`relative font-medium px-2 pb-1 transition-all duration-300 ${
              activeTab.name === tab.name
                ? "text-white"
                : "text-gray-400 hover:text-white"
            }`}
          >
            {tab.name}
            {activeTab.name === tab.name && (
              <span className="absolute left-0 bottom-0 h-[2px] w-full bg-white rounded-full" />
            )}
          </button>
        ))}
      </div>

      {/* Image View */}
      <div className="mt-6 w-1/2 max-w-6xl">
        <img
          src={activeTab.image}
          alt={activeTab.name}
          className="w-full h-auto rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
}
