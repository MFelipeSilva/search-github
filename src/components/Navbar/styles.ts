import styled from 'styled-components';

export const Container = styled.div`
  
`;

export const Nav = styled.nav`
  display: flex;
  min-height: 4.5em;
  padding: 0 50px 0 50px;
  background: rgba(51, 30, 56, 0.7) ;
  box-shadow: rgb(0 0 0 / 15%) 0px 7px 6px;

  position: fixed;
  left: 0;
  right: 0;
  z-index: 2;

  align-items: center;
  justify-content: space-between;

  img {
    width: 35px;
    height: 35px;
  }

  ul {
    display: flex;
    align-items: center;
    flex-direction: row;

    li {
      list-style: none;

      a {
        color: #fff;
        font-size: 14px;
        cursor: pointer;
        text-decoration: none;
      }

      
    }
    
    li:nth-child(1) {
      padding: 7px 10px 7px 10px;
      border-radius: 8px;
      border: 1px solid #fff;
    }


    li + li {
      margin-left: 30px;
    }
  }

  @media (max-width: 600px) {
    padding: 0 25px 0 25px;
  }
`;