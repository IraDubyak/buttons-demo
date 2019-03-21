import React, {Component} from 'react';
import StyledButton from './components/StyledButton';
import DangerButton from './components/DangerButton';
import DeleteIcon from '@material-ui/icons/Delete';

import JssProvider from "react-jss/lib/JssProvider";
import {create} from "jss";
import {createGenerateClassName, jssPreset} from "@material-ui/core/styles";

const generateClassName = createGenerateClassName();
const jss = create({
    ...jssPreset(),
    // Define a custom insertion for injecting the JSS styles in the DOM
    insertionPoint: document.getElementById("jss-insertion-point")
});

class App extends Component {

    render() {
        return (
            /* <div>
                <h1>Welcome</h1>
                <Button>
                    Hello World
                </Button>
                <ContainedButton color="secondary" variant="contained">Secondary button</ContainedButton>
                <ContainedButton color="primary" variant="outlined">Primary button</ContainedButton>
                <ContainedButton variant="contained">Ordinary button</ContainedButton>
                <ContainedButton color="primary" variant="contained">
                    Delete
                    <DeleteIcon/>
                </ContainedButton>
                <SizeButton size="small" color="secondary" variant="contained">Small button</SizeButton>
            </div> */
            <JssProvider jss={jss} generateClassName={generateClassName}>

                <div>
                    <StyledButton>Normal</StyledButton>
                    <StyledButton primary variant='contained'>Primary</StyledButton>
                    <DangerButton>
                        Delete
                        <DeleteIcon/>
                    </DangerButton>
                </div>

            </JssProvider>
        );
    }
}

export default App;
