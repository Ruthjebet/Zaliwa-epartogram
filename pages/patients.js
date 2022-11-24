import React from 'react'
import PatientCard from '../components/patientcard';
import TableData from '../components/table';
import BasicTable from '../components/table';
import AddPatients from './addpatient';

export default function PatientTable() {
    return (
        
     <div className='p-6'>
           <h1 className="text-3xl font-semibold text-center text-purple-800 ">
                    View Patients
            </h1>
             <div className="relative flex  justify-center w-full ">
             <PatientCard/>
             </div>
             <div className='flex items-left justify-end mb-3 p-20'>
                <a href='./addpatient' className='border-2 text-center rounded-xl bg-purple-800 text-white p-3 inline-block   hover:shadow-2xl w-48'>Add Patient</a>
            </div>
            
           
     </div>
          

    );
}