import React, { useState } from "react";
export default function Modal() {
  const [visiblity, setVisibility] = useState("hidden");
  const [visModal2, setVisiModal2] = useState("hidden");
  const [vistopLeft, setVistopLeft] = useState("hidden");
  const [vistopRight, setVistopRight] = useState("hidden");
  const [visbottomRight, setVisbottomRight] = useState("hidden");
  const [visbottomLeft, setVisbottomLeft] = useState("hidden");
  return (
    <div className="Modal">
      <div className="card" style={{ opacity: 1, cursor: "pointer" }}>
        <h1>This a Normal Modal</h1>
        <button
          className="btn btn-primary"
          onClick={() => setVisibility("visible")}
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
            padding: "1.5rem",
            visibility: visiblity,
            backgroundColor: "white",
            position: "fixed",
            top: "2rem",
            left: "35%",
            width: "30rem"
          }}
        >
          <h2>
            Modal heading
            <span
              style={{ position: "relative", left: "9rem" }}
              onClick={() => setVisibility("hidden")}
            >
              x
            </span>
          </h2>
          <hr />
          <body> Modal body </body>
          <hr />
          <button
            className="btn btn-dark"
            style={{ position: "relative", left: "10rem" }}
            onClick={() => setVisibility("hidden")}
          >
            Close
          </button>
        </div>
      </div>
      <div className="card" style={{ opacity: 1, cursor: "pointer" }}>
        <h1>This a long Modal</h1>
        <button
          className="btn btn-primary"
          onClick={() => setVisiModal2("visible")}
          style={{ opacity: 1, outline: "none" }}
        >
          Click here to launch
        </button>
        <div
          className="modal1"
          style={{
            border: "1px solid purple",
            opacity: 1,
            borderRadius: "1rem",
            padding: "1.5rem",
            visibility: visModal2,
            backgroundColor: "white",
            position: "fixed",
            top: "2rem",
            left: "35%",
            width: "30rem"
          }}
        >
          <h2>
            Modal heading
            <span
              style={{ position: "relative", left: "9rem" }}
              onClick={() => setVisiModal2("hidden")}
            >
              x
            </span>
          </h2>
          <hr />
          <body style={{ maxHeight: "calc(80vh - 200px)", overflowY: "auto" }}>
            <p>
              Some text to enable scrolling.. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim veniam, quis
              nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Duis aute irure dolor in reprehenderit in voluptate
              velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
              occaecat cupidatat non proident, sunt in culpa qui officia
              deserunt mollit anim id est laborum consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <p>
              Some text to enable scrolling.. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim veniam, quis
              nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Duis aute irure dolor in reprehenderit in voluptate
              velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
              occaecat cupidatat non proident, sunt in culpa qui officia
              deserunt mollit anim id est laborum consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <p>
              Some text to enable scrolling.. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim veniam, quis
              nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Duis aute irure dolor in reprehenderit in voluptate
              velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
              occaecat cupidatat non proident, sunt in culpa qui officia
              deserunt mollit anim id est laborum consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <p>
              Some text to enable scrolling.. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim veniam, quis
              nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Duis aute irure dolor in reprehenderit in voluptate
              velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
              occaecat cupidatat non proident, sunt in culpa qui officia
              deserunt mollit anim id est laborum consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </body>
          <hr />
          <button
            className="btn btn-light"
            style={{ position: "relative", left: "10rem", outline: "none" }}
          >
            Save
          </button>
          <button
            className="btn btn-dark"
            style={{ position: "relative", left: "9rem", outline: "none" }}
            onClick={() => setVisiModal2("hidden")}
          >
            Close
          </button>
        </div>
      </div>
      <div className="card" style={{ opacity: 1, cursor: "pointer" }}>
        <h1>This a top-right sided Modal</h1>
        <button
          className="btn btn-primary"
          onClick={() => setVistopLeft("visible")}
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
            padding: "1.5rem",
            visibility: vistopLeft,
            backgroundColor: "white",
            position: "fixed",
            top: "2rem",
            right: "2rem",
            width: "30rem"
          }}
        >
          <h2 style={{ color: "blue" }}>
            Product in cart
            <span
              style={{ position: "relative", left: "9rem" }}
              onClick={() => setVistopLeft("hidden")}
            >
              x
            </span>
          </h2>
          <hr />
          <body>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="60"
              height="60"
              fill="blue"
              class="bi bi-cart-check-fill"
              viewBox="0 0 16 16"
            >
              <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-1.646-7.646l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L8 8.293l2.646-2.647a.5.5 0 0 1 .708.708z" />
            </svg>
            <p>Do you need more time to make a purchase decision?</p>
            <p>
              No pressure, your product will be waiting for you in the cart.
            </p>
          </body>

          <hr />
          <button
            className="btn btn-secondary"
            style={{ position: "relative", left: "10rem" }}
          >
            Go to Cart
          </button>
          <button
            className="btn btn-secondary rep"
            style={{ position: "relative", left: "11rem" }}
            onClick={() => setVistopLeft("hidden")}
          >
            Close
          </button>
        </div>
      </div>
      <div className="card" style={{ opacity: 1, cursor: "pointer" }}>
        <h1>This a top-left sided Modal</h1>
        <button
          className="btn btn-primary"
          onClick={() => setVistopRight("visible")}
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
            padding: "1.5rem",
            visibility: vistopRight,
            backgroundColor: "white",
            position: "fixed",
            top: "2rem",
            left: "2rem",
            width: "30rem"
          }}
        >
          <h2 style={{ color: "blue" }}>
            Be always up-to date
            <span
              style={{ position: "relative", left: "7rem" }}
              onClick={() => setVistopRight("hidden")}
            >
              x
            </span>
          </h2>
          <hr />
          <body>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="60"
              height="60"
              fill="blue"
              class="bi bi-bell-fill"
              viewBox="0 0 16 16"
            >
              <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z" />
            </svg>
            <p>
              Do you want to receive the push notification about the newest
              posts?
            </p>
          </body>

          <hr />
          <button
            className="btn btn-secondary"
            style={{ position: "relative", left: "10rem" }}
          >
            Yes
          </button>
          <button
            className="btn btn-secondary rep"
            style={{ position: "relative", left: "11rem" }}
            onClick={() => setVistopRight("hidden")}
          >
            No
          </button>
        </div>
      </div>
      <div className="card" style={{ opacity: 1, cursor: "pointer" }}>
        <h1>This a bottom-right sided Modal</h1>
        <button
          className="btn btn-primary"
          onClick={() => setVisbottomRight("visible")}
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
            padding: "1.5rem",
            visibility: visbottomRight,
            backgroundColor: "white",
            position: "fixed",
            bottom: "2rem",
            right: "2rem",
            width: "30rem"
          }}
        >
          <h2 style={{ color: "blue" }}>
            Related-article
            <span
              style={{ position: "relative", left: "10rem" }}
              onClick={() => setVisbottomRight("hidden")}
            >
              x
            </span>
          </h2>
          <hr />
          <body>
            <img
              src="https://mdbcdn.b-cdn.net/img/new/standard/city/041.jpg"
              alt="loading"
              class="img-fluid"
              width="50%"
            />
            <p>
              <strong> Doloremque vero ex debitis veritatis?</strong>
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod
              itaque voluptate nesciunt laborum incidunt. Officia, quam
              consectetur. Earum eligendi aliquam illum alias.
            </p>
          </body>

          <hr />
          <button
            className="btn btn-secondary"
            style={{ position: "relative", left: "10rem" }}
          >
            Read More
          </button>
          <button
            className="btn btn-secondary rep"
            style={{ position: "relative", left: "11rem" }}
            onClick={() => setVisbottomRight("hidden")}
          >
            Close
          </button>
        </div>
      </div>
      <div className="card" style={{ opacity: 1, cursor: "pointer" }}>
        <h1>This a bottom-left sided Modal</h1>
        <button
          className="btn btn-primary"
          onClick={() => setVisbottomLeft("visible")}
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
            padding: "1.5rem",
            visibility: visbottomLeft,
            backgroundColor: "white",
            position: "fixed",
            bottom: "2rem",
            left: "2rem",
            width: "30rem"
          }}
        >
          <h2 style={{ color: "blue" }}>
            Subscribe
            <span
              style={{ position: "relative", left: "10rem" }}
              onClick={() => setVisbottomLeft("hidden")}
            >
              x
            </span>
          </h2>
          <hr />
          <body>
            <input type="text" id="txt" placeholder="    Name" />
            <br />
            <br />
            <input type="email" id="email" placeholder="    email" />
          </body>

          <hr />
          <input type="checkbox" />
          <small>I have read and agree to the terms</small>
          <br />
          <button
            className="btn btn-secondary"
            style={{ position: "relative", left: "10rem" }}
          >
            Subscribe
          </button>
          <button
            className="btn btn-secondary rep"
            style={{ position: "relative", left: "11rem" }}
            onClick={() => setVisbottomLeft("hidden")}
          >
            Close
          </button>
        </div>
      </div>
      <span style={{ visibility: "hidden" }}>
        {visiblity === "visible" && (document.body.style.opacity = 0.8)}
        {visiblity === "hidden" && (document.body.style.opacity = 1)}
      </span>
      <span style={{ visibility: "hidden" }}>
        {visModal2 === "visible" && (document.body.style.opacity = 0.8)}
        {visModal2 === "hidden" && (document.body.style.opacity = 1)}
      </span>
    </div>
  );
}
