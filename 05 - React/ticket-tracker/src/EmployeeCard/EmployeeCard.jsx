import React from "react";
import styles from "./EmployeeCard.module.scss";
import TicketCounter from "../TicketCounter/TicketCounter";
import EmployeeInfo from "../EmployeeInfo/EmployeeInfo";

const EmployeeCard = (props) => {
  return (
    <>
      <div className={styles.card}>
        <EmployeeInfo name={props.name} role={props.role}/>
        <TicketCounter />
      </div>
    </>
  );
};

export default EmployeeCard;
