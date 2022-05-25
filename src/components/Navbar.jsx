import {  Button, ButtonGroup } from "@chakra-ui/react";
import "./Navbar.css"
export const Navbar = () => {
  return (
    <div className="body">
    <div className="Navbar">
      <div className="left">
        <h4>4d</h4>
      </div>
      <div className="right">
        <p className="SignIn">Sign In</p>
      
  <Button className="b1" colorScheme='rgb(81,57,147)' variant='outline'>
  Sign Up
  </Button>
  <Button colorScheme='teal' variant='solid' bg="rgb(105,102,211)">
  Post a Job 🚀
  </Button>

      </div>
    </div>
    </div>
  );
};
