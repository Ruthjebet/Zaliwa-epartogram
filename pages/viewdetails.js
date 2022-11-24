import React from 'react'
import BarChart from '../components/BarChart';
import PatientDetailsCard from '../components/patientdetailscard';
import RowData from '../components/RowData';
import LineChart from '../components/LineChart';


export default function ViewPatientDetails() {
    return (
        <div>
            <div className='flex flex-col lg:flex-row p-4 lg:p-4 items-start lg:items-center space-between'>
                <div className='justify-center p-0 lg:p-3'>
                    <h4>Patient: Karian Kahn</h4>
                    <p>PT123</p>
                    <p>Gravida 2</p>
                    <p>Para</p>
                </div>
                <div className='p-0 lg:p-3'>
                    <p>Admitted At</p>
                    <p>Mon, 22 Aug 2022 05:15 PM</p>
                </div>
                <div className='p-0 lg:p-3'>
                    <p>Email</p>
                    <p>some@exmple.com</p>
                </div>
                <div className='p-0 lg:p-3'>
                    <p>Contact</p>
                    <p>+91 98789 88879</p>
                </div>
            </div>
            <div className='flex  flex-col lg:flex-row p-4'>
                <div className='w-auto lg:w-1/6 grid grid-cols-2 lg:grid-cols-1'>
                    <h4 className='font-bold'>Epoch 3</h4>
                    <div className='w-fit p-2 flex flex-row items-center '>
                        <label
                            for="number"
                            className="inline-block text-sm font-semibold text-gray-800"
                        >
                            Time
                        </label>
                        <input
                            type="number"
                            className="inline-block w-full 4 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                    <div className='w-48 p-2 flex flex-row items-center '>
                        <label
                            for="number"
                            className="inline-block text-sm font-semibold text-gray-800"
                        >
                            Feotal HeartRate
                        </label>
                        <input
                            type="number"
                            className="inline-block w-full 4 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                    <div className='w-48 p-2 flex flex-row items-center '>
                        <label
                            for="number"
                            className="inline-block text-sm font-semibold text-gray-800"
                        >
                            Amniotic Fluid
                        </label>
                        <input
                            type="number"
                            className="inline-block w-full 4 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                    <div className='w-48 p-2 flex flex-row items-center '>
                        <label
                            for="number"
                            className="inline-block text-sm font-semibold text-gray-800"
                        >
                            Moulding
                        </label>
                        <input
                            type="number"
                            className="inline-block w-full 4 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                    <div className='w-48 p-2 flex flex-row items-center '>
                        <label
                            for="number"
                            className="inline-block text-sm font-semibold text-gray-800"
                        >
                            Cervix Dilation
                        </label>
                        <input
                            type="number"
                            className="inline-block w-full 4 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                    <div className='w-48 p-2 flex flex-row items-center '>
                        <label
                            for="number"
                            className="inline-block text-sm font-semibold text-gray-800"
                        >
                            Decent of the Head
                        </label>
                        <input
                            type="number"
                            className="inline-block w-full 4 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                    <div className='w-48 p-2 flex flex-row items-center '>
                        <label
                            for="number"
                            className="inline-block text-sm font-semibold text-gray-800"
                        >
                            Contractions
                        </label>
                        <input
                            type="number"
                            className="inline-block w-full 4 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                    <div className='w-48 p-2 flex flex-row items-center '>
                        <label
                            for="number"
                            className="inline-block text-sm font-semibold text-gray-800"
                        >
                            Ocytocin
                        </label>
                        <input
                            type="number"
                            className="inline-block w-full 4 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                    <div className='w-48 p-2 flex flex-row items-center '>
                        <label
                            for="number"
                            className="inline-block text-sm font-semibold text-gray-800"
                        >
                            Drugs
                        </label>
                        <input
                            type="number"
                            className="inline-block w-full 4 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                    <div className="mt-4 items-center content-center justify-center ">
                        <button className="w-48 text-sm p-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600">
                            Generate and Analyse
                        </button>
                    </div>
                </div>
                <div className='w-5/6 grid grid-col-1 lg:grid-cols-3'>
                    <RowData/>
                    <BarChart/>
                    <LineChart/>
                </div>
            </div>

        </div>

    );
}