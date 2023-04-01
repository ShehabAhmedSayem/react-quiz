import classes from "../styles/ProgressBar.module.css";
import Button from "./Button";
export default function ProgressBar({ next, prev, submit, progress }) {
  return (
    <div className={classes.progressBar}>
      <Button className={classes.next} onClick={prev}>
        <span className="material-icons-outlined"> arrow_back </span>
      </Button>
      <div className={classes.rangeArea}>
        <div className={classes.tooltip}>{progress}% Complete!</div>
        <div className={classes.rangeBody}>
          <div
            className={classes.progress}
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
      <Button className={classes.next} onClick={next}>
        <span>{progress === 100 ? "Submit" : "Next Question"}</span>
        <span className="material-icons-outlined"> arrow_forward </span>
      </Button>
    </div>
  );
}
