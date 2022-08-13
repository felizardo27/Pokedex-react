import React from 'react';
import styles from './Botao.module.scss';

interface Props{
    children: React.ReactNode;
    onClick: () => void;
}

export default function Botao( { children, onClick }: Props ){
    return (
        <button onClick={onClick}>
            <span className={styles.botao}> 
                {children}
            </span>
        </button>
    );
}