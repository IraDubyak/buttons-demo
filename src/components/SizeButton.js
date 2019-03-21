import React from 'react';
import ContainedButton from "./ContainedButton";

const SizeButton = (props) => {

    return (
        <ContainedButton size={props.size || 'medium'} variant={props.variant || 'text'} color={props.color || 'default'}>
            {props.children}
        </ContainedButton>
    );
};

export default SizeButton;