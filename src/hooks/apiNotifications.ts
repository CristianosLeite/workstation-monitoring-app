import { Notification } from "../types/notification";
import axios from 'axios';

let notifications: Notification[] = [];

async function getNotifications() {
  try {
    const response = await axios.get('http://172.18.15.10:4000/api/notifications');
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export async function updateNotification(notification: Notification) {
  try {
    await axios.patch(`http://172.18.15.10:4000/api/notifications/${notification.id}`, notification);
  } catch (error) {
    console.error(error);
  }
}

async function init() {
  notifications = await getNotifications();
}

init();

export function useNotifications() {
  return notifications;
}
