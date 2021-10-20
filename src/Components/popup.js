import React,{useState} from 'react';
import Modal from 'react-modal';
import './css/style.css'
import { FaUser } from "react-icons/fa";
import { Button } from 'react-bootstrap';
import { If } from 'rc-if-else';
import {  NavLink } from "react-router-dom";
const customStyles = {
  content: {
    top: '75%',
    left: 'auto',
    right: '35%',
    bottom: '5%',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width:'30%',
    height:'60%',
    backgroundColor:'#212121',
    opacity:'0.9',
  },
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#root');

export default function Popup() {
  const [username,setUsername]=useState();
  const [email,setEmail]=useState();
  const [password,setPassword]=useState();
  const [status,setStatus]=useState();
  const [number,setNumber]=useState();
  const [confirm,confirmPassword]=useState();
  let subtitle;
  let user=window.sessionStorage.getItem("username");
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = 'white';
  }

  function closeModal() {
    setIsOpen(false);
    window.location.reload();
  }

  return (
    <div>
      <If condition={!user}>
      <NavLink className="navstyle" to="#" onClick={openModal}>
          Sign-up
      </NavLink>
      </If>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Signup</h2>
        <button className="close btn btn-outline-light" onClick={closeModal}>X</button>
      <If condition={status}>
          <h6>
            {status}
          </h6>
      </If>
        <form className="w3-animate-zoom">
          <input type="text" Placeholder="Full Name" className="ip" onChange={(event)=>{
            setUsername(event.target.value);
        }} required  />
          <input type="Email" Placeholder="Email" className="ip"  onChange={(event)=>{
            setEmail(event.target.value);
        }} required  />
          <input type="Password" Placeholder="Set Password" className="ip"  onChange={(event)=>{
            setPassword(event.target.value);
        }} required  />
        <input type="Password" Placeholder="Confirm Password" className="ip"  onChange={(event)=>{
          confirmPassword(event.target.value);
      }} required  />
      <input type="text" minlength="10" maxlength="10" Placeholder="Phone Number" className="ip"  onChange={(event)=>{
        setNumber(event.target.value);  }} required  />
          <Button variant="primary">Submit</Button>

        </form>
      </Modal>
    </div>
  );
}
