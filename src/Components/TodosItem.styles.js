import styled from 'styled-components';

export const TestItem = styled.div`
    background-color: pink;
`;

export const TodosStyes = styled.div`
    background-color: ${props => props.color};
    &:hover {
        background: #000;
    }

    .test {
        color: blue;
    }

    ${TestItem} {
        font-size: 40px;
    }
`;