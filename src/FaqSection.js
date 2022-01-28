/* eslint-disable no-lone-blocks */
import React, { useState } from "react";
import "./FaqSection.css";
function FaqSection({ question, answer }) {
  const [showPara, setShowPara] = useState(false);
  const [rotate, setRotate] = useState("faqSectionTop__arrow");

  const showParagraph = () => {
    {
      showPara ? setShowPara(false) : setShowPara(true);
    }
    {
      rotate
        ? setRotate("faqSectionTop__arrowRotated")
        : setShowPara("faqSectionTop__arrow");
    }
  };
  return (
    <div className="faqSection">
      <div className="faqSectionTop">
        <h4 className="faqSectionTop__question">{question}</h4>
        <img
          src="/images/icon-arrow-down.svg"
          alt=""
          className={rotate}
          onClick={showParagraph}
        />
      </div>
      <div className="faqSectionHidden">{showPara ? <p>{answer}</p> : ""}</div>
    </div>
  );
}

export default FaqSection;
