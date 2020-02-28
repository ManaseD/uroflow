import React from 'react';
import { Grid, Paper } from '@material-ui/core';
import { Button, ButtonGroup, IconButton, InputBase } from '@material-ui/core';
import { TableContainer, Table, TableHead, TableBody, TableRow, TableCell} from '@material-ui/core';
import { Typography } from '@material-ui/core';
import { Search, FiberManualRecord } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({
  container: {
    maxHeight: window.innerHeight - theme.spacing(16),
  },
  head: {
    padding: theme.spacing(1),
    textAlign: 'center',
  },
  grid: {
    margin: theme.spacing(0.5),
    alignItems: 'center',
  },
  form: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  sort: {
    padding: theme.spacing(1),
  }
}));

function PatientList(props) {

  const rows = props.patients

  const classes = useStyles();

  return (
    <TableContainer className={ classes.container } >
      <Table stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell className={ classes.head } colSpan={ 4 } >
              <Grid container className={ classes.grid } spacing={ 1 } >
                <Grid item xl={ 2 } xs={ 2 } >
                  <Button variant='contained' color='secondary'> Add </Button>
                </Grid>
                <Grid item xl={ 6 } xs={ 6 } >
                  <Paper component='form' className={ classes.form } >
                    <InputBase placeholder='Search ID' className={ classes.input } />
                    <IconButton type='submit' className={ classes.iconButton } > <Search /> </IconButton>
                  </Paper>
                </Grid>
                <Grid item className={ classes.sort } xl={ 4 } xs={ 4 } >
                  <Typography variant='overline' display='block'> Sort By </Typography>
                  <ButtonGroup variant='text'>
                    <Button color='primary'> ID </Button>
                    <Button color='secondary'> Recent Update </Button>
                  </ButtonGroup>
                </Grid>
              </Grid>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
            rows.map(row => (
              <TableRow hover key={ row.id } >
                <TableCell component='th' scope='row'> { row.id } </TableCell>
                <TableCell align='left'> { row.num } </TableCell>
                <TableCell align='left'> <FiberManualRecord fontSize='small' color={ row.recentUpdate ? 'primary' : 'disabled' } /> </TableCell>
                <TableCell align='right'>
                  <ButtonGroup variant='text'>
                    <Button color='secondary'> Edit </Button>
                    <Button color='secondary'> Details </Button>
                  </ButtonGroup>
                </TableCell>
              </TableRow>
            ))
          }
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default PatientList;
