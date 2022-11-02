import React from "react";
import Transition from "react-transition-group/Transition";
import "./Modal.css";

const modal = (props) => {
  const animationTiming = {
    enter: 400,
    exit: 400,
  };
  return (
    <Transition
      in={props.show}
      timeout={animationTiming}
      mountOnEnter
      unmountOnExit
    >
      {(state) => {
        const classes = `Modal ${
          state === "entering"
            ? "ModalOpen"
            : state === "exiting"
            ? "ModalClosed"
            : null
        }`;
        return (
          <div className={classes}>
            <h1>A Modal</h1>
            <button className="Button" onClick={props.closed}>
              Dismiss
            </button>
          </div>
        );
      }}
    </Transition>
  );
};

export default modal;
