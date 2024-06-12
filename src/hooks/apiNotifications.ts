import { Notification } from "../types/notification";

const notifications: Notification[] = [
    {
      id: "1",
      workstationId: "Estação 10",
      message: "Estação 10 está offline",
      isAcknowledged: true,
      createdAt: new Date(),
      updatedAt: new Date(),
      deletedAt: new Date(),
    },
    {
      id: "2",
      workstationId: "Estação 20",
      message: "Estação 20 está offline",
      isAcknowledged: false,
      createdAt: new Date(),
      updatedAt: new Date(),
      deletedAt: new Date(),
    },
    {
      id: "3",
      workstationId: "Estação 30",
      message: "Estação 30 está offline",
      isAcknowledged: false,
      createdAt: new Date(),
      updatedAt: new Date(),
      deletedAt: new Date(),
    },
    {
      id: "4",
      workstationId: "Estação 40",
      message: "Estação 40 está offline",
      isAcknowledged: false,
      createdAt: new Date(),
      updatedAt: new Date(),
      deletedAt: new Date(),
    },
    {
      id: "5",
      workstationId: "Estação 50",
      message: "Estação 50 está offline",
      isAcknowledged: false,
      createdAt: new Date(),
      updatedAt: new Date(),
      deletedAt: new Date(),
    },
    {
      id: "6",
      workstationId: "Estação 60",
      message: "Estação 60 está offline",
      isAcknowledged: false,
      createdAt: new Date(),
      updatedAt: new Date(),
      deletedAt: new Date(),
    },
    {
      id: "7",
      workstationId: "Estação 70",
      message: "Estação 70 está offline",
      isAcknowledged: false,
      createdAt: new Date(),
      updatedAt: new Date(),
      deletedAt: new Date(),
    },
    {
      id: "8",
      workstationId: "Estação 80",
      message: "Estação 80 está offline",
      isAcknowledged: false,
      createdAt: new Date(),
      updatedAt: new Date(),
      deletedAt: new Date(),
    },
    {
      id: "9",
      workstationId: "Estação 90",
      message: "Estação 90 está offline",
      isAcknowledged: false,
      createdAt: new Date(),
      updatedAt: new Date(),
      deletedAt: new Date(),
    },
    {
      id: "10",
      workstationId: "Estação 10",
      message: "Estação 10 está offline",
      isAcknowledged: false,
      createdAt: new Date(),
      updatedAt: new Date(),
      deletedAt: new Date(),
    }
  ];

export function useNotifications() {
    return notifications;
}