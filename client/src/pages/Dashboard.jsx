import { useContext } from "react";
import { UserContext } from "../../context/userContext";

export default function Dashboard() {
  const { user } = useContext(UserContext);
  return (
    <div>
      <h3>Dashboard</h3>
      {!!user && <h2>Hi {user.name}</h2>}
    </div>
  );
}
