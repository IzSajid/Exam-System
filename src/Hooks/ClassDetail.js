import React from "react";
import useClassById from "./useClassById";
import { useParams } from "react-router-dom";

function ClassDetail() {
  const { id } = useParams();
  const { classes, loading, error } = useClassById(id);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      {classes && (
        <div>
          <h1>{classes.name}</h1>
          <p>Email: {classes.email}</p>
          <p>CID: {classes.cid}</p>
        </div>
      )}
    </div>
  );
}

export default ClassDetail;
