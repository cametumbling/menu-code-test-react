import styled from 'styled-components';

export const Card = styled.div`
    display: flex;
    align-items: center;
    background-color: #fff;
    border-radius: 15px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
    margin: 5px;
    padding: 20px;
    flex-direction: ${({ layout }) => layout || 'row'};
    & > div {
        flex: 2;
    }
    @media (max-width: ${({ theme }) => theme.mobile}) {
        flex-direction: column;
    }
`;
