import React, { useEffect } from "react";
import axios from "axios";

const Convert = ({ language, text }) => {
  useEffect(() => {
    // console.log("New language or text");
    axios.post(
      "https://translation.googleapis.com/language/translate/v2",
      {},
      {
        params: {
          q: text,
          target: language.value,
          key: "AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM",
        },
      }
    );
  }, [language, text]);

  return <div />;
};

export default Convert;
