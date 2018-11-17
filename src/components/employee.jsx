import React from "react";
import { getEmployeeList } from "../services/employeeService";
import { Link } from "react-router-dom";

const Employee = () => {
  const employeeList = getEmployeeList();
  return (
    <div className="grid grid-zone">
      <style jsx>
        {`
          .grid-zone {
            display: grid;
            grid-template-columns: repeat(3, 20%);
            grid-template-rows: repeat(4, auto);
            grid-column-gap: 20px;
            grid-row-gap: 50px;
            margin-top: 5%;
            padding-top: 5%;
            grid-auto-rows: 450px;
            justify-items: center;
            justify-content: space-evenly;
            align-items: stretch;
            align-content: space-evenly;
            grid-auto-flow: row;
          }

          .card {
            border-radius: 15px;
          }

          .card-img-top {
            border-radius: 15px;
            width: 100%;
            height: 300px;
          }
        `}
      </style>
      {employeeList.map((employee, index) => {
        return (
          <div key={index} className="card" style={{ width: "18rem" }}>
            <img
              className="card-img-top"
              src={employee.image}
              alt="Card image cap"
            />
            <div className="card-body">
              <h5 className="card-title">{employee.name}</h5>
              <p className="card-text">Career: {employee.career}</p>

              <cite className="text-align-center mb-3 d-block">
                {employee.word}
              </cite>

              <Link to="#" className="btn btn-secondary btn-sm">
                View detail
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Employee;
