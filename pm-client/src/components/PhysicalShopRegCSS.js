import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle2 = createGlobalStyle`
  html, body {
    position: relative;
   min-height: 100vh;
   min-width:100vw;
   background-color:  #ffffff;
   display: flex;
   align-items: center;
   justify-content: center;
   font-family: "Fira Sans", Helvetica, Arial, sans-serif;
   -webkit-font-smoothing: antialiased;
   -moz-osx-font-smoothing: grayscale;
   margin-top:30px;
  
  }
`;

export const Root2 = styled.div`
  background-color: #FFE7D7;

  border-radius: 0px;
  height: 83vh;
  width: 90vw;
  margin-top:2rem;
  position: relative;
  // overflow: hidden;
  overflow-x: hidden;
                overflow-y: auto;
  @media(width<800px){
    width: 90vw;
    height: 115vh;
    margin-top:20rem;
  }
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

  img{
    position:absolute;
    width:200px;
    left:-160px;
    top:-45px;
    z-index:1;
    @media(width<800px){
      display:none;
    }
  }

  &::after {
    content: "";
    opacity: 0.8;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-repeat: no-repeat;
    background-position: left bottom;
    background-size: cover;
  }
`;

export const PhysicalRegContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: 90%;
  z-index: 5;
  transition: all 0.3s ease;
  ${props =>
    props.slideUp === true
      ? `top: 5%;
   -webkit-transform: translate(-50%, 0%);
   -webkit-transition: all 0.3s ease;`
      : null}
`;

export const PhysicalRegForm = styled.div`
  border-radius: 10px;
  // background-color: green;
  display:flex;
  flex-direction:row;
  @media(width<1000px){
    flex-direction:column;
}
  justify-content:space-between;
  overflow: hidden;
  margin-top: 10px;
  opacity: 1;
  visibility: visible;
  transition: all 0.3s ease;

  ${props =>
    props.slideUp === true
      ? `
    opacity: 0;
    visibility: hidden;
  `
      : null}

    div{
      display:flex;
      flex-direction:column;
      div{
        display:flex;
        flex-direction:row;
      }
    }
    div.dropdown{
      display:flex;
      padding: 1rem 0;
      
    }
    div.dropdown label{
      padding: 10px 5px;
      line-height: 30px;
      font-size: 14px;
    }
    
    div.dropdown select{
      border: 0;
      outline: none;
      box-shadow: none;
      display: block;
      // height: 30px;
      // line-height: 30px;
      padding: 0px 20px;
      border-bottom: 1px solid #eee;
      font-size: 12px;
      border-radius:10px;
      border: 3px solid #f0ae82;
      background-color:#ffffff;
    }

`;

export const PhysicalRegButton = styled.button`
  background-color: rgba(0, 0, 0, 0.4);

  color: rgba(256, 256, 256, 0.7);
  border: 0;
  border-radius: 10px;
  
  display: block;
  margin: 15px auto;
  padding: 15px 45px;
  width: 100%;
  font-size: 13px;
  font-weight: bold;
  cursor: pointer;
  opacity: 1;
  visibility: visible;
  transition: all 0.3s ease;

  &:hover {
    transition: all 0.3s ease;
    background-color: rgba(0, 0, 0, 0.8);
  }

  ${props =>
    props.slideUp === true
      ? `
    opacity: 0;
    visibility: hidden;
    `
      : null}
`;

export const PhysicalRegFormTitle = styled.h2`
  color: #000;
  font-size: 1.7em;
  text-align: center;
  width:100%;
  margin:2px;
  ${props =>
    props.slideUp === true
      ? `
    font-size: 1em;
    cursor: pointer;
  `
      : null}
      div{
        display:flex;
        justify-content:center;
        color:#a05e33;
      }
`;

export const PhysicalRegInput1 = styled.input`
  border: 0;
  outline: none;
  box-shadow: none;
  display: block;
  height: 30px;
  line-height: 30px;
  padding: 8px 15px;
  border-radius:10px;
  border: 3px solid #f0ae82;
  width: 100%;
  font-size: 12px;
  margin:7px;
  // background-color:black;

  &::placeholder {
    color: rgba(0, 0, 0, 0.4);
  }

`;
export const PhysicalRegInput2 = styled.input`
  border: 0;
  outline: none;
  box-shadow: none;
  border-radius:10px;
  border: 3px solid #f0ae82;
  display: block;
  height: 30px;
  line-height: 30px;
  padding: 8px 15px;

  width: 100%;
  font-size: 12px;
  margin:7px;

  &::placeholder {
    color: rgba(0, 0, 0, 0.4);
  }

`;


export const InputWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;