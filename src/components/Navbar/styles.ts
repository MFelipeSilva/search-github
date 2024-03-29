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

  p {
    color: #fff;
    font-size: 14px;
    opacity: 0.9;
    cursor: pointer;
  }

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

  div {
    display: flex;
    align-items: center;

    svg {
      color: #fff;
      font-size: 25px;
      margin-left: 10px;
    }
  }

  @media (max-width: 600px) {
    padding: 0 25px 0 25px;
  }
`;

export const ContentUser = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;

  margin-right: 30px;

  img {
    border-radius: 50%;
  }

  p + img {
    margin-left: 15px;
  }
`;