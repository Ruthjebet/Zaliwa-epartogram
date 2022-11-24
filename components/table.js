import React, { useMemo } from 'react';
import { useTable } from 'react-table';
import { COLUMNS } from './columns';
import MOCK_DATA from './MOCK_DATA.json';

const TableData = props => {
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => MOCK_DATA, []);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    footerGroups,
    rows,
    prepareRow
  } = useTable({
    columns,
    data
  });

  return (
    <div className="table-container w-full pl-20 pr-20 pt-10">
    <div className=''>
       <h2 className='p-4 font-bold text-4xl text-left mb-4 text-purple-800'>Admitted Patients </h2>
       <div className='flex items-center mb-3'>
            <a href='./addpatients' className='border-2 text-center rounded-xl bg-purple-800 text-white p-3 inline-block font-weight-200  hover:shadow-2xl w-48'>Admit Patient</a>
        </div>
    </div>
      
      <table className=" w-full  table-auto border-separate border-spacing-2 "  {...getTableProps()} >
        <thead className='bg-purple-800'>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th className='p-4 border border-fuchsia-200 text-white '  {...column.getHeaderProps()}>{column.render('Header')}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map(row => {
            prepareRow(row);

            return (
              <tr {...row.getRowProps()}>
                {row.cells.map(cell => {
                  return (
                    <td className="p-4 border border-fuchsia-200 bg-fuchsia-200" {...cell.getCellProps()}>
                        
                        <a href='#'> {cell.render('Cell')} </a>
                        </td>
                    
                  );
                })}
              </tr>
            );
          })}
        </tbody>
        <tfoot>
          {footerGroups.map(footerGroup => (
            <tr {...footerGroup.getFooterGroupProps()}>
              {footerGroup.headers.map(column => (
                <td className="p-4 border opacity-75 bg-purple-800 text-white text-sm  " {...column.getFooterProps()}>{column.render('Footer')} </td>
              ))}
            </tr>
          ))}
        </tfoot>
      </table>
    </div>
  );
}

export default TableData;
