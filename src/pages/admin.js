import React from "react";

function admin() {
  return (
    <div className="container">
      <div className="jumbotron">
        <h1>Star Wars Version - NextJS</h1>
        <h3>The greatest resource in the galaxy for Star Wars statistics!</h3>
        <hr />
        <a href="/add">
          <button className="btn btn-danger btn-lg">
            <span className="fa fa-plus"></span> Add New Character
          </button>
        </a>

        <a href="/all">
          <button className="btn btn-danger btn-lg">
            <span className="fa fa-th-list"></span> All Characters
          </button>
        </a>
      </div>
      <div className="row">
        <div className="col-12">
          <div className="card mb-4">
            <div className="card-header">
              <h3>
                <strong>Character Search</strong>
              </h3>
            </div>
            <div className="card-body">
              <input
                type="text"
                id="character-search"
                className="form-control"
              />
              <br />
              <div className="text-right">
                <button className="btn btn-primary btn-md" id="search-btn">
                  <span className="fa fa-search"></span> Search Your Feelings.
                  You know it to be true.
                </button>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-header">
              <h3>
                <strong>Character Statistics</strong>
              </h3>
            </div>
            <div className="card-body"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default admin;
