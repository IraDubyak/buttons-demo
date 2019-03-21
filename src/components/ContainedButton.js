import React from 'react';
import Button from '@material-ui/core/Button';

const ContainedButton = (props) => {

    return (
        <Button size={props.size || 'medium'} variant={props.variant || 'text'} color={props.color || 'default'}>
            {props.children}
        </Button>
    );
};

export default ContainedButton;