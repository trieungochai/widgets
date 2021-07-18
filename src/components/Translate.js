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
  const [text, setText] = useState("");

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter Text</label>
          <input
            value={text}
            onChange={(event) => {
              console.log(event.target.value);
              setText(event.target.value);
            }}
          />
        </div>
      </div>
      <Dropdown
        label="Select a Language"
        options={options}
        selected={language}
        onSelectedChange={setLanguage}
      />
    </div>
  );
};

export default Translate;
