import React from "react";
import Container from "../../component/Container/Container";
import Input from "../../component/Input/Input";
import { IoLocationSharp, IoSearch } from "react-icons/io5";
import { useForm } from "react-hook-form";
import Select from "../../component/Select/Select";
import { GiSettingsKnobs } from "react-icons/gi";
import Filterheading from "../../component/Filterheading/Filterheading";
import Jobcard from "../../component/Jobcard/Jobcard";
import { useSelector } from "react-redux";

const Filter = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  const categories = [
    {
      value: "fresher",
      label: "Fresher",
    },
    {
      value: "experience",
      label: "Experience",
    },
    {
      value: "intern",
      label: "Intern",
    },
    {
      value: "fulltime",
      label: "Full-Time",
    },
  ];


  const timestamp = [
    {
      value: "all",
      label: "All Jobs",
    },
    {
      value: "recent",
      label: "Recent",
    },
    {
      value: "3days",
      label: "Last 3 days",
    },
    {
      value: "7days",
      label: "Last 7 days",
    },
    {
      value: "14days",
      label: "Last 14 days",
    },
  ];

 const theme = useSelector((state)=>state.theme.theme)

  return (
    <Container>
      <div className={`w-full p-5 rounded-lg shadow-lg ${theme === 'light' ? 'bg-white' : 'bg-cyan-950'}`}>
        <form
          onChange={handleSubmit(onSubmit)}
          className="flex flex-wrap md:flex-nowrap gap-3"
        >
          <div className="w-full flex gap-2 justify-center items-center">
            <p>
              <IoSearch
                className="text-slate-400"
                style={{ fontSize: "22px" }}
              />
            </p>
            <Input
              type="text"
              placeholder="Enter job title"
              {...register("title")}
            />
          </div>
          <div className="w-full flex gap-2 justify-center items-center">
            <p>
              <IoLocationSharp
                className="text-slate-400"
                style={{ fontSize: "22px" }}
              />
            </p>
            <Select fieldOption={categories} 
             {...register('categories')}
            />
          </div>
          <div className="w-full flex gap-2 justify-center items-center">
            <p>
              <IoLocationSharp
                className="text-slate-400"
                style={{ fontSize: "22px" }}
              />
            </p>
            <Select fieldOption={timestamp} 
             {...register('timestamp')}
             />
          </div>
          <button className={`px-3 py-2 border ${theme === "light" ? 'border-slate-300' : 'border-slate-600'} rounded-lg`}>
          <GiSettingsKnobs className="text-slate-400"
                style={{ fontSize: "22px" }} />
          </button>
        </form>
      </div>

      <Filterheading datalength={400}/>
          <div className={`w-full p-5 rounded-lg mt-5 shadow-lg  flex flex-col gap-5 ${theme === 'light' ? 'bg-white' : 'bg-cyan-950'}`}>
                <Jobcard companyName ='Tata Consultancy Services' companylogo='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLC2F8yYFFhCTFw51p7XrPq53vb4ageMyq2g&s' role='Full Stack Developer' location='Sakinaka, Andheri(East)' skills={['React','MongoDB','Sql']} shift='Day Shift' pay='15000/-' time='16/12/2024'/>
                <Jobcard companyName ='AnyType PVT LTD' companylogo='' role='Angular Developer' location='CSMT' skills={['Angular','Javascript','Typescript']} shift='Monday to Friday' pay='25,000 to 35,000/-' time='16/12/2024'/>
                
          </div>
    </Container>
  );
};

export default Filter;
