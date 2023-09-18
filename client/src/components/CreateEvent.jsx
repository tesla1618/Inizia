import React from "react";
import Layout from "./Layout";
import "../css/page.css";
import { useCurrentUser } from "./userState";

function CreateEvent() {
  const { currentUser } = useCurrentUser();
  console.log(currentUser);
  if (!currentUser) {
    var username = "Guest";
  } else {
    username = currentUser.username;
  }
  return (
    <Layout>
      <div className="pcontainer">
        <h2 className="mb-4 mt-3">Post an Event </h2>
        <h6> Hello, ${username} </h6>
        <input type="text" placeholder="Event Name" className="form-control mb-3" />
      </div>
    </Layout>
  );
}

export default CreateEvent;
