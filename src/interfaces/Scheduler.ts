import { Render } from "@/interfaces/Render";

// interfaces/Scheduler.ts
export interface SchedulerAttributes {
    Name: string;
    Time: string | null;
    isRendering: boolean;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    Queued: boolean;
    renders: {
      data: Render
    };
  }
  
  export interface Scheduler {
    id: number;
    attributes: SchedulerAttributes;
  }
  
