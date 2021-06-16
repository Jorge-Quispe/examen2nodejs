import { pool } from '../database'

export const readAllDetalle = async(req, res)=>{
    try {
        const response = await pool.query('select * from detalle');
        return res.status(200).json(response.rows);
    } catch (e) {
        console.log(e);
        return res.status(500).json('Internal Server Error...!');
    }
    
}
export const readMatriculaxalumno = async(req, res)=>{
    try {
        const dni = parseInt(req.params.dni);
        const response = await pool.query('select creditos , horas , fecha , ciclo  from detalle join matricula on detalle.idmatricula = matricula.idmatricula join alumno on alumno.idalumno = matricula.idalumno where dni =$1', [dni]);
        return res.status(200).json(response.rows);
    } catch (e) {
        console.log(e);
        return res.status(500).json('Internal Server error...!');
    }
}