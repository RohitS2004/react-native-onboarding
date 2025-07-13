import { Stack } from "expo-router";
import { useState } from "react";
import { StyleSheet } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function RootLayout() {
    const [userOnboarding, setUserOnboarding] = useState<boolean | null>(null);

    return (
        <SafeAreaProvider>
            <SafeAreaView style={styles.container}>
                <Stack
                    screenOptions={{
                        headerShown: false,
                    }}
                    initialRouteName="onboarding"
                >
                    <Stack.Screen name="onboarding" />
                    <Stack.Screen name="index" />
                </Stack>
            </SafeAreaView>
        </SafeAreaProvider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

// Install the Lottie react native package for displaying the Lottie animations
// Install the Onboarding react native package for the Onboarding component
// Install the Asyn storage react native package for the storing some data asynchronously
