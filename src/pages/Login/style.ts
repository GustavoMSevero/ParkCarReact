import React from 'react';
import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    color: black;
    background-color: white;
    flex-direction: row;

    .leftSide {
        flex: 1;
        min-width: 400px;
        
        img {
            object-fit: cover;
            width: 100%;
            height: 100vh;
        }
    }

    .rightSide {
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 0 8rem;
        flex: 1;
        max-width: 50%;



        .buttons {
            display: flex;
            flex-direction: column;

            div {
                align-self: center;
            }
        }
    }
`;