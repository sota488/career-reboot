import type { ContentAsideLine, ContentSection } from "@/types/content";

export type BrandBook = {
  title: string;
  aside: {
    icon: string;
    lines: ContentAsideLine[];
  };
  sections: ContentSection[];
};

export const brandBook: BrandBook = {
  title: "Brand Book",
  aside: {
    icon: "🧭",
    lines: [
      { text: "Acceptance is the mindset.", strong: true },
      { text: "We believe every person has inherent value." },
      { text: "We walk with you." },
    ],
  },
  sections: [
    {
      title: "Founder Story",
      blocks: [
        { type: "paragraph", text: "Acceptance was not the mindset I started with." },
        { type: "paragraph", text: "For a long time, I measured my worth through achievements." },
        { type: "paragraph", text: "Academic results." },
        { type: "paragraph", text: "Income." },
        { type: "paragraph", text: "Career." },
        { type: "paragraph", text: "Recognition." },
        { type: "paragraph", text: "No matter how much I achieved, there was always someone ahead of me." },
        { type: "paragraph", text: "Comparison became the standard by which I judged myself." },
        { type: "paragraph", text: "Then came depression and a leave of absence from work." },
        { type: "paragraph", text: "For the first time, I experienced a reality where effort was not enough." },
        { type: "paragraph", text: "Where ability did not always lead to action." },
        { type: "paragraph", text: "That experience changed the way I saw people." },
        { type: "paragraph", text: "A person's worth does not disappear simply because they cannot produce results." },
        { type: "paragraph", text: "Acceptance was born from that realization." },
      ],
    },
    {
      title: "Worldview",
      blocks: [
        { type: "paragraph", text: "We live in a world that constantly evaluates us." },
        { type: "paragraph", text: "Evaluation has a role." },
        { type: "paragraph", text: "It helps society function." },
        { type: "paragraph", text: "Career Reboot does not reject evaluation." },
        { type: "paragraph", text: "What we question is the belief that evaluation determines a person's worth." },
        { type: "paragraph", text: "Achievement can be evaluated." },
        { type: "paragraph", text: "People cannot." },
        { type: "paragraph", text: "Some things can be changed." },
        { type: "paragraph", text: "Some cannot." },
        { type: "paragraph", text: "Rather than denying reality, we choose to face it." },
        { type: "paragraph", text: "Acceptance begins there." },
      ],
    },
    {
      title: "Core Mindset",
      blocks: [
        { type: "paragraph", text: "Acceptance is the mindset.", strong: true },
        { type: "paragraph", text: "Acceptance is not resignation." },
        { type: "paragraph", text: "It is the courage to face reality without denying your worth." },
        { type: "paragraph", text: "Acceptance is not the destination." },
        { type: "paragraph", text: "It is the place from which we begin choosing our future." },
      ],
    },
    {
      title: "Brand Belief",
      blocks: [
        { type: "paragraph", text: "We believe every person has inherent value.", strong: true },
        { type: "paragraph", text: "Human worth is not something to be earned." },
        { type: "paragraph", text: "It exists before achievement." },
        { type: "paragraph", text: "It remains despite failure." },
        { type: "paragraph", text: "This is not something we seek to prove." },
        { type: "paragraph", text: "It is the assumption from which we choose to build everything." },
      ],
    },
    {
      title: "Mission",
      blocks: [
        { type: "paragraph", text: "一人ひとりが、自分らしい人生を選び、歩み続けられる社会をつくる。", strong: true },
      ],
    },
    {
      title: "Our Promise",
      blocks: [
        { type: "paragraph", text: "We walk with you.", strong: true },
        { type: "paragraph", text: "We will not decide your destination." },
        { type: "paragraph", text: "We will not walk your path for you." },
        { type: "paragraph", text: "But we will never leave you to walk it alone." },
      ],
    },
    {
      title: "Principles",
      variant: "principles",
      blocks: [
        { type: "paragraph", text: "Acceptance becomes meaningful only when it shapes how we act." },
        { type: "subheading", text: "Authenticity" },
        { type: "paragraph", text: "Choose according to your own values, not someone else's expectations." },
        { type: "paragraph", text: "We help people discover their own answers." },
        { type: "paragraph", text: "We do not define success for them." },
        { type: "subheading", text: "Honesty" },
        { type: "paragraph", text: "Face reality with honesty, without denying your worth." },
        { type: "paragraph", text: "We do not offer comforting illusions." },
        { type: "paragraph", text: "Growth begins with reality." },
        { type: "subheading", text: "Trust" },
        { type: "paragraph", text: "Trust is earned through consistency." },
        { type: "paragraph", text: "We respect people's autonomy." },
        { type: "paragraph", text: "We communicate transparently." },
        { type: "paragraph", text: "We do what we say we will do." },
        { type: "subheading", text: "Sustainability" },
        { type: "paragraph", text: "Choose what you can continue." },
        { type: "paragraph", text: "We value sustainable progress over short-term success." },
        { type: "paragraph", text: "A meaningful life is built through choices we can keep making." },
      ],
    },
    {
      title: "Our Boundaries",
      blocks: [
        { type: "paragraph", text: "Career Reboot does not assume that:" },
        {
          type: "list",
          items: [
            "Achievement defines human worth.",
            "There is one right path for everyone.",
            "Change begins with self-denial.",
            "Faster is always better.",
            "Someone else can decide another person's life.",
          ],
        },
        { type: "paragraph", text: "These boundaries help us remain true to who we are." },
      ],
    },
    {
      title: "Brand Compass",
      blocks: [
        { type: "paragraph", text: "Whenever we face a difficult decision, we return to these questions." },
        {
          type: "list",
          items: [
            "Does this help people choose for themselves?",
            "Does this strengthen their autonomy?",
            "Are we respecting inherent human worth?",
            "Are we offering guidance instead of answers?",
            'Does this reflect "We walk with you"?',
            "Is this sustainable?",
            "Does this begin with Acceptance?",
          ],
        },
      ],
    },
    {
      title: "Why \"Reboot\"?",
      blocks: [
        { type: "paragraph", text: "A reboot is not a reset." },
        { type: "paragraph", text: "Nothing is erased." },
        { type: "paragraph", text: "The past remains." },
        { type: "paragraph", text: "The experiences remain." },
        { type: "paragraph", text: "The scars remain." },
        { type: "paragraph", text: "What changes is the way we move forward." },
        { type: "paragraph", text: "Career Reboot is not about starting over." },
        { type: "paragraph", text: "It is about moving forward with a new mindset." },
      ],
    },
    {
      title: "What Acceptance Makes Possible",
      blocks: [
        { type: "paragraph", text: "Acceptance does not promise certainty." },
        { type: "paragraph", text: "It does not promise success." },
        { type: "paragraph", text: "It does not promise an easy life." },
        { type: "paragraph", text: "What it offers is something quieter." },
        { type: "paragraph", text: "The confidence to believe:" },
        {
          type: "quote",
          lines: [
            '*"I don\'t know exactly what lies ahead.*',
            '*But whatever comes, I\'ll find a way."*',
          ],
        },
        { type: "paragraph", text: "That quiet confidence allows us to keep choosing." },
        { type: "paragraph", text: "And through those choices," },
        { type: "paragraph", text: "we continue walking." },
      ],
    },
    {
      title: "Epilogue",
      blocks: [
        { type: "paragraph", text: "Life rarely goes as planned." },
        { type: "paragraph", text: "There will be uncertainty." },
        { type: "paragraph", text: "Comparison." },
        { type: "paragraph", text: "Failure." },
        { type: "paragraph", text: "Unexpected change." },
        { type: "paragraph", text: "We cannot promise that every decision will be the right one." },
        { type: "paragraph", text: "But we believe something more important." },
        { type: "paragraph", text: "Every person can choose again." },
        { type: "paragraph", text: "Acceptance is where that journey begins." },
        { type: "paragraph", text: "And wherever that journey leads," },
        { type: "paragraph", text: "We walk with you.", strong: true },
      ],
    },
  ],
};
