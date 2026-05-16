import React, { useState } from "react";
import { data } from "./Data";

const SearchUser = () => {
  const [search, setSearch] = useState("");
  // console.log(data);

  const handleChange = (e) => {
    setSearch(e.target.value);
    console.log(e.target.value);
  };

  const filterData = () => {
    const lowerMatchCase = search.toLowerCase();

    return data.filter((item) => {
      if (lowerMatchCase === "") {
        return true;
      } else {
        const MatchFirst_name = item.first_name
          .toLowerCase()
          .includes(lowerMatchCase);
        const MatchLast_name = item.last_name
          .toLowerCase()
          .includes(lowerMatchCase);
        return MatchFirst_name || MatchLast_name;
      }
    });
  };

  return (
    <>
      <div className="container">
        <h1>Search the data</h1>
        <form className="d-flex">
          <input
            className="form-control"
            onChange={handleChange}
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
        </form>

        <div className="py-3">
          <table className="table table-success table-striped">
            <thead>
              <tr>
                <th scope="col">Id</th>
                <th scope="col">First Name</th>
                <th scope="col">Last Name</th>
                <th scope="col">Phone No</th>
                <th scope="col">Email</th>
                <th scope="col">Gender</th>
              </tr>
            </thead>
            <tbody className="py-3">
              {filterData().map((item) => (
                <tr key={item.id}>
                  <th scope="row">{item.id}</th>
                  <td>{item.first_name}</td>
                  <td>{item.last_name}</td>
                  <td>{item.phone}</td>
                  <td>{item.email}</td>
                  <td>{item.gender}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default SearchUser;
