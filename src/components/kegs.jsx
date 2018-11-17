import React from "react";
import { getKegList } from "../services/kegService";
import Like from "./common/like";
import Sell from "./common/sell";

class Kegs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      kegList: getKegList(),
      keg: {},
      newKeg: { name: "", brewer: "", price: 0, abv: 0, remaining: 120 }
    };

    this.handleLike = this.handleLike.bind(this);
    this.handleSell = this.handleSell.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
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

              {/* underline abv conditional to > 6.5 */}
              {keg.abv > 6.5 ? (
                <td>
                  <span className="text-danger bg-dark">{keg.abv}%</span>
                </td>
              ) : (
                <td>{keg.abv}%</td>
              )}

              {/* Color-coded price conditional to > $7 */}
              {keg.price >= 7 ? (
                <td>
                  <span className="text-white bg-dark">
                    &nbsp;${keg.price}&nbsp;
                  </span>
                </td>
              ) : (
                <td>&nbsp;${keg.price}&nbsp;</td>
              )}

              {/* Color-coded remaining conditional to < 10 */}
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
                <button
                  onClick={() => this.handleDelete(keg)}
                  className="btn btn-danger btn-sm"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
        <div style={{ position: "absolute", right: 50, marginTop: 50 }}>
          <form onSubmit={e => this.handleAdd(e)}>
            <input
              type="text"
              id="name"
              placeholder="Name"
              onChange={e => this.handleChange(e)}
              value={this.state.newKeg.name}
            />
            <input
              type="text"
              id="brewer"
              placeholder="Brewer"
              onChange={e => this.handleChange(e)}
              value={this.state.newKeg.brewer}
            />
            <input
              type="text"
              id="abv"
              placeholder="Alcohol %"
              onChange={e => this.handleChange(e)}
              value={this.state.newKeg.abv}
            />
            <input
              type="text"
              id="price"
              placeholder="Price"
              onChange={e => this.handleChange(e)}
              value={this.state.newKeg.price}
            />
            <button type="submit" className="btn btn-success btn-sm">
              Add New Keg
            </button>
          </form>
        </div>
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

  handleAdd(event) {
    event.preventDefault();
    let newKegList = this.state.kegList.slice();
    let newKeg = this.state.newKeg;
    newKegList.push(newKeg);
    this.setState({ kegList: newKegList });
  }

  handleChange(event) {
    let newKeg = this.state.newKeg;
    newKeg[event.currentTarget.id] = event.currentTarget.value;
    this.setState({ newKeg: newKeg });
  }

  handleDelete(keg) {
    let newKegList = this.state.kegList.filter(
      k => k.name !== keg.name || k.brewer !== keg.brewer
    );
    this.setState({ kegList: newKegList });
  }
}

export default Kegs;
