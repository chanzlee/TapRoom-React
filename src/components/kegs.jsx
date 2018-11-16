import React from "react";
import { getKegList } from "../services/kegService";
import Like from "./common/like";
import Sell from "./common/sell";

class Kegs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      kegList: getKegList(),
      keg: {}
    };

    this.handleLike = this.handleLike.bind(this);
    this.handleSell = this.handleSell.bind(this);
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
            <th>Like</th>
            <th>Sell</th>
            <th />
          </tr>
        </thead>

        <tbody>
          {this.state.kegList.map((keg, index) => (
            <tr key={index}>
              <td>{keg.name}</td>
              <td>{keg.brewer}</td>
              <td>{keg.abv}</td>
              {keg.price >= 7 ? (
                <td>
                  <span className="text-white bg-dark">
                    &nbsp;${keg.price}&nbsp;
                  </span>
                </td>
              ) : (
                <td>&nbsp;${keg.price}&nbsp;</td>
              )}
              {keg.remaining < 10 ? (
                <td>
                  <span className="text-danger">
                    &nbsp;&nbsp;{keg.remaining}&nbsp;
                  </span>
                </td>
              ) : (
                <td>&nbsp;&nbsp;{keg.remaining}</td>
              )}
              <td>
                <Like liked={keg.liked} onClick={() => this.handleLike(keg)} />
              </td>
              <td>
                <Sell onClick={() => this.handleSell(keg)} />
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
    let newKegList = this.state.kegList.slice();
    let index = this.state.kegList.indexOf(keg);
    newKegList[index] = keg;
    newKegList[index].liked = !newKegList[index].liked;
    this.setState({ kegList: newKegList });
  }

  handleSell(keg) {
    let newKegList = this.state.kegList.slice();
    let index = this.state.kegList.indexOf(keg);
    let newKeg = keg;
    newKeg.remaining--;
    newKegList[index] = newKeg;
    this.setState({ kegList: newKegList });
  }
}

export default Kegs;
