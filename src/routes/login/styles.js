import styled from "styled-components";

export const Container = styled.div`
background-color: #f5f5f5;
width: 100%;
height: 100vh;
`;

export const LoginBox = styled.div`
background-color: white;
width: 70%;
height: 60%;
margin: 0 auto;
border: 1px solid #dbdbdb;
box-shadow: #dbdbdb 0px 1px 3px;
max-width: 400px;
text-align: center;
padding: 20px;
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
`;

export const InputsGroup = styled.div`
display: flex;
flex-direction: column;
margin-top: 20px;
margin
`;

export const Input = styled.input`
width: 80%;
margin: 0 auto;
border: 1px solid #dbdbdb;
background-color: #f5f5f5;
height: 30px;
margin-bottom: 10px;
`;

export const LoginButton = styled.button`
width: 180px;
height: 40px;
border: none;
border-radius: 5px;
background-color: black;
color: white;
font-weight: bolder;
margin: 0 auto;
`;

export const FacebookLogin = styled.button`
background-color: #1D71E6;
color: white;
border: none;
width: 80%;
margin: 0 auto;
height: 40px;
margin-bottom: 10px;
border-radius: 5px;
font-weight: bolder;
`;

export const GoogleLogin = styled.button`
background-color: #EA4334;
color: white;
border: none;
width: 80%;
margin: 0 auto;
height: 40px;
margin-bottom: 10px;
border-radius: 5px;
font-weight: bolder;
`;