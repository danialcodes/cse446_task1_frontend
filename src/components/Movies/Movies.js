import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Button from '@mui/material/Button';

import { useEffect, useState } from 'react';
import axios from 'axios';
const columns = [
    { id: 'title', label: 'Movie Name', minWidth: 100 },
    { id: 'year', label: 'Year', minWidth: 20 },
    { id: 'director', label: 'Director', minWidth: 100, align: 'center' },
    { id: 'action', label: 'Action', minWidth: 20, align: 'center' },
];




const Movies = () => {
    const [movie, setMovie] = useState([]);
    const [page, setPage] = useState(0);
    const [isUpdate, setIsUpdate] = useState(false);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    useEffect(() => {
        axios.get('http://localhost:5000/getMovie')
            .then(res => res.data.message)
            .then(movie => {
                setMovie(movie);
            })
    }, [page, isUpdate]);


    const handleDelete = (id) => {
        axios.delete(`http://localhost:5000/${id}`)
            .then(res => {
                if (res.data.error === "false") {
                    alert("Movie Deleted Successfully");
                    setIsUpdate(!isUpdate);
                }
            })
    }

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    return (
        <><h1 className='text-center mt-2 text-3xl font-semibold'>Welcome to Movie Database</h1>
            <Paper sx={{ width: '60%', overflow: 'hidden', margin: "5px auto 0 auto" }}>
                <TableContainer sx={{ maxHeight: 440, maxWidth: "100%" }}>
                    <Table stickyHeader aria-label="sticky table">
                        <TableHead>
                            <TableRow>
                                {columns.map((column) => (
                                    <TableCell
                                        key={column.id}
                                        align={column.align}
                                        style={{ minWidth: column.minWidth }}
                                    >
                                        {column.label}
                                    </TableCell>
                                ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {movie
                                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .map((row) => {
                                    return (
                                        <TableRow hover role="checkbox" tabIndex={-1} key={row.title}>
                                            {columns.map((column) => {
                                                const value = row[column.id];
                                                return (
                                                    <TableCell key={column.id} align={column.align}>
                                                        {column.id === "action"
                                                            ? <>
                                                                <Button size="small" variant="outlined" color="success" sx={{ marginRight: "5px" }}>Update</Button>
                                                                <Button size="small" variant="outlined" color="error" onClick={() => {
                                                                    handleDelete(row._id);
                                                                }}>Delete</Button>
                                                            </>
                                                            : value}
                                                    </TableCell>
                                                );
                                            })}
                                        </TableRow>
                                    );
                                })}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[5, 10, 25, 100]}
                    component="div"
                    count={movie.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </Paper>
        </>
    );
}
export default Movies;