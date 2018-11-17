import React from "react";
import { getKegList } from "../services/kegService";
import Like from "./common/like";
import Sell from "./common/sell";
import Modal from "./common/modal";

class Kegs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      kegList: getKegList(),
      keg: {},
      newKeg: { name: "", brewer: "", price: "", abv: "", remaining: 120 },
      show: false
    };

    this.handleLike = this.handleLike.bind(this);
    this.handleSell = this.handleSell.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }

  render() {
    return (
      <div>
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Brewer</th>
              <th>Alcohol(%)</th>
              <th>Price</th>
              <th>Remaining</th>
              <th>Like</th>
              <th />
              <th />
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
                    <span className="text-danger bg-dark px-3">{keg.abv}%</span>
                  </td>
                ) : (
                  <td>
                    <span className="px-3">{keg.abv}%</span>
                  </td>
                )}

                {/* Color-coded price conditional to > $7 */}
                {keg.price >= 7 ? (
                  <td>
                    <span className="text-white bg-dark px-3">
                      ${keg.price}
                    </span>
                  </td>
                ) : (
                  <td>
                    <span className="px-3">${keg.price}</span>
                  </td>
                )}

                {/* Color-coded remaining conditional to < 10 */}
                {keg.remaining < 10 ? (
                  <td>
                    <span className="text-danger px-3">{keg.remaining}</span>
                  </td>
                ) : (
                  <td>
                    <span className="px-3">{keg.remaining}</span>
                  </td>
                )}

                <td>
                  <Like
                    liked={keg.liked}
                    onClick={() => this.handleLike(keg)}
                  />
                </td>
                <td>
                  <Sell
                    product="pint"
                    onClick={() => this.handleSell(keg, 1)}
                  />
                </td>
                <td>
                  <Sell
                    product="growler"
                    onClick={() => this.handleSell(keg, 2)}
                  />
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
        </table>
        <Modal
          title="New Keg"
          show={this.state.show}
          handleClose={this.hideModal}
          onSubmit={e => this.handleAdd(e)}
          onChange={e => this.handleChange(e)}
          newKeg={this.state.newKeg}
        />
        <button
          style={{ float: "right" }}
          className="btn btn-info btn-sm mr-3"
          type="button"
          onClick={this.showModal}
        >
          Add New Keg
        </button>
      </div>
    );
  }

  handleLike(keg) {
    let newKegList = this.state.kegList.slice();
    let index = this.state.kegList.indexOf(keg);
    newKegList[index] = keg;
    newKegList[index].liked = !newKegList[index].liked;
    this.setState({ kegList: newKegList });
  }

  handleSell(keg, amount) {
    let newKegList = this.state.kegList.slice();
    let index = this.state.kegList.indexOf(keg);
    let newKeg = keg;
    newKeg.remaining -= amount;
    newKegList[index] = newKeg;
    this.setState({ kegList: newKegList });
  }

  handleAdd(event) {
    event.preventDefault();
    let newKegList = this.state.kegList.slice();
    let newKeg = this.state.newKeg;
    newKegList.push(newKeg);
    this.setState({ kegList: newKegList });
    this.setState({
      newKeg: { name: "", brewer: "", price: "", abv: "", remaining: 120 }
    });
    this.setState({ show: false });
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

  showModal() {
    this.setState({ show: true });
  }

  hideModal() {
    this.setState({ show: false });
  }
}

export default Kegs;
