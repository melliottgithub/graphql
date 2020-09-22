import React, { useContext } from "react";
import {
  ApolloClient,
  InMemoryCache,
  gql,
  useQuery,
  useLazyQuery,
} from "@apollo/client";

import { AuthContext, AuthProvider } from "../context/authContext";
import { useHistory } from "react-router-dom";

const GET_ALL_POSTS = gql`
  {
    allPosts {
      id
      title
      description
    }
  }
`;

const Home = () => {
  const { data, loading, error } = useQuery(GET_ALL_POSTS);
  const [fetchData, { data: posts }] = useLazyQuery(GET_ALL_POSTS);
  // access context
  const { state, dispatch } = useContext(AuthContext);

  // react-router-history
  let history = useHistory();

  const updateUserName = () => {
    dispatch({
      type: "LOGGED_IN_USER",
      payload: "Mike",
    });
  };

  if (loading) return <h4 className="container p-5 text-danger">Loading...</h4>;

  return (
    //p=posts
    <div className="container">
      <div className="row p-5">
        {data.allPosts.map((p) => (
          <div className="col-md-4" key={p.id}>
            <div className="card">
              <div className="card-body">
                <div className="card-title">
                  <h4>{p.title}</h4>
                </div>
                <p className="card-text">{p.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="row p-5">
        <button
          onClick={() => fetchData()}
          className="btn btn-raised btn-success"
        >
          Fetch Data
        </button>
      </div>
      <hr />
      {JSON.stringify(posts)}
      <hr />
      {JSON.stringify(state.user)}
      <hr />
      <button onClick={updateUserName} className="btn btn-raised btn-success">
        Update Name
      </button>
      <hr/>
      {JSON.stringify(history)}
    </div>
  );
};

export default Home;
