import styled from 'styled-components';

export const Header = styled.div`
    background-color: ${({ theme }) => theme.colors.primary};
    color: white;
    border-radius: 15px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
    display: flex;
    justify-content: center;
    align-items: center;

    img {
        height: 50px;
        width: 50px;
        margin: 0 10px;
    }
`;
