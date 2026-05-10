import React from "react";
import { getData } from "../lib/data";
import UserTable from "@/components/UserTable";
import { createUser, deleteUser } from "../lib/actions";
import AddUser from "@/components/AddUser";

const UserData = async () => {
  const users = await getData();

  return (
    <div>
      <div className="my-10 flex justify-between container mx-auto">
        <h1>User Collection:{users.length}</h1>
        <AddUser createUserAction={createUser}/>
      </div>
      <UserTable users={users} deleteUserAction={deleteUser} />
    </div>
  );
};

export default UserData;
