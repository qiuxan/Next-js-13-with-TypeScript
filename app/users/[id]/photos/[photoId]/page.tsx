import React from "react";
//define props here
interface Props {
  params: { id: number; photoId: number };
}

const UserPhotoPage = ({ params: { id, photoId } }: Props) => {
  return (
    <>
      <div>UserPhotoPage {id}</div>
      <div>{photoId}</div>
    </>
  );
};

export default UserPhotoPage;
