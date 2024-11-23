import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';

function Profile() {
    
  let [profile,setProfile]=useState("./images/dummy.jpg");  
  let [profilet,setprofilet] =useState("./images/dummy.jpg");
     
  return (
    <div>
     <form>
      <div>
        <label>Name</label>
        <input></input>
      </div>
      <div>
        <label>Profile</label>
        <input type='file' multiple onChange={(e)=>{
               console.log(e.target.files);
                let selImage =URL.createObjectURL(e.target.files[0]);
                console.log(selImage);
                setProfile(selImage)

     }}></input>
          <div> <img src={profile} alt='imgURL'></img></div>
      </div>
      <div>
      <label>Document</label>  
      <input type='file' onChange={(e)=>{
      let sel2Img = URL.createObjectURL(e.target.files[0]);
        
         setprofilet(sel2Img);
      }}></input>
      
      <div><img src={profilet} alt='url'></img></div>
    <div>
     <label>Email</label>
     <input type='email'></input>
     </div>
     <div>
     <label>Password</label>
     <input type='password'></input>
     </div>
     <div>
     <label>Mobile Number</label>
     <input type='number'></input>
     </div>

     <button type='reload' className='nl1'style={{backgroundColor:"blue"}}>save</button>
      </div>
    <NavLink to="/">logout</NavLink>
     </form></div>
  )
}

export default Profile