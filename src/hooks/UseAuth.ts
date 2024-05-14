import axios from "axios"


const UseAuth = () => {
const Login = async({email, password}: {email:string; password:string})=> {
    const response = await axios.post("http://localhost:8080/auth/Login", {
        email, password,
    })
    console.log(response.data)
}

const signup = async ({email, password, username}: {email:string; password:string; username:string})=> {
    const response = await axios.post("http://localhost:8080/auth/signup", {
        email, password, username
    })
    console.log(response.data)
}

const fetchUser = ()=> {}


return {signup, Login, fetchUser}
}
export default UseAuth