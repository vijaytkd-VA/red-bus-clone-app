import { useState } from 'react';
import { GoArrowSwitch } from 'react-icons/go'
import { getBusses } from "../contexts/GetBusses";

const Home = () => {
    const [from, setFrom] = useState('');
    const [to, setTo] = useState('');

    const handleExchange = () => {
        if (from.length > 0 || to.length > 0) {

            let temp1 = from;
            let temp2 = to;
            setTo(temp1)
            setFrom(temp2)
        }

    }
    const getData = () => {
        const getBus = async () => {
            const data = await getBusses(to, from);
            console.log(data);
        }
        getBus()

    }


    return (
        <>
            <div className="relative flex items-center justify-center flex-wrap">
                <img src="https://s3.rdbuz.com/web/images/homeV2/HomeBannerImg.svg" alt="bg-Img" className='min-h-[90vh] -mt-10' />

                <div className="absolute flex items-center flex-wrap justify-center bg-gray-300/90 px-24 py-20 rounded-md max-w-[90vw]">
                    {/* <label htmlFor="first">From</label> */}
                    <input placeholder='From' type="text" id='first' className='rounded py-4 text-3xl bg-slate-200  border-red-700 border-2 text-black px-1 mt-2' value={from} onChange={(e) => setFrom(e.target.value)} minLength={2} />
                    <span onClick={handleExchange}>
                        <GoArrowSwitch color='white' size={60} className=' mx-2 mt-2 bg-red-700 hover:bg-red-800 p-3 cursor-pointer rounded-full duration-200' />
                    </span>
                    {/* <label htmlFor="second">TO</label> */}
                    <input type="text" placeholder='To' id='second' className='rounded py-4 text-3xl bg-slate-200  border-red-700 border-2 text-black px-1 mt-2' minLength={2} value={to} onChange={(e) => setTo(e.target.value)} />

                    <input type="date" name="date" id="date" className='rounded-md mx-2 p-2 py-4 text-3xl bg-slate-200  border-red-700 border-2 text-black px-1 mt-2' />

                    <button className='bg-red-700 hover:bg-red-800 hover:text-white duration-200 mx-2 mt-2 p-4 rounded-md px-5 text-3xl' onClick={getData}>Search Busses</button>

                </div>

                <div className="mt-[61vh] absolute w-full">
                    <marquee direction="right">
                        <img className="h-28" src='./red-bus-logo.png' alt="logoImg" />
                    </marquee>
                </div>
            </div>

        </>
    )
}

export default Home;