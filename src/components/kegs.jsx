import React from "react";
import { getKegList } from "../services/kegService";
import Like from "./common/like";

class Kegs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      kegList: getKegList()
    };

    this.handleLike = this.handleLike.bind(this);
  }

  render() {
    return (
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Brewer</th>
            <th>Abv</th>
            <th>Price</th>
            <th>Remaining</th>
            <th />
          </tr>
        </thead>

        <tbody>
          {this.state.kegList.map((keg, index) => (
            <tr key={index}>
              <td>{keg.name}</td>
              <td>{keg.brewer}</td>
              <td>{keg.abv}</td>
              <td>{keg.price}</td>
              <td>{keg.remaining}</td>
              <td>
                <Like liked={keg.liked} onClick={() => this.handleLike(keg)} />
              </td>
              <td>
                <button className="btn btn-danger btn-sm">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }

  handleLike(keg) {
    const newKegList = this.state.kegList.slice();
    const index = kegList.indexOf(keg);
    newKegList[index] = keg;
    newKegList[index].liked = !newKegList[index].liked;
    this.setState({ kegList: newKegList });
  }
}

export default Kegs;
