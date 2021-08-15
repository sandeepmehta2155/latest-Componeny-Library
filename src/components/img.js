import React from "react";
export default function Image() {
  return (
    <div className="imageWithShapes">
      <div className="card">
        <h1> This is a square image </h1>
        <img
          src="https://www.linkpicture.com/q/square_1.jpeg"
          alt="loading"
          className="square"
        />
      </div>
      <div className="card">
        <h1> This is a rectangle image </h1>
        <img
          src="https://www.linkpicture.com/q/square_1.jpeg"
          alt="loading"
          className="rectangle"
        />
      </div>
      <div className="card">
        <h1> This is a circular image </h1>
        <img
          src="https://www.linkpicture.com/q/square_1.jpeg"
          alt="loading"
          className="circle"
        />
      </div>
      <div className="card">
        <h1> This is an oval image </h1>
        <img
          src="https://www.linkpicture.com/q/square_1.jpeg"
          alt="loading"
          className="oval"
        />
      </div>

      <div className="card">
        <h1 id="para-heading"> This is a parallelogram image </h1>
        <img
          src="https://www.linkpicture.com/q/square_1.jpeg"
          alt="loading"
          className="parallelogram"
        />
      </div>
      <div className="card">
        <h1 className="egg-heading"> This is an egg shaped image </h1>
        <img
          src="https://www.linkpicture.com/q/square_1.jpeg"
          alt="loading"
          className="egg"
        />
      </div>
    </div>
  );
}
