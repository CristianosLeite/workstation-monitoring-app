export type Notification = {
    id: string;
    workstation_id: string;
    content: string;
    isacknowledged: boolean;
    responsible: string;
    action: string;
    created_at: Date;
    updated_at: Date;
}
