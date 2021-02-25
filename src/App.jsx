import React, { useState } from "react";

function App() {
  const [length, setLength] = useState(5);
  const [session, setSession] = useState(25);
  const [count, setCount] = useState(false);
  const [timer, setTimer] = useState(1500);
  const styles = {
    buttons: {
      cursor: "pointer",
      padding: "1em",
      fontSize: "1.8em",
    },
    setters: {
      fontSize: "1.8em",
    },
    card: {
      width: "100%",
    },
  };

  const handleCount = () => {
    setCount(!count);
  };

  const downBreak = () => {
    if (length > 1) {
      setLength(length - 1);
    }
  };
  const upBreak = () => {
    if (length < 60) {
      setLength(length + 1);
    }
  };
  const downSession = () => {
    if (session > 1) {
      setSession(session - 1);
      setTimer(timer - 60);
    }
  };
  const upSession = () => {
    if (session < 60) {
      setSession(session + 1);
      setTimer(timer + 60);
    }
  };
  const handleReset = () => {
    setLength(5);
    setSession(25);
    setCount(false);
    setTimer(1500);
  };

  const displayTime = () => {
    let mins = Math.floor(timer / 60);
    let secs = timer - mins * 60;
    secs = secs < 10 ? "0" + secs : secs;
    mins = mins < 10 ? "0" + mins : mins;
    return mins + ":" + secs;
  };

  return (
    <div className="container">
      <div className="row">
        <h1 className="text-center col-12 mt-2">Pomodoro Clock</h1>
      </div>
      <div className="row mt-3">
        <div id="break-label" className="col-sm-6 text-center">
          <h3>Break Length</h3>
          <span
            onClick={() => downBreak()}
            id="break-decrement"
            className="buttons"
            style={styles.buttons}
          >
            <i className="fas fa-angle-down"></i>
          </span>
          <span id="break-length" style={styles.setters}>
            {length}
          </span>
          <span
            onClick={() => upBreak()}
            id="break-increment"
            className="buttons"
            style={styles.buttons}
          >
            <i className="fas fa-angle-up"></i>
          </span>
        </div>
        <div id="session-label" className="col-sm-6 text-center">
          <h3>Session Length</h3>
          <span
            onClick={() => {
              downSession();
            }}
            id="session-decrement"
            className="buttons"
            style={styles.buttons}
          >
            <i className="fas fa-angle-down"></i>
          </span>
          <span id="session-length" style={styles.setters}>
            {session}
          </span>
          <span
            onClick={() => {
              upSession();
            }}
            id="session-increment"
            className="buttons"
            style={styles.buttons}
          >
            <i className="fas fa-angle-up"></i>
          </span>
        </div>
      </div>
      <div id="timer-label-container" className="row mt-4">
        <div className="col-sm-3"></div>
        <div id="timer-label" className="card col-sm-6 text-center p-0">
          <div className="card-header" style={styles.setters}>
            Session
          </div>
          <div className="card-body">
            <p id="time-left" style={{ fontSize: "3em" }}>
              {displayTime()}
            </p>
            <span
              onClick={() => {
                handleCount();
              }}
              className="p-2"
              id="start_stop"
              style={styles.buttons}
            >
              {count ? (
                <i className="fas fa-pause"></i>
              ) : (
                <i className="fas fa-play"></i>
              )}
            </span>
            <span
              onClick={() => {
                handleReset();
              }}
              className="p-2"
              id="reset"
              style={styles.buttons}
            >
              <i className="fas fa-stop"></i>
            </span>
          </div>
        </div>
        <div className="col-sm-3"></div>
      </div>
    </div>
  );
}

export default App;
