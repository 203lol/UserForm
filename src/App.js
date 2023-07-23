import React from "react";
import "./App.css";
import Userform from "./components/Userform";
import UserTable from "./components/Table";
import { useState } from "react";
import _ from "lodash";

const App = () => {
  const [users, setUsers] = useState([]);
  const [editUser, setEditUser] = useState(null);

  const handleAddUser = (data) => {
    setUsers([...users, data]);
  };

  const handleRemoveUser = (userId) => {
    setUsers([...users?.filter((x) => x?.id !== userId)]);
  };

  const handleEditUser = (data ) =>{
    console.log(data,"edited User data")
    setUsers([...users?.map((x)=>x?.id === editUser ?{...x,...data}:x )]);
    setEditUser(null);
  }

  const sortUsers = () =>{
    setUsers(_.sortBy(users, ['name']))
  }

  return (
    <div>
      <Userform handleAddProfile={handleAddUser} users={users} editUser={editUser} handleEditUser={handleEditUser}  />
      <UserTable tableData={users} handleRemoveUser={handleRemoveUser} setEditUser={setEditUser} sortUsers={sortUsers} />
    </div>
  );
};
export default App;
