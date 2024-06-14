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
  const [isacknowledged, setIsAcknowledged] = useState(
    notification.isacknowledged
  );
  const [showAcknowledgeConfirmation, setShowAcknowledgeConfirmation] =
    useState(false);

  const acknowledgeNotification = async () => {
    // Habilitar diálogo
    setShowDialog(true);
    // Obter ação tomada
    setResponsible(responsible);
    setAction(action);
    // Confirmar ação

    // Atualizar notificação
    setIsAcknowledged(true);
  };

  const setIcon = () => {
    if (isacknowledged) {
      return "checkmark-done-circle";
    } else {
      return "warning";
    }
  };

  const setIconColor = () => {
    if (isacknowledged) {
      return "green";
    } else {
      return "red";
    }
  };

  return (
    <AcknowledgeContext.Provider
      value={{
        showDialog: showDialog,
        setShowDialog: setShowDialog,
        responsible: "",
        setResponsible: () => {},
        action: "",
        setAction: () => {},
        showAcknowledgeConfirmation: showAcknowledgeConfirmation,
        setShowAcknowledgeConfirmation: setShowAcknowledgeConfirmation,
        setIsAcknowledged: setIsAcknowledged,
      }}
    >
      <GetAction />
      <AcknowledgeConfirmation onConfirm={acknowledgeNotification} />
      {!showDialog && !showAcknowledgeConfirmation && (
        <ThemedView className="bg-slate-100 dark:bg-gray-700 p-2 w-fit-content rounded-xl shadow-md">
          <ThemedView className="bg-slate-100 dark:bg-gray-700 flex flex-row content-around justify-between">
            <ThemedText className="text-center text-xl mb-2">
              {notification.workstation_id}
            </ThemedText>
            <Ionicons name={setIcon()} size={24} color={setIconColor()} />
          </ThemedView>
          <Collapsible title={notification.message}>
            <Pressable
              className="bg-cyan-600 p-3 m-3 mr-9 w-fit-content rounded-full"
              style={{ opacity: isacknowledged ? 0.5 : 1 }}
              onPress={acknowledgeNotification}
              disabled={isacknowledged}
            >
              <ThemedText className="text-center text-xl">
                {isacknowledged ? "Alarme reconhecido" : "Reconhecer alarme"}
              </ThemedText>
            </Pressable>
          </Collapsible>
        </ThemedView>
      )}
    </AcknowledgeContext.Provider>
  );
}
