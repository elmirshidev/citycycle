import { useNavigate } from 'react-router-dom'
import bg from '../assets/bg.png'
import bike from '../assets/bike.png'
import { motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'







function Main() {

    const navigate = useNavigate()
    const [width, setWidth] = useState(null)
    const imgRef = useRef()
    // const [active,setActive] = useState(false)
    useEffect(() => {
        setWidth(window.screen.width)
    }, [])

    function onresize() {
        setWidth(window.screen.width)
    }


    window.addEventListener("resize", onresize);


    const [clicked, setClicked] = useState(false)


    return (


        <motion.div
            initial={{ y: -4000, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 2, type: 'spring' }}
            className="h-full px-6 bg-main-black pt-[100px] relative" style={{ backgroundImage: `url(${bg})`, backgroundPosition: 'center center', backgroundSize: 'cover' }}
        >
            <section className='relative h-[200px]'>

                {new Array(20).fill(1).map((ui, key) => {

                    const randomXPos = Math.floor(Math.random() * width - 150)
                    const randomYPos = Math.floor(Math.random() * 200)

                    return (
                        <img ref={imgRef} onClick={({ target }) => {
                            target.classList.toggle('activeIMG')
                            setClicked(true)
                        }} key={key} style={{ left: `${randomXPos}px`, top: `${randomYPos}px` }} className={`w-[32px] absolute h-[32px] cursor-pointer`} src={bike} />
                    )
                })}
            </section>
            <svg onClick={() => navigate('/settings')} className='SVG mt-[50px] mb-[10px] cursor-pointer' viewBox="0 0 448 512"><path d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"></path></svg>

            {clicked && (
                <section className='flex p-4 absolute bottom-0 w-full flex-col gap-y-6 items-center justify-center bg-[#0e0d0b] rounded-[20px]'>
                    <div className='rounded-[2px] bg-[#ffefd0] h-[4px] w-[40px]'></div>
                    <div className='flex gap-x-8'>
                        <div className='flex flex-col gap-y-1 items-center'>
                            <svg className='SVG' viewBox="0 0 384 512"><path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"></path></svg>
                            <h3 className='text-[14px] font-[600] leading-[18px] text-center text-[#ffefd0]'>102 m</h3>
                            <p className='text-[#b6ab95] text-[12px] leading-[16px] text-center'>away</p>
                        </div>
                        <div>
                            <svg className='SVG' viewBox="0 0 640 512"><path d="M544 160v64h32v64h-32v64H64V160h480m16-64H48c-26.51 0-48 21.49-48 48v224c0 26.51 21.49 48 48 48h512c26.51 0 48-21.49 48-48v-16h8c13.255 0 24-10.745 24-24V184c0-13.255-10.745-24-24-24h-8v-16c0-26.51-21.49-48-48-48zm-144 96H96v128h320V192z"></path></svg>
                            <h3 className='text-[14px] font-[600] leading-[18px] text-center text-[#ffefd0]'>80%</h3>
                            <p className='text-[#b6ab95]  text-[12px] leading-[16px] text-center'>battery</p>
                        </div>
                        <div className='flex flex-col gap-y-1 items-center'>
                            <svg className='SVG' viewBox="0 0 448 512"><path d="M400 256H152V152.9c0-39.6 31.7-72.5 71.3-72.9 40-.4 72.7 32.1 72.7 72v16c0 13.3 10.7 24 24 24h32c13.3 0 24-10.7 24-24v-16C376 68 307.5-.3 223.5 0 139.5.3 72 69.5 72 153.5V256H48c-26.5 0-48 21.5-48 48v160c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z"></path></svg>
                            <h3 className='text-[14px] font-[600] leading-[18px] text-center text-[#ffefd0]'>1$</h3>
                            <p className='text-[#b6ab95] text-[12px] leading-[16px] text-center'>deposit</p>
                        </div>
                        <div className='flex flex-col gap-y-1 items-center'>
                            <svg className='SVG' viewBox="0 0 448 512"><path d="M432 304c0 114.9-93.1 208-208 208S16 418.9 16 304c0-104 76.3-190.2 176-205.5V64h-28c-6.6 0-12-5.4-12-12V12c0-6.6 5.4-12 12-12h120c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-28v34.5c37.5 5.8 71.7 21.6 99.7 44.6l27.5-27.5c4.7-4.7 12.3-4.7 17 0l28.3 28.3c4.7 4.7 4.7 12.3 0 17l-29.4 29.4-.6.6C419.7 223.3 432 262.2 432 304zm-176 36V188.5c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12V340c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12z"></path></svg>
                            <h3 className='text-[14px] font-[600] leading-[18px] text-center text-[#ffefd0]'>0.15$</h3>
                            <p className='text-[#b6ab95] text-[12px] leading-[16px] text-center'>per minute</p>
                        </div>
                    </div>
                    <button onClick={() => navigate('/unlock')} className='bg-[#ffb23d]  text-[#0e0d0b] font-[600] leading-[16px] outline-none text-[14px] rounded-[10px] h-[45px] px-[8px]'>Scan QR code to unlock</button>
                </section>
            )}

        </motion.div>
    )
}

export default Main
