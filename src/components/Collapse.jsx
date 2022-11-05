import React from "react";

const Collapse = (props) => {
    console.log(props.children);
  return (
    <div>
      <a
        className="btn btn-primary"
        data-toggle="collapse"
        role="button"
        aria-expended="false"
        href="#collapseExample"      >
        Link with href
      </a>

      <div className=" " id="collapseExample">
        {props.children}
      </div>
    </div>
  );
};

export default Collapse;
