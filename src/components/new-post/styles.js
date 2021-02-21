import styled from 'styled-components'

export const OpenModal = styled.button`
width: 50px;
height: 50px;
background-color: black;
color: white;
font-size: 32px;
position: fixed;
bottom: 20px;
right: 20px;
border: none;
border-radius:50px;
`;

export const ModalTitle = styled.h2`
color: black!important;
text-align: center;
`;

export const CloseModal = styled.button`
border-radius: 20px;
width: 20px;
height: 20px;
border: none;
background-color: black;
color: white;
font-weight: bolder;
position: absolute;
top: 10px;
right:10px;
`;

export const PostContent = styled.div`
display: flex;
flex-direction: column;

`;

export const PostInputs = styled.input`
width: 80%;
height: 40px;
margin: 10px auto;
background-color: #f5f5f5;
border: 1px solid #dbdbdb;
`;  

export const InputFile = styled.input`
margin: 10px auto;
`;

export const PostButton = styled.button`
background-color: black;
color: white;
border: none;
width: 100px;
height: 40px;
border-radius: 5px;
margin: 10px auto;

`;