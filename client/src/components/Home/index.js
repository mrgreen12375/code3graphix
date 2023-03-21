import React from "react";
import Auth from "../../utils/auth";
import { QUERY_ME } from "../../utils/queries";
import { useQuery } from "@apollo/client";

function Home() {
  const { loading, data } = useQuery(QUERY_ME);
  const username = data?.me.username || [];
  return (
    <main className="center">
      <div>
        {Auth.loggedIn() ? (
          <h1>Welcome, {loading ? "" : username}</h1>
        ) : (
          <h2> </h2>
        )}
      </div>
      <div>
          <h1 className="margin">Landing Page Content Here</h1>
      </div>
    </main>
  );
}
  
  export default Home;