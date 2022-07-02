import React from 'react';
import styled from "styled-components";

const StyledButton = styled.button`
    background-color: ${props => props.close && "red"};
    border: none;
    color: white;
    border-radius: 10px;
`;

const Button = () => {
    return (
       <StyledButton close>
            CLICK MOTHERFUCKER, CLICK IT!
       </StyledButton>
    );
};

export default Button;