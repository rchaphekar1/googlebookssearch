import React from "react";

function InnerContainer(props) {
  return (
    <div key={props.id}>
      <div className="title-author">
          <h2 className="title">{props.title}</h2>
          { props.authors ? (<h5 className="authors">{props.authors}</h5>) : ""}
      </div>
      <div className="image-description">
          { props.image ? (<div className="image"><img className="card-img" src={props.image} alt="book thumbnail" /></div>) : "" }
          { props.description ? (<p className="description">{props.description}</p>) : ""}
      </div>
    </div>
  );
}

export default InnerContainer;