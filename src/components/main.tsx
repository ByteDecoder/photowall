import React, { Component, useState } from "react";
import PhotoWall from "./photowall";
import AddPhoto from "./add_photo";
import { Route, Link } from "react-router-dom";
import Single from "./single";

const Main = () => {
  const [loading, setLoading] = useState(true);

  
  componentDidMount() {
    this.props
      .startLoadingPosts()
      .then(() => this.setState({ loading: false }));
    this.props.startLoadingComments();
    console.log("main.js - componentDidMount");
  }

    return (
      <div>
        <h1>
          <Link to="/"> Photowall </Link>
        </h1>
        <Route
          exact
          path="/"
          render={() => (
            <div>
              <PhotoWall {...this.props} />
            </div>
          )}
        />

        <Route
          path="/add-photo"
          render={({ history }) => (
            <AddPhoto {...this.props} onHistory={history} />
          )}
        />

        <Route
          path="/single/:id"
          render={(params) => (
            <Single {...this.props} {...params} loading={this.state.loading} />
          )}
        />
      </div>
    );
}

export default Main;
