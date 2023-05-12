import { useState } from "react"

const Form = ()=>{
 const [userData, setUserData ] = useState({
    email : "",
    password: ""
 })
 const [error,setErros] = useState({
    
 })

  const handleChange = (event)=>{
          setUserData({
            ...userData,
            [event.target.name]: event.target.value
          })
  }




    return(
        <div>
            <form action="">
                <div>
                <label htmlFor="email">Email:</label>
                <input type="email" name="email"  />
                </div>
                
                <div>
                <label htmlFor="password">Password:</label>
                <input type="password" name="password" />
                </div>

                <button type="submit">Submit</button>
                
            </form>
        </div>
    )
}
export default Form