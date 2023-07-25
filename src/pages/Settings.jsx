import { useNavigate } from "react-router-dom"
import { motion } from 'framer-motion'

function Settings() {

    const navigate = useNavigate()
    return (
        <motion.div
            initial={{ y: -4000, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 2, type: 'spring' }}
            className="h-full flex flex-col gap-y-10 bg-[#ffefd0]">
            <div className='bg-[#ffb23d] p-4 flex flex-col items-center gap-y-6 rounded-[20px] w-full'>
                <h1 className='text-[#0e0d0b] text-[36px] font-[700] leading-[40px]'>Hello, Elmir!</h1>
                <div className='flex gap-x-14'>
                    <div className='flex flex-col gap-y-2 items-center'>
                        <svg className='SVG !fill-black' viewBox="0 0 576 512"><path d="M573.19 402.67l-139.79-320C428.43 71.29 417.6 64 405.68 64h-97.59l2.45 23.16c.5 4.72-3.21 8.84-7.96 8.84h-29.16c-4.75 0-8.46-4.12-7.96-8.84L267.91 64h-97.59c-11.93 0-22.76 7.29-27.73 18.67L2.8 402.67C-6.45 423.86 8.31 448 30.54 448h196.84l10.31-97.68c.86-8.14 7.72-14.32 15.91-14.32h68.8c8.19 0 15.05 6.18 15.91 14.32L348.62 448h196.84c22.23 0 36.99-24.14 27.73-45.33zM260.4 135.16a8 8 0 0 1 7.96-7.16h39.29c4.09 0 7.53 3.09 7.96 7.16l4.6 43.58c.75 7.09-4.81 13.26-11.93 13.26h-40.54c-7.13 0-12.68-6.17-11.93-13.26l4.59-43.58zM315.64 304h-55.29c-9.5 0-16.91-8.23-15.91-17.68l5.07-48c.86-8.14 7.72-14.32 15.91-14.32h45.15c8.19 0 15.05 6.18 15.91 14.32l5.07 48c1 9.45-6.41 17.68-15.91 17.68z"></path></svg>
                        <div className='flex flex-col items-center'>
                            <h3 className='text-[#0e0d0b] text-[16px] font-[700] leading-[24px]'>1,248</h3>
                            <p className='text-[#575047] text-[14px] leading-[18px]'>Kilometers</p>
                        </div>
                    </div>
                    <div className='flex flex-col gap-y-2 items-center'>
                        <svg className='SVG !fill-black' viewBox="0 0 640 512"><path d="M400 96a48 48 0 1 0-48-48 48 48 0 0 0 48 48zm-4 121a31.9 31.9 0 0 0 20 7h64a32 32 0 0 0 0-64h-52.78L356 103a31.94 31.94 0 0 0-40.81.68l-112 96a32 32 0 0 0 3.08 50.92L288 305.12V416a32 32 0 0 0 64 0V288a32 32 0 0 0-14.25-26.62l-41.36-27.57 58.25-49.92zm116 39a128 128 0 1 0 128 128 128 128 0 0 0-128-128zm0 192a64 64 0 1 1 64-64 64 64 0 0 1-64 64zM128 256a128 128 0 1 0 128 128 128 128 0 0 0-128-128zm0 192a64 64 0 1 1 64-64 64 64 0 0 1-64 64z"></path></svg>
                        <div className='flex flex-col items-center'>
                            <h3 className='text-[#0e0d0b] text-[16px] font-[700] leading-[24px]'>481</h3>
                            <p className='text-[#575047] text-[14px] leading-[18px]'>Trips</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='flex flex-col gap-y-4 items-center'>
                <div className='flex gap-x-4 items-center cursor-pointer border-b-black border-b-[1px] p-4 w-[200px]'>
                    <svg className='SVG !fill-black' viewBox="0 0 576 512"><path d="M542.22 32.05c-54.8 3.11-163.72 14.43-230.96 55.59-4.64 2.84-7.27 7.89-7.27 13.17v363.87c0 11.55 12.63 18.85 23.28 13.49 69.18-34.82 169.23-44.32 218.7-46.92 16.89-.89 30.02-14.43 30.02-30.66V62.75c.01-17.71-15.35-31.74-33.77-30.7zM264.73 87.64C197.5 46.48 88.58 35.17 33.78 32.05 15.36 31.01 0 45.04 0 62.75V400.6c0 16.24 13.13 29.78 30.02 30.66 49.49 2.6 149.59 12.11 218.77 46.95 10.62 5.35 23.21-1.94 23.21-13.46V100.63c0-5.29-2.62-10.14-7.27-12.99z"></path></svg>
                    <h4 className='text-[#575047] text-[16px] leading-[24px]'>Trips history</h4>
                </div>
                <div onClick={() => navigate('/wallet')} className='flex gap-x-4 items-center cursor-pointer border-b-black border-b-[1px] p-4 w-[200px]'>
                    <svg className='SVG !fill-black' viewBox="0 0 512 512"><path d="M461.2 128H80c-8.84 0-16-7.16-16-16s7.16-16 16-16h384c8.84 0 16-7.16 16-16 0-26.51-21.49-48-48-48H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h397.2c28.02 0 50.8-21.53 50.8-48V176c0-26.47-22.78-48-50.8-48zM416 336c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32z"></path></svg>
                    <h4 className='text-[#575047] text-[16px] leading-[24px]'>Wallet</h4>
                </div>
                <div className='flex gap-x-4 items-center cursor-pointer border-b-black border-b-[1px] p-4 w-[200px]'>
                    <svg className='SVG !fill-black' viewBox="0 0 512 512"><path d="M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z"></path></svg>
                    <h4 className='text-[#575047] text-[16px] leading-[24px]'>Help</h4>
                </div>
            </div>

            <div onClick={() => navigate('/signup')} className='flex cursor-pointer pl-[50px] pt-[20px] items-center gap-x-4'>
                <svg className='SVG !fill-black' viewBox="0 0 512 512"><path d="M497 273L329 441c-15 15-41 4.5-41-17v-96H152c-13.3 0-24-10.7-24-24v-96c0-13.3 10.7-24 24-24h136V88c0-21.4 25.9-32 41-17l168 168c9.3 9.4 9.3 24.6 0 34zM192 436v-40c0-6.6-5.4-12-12-12H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h84c6.6 0 12-5.4 12-12V76c0-6.6-5.4-12-12-12H96c-53 0-96 43-96 96v192c0 53 43 96 96 96h84c6.6 0 12-5.4 12-12z"></path></svg>
                <h4 className='text-[#575047] text-[16px] leading-[24px] cursor-pointer'>Log Out</h4>
            </div>
        </motion.div>
    )
}

export default Settings
