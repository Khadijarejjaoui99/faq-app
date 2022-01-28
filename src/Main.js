import React from "react";
import FaqSection from "./FaqSection";
import "./Main.css";
function Main() {
  return (
    <div className="main">
      <div className="main__left">
        <img src="images/Project_73-02.jpg" alt="" />
      </div>
      <div className="main__right">
        <h1 className="main__rightTitle">FAQ</h1>
        <FaqSection
          question={"How many team members can I invite?"}
          answer={
            "You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan."
          }
        />
        <FaqSection
          question={"What is the maximum file upload size?"}
          answer={
            "No more than 2GB. All files in your account must fit your allotted storage space."
          }
        />

        <FaqSection
          question={"How do I reset my password?"}
          answer={
            "Click “Forgot password” from the login page or “Change password” from your profile page. A reset link will be emailed to you."
          }
        />
        <FaqSection
          question={"Can I cancel my subscription?"}
          answer={
            "Yes! Send us a message and we’ll process your request no questions asked."
          }
        />
        <FaqSection
          question={"Do you provide other supports?"}
          answer={
            "Chat and email support is available 24/7. Phone lines are open during normal business hours."
          }
        />
      </div>
    </div>
  );
}

export default Main;
