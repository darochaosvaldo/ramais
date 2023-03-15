import React, { useState, useEffect } from 'react';
import './App.css';
import ramais from "./ramais.json"
import AccountCircle from '@mui/icons-material/AccountCircle';
import InputAdornment from '@mui/material/InputAdornment';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';

function App() {

  const [rows, setRows] = useState(ramais);

  const onTextChange = (event:any) => {
    const value = event.target.value.toLocaleLowerCase();
    setRows(ramais.filter(row => (row.ramal.toLocaleLowerCase().includes(value) 
                                || row.nome.toLocaleLowerCase().includes(value) 
                                || row.area.toLocaleLowerCase().includes(value) 
                                || row.unidade.toLocaleLowerCase().includes(value))));
  }
  
  var rootStyle = {
    backgroundColor : 'whitesmoke',
    height : '100vh'
  }

  return (
    <div style={rootStyle}>
      <header className="App-header">
        <p className='Title'>
          Ramais
        </p>

        <p className='Textfield-container'>
          <TextField fullWidth id="search" label="Buscar" onChange={onTextChange} InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
          ),
        }}
        variant="outlined"
        />
        </p>
      </header>
      <body className="App-body">
        <p>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 900 }} size="small">
              <TableHead>
                <TableRow>
                  <TableCell><b>Ramal</b></TableCell>
                  <TableCell align="right"><b>Nome</b></TableCell>
                  <TableCell align="right"><b>Área</b></TableCell>
                  <TableCell align="right"><b>Unidade</b></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow
                    key={row.ramal}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell scope="row">
                      {row.ramal}
                    </TableCell>
                    <TableCell align="right">{row.nome}</TableCell>
                    <TableCell align="right">{row.area}</TableCell>
                    <TableCell align="right">{row.unidade}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
       </p>
      </body>
    </div>
  );
}

export default App;
