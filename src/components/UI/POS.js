import styled from 'styled-components';

export const POS = styled.div`
    align-items: center;
    overflow: scroll;
    overflow-y: scroll;
    position: relative;
    -webkit-overflow-scrolling: touch;

    > * {
        align-self: start;
    }

    ul {
        list-style: none;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
        padding: 0;
        margin: 0;
    }


    li {
      align-self: start;
      
`;
