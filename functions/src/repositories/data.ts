import * as admin from 'firebase-admin';

const serviceAccount = require('../serviceAccount.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: ""
});

const db = admin.firestore()

export class Datos {
    async getPokemones(){

        const pokedexRef = db.collection('pokemones');
        const docsSnap = await pokedexRef.get();
        const pokemones = docsSnap.docs.map(doc => doc.data());

        return pokemones;
    }

    async getPokemonById(id:number){

        const pokedexRef = db.collection('pokemones').where('id', '==', id);
        const docsSnap = await pokedexRef.get();
        const pokemones = docsSnap.docs.map(doc => doc.data());

        return pokemones;
    }

    async getTipos(){

        const pokedexRef = db.collection('tipo');
        const docsSnap = await pokedexRef.get();
        const pokemones = docsSnap.docs.map(doc => doc.data());

        return pokemones;
    }

    async getMovimientos(){

        const pokedexRef = db.collection('movimientos');
        const docsSnap = await pokedexRef.get();
        const pokemones = docsSnap.docs.map(doc => doc.data());

        return pokemones;
    }

    async getPokemonPorRango(inicio: number, fin: number, tipo: string) {
        
        let pokedexRef = null

        if (inicio == 0 && fin == 0) {
            pokedexRef = db.collection('pokemones').where('type', 'array-contains', tipo);
        } else {
            if(tipo !== ''){
                pokedexRef = db.collection('pokemones').where('id', '>=', inicio).where('id', '<=', fin).where('type', 'array-contains', tipo);
            } else {
                pokedexRef = db.collection('pokemones').where('id', '>=', inicio).where('id', '<=', fin);
            }            
        }
        
        const docsSnap = await pokedexRef.get();
        const pokemones = docsSnap.docs.map(doc => doc.data());

        return pokemones
    }
}