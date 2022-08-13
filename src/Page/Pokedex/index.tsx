import axios from 'axios';
import { useEffect, useState } from 'react';
import { IPokemon } from '../../interface/pokemon';
import styles from './Pokedex.module.scss';
import pokedex from '../../assets/pokedex.png';
import Botao from '../../Components/Botao';
import Pesquisa from '../../Components/Pesquisa';

export default function Pokedex() {

    const [count, setCount] = useState<number>(1);
    const [pesquisa, setPesquisa] = useState<string>('');
    const [pokemon, setPokemon] = useState<IPokemon>();


    axios.get(`https://pokeapi.co/api/v2/pokemon/${ 
        pesquisa === '' ? count : pesquisa 
     }/`).then(resposta => setPokemon(
        () => (
            {
                name: resposta.data.name,
                id: resposta.data.id,
                gif: resposta.data.sprites.versions['generation-v']['black-white'].animated['front_default']
            }
        )
    ));

    function passaPokemon() {
        setCount(count => count + 1); 
    }

    function voltaPokemon() {
        setCount(count => count - 1);
        if (count <= 0) {
            setCount(1);
        }
    }

    return (
        <div className={styles.container}>
            <img 
                src={pokemon?.gif} 
                alt={`Gif do ${pokemon?.name}`} 
                className={styles.pokemon}
            />

            <img 
                src={pokedex} 
                alt="Pokedex" 
                className={styles.pokedex} 
            />

            <div className={styles.pokemonData}>
                <span className={styles.number}>{pokemon?.id} - </span>
                <span className={styles.name}>{pokemon?.name}</span>
            </div>

            <Pesquisa setPesquisa={setPesquisa} pesquisa={pesquisa}/>
            
            <div className={styles.voltar}>
                <Botao onClick={() => voltaPokemon()}>
                    Voltar
                </Botao>
            </div>

            <div className={styles.proximo}>
                <Botao onClick={() => passaPokemon() }>
                    Próximo
                </Botao>
            </div>

        </div>
    );
}

