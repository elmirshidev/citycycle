import { useNavigate } from 'react-router-dom'
import qrcode from '../assets/qrcode.png'
import { motion } from 'framer-motion';


function Lock() {
    const navigate = useNavigate()
    return (
        <motion.div
            initial={{ y: -4000, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 2, type: 'spring' }}
            className="flex flex-col items-center justify-center gap-y-4 bg-[#ffb23d] h-full">
            <h1 className='text-[#0e0d0b] text-[30px] font-[700] leading-[32px] text-center'>Lock the bike</h1>
            <h4 className='text-[#575047] text-[20px] font-[600] leading-[24px] text-center'>Scan the QR code</h4>
            <img className='w-[250px]' src={qrcode} />
            <p className='text-[#3a3835] my-6 text-[12px] font-[500] leading-[16px] text-center'>
                Have trouble scanning code? Rewrite <br />
                number code here <span className='font-bold' contentEditable></span>
            </p>
            <svg onClick={() => navigate('/map')} className='SVG !fill-black cursor-pointer' viewBox="0 0 352 512"><path d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"></path></svg>
        </motion.div>
    )
}

export default Lock
