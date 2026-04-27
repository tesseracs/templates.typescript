import type { ProjectBrief } from "./models.js";

function divider(label = ""): string {
  return label ? `\n=== ${label} ===` : "\n====================";
}

function renderBreakdown(brief: ProjectBrief): string {
  return [
    `On track : ${brief.breakdown["on-track"]}`,
    `Watch    : ${brief.breakdown.watch}`,
    `At risk  : ${brief.breakdown["at-risk"]}`,
  ].join("\n");
}

function renderPriorities(brief: ProjectBrief): string {
  return brief.priorities
    .map(
      (item, index) =>
        `${index + 1}. ${item.name} (${item.owner}) - ${item.progress}% complete\n   ${item.note}`,
    )
    .join("\n");
}

function renderWins(brief: ProjectBrief): string {
  return brief.wins.map((win) => `- ${win}`).join("\n");
}

export function renderBrief(brief: ProjectBrief): string {
  return [
    brief.headline.toUpperCase(),
    `Audience: ${brief.audience}`,
    `Launch window: ${brief.launchWindow}`,
    divider("Overview"),
    `Overall progress: ${brief.overallProgress}%`,
    renderBreakdown(brief),
    divider("Next milestone"),
    `${brief.nextMilestone.title} (${brief.nextMilestone.owner})`,
    `Due: ${brief.nextMilestone.due}`,
    divider("Priority workstreams"),
    renderPriorities(brief),
    divider("Recent wins"),
    renderWins(brief),
  ].join("\n");
}
