import React from "react";
export default function Card() {
  return (
    <div>
      <h1>About</h1>
      <p>
        A card is a flexible and extensible content container. It includes
        options for headers and footers, a wide variety of content, contextual
        background colors, and powerful display options. If you’re familiar with
        Bootstrap 3, cards replace our old panels, wells, and thumbnails.
        Similar functionality to those components is available as modifier
        classes for cards.
      </p>
      <h1>Example</h1>
      <p>
        Cards are built with as little markup and styles as possible, but still
        manage to deliver a ton of control and customization. Built with
        flexbox, they offer easy alignment and mix well with other Bootstrap
        components. They have no margin by default, so use spacing utilities as
        needed. Below is an example of a basic card with mixed content and a
        fixed width. Cards have no fixed width to start, so they’ll naturally
        fill the full width of its parent element. This is easily customized
        with our various sizing options.
      </p>
      <div className="card" style={{ width: "18rem" }}>
        <img
          src="https://via.placeholder.com/150"
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href=" " className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
      <h1> Titles, text, and links</h1>
      <p>
        Card titles are used by adding .card-title to a <code> h* </code> tag.
        In the same way, links are added and placed next to each other by adding
        .card-link to an <code> a </code> tag. Subtitles are used by adding a
        .card-subtitle to a <code> h* </code>tag. If the .card-title and the
        .card-subtitle items are placed in a .card-body item, the card title and
        subtitle are aligned nicely.
      </p>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href=" " className="card-link">
            Card link
          </a>
          <a href=" " className="card-link">
            Another link
          </a>
        </div>
      </div>
      <h1> Images</h1>
      <p>
        .card-img-top places an image to the top of the card. With .card-text,
        text can be added to the card. Text within .card-text can also be styled
        with the standard HTML tags.
      </p>
      <div className="card">
        <img
          src="https://via.placeholder.com/150"
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
      </div>
      <h1> List groups</h1>
      <p>Create lists of content in a card with a flush list group</p>
      <div className="card">
        <div className="card-header">Featured</div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">An item</li>
          <li className="list-group-item">A second item</li>
          <li className="list-group-item">A third item</li>
        </ul>
      </div>
      <h1> Kitchen sink</h1>
      <p>
        Mix and match multiple content types to create the card you need, or
        throw everything in there. Shown below are image styles, blocks, text
        styles, and a list group—all wrapped in a fixed-width card.
      </p>
      <div className="card">
        <img
          src="https://via.placeholder.com/200"
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">An item</li>
          <li className="list-group-item">A second item</li>
          <li className="list-group-item">A third item</li>
        </ul>
        <div className="card-body">
          <a href=" " className="card-link">
            Card link
          </a>
          <a href=" " className="card-link">
            Another link
          </a>
        </div>
      </div>
      <h1>Quote</h1>A well-known quote, contained in a blockquote element.
      Someone famous in Source Title
      <div className="card">
        <div className="card-header">Quote</div>
        <div className="card-body">
          <blockquote className="blockquote mb-0">
            <p>A well-known quote, contained in a blockquote element.</p>
            <footer className="blockquote-footer">
              - Someone famous in <cite title="Source Title">Source Title</cite>
            </footer>
          </blockquote>
        </div>
      </div>
      <h1>Featured</h1>
      Special title treatment With supporting text below as a natural lead-in to
      additional content. 2 days ago
      <div className="card text-center">
        <div className="card-header">Featured</div>
        <div className="card-body">
          <h5 className="card-title">Special title treatment</h5>
          <p className="card-text">
            With supporting text below as a natural lead-in to additional
            content.
          </p>
          <a href=" " className="btn btn-primary">
            Go somewhere
          </a>
        </div>
        <div className="card-footer text-muted">2 days ago</div>
      </div>
      <h1> Navigation</h1>
      Add some navigation to a card’s header (or block) with Bootstrap’s nav
      components.
      <div className="card text-center">
        <div className="card-header">
          <ul className="nav nav-tabs card-header-tabs">
            <li className="nav-item">
              <a className="nav-link active" href=" ">
                Active
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href=" ">
                Link
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link disabled"
                href=" "
                tabindex="-1"
                aria-disabled="true"
              >
                Disabled
              </a>
            </li>
          </ul>
        </div>
        <div className="card-body">
          <h5 className="card-title">Special title treatment</h5>
          <p className="card-text">
            With supporting text below as a natural lead-in to additional
            content.
          </p>
          <a href=" " className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
      <div className="card text-center">
        <div className="card-header">
          <ul className="nav nav-pills card-header-pills">
            <li className="nav-item">
              <a className="nav-link active" href=" ">
                Active
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href=" ">
                Link
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link disabled"
                href=" "
                tabindex="-1"
                aria-disabled="true"
              >
                Disabled
              </a>
            </li>
          </ul>
        </div>
        <div className="card-body">
          <h5 className="card-title">Special title treatment</h5>
          <p className="card-text">
            With supporting text below as a natural lead-in to additional
            content.
          </p>
          <a href=" " className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
      <h1> Horizontal</h1>
      Using a combination of grid and utility classes, cards can be made
      horizontal in a mobile-friendly and responsive way. In the example below,
      we remove the grid gutters with .no-gutters and use .col-md-* classes to
      make the card horizontal at the md breakpoint. Further adjustments may be
      needed depending on your card content.
      <div className="card mb-3">
        <div className="row no-gutters">
          <div className="col-md-4">
            <img src="https://via.placeholder.com/200" alt="..." />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
              <p className="card-text">
                <small className="text-muted">Last updated 3 mins ago</small>
              </p>
            </div>
          </div>
        </div>
      </div>
      <h1>Card styles</h1>
      Cards include various options for customizing their backgrounds, borders,
      and color. Background and color Use text and background utilities to
      change the appearance of a card.
      <div className="card text-white bg-primary mb-3">
        <div className="card-header">Header</div>
        <div className="card-body">
          <h5 className="card-title">Primary card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
      </div>
      <div className="card text-white bg-secondary mb-3">
        <div className="card-header">Header</div>
        <div className="card-body">
          <h5 className="card-title">Secondary card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
      </div>
      <div className="card text-white bg-success mb-3">
        <div className="card-header">Header</div>
        <div className="card-body">
          <h5 className="card-title">Success card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
      </div>
      <div className="card text-white bg-danger mb-3">
        <div className="card-header">Header</div>
        <div className="card-body">
          <h5 className="card-title">Danger card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
      </div>
      <div className="card text-white bg-warning mb-3">
        <div className="card-header">Header</div>
        <div className="card-body">
          <h5 className="card-title">Warning card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
      </div>
      <div className="card text-white bg-info mb-3">
        <div className="card-header">Header</div>
        <div className="card-body">
          <h5 className="card-title">Info card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
      </div>
      <div className="card bg-light mb-3">
        <div className="card-header">Header</div>
        <div className="card-body">
          <h5 className="card-title">Light card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
      </div>
    </div>
  );
}
