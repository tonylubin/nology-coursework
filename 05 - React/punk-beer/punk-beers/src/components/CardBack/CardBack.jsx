import React from 'react';
import styles from './CardBack.module.scss';

const CardBack = (props) => {

    const {description, first_brewed, ph, food_pairing, ibu} = props;

    return (
        <div className={styles.cardBack}>
            <h3>Description</h3>
            <p  className={styles.foodPairing}>{description}</p>
            <h3>Pairs well with</h3>
            <p className='pairedFood'>{food_pairing.join(", ")}</p>
            <h3>First brewed in</h3>
            <p>{first_brewed}</p>
            <span>pH: {ph}</span><span>IBU: {ibu}</span>            
        </div>
    )
}

export default CardBack
