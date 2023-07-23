import React from "react";
import { BiPencil, BiTrash, BiSort } from "react-icons/bi";
import "./index.css";

const UserTable = ({ tableData,handleRemoveUser,setEditUser, sortUsers }) => {
  return tableData?.length ? (
    <div style={{ padding: "0rem 4rem", marginTop:"2rem" }}>
      <div style={{fontSize:"1.5rem",fontWeight:"500", marginBottom:"1rem"}}>Users Info</div>
      <table className="table">
        <thead>
          <tr>
            <th>SN</th>
            <th>Name <span onClick={()=>{sortUsers()}} style={{marginLeft:"1rem",cursor:"pointer"}}><BiSort /></span></th>
            <th>Email </th>
            <th>PhoneNumber</th>
            <th>DOB</th>
            <th>City</th>
            <th>District</th>
            <th>Province</th>
            <th>Options</th>
          </tr>
        </thead>
        <tbody>
          {tableData?.map((data, index) => {
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{data?.name}</td>
                <td>{data?.email}</td>
                <td>{data?.phoneNumber}</td>
                <td>{data?.dob}</td>
                <td>{data?.address?.city}</td>
                <td>{data?.address?.district}</td>
                <td>{data?.address?.province}</td>
                <td>
                  <span style={{cursor:"pointer"}} onClick={() => {setEditUser(data?.id)}}>
                    <BiPencil />
                  </span>
                  <span style={{ marginLeft: "0.5rem",cursor:"pointer" }} onClick={()=>handleRemoveUser(data?.id)}>
                    <BiTrash />
                  </span>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  ):(<></>);
};
export default UserTable;
