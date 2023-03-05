import React from "react";
import "./Tooltip.scss"

const Tooltip = ({icon}) => {
  return (
    <div className="tooltip">
      <span className="tooltiptext">Coming soon</span>
      {icon}
      
    </div>
  );
};

export default Tooltip;