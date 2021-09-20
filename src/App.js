import React from "react";
import Alert from "./components/Alert";
import Form from "./components/Form";
import NoteList from "./components/NoteList";
import GetComments from "./components/GetComments";
import AlertAddedNote from "./components/AlertAddedNote";

function App() {
  return (
    <div className="container w-75 mt-5">
      <Alert />
      <AlertAddedNote />
      <div className="row">
        <div className="col-6">
          <Form />
          <NoteList />
        </div>
        <div className="col-6">
          <GetComments />
        </div>
      </div>
    </div>
  );
}

export default App;
