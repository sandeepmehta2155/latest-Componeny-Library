import React from "react";
export default function List() {
  return (
    <div>
      <h1>Basic example</h1>
      <p>
        The most basic list group is an unordered list with list items and the
        proper classes. Build upon it with the options that follow, or with your
        own CSS as needed.
      </p>
      <ul className="list-group">
        <li className="list-group-item">Cras justo odio</li>
        <li className="list-group-item">Dapibus ac facilisis in</li>
        <li className="list-group-item">Morbi leo risus</li>
        <li className="list-group-item">Porta ac consectetur ac</li>
        <li className="list-group-item">Vestibulum at eros</li>
      </ul>
      <h1> Disabled items</h1>
      <p>
        Add .disabled to a .list-group-item to make it appear disabled. Note
        that some elements with .disabled will also require custom JavaScript to
        fully disable their click events (e.g., links).
      </p>
      <ul className="list-group">
        <li className="list-group-item disabled">Cras justo odio</li>
        <li className="list-group-item">Dapibus ac facilisis in</li>
        <li className="list-group-item">Morbi leo risus</li>
        <li className="list-group-item">Porta ac consectetur ac</li>
        <li className="list-group-item">Vestibulum at eros</li>
      </ul>
      <h1> With badges</h1>
      <p>
        Add badges to any list group item to show unread counts, activity, and
        more with the help of some utilities.
      </p>
      <ul className="list-group">
        <li className="list-group-item d-flex justify-content-between align-items-center">
          Cras justo odio
          <span className="badge badge-primary badge-pill list">14</span>
        </li>
        <li className="list-group-item d-flex justify-content-between align-items-center">
          Dapibus ac facilisis in
          <span className="badge badge-primary badge-pill list">2</span>
        </li>
        <li className="list-group-item d-flex justify-content-between align-items-center">
          Morbi leo risus
          <span className="badge badge-primary badge-pill list">1</span>
        </li>
      </ul>

      <h1> Custom content </h1>
      <p>
        Add nearly any HTML within, even for linked list groups like the one
        below, with the help of flexbox utilities.
      </p>
      <div className="list-group">
        <div className="list-group-item-action">
          <h5 className="mb-1">List group item heading</h5>
          <small className="text-muted">3 days ago</small>

          <p className="mb-1">
            Donec id elit non mi porta gravida at eget metus. Maecenas sed diam
            eget risus varius blandit.
          </p>
          <small className="bottom-text">Donec id elit non mi porta.</small>
        </div>
        <div className="list-group-item-action">
          <h5 className="mb-1">List group item heading</h5>
          <small className="text-muted">3 days ago</small>

          <p className="mb-1">
            Donec id elit non mi porta gravida at eget metus. Maecenas sed diam
            eget risus varius blandit.
          </p>
          <small className="bottom-text">Donec id elit non mi porta.</small>
        </div>
        <div href=" " className="list-group-item-action">
          <h5 className="mb-1">List group item heading</h5>
          <small className="text-muted">3 days ago</small>

          <p className="mb-1">
            Donec id elit non mi porta gravida at eget metus. Maecenas sed diam
            eget risus varius blandit.
          </p>
          <small className="bottom-text">Donec id elit non mi porta.</small>
        </div>
      </div>
    </div>
  );
}
