import classes from "../styles/Answers.module.css";
import Checkbox from "./Checkbox";

export default function Answers() {
  return (
    <div className={classes.answers}>
      <Checkbox className={classes.answer} text="A New Hope 1" id="option1" />
      <Checkbox className={classes.answer} text="A New Hope 2" id="option2" />
    </div>
  );
}
