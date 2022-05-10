import { Container, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import React, { FC } from "react";
import _ from "lodash";
import useActiveUsers from "./hook";
import useActiveStyles from "./active.styles";
import moment from "moment";

const ActiveUsers: FC = (): JSX.Element => {
    // Controller
    const { comments, deleteComment } = useActiveUsers();
    const { StyledContainer } = useActiveStyles()

    return (
        <React.Fragment>
            <StyledContainer background="http://localhost/api-proxis/wp-content/uploads/2021/12/Recurso-7-3.png">
                <Container>
                    <TableContainer component={Paper}>
                        <Table>
                            <TableHead>
                                <TableCell align="center"><b>Autor</b></TableCell>
                                <TableCell align="center"><b>Comentario</b></TableCell>
                                <TableCell align="center"><b>Fecha De Publicacion</b></TableCell>
                                <TableCell align="center"><b>Borrar</b></TableCell>
                            </TableHead>
                            <TableBody>
                                {
                                    _.map(comments, (item: any, index: any) => (
                                        <TableRow key={index}>
                                            <TableCell align="center">{item.author_name}</TableCell>
                                            <TableCell align="center" dangerouslySetInnerHTML={{ __html: item.content.rendered}}></TableCell>
                                            <TableCell align="center">{moment(item.date).format('DD-MM-YYYY')}</TableCell>
                                            <TableCell align="center">
                                                <Grid item md={12} className="flex justify-center">
                                                    <img src="http://localhost/api-proxis/wp-content/uploads/2021/12/Recurso-2-4.png" alt="" onClick={() => deleteComment(item.id)} />
                                                </Grid>
                                            </TableCell>
                                        </TableRow>
                                    ))
                                }
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Container>
            </StyledContainer>
        </React.Fragment>
    );
};

export default ActiveUsers;