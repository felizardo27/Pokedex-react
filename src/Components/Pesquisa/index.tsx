import styles from './Pesquisa.module.scss';

interface Props {
    pesquisa: string
    setPesquisa: React.Dispatch<React.SetStateAction<string>>
}

export default function Pesquisa({ pesquisa, setPesquisa }: Props) {
    
    return (
        <div className={styles.pesquisa}>
            <input
                type="text"
                placeholder='Pesquise o pokemon'
                value={pesquisa}
                onChange={(e) => setPesquisa(e.target.value)}
            />
        </div>
    );
}