import React,{useState } from "react";
import { Container, Nav} from "./styles";

import logo from "../../assets/logo.png";
import { auth } from "../../services/firebase";
import { GithubAuthProvider, signInWithPopup, User } from "firebase/auth";


export const Navbar = () => {
  const [user, setUser] = useState<User>({} as User);

  const handleGithubSignIn = () => {
    const provider = new GithubAuthProvider();

    signInWithPopup(auth, provider)
      .then((result) => {
        return setUser(result.user);
      })
      .catch((error) => {
        return console.log(error);
      });
      
  };


  return (
    <Container>
      <Nav>
      <img src={logo} alt="logo" />

      <ul>
        <li>
          <a onClick={handleGithubSignIn}>Sign In</a>
        </li>
        <li>
          <a href="https://github.com/signup?ref_cta=Sign+up&ref_loc=header+logged+out&ref_page=%2F&source=header-home">
            Sign Up
          </a>
        </li>
      </ul>
      </Nav>
    </Container>
  );
};
