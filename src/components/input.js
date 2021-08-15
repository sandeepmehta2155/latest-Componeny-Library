import React, { useState } from "react";
export default function Input() {
  const [emailTxtposition, setemailTxtposition] = useState("2.5rem");
  const [emailTxtpositionTop, setemailTxtpositionTop] = useState("0rem");
  return (
    <div className="flexContainer">
      <div className="button">
        <h1> This is button input</h1>
        <input type="button" id="button" value="click" />
      </div>

      <br />

      <div className="check">
        <h1> This is checkbox input</h1>
        <input
          type="checkbox"
          id="vehicle1"
          name="vehicle1"
          value="chocolate"
        />
        <label for="vehicle1"> I have a chocolate</label>

        <br />
        <input
          type="checkbox"
          id="vehicle2"
          name="vehicle2"
          value="ice-cream"
        />
        <label for="vehicle2"> I have a ice-cream</label>
        <br />
        <input
          type="checkbox"
          id="vehicle3"
          name="vehicle3"
          value="cold-drink"
        />
        <label for="vehicle3"> I have a cold-drink</label>
      </div>
      <br />
      <div className="colorInput">
        <h1> This is color input</h1>
        <input type="color" id="color" />
      </div>
      <br />
      <div className="dateInput">
        <h1> This is date input</h1>
        <input type="date" id="date" />
      </div>
      <br />
      <div className="dateTimeInput">
        <h1> This is date & time input</h1>
        <input type="datetime-local" id="datetime" />
      </div>
      <br />
      <div className="emailInput">
        <h1> This is an email input</h1>
        <form action="/action_page.php">
          <label for="email">Enter your email:</label>
          <small
            id="emailTxt"
            style={{
              position: "relative",
              left: emailTxtposition,
              bottom: emailTxtpositionTop,
              background: "white"
            }}
          >
            email
          </small>
          <input
            type="email"
            id="email"
            name="email"
            onChange={(e) => {
              if (e.target.value) {
                setemailTxtposition("3.5rem");
                setemailTxtpositionTop(".9rem");
              } else {
                setemailTxtposition("2.5rem");
                setemailTxtpositionTop("0rem");
              }
            }}
          />

          <input type="submit" id="login" value="Login" />
        </form>
      </div>
      <br />
      <div className="fileInput">
        <h1> This is file input</h1>
        <form action="/action_page.php">
          <label for="myfile">Select a file:</label>
          <input type="file" className="custom-file-input" />
          <br />
          <input type="submit" id="submit" value="Submit" />
        </form>
      </div>
      <br />
      <div className="hiddenInput">
        <h1> This is hidden input</h1>
        <input type="hidden" />
      </div>
      <br />
      <div className="imgInput">
        <h1> This is an image input</h1>
        <input
          type="image"
          alt="loading"
          width="20%"
          src="https://www.linkpicture.com/q/square_1.jpeg"
        />
      </div>
      <br />
      <div className="monthInput">
        <h1> This is month input</h1>

        <input type="month" id="month" />
      </div>
      <br />
      <div className="numInput">
        <h1> This is number input</h1>
        <input type="number" id="number" />
      </div>
      <br />
      <div className="passInput">
        <h1> This is password input</h1>
        <input type="password" id="pass" />
      </div>
      <br />
      <div className="radioInput">
        <h1> This is radio input</h1>
        <input type="radio" id="male" name="gender" value="male" />
        <label for="male">Male</label>
        <br />
        <input type="radio" id="female" name="gender" value="female" />
        <label for="female">Female</label>
        <br />
        <input type="radio" id="other" name="gender" value="other" />
        <label for="other">Other</label>
      </div>
      <br />
      <div className="rangeInput">
        <h1> This is range input</h1>
        <input type="range" />
      </div>
      <br />
      <div className="searchInput">
        <h1> This is search input</h1>
        <br />
        <input type="search" id="search" />
        <br />
      </div>

      <br />
      <div className="telInput">
        <h1> This is tel input</h1>
        <p>
          The <strong>input type="tel"</strong> is used for input fields that
          should contain a telephone number:
        </p>

        <form action="/action_page.php">
          <label for="phone">Enter a phone number:</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="123-45-678"
            pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
            required
          />
          <br />
          <small>Format: 123-45-678</small>
          <br />
          <input type="submit" id="submit" value="Submit" />
        </form>
      </div>
      <br />
      <div className="txtInput">
        <h1> This is text input</h1>
        <input type="text" id="txt" />
      </div>
      <br />
      <div className="timeInput">
        <h1> This is time input</h1>
        <input type="time" id="time" />
      </div>
      <br />
      <div className="urlInput">
        <h1> This is an url input</h1>
        <form action="/action_page.php">
          <label for="homepage">Add your homepage:</label>
          <input type="url" id="homepage" name="homepage" />
          <input type="submit" id="submit" value="Submit" />
        </form>
      </div>
      <br />
      <div className="weekInput">
        <h1> This is week input</h1>
        <input type="week" id="week" />
      </div>
    </div>
  );
}
