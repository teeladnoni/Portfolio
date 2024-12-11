import React from "react";

function Textarea(props) {
  return (
    <>
      <label className="mb-1 text-white/60 text-sm">{props.label}</label>
      <textarea
        required
        name={props.name}
        placeholder={props.placeholder}
        className="ww-full px-4 py-2 bg-[#1c1c1e] text-white border border-[#333]
         rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400 placeholder:text-sm placeholder:text-white/40"
      />
    </>
  );
}

export default Textarea;
