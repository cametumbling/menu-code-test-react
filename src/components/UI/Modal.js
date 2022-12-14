import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import { Button } from './Button';

const portalRoot = document.getElementById('portal-root');
const Background = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: rgba(255, 255, 255, 0.8);
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 100;
`;

const Content = styled.div`
    background-color: #fff;
    padding: 20px;
    border-radius: 20px;
    min-width: 40%;
    max-width: 90%;
    max-height: 90%;
    box-shadow: 0 3px 15px -3px rgba(0, 0, 0, 0.2);
    position: relative;
    z-index: 100;
`;

const Modal = (props) => {
    return ReactDOM.createPortal(
        <>
            <Background onClick={props.onConfirm}>
                <Content>
                    <h2>{props.title}</h2>
                    <p>{props.message}</p>
                    <Button onClick={props.onConfirm}>Okay</Button>
                </Content>
            </Background>
        </>,
        portalRoot
    );
};

export default Modal;
