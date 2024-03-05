import plan from "../icons/plan.svg";
import support from "../icons/support.svg";
import law from "../icons/law.svg";
import wishes from "../icons/wishes.svg";
import profile from "../icons/profile.svg";
import obituaries from "../icons/obituaries.svg";

export const sidebarItems = [
  { id: 1, name: "Plan Ahead", icon: plan, path: "/plan-ahead" },
  {
    id: 2,
    name: "Bereavement Support",
    icon: support,
    path: "/bereavement-support",
  },
  { id: 3, name: "Law & Advice", icon: law, path: "/law-advice" },
  { id: 4, name: "Funeral Wishes", icon: wishes, path: "/funeral-wishes" },
  {
    id: 5,
    name: "Funeral Directors",
    icon: profile,
    path: "/funeral-directors",
  },
  { id: 6, name: "Obituaries", icon: obituaries, path: "/obituaries" },
];
