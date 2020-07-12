import * as pokemonesData from '../repositories/data';

export class PokemonesController {
    async get(req: any, res: any) {
        const parametro = req.params.texto;
        const objPokemones = new pokemonesData.Datos();
        let lstPokemones = await objPokemones.getPokemones();
        let lstFiltrada = []
        if (parametro !== undefined) {
            for (const i of lstPokemones) {
                if (i.name.english.toString().toLowerCase().indexOf(parametro) != -1) {
                    lstFiltrada.push(i)
                }
            }
            lstPokemones = lstFiltrada
        }

        res.json(lstPokemones);
    }

    async getById(req: any, res: any) {
        const idPokemon = Number.parseInt(req.params.id);
        const objPokemones = new pokemonesData.Datos();
        const lstPokemones = await objPokemones.getPokemonById(idPokemon);
        const respuesta = lstPokemones.length == 1 ? lstPokemones[0] : lstPokemones;
        res.json(respuesta);
    }
    
    async getBySecuencia(req: any, res: any) {
        const prmInicio = Number.parseInt(req.params.inicio);
        const prmFin = Number.parseInt(req.params.fin);
        let tipo = req.params.tipo;

        if(tipo == undefined){
            tipo = ''
        }

        const objPokemones = new pokemonesData.Datos();
        const lstPokemones = await objPokemones.getPokemonPorRango(prmInicio, prmFin, tipo);        

        res.json(lstPokemones);
    }

}