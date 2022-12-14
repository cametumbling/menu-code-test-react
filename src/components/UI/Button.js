import styled, { css } from 'styled-components';

export const Button = styled.button`
    border-radius: 50px;
    border: none;
    margin: 5px;
    flex: 1 0 auto;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
    cursor: pointer;
    font-size: 16px;
    font-weight: 700;
    padding: 15px;
    text-align: center;
    text-transform: capitalize;
    background-color: ${({ bg, theme }) => bg || theme.colors.primary};
    color: ${({ color }) => color || 'white'};
    &:hover {
        opacity: 0.9;
        transform: scale(0.97);
    }
    ${(props) =>
        props.dish &&
        css`
            width: 100px;
            height: 100px;
            border-radius: 10%;
            padding: 15px 1px 0 0;
        `}
    ${(props) =>
        props.course &&
        css`
            width: 250px;
            align-items: stretch;
        `}
    ${(props) =>
        props.diner &&
        css`
            width: 150px;
            padding: 15px 0 15px 10px;
            overflow: hidden;
        `}
`;
