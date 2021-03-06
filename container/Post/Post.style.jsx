import styled from "styled-components";

export const PostWrapper = styled.article`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const PostFormWrapper = styled.div`
    width: 862px;
    margin-top: 120px;
    display: flex;
    flex-direction: column;
    align-items: center;

    & form {
        display: block;
        width: 100%;
    }
    @media (max-width: 1140px) {
        width: 100%;
        margin-top: 80px;
        padding: 20px;
    }
`;

export const PostTitle = styled.input`
    height: 44px;
    width: 100%;
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 17px;

    line-height: 20px;
    text-indent: 10px;

    border-radius: 5px;
    border: 1px solid #e5e5e5;

    margin-bottom: 10px;

    &:focus {
        outline: none;
        border: 1px solid var(--primary);
    }
`;

export const ContentSection = styled.div`
    display: flex;
    gap: 10px;
    position: relative;
    margin-bottom: 32px;
    width: 100%;

    label {
        position: relative;
    }

    @media (max-width: 1140px) {
        display: flex;
        flex-direction: column;
        margin-bottom: 10px;
        & label {
            /* width: 55%; */
        }
    }
`;

export const DisplayImg = styled.img`
    width: 420px;
    height: 350px;
    object-fit: cover;

    border-radius: 10px;

    @media (max-width: 1140px) {
    }
    @media screen and (max-width: 767px) {
        width: 330px;
    }
`;
export const PostTextarea = styled.textarea`
    width: 100%;
    height: 350px;

    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 17px;

    line-height: 20px;
    resize: none;
    padding: 15px;

    border-radius: 5px;
    border: 1px solid #e5e5e5;

    &:focus {
        outline: none;
        border: 1px solid #45ba66;
    }

    @media (max-width: 1140px) {
        margin-left: 0;
    }
    @media (max-width: 767px) {
        width: 100%;
        height: 200px;
    }
`;

export const RemoveBtn = styled.div`
    position: absolute;
    left: 10px;
    bottom: 10px;
    background-color: transparent;
    border: none;
    cursor: pointer;

    img {
        width: 34px;
        :hover {
            filter: drop-shadow(1px 1px 1px #000);
        }
    }

    @media screen and (min-width: 768px) and (max-width: 1140px) {
    }
    @media screen and (max-width: 767px) {
    }
`;

export const CotentAddBar = styled.div`
    width: 862px;
    height: 64px;
    cursor: pointer;

    line-height: 64px;
    align-items: center;
    text-align: center;

    border-radius: 5px;
    border: 1px solid #e5e5e5;
    background: #f5f5f5;
    color: var(--lighter-text);

    span {
        font-family: Roboto;
        font-style: normal;
        font-weight: bold;
        font-size: 18px;
    }

    @media (max-width: 1140px) {
        width: 100%;
    }
    @media (max-width: 767px) {
        width: 100%;
    }
`;
