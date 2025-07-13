import LottieView from "lottie-react-native";
import { Dimensions, StatusBar, StyleSheet, View } from "react-native";
import OnboardingSwiper from "react-native-onboarding-swiper";

const { width, height } = Dimensions.get("window"); // for responsive purposes

const Onboarding = () => {
    return (
        <View style={styles.container}>
            <OnboardingSwiper
            bottomBarHighlight={false}
            controlStatusBar={true}
                pages={[
                    {
                        backgroundColor: "teal",
                        image: (
                        <View
                        >
                            <LottieView 
                            source={require("../assets/lottie/lottie2.json")}
                            autoPlay
                            loop
                            style={styles.lottie}
                            />
                        </View>
                        ),
                        title: "Onboarding 1",
                        subtitle: "User onboarding 1, please welcome to our application, you will get the most pleasuring experience"
                    },

                    {
                        backgroundColor: "red",
                        image: (
                        <View
                        >
                            <LottieView 
                            source={require("../assets/lottie/lottie1.json")}
                            autoPlay
                            loop
                            style={styles.lottie}
                            />
                        </View>
                        ),
                        title: "Onboarding 2",
                        subtitle: "User onboarding 2, please welcome to our application, you will get the most pleasuring experience"
                    },
                ]}
            />
        </View>
    );
};

export default Onboarding;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    lottie: {
        width: width * 0.8,
        height: width,
    },
});
