import React from "react";
import CSSTransition from "react-transition-group/CSSTransition";
import "./Modal.css";

const modal = (props) => {
  const animationTiming = {
    enter: 400,
    exit: 400,
  };
  return (
    <CSSTransition
      in={props.show}
      timeout={animationTiming}
      mountOnEnter
      unmountOnExit
      // classNames="fade-slide"
      classNames={{
        enterActive: "ModalOpen",
        exitActive: "ModalClosed",
      }}
    >
      <div className="Modal">
        <h1>A Modal</h1>
        <button className="Button" onClick={props.closed}>
          Dismiss
        </button>
      </div>
    </CSSTransition>
  );
};

export default modal;
