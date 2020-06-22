import { Service } from './service';
export interface Branch {
  branchId;
  branchName: string;
  start: number;
  end: number;
  services: Service[];
  companyId;
}
