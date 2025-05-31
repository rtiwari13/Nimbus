import React from "react";
import {
  Target,
  CheckCircle,
  Users,
  Focus,
  LineChart,
  Repeat,
  Rocket,
} from "lucide-react";

const features = [
  {
    title: "Planning & Vision",
    description:
      "Define goals and align your team with a shared vision. Break down long-term objectives into actionable steps.",
    icon: <Target className="w-6 h-6 text-indigo-600" />,
  },
  {
    title: "Task Management",
    description:
      "Organize work with boards, lists, and cards. Create, assign, and manage tasks with full flexibility.",
    icon: <CheckCircle className="w-6 h-6 text-indigo-600" />,
  },
  {
    title: "Team Collaboration",
    description:
      "Work together with comments, mentions, real-time updates, and file sharing—all in one place.",
    icon: <Users className="w-6 h-6 text-indigo-600" />,
  },
  {
    title: "Focus & Flow",
    description:
      "Minimize distractions and stay in the zone with time tracking, focused views, and smart reminders.",
    icon: <Focus className="w-6 h-6 text-indigo-600" />,
  },
  {
    title: "Progress Tracking",
    description:
      "Track performance with visual dashboards, burn-down charts, and productivity metrics.",
    icon: <LineChart className="w-6 h-6 text-indigo-600" />,
  },
  {
    title: "Agile Workflows",
    description:
      "Sprint planning, backlogs, and retrospectives made simple with drag-and-drop agile boards.",
    icon: <Repeat className="w-6 h-6 text-indigo-600" />,
  },
  {
    title: "Execution & Delivery",
    description:
      "Move from idea to execution efficiently with automation, deadlines, and milestone tracking.",
    icon: <Rocket className="bg-[var(--primary-blue)] w-9 h-9 text-white" />,
  },
];

const FeatureSection = () => {
  return (
    <section className="bg-[var(--background)]  py-16 px-4 sm:px-6 lg:px-16">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Features that Empower Teams
        </h2>
        <p className="mt-4 text-lg text-gray-100">
          Nimbus combines powerful tools and simple design to boost productivity and team performance.
        </p>
      </div>

      <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex items-start space-x-4 bg-[var(--card)] p-6 rounded-2xl shadow-sm hover:shadow-md transition"
          >
            <div>{feature.icon}</div>
            <div>
              <h3 className="text-lg text-white font-semibold ">{feature.title}</h3>
              <p className="mt-1 text-sm text-white">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeatureSection;
