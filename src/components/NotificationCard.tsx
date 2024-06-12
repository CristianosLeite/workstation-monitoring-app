import React from "react";
import { Pressable } from "react-native";
import { ThemedView } from "./ThemedView";
import { ThemedText } from "./ThemedText";
import { Collapsible } from "@/src/components/Collapsible";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Notification } from "@/src/types/notification";

interface NotificationCardProps {
  notification: Notification;
}

export function NotificationCard({ notification }: NotificationCardProps) {
  const acknowledgeNotification = (notification: Notification) => () => {
    // Reconhecer alarme

    // Atualizar notificação
    notification.isAcknowledged = true;
  };

  const setIcon = (isAcknowledged: boolean) => {
    if (isAcknowledged) {
      return "checkmark-done-circle";
    } else {
      return "warning";
    }
  };

  const setIconColor = (isAcknowledged: boolean) => {
    if (isAcknowledged) {
      return "green";
    } else {
      return "red";
    }
  };

  return (
    <ThemedView className="bg-slate-100 dark:bg-gray-700 p-2 w-fit-content rounded-xl shadow-md">
      <ThemedView className="bg-slate-100 dark:bg-gray-700 flex flex-row content-around justify-between">
        <ThemedText className="text-center text-xl mb-2">
          {notification.workstationId}
        </ThemedText>
        <Ionicons name={setIcon(notification.isAcknowledged)} size={24} color={setIconColor(notification.isAcknowledged)} />
      </ThemedView>
      <Collapsible title={notification.message}>
        <Pressable
          className="bg-cyan-600 p-3 m-3 mr-9 w-fit-content rounded-full"
          onPress={acknowledgeNotification(notification)}
        >
          <ThemedText className="text-center text-xl">
            Reconhecer alarme
          </ThemedText>
        </Pressable>
      </Collapsible>
    </ThemedView>
  );
}
