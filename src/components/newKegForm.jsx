import React from "react";

const NewKegForm = props => {
  return (
    <div>
      <form onSubmit={props.onSubmit}>
        <input
          type="text"
          id="name"
          placeholder="Name"
          onChange={props.onChange}
          value={props.newKeg.name}
        />
        <input
          type="text"
          id="brewer"
          placeholder="Brewer"
          onChange={props.onChange}
          value={props.newKeg.brewer}
        />
        <input
          type="text"
          id="abv"
          placeholder="Alcohol %"
          onChange={props.onChange}
          value={props.newKeg.abv}
        />
        <input
          type="text"
          id="price"
          placeholder="Price"
          onChange={props.onChange}
          value={props.newKeg.price}
        />
        <button type="submit" className="btn btn-success btn-sm">
          Add New Keg
        </button>
      </form>
    </div>
  );
};

export default NewKegForm;
