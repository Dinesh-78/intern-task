import React, { useEffect, useState } from 'react';
import { supabase } from '../supabase/createClient';
import { DataGrid } from '@mui/x-data-grid';
import { Box, Chip, Typography, Button, MenuItem, Select, FormControl, InputLabel } from '@mui/material';

const Dashboard = () => {
  const [studentdata, setStudentData] = useState([]);
  const [error, setError] = useState(null);
  const [academicYear, setAcademicYear] = useState('AY 2024-25');
  const [classGrade, setClassGrade] = useState('CBSE 9');

  useEffect(() => {
    fetchUsers();
  }, []);

  async function fetchUsers() {
    const { data, error } = await supabase.from('students').select('*');
    if (error) {
      console.error('Error fetching data:', error.message);
      setError(error.message);
    } else {
      console.log('Data fetched successfully:', data);
      setStudentData(data);
    }
  }

  // Define columns for the DataGrid
  const columns = [
    { field: 'name', headerName: 'Student Name', width: 200 },
    { field: 'cohort', headerName: 'Cohort', width: 150 },
    {
      field: 'courses',
      headerName: 'Courses',
      width: 300,
      renderCell: (params) => (
        <Box display="flex" flexWrap="wrap" gap={1}>
          {params.value.map((course, index) => (
            <Chip key={index} label={course} variant="outlined" />
          ))}
        </Box>
      ),
    },
    { field: 'dateJoined', headerName: 'Date Joined', width: 150 },
    { field: 'lastLogin', headerName: 'Last Login', width: 200 },
    {
      field: 'status',
      headerName: 'Status',
      width: 100,
      renderCell: (params) => (
        <Box
          width={16}
          height={16}
          borderRadius="50%"
          bgcolor={params.value === 'active' ? 'green' : 'red'}
        />
      ),
    },
  ];

  // Process rows for the DataGrid
  const rows = studentdata.map((student, index) => ({
    id: student.id || index, // Use `student.id` if available, otherwise fallback to index
    name: student["Student Name"], // Match field name
    cohort: student["Cohort"], // Match field name
    courses: student["Courses"] || [], // Handle undefined Courses field
    dateJoined: student["Date Joined"], // Match field name
    lastLogin: student["Last Login"], // Match field name
    status: student.status ? 'active' : 'inactive', // Convert boolean to string
  }));

  return (
    <Box m={4}>
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
        <Box display="flex" gap={2}>
          <FormControl size="small">
            <InputLabel>Academic Year</InputLabel>
            <Select
              value={academicYear}
              onChange={(e) => setAcademicYear(e.target.value)}
              label="Academic Year"
            >
              <MenuItem value="AY 2024-25">AY 2024-25</MenuItem>
              <MenuItem value="AY 2023-24">AY 2023-24</MenuItem>
            </Select>
          </FormControl>

          <FormControl size="small">
            <InputLabel>Class</InputLabel>
            <Select
              value={classGrade}
              onChange={(e) => setClassGrade(e.target.value)}
              label="Class"
            >
              <MenuItem value="CBSE 9">CBSE 9</MenuItem>
              <MenuItem value="CBSE 10">CBSE 10</MenuItem>
            </Select>
          </FormControl>
        </Box>

        <Button variant="contained" color="primary">
          + Add New Student
        </Button>
      </Box>

      {error ? (
        <Typography color="error">Error: {error}</Typography>
      ) : (
        <div style={{ height: 500, width: '100%' }}>
          <DataGrid rows={rows} columns={columns} pageSize={10} />
        </div>
      )}
    </Box>
  );
};

export default Dashboard;
