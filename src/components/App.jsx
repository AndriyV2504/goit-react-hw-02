import Description from "./Description/Description";
import Options from "./Options/Options";
import Feedback from "./Feedback/Feedback";
import Notification from "./Notification/Notification";

const App = () => {
  return (
    <div>
      <Description
        nameCafe="Sip Happens Café"
        description="Please leave your feedback about our service by selecting one of the options below."
      />
      <Options />
      <Feedback />
      <Notification />
    </div>
  );
};

export default App;
