import React from "react";

const Collapse = (props) => {
    console.log(props.children);
  return (
    <div>
      <a
        className="btn btn-primary w-100 "
        data-toggle="collapse"
        role="button"
      
        href={"#".concat(props.href)}      >
        Link with href
      </a>

      <div className="collapse show " id={props.href}>
        {props.children}
      </div>
    </div>
  );
};

export default Collapse;
