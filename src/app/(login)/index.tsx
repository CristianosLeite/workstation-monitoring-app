import { View, Image } from "react-native";

import { LinearGradient } from "expo-linear-gradient";
import { LoginCard } from "@/src/components/LoginCard";

export default function Login() {
  return (
    <View className="flex-1">
      <LinearGradient
        className="flex-1 filter blur-3xl brightness-200 justify-around items-center"
        colors={[
          "rgba(0,0,0,0.6138830532212884)",
          "rgba(1,164,78,0.5186449579831933)",
          "rgba(1,28,67,0.7175245098039216)",
          ]}
      >
        <Image style={{width: 250, height: 250, marginTop: 100}} source={require("../../assets/images/login-ui-logo.png")}/>
        <LoginCard />
      </LinearGradient>
    </View>
  );
}
