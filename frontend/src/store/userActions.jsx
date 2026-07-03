import axios from  '../api/axiosconfig'
import { loadUser } from './userSlice'

const asyncGetUser = async (dispatch)=>{
    const res = await axios.get("/users")
    dispatch(loadUser(res.data))
    
}


export default asyncGetUser