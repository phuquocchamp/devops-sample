import React from "react";

interface User {
  id: number;
  fullName: string;
  age: number;
  address: string;
}

interface UserTableProps {
  users: User[];
}

const UserTable: React.FC<UserTableProps> = ({ users }) => {
  return (
    <table className="table table-bordered border-primary">
      <thead className="thead-dark table-primary">
        <tr>
          <th scope="col">No</th>
          <th scope="col">Full Name</th>
          <th scope="col">Age</th>
          <th scope="col">Address</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user, index) => (
          <tr key={user.id}>
            <th scope="row">{index + 1}</th>
            <td>{user.fullName}</td>
            <td>{user.age}</td>
            <td>{user.address}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UserTable;
