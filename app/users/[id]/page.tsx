import React from "react";
//define props here
interface Props {
  params: { id: number };
}

const UserDetailPage = ({ params: { id } }: Props) => {
  return (
    <>
      <div>UserDetailPage {id}</div>
    </>
  );
};

export default UserDetailPage;
