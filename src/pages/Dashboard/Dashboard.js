import { useEffect, useState } from "react";
import { getUsers } from "../../services/users";
import { DashboardHeader } from "../DashboardHeader/DashboardHeader";
import "./Dashboard.css";

export function Dashboard() {
  const [users, setUsers] = useState([]);

  async function getData() {
    try {
      const { results } = await getUsers();
      setUsers(results);
    } catch (error) {
      console.log(error.message);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <main className="Dashboard">
      <section className="DashboardContainer">
      <DashboardHeader />
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Phone</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {users.map(({ name, email, phone }, i) => (
              <tr key={i}>
                <th>{`${name.last} ${name.first}`}</th>
                <th>{phone}</th>
                <th>{email}</th>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </main>
  );
}
