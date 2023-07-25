import { useEffect, useState } from "react";


const Results = () => {
    const [busses, setBusses] = useState([]);

    const url = `https://content.newtonschool.co/v1/pr/63b70222af4f30335b4b3b9a/buses`
    useEffect(() => {
        const getBus = async () => {
            const data = await fetch(url);
            const res = await data.json();
            setBusses(res);
        };

        getBus();

        //eslint-disable-next-line
    }, [])

    return (
        <>
            <div className="flex items-center justify-center text-black mt-4 ">
                <table className="border-2 border-green-600 min-w-[90vw] text-center">
                    <thead className="bg-purple-600">
                        <tr>

                            <th>Bus No.</th>
                            <th className="">Bus Name</th>
                            <th>Ticket Price</th>
                            <th>Arrival Time</th>
                            <th>Departure Time</th>
                            <th>source/From</th>
                            <th>Destination/To</th>
                            <th>Date</th>
                            <th>Book Bus</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* <tr className="border-b-2 border-blue-600 font-semibold">
                            <td>123</td>
                            <td>Abc</td>
                            <td>Rs. 414₹</td>
                            <td>6:20PM</td>
                            <td>6:55PM</td>
                            <td>Assam</td>
                            <td>Delhi</td>
                            <td>31-dec</td>
                            <td><button className="bg-green-500 px-3 py-1 m-2 rounded-md hover:bg-green-600">Book</button></td>
                        </tr> */}

                        {
                            busses && busses.map(((bus, index) => {
                                return (
                                    <tr key={index} className="border-b-2 border-blue-600 font-semibold">
                                        <td>{bus.id}</td>
                                        <td >{bus.busName}</td>
                                        <td>Rs. {bus.ticketPrice}</td>
                                        <td>{bus.arrivalTime}</td>
                                        <td>{bus.departureTime}</td>
                                        <td>{bus.source}</td>
                                        <td>{bus.destination}</td>
                                        <td>{bus.date}</td>
                                        <td><button className="bg-green-500 px-3 py-1 m-2 rounded-md hover:bg-green-600">Book</button></td>
                                    </tr>
                                    // {
                                    //     "id": "1",
                                    //     "busName": "zing Bus",
                                    //     "ticketPrice": "480",
                                    //     "arrivalTime": "12:09AM",
                                    //     "departureTime": "6:00PM",
                                    //     "source": "jaipur",
                                    //     "destination": "delhi",
                                    //     "date": "2023-01-21"
                                    // },
                                )
                            }))

                        }


                    </tbody>

                </table>
            </div>
            <div className="flex justify-center items-center w-full mt-10">
                NB::: No Refund Applicable. <span className="text-blue-600 cursor-pointer mx-2">why?</span>
            </div>
        </>
    )
}

export default Results