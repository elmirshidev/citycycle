import { useNavigate } from 'react-router-dom'
import bg from '../assets/bg.png'
import me from '../assets/me.png'
import {motion} from 'framer-motion'
function BikeMap() {
  const navigate = useNavigate()
  return (
    <motion.div 
    initial={{ x: -4000, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 2, type: 'spring' }}
    className="h-full relative px-6 bg-main-black" style={{ backgroundImage: `url(${bg})`, backgroundPosition: 'center center', backgroundSize: 'cover' }}>
      <div className='w-full flex justify-center'>
        <button
          className='bg-[#ffb23d] text-[14px] text-center text-[#0e0d0b] font-[600] leading-[16px] outline-none px-[8px] h-[36px] rounded-[100px] w-[200px]'
        >Your ongoing ride</button>
      </div>
      <img className='w-[150px] mt-20 ml-20' src={me} />

      <svg onClick={() => navigate('/settings')} className='SVG mt-[50px] mb-[10px] cursor-pointer' viewBox="0 0 448 512"><path d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"></path></svg>

      <section className='flex absolute bottom-0 w-[100%] p-4  bg-[#0e0d0b] rounded-[20px] justify-center'>
        <button onClick={() => navigate('/lock')} className='bg-[#ffb23d] text-[#0e0d0b] font-[600] leading-[16px] outline-none text-[14px] rounded-[10px] h-[45px] px-[8px]'>Scan QR code to lock</button>
      </section>
    </motion.div>
  )
}

export default BikeMap
