import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import React from "react";

// export default styled(({ color, ...otherProps }) => <Button {...otherProps} />)`
//   color: ${props => props.color};
// `;

const StyledButton = styled(({primary, ...otherProps }) => <Button  {...otherProps} />)`

  background-color: ${props => props.primary ? 'royalblue' : 'gainsboro'};
  color: ${props => props.primary ? 'white' : 'black'};

  border: 1px solid grey;
  border-radius: 3px;
  font-size: 14px;
  margin: 5px;

`;

export default  StyledButton;