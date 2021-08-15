import React from "react";
export default function Alert() {
  return (
    <div className="alert">
      <h1> Examples</h1>
      <p>
        Alerts are available for any length of text, as well as an optional
        dismiss button. For proper styling, use one of the eight required
        contextual classes (e.g., .alert-success). For inline dismissal, use the
        alerts jQuery plugin.
      </p>
      <div className="alert alert-primary" role="alert">
        A simple primary alert—check it out!
      </div>
      <div className="alert alert-secondary" role="alert">
        A simple secondary alert—check it out!
      </div>
      <div className="alert alert-success" role="alert">
        A simple success alert—check it out!
      </div>
      <div className="alert alert-danger" role="alert">
        A simple danger alert—check it out!
      </div>
      <div className="alert alert-warning" role="alert">
        A simple warning alert—check it out!
      </div>
      <div className="alert alert-info" role="alert">
        A simple info alert—check it out!
      </div>
      <div className="alert alert-light" role="alert">
        A simple light alert—check it out!
      </div>
      <h1> Link color</h1>
      <p>
        Use the .alert-link utility className to quickly provide matching
        colored links within any alert.
      </p>
      <div className="alert alert-primary" role="alert">
        A simple primary alert with{" "}
        <a href=" " className="alert-link">
          an example link
        </a>
        . Give it a click if you like.
      </div>
      <div className="alert alert-secondary" role="alert">
        A simple secondary alert with{" "}
        <a href=" " className="alert-link">
          an example link
        </a>
        . Give it a click if you like.
      </div>
      <div className="alert alert-success" role="alert">
        A simple success alert with{" "}
        <a href=" " className="alert-link">
          an example link
        </a>
        . Give it a click if you like.
      </div>
      <div className="alert alert-danger" role="alert">
        A simple danger alert with{" "}
        <a href=" " className="alert-link">
          an example link
        </a>
        . Give it a click if you like.
      </div>
      <div className="alert alert-warning" role="alert">
        A simple warning alert with{" "}
        <a href=" " className="alert-link">
          an example link
        </a>
        . Give it a click if you like.
      </div>
      <div className="alert alert-info" role="alert">
        A simple info alert with{" "}
        <a href=" " className="alert-link">
          an example link
        </a>
        . Give it a click if you like.
      </div>
      <div className="alert alert-light" role="alert">
        A simple light alert with{" "}
        <a href=" " className="alert-link">
          an example link
        </a>
        . Give it a click if you like.
      </div>
    </div>
  );
}
