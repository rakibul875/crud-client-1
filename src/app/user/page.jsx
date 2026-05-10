import React from "react";
import { getData } from "../lib/data";
import UserTable from "@/components/UserTable";
import { deleteUser } from "../lib/actions";

const UserData = async () => {
  const users = await getData();

  return (
    <div>
      <div className="">
        <h1>User Collection:{users.length}</h1>
      </div>
      <UserTable users={users} deleteUserAction={deleteUser} />
    </div>
  );
};

export default UserData;
