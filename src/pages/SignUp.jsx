import { useNavigate } from 'react-router-dom';
import bg from '../assets/bg.png'

import {motion} from 'framer-motion'

function SignUp() {

    const navigate = useNavigate()
return (
    <motion.div 
    initial={{x:-5000,opacity:0}}
        animate={{x:0,opacity:1}}
        transition={{ duration: 2,type:'spring' }}
    className="h-full  bg-main-black" style={{backgroundImage: `url(${bg})`, backgroundPosition:'center center' , backgroundSize:'cover'}}>
        <div className=" bg-main-orange rounded-[20px] flex justify-center items-center py-4">
            <h1 className="text-[48px] font-bold text-main-black leading-[62px] ">CityCycle</h1>
        </div>
        <section className="flex justify-center items-center px-[20px] pt-[100px]">
            <div className="flex flex-col gap-y-4 w-[600px] ">
                <h1 className="text-[#ffefd0] text-[36px] font-bold leading-[40px]">Signup</h1>
                <div className="flex flex-col gap-y-2">
                    <label className="text-[#ffefd0] text-[14px] font-[600] leading-[18px]" htmlFor="email">Email</label>
                    <input className="px-[8px] rounded-[10px] bg-[#3a3835] text-[#b6ab95] text-[14px] leading-[19px] outline-none py-3" name="email"  type="email" placeholder="Email"/>
                </div>
                <div className="flex flex-col gap-y-2">
                    <label className="text-[#ffefd0] text-[14px] font-[600] leading-[18px]" htmlFor="pass">Password</label>
                    <input className="px-[8px] rounded-[10px] bg-[#3a3835] text-[#b6ab95] text-[14px] leading-[19px] outline-none py-3" name="pass"  type="password" placeholder="Password"/>
                </div>
                <div className="flex flex-col gap-y-2">
                    <label className="text-[#ffefd0] text-[14px] font-[600] leading-[18px]" htmlFor="pass">Repeat Password</label>
                    <input className="px-[8px] rounded-[10px] bg-[#3a3835] text-[#b6ab95] text-[14px] leading-[19px] outline-none py-3" name="pass"  type="password" placeholder="Repeat Password"/>
                </div>
                <button onClick={() => navigate('/rules')} className="bg-[#ffb23d] text-[#0e0d0b] font-[600] leading-[16px] outline-none text-[14px] rounded-[10px] px-[8px] h-[45px] text-center">Get started</button>
            </div>
        </section>
    </motion.div>
  )
}

export default SignUp
