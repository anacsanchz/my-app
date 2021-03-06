import styled from 'styled-components'

export const Container = styled.div`
height: 70px;
background-color: white;
box-shadow: #dbdbdb 0px 1px 3px;
padding: 10px;
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
`;

export const LoginButton = styled.s`
background-color: black;
border: none;
color: white;
height: 30px;
border-radius: 5px;
font-weight: bolder;
margin-left: 10px;
`;

export const LogoutContainer = styled.div`
display: flex;
`;

export const UserName = styled.p`
margin-right: 5px;
font-weight: 500;
`;