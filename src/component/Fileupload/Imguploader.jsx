import React, { useId, useState } from 'react'
import { convertBase64 } from './Base64';

const Imguploader = React.forwardRef(({type,placeholder,className='',...props},ref) => {

    const id = useId();

    const [baseImg,setBaseImg] = useState();

    const handleImageChange = async(e) =>{
        const file = e.target.files[0];
        const base64 = await convertBase64(file);
        setBaseImg(base64);
    }
    
      return (
        <div className='w-2/4 relative border overflow-hidden border-slate-300 border-dashed h-40 rounded-lg'>
     
          <input 
            type='file'
            placeholder={placeholder}
            className={`w-full absolute h-40 z-10 opacity-0 ${className}`}
            ref={ref}
            {...props}
            id={id}
            onChange={handleImageChange}
          />
          {baseImg ? <img src={baseImg} className='w-full absolute h-40 ' /> : <h1 className='absolute text-sm  md:text-lg text-slate-300 top-16 right-3 '>Upload Profile Pic</h1>}
                 
        </div>
      )
    })

export default Imguploader
