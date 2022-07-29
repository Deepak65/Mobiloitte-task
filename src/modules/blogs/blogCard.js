import React from "react";
import styled from "styled-components";
import { useHistory} from "react-router-dom"



const ContainerMl = styled.div`
  display: flex;
`;

const ParaT = styled.p`
  width: 100%;
  font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 21px;
text-align: center;

color: #000000;
`;


const Contain = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 411px;
  border: 1px solid rgba(31, 31, 31, 0.2);
  border-radius: 10px;
`;

const DibV = styled.div`
padding: 28px 18px 0px 19px;
`;
const ImgTag = styled.img`
width:100%;
border-radius:10px;
// height:266px;
`
export default function BlogCard(props) {
 
  return (
    <>

            <ContainerMl >
                <Contain>
                <div style={{position: "relative"}}>
                 {/* <img src="images/RectBlog.png" width="400px " height="195px " alt=" logo"/> */}
                 <ImgTag src={props?.LogoR} />
                 </div>
                 <DibV>
                   <ParaT>{props?.ParaN}</ParaT>
                 </DibV>
               </Contain>
               </ContainerMl>
                </>
  );
}
