export type Workstation = {
    id: string;
    company_id: string;
    name: string;
    description: string;
    created_at: string;
    updated_at: string;
};

export interface WorkstationCardProps {
    workstation: Workstation;
  }
  