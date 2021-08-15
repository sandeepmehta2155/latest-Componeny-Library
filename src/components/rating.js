import React, { useState } from "react";
export default function Rating() {
  const [ratingOne, setRatingOne] = useState("emptyheart");
  const [ratingTwo, setRatingTwo] = useState("emptyheart");
  const [ratingThree, setRatingThree] = useState("emptyheart");
  const [ratingFour, setRatingFour] = useState("emptyheart");

  const [starratingOne, setstarRatingOne] = useState("bi-star-empty");
  const [starratingTwo, setstarRatingTwo] = useState("bi-star-empty");
  const [starratingThree, setstarRatingThree] = useState("bi-star-empty");
  const [starratingFour, setstarRatingFour] = useState("bi-star-empty");

  const [emojiratingOne, setemojiRatingOne] = useState("norating");
  const [emojiratingTwo, setemojiRatingTwo] = useState("norating");
  const [emojiratingThree, setemojiRatingThree] = useState("norating");
  const [emojiratingFour, setemojiRatingFour] = useState("norating");
  const [emojiratingFive, setemojiRatingFive] = useState("norating");
  return (
    <div>
      <div className="card heartRating">
        <h1> Rate this with hearts </h1>
        <svg
          className={ratingOne}
          onMouseOver={() => {
            setRatingOne("filledheart");
            setRatingTwo("emptyheart");
            setRatingThree("emptyheart");
            setRatingFour("emptyheart");
          }}
        >
          <g>
            <path d="M12 21.638h-.014C9.403 21.59 1.95 14.856 1.95 8.478c0-3.064 2.525-5.754 5.403-5.754 2.29 0 3.83 1.58 4.646 2.73.814-1.148 2.354-2.73 4.645-2.73 2.88 0 5.404 2.69 5.404 5.755 0 6.376-7.454 13.11-10.037 13.157H12z"></path>
          </g>
        </svg>
        <svg
          className={ratingTwo}
          onMouseOver={() => {
            setRatingOne("filledheart");
            setRatingTwo("filledheart");
            setRatingThree("emptyheart");
            setRatingFour("emptyheart");
          }}
        >
          <g>
            <path d="M12 21.638h-.014C9.403 21.59 1.95 14.856 1.95 8.478c0-3.064 2.525-5.754 5.403-5.754 2.29 0 3.83 1.58 4.646 2.73.814-1.148 2.354-2.73 4.645-2.73 2.88 0 5.404 2.69 5.404 5.755 0 6.376-7.454 13.11-10.037 13.157H12z"></path>
          </g>
        </svg>
        <svg
          className={ratingThree}
          onMouseOver={() => {
            setRatingOne("filledheart");
            setRatingTwo("filledheart");
            setRatingThree("filledheart");
            setRatingFour("emptyheart");
          }}
        >
          <g>
            <path d="M12 21.638h-.014C9.403 21.59 1.95 14.856 1.95 8.478c0-3.064 2.525-5.754 5.403-5.754 2.29 0 3.83 1.58 4.646 2.73.814-1.148 2.354-2.73 4.645-2.73 2.88 0 5.404 2.69 5.404 5.755 0 6.376-7.454 13.11-10.037 13.157H12z"></path>
          </g>
        </svg>
        <svg
          className={ratingFour}
          onMouseOver={() => {
            setRatingOne("filledheart");
            setRatingTwo("filledheart");
            setRatingThree("filledheart");
            setRatingFour("filledheart");
          }}
        >
          <g>
            <path d="M12 21.638h-.014C9.403 21.59 1.95 14.856 1.95 8.478c0-3.064 2.525-5.754 5.403-5.754 2.29 0 3.83 1.58 4.646 2.73.814-1.148 2.354-2.73 4.645-2.73 2.88 0 5.404 2.69 5.404 5.755 0 6.376-7.454 13.11-10.037 13.157H12z"></path>
          </g>
        </svg>
        <br />

        {ratingOne === "filledheart" &&
          ratingTwo === "emptyheart" &&
          ratingThree === "emptyheart" &&
          ratingFour === "emptyheart" && <strong>Rating : 1</strong>}
        {ratingOne === "filledheart" &&
          ratingTwo === "filledheart" &&
          ratingThree === "emptyheart" &&
          ratingFour === "emptyheart" && <strong>Rating : 2</strong>}
        {ratingOne === "filledheart" &&
          ratingTwo === "filledheart" &&
          ratingThree === "filledheart" &&
          ratingFour === "emptyheart" && <strong>Rating : 3</strong>}
        {ratingOne === "filledheart" &&
          ratingTwo === "filledheart" &&
          ratingThree === "filledheart" &&
          ratingFour === "filledheart" && <strong>Rating : 4</strong>}
      </div>
      <div className="card starRating">
        <h1> Rate this with stars </h1>
        <svg
          onMouseOver={() => {
            setstarRatingOne("bi-star-fill");
            setstarRatingTwo("bi-star-empty");
            setstarRatingThree("bi-star-empty");
            setstarRatingFour("bi-star-empty");
          }}
          xmlns="http://www.w3.org/2000/svg"
          className={starratingOne}
        >
          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
        </svg>
        <svg
          onMouseOver={() => {
            setstarRatingOne("bi-star-fill");
            setstarRatingTwo("bi-star-fill");
            setstarRatingThree("bi-star-empty");
            setstarRatingFour("bi-star-empty");
          }}
          xmlns="http://www.w3.org/2000/svg"
          className={starratingTwo}
        >
          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
        </svg>
        <svg
          onMouseOver={() => {
            setstarRatingOne("bi-star-fill");
            setstarRatingTwo("bi-star-fill");
            setstarRatingThree("bi-star-fill");
            setstarRatingFour("bi-star-empty");
          }}
          xmlns="http://www.w3.org/2000/svg"
          className={starratingThree}
        >
          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
        </svg>
        <svg
          onMouseOver={() => {
            setstarRatingOne("bi-star-fill");
            setstarRatingTwo("bi-star-fill");
            setstarRatingThree("bi-star-fill");
            setstarRatingFour("bi-star-fill");
          }}
          xmlns="http://www.w3.org/2000/svg"
          className={starratingFour}
        >
          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
        </svg>
        <br />

        {starratingOne === "bi-star-fill" &&
          starratingTwo === "bi-star-empty" &&
          starratingThree === "bi-star-empty" &&
          starratingFour === "bi-star-empty" && <strong>Rating : 1</strong>}
        {starratingOne === "bi-star-fill" &&
          starratingTwo === "bi-star-fill" &&
          starratingThree === "bi-star-empty" &&
          starratingFour === "bi-star-empty" && <strong>Rating : 2</strong>}
        {starratingOne === "bi-star-fill" &&
          starratingTwo === "bi-star-fill" &&
          starratingThree === "bi-star-fill" &&
          starratingFour === "bi-star-empty" && <strong>Rating : 3</strong>}
        {starratingOne === "bi-star-fill" &&
          starratingTwo === "bi-star-fill" &&
          starratingThree === "bi-star-fill" &&
          starratingFour === "bi-star-fill" && <strong>Rating : 4</strong>}
      </div>

      <div className="card emojiRating">
        <h1>Rate this with Emoji's</h1>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          className={emojiratingOne}
          onMouseOver={() => {
            setemojiRatingOne("ratingOne");
            setemojiRatingTwo("norating");
            setemojiRatingThree("norating");
            setemojiRatingFour("norating");
            setemojiRatingFive("norating");
          }}
          viewBox="0 0 16 16"
        >
          <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zM4.053 4.276a.5.5 0 0 1 .67-.223l2 1a.5.5 0 0 1 .166.76c.071.206.111.44.111.687C7 7.328 6.552 8 6 8s-1-.672-1-1.5c0-.408.109-.778.285-1.049l-1.009-.504a.5.5 0 0 1-.223-.67zm.232 8.157a.5.5 0 0 1-.183-.683A4.498 4.498 0 0 1 8 9.5a4.5 4.5 0 0 1 3.898 2.25.5.5 0 1 1-.866.5A3.498 3.498 0 0 0 8 10.5a3.498 3.498 0 0 0-3.032 1.75.5.5 0 0 1-.683.183zM10 8c-.552 0-1-.672-1-1.5 0-.247.04-.48.11-.686a.502.502 0 0 1 .166-.761l2-1a.5.5 0 1 1 .448.894l-1.009.504c.176.27.285.64.285 1.049 0 .828-.448 1.5-1 1.5z" />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          className={emojiratingTwo}
          onMouseOver={() => {
            setemojiRatingOne("norating");
            setemojiRatingTwo("ratingTwo");
            setemojiRatingThree("norating");
            setemojiRatingFour("norating");
            setemojiRatingFive("norating");
          }}
          viewBox="0 0 16 16"
        >
          <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm-2.715 5.933a.5.5 0 0 1-.183-.683A4.498 4.498 0 0 1 8 9.5a4.5 4.5 0 0 1 3.898 2.25.5.5 0 0 1-.866.5A3.498 3.498 0 0 0 8 10.5a3.498 3.498 0 0 0-3.032 1.75.5.5 0 0 1-.683.183zM10 8c-.552 0-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5S10.552 8 10 8z" />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          className={emojiratingThree}
          onMouseOver={() => {
            setemojiRatingOne("norating");
            setemojiRatingTwo("norating");
            setemojiRatingThree("ratingThree");
            setemojiRatingFour("norating");
            setemojiRatingFive("norating");
          }}
          viewBox="0 0 16 16"
        >
          <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm-3 4a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zM10 8c-.552 0-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5S10.552 8 10 8z" />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          className={emojiratingFour}
          onMouseOver={() => {
            setemojiRatingOne("norating");
            setemojiRatingTwo("norating");
            setemojiRatingThree("norating");
            setemojiRatingFour("ratingFour");
            setemojiRatingFive("norating");
          }}
          viewBox="0 0 16 16"
        >
          <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zM4.285 9.567a.5.5 0 0 1 .683.183A3.498 3.498 0 0 0 8 11.5a3.498 3.498 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.498 4.498 0 0 1 8 12.5a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683zM10 8c-.552 0-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5S10.552 8 10 8z" />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          className={emojiratingFive}
          onMouseOver={() => {
            setemojiRatingOne("norating");
            setemojiRatingTwo("norating");
            setemojiRatingThree("norating");
            setemojiRatingFour("norating");
            setemojiRatingFive("ratingFive");
          }}
          viewBox="0 0 16 16"
        >
          <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zM4.756 4.566c.763-1.424 4.02-.12.952 3.434-4.496-1.596-2.35-4.298-.952-3.434zm6.559 5.448a.5.5 0 0 1 .548.736A4.498 4.498 0 0 1 7.965 13a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .548-.736h.005l.017.005.067.015.252.055c.215.046.515.108.857.169.693.124 1.522.242 2.152.242.63 0 1.46-.118 2.152-.242a26.58 26.58 0 0 0 1.109-.224l.067-.015.017-.004.005-.002zm-.07-5.448c1.397-.864 3.543 1.838-.953 3.434-3.067-3.554.19-4.858.952-3.434z" />
        </svg>
        <br />

        {emojiratingOne === "ratingOne" &&
          emojiratingTwo === "norating" &&
          emojiratingThree === "norating" &&
          emojiratingFour === "norating" &&
          emojiratingFive === "norating" && (
            <strong>Rating : Very angry !</strong>
          )}
        {emojiratingOne === "norating" &&
          emojiratingTwo === "ratingTwo" &&
          emojiratingThree === "norating" &&
          emojiratingFour === "norating" &&
          emojiratingFive === "norating" && (
            <strong>Rating : Not Happy !</strong>
          )}
        {emojiratingOne === "norating" &&
          emojiratingTwo === "norating" &&
          emojiratingThree === "ratingThree" &&
          emojiratingFour === "norating" &&
          emojiratingFive === "norating" && <strong>Rating : Neutral</strong>}
        {emojiratingOne === "norating" &&
          emojiratingTwo === "norating" &&
          emojiratingThree === "norating" &&
          emojiratingFour === "ratingFour" &&
          emojiratingFive === "norating" && <strong>Rating : Happy !</strong>}
        {emojiratingOne === "norating" &&
          emojiratingTwo === "norating" &&
          emojiratingThree === "norating" &&
          emojiratingFour === "norating" &&
          emojiratingFive === "ratingFive" && (
            <strong>Rating : Loved it !</strong>
          )}
      </div>
    </div>
  );
}
