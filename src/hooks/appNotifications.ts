import * as Notifications from 'expo-notifications';
import { Notification } from '../types/notification';

interface Data {
  event: string;
  message: Notification;
}

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

export default function AppNotification(socket: WebSocket) {
  socket.onmessage = (event) => {
    schedulePushNotification(JSON.parse(event.data));
  };

  return () => {
    socket.close();
  };

  async function schedulePushNotification(data: Data) {
    await Notifications.scheduleNotificationAsync({
      content: {
        title: data.message.workstation_id,
        body: data.message.content,
        data: { data: 'goes here', test: { test1: 'more data' } },
      },
      trigger: { seconds: 2 },
    });
  }
}

export { AppNotification };
