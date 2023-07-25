import { motion } from "framer-motion"
function Wallet() {
    return (
        <motion.div
            initial={{ y: -4000, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 2, type: 'spring' }}
            className="h-full flex flex-col pt-[50px] gap-y-10 bg-main-black px-6">
            <h1 className="text-[#ffefd0] text-[36px] font-[700] leading-[40px]">Wallet</h1>
            <div className="bg-[#ffb23d] flex flex-col gap-y-4 rounded-[20px] p-5">
                <h4 className="text-[#0e0d0b] text-[14px] font-[600] leading-[18px]">Credit</h4>
                <h2 className="text-[#0e0d0b] font-[700] text-[30px] leading-[32px]">10,50$</h2>
            </div>

            <div>
                <h4 className="text-[#ffefd0] mb-[50px] text-[20px] font-[600] leading-6">Payment Method</h4>

                <div className="flex flex-col gap-y-4">
                    <div className="flex gap-x-4 items-center border-b-[#868583] border-b-[1px] p-5">
                        <svg className="SVG !fill-[#ffefd0]" viewBox="0 0 576 512"><path d="M0 432c0 26.5 21.5 48 48 48h480c26.5 0 48-21.5 48-48V256H0v176zm192-68c0-6.6 5.4-12 12-12h136c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H204c-6.6 0-12-5.4-12-12v-40zm-128 0c0-6.6 5.4-12 12-12h72c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zM576 80v48H0V80c0-26.5 21.5-48 48-48h480c26.5 0 48 21.5 48 48z"></path></svg>
                        <h4 className="text-[#868583] text-[16px] leading-6">Credit Card</h4>
                    </div>
                    <div className="flex gap-x-4 items-center border-b-[#868583] border-b-[1px] p-5">
                        <svg className="SVG !fill-[#ffefd0]" viewBox="0 0 352 512"><path d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"></path></svg>
                        <h4 className="text-[#868583] text-[16px] leading-6">Add payment method</h4>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default Wallet
