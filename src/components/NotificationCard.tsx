import { useState } from "react";
import { Pressable } from "react-native";
import { ThemedView } from "./ThemedView";
import { ThemedText } from "./ThemedText";
import { Collapsible } from "@/src/components/Collapsible";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Notification } from "@/src/types/notification";
import { AcknowledgeContext } from "../hooks/acknowledgeContext";
import { AcknowledgeConfirmation } from "./AcknowledgeConfirmation";
import { GetAction } from "./GetAction";

interface NotificationCardProps {
  notification: Notification;
}

export function NotificationCard({ notification }: NotificationCardProps) {
  const [showDialog, setShowDialog] = useState(false);
  const [responsible, setResponsible] = useState("");
  const [action, setAction] = useState("");
  const [isAcknowledged, setIsAcknowledged] = useState(
    notification.isacknowledged
  );
  const [showAcknowledgeConfirmation, setShowAcknowledgeConfirmation] =
    useState(false);
  const iconName = isAcknowledged ? "checkmark-done-circle" : "warning";
  const iconColor = isAcknowledged ? "green" : "red";

  const acknowledgeNotification = async () => {
    setShowDialog(true);
    setResponsible(responsible);
    setAction(action);
    setIsAcknowledged(true);
  };

  return (
    <AcknowledgeContext.Provider
      value={{
        showDialog: showDialog,
        setShowDialog: setShowDialog,
        responsible: responsible,
        setResponsible: setResponsible,
        action: action,
        setAction: setAction,
        showAcknowledgeConfirmation: showAcknowledgeConfirmation,
        setShowAcknowledgeConfirmation: setShowAcknowledgeConfirmation,
        setIsAcknowledged: setIsAcknowledged,
      }}
    >
      <GetAction />
      <AcknowledgeConfirmation
        onConfirm={acknowledgeNotification}
        notification={notification}
        responsible={responsible}
        action={action}
      />
      {!showDialog && !showAcknowledgeConfirmation && (
        <ThemedView className="bg-slate-100 dark:bg-gray-700 p-2 w-fit-content rounded-xl shadow-md">
          <ThemedView className="bg-slate-100 dark:bg-gray-700 flex flex-row content-around justify-between">
            <ThemedText className="text-center text-xl mb-2">
              {notification.workstation_id}
            </ThemedText>
            <Ionicons name={iconName} size={24} color={iconColor} />
          </ThemedView>
          <Collapsible title={notification.message}>
            <Pressable
              className="bg-cyan-600 p-3 m-3 mr-9 w-fit-content rounded-full"
              style={{ opacity: isAcknowledged ? 0.5 : 1 }}
              onPress={acknowledgeNotification}
              disabled={isAcknowledged}
            >
              <ThemedText className="text-center text-xl">
                {isAcknowledged ? "Alarme reconhecido" : "Reconhecer alarme"}
              </ThemedText>
            </Pressable>
          </Collapsible>
        </ThemedView>
      )}
    </AcknowledgeContext.Provider>
  );
}
