import React, { useState } from "react";

import Dropdown from "./Dropdown";

const options = [
  {
    label: "Japanese",
    value: "JP",
  },
  {
    label: "Chinese",
    value: "CN",
  },
  {
    label: "Hindi",
    value: "HI",
  },
];

const Translate = () => {
  const [language, setLanguage] = useState(options[0]);

  return (
    <div>
      <Dropdown
        options={options}
        selected={language}
        onSelectedChange={setLanguage}
      />
    </div>
  );
};

export default Translate;
