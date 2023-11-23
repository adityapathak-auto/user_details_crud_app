import { useEffect, useRef, useState } from "react";
import  "./userForm.css";
import Sidebar from "./navbar";
import { useNavigate, useParams } from "react-router-dom";




export const UpdateUser = () =>{

    const navigate = useNavigate();

  const [data,setData] = useState({});

  const [oldData,setOldData] = useState({});

  const formRef = useRef();

  let {id} = useParams();


  const handleChange = (e) => {
    const { name, value } = e.target;

    
    setData(prevData => ({
      ...prevData,
      [name]: value
    }));

   
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5009/update/'+id, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        alert('Form data submitted successfully');

        formRef.current.reset();

        navigate("/");



        // Optionally, you can reset the form here
        setData({
          name: '',
          number: '',
          email: '',
          dob: '',
          position: '',
          department: '',
          crmuser: '',
          role: '',
          address: '',
        });
      } else {
        console.error('Error submitting form data:', response.statusText);
      }
    } catch (error) {
      console.error('Error submitting form data:', error.message);
    }
  };


  const getUserById = async (id) => {
    
    
    try {
      const response = await fetch(`http://localhost:5009/getUser/${id}`);
  
      if (response.ok) {
        const userData = await response.json();
        setData(userData);
      } else {
        console.error('Error retrieving user details:', response.statusText);
      }
    } catch (error) {
      console.error('Error retrieving user details:', error.message);
    }
  };
  
  

  useEffect(()=>{
    getUserById(id);
    
  },[]);




  return (<div className="main-body">
    <Sidebar/>

        <form className="m-auto bg-default w-7/12  pb-1 shadow-lg" onSubmit={handleSubmit} ref={formRef}>
            <div className='flex gap-11  flex-wrap m-auto bg-default p-6 items-center'>
            <div>
                <label htmlFor='name' className='text-white mb-1'>Full Name</label>
                <input name='name' value={data.name} required={true} placeholder='Enter Name' onChange={handleChange} type='name' className='border-b-1 block text-white bg-inherit mt-1 placeholder:text-slate-50 focus:outline-none focus:border-sky-500'/>
            </div>
            <div>
                <label htmlFor='number' className='text-white mb-1'>Mobile Number</label>
                <input name='number' required={true} value={data.number} placeholder='Enter Number' onChange={handleChange} type='name' className=' border-b block text-white bg-inherit mt-1 placeholder:text-slate-50 focus:outline-none focus:border-sky-500 number:border-none '/>
            </div>
            <div>
                <label htmlFor='email' className='text-white mb-1'>Email</label>
                <input name='email' required={true} value={data.email} placeholder='Enter Email ID' onChange={handleChange} type='name' className='border-b-1 block text-white bg-inherit mt-1 placeholder:text-slate-50 focus:outline-none focus:border-sky-500'/>
            </div>
            <div>
                <label htmlFor='dob' className='text-white mb-1'>Date of Birth</label>
                <input name='dob' placeholder='01/01/1997' value={data.dob} onChange={handleChange} type='name' className='border-b-1 block text-white bg-inherit mt-1 placeholder:text-slate-50 focus:outline-none focus:border-sky-500'/>
            </div>
            <div>
                <label htmlFor='position' className='text-white mb-1'>Postion</label>
                <input name='position' placeholder='Enter Position' value={data.position} type='name' onChange={handleChange} className='border-b-1 block text-white bg-inherit mt-1 placeholder:text-slate-50 focus:outline-none focus:border-sky-500'/>
            </div>
            

            <div className="relative">
    <label htmlFor='department' class='text-white mb-1'>Department</label>
    <select name='department' value={data.department} class=' diff border-b-1 border-white appearance-none block text-white bg-inherit mt-1 placeholder:text-slate-50 focus:outline-none focus:border-sky-500 pr-8' onChange={handleChange}>
        <option value='' disabled selected>-Select-</option>
        <option value='tech'>Tech</option>
        <option value='manage'>Management</option>
        <option value='ops'>Operations</option>
    </select>
    
</div>

<div className="relative">
    <label htmlFor='crmuser' class='text-white mb-1'>CRM User</label>
    <select name='crmuser' value={data.crmuser} class=' diff border-b-1 border-white appearance-none block text-white bg-inherit mt-1 placeholder:text-slate-50 focus:outline-none focus:border-sky-500 pr-8' onChange={handleChange}>
        <option value='' disabled selected>-Select-</option>
        <option value='yes'>Yes</option>
        <option value='no'>No</option>
       
    </select>
    
</div>

<div className="relative">
    <label htmlFor='role' class='text-white mb-1'>Role</label>
    <select name='role' value={data.role} class=' diff border-b-1 border-white appearance-none block text-white bg-inherit mt-1 placeholder:text-slate-50 focus:outline-none focus:border-sky-500 pr-8' onChange={handleChange}>
        <option value='' disabled selected>-Select-</option>
        <option value='engineer'>Engineer</option>
        <option value='manager'>Manager</option>

       
    </select>
    
</div>

            <div className="relative">
                <label htmlFor='address' className='text-white mb-1'>Address</label>
                <input name='address' value={data.address} placeholder='Enter Address' type='name' onChange={handleChange} className='border-b-1 block text-white bg-inherit mt-1 placeholder:text-slate-50 focus:outline-none focus:border-sky-500'/>
            </div>



         

            
            </div>
            <input type="submit" className="btn-s rounded" />

        
         </form>

         
    </div>
  )}
