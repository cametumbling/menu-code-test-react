import styled from 'styled-components';

export const POS = styled.div`
    align-items: center;
    overflow: hidden;
    overflow-y: scroll;
    position: relative;
    -webkit-overflow-scrolling: touch;

    > * {
        align-self: start;
    }

    ul {
        list-style: none;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));

        padding: 0;
        margin: 0;
    }


    li {
      align-self: start;
`;
