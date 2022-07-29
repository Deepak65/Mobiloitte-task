import React from "react";
import styled from "styled-components";
import BlogCard from "./blogCard";

const MainDiv = styled.div`
  width: 100%;
  padding: 49px 67px 61px 58px;
`;
const FormDiv = styled.div`
  display: flex;
  justify-content: space-between;
`;
const TextPara = styled.p`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  color: #002e5b;
  margin: 0 0 38px 0;
`;
const ButtonDiv = styled.button`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  color: #3aade1;
  height: 23px;
  background: transparent;
  border: none;
`;
const FavouriteData = [
  {
    id: 1,
    LogoR: "blogImage1.svg",
    ParaN:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo.",
  },
  {
    id: 2,
    LogoR: "blogImage2.svg",
    ParaN:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo.",
  },
  {
    id: 3,
    LogoR: "blogImage3.svg",
    ParaN:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo.",
  },
];

export default function BlogsComponent() {
  return (
    <>
      <MainDiv>
        <FormDiv>
          <TextPara>Blogs</TextPara>
        </FormDiv>

        <div className="wrapper-favourite-card">
          <ul className="auto-grid-favourite-card">
            {FavouriteData.map((Item) => (
              <BlogCard LogoR={Item.LogoR} ParaN={Item.ParaN} />
            ))}
          </ul>
        </div>
        <FormDiv>
          <TextPara>Blogs 2021</TextPara>
          <ButtonDiv>View more</ButtonDiv>
        </FormDiv>

        <div className="wrapper-favourite-card">
          <ul className="auto-grid-favourite-card">
            {FavouriteData.map((Item) => (
              <BlogCard LogoR={Item.LogoR} ParaN={Item.ParaN} />
            ))}
          </ul>
        </div>
        <FormDiv>
          <TextPara>Style Library</TextPara>
          <ButtonDiv>View more</ButtonDiv>
        </FormDiv>

        <div className="wrapper-favourite-card">
          <ul className="auto-grid-favourite-card">
            {FavouriteData.map((Item) => (
              <BlogCard LogoR={Item.LogoR} ParaN={Item.ParaN} />
            ))}
          </ul>
        </div>
      </MainDiv>
    </>
  );
}
