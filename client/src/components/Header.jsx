import {FaSearch} from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className='bg-slate-200 shadow-md'>
   <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
  <Link to='/'>
   <h1 className='font-bold text-sm:text-xl flex flex-wrap'>
        <span className='text-yellow-600'>Ghar</span>
        <span className='text-orange-600'>Angan</span>
      </h1>
      </Link>
      
      <form  className='bg-slate-100 p-3 rounded-lg flex items-center'>
        <input type="text" className="bg-transparent focous:outline-none w-24 sm:w-64 " placeholder='Search...' />
        <FaSearch className='text-slate-600'/>
      </form>
      <ul className='flex gap-4'>
        <Link to='/'>
        <li className='hidden sm:inline text-slate-700 hover:underline'>Home</li>
        </Link>
        <Link to='/about'>
        <li className='hidden sm:inline text-slate-700 hover:underline'>About</li>
        </Link>
        <Link to='/sign-in'>
        <li className='hidden sm:inline text-slate-700 hover:underline'>Sign In</li>
        </Link>
      </ul>
   </div>
    </header>
  )
}
