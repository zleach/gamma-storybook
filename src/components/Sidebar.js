import React from "react";

export default (props) => {
  return (
    <p class="m-4 p-4 border shadow inline-block bg-white rounded">
      {props.children}
      <button class="mt-4 p-3 block rounded-lg bg-green-700 text-white hover:bg-green-600">
        Hello Back 👋
      </button>
    </p>
  );
};
