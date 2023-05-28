import React from "react";
import { useNavigate } from "react-router-dom";
import * as c from "../../styles/common";
import * as s from "../../styles/home";
import scrollFix from "../../utils/scrollFix";
import placeholderImg from "../../../media/placeholder-img.gif";

/**
 * Function for rendering a card component based on the input data.
 * @param {object} props.data - An object containing data for the card.
 * @param {string} props.slider - A string that determines if the card should be a slider card or a standard card.
 * @param {number} props.i - A number that determines the index of the card.
 * @returns A single card component.
 */

function App(props) {
  const navigate = useNavigate();
  const Slider = s.SliderCard;
  const Standard = s.StandardCard;
  //Set default card type to standard.
  let Card = Standard;

  //Handle click on card and scroll the page to top before navigating.
  function handleClick(id) {
    scrollFix();
    navigate(`/specific/${id}`);
  }

  //If the slider prop is set to true, set the card type to slider.
  if (props.slider === "true") {
    Card = Slider;
  }

  //Insert placeholder image if the image fails to load.
  function handleImgError(e) {
    e.target.src = placeholderImg;
  }

  return (
    <Card
      data-index={props.i}
      data-state={
        props.i === 0
          ? "active"
          : undefined || props.i === 1
          ? "next"
          : undefined || props.i === props.data.length - 1
          ? "prev"
          : undefined
      }
      key={props.venue.id}
    >
      <s.SliderCardImage>
        <img
          src={props.venue.media[0] || placeholderImg}
          alt={props.venue.name}
          onError={(e) => handleImgError(e)}
        />
        <div className="perks">
          {props.venue.meta.wifi ? <div className="wifi">WIFI</div> : null}
          {props.venue.meta.parking ? (
            <div className="parking">PARKING</div>
          ) : null}
          {props.venue.meta.breakfast ? (
            <div className="breakfast">BREAKFAST</div>
          ) : null}
          {props.venue.meta.pets ? <div className="pets">PETS</div> : null}
        </div>
      </s.SliderCardImage>
      <h2>
        {props.venue.name.length < 23
          ? props.venue.name
          : props.venue.name.slice(0, 23)}
      </h2>
      <div className="venue-info">
        <div className="venue-price">
          <p>Price</p>
          <p>{props.venue.price}$</p>
        </div>
        <div className="venue-rating">
          <p>Rating</p>
          <p>{props.venue.rating}/5</p>
        </div>
      </div>
      <div className="btn-container">
        <c.CardButton onClick={() => handleClick(props.venue.id)}>
          View venue
        </c.CardButton>
      </div>
    </Card>
  );
}

export default App;
