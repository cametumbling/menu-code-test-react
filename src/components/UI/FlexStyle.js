import styled from 'styled-components';

export const Flex = styled.div`
    display: grid;
    grid-template-columns: 2fr 1fr;
    align-items: center;
    & > div,
    & > ul {
        flex: 2;
    }
    @media (max-width: ${({ theme }) => theme.mobile}) {
        display: flex;
        flex-direction: row;
        flex-direction: column-reverse;
        text-align: center;
        & li:first-child {
            margin-top: 30px;
        }
    }
`;
