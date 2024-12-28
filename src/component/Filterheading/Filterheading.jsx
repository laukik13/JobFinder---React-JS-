import React from "react";

const Filterheading = ({ datalength }) => {

  return (
    <div className="mt-5">
      {datalength > 0 ? 
        (<div>
          <h1 className="text-bold text-2xl ">Jobs for you</h1>
          <p>
            There are more than{" "}
            <span className="text-violet-400">{datalength}</span> Jobs
          </p>
        </div>)
        :
       ( <div>
          <h1 className="text-bold text-2xl ">No Jobs for you</h1>
        </div>)
      }
    </div>
  );
};

export default Filterheading;
