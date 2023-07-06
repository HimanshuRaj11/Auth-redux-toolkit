import { useSelector , useDispatch} from 'react-redux'
import { useEffect } from 'react'
import { getCookie } from '../Redux/Slice/UserSlice'
import Cookies from 'js-cookie'
export default function Home() {
  const { User } = useSelector((state) => ({...state.User}))
  const dispatch = useDispatch() 
  const user = User.user
  useEffect(() => {
    dispatch(getCookie(Cookies.get('jwt')))
  },[])
  return (
    <div>
      {
        user? (<><h1>{user.name}</h1> <h1>{user.email}</h1></>) :(<><h1>Home</h1></>)
      }
     
    </div>
  )
}
