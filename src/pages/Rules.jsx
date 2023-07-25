import { useNavigate } from 'react-router-dom'
import bg from '../assets/bg.png'

import {motion} from 'framer-motion'

function Rules() {
    const navigate = useNavigate()
    return (
        <motion.div 
        initial={{y:-4000,opacity:0}}
        animate={{y:0,opacity:1}}
        transition={{ duration: 2,type:'spring' }}
        className="h-full flex flex-col justify-center items-center px-6 bg-main-black" style={{ backgroundImage: `url(${bg})`, backgroundPosition: 'center center', backgroundSize: 'cover' }}>
            <h1 className='text-[36px]  text-[#ffefd0] font-[700] leading-[40px] mb-[20px]'>Rules</h1>
            <div className='flex flex-col gap-y-4'>
                <div className='flex gap-x-4 items-center'>
                    <h4 className='text-[#ffb23d] text-[24px] font-[800]'>+18</h4>
                    <p className='text-[#ffefd0] text-[14px] leading-[16px]'>Riders must be at least 18 years old.</p>
                </div>
                <div className='flex gap-x-4 items-center'>
                    <svg className='SVG' viewBox="0 0 576 512"><path d="M288 32C128.94 32 0 160.94 0 320c0 52.8 14.25 102.26 39.06 144.8 5.61 9.62 16.3 15.2 27.44 15.2h443c11.14 0 21.83-5.58 27.44-15.2C561.75 422.26 576 372.8 576 320c0-159.06-128.94-288-288-288zm0 64c14.71 0 26.58 10.13 30.32 23.65-1.11 2.26-2.64 4.23-3.45 6.67l-9.22 27.67c-5.13 3.49-10.97 6.01-17.64 6.01-17.67 0-32-14.33-32-32S270.33 96 288 96zM96 384c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32zm48-160c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32zm246.77-72.41l-61.33 184C343.13 347.33 352 364.54 352 384c0 11.72-3.38 22.55-8.88 32H232.88c-5.5-9.45-8.88-20.28-8.88-32 0-33.94 26.5-61.43 59.9-63.59l61.34-184.01c4.17-12.56 17.73-19.45 30.36-15.17 12.57 4.19 19.35 17.79 15.17 30.36zm14.66 57.2l15.52-46.55c3.47-1.29 7.13-2.23 11.05-2.23 17.67 0 32 14.33 32 32s-14.33 32-32 32c-11.38-.01-20.89-6.28-26.57-15.22zM480 384c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32z"></path></svg>
                    <p className='text-[#ffefd0] text-[14px] leading-[16px]'>The speed on e-scooters is limited to 12 mph. In busy areas it is 8 mph.</p>
                </div>
                <div className='flex gap-x-4 items-center'>
                    <svg className='SVG' viewBox="0 0 352 512"><path d="M96.06 454.35c.01 6.29 1.87 12.45 5.36 17.69l17.09 25.69a31.99 31.99 0 0 0 26.64 14.28h61.71a31.99 31.99 0 0 0 26.64-14.28l17.09-25.69a31.989 31.989 0 0 0 5.36-17.69l.04-38.35H96.01l.05 38.35zM0 176c0 44.37 16.45 84.85 43.56 115.78 16.52 18.85 42.36 58.23 52.21 91.45.04.26.07.52.11.78h160.24c.04-.26.07-.51.11-.78 9.85-33.22 35.69-72.6 52.21-91.45C335.55 260.85 352 220.37 352 176 352 78.61 272.91-.3 175.45 0 73.44.31 0 82.97 0 176zm176-80c-44.11 0-80 35.89-80 80 0 8.84-7.16 16-16 16s-16-7.16-16-16c0-61.76 50.24-112 112-112 8.84 0 16 7.16 16 16s-7.16 16-16 16z"></path></svg>
                    <p className='text-[#ffefd0] text-[14px] leading-[16px]'>The rear and front lights are always on throughout the whole rental.</p>
                </div>
                <div className='flex gap-x-4 items-center'>
                    <svg className='SVG' viewBox="0 0 640 512"><path d="M639.4 433.6c-8.4-20.4-31.8-30.1-52.2-21.6l-22.1 9.2-38.7-101.9c47.9-35 64.8-100.3 34.5-152.8L474.3 16c-8-13.9-25.1-19.7-40-13.6L320 49.8 205.7 2.4c-14.9-6.2-32-.3-40 13.6L79.1 166.5C48.9 219 65.7 284.3 113.6 319.2L74.9 421.1l-22.1-9.2c-20.4-8.5-43.7 1.2-52.2 21.6-1.7 4.1.2 8.8 4.3 10.5l162.3 67.4c4.1 1.7 8.7-.2 10.4-4.3 8.4-20.4-1.2-43.8-21.6-52.3l-22.1-9.2L173.3 342c4.4.5 8.8 1.3 13.1 1.3 51.7 0 99.4-33.1 113.4-85.3l20.2-75.4 20.2 75.4c14 52.2 61.7 85.3 113.4 85.3 4.3 0 8.7-.8 13.1-1.3L506 445.6l-22.1 9.2c-20.4 8.5-30.1 31.9-21.6 52.3 1.7 4.1 6.4 6 10.4 4.3L635.1 444c4-1.7 6-6.3 4.3-10.4zM275.9 162.1l-112.1-46.5 36.5-63.4 94.5 39.2-18.9 70.7zm88.2 0l-18.9-70.7 94.5-39.2 36.5 63.4-112.1 46.5z"></path></svg>
                    <p className='text-[#ffefd0] text-[14px] leading-[16px]'>It is forbidden to ride vehicles under the influence of drugs and alcohol.</p>
                </div>
                <div className='flex gap-x-4 items-center'>
                    <svg className='SVG' viewBox="0 0 640 512"><path d="M400 96a48 48 0 1 0-48-48 48 48 0 0 0 48 48zm-4 121a31.9 31.9 0 0 0 20 7h64a32 32 0 0 0 0-64h-52.78L356 103a31.94 31.94 0 0 0-40.81.68l-112 96a32 32 0 0 0 3.08 50.92L288 305.12V416a32 32 0 0 0 64 0V288a32 32 0 0 0-14.25-26.62l-41.36-27.57 58.25-49.92zm116 39a128 128 0 1 0 128 128 128 128 0 0 0-128-128zm0 192a64 64 0 1 1 64-64 64 64 0 0 1-64 64zM128 256a128 128 0 1 0 128 128 128 128 0 0 0-128-128zm0 192a64 64 0 1 1 64-64 64 64 0 0 1-64 64z"></path></svg>
                    <p className='text-[#ffefd0] text-[14px] leading-[16px]'>Ride vehicles only on designated cycling paths.</p>
                </div>
                <div className='flex gap-x-4 items-center'>
                    <svg className='SVG' viewBox="0 0 448 512"><path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM240 320h-48v48c0 8.8-7.2 16-16 16h-32c-8.8 0-16-7.2-16-16V144c0-8.8 7.2-16 16-16h96c52.9 0 96 43.1 96 96s-43.1 96-96 96zm0-128h-48v64h48c17.6 0 32-14.4 32-32s-14.4-32-32-32z"></path></svg>
                    <p className='text-[#ffefd0] text-[14px] leading-[16px]'>Return bikes and e-scooters to the official stands and spots.</p>
                </div>
            <button onClick={() => navigate('/main')} className='h-[45px] bg-[#ffb23d] text-[#0e0d0b] rounded-[10px] px-[8px] text-[14px] outline-none font-[600] '>Understood!</button>

            </div>
        </motion.div>
    )
}

export default Rules
