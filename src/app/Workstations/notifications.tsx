import React, { useState, useEffect } from "react";
import { Image } from "react-native";
import ParallaxScrollView from "@/src/components/ParallaxScrollView";
import { NotificationCard } from "@/src/components/NotificationCard";
import { useNotifications } from "@/src/hooks/apiNotifications";
import { ThemedText } from "@/src/components/ThemedText";

export default function NotificationsScr() {
  const [loading, setLoading] = useState(true);
  const [notificationCards, setNotificationCards] = useState<React.ReactNode[]>(
    []
  );

  useEffect(() => {
    const fetchNotifications = async () => {
      const notifications = useNotifications();
      const cards = notifications.map((notification) => (
        <NotificationCard key={notification.id} notification={notification} />
      ));
      setLoading(false);
      setNotificationCards(cards);
    };

    fetchNotifications();
  }, []);

  if (loading) {
    return <ThemedText>Carregando...</ThemedText>;
  }

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#77b596", dark: "#1D3D47" }}
      headerImage={
        <Image
          className="w-full h-64 object-cover"
          source={require("@/src/assets/images/splash.png")}
        />
      }
    >
      {notificationCards}
    </ParallaxScrollView>
  );
}
