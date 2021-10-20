import React,{useState,useContext} from 'react';
import Modal from 'react-modal';
import { FaUser } from "react-icons/fa";
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { If } from 'rc-if-else';
import {  NavLink } from "react-router-dom";
import './css/style.css'
const customStyles = {
  content: {
    top: '87%',
    left: 'auto',
    right: '35%',
    bottom: '5%',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width:'30%',
    height:'40%',
    backgroundColor:'#212121',
    opacity:'0.9',
  },
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#root');

export default function Popup1() {

  const [email,setEmail]=useState();
  const [password,setPassword]=useState();
  const [loginStatus,setLoginStatus]=useState();
  let subtitle;
  let user=window.sessionStorage.getItem("username");
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const linkStyle = {
    margin: "1rem",
    textDecoration: "none",
    color: "#fff"
  };
  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = 'white';
  }

  function closeModal() {
    setIsOpen(false);
  }

   /*code for login ends here */
  return (
    <div>
      <If condition={!user}>
        <NavLink className="navstyle" to="#" onClick={openModal}>Login</NavLink>
      </If>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2 style={{color:"white"}} ref={(_subtitle) => (subtitle = _subtitle)}>Login</h2>
        <h6>{loginStatus}</h6>
        <button className="close btn btn-outline-light" onClick={closeModal}>X</button>
        <form className="w3-animate-zoom">
          <input type="Email" Placeholder="Email" className="ip" onChange={(event)=>{
                setEmail(event.target.value);
            }} required/>
          <input type="Password" Placeholder="Password" className="ip" onChange={(event)=>{
                setPassword(event.target.value);
            }} required/>
          <Button>Submit</Button>
        <Link to="/forgetpassword" style={linkStyle}>Forget Password </Link>

        </form>
      </Modal>
    </div>
  );
}
