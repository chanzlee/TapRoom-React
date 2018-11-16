import React from "react";
import { getKegList } from "../services/kegService";
import Like from "./common/like";

class Kegs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      kegs: getKegList()
    };
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
          {kegs.map((keg, index) => (
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

  handleLike = keg => {
    const kegList = [...this.state.kegList];
    const index = kegList.indexOf(keg);
    kegList[index] = { ...keg };
    kegList[index].liked = !kegList[index].liked;
    this.setState({ movies });
  };
}

export default Kegs;
