import { useContext } from 'react';
import { Pressable, Text, View } from 'react-native';
import { AuthContext } from '../../auth/AuthContext';
import { getUser, loginUser, signInUser, signOut } from '../../auth/authentication';

export default function Profile() {
    const { email } = useContext(AuthContext);
    return (
        <View>
            <Text>
                This is the profile page. {email}
            </Text>

            <Pressable onPress={() => signInUser('sangwanakash163@gmail.com', '123456')} >
                <Text>
                    Sign Up
                </Text>
            </Pressable>

            <Pressable onPress={() => loginUser('sangwanakash163@gmail.com', '123456')}>
                <Text>
                    Login
                </Text>

            </Pressable>

            <Pressable onPress={signOut}>
                <Text>
                    Log out
                </Text>

            </Pressable>

            <Pressable onPress={getUser}>
                <Text>
                    Get User
                </Text>

            </Pressable>

        </View>
    )
}