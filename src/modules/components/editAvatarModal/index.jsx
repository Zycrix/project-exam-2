import React, { useState } from "react";
import * as c from "../../styles/common";
import * as s from "../../styles/profile";

function App({ handler, toggle, avatar, changeAvatar }) {
  const [preview, setPreview] = useState(false);
  function handleAvatarChange(e) {
    handler(e);
  }
  function toggleModal() {
    toggle();
  }
  function handlePreview(e) {
    e.preventDefault();
    setPreview(!preview);
  }
  function handleChange(val) {
    changeAvatar(val);
  }
  return (
    <s.OverlayContent>
      <s.CloseContainer>
        <c.CleanButton onClick={toggleModal}>
          <span className="material-symbols-outlined">close</span>
        </c.CleanButton>
      </s.CloseContainer>
      <h2>Change avatar</h2>
      <form onSubmit={(e) => handleAvatarChange(e)}>
        <c.StandardInput
          type="text"
          placeholder="Avatar URL"
          value={avatar}
          onChange={(e) => handleChange(e.target.value)}
        />
        <c.PrimaryButton>Save</c.PrimaryButton>
      </form>
      <hr />
      <c.SecondaryButton onClick={(e) => handlePreview(e)}>
        Preview
      </c.SecondaryButton>
      <s.PreviewContainer show={preview}>
        <s.ImgContainer>
          <img src={avatar} alt="preview" />
        </s.ImgContainer>
      </s.PreviewContainer>
    </s.OverlayContent>
  );
}

export default App;
