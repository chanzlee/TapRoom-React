import React from "react";
import { getKegList } from "../pseudo-backend/kegService";
import Like from "./common/like";
import Sell from "./common/sell";
import Modal from "./common/modal";
import NewKegForm from "./newKegForm";
import DeleteConfirm from "./DeleteConfirm";
import Keg from "../model/keg";

class Kegs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      kegList: getKegList(),
      keg: {},
      newKeg: new Keg(),
      deletingKeg: new Keg(),
      addModalShow: false,
      deleteModalShow: false
    };

    this.handleLike = this.handleLike.bind(this);
    this.handleSell = this.handleSell.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.showAddModal = this.showAddModal.bind(this);
    this.hideAddModal = this.hideAddModal.bind(this);
    this.showDeleteModal = this.showDeleteModal.bind(this);
    this.hideDeleteModal = this.hideDeleteModal.bind(this);
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
                    onClick={() => this.showDeleteModal(keg)}
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
          show={this.state.addModalShow}
          handleClose={this.hideAddModal}
          modalTarget={
            <NewKegForm
              onSubmit={e => this.handleAdd(e)}
              onChange={e => this.handleChange(e)}
              newKeg={this.state.newKeg}
            />
          }
        />

        <Modal
          title="Delete Keg"
          show={this.state.deleteModalShow}
          handleClose={this.hideDeleteModal}
          modalTarget={
            <DeleteConfirm
              name={this.state.deletingKeg.name}
              handleClose={() => this.hideDeleteModal()}
              onDelete={() => this.handleDelete(this.state.deletingKeg)}
            />
          }
        />

        <button
          style={{ float: "right" }}
          className="btn btn-info btn-sm mr-3"
          type="button"
          onClick={this.showAddModal}
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
      newKeg: new Keg()
    });
    this.setState({ addModalShow: false });
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
    this.setState({ kegList: newKegList, deleteModalShow: false });
  }

  showAddModal() {
    this.setState({ addModalShow: true });
  }

  hideAddModal() {
    this.setState({ addModalShow: false });
  }

  showDeleteModal(keg) {
    this.setState({ deleteModalShow: true, deletingKeg: keg });
  }

  hideDeleteModal() {
    this.setState({ deleteModalShow: false });
  }
}

export default Kegs;
