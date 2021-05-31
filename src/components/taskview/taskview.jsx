import React from "react";
import "./taskview.css";

export default function taskView(props) {
  return (
    <div className="task-view-container">
      <div className="task-bubble"></div>
      <p className="task-title">{props.task.taskTitle}</p>
      <p className="task-subtitle">
        {new Date(props.task.assignmentDate).toISOString().slice(0, 10)}
      </p>
      <div
        className={
          (props.task.endDate === null ? "non-affected" : "affected") +
          " task-state"
        }
      >
        {props.task.endDate === null ? "Affecté" : "Terminé"}
      </div>
    </div>
  );
}
