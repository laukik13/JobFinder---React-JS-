import React, { useId, useState } from "react";
import { useSelector } from "react-redux";

const Select = React.forwardRef(({ fieldOption ,className='',...props}, ref) => {

  const id = useId();
  // const [options,setOption] = useState();

  const theme = useSelector((state)=> state.theme.theme)

  return (
    // <div >
    <select
      className={`w-full px-3 py-2 rounded-lg border text-slate-400 ${theme === "light" ? 'border-slate-300' : 'border-slate-600'}  bg-transparent ${className}`}
      // defaultValue="Categories"
      {...props}
      id={id}
      ref={ref}
    >
      {fieldOption.map((item) => (
        <option key={item.value} value={item.value}>{item.label}</option>
      ))}
    </select>
    // </div>
  );
})

export default Select;
