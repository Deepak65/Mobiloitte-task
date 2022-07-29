import React from "react";
import styled from "styled-components";
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import DirectionsIcon from '@material-ui/icons/Directions';

const useStyles = makeStyles((theme) => ({
    root: {
      padding: '2px 4px',
      display: 'flex',
      alignItems: 'center',
      width: "100%",
      height: "57px",

background: "#DFE4E9",
    },
    input: {
      marginLeft: theme.spacing(1),
      flex: 1,
    },
    iconButton: {
      padding: 10,
    },
    divider: {
      height: 28,
      margin: 4,
    },
  }));

const MainDiv = styled.div`
  width: 100%;
  padding: 49px 84px 61px 87px;
`;
const ChatBoxDiv = styled.div`
// width: 330px;
width:100%;
height: 57px;
background: #DFE4E9;
text-align: right;
padding: 13px 12px 0px 0;
`
const SearchIcon = styled.img`
margin-right: 29px;
`;
const ExtendIcon = styled.img`
`
const ExtendIconSec = styled.img`
height: 25px;
    margin-top: 6px;
`
const NameDiv = styled.div`
border: 1px solid #DCDCDC;
background: #fff;
height: 572px;
`;
const UserDiv = styled.div`
display:flex;
box-sizing: border-box;
/* position: absolute; */
width: 100%;
height: 57px;
/* left: 87px; */
/* top: 235px; */
background: #FFFFFF;
border: 1px solid #DCDCDC;
padding: 9px 0px 9px 15px;
`;
const UserNameDiv = styled.div`
font-family: 'Roboto';
font-style: normal;
font-weight: 500;
font-size: 12px;
line-height: 14px;
/* identical to box height */


color: #000000;
`
const MsgDiv = styled.div`
font-family: 'Roboto';
font-style: normal;
font-size: 10px;
line-height: 12px;
/* identical to box height */


color: #000000;
`
const DetailDiv = styled.div`
padding: 6px 0px 0 12px;
`
const DetailDivSec = styled.div`
padding: 13px 0px 0 12px;
`
const DpImage = styled.img`
`
const FirstCol = styled(Col)`
padding:0 0 0 0 !important;
`
const ActiveDiv = styled.div`
width: 100%;
height: 57px;
left: 416px;
top: 179px;
background: #FFFFFF;
border: 1px solid #DCDCDC;
`
const SideDiv = styled.div`
display:flex;
box-sizing: border-box;
/* position: absolute; */
width: 100%;
height: 57px;
/* left: 87px; */
/* top: 235px; */
background: #FFFFFF;
border: 1px solid #DCDCDC;
padding: 9px 26px 9px 15px;
    justify-content: space-between;
`;
const FlexDiv = styled.div`
display:flex;
`
const ContentDiv = styled.div`
height:514px;
border: 1px solid #DCDCDC;
background: #fff;
`;
const BodyDiv = styled.div`
text-align: center;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const FirstLine = styled.p`
font-family: 'Roboto';
font-style: normal;
font-size: 20px;
line-height: 23px;
margin: 0 0 40px 0px;
color: #000000;
`;
const SecondLine = styled.p`
font-family: 'Roboto';
font-style: normal;
font-weight: 500;
font-size: 35px;
line-height: 41px;
color: #000000;

`;
const InputDiv = styled.div`
`

const MicImage = styled.img`
`
const CameraIcon = styled.img`

`
const SendIcon = styled.img`
`
const data = [{
    dp:"dp.svg",
    name:"Jachub",
    msg:"Lorem ipsum dolor sit ....."
},
{
    dp:"dp.svg",
    name:"Jachub",
    msg:"Lorem ipsum dolor sit ....."
},
{
    dp:"dp.svg",
    name:"Jachub",
    msg:"Lorem ipsum dolor sit ....."
},
{
    dp:"dp.svg",
    name:"Jachub",
    msg:"Lorem ipsum dolor sit ....."
}]
export default function ChatBoxComponent() {
    const classes = useStyles();
  return (
    <>
      <MainDiv>
      <Row>
        <FirstCol sm={4}>
            <ChatBoxDiv>
                <SearchIcon src="searchIcon.svg"/>
                <ExtendIcon src="ExtendIcon.svg"/>
            </ChatBoxDiv>
            <NameDiv>
                {data?.map((row)=> {
                    return (
                        <UserDiv><DpImage src={row?.dp}/>
                        <DetailDiv>
                        <UserNameDiv>{row?.name}</UserNameDiv>
                        <MsgDiv>{row?.msg}</MsgDiv>
                        </DetailDiv>
                        </UserDiv>
                    )
                })}
               
                
            </NameDiv>
        </FirstCol>
        <FirstCol sm={8}><ActiveDiv>

        <SideDiv>
            <FlexDiv>
            <DpImage src="dp.svg"/>
                        <DetailDivSec>
                        <UserNameDiv>Jachub</UserNameDiv>
                        </DetailDivSec>
                        </FlexDiv>
                        <ExtendIconSec src="ExtendIcon.svg"/>
                        </SideDiv>
                        <ContentDiv>
                            <BodyDiv><FirstLine>This room has no massages. Be the first say Hi</FirstLine>
                            <SecondLine>Hello.....</SecondLine>
                            </BodyDiv>
                        </ContentDiv>
                        <InputDiv><Paper component="form" className={classes.root}>
      <InputBase
        className={classes.input}
        placeholder="Type a massage........"
        inputProps={{ 'aria-label': 'Type a massage........' }}
      />
      <IconButton  className={classes.iconButton}>
       <MicImage src="mic.svg"/>
      </IconButton>
      <IconButton className={classes.iconButton}>
        <CameraIcon src="cam.svg"/>
      </IconButton>
      <IconButton className={classes.iconButton}>
        <SendIcon src="send.svg"/>
      </IconButton>
    </Paper></InputDiv>
            </ActiveDiv></FirstCol>
      </Row>
      </MainDiv>
    </>
  );
}
