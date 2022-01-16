import React, { Component } from "react";
import PhotoWall from "./photowall";
import AddPhoto from "./add_photo";
import { Route, Link } from "react-router-dom";
import Single from "./single";

class Main extends Component {
  state = { loading: true };

  constructor() {
    super();
    console.log("main.js - constructor");
  }

  componentDidMount() {
    this.props
      .startLoadingPosts()
      .then(() => this.setState({ loading: false }));
    this.props.startLoadingComments();
    console.log("main.js - componentDidMount");
  }

  componentWillMount() {
    console.log("main.js - componentWillMount");
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("main.js - componentDidUpdate");
  }

  render() {
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
}

export default Main;
