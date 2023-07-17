import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import './styles.css'

export const InfoTable = () => {
    return (
        <div className="container-infoTable">
            <TableContainer sx={{ background: '#000', color: '#fff', borderRadius: 10 }}>
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell sx={{ color: '#fff' }} align="center">Data</TableCell>
                            <TableCell sx={{ color: '#fff' }} align="center">Categoria</TableCell>
                            <TableCell sx={{ color: '#fff' }} align="center">Título</TableCell>
                            <TableCell sx={{ color: '#fff' }} align="center">Valor</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                            <TableCell sx={{ color: '#fff' }} align="center">12/06/2023</TableCell>
                            <TableCell sx={{ color: '#fff' }} align="center">Entrada</TableCell>
                            <TableCell sx={{ color: '#fff' }} align="center">Salário</TableCell>
                            <TableCell sx={{ color: '#fff' }} align="center">1.200</TableCell>
                        </TableRow>

                        <TableRow
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                            <TableCell sx={{ color: '#fff' }} align="center">17/06/2023</TableCell>
                            <TableCell sx={{ color: '#fff' }} align="center">Saida</TableCell>
                            <TableCell sx={{ color: '#fff' }} align="center">Conta de luz</TableCell>
                            <TableCell sx={{ color: '#fff' }} align="center">200</TableCell>
                        </TableRow>

                        <TableRow
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                            <TableCell sx={{ color: '#fff' }} align="center">01/08/2023</TableCell>
                            <TableCell sx={{ color: '#fff' }} align="center">Entrada</TableCell>
                            <TableCell sx={{ color: '#fff' }} align="center">Agiota</TableCell>
                            <TableCell sx={{ color: '#fff' }} align="center">1.200</TableCell>
                        </TableRow>

                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}