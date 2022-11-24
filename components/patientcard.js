import { FaCircle } from 'react-icons/fa';
import React from 'react';
import MOCK_DATA from './MOCK_DATA.json';
import { id } from 'date-fns/locale';


export default function PatientCard() {

    return (

        <div className='w-max p-2 lg:p-4 justify-center grid grid-cols-1 lg:grid-cols-3  gap-8'>
            {MOCK_DATA.map((result) => (
                <div className='basis-1/4 flex-2 justify-between mb-4 w-full'>

                <a href="./viewdetails" class="items-center md:shrink-0 flex flex-col bg-white border rounded-lg shadow-md md:flex-row md:max-w-xl hover:bg-gray-100  dark:bg-purple-800 dark:hover:bg-purple-700">
                    <div class="object-cover w-full rounded-t-lg h-10 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg bg-purple-800" ></div>
                    <div class="flex flex-col justify-between p-4 leading- bg-fuchsia-200 w-full">
                        <div className='flex flex-row items-center justify-between'>
                            <h5 class="mb-2 md:text-2xl font-bold tracking-tight text-black-900 dark:text-purple-800" key={result.id}>{result.name}</h5>
                            <FaCircle className='text-2xl text-green-600' key={result.risk_level} />
                        </div>
                        <p class="mb-3 font-normal text-gray-900 dark:text-gray-900" key={result.id}>{result.id}</p>
                        <div className='flex flex-row  items-center '>
                            <p class="mb-2  text-sm text-black-900 dark:text-purple-800">Admitted at</p>
                            <p className='mb-2 p-1 text-xs' >{result.date_of_admission} </p>
                        </div>
                    </div>
                </a>

            </div>
            ))}
        </div>


    );
}