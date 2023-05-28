import React from "react";
import * as s from "../../styles/specific";
import * as c from "../../styles/common";
import { useNavigate } from "react-router";
import placeholderImg from "../../../media/placeholder-img.gif";

function App(props) {
  const owner = props.data;
  const navigate = useNavigate();

  function handleImgError(e) {
    e.target.src = placeholderImg;
  }

  return (
    <s.OwnerContainer>
      <div className="owner-img-container">
        <img
          src={owner.avatar || placeholderImg}
          alt="Owner"
          onError={(e) => handleImgError(e)}
        />
      </div>
      <h3>{owner.name}</h3>
      <c.SecondaryButton onClick={() => navigate(`/profile/${owner.name}`)}>
        View profile
      </c.SecondaryButton>
    </s.OwnerContainer>
  );
}

export default App;
