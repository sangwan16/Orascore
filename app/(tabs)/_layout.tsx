import { Tabs } from 'expo-router';
import { View } from 'react-native';
import AuthContextProvider from '../../auth/AuthContext';

export default function TabLayout() {
  return (
    <>
      <AuthContextProvider>
        <View style={{ padding: 4 }}>
          Header
        </View>
        <Tabs screenOptions={{ headerShown: false }}>

          <Tabs.Screen name="Home" />
          <Tabs.Screen name="Profile" />
        </Tabs>
      </AuthContextProvider>

    </>

  )
}