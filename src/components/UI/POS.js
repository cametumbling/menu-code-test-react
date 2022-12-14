import styled from 'styled-components';

export const POS = styled.div`
    height: 45vh;
    display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));

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
        padding: 0;
        margin: 0;
    }


    li {
      align-self: start;
`;

//     .pos-categories {
//         position: fixed;
//         left: $base-padding;
//         bottom: $base-padding;
//         z-index: 99;
//         width: calc(100% - 22rem);
//         box-shadow: 1px 1px 6px rgba(0, 0, 0, 0.1);
//         display: flex;
//         align-items: stretch;

//         button {
//             flex: 1 0 auto;
//             padding: $base-padding * 2;
//             background: rgba(255, 255, 255, 0.5);

//             &:last-child {
//                 border-radius: 0 $border-radius $border-radius 0;
//             }

//             &:first-child {
//                 border-radius: $border-radius 0 0 $border-radius;
//             }

//             &.active {
//                 color: #fff;
//                 background-color: rgba(82, 95, 127, 0.95);
//             }
//         }
//     }

//     .pos-products {
//         height: 100vh;
//         overflow-y: scroll;
//         padding: $base-padding;
//         position: relative;
//         -webkit-overflow-scrolling: touch;
//     }

//     .pos-cart {
//         background: #fff;
//         display: grid;
//         align-items: start;
//         grid-template-rows: 6rem auto auto;

//         // Overflow
//         height: 100vh;
//         overflow-y: scroll;
//         -webkit-overflow-scrolling: touch;

//         header {
//             border-bottom: 2px solid $color-lightest-grey;
//             padding: $base-padding * 2 $base-padding;
//             display: flex;
//             align-items: center;
//             justify-content: space-between;

//             > * {
//                 flex: 1 1 auto;
//             }

//             time {
//                 font-weight: normal;
//             }

//             span {
//                 text-align: right;
//             }

//             button {
//                 padding: $base-padding/2 $base-padding;
//                 background-color: $color-light-grey;
//                 border-radius: $border-radius;
//                 text-align: right;

//                 svg {
//                     display: block;
//                     fill: $color-grey-blue;
//                 }

//                 &:active {
//                     background-color: $color-grey-blue;

//                     svg {
//                         fill: #fff;
//                     }
//                 }
//             }
//         }

//         h2,
//         h3 {
//             margin: 0;
//             font-size: 1.25rem;
//             display: inline-block;
//         }

//         li {
//             padding: $base-padding;
//             display: flex;
//             align-items: center;

//             > * {
//                 flex: 0 0 3rem;
//             }

//             figure {
//                 margin-right: $base-padding;

//                 img {
//                     width: 3rem;
//                 }
//             }

//             > span {
//                 flex: 1;
//             }

//             h3 {
//                 display: block;
//                 font-size: 1rem;
//             }
//         }

//         button.confirm {
//             align-self: end;
//             background-color: $color-green;
//             color: #fff;
//             font-size: 1.5rem;
//             margin: 0 $base-padding $base-padding $base-padding;
//             border-radius: $border-radius;
//             padding: $base-padding * 2;
//             line-height: 1;

//             &::after {
//                 content: url('data:image/svg+xml; utf8, <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="rgb(255,255,255)" d="M0 3.795l2.995-2.98 11.132 11.185-11.132 11.186-2.995-2.981 8.167-8.205-8.167-8.205zm18.04 8.205l-8.167 8.205 2.995 2.98 11.132-11.185-11.132-11.186-2.995 2.98 8.167 8.206z"/></svg>');
//                 float: right;
//                 line-height: 1;
//                 width: 1.5rem;
//                 opacity: 0.7;
//                 transform: translateY(1px);
//             }

//             svg {
//                 float: right;
//                 fill: #fff;
//                 opacity: 0.7;
//             }

//             &:active {
//                 &::after {
//                     content: url('data:image/svg+xml; utf8, <svg xmlns="http://www.w3.org/2000/svg" stroke="rgb(255,255,255)" viewBox="0 0 44 44"><g fill="none" fill-rule="evenodd" stroke-width="2"><circle cx="22" cy="22" r="1"><animate attributeName="r" begin="0s" calcMode="spline" dur="1.8s" keySplines="0.165, 0.84, 0.44, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 20"/><animate attributeName="stroke-opacity" begin="0s" calcMode="spline" dur="1.8s" keySplines="0.3, 0.61, 0.355, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 0"/></circle><circle cx="22" cy="22" r="1"><animate attributeName="r" begin="-0.9s" calcMode="spline" dur="1.8s" keySplines="0.165, 0.84, 0.44, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 20"/><animate attributeName="stroke-opacity" begin="-0.9s" calcMode="spline" dur="1.8s" keySplines="0.3, 0.61, 0.355, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 0"/></circle></g></svg>');
//                     opacity: 1;
//                 }
//             }
//         }
//     }

//     .pos-products-list {
//         display: grid;
//         grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));

//         grid-gap: $base-padding;

//         > li {
//             align-self: start;

//             button {
//                 height: 100%;
//                 background-color: $color-light-grey;
//                 border: 0.2rem solid $color-light-grey;
//                 border-radius: $border-radius;
//                 color: $color-grey-blue;
//                 padding: 0;

//                 &:hover,
//                 &:focus {
//                     background-color: #fff;

//                     svg {
//                         fill: $color-green;
//                         transform: scale(1.4);
//                     }
//                 }

//                 &:focus {
//                     outline: none;
//                     transform: scale(1.05);
//                 }

//                 &:active {
//                     transform: scale(0.95);
//                 }
//             }

//             figure {
//                 background: #fff;
//                 border-radius: $border-radius;
//                 overflow: hidden;
//                 padding-bottom: 1rem;

//                 img,
//                 svg {
//                     width: 100%;
//                     height: auto;
//                     object-fit: cover;
//                 }
//             }

//             h3 {
//                 margin: 0;
//                 margin: 0.5rem;
//                 font-size: 1.25rem;
//             }

//             div {
//                 padding: 0.5rem;
//                 text-align: left;
//                 line-height: 2rem;
//                 font-weight: bold;
//             }

//             svg {
//                 float: right;
//                 fill: $color-grey-blue;
//                 margin-top: 0.25rem;
//                 transition: all 0.15s ease-out;
//             }
//         }
//     }
// `;
