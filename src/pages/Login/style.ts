import React from 'react';
import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    color: black;
    background-color: white;
    flex-direction: row;

    .leftSide {
        flex: 1;
        
        img {
            object-fit: cover;
            width: 100%;
            height: 100vh;
        }
    }

    .rightSide {
        display: flex;
        justify-content: center;
        align-items: center;
        flex: 1;
    }
`;