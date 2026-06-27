"use client";

import { trackEvent } from "@/lib/analytics";
import type { ServiceCategory, ServiceItem } from "@/lib/services";

const categoryLabels: Record<ServiceCategory, string> = {
  book: "書籍",
  career: "キャリア相談",
  job: "転職支援",
};

type ServiceCardProps = {
  service: ServiceItem;
  phase: string;
};

export function ServiceCard({ service, phase }: ServiceCardProps) {
  function handleClick() {
    trackEvent("service_click", {
      service_name: service.id,
      placement: "result_page",
      phase,
      category: service.category,
    });
  }

  return (
    <a
      href={service.url}
      target="_blank"
      rel="nofollow noopener noreferrer"
      onClick={handleClick}
      className="group flex flex-col gap-2 rounded-2xl border border-slate-200 bg-white p-5 transition hover:border-sky-300 hover:shadow-sm"
    >
      <span className="inline-flex w-fit rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-medium text-slate-500 group-hover:bg-sky-50 group-hover:text-sky-700">
        {categoryLabels[service.category]}
      </span>
      <p className="font-[var(--font-space-grotesk)] text-base font-semibold leading-snug text-slate-900">
        {service.name}
      </p>
      {service.description ? (
        <p className="text-sm leading-6 text-slate-600">{service.description}</p>
      ) : null}
      <span className="mt-auto inline-flex items-center gap-1 text-xs font-medium text-sky-600 group-hover:text-sky-800">
        詳しく見る
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          className="h-3.5 w-3.5"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M6.22 3.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L9.94 8 6.22 4.28a.75.75 0 0 1 0-1.06Z"
            clipRule="evenodd"
          />
        </svg>
      </span>
    </a>
  );
}
