import React from 'react'
import { useHistory } from 'react-router';
import styled from 'styled-components';
const Nav = styled.div`
  background: white;
  overflow: hidden;
  height: 109px;
  padding: 43px 46px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;
const Logo = styled.div`
  float: left;
`;
const Section = styled.div`
  float: right;
  display: flex;
`;
const Anchors = styled.p`
  padding: 0px 12px;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  /* identical to box height */
  color: #707070;
`;
const SearchImg = styled.img`
  padding: 0px 20px;
`;
const HamImg = styled.img`
  padding: 0px 20px;
`;
function SecondHeader() {
  const history = useHistory();
  const handleClaim = () => {
    history.push("/")
  }
  const handleBlog = () => {
    history.push("/blogs")
  }
  const handleRoom = () => {
    history.push("/add-room")
  }
  const handleBattery = () => {
    history.push("/battery-aggrement")
  }
  const handleVehicle = () => {
    history.push("/paintless-dent-repair")
  }
  const handleRepair = () => {
    history.push("/paintless-dentless-repair")
  }
  return (
    <div>  <Nav>
    <Logo>CompanyLogo</Logo>
    <Section>
      <Anchors onClick={handleBattery}>Battery Aggrement</Anchors>
      <Anchors onClick={handleVehicle}>Vehicle Service</Anchors>
      <Anchors onClick={handleRepair}>Paintless Repair</Anchors>
      <Anchors onClick={handleClaim}>Claim New</Anchors>
      <Anchors onClick={handleBlog}>Blogs</Anchors>
      <Anchors onClick={handleRoom}>Chat Room</Anchors>
      <SearchImg src="# "></SearchImg>
      <HamImg src="#"></HamImg>
    </Section>
  </Nav></div>
  )
}

export default SecondHeader