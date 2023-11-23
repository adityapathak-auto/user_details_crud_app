import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./userTable.css";
import { Menu, MenuItem } from '@reach/menu-button';
import '@reach/menu-button/styles.css';
import Sidebar from "./navbar";

export const UserTables = ()=>{

    const [data,setData] = useState([]);
    const [deleted,setDeleted] = useState(false);

    const getData = ()=>{
        axios.get("http://localhost:5009/getAll").then((res)=>{
            setData(res.data);
        })
    }
    
    

    useEffect(()=>{
        getData();

    },[deleted])

    const navigate = useNavigate();

    const openForm = ()=>{
        navigate("/user");

    }

    const handleDelete = async(id)=>{
        try {
            const response = await fetch(`http://localhost:5009/delete/${id}`, {
              method: 'DELETE',
            });
        
            if (response.ok) {
              alert('User deleted successfully');
              setDeleted(!deleted);
              
            } else {
              console.error('Error deleting user:', response.statusText);
            }
          } catch (error) {
            console.error('Error deleting user:', error.message);
          }
        };

    

    // const bodyActions = (rowData) => (
    //     <td className="py-2 px-4 border-b">
    //       <Menu>
    //         <Menu.Button className="text-gray-500 hover:text-gray-700">
    //           {/* Three-dot menu button */}
              
    //         </Menu.Button>
    //         <Menu.List>
    //           <MenuItem onSelect={() => handleMenuClick('update', rowData)}>
    //             Update
    //           </MenuItem>
    //           <MenuItem onSelect={() => handleMenuClick('delete', rowData)}>
    //             Delete
    //           </MenuItem>
    //         </Menu.List>
    //       </Menu>
    //     </td>
    //   );



    return(<div className="main-body">
        <Sidebar/>

    
    <div className="m-auto bg-default w-7/12 p-6 text-white items-center mt-24">
        <div className="nav flex justify-between items-center">

            <div className="flex w-1/4 justify-between">
                <div className="border-b-1 cursor-pointer">Excel</div>
                <div className="border-b-1 cursor-pointer">Excel</div>
                <div className="border-b-1 cursor-pointer">Excel</div>
            </div>

            <div className="flex w-5/12 items-center gap-4">
                <input type="text" className="text-inherit bg-inherit rounded-lg "/>
                <button className="text-inherit bg-inherit text-xs border-b-1" onClick={openForm}>+ Add Users</button>
                
            </div>

        </div>

        <div className="body m-auto mt-3">
            <table className="min-w-full border border-gray-300">
                <thead>
                    <tr className="bg-gradient-to-r from-blue-500 to-blue-700">
                    <th className="py-2 px-4 border-b">Serial No</th>
                    <th className="py-2 px-4 border-b">Full Name</th>
                    <th className="py-2 px-4 border-b">Email</th>
                    <th className="py-2 px-4 border-b">Mobile Number</th>
                    <th className="py-2 px-4 border-b">DOB</th>
                    <th className="py-2 px-4 border-b">CRM User</th>
                    <th className="py-2 px-4 border-b">Action</th>
                    
                    </tr>
                </thead>
                <tbody>
                    {data && data.map((e,index)=>{
                        return(<tr key={index}>
                            <td  className="py-2 px-4 border-b">{index+1}</td>
                            <td  className="py-2 px-4 border-b">{e?.name}</td>
                            <td  className="py-2 px-4 border-b">{e?.email}</td>
                            <td  className="py-2 px-4 border-b">{e?.number}</td>
                            <td  className="py-2 px-4 border-b">{e?.dob}</td>
                            <td  className="py-2 px-4 border-b">{e?.crmuser}</td>
                            <td  className="py-2 px-4 border-b"><Link to={`/update/${e?.id}`}><img className="table-img" src={require("../Assets/edit.png")}/></Link><img className="table-img" onClick={()=>{handleDelete(e?.id)}} src={require("../Assets/delete.png")}/></td>
                        </tr>)
                    })}
                </tbody>
            </table>


        </div>
        
    </div>
    </div>)
}