export type PlatformStatus = "available" | "coming-soon";

export type AndroidRelease = {
  status: PlatformStatus;
  /** Google Drive file ID, from https://drive.google.com/file/d/<ID>/view */
  driveFileId: string;
  version?: string;
  updated?: string;
  requirements?: string;
};

/** Direct-download URL for a publicly shared Drive file (skips the preview page). */
export const driveDownloadUrl = (id: string) =>
  `https://drive.google.com/uc?export=download&id=${encodeURIComponent(id)}`;

/** Drive's own viewer page — fallback if the direct link is blocked. */
export const driveViewUrl = (id: string) =>
  `https://drive.google.com/file/d/${encodeURIComponent(id)}/view`;

export const download = {
  hero: {
    eyebrow: "Download",
    title: "Get Croptimum on your phone.",
    intro:
      "Install the Croptimum mobile app to diagnose crop issues, plan seasons and follow regional outbreaks from the field.",
  },

  android: {
    status: "available",
    // Drive file ID of the APK, shared as "Anyone with the link – Viewer".
    driveFileId: "1qU22u_nvBcrKo_QjbCM5O197AMYgf9l0",
    version: "0.1.0",
    updated: "2026-11-15",
    requirements: "Android 8.0 or later",
  } satisfies AndroidRelease,

  ios: {
    status: "coming-soon" as PlatformStatus,
    note: "We're preparing the App Store release. Check back soon.",
  },
} as const;
