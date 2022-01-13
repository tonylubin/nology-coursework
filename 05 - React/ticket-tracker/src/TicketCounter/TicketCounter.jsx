import React, { useState } from "react";
import styles from "./TicketCounter.module.scss";

const TicketCounter = () => {
  const [currentTicketTotal, setCurrentTicketTotal] = useState(0);

  const ticketIncrement = () => {
    setCurrentTicketTotal(currentTicketTotal + 1);
  };

  const ticketDecrement = () => {
    if(currentTicketTotal === 0) {
      setCurrentTicketTotal(0)
    } else {
      setCurrentTicketTotal(currentTicketTotal - 1);
    }
  };

  return (
    <section className={styles.counterContainer}>
      <h4>Ticket Count</h4>
      <div className={styles.buttonAction}>
        <button
          className={styles.buttonAction__button}
          onClick={ticketIncrement}
        >
          +
        </button>
        <p>{currentTicketTotal}</p>
        <button
          className={styles.buttonAction__button}
          onClick={ticketDecrement}
        >
          -
        </button>
      </div>
    </section>
  );
};

export default TicketCounter;
