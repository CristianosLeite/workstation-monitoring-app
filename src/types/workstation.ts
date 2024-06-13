export type Workstation = {
    id: string;
    companyId: string;
    name: string;
    description: string;
    createdAt: string;
    updatedAt: string;
    deletedAt: string;
};

export interface WorkstationCardProps {
    workstation: Workstation;
  }
  