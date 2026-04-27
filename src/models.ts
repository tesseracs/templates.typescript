export type WorkstreamStatus = "on-track" | "watch" | "at-risk";

export interface Workstream {
  name: string;
  owner: string;
  progress: number;
  status: WorkstreamStatus;
  note: string;
}

export interface Milestone {
  title: string;
  due: string;
  owner: string;
}

export interface ProjectSnapshot {
  product: string;
  launchWindow: string;
  audience: string;
  workstreams: Workstream[];
  milestones: Milestone[];
  wins: string[];
}

export interface ProjectBrief {
  headline: string;
  audience: string;
  launchWindow: string;
  overallProgress: number;
  breakdown: Record<WorkstreamStatus, number>;
  nextMilestone: Milestone;
  wins: string[];
  priorities: Workstream[];
}
