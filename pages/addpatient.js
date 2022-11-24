import React from 'react'
import TableData from '../components/table';
import BasicTable from '../components/table';

export default function AddPatients() {
    return (

        <div className="relative flex flex-col justify-center min-h-screen ">
            <div className="w-full p-6 m-auto bg-fuchsia-100 rounded-md shadow-md lg:max-w-4xl">
                <h1 className="text-3xl font-semibold text-left text-purple-700 ">
                    Add Patient Details
                </h1>
                <form className="mt-6">
                    <div className="mb-2 ">
                        <label
                            for="email"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Name
                        </label>
                        <input
                            type="text"
                            className="block w-full p-4 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                    <div className="mb-2 flex flex-row justify-between">
                        <div className='w-1/2 p-2'>
                            <label
                                for="number"
                                className="block text-sm font-semibold text-gray-800"
                            >
                                Gravida
                            </label>
                            <input
                                type="number"
                                className="block w-full p-4 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                            />
                        </div>
                        <div className='w-1/2 p-2'>
                            <label
                                for="number"
                                className="block text-sm font-semibold text-gray-800"
                            >
                                Para
                            </label>
                            <input
                                type="number"
                                className="block w-full p-4 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                            />
                        </div>

                    </div>

                    <div className="mb-2">
                        <label
                            for="password"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Contact Number
                        </label>
                        <input
                            type="number"
                            className="block w-full p-4 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                    <div className="mb-2">
                        <label
                            for="password"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Emergency Contact
                        </label>
                        <input
                            type="number"
                            className="block w-full p-4 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                    <div className="mt-6 items-center content-center justify-center ">
                        <button className="w-full p-4 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600">
                            Submit
                        </button>
                    </div>
                </form>

            </div>
        </div>


    );
}