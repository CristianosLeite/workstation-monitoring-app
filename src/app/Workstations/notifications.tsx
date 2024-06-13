import { StyleSheet, Image } from "react-native";
import * as Notifications from "expo-notifications";
import ParallaxScrollView from "@/src/components/ParallaxScrollView";
import { NotificationCard } from "@/src/components/NotificationCard";
import { useNotifications } from "@/src/hooks/apiNotifications";

const notificationCards = useNotifications().map((notification) => (
  <NotificationCard key={notification.id} notification={notification} />
));

export default function TabTwoScreen() {
  Notifications.setNotificationHandler({
    handleNotification: async () => ({
      shouldShowAlert: true,
      shouldPlaySound: false,
      shouldSetBadge: false,
    }),
  });

  Notifications.scheduleNotificationAsync({
    content: {
      title: "Look at that notification",
      body: "I'm so proud of myself!",
    },
    trigger: null,
  });
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#77b596", dark: "#1D3D47" }}
      headerImage={
        <Image
          source={require("@/src/assets/images/splash.png")}
          style={styles.headerImage}
        />
      }
    >
      {notificationCards}
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    position: "relative",
    height: 250,
    width: "100%",
  },
});
