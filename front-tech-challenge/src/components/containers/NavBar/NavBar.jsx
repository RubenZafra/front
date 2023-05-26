import {GiFangsCircle} from 'react-icons/gi'

export const NavBar = () => {
  return (
    <>
        <div className="flex justify-between items-center bg-[#222] h-26">
          <GiFangsCircle className='text-5xl ml-4 text-white'/>
          <div className='flex justify-between p-4'>
            <div className='pr-32'>
              <button className="bg-blue-500 text-white px-4 py-2 rounded-md">Upload Gif</button>
            </div>
            <div>
              <button className="bg-blue-500 text-white px-4 ml-4 py-2 rounded-md">Login</button>
              <button className="bg-red-500 text-white px-4 py-2 ml-4 rounded-md">Sign Up</button>
            </div>
          </div>
        </div>
    </>
  )
}
