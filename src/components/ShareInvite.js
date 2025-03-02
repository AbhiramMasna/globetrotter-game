import React from "react";

const ShareInvite = ({ score }) => {
  const inviteLink = `https://wa.me/?text=Join%20me%20in%20Globetrotter!%20I%20scored%20${score}%20points!%20Try%20beating%20me!%20%F0%9F%9A%80`;

  return (
    <div>
      <button onClick={() => window.open(inviteLink, "_blank")}>
        📢 Challenge a Friend!
      </button>
    </div>
  );
};

export default ShareInvite;
