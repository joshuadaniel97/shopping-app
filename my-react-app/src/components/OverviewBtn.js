import React from "react";

function OverviewBtn(props) {
  function handleClick() {
    console.log("overview button clicked");
    props.showOverViewPage();
  }

  return (
    <div>
      <button onClick={handleClick}>Overview</button>
    </div>
  );
}

export default OverviewBtn;
