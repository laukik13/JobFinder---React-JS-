import React from 'react'
import Container from '../../component/Container/Container';
import { useParams } from 'react-router'
import Title from '../../component/Title/Title';
import { IoLocationOutline } from 'react-icons/io5';
import Subtitle from '../../component/Title/Subtitle';
import Badge from '../../component/Badge/Badge';
import Button from '../../component/Button/Button';
import { MdBookmarkBorder } from "react-icons/md";
import { MdOutlineReportGmailerrorred } from "react-icons/md";
import { useSelector } from 'react-redux';

const Singelpage = ({companyName,companylogo,role,location,skills=[],pay,shift,jobDescription,jobtype}) => {

    const {jobName} = useParams();

    const theme = useSelector((state)=> state.theme.theme);

  return (
    <Container>
        <div className={`${theme === "light" ? "bg-white" :"bg-cyan-950"} w-full p-5 rounded-lg shadow-lg`}>
        <div className="w-full flex flex-col sm:flex-row justify-start items-start gap-4 mb-3">
             <div>
             <img
              src={companylogo ? companylogo : "https://www.shutterstock.com/image-vector/image-icon-trendy-flat-style-600nw-643080895.jpg"}
              alt={companyName}
              className="w-40 rounded-lg border border-slate-100"
            />
             </div>
             <div className=' flex flex-col gap-1'>
             <Title title={role} className='pl-1' />
             <h1 className='text-slate-400 pl-1'>{companyName}</h1>
             <div className="flex justify-start items-center gap-1">
                          <IoLocationOutline
                            className="text-slate-400"
                            style={{ fontSize: "15px" }}
                          />
                          <p className="text-slate-400">{location}</p>
             </div>
             <div className='w-full flex flex-wrap gap-2'>
                {
                    skills.map((item)=>(
                        <Badge label={item} />
                    ))
                }
             </div>

             </div>
          </div>
          <div className={`divide-y ${theme === "light" ? "divide-slate-300" :"divide-slate-600"}`}>
          <div className='pb-3'>
              <Subtitle title='Job Details :'/>
              <div className='flex flex-col gap-4'>
                <div className='flex flex-col gap-2'>
                    <h1 className='font-bold'>Pay</h1>
                    <Badge label={pay} />
                </div>
                <div className='flex flex-col gap-2'>
                    <h1 className='font-bold'>Job Type</h1>
                    <Badge label={jobtype} />
                </div>
                <div className='flex flex-col gap-2'>
                    <h1 className='font-bold'>Shift and Schedule</h1>
                    <Badge label={shift} />
                </div>
              </div>
          </div>
          <div className='py-3'>
              <Subtitle title='Location :'/>
              <div className="flex justify-start items-center gap-1">
                          <IoLocationOutline
                            className="text-slate-400"
                            style={{ fontSize: "15px" }}
                          />
                          <p className="text-slate-400">{location}</p>
             </div>
          </div>
          <div className='py-3'>
              <Subtitle title='Full Job Description :'/>
              <p className="text-slate-400">
              {jobDescription}
              </p>
          </div>
          <div className='py-3 flex gap-2'>
              <Button bgColor='bg-sky-400 text-white' >Apply Job</Button>
              <Button bgColor='bg-sky-400 text-white' className='flex gap-2 justify-center items-center'><MdBookmarkBorder style={{ fontSize: "15px" }}/>Save Job</Button>
              <Button bgColor='bg-sky-400 text-white' className='flex gap-2 justify-center items-center'><MdOutlineReportGmailerrorred style={{ fontSize: "15px" }}/>Report Job</Button>
          </div>
          </div>
          
        </div>
    </Container>
  )
}

export default Singelpage
