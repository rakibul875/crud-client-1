import { revalidatePath } from "next/cache";

export const createUser = async (fromData) => {
  "use server";

  const newUser = Object.fromEntries(fromData.entries());

  const res = await fetch("http://localhost:8000/user", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(newUser),
  });

  const data = await res.json();

  if(data.insertedId){
    revalidatePath('/user')
  }

  return data;
};

export const deleteUser = async (userId) => {
  "use server";

  const res = await fetch(`http://localhost:8000/user/${userId}`, {
    method: "DELETE",
  });
  const data = await res.json();
  if (data.deletedCount > 0) {
    revalidatePath("/user");
  }
  return data;
};
