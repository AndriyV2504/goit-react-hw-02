import React from "react";
import Description from "./components/Description/Description";
import Options from "./components/Options/Options";
import Feedback from "./components/Feedback/Feedback";
import Notification from "../components/Notification/Notification";

const App = () => {
  return (
    <div>
      <Description />
      <Options />
      <Feedback />
      <Notification />
    </div>
  );
};

export default App;
