import styled from "styled-components";

export const ItemContainer = styled.div`
    width: 80%;

    h3 {
        font-size: 32px;
        color: #FAFAFA;
    }

    p {
        font-size:16px;
        color: #FAFAFA60;
        margin-bottom:20px;
    }

    a {
        color: #FAFAFA;
        text-decoration: none;
    }

    hr {
        color: #FAFAFA60;
        margin: 20px 0;
    }

    button {
        background-color: #22272e;
        border: 1px solid #FAFAFA;;
        border-radius: 20px;
        height: 30px;
        width: 120px;
        margin: 5px;
    }

    button.remover {
        border: 2px solid #e76f51;
    }
`