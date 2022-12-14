import styled, { keyframes } from 'styled-components';

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Spinner = styled.div`
    animation: ${rotate360} 1s linear infinite;
    translate: -50%, -50%;
    position: fixed;
    top: 50%;
    left: 50%;
    border-top: 2px solid #db3943;
    border-right: 2px solid #db3943;
    border-bottom: 2px solid #db3943;
    background: transparent;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export default Spinner;
