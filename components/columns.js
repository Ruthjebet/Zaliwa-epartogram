import { format } from 'date-fns';


export const COLUMNS = [
  {
    Header: 'id',
    accessor: 'id',
    Footer: 'PatientId',
    // Filter: ColumnFilter,
    disableFilters: true
  },
  {
    Header: 'Name',
    accessor: 'name',
    Footer: 'Name'
    // Filter: ColumnFilter
  },
  {
    Header: 'Date of Admission',
    accessor: 'date_of_admission',
    Footer: 'Date of Admission',
    // Filter: ColumnFilter
  },
  {
    Header: 'Phone',
    accessor: 'phone',
    Footer: 'Phone'
    // Filter: ColumnFilter
  },
  {
    Header: 'Risk Level',
    accessor: 'risk_level',
    Footer: 'Country'
    // Filter: ColumnFilter
  },
  
];