import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

function CustomersList(props) {
  return (
    <div>
      <h2>Listing customers - </h2>
      <table border="2">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Mobile</th>
            <th>Actions</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody></tbody>
      </table>

      <Link to="/customers/new">Add Customer</Link>
    </div>
  );
}

export default connect()(CustomersList);
