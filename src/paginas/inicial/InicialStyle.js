import styled from "styled-components";
import imagemBg from "./../../assets/img/background.png"

export const Parte1 = styled.h2`
    display: flex;
    background-color: black;
    height: 10vh;
    margin: 0;
    color: #fff;
    justify-content: flex-start;
    align-items: center;
    h2{
        margin: 0 0 0 2vw;
    }
`

export const Pai = styled.div`
    .imagemInicial{
        background-image: url(${imagemBg});
        background-size: contain;
        background-position: center;
        height: 100vh;
    }
    background-color: aqua;
`
export const Parte2 = styled.div`
    display: flex;
    background-color: #000;
    justify-content: center;
    align-items: center;
    height: fit-content;
    min-height: 90vh;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    color: white;
`
// export const Titulo = styled.h2`
//     color: red;
// `
// export const Titulo = styled.h2`
//     color: red;
// `
// export const Titulo = styled.h2`
//     color: red;
// `