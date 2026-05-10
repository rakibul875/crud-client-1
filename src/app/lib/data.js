export const getData = async () => {
    const res= await fetch('http://localhost:8000/user');
    const data= await res.json();
    return data;
};


export const getUserId = async(userId)=>{
    const res = await fetch(`http://localhost:8000/user/${userId}`)
    const data=await res.json()
    return data
}
