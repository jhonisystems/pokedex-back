import * as pokemonesData from '../repositories/data';

export class MovimientosController {
    async get(req: any, res:any) {
        const objPokemones = new pokemonesData.Datos();
        const lstMovimientos = await objPokemones.getMovimientos();
        res.json(lstMovimientos);
    }
}