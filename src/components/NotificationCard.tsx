import {useState} from "react";
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
  const [isAcknowledged, setIsAcknowledged] = useState(
    notification.isAcknowledged
  );

  const acknowledgeNotification = async () => {
    // Reconhecer alarme

    // Atualizar notificação
    setIsAcknowledged(true);
  };

  const setIcon = () => {
    if (isAcknowledged) {
      return "checkmark-done-circle";
    } else {
      return "warning";
    }
  };

  const setIconColor = () => {
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
        <Ionicons
          name={setIcon()}
          size={24}
          color={setIconColor()}
        />
      </ThemedView>
      <Collapsible title={notification.message}>
        <Pressable
          className="bg-cyan-600 p-3 m-3 mr-9 w-fit-content rounded-full"
          onPress={acknowledgeNotification}
        >
          <ThemedText className="text-center text-xl">
            Reconhecer alarme
          </ThemedText>
        </Pressable>
      </Collapsible>
    </ThemedView>
  );
}
