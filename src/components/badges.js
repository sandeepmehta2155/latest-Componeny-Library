import React from "react";
export default function Badges() {
  return (
    <div>
      <h1> Example</h1>
      <p>
        Badges scale to match the size of the immediate parent element by using
        relative font sizing and em units.
      </p>
      <h1>
        Example heading <span className="badge">New</span>
      </h1>
      <h2>
        Example heading <span className="badge">New</span>
      </h2>
      <h3>
        Example heading <span className="badge">New</span>
      </h3>
      <h4>
        Example heading <span className="badge">New</span>
      </h4>
      <p>
        Badges can be used as part of links or buttons to provide a counter.
      </p>
      <button type="button" className="button">
        Notifications <span className="badge-light">4</span>
      </button>
      <h1> Contextual variations </h1>
      <p>
        Add any of the below mentioned modifier classes to change the appearance
        of a badge.
      </p>
      <span className="badge badge-primary">Primary</span>
      <span className="badge badge-secondary">Secondary</span>
      <span className="badge badge-success">Success</span>
      <span className="badge badge-danger">Danger</span>
      <span className="badge badge-warning">Warning</span>
      <span className="badge badge-info">Info</span>
      <span className="badge badge-light">Light</span>
      <span className="badge badge-dark">Dark</span>
      <h1> Pill badges</h1>
      <p>
        Use the .badge-pill modifier className to make badges more rounded (with
        a larger border-radius and additional horizontal padding). Useful if you
        miss the badges from v3.
      </p>
      <span className="badge badge-pill badge-primary">Primary</span>
      <span className="badge badge-pill badge-secondary">Secondary</span>
      <span className="badge badge-pill badge-success">Success</span>
      <span className="badge badge-pill badge-danger">Danger</span>
      <span className="badge badge-pill badge-warning">Warning</span>
      <span className="badge badge-pill badge-info">Info</span>
      <span className="badge badge-pill badge-light">Light</span>
      <span className="badge badge-pill badge-dark">Dark</span>
      <h1>Links</h1>
      <p>
        Using the contextual .badge-* classes on an element quickly provide
        actionable badges with hover and focus states.
      </p>
      <a href=" " className="badge badge-primary">
        Primary
      </a>
      <a href=" " className="badge badge-secondary">
        Secondary
      </a>
      <a href=" " className="badge badge-success">
        Success
      </a>
      <a href=" " className="badge badge-danger">
        Danger
      </a>
      <a href=" " className="badge badge-warning">
        Warning
      </a>
      <a href=" " className="badge badge-info">
        Info
      </a>
      <a href=" " className="badge badge-light">
        Light
      </a>
      <a href=" " className="badge badge-dark">
        Dark
      </a>
    </div>
  );
}
