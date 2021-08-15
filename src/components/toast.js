import React, { useState } from "react";
export default function Toast() {
  const [RightToastVisiblity, setRightToastVisibility] = useState("hidden");
  const [LeftToastVisibility, setLeftToastVisibility] = useState("hidden");
  const [TopToastVisibility, setTopToastVisibility] = useState("hidden");
  const [BottomToastVisibility, setBottomToastVisibility] = useState("hidden");

  return (
    <div className="toastComponents">
      <div className="card">
        <h1>This a Right-sided Toast</h1>
        <button
          className="btn btn-primary"
          onClick={() => {
            setRightToastVisibility("visible");
            setTimeout(() => setRightToastVisibility("hidden"), 2000);
          }}
          style={{ opacity: 1 }}
        >
          Click here to launch
        </button>
        <div
          className="toast1"
          style={{
            border: ".5px solid purple",
            opacity: 1,
            borderRadius: "1rem",
            visibility: RightToastVisiblity,
            backgroundColor: "white",
            position: "absolute",
            top: "19rem",
            left: "46rem",
            width: "10rem"
          }}
        >
          <h4>Right-sided</h4>
          <body> Toast body </body>
        </div>
      </div>

      <div className="card">
        <h1>This a left-sided Toast</h1>
        <button
          className="btn btn-primary"
          onClick={() => {
            setLeftToastVisibility("visible");
            setTimeout(() => setLeftToastVisibility("hidden"), 1000);
          }}
          style={{ opacity: 1 }}
        >
          Click here to launch
        </button>
        <div
          className="modal1"
          style={{
            border: ".5px solid purple",
            opacity: 1,
            borderRadius: "1rem",
            visibility: LeftToastVisibility,
            backgroundColor: "white",
            position: "absolute",
            top: "19rem",
            left: "58rem",
            width: "10rem"
          }}
        >
          <h4 style={{ color: "blue" }}>Left-sided</h4>
          <body>Toast Body</body>
        </div>
      </div>

      <div className="card">
        <h1>This a top-popped Toast</h1>
        <button
          className="btn btn-primary"
          onClick={() => {
            setTopToastVisibility("visible");
            setTimeout(() => setTopToastVisibility("hidden"), 1000);
          }}
          style={{ opacity: 1 }}
        >
          Click here to launch
        </button>
        <div
          className="toast3"
          style={{
            border: "1px solid purple",
            opacity: 1,
            borderRadius: "1rem",
            visibility: TopToastVisibility,
            backgroundColor: "white",
            position: "absolute",
            top: "32rem",
            left: "36rem",
            width: "10rem"
          }}
        >
          <h4 style={{ color: "blue" }}>Top-popped toast</h4>
          <body>Toast Body</body>
        </div>
      </div>

      <div className="card" style={{ opacity: 1, cursor: "pointer" }}>
        <h1>This a bottom-poppedToast</h1>
        <button
          className="btn btn-primary"
          onClick={() => {
            setBottomToastVisibility("visible");
            setTimeout(() => setBottomToastVisibility("hidden"), 1000);
          }}
          style={{ opacity: 1 }}
        >
          Click here to launch
        </button>
        <div
          className="modal1"
          style={{
            border: "1px solid purple",
            opacity: 1,
            borderRadius: "1rem",
            visibility: BottomToastVisibility,
            backgroundColor: "white",
            position: "absolute",
            top: "41rem",
            left: "66.8rem",
            width: "10rem"
          }}
        >
          <h4 style={{ color: "blue" }}>Bottom-popped toast</h4>
          <body>Toast Body</body>
        </div>
      </div>

      <span style={{ visibility: "hidden" }}>
        {RightToastVisiblity === "visible" &&
          (document.body.style.opacity = 0.8)}
        {RightToastVisiblity === "hidden" && (document.body.style.opacity = 1)}
      </span>
    </div>
  );
}
