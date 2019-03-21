import styled from 'styled-components';
import StyledButton from './StyledButton';

const DangerButton = styled(StyledButton)`

        background-color: darkred;
        border: 2px solid white;
        color: white;
        
        :hover {
            background-color: white;
            border: 2px solid darkred;
            color: darkred;
        }

`;

export default DangerButton;
