import React from "react";
export default function SimpleGrid() {
  return (
    <div className="gridcomponents">
      <div className="card">
        <h1> How it works</h1>
        <p className="para">
          Grid system uses a series of containers, rows, and columns to layout
          and align content. It’s built with flexbox and is fully responsive.
          Below is an example and an in-depth look at how the grid comes
          together.
        </p>
      </div>
      <div className="container">
        <div className="row3col">
          <div className="col-sm">One of three columns</div>
          <div className="col-sm">One of three columns</div>
          <div className="col-sm">One of three columns</div>
        </div>
      </div>

      <br />
      <div className="card">
        <h1>Auto-layout columns</h1>
        <p>
          Utilize breakpoint-specific column classes for easy column sizing
          without an explicit numbered class like .col-sm-6.
        </p>
        <h1>Equal-width</h1>
        <p>
          For example, here are two grid layouts that apply to every device and
          viewport, from xs to xl. Add any number of unit-less classes for each
          breakpoint you need and every column will be the same width.
        </p>
      </div>
      <div className="row2col">
        <div className="col">1 of 2</div>
        <div className="col">2 of 2</div>
      </div>
      <div className="row3col">
        <div className="col">1 of 3</div>
        <div className="col">2 of 3</div>
        <div className="col">3 of 3</div>
      </div>
      <div className="card">
        <h1> Setting one column width</h1>
        <p>
          Auto-layout for flexbox grid columns also means you can set the width
          of one column and have the sibling columns automatically resize around
          it. You may use predefined grid classes (as shown below), grid mixins,
          or inline widths. Note that the other columns will resize no matter
          the width of the center column.
        </p>
      </div>
      <div class="container">
        <div class="row3col2wid">
          <div class="col">1 of 3</div>
          <div class="col">2 of 3 (wider)</div>
          <div class="col">3 of 3</div>
        </div>
        <div class="row3col2wider">
          <div class="col">1 of 3</div>
          <div class="col">2 of 3 (wider)</div>
          <div class="col">3 of 3</div>
        </div>
      </div>
      <div className="card">
        <h1>Variable width content</h1>
        <p>
          Use col-breakpoint-auto classes to size columns based on the natural
          width of their content.
        </p>
      </div>
      <div class="container">
        <div class="row3colmax-content">
          <div class="col">1 of 3</div>
          <div class="col">Variable width content</div>
          <div class="col col-lg-2">3 of 3</div>
        </div>
        <div class="row3col1widmax-content">
          <div class="col">1 of 3</div>
          <div class="col">Variable width content</div>
          <div class="col col-lg-2">3 of 3</div>
        </div>
      </div>
      <h1>Alignment</h1>
      <p>
        Use flexbox alignment utilities to vertically and horizontally align
        columns.
      </p>

      <div class="container">
        <div class="rowgridarea">
          <div class="col align-self-start">One of three columns</div>
          <div class="col align-self-center">One of three columns</div>
          <div class="col align-self-end">One of three columns</div>
        </div>
      </div>
      <h1>Horizontal alignment</h1>
      <div class="horizontalalignment">
        <div class="col-a1">One of two columns</div>
        <div class="col-a2">One of two columns</div>

        <div class="col-b1">One of two columns</div>
        <div class="col-b2">One of two columns</div>

        <div class="col-c1">One of two columns</div>
        <div class="col-c2">One of two columns</div>

        <div class="col-d1">One of two columns</div>
        <div class="col-d2">One of two columns</div>

        <div class="col-e1">One of two columns</div>
        <div class="col-e2">One of two columns</div>
      </div>
    </div>
  );
}
