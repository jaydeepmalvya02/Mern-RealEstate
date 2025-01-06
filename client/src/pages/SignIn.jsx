import{useState} from'react'

import {Link, useNavigate} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import { signInStart, signInSuccess, signInFailure} from '../redux/user/userSlice';

const SignIn = () => {
  const [formData,setFormData]=useState({})
  const {loading, error}= useSelector((state)=>state.user);
  // const [error, setError] = useState(null);
  // const [loading,setLoading]=useState(false);

  const navigate=useNavigate();
  const dispatch=useDispatch();

  const handleChange=(e)=>{
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,

    });
  };
  const handleSubmit=async(e)=>{
    e.preventDefault();
    try {
      // setLoading(true)
      dispatch(signInStart());
      const res= await fetch ('/api/auth/signin',{
        method:'POST',
        headers:{
          'Content-Type':'application/json'
        },
        body:JSON.stringify(formData),
      });
      const data = await res.json();

console.log(data)

      if (data.success===false) {
        // setLoading(false);
        // setError(data.message);
        dispatch(signInFailure(data.message));
      return;
      }
      // setLoading(false);
      // setError(null)
     dispatch(signInSuccess(data));
      navigate('/');
    } catch (error) {
      // setLoading(false);
      // setError(error.message);
      dispatch(signInFailure(error.message));
    }
  };
  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl text-center font-semibold'>Sign In</h1>

    <form onSubmit={handleSubmit} className='flex flex-col gap-4 ' >
      {/* <input type="text" placeholder='username' className="border p-3 rounded-lg "  id='username' onChange ={handleChange} /> */}
      <input type="text" className="border p-3 rounded-lg "  placeholder='email' id='email' onChange={handleChange} />
      <input type="password" className="border p-3 rounded-lg "  placeholder='password' id='password' onChange={handleChange} />

      <button disabled={loading}   className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80">{loading ? 'Loading... ' : 'Sign In'}</button>
    </form>
    <div className='flex gap-2 mt-5'>
       <p>Don't have an account?</p> 

    <Link to={"/sign-up" }>
     <span className='text-blue-700 '>Sign up</span> 
    </Link>
    </div>
    {error && <p className='text-red-500 mt-5' > {error}</p>}
    </div>
  )
}
export default SignIn
