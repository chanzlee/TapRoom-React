import React from "react";

const NewKegForm = props => {
  return (
    <div>
      <form onSubmit={props.onSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            onChange={props.onChange}
            value={props.newKeg.name}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="brewer">Brewer</label>
          <input
            type="text"
            id="brewer"
            onChange={props.onChange}
            value={props.newKeg.brewer}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="abv">Alcohol Content</label>
          <input
            type="number"
            id="abv"
            onChange={props.onChange}
            value={props.newKeg.abv}
            className="form-control"
          />{" "}
        </div>
        <div className="form-group">
          <label htmlFor="price">Price</label>
          <input
            type="number"
            id="price"
            onChange={props.onChange}
            value={props.newKeg.price}
            className="form-control"
          />
        </div>

        <button
          style={{ float: "right" }}
          type="submit"
          className="btn btn-success btn-sm"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default NewKegForm;
