import styles from "./App.module.scss";
import EmployeeCard from "./EmployeeCard/EmployeeCard";
import Header from "./Header/Header";
import data from './data/data';

const App = () => {

  const employeeProfiles = data.map((person, index) => {
    return <EmployeeCard name={person.name} role={person.role} key={index} />
  })

  return (
    <main>
      <Header />
      <section className={styles.cardHolder}>
        {employeeProfiles}      
      </section>
    </main>    
  );
};

export default App;
