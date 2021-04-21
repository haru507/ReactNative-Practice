import * as React from 'react';
import Button from "../../atoms/Button";
import { Context, Status } from "../../../contexts/ui";

export default function SignInWithGoogle() {
    const { setApplicationState } = React.useContext(Context);
    return <Button onPress= {() => setApplicationState(Status.AUTHORISED) } icon="google" label="Sign In With Google" /> 
}