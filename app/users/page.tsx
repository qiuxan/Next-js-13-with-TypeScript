import React from "react";
import UserTable from "./UserTable";

interface Props {
  searchParams: { sortOrder: string };
}

const UsersPage = ({ searchParams: { sortOrder } }: Props) => {
  return (
    <>
      <h1>UsersPage</h1>
      
      <UserTable sortOrder={sortOrder} />
    </>
  );
};

export default UsersPage;
