// import React from 'react'
// // import standard from "../../assets/Pricing/standard.png";
// // import vip from "../../assets/Pricing/vip.png";

// // import SectionTitle from "../sectionTitle/SectionTitle";
// import { ImCross } from "react-icons/im";
// import Container from '../Container';

// function Pricingcard({ ticketPriceHandle, ticketPriceHandle2 }) {
//   return (
//     <section id="price">
//             <Container>
//                 <div className="mt-3.5" style={{}}>
//                     {/* <SectionTitle heading={"Get Your Seat"} subHeading={'Ticket Plan'}></SectionTitle> */}
//                     <p style={{color:'#9C0C0D',letterSpacing:'0.1em'}}>TICKET PLAN</p>
//                     <p style={{fontSize:'36px',fontWeight:'700'}}>Get Your Seat</p>

//                 </div>

//                 <div className='grid grid-cols-1 md:grid-cols-2 gap-6' style={{display:'flex'}}>
//                     <div onClick={ticketPriceHandle2} className='border-2 hover:shadow-2xl px-8 my-6 py-8 flex flex-col justify-center items-center space-y-2'>
//                         {/* <img className='w-20' src={standard} alt="" /> */}
//                         <p className='text-gray-500 italic'>Standard ticket</p>
//                         <h1 className='text-5xl font-bold pt-3 text-rose-600'>$89</h1>
//                         <div className='text-gray-500 pt-3 pb-6'>
//                             <p className='border-y-2 py-3 px-6'>Full access to all lectures and workshops</p>
//                             <p className='py-3 px-6 flex items-center gap-2'><ImCross className="text-red-600"/>Video presentations</p>
//                             <p className='border-y-2 py-3 px-6 flex items-center gap-2'><ImCross className="text-red-600"/>Meet all of our event speakers</p>
//                         </div>
//                         <button className='py-3 hover:border-rose-600 px-6 border-2 border-b-4 border-r-4 border-black'>
//                             Select
//                         </button>
//                     </div>

//                     <div onClick={ticketPriceHandle} className='border-2 hover:shadow-2xl px-8 my-6 py-8 flex flex-col justify-center items-center space-y-2'>
//                         {/* <img className='w-20' src={vip} alt="" /> */}
//                         <p className='text-gray-500 italic'>VIP ticket</p>
//                         <h1 className='text-5xl font-bold pt-3 text-rose-600'>$159</h1>
//                         <div className='text-gray-500 pt-3 pb-6'>
//                             <p className='border-y-2 py-3 px-6'>Full access to all lectures and workshops</p>
//                             <p className='py-3 px-6'>Video presentations</p>
//                             <p className='border-y-2 py-3 px-6'>Meet all of our event speakers</p>
//                         </div>
//                         <button className='py-3 px-6 hover:border-rose-600 border-2 border-b-4 border-r-4 border-black'>
//                             Select
//                         </button>
//                     </div>
//                 </div>

//             </Container>
//         </section>
//   )
// }

// export default Pricingcard


import React from 'react'

import { ImCross } from "react-icons/im";
import Container from '../Container';

function Pricingcard({ ticketPriceHandle, ticketPriceHandle2 }) {
  return (
    <section id="price">
            <Container>
                <div className="mt-3.5" style={{}}>
                    {/* <SectionTitle heading={"Get Your Seat"} subHeading={'Ticket Plan'}></SectionTitle> */}
                    <p style={{color:'#9C0C0D',letterSpacing:'0.1em'}}>TICKET PLAN</p>
                    <p style={{fontSize:'36px',fontWeight:'700'}}>Get Your Seat</p>

                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-6' style={{marginTop:'8%'}}>
                    <div onClick={ticketPriceHandle2} className='border-2 hover:shadow-2xl px-8 my-6 py-8 flex flex-col justify-center items-center space-y-2' style={{margin:'0 5%'}}>
                        {/* <img className='w-20' src={standard} alt="" /> */}
                        <p className='text-gray-500 italic'>Standard ticket</p>
                        <h1 className='text-5xl font-bold pt-3 text-rose-600'>$89</h1>
                        {/* <div className='text-gray-500 pt-3 pb-6'>
                            <p className='border-y-2 py-3 px-6'>Full access to all lectures and workshops</p>
                            <p className='py-3 px-6 flex items-center gap-2'><ImCross className="text-red-600"/>Video presentations</p>
                            <p className='border-y-2 py-3 px-6 flex items-center gap-2'><ImCross className="text-red-600"/>Meet all of our event speakers</p>
                        </div> */}
                        <button className='py-3 hover:border-rose-600 px-6 border-2 border-b-4 border-r-4 border-black'>
                            Select
                        </button>
                    </div>

                    <div onClick={ticketPriceHandle} className='border-2 hover:shadow-2xl px-8 my-6 py-8 flex flex-col justify-center items-center space-y-2' style={{margin:'0 5%'}}>
                        {/* <img className='w-20' src={vip} alt="" /> */}
                        <p className='text-gray-500 italic'>VIP ticket</p>
                        <h1 className='text-5xl font-bold pt-3 text-rose-600'>$159</h1>
                        {/* <div className='text-gray-500 pt-3 pb-6'>
                            <p className='border-y-2 py-3 px-6'>Full access to all lectures and workshops</p>
                            <p className='py-3 px-6'>Video presentations</p>
                            <p className='border-y-2 py-3 px-6'>Meet all of our event speakers</p>
                        </div> */}
                        <button className='py-3 px-6 hover:border-rose-600 border-2 border-b-4 border-r-4 border-black'>
                            Select
                        </button>
                    </div>
                </div>

            </Container>
        </section>
  )
}

export default Pricingcard

