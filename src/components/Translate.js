import React, { useState } from "react";

import Dropdown from "./Dropdown";
import Convert from "./Convert";

const options = [
  {
    label: "Japanese",
    value: "ja",
  },
  {
    label: "Chinese (Simplified)",
    value: "zh",
  },
  {
    label: "German",
    value: "de",
  },
  {
    label: "Vietnamese",
    value: "vi",
  },
  {
    label: "Spanish",
    value: "es",
  },
  {
    label: "Italian",
    value: "it",
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
      <hr />
      <h3 className="ui header">Output</h3>
      <Convert language={language} text={text} />
    </div>
  );
};

export default Translate;
