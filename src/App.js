import React, { useState } from "react";

import Translate from "./components/Translate";
// import Dropdown from "./components/Dropdown";
// import Accordion from "./components/Accordion";
// import Search from "./components/Search";

const items = [
  {
    title: "What is React?",
    content: "React is front end JavaScript framework.",
  },
  {
    title: "Why use React?",
    content: "React is favorite JS library among engineers.",
  },
  {
    title: "How do you use React?",
    content: "You use React by creating components.",
  },
];

const options = [
  {
    label: "The Color Red",
    value: "red",
  },
  {
    label: "The Color Green",
    value: "green",
  },
  {
    label: "A Shape of Blue",
    value: "blue",
  },
];

const App = () => {
  // const [selected, setSelected] = useState(options[0]);
  // const [showDropdown, setShowDropdown] = useState(false);

  return (
    <div>
      <Translate />
    </div>
  );
};

export default App;
