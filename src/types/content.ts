export type ContentQuote = {
  type: "quote";
  lines: string[];
};

export type ContentList = {
  type: "list";
  items: string[];
};

export type ContentParagraph = {
  type: "paragraph";
  text: string;
  strong?: boolean;
};

export type ContentSubheading = {
  type: "subheading";
  text: string;
};

export type ContentBlock = ContentParagraph | ContentSubheading | ContentList | ContentQuote;

export type ContentSection = {
  title: string;
  variant?: string;
  blocks: ContentBlock[];
};

export type ContentAsideLine = {
  text: string;
  strong?: boolean;
};
