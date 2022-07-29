import React, {useState} from "react";
import styled from "styled-components";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";
import { useHistory } from "react-router";

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
    alignSelf: "center",
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const MainDiv = styled.div`
  width: 100%;
  padding: 203px 67px 180px 58px;
`;
const RoomDiv = styled.div`
  text-align: center;
`;
const CreateBtn = styled.button`
  width: 257px;
  height: 60px;
  left: 592px;
  top: 322px;
  background: #3aade1;
  border-radius: 10px;
  color: white;
  border: none;
  margin-bottom: 45px;
`;
const RoomPara = styled.p`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 21px;
  color: #000000;
  margin-bottom: 33px;
`;

const DivInput = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
const InputField = styled.input`
  width: 469px;
  height: 50px;
  background: rgba(181, 193, 204, 0.43);
  border-radius: 5px;
  border: none;
  padding-left: 18px;
`;
const RoomBtn = styled.button`
  width: 469px;
  height: 50px;
  background: #3aade1;
  border-radius: 10px;
  border: none;
  color: #fff;
`;
const SpanText = styled.span`
  color: red;
  font-size: 14px;
  font-family: "Roboto";
  font-style: normal;
`;
const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <img src="crossIcon.svg" />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: "55px 61px 0px 61px",
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

export default function AddRoomComponent() {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [pay, setPay] = useState("");
  const [open, setOpen] = React.useState(false);
  const [nameError, setNameError] = useState("")
  const [dateError, setDateError] = useState("")
  const [payError, setPayError] = useState("")

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const history = useHistory();
  const handleClick = () => {
    history.push("/congrats-room")
  }

  const onSubmit = () => {
    const nameError = !name ? "Please enter name" : "";
    const dateError = !date ? "Please enter date" : "";
    const payError = !pay ? "Please enter who will pay for the Dresses" : "";
    
    setNameError(nameError);
    setDateError(dateError);
    setPayError(payError);
  }
  return (
    <>
      <MainDiv>
        <RoomDiv>
          <CreateBtn onClick={handleClickOpen}>create Room</CreateBtn>
          <RoomPara>
            You can create a room & share its invite link on social media.
          </RoomPara>
          <RoomPara>
            Invite your friends & family or social media buddies.
          </RoomPara>

          <RoomPara>
            To make You decide Your Special dress for special ocassion!
          </RoomPara>
        </RoomDiv>
      </MainDiv>

      <div>
        <Dialog
          onClose={handleClose}
          aria-labelledby="customized-dialog-title"
          open={open}
          className="Dialog-container"
        >
          <DialogTitle id="customized-dialog-title" onClose={handleClose}>
            Create a Chat Room
          </DialogTitle>
          <DialogContent>
            <DivInput>
              <InputField
                placeholder="Enter a Name for your Room / Event Name"
                value={name}
                onChange={(e)=> {setName(e.target.value); setNameError("")}}
              />
              <SpanText>{nameError}</SpanText>
              <InputField
                placeholder="Event Date"
                value={date}
                onChange={(e)=> {setDate(e.target.value); setDateError("")}}
              />
              <SpanText>{dateError}</SpanText>
              <InputField
                placeholder="Who will pay for the Dresses"
                value={pay}
                onChange={(e)=> {setPay(e.target.value); setPayError("")}}
              />
              <SpanText>{payError}</SpanText>
              {name === "" || date === "" || pay === "" ? <RoomBtn onClick={onSubmit}>Create Room</RoomBtn> : <RoomBtn onClick={handleClick}>Create Room</RoomBtn>}
              {/* <RoomBtn onClick={()}>Create Room</RoomBtn> */}
            </DivInput>
          </DialogContent>
          <DialogActions></DialogActions>
        </Dialog>
      </div>
    </>
  );
}
