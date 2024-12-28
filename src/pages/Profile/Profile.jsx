import React from 'react'
import Container from '../../component/Container/Container'
import { useForm } from 'react-hook-form'
import Input from '../../component/Input/Input';
import Button from '../../component/Button/Button';
import Subtitle from '../../component/Title/Subtitle';
import Textarea from '../../component/Textarea/Textarea';
import Imguploader from '../../component/Fileupload/Imguploader';
import Fileuploader from '../../component/Fileupload/Fileuploader';
import { GrLanguage } from "react-icons/gr";
import { FaUser } from "react-icons/fa6";
import { GrNotes } from "react-icons/gr";
import { RiGraduationCapFill } from "react-icons/ri";
import { HiOutlineLightBulb } from "react-icons/hi";
import { MdStar } from "react-icons/md";
import { useSelector } from 'react-redux';

const Profile = () => {

  const {register,handleSubmit, formState: {errors}} = useForm(); 

   const onSubmit = (data)=>{
        console.log(data);
   }

   const theme = useSelector((state)=> state.theme.theme);

  return (
    <Container>
          {/* <div > */}
            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-wrap md:flex-nowrap gap-5 '>
          <div className={`${theme === 'light' ? 'bg-white' : 'bg-cyan-950'} w-full p-5 rounded-lg shadow-lg`}>
          <div  className="flex flex-col gap-3">
          <Subtitle title='Personal Information'  icon={<FaUser className="text-slate-200"
                style={{ fontSize: "17px" }}/>}/>
         <div className='flex flex-wrap md:flex-nowrap gap-2'>
         <Input
            label="Full Name :"
            type="text"
            placeholder="Enter your full name"
            {...register("name")}
            aria-invalid={errors.name ? "true" : "false"}
            invalid={errors.name ? true : false}
          />
          {/* {errors.name?.type === "required" && (
            <p role="alert" className="text-red-500">
              Full name is required
            </p>
          )} */}
          <Input
            label="Email :"
            type="email"
            placeholder="Enter your email"
            {...register("email", {
              validate: (value) =>
                /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                "Email address must be a valid address",
            })}
            aria-invalid={errors.email ? "true" : "false"}
            invalid={errors.email ? true : false}
          />
          {/* {errors.email?.type === "required" && (
            <p role="alert" className="text-red-500">
              Email is required
            </p>
          )} */}
         </div>
          <div className='flex flex-wrap md:flex-nowrap gap-2'>
          <Input
            label="Phone :"
            type="number"
            placeholder="Enter your phone"
            {...register("phone", {
              maxLength: 10,
            })}
            aria-invalid={errors.phone ? "true" : "false"}
            invalid={errors.phone ? true : false}
          />

          {/* {errors.phone?.type === "required" && (
            <p role="alert" className="text-red-500">
              Phone Number is required
            </p>
          )} */}
          

          <Input
            label="Password :"
            type="password"
            placeholder="Enter your password"
            {...register("password")}
            aria-invalid={errors.password ? "true" : "false"}
            invalid={errors.password ? true : false}
          />

          {/* {errors.password?.type === "required" && (
            <p role="alert" className="text-red-500">
              Password is required
            </p>
          )} */}
          </div>

          <Subtitle title='Summary' className='mt-3' icon={<GrNotes className="text-slate-200"
                style={{ fontSize: "17px" }}/>} />

          <Textarea
            type="text"
            placeholder="About Yourself..."
            {...register("summary", {
            })}
            aria-invalid={errors.summary ? "true" : "false"}
            invalid={errors.summary ? true : false}
          />

          {/* {errors.password?.type === "required" && (
            <p role="alert" className="text-red-500">
              Password is required
            </p>
          )} */}

          <Subtitle title='Eduction' className='mt-3' icon={<RiGraduationCapFill className="text-slate-200"
                style={{ fontSize: "17px" }} />} />
          <div className='flex flex-wrap md:flex-nowrap gap-2'>
          <Input
            label="SSC :"
            type="number"
            placeholder="Enter your marks or %"
            {...register("ssc")}
            aria-invalid={errors.ssc ? "true" : "false"}
            invalid={errors.ssc ? true : false}
          />

            <Input
            label="HSC :"
            type="number"
            placeholder="Enter your marks or %"
            {...register("hsc")}
            aria-invalid={errors.hsc ? "true" : "false"}
            invalid={errors.hsc ? true : false}
          />
          </div>
          <div className='flex flex-wrap md:flex-nowrap gap-2'>
          <Input
            label="Gradution :"
            type="number"
            placeholder="Enter your marks or %"
            {...register("gradution")}
            aria-invalid={errors.gradution ? "true" : "false"}
            invalid={errors.gradution ? true : false}
          />

            <Input
            label="Post-Gradution :"
            type="number"
            placeholder="Enter your marks or %"
            {...register("postGradution"
            )}
            aria-invalid={errors.phone ? "true" : "false"}
            invalid={errors.phone ? true : false}
          />
          </div>

          <Subtitle title='Skills' className='mt-3' icon={<HiOutlineLightBulb className="text-slate-200"
                style={{ fontSize: "17px" }} />}/>
          <Input
            type="text"
            placeholder="Enter your skills"
            {...register("skills")}
            aria-invalid={errors.skills ? "true" : "false"}
            invalid={errors.skills ? true : false}
          />
          <Subtitle title='Experience' className='mt-3' icon={<MdStar className="text-slate-200"
                style={{ fontSize: "17px" }} />}/>
          <div className='flex flex-wrap md:flex-nowrap gap-2'>
          <Input
            label='Current Company :'
            type="text"
            // placeholder="Enter your Current Company name"
            {...register("companyName")}
            aria-invalid={errors.companyName ? "true" : "false"}
            invalid={errors.companyName ? true : false}
          />
           <Input
            label='Current Role :'
            type="text"
            placeholder="Enter your role"
            {...register("currentRole")}
            aria-invalid={errors.currentRole ? "true" : "false"}
            invalid={errors.currentRole ? true : false}
          />
          </div>
          <Textarea
            type="text"
            placeholder="About your Work Experience..."
            {...register("companySummary", {
            })}
            aria-invalid={errors.companySummary ? "true" : "false"}
            invalid={errors.companySummary ? true : false}
          />

          <Subtitle title='Languages' className='mt-3' icon={<GrLanguage className="text-slate-200"
                style={{ fontSize: "17px" }}/>} />

          <Input
            type="text"
            placeholder="Enter your Languages"
            {...register("languages")}
            aria-invalid={errors.languages ? "true" : "false"}
            invalid={errors.languages ? true : false}
          />

        </div>
            </div>
            
            <div className={`${theme === 'light' ? 'bg-white' : 'bg-cyan-950'} w-full md:w-1/3 h-fit p-5 rounded-lg shadow-lg`}>
            <Subtitle title='Profile Pic' />
              <div className='w-full flex justify-center items-center'>
              <Imguploader
              type='file'
              placeholder='file upload'
              {
                ...register('profilePic')
              }
              aria-invalid={errors.profilePic ? "true" : "false"}
              invalid={errors.profilePic ? true : false}
              />
              </div>

            <Subtitle title='Resume' className='mt-3'/>
            <Fileuploader
            type='file'
            placeholder='Upload Resume'
            {
              ...register('resume')
            }
            aria-invalid={errors.resume ? "true" : "false"}
            invalid={errors.resume ? true : false}
            />
            <Button type="submit" bgColor="bg-violet-400" textColor="text-white" className='w-full mt-5'>
             Save 
          </Button>
            </div>
            </form>
          {/* </div> */}
  </Container>
  )
}

export default Profile
