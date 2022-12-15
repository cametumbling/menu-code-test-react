import styled, { css } from 'styled-components';

export const Flex = styled.div`
    display: grid;
    grid-template-columns: 2fr 1fr;
    align-items: center;
    overflow: scroll;
    overflow-y: scroll;
    -webkit-overflow-scrolling: touch;
    & > div,
    & > ul {
        flex: 2;
    }

    @media (max-width: ${({ theme }) => theme.mobile}) {
        display: flex;
        flex-direction: row;
        text-align: center;
        align-items: flex-start;
        width: 100%;
        & li:first-child {
            margin-top: 20px;
        }
    }
    @media (max-width: 320px) {
        display: flex;
        flex-direction: column-reverse;
    }
`;
