export type Notification = {
    id: string;
    workstationId: string;
    message: string;
    isAcknowledged: boolean;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date;
}
