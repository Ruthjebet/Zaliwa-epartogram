import React from 'react'
import PatientCard from '../components/patientcard';
import TableData from '../components/table';
import BasicTable from '../components/table';
import AddPatients from './addpatient';

export default function PatientTable() {
    return (

        <div className='p-6'>
            <div className='flex flex-col lg:flex-row items-center justify-evenly lg:space-x-100'>
                <h1 className=" text-3xl font-semibold text-left text-purple-800 ">
                    View Patients
                </h1>
                <div className='flex items-left justify-center lg:justify-end mb-1 lg:mb-3 p-10 lg:p-20'>
                    <a href='./addpatient' className='border-2 text-center rounded-xl bg-purple-800 text-white text-l lg:text-xl p-2 lg:p-3 inline-block   hover:shadow-2xl w-48'>Add Patient</a>
                </div>
            </div>
            <div className="relative flex  justify-center w-full ">
                <PatientCard />
            </div>



        </div>


    );
}