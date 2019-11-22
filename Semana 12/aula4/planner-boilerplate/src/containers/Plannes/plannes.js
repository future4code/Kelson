import React from "react";
import { connect } from "react-redux";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { getPlannes } from "../../actions/setPlannes";

export class Plannes extends React.Component {
    
    componentDidMount(){
        getPlannes()
    }

    render(){
        const { 
                domingo, 
                segunda, 
                terça, 
                quarta, 
                quinta, 
                sexta, 
                sabado} = this.props

        return (
            <Paper>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Domingo</TableCell>
                            <TableCell>Segunda</TableCell>
                            <TableCell>Terça</TableCell>
                            <TableCell>Quarta</TableCell>
                            <TableCell>Quinta</TableCell>
                            <TableCell>Sexta</TableCell>
                            <TableCell>Sabado</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow >
                            <TableCell>{domingo}</TableCell>
                            <TableCell>{segunda}</TableCell>
                            <TableCell>{terça}</TableCell>
                            <TableCell>{quarta}</TableCell>
                            <TableCell>{quinta}</TableCell>
                            <TableCell>{sexta}</TableCell>
                            <TableCell>{sabado}</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </Paper>
        )
    }
}

const mapStateToProps = state => ({
    domingo: state.setPlannes.domingo,
    segunda: state.setPlannes.segunda,
    terça: state.setPlannes.terça,
    quarta: state.setPlannes.quarta,
    quinta: state.setPlannes.quinta,
    sexta: state.setPlannes.sexta,
    sabado: state.setPlannes.sabado,
})

const mapDispatchToProps = dispatch => ({
    getPlannes: () => dispatch(getPlannes),
})

export default connect(mapStateToProps, mapDispatchToProps)(Plannes);