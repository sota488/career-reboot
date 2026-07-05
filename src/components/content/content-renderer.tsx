import type { ContentBlock, ContentSection } from "@/types/content";

type ContentRendererProps = {
  sections: ContentSection[];
};

function renderBlock(block: ContentBlock, index: number) {
  if (block.type === "paragraph") {
    return block.strong ? (
      <p key={`p-${index}`}>
        <strong>{block.text}</strong>
      </p>
    ) : (
      <p key={`p-${index}`}>{block.text}</p>
    );
  }

  if (block.type === "subheading") {
    return (
      <h3
        key={`h3-${index}`}
        className="pt-2 font-[var(--font-space-grotesk)] text-[1.12rem] font-semibold tracking-tight text-slate-900 sm:text-[1.22rem]"
      >
        {block.text}
      </h3>
    );
  }

  if (block.type === "list") {
    return (
      <ul key={`ul-${index}`} className="list-disc space-y-2 pl-5">
        {block.items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    );
  }

  return (
    <blockquote
      key={`quote-${index}`}
      className="rounded-2xl border border-slate-200 bg-slate-50/80 px-5 py-4 text-[15px] leading-7 text-slate-600"
    >
      {block.lines.map((line, lineIndex) => (
        <p key={`q-line-${lineIndex}`}>{line}</p>
      ))}
    </blockquote>
  );
}

export function ContentRenderer({ sections }: ContentRendererProps) {
  return (
    <>
      {sections.map((section) => (
        <section
          key={section.title}
          className={`mt-12 text-[16px] leading-8 text-slate-700 sm:text-[17px] sm:leading-[1.98] ${
            section.variant === "principles" ? "space-y-5" : "space-y-4"
          }`}
        >
          <h2 className="font-[var(--font-space-grotesk)] text-2xl font-semibold tracking-tight text-slate-900 sm:text-[1.48rem]">
            {section.title}
          </h2>
          {section.blocks.map((block, index) => renderBlock(block, index))}
        </section>
      ))}
    </>
  );
}
