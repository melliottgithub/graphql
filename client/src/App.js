import React, { useContext } from "react";
import {
  ApolloClient,Context,
  InMemoryCache,
  gql,
  ApolloProvider,
} from "@apollo/client";
//components
import Home from "./components/Home";
import Nav from "./components/Nav";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import { ToastContainer } from "react-toastify";
import { Switch, Route } from "react-router-dom";
import CompleteRegistration from "./components/auth/CompleteRegistration";
import { AuthContext } from "./context/authContext";
import { setContext } from '@apollo/client/link/context';


const App = () => {
  const { state } = useContext(AuthContext);
  const { user } = state;

  const client = new ApolloClient({
    //uri: "https://48p1r2roz4.sse.codesandbox.io",
    uri: process.env.REACT_APP_GRAPHQL_ENDPOINT,
    cache: new InMemoryCache(),
    request: (operation) => {
      operation.setContext({
        headers: {
          authtoken: user ? user.token : "",
        },
      });
    },
  });
  return (
    <ApolloProvider client={client}>
      <Nav />
      <ToastContainer />
      <Switch>
        <Route exact path="/home" component={Home} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <Route
          exact
          path="/complete-registration"
          component={CompleteRegistration}
        />
      </Switch>
    </ApolloProvider>
  );
};

export default App;
