import React from "react";
import { sort } from "fast-sort";
import Link from "next/link";

interface User {
  id: number;
  name: string;
  email: string;
}
interface Props {
  sortOrder: string;
}

const UserTable = async ({ sortOrder }: Props) => {
  // fetch users from https://jsonplaceholder.typicode.com/users
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users: User[] = await res.json();
  // sort users by name
  let sortedUsers: User[] = sort(users).asc(
    sortOrder === "email" ? (user) => user.email : (user) => user.name
  );

  return (
    <div>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>
              <Link href="/users?sortOrder=name">Name</Link>
            </th>
            <th>
              <Link href="/users?sortOrder=email">Name</Link>
            </th>
          </tr>
        </thead>
        <tbody>
          {sortedUsers.map((user: User) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
