import React from 'react'
import Container from '../../component/Container/Container'
import Input from '../../component/Input/Input'
import { useForm } from 'react-hook-form'
import { IoSearch } from "react-icons/io5";
import { IoLocationSharp } from "react-icons/io5";
import Button from '../../component/Button/Button';
import Jobcard from '../../component/Jobcard/Jobcard';
import Filterheading from '../../component/Filterheading/Filterheading';
import { useSelector } from 'react-redux';

const Home = () => {

  const theme = useSelector((state)=> state.theme.theme);

  const {register,handleSubmit} = useForm();


  const onSubmit =(data)=>{
    console.log(data);
  }


  return (
    <>
      <Container>
          <div className={`w-full p-5 rounded-lg shadow-lg ${theme === 'light' ? 'bg-white' : 'bg-cyan-950'}`}>
               <form onChange={handleSubmit(onSubmit)} className='flex flex-wrap md:flex-nowrap gap-3'>
                   <div className='w-full flex gap-2 justify-center items-center'>
                   <p><IoSearch className='text-slate-400' style={{fontSize:'22px'}} /></p>
                   <Input 
                    type="text"
                    placeholder='Enter job title'
                    {
                      ...register('title')
                    }
                   
                   />
                   </div>
                   <div className='w-full flex gap-2 justify-center items-center'>
                   <p><IoLocationSharp className='text-slate-400' style={{fontSize:'22px'}} /></p>
                   <Input 
                    type="text"
                    placeholder='Enter Loaction'
                    {
                      ...register('loaction')
                    }
                   
                   />
                   </div>

               </form>
          </div>
           <Filterheading datalength={400}/>
          <div className={`w-full p-5 rounded-lg mt-5 shadow-lg  flex flex-col gap-5  ${theme === 'light' ? 'bg-white' : 'bg-cyan-950'}`}  >
                <Jobcard companyName ='Tata Consultancy Services' companylogo='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLC2F8yYFFhCTFw51p7XrPq53vb4ageMyq2g&s' role='Full Stack Developer' location='Sakinaka, Andheri(East)' skills={['React','MongoDB','Sql']} shift='Day Shift' pay='15000/-' time='16/12/2024'/>
                <Jobcard companyName ='AnyType PVT LTD' companylogo='' role='Angular Developer' location='CSMT' skills={['Angular','Javascript','Typescript']} shift='Monday to Friday' pay='25,000 to 35,000/-' time='16/12/2024'/>
            
          </div>
      </Container>
    </>
  )
}

export default Home
