import type { ProjectBrief, ProjectSnapshot, Workstream, WorkstreamStatus } from "./models.js";

function averageProgress(workstreams: Workstream[]): number {
  const total = workstreams.reduce((sum, stream) => sum + stream.progress, 0);
  return Math.round(total / workstreams.length);
}

function statusBreakdown(workstreams: Workstream[]): Record<WorkstreamStatus, number> {
  return workstreams.reduce<Record<WorkstreamStatus, number>>(
    (summary, stream) => {
      summary[stream.status] += 1;
      return summary;
    },
    { "on-track": 0, watch: 0, "at-risk": 0 },
  );
}

function prioritizeWorkstreams(workstreams: Workstream[]): Workstream[] {
  const statusWeight: Record<WorkstreamStatus, number> = {
    "at-risk": 0,
    watch: 1,
    "on-track": 2,
  };

  return [...workstreams].sort((left, right) => {
    const statusDelta = statusWeight[left.status] - statusWeight[right.status];

    if (statusDelta !== 0) {
      return statusDelta;
    }

    return left.progress - right.progress;
  });
}

export function buildProjectBrief(snapshot: ProjectSnapshot): ProjectBrief {
  const prioritizedWorkstreams = prioritizeWorkstreams(snapshot.workstreams);

  return {
    headline: `${snapshot.product} launch brief`,
    audience: snapshot.audience,
    launchWindow: snapshot.launchWindow,
    overallProgress: averageProgress(snapshot.workstreams),
    breakdown: statusBreakdown(snapshot.workstreams),
    nextMilestone: snapshot.milestones[0],
    wins: snapshot.wins,
    priorities: prioritizedWorkstreams.slice(0, 3),
  };
}
