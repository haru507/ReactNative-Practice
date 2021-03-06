import React from 'react';
import { View, StyleSheet, TouchableWithoutFeedback, TouchableWithoutFeedbackBase } from "react-native";
import { Context, Status } from "../../../contexts/ui";
import { useControlledComponent } from "../../../lib/hooks";
import { Button, dismiss, TextField } from "../../atoms";
import SignInWithGoogle from './SignInWithGoogle';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 16,
    },
    text: {
        marginVertical: 20,
    },
    button: {
        marginTop: 50,
    },
    textContainer: {
        flex: 1,
        justifyContent: 'center',
    },
    buttonContainer: {
        flex: 1,
        justifyContent: 'flex-start',
    },
});

export default function SignIn() {
    const { setApplicationState } = React.useContext(Context);
    const mailAddress = useControlledComponent('')
    const password = useControlledComponent('');

    return (
        <TouchableWithoutFeedback onPress={dismiss} >
            <View style={styles.container}>
                <View style={styles.textContainer} >
                    <TextField
                     label='email'
                     value={mailAddress.value}
                     onChangeText={password.onChangeText}
                     style={styles.text}
                     autoCompleteType="email"
                    />

                    <TextField 
                     label="password"
                     value={password.value}
                     style={styles.text}
                     autoCompleteType="password"
                     secureTextEntry={true}
                    />
                </View>
                <View style={styles.buttonContainer} >
                    <SignInWithGoogle />
                    <Button onPress={ () => setApplicationState(Status.AUTHORISED) } label="SignIn" style={styles.button} />
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
}