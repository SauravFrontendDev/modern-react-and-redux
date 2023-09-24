// import React from "react";

const ProfileCard = ({ title, handle, image }) => {
  return (
    <div className="card">
      <div className="card-image">
        <figure className="image is-128x128">
          <img src={image} alt={title} />
        </figure>
      </div>
      <div className="card-content">
        <div className="media">
          <div className="media-left">
            <figure className="image is-48x48">
              <img src={image} alt={title} />
            </figure>
          </div>
          <div className="media-content">
            <p className="title is-4">{title}</p>
            <p className="subtitle is-6">{handle}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
