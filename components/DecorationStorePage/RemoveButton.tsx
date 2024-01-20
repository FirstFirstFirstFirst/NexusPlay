import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
interface inputtype {
  id: number;
  workfunction: Function;
}

function RemoveButton({ id, workfunction }: inputtype) {
  return (
    <button
      type="button"
      className="ml-2"
      onClick={() => {
        workfunction(id);
      }}
    >
      <FontAwesomeIcon icon={faTrash} />
    </button>
  );
}

export default RemoveButton;
