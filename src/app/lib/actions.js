import { revalidatePath } from "next/cache";

export const deleteUser = async (userId) => {
    'use server'

  const res = await fetch(`http://localhost:8000/user/${userId}`, {
    method: 'DELETE'
  });
  const data = await res.json();
  if(data.deletedCount>0){
    revalidatePath('/user')
  }
  return data;
};
