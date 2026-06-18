type AnalyticsEventParams = Record<string, string | number | boolean | null | undefined>;

declare global {
  interface Window {
    dataLayer: unknown[][];
    gtag?: (...args: unknown[]) => void;
    clarity?: (...args: unknown[]) => void;
  }
}

const gaMeasurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

function canTrackWithGa() {
  return typeof window !== "undefined" && Boolean(gaMeasurementId);
}

function dispatchGtag(...args: unknown[]) {
  if (!canTrackWithGa()) {
    return;
  }

  if (typeof window.gtag === "function") {
    window.gtag(...args);
    return;
  }

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(args);
}

export function trackPageView(pagePath: string) {
  dispatchGtag("event", "page_view", {
    send_to: gaMeasurementId,
    page_path: pagePath,
    page_location: typeof window !== "undefined" ? window.location.href : undefined,
    page_title: typeof document !== "undefined" ? document.title : undefined,
  });
}

export function trackEvent(eventName: string, params: AnalyticsEventParams = {}) {
  dispatchGtag("event", eventName, params);
}

export function trackDiagnosisStart() {
  trackEvent("diagnosis_start");
}

export function trackDiagnosisComplete(payload: {
  profile: string;
  totalScore: number;
  recovery: number;
  selfAcceptance: number;
  selfUnderstanding: number;
  futureOrientation: number;
  actionReadiness: number;
}) {
  trackEvent("diagnosis_complete", {
    profile_key: payload.profile,
    total_score: payload.totalScore,
    recovery_score: payload.recovery,
    self_acceptance_score: payload.selfAcceptance,
    self_understanding_score: payload.selfUnderstanding,
    future_orientation_score: payload.futureOrientation,
    action_readiness_score: payload.actionReadiness,
  });
}

export function trackResultPageView(payload: {
  phaseId: number;
  phaseName: string;
  profileKey: string;
  totalScore: number | null;
}) {
  trackEvent("result_page_view", {
    phase_id: payload.phaseId,
    phase_name: payload.phaseName,
    profile_key: payload.profileKey,
    total_score: payload.totalScore ?? undefined,
  });
}
