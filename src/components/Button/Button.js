import React from 'react';
import styled from "styled-components";

const StyledButton = styled.button`
    background-color: ${props => props.close && "red"};
    border: none;
    color: white;
    border-radius: 10px;
`;

const Button = ({ onRemoveItem }) => {
    return (
       <StyledButton onClick={onRemoveItem} close>
            X
       </StyledButton>
    );
};

export default Button;