import React, { useState } from "react";
import * as Styles from "./styles";

import logo from "../../assets/logo.png";
import { FaSignOutAlt } from "react-icons/fa";
import { auth } from "../../services/firebase";
import { GithubAuthProvider, signInWithPopup, signOut, User } from "firebase/auth";

export const Navbar = () => {
  const [user, setUser] = useState<User | false>();

  const handleGithubSignIn = () => {
    const provider = new GithubAuthProvider();

    signInWithPopup(auth, provider).then((result) => {
      return setUser(result.user);
    });
  };

  const handleGithubSignOut = () => {
    signOut(auth).then((): void => setUser(false))
  };

  return (
    <Styles.Container>
      <Styles.Nav>
        <img src={logo} alt="logo" />

        <ul>
          {!user && (
            <li>
              <p onClick={handleGithubSignIn}>
                Sign In
              </p>
            </li>
          )}

          {user && (
            <Styles.ContentUser>
              <p>
                {" "}
                Bem vindo, <b>{user?.displayName}</b>!
              </p>
              <img src={user?.photoURL || ""} alt="" />
            </Styles.ContentUser>
          )}

          {!user && (
            <li>
              <a href="https://github.com/signup?ref_cta=Sign+up&ref_loc=header+logged+out&ref_page=%2F&source=header-home">
                Sign Up
              </a>
            </li>
          )}

          {user && (
            <div>
              <p onClick={handleGithubSignOut}>Sair </p>
              <FaSignOutAlt />
            </div>
          )}
        </ul>
      </Styles.Nav>
    </Styles.Container>
  );
};
