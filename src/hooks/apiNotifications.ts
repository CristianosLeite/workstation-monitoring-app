import axios from 'axios';
import { useEffect, useState } from "react";
import { Notification } from "../types/notification";
import AsyncStorage from "@react-native-async-storage/async-storage";

export function useNotifications() {
  const [notifications, setNotifications] = useState<Notification[]>([]);

  useEffect(() => {
    const fetchIPAndPort = async () => {
      const ip = await AsyncStorage.getItem("ip");
      const port = await AsyncStorage.getItem("port");
      
      if (!ip || !port) {
        console.error('IP ou porta não definidos');
        return;
      }

      try {
        const response = await axios.get(`http://${ip}:${port}/api/notifications`);
        setNotifications(response.data);

      } catch (error) {
        console.error('Erro ao buscar notificações:', error);
      }
    };
    fetchIPAndPort();
  }, []);

  return notifications;
}

export async function updateNotification(
  id: string,
  isAcknowledged: boolean,
  responsible: string,
  action: string
): Promise<Notification> {
  const ip = AsyncStorage.getItem('ip');
  const port = AsyncStorage.getItem('port');
  const response = await axios.patch(`http://${ip}:${port}/api/notifications/update`,
    { id: id, isAcknowledged: isAcknowledged, responsible: responsible, action: action })
  return response.data;
}
