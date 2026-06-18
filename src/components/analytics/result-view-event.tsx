"use client";

import { trackResultPageView } from "@/lib/analytics";
import { useEffect, useRef } from "react";

type ResultViewEventProps = {
  phaseId: number;
  phaseName: string;
  profileKey: string;
  totalScore: number | null;
};

export function ResultViewEvent({ phaseId, phaseName, profileKey, totalScore }: ResultViewEventProps) {
  const sentRef = useRef(false);

  useEffect(() => {
    if (sentRef.current) {
      return;
    }

    sentRef.current = true;
    trackResultPageView({ phaseId, phaseName, profileKey, totalScore });
  }, [phaseId, phaseName, profileKey, totalScore]);

  return null;
}
