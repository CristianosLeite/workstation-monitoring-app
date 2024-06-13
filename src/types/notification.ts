export type Notification = {
    id: string;
    workstation_id: string;
    message: string;
    isacknowledged: boolean;
    created_at: Date;
    updated_at: Date;
    deleted_at: Date;
}
