import React, { useEffect, useState } from "react";
import UserForm from "../components/UserForm";
import UserTable from "../components/UserTable";
import { fetchUsers } from "../services/api";
import Navbar from "../components/Navbar";

interface User {
  id: number;
  fullName: string;
  age: number;
  address: string;
}

const Dashboard: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);

  const loadUsers = async () => {
    try {
      const data = await fetchUsers();
      setUsers(data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  useEffect(() => {
    loadUsers();
  }, []);

  return (
    <>
      {/* <Navbar /> */}
      <div className="container mt-5">
        <UserForm onUserCreated={loadUsers} />
        <div className="mt-5">
          <UserTable users={users} />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
