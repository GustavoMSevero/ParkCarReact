import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;

    h3 {
        text-align: center;
        font-weight: bold;
    }

    .register-box {
        width: 400px;
        box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
        padding: 2rem 4rem;
        border-radius: 0.5rem;
    }

    form {
        margin-top: 2rem;
    }

    .buttons {
        display: flex;
        flex-direction: column;

    }
`;