import { useRef, useState } from "react";
import classes from "../styles/ProgressBar.module.css";
import Button from "./Button";

export default function ProgressBar({ next, prev, submit, progress }) {
  const [tooltip, setTooltip] = useState(false);
  const tooltipRef = useRef();

  function toggleToolTip() {
    if (tooltip) {
      setTooltip(false);
      tooltipRef.current.style.display = "none";
    } else {
      setTooltip(true);
      tooltipRef.current.style.left = `calc(${progress}% - 65px)`;
      tooltipRef.current.style.display = "block";
    }
  }

  return (
    <div
      className={classes.progressBar}
      onMouseOver={toggleToolTip}
      onMouseOut={toggleToolTip}
    >
      <Button className={classes.next} onClick={prev}>
        <span className="material-icons-outlined"> arrow_back </span>
      </Button>
      <div className={classes.rangeArea}>
        <div className={classes.tooltip} ref={tooltipRef}>
          {progress}% Complete!
        </div>
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
