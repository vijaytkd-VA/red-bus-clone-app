
import { Link } from 'react-router-dom'
import { BiUserCircle } from 'react-icons/bi'
// import { GoArrowSwitch } from 'react-icons/go'
// import { MdArrowDropDown } from 'react-icons/md'


import {
  Dropdown,
  Ripple,
  initTE,
} from "tw-elements";
initTE({ Dropdown, Ripple });


const Header = () => {


  return (
    <>
      <header className='header flex justify-between items-center py-3 px-4 mx-auto flex-col xl:flex-row max-w-full bg-green-950 min-w-full sticky top-0 z-10 shadow-xl'>
        <div className='mb-3 lg:mb-0'>
          <ul className="logo flex  items-center justify-center my-auto gap-3 ">
            <li >
              <Link to='/'>
                <img src="https://st.redbus.in/Images/rdc/rdc-redbus-logo.svg" alt="LogoImg" className='h-10 mx-2' />
              </Link>
            </li>

          </ul>
        </div>

        <div className="login-btn flex mr-8 px-2">
          <span className=''>
            <BiUserCircle size={30} />
          </span>
          <select name="" id="" className='bg-transparent text-white border-none  '>
            <option value="" className='bg-black'>Your Profile</option>
            <option value="" className='bg-black'>Account</option>
            <option value="" className='bg-black'>Login/Sign-up</option>
          </select>
        </div>

      </header >

    </>
  )
}

export default Header;
