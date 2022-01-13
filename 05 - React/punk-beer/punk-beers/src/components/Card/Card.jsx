import React from "react";
import CardFront from "../CardFront";
import CardBack from "../CardBack";
import styles from "./Card.module.scss";

const Card = (props) => {
  const getBeerCard = (props) => {
    const {
      id,
      image_url,
      name,
      abv,
      tagline,
      ph,
      first_brewed,
      description,
      ibu,
      food_pairing,
    } = props;

    return (
      <section className={styles.cardDisplay} key={id} >
        <div className={styles.cardDisplay__front}>
          <CardFront
            name={name}
            abv={abv}
            tagline={tagline}
            image={image_url}
          />
        </div>
        <div className={styles.cardDisplay__back}>
          <CardBack
            food_pairing={food_pairing}
            ibu={ibu}
            ph={ph}
            description={description}
            first_brewed={first_brewed}
          />
        </div>
      </section>
    );
  };

  return <>{props.beersSearched.map(getBeerCard)}</>;
};

export default Card;
