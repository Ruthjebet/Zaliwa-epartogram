import Head from 'next/head'
import BarChart from "../components/BarChart"
import LineChart from "../components/LineChart"
import RowData from "../components/RowData"
import Login from  './login.js'





export default function Home() {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen py-2'>
      <Head>
        <title>Zaliwa Epartogram</title>
        <link rel='icon' href='/Zaliwalogo.svg'></link>
      </Head>

      <main className=' bg-white flex flex-col items-center justify-center w-8/12 flex-1 px-20 text-center '>
       <Login/>
    
      </main>
    </div>

  )
}
