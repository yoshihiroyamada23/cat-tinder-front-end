import React from "react";
import { useParams } from "react-router-dom";


const CatShow = ({ cats }) => {
  const { id } = useParams();
  const currentCat = cats.find((item) => item.id === +id);
  console.log(currentCat);

  return (
    <>
      <h1>CatShow Page</h1>
      <img
        src={currentCat?.image}
        alt="profile of all our cats friends"
        className="cat-profile-pic"
      />

      <p>{currentCat?.name}</p>
      <p>{currentCat?.age}</p>
      <p>{currentCat?.enjoys}</p>
    </>
  )
}
export default CatShow
