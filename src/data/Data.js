import plan from "../assets/icons/plan.svg";
import support from "../assets/icons/support.svg";
import law from "../assets/icons/law.svg";
import wishes from "../assets/icons/wishes.svg";
import profile from "../assets/icons/profile.svg";
import obituaries from "../assets/icons/obituaries.svg";
import user1 from "../assets/images/user1.png";
import user2 from "../assets/images/user2.png";
import user3 from "../assets/images/user3.png";
import user4 from "../assets/images/user4.png";
import article1 from "../assets/images/article1.png";
import article2 from "../assets/images/article2.png";
import article3 from "../assets/images/article3.png";
import article4 from "../assets/images/article4.png";
import article5 from "../assets/images/article5.png";

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

export const userData = [
  {
    id: 1,
    name: "Chadwick Brown",
    img: user1,
    born: "12th January 1989",
    died: "24th June 2020",
    notice: "Death Notice",
    date: "12",
    location: "London",
    message:
      "Venenatis, quis risus justo, nisl, lorem venenatis. Nunc, pulvinar amet in odio ac tellus suscipit. Nibh commodo auctor vivamus id tincidunt. Venenatis, quis risus justo, nisl, lorem venenatis. Nunc, pulvinar amet in odio ac tellus suscipit. Nibh commodo auctor vivamus id tincidunt.",
  },
  {
    id: 2,
    name: "Chadwick Brown",
    img: user1,
    born: "12th January 1989",
    died: "24th June 2020",
    notice: "Acknowledgement",
    date: "12",
    location: "London",
    message:
      "Venenatis, quis risus justo, nisl, lorem venenatis. Nunc, pulvinar amet in odio ac tellus suscipit. Nibh commodo auctor vivamus id tincidunt. Venenatis, quis risus justo, nisl, lorem venenatis. Nunc, pulvinar amet in odio ac tellus suscipit. Nibh commodo auctor vivamus id tincidunt.",
  },
  {
    id: 3,
    name: "Chadwick Brown",
    img: user1,
    born: "12th January 1989",
    died: "24th June 2020",
    notice: "In Memoriam",
    date: "12",
    location: "London",
    message:
      "Venenatis, quis risus justo, nisl, lorem venenatis. Nunc, pulvinar amet in odio ac tellus suscipit. Nibh commodo auctor vivamus id tincidunt. Venenatis, quis risus justo, nisl, lorem venenatis. Nunc, pulvinar amet in odio ac tellus suscipit. Nibh commodo auctor vivamus id tincidunt.",
  },
];

export const userComments = [
  {
    name: "Jonny Peterz",
    message:
      "Mi ultricies dolor, quis risus, risus. Nisi, lacinia feugiat gravida sed tortor neque risus risus diam.",
    timestamp: "21",
    image: user2,
  },
  {
    name: "Jessy Peterz",
    message:
      "Enim nibh tristique proin pharetra malesuada aenean fames ac, amet. Aliquet eget pellentesque est quis.",
    timestamp: "21",
    image: user3,
  },
  {
    name: "Andrea Jonaththan",
    message:
      "Molestie aliquam, lacus dignissim volutpat cras. Aenean neque semper quam praesent morbi venenatis urna tempus.",
    timestamp: "21",
    image: user4,
  },
];

export const articles = [
  {
    id: 1,
    title: "Frazer’s Holiday Remembrance Ornaments",
    image: article1,
  },
  {
    id: 2,
    title: "Contemplating life from the viewpoint of a funeral director",
    image: article2,
  },
  {
    id: 3,
    title: "Frazer’s Holiday Remembrance Ornaments ",
    image: article3,
  },
  {
    id: 4,
    title: "Is Human Composting the Future of Deathcare? ",
    image: article4,
  },
  {
    id: 5,
    title: "Frazer’s Holiday Remembrance Ornaments",
    image: article5,
  },
];
