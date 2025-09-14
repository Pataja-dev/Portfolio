// src/services/experienceService.ts

export type Experience = {
  id: number;
  company: string | null;
  role: string | null;
  location: string | null;
  startDate: string | null;
  endDate: string | null;
  description: string | null;
};