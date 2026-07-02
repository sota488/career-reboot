**Version:** v1.0

**Status:** Active

**Last Updated:** 2026-07-02

## Purpose

本ポリシーは、Career Reboot におけるコンポーネントの粒度（Granularity）を統一するための運用ルールです。

コンポーネントを細かく分割しすぎることによる可読性・保守性の低下を防ぎ、適切な責務単位で設計することを目的とします。

本ポリシーは Component Change Policy を補完するものです。

## Design Philosophy

コンポーネントは「分割すること」が目的ではありません。

以下の3点を優先します。

1. 読みやすいこと
2. 保守しやすいこと
3. 再利用できること

この3つを満たす場合のみ、コンポーネントを分割します。

## Rule 1 — 最初は1コンポーネントで実装する

新しいUIは、まず1つのコンポーネントとして実装します。

例

```txt
Hero.tsx
```

```txt
ArticleCard.tsx
```

```txt
DiagnosisResult.tsx
```

最初から複数ファイルへ分割してはいけません。

## Rule 2 — 分割には理由が必要

以下のいずれかを満たした場合のみ分割を検討します。

- 他画面でも利用する
- 明確に責務が異なる
- ファイルが大きくなり保守性が低下している
- Design Systemで独立Componentとして定義された

理由がない分割は禁止します。

## Rule 3 — ContainerだけのComponentは禁止

以下のようなラッパーだけのコンポーネントは作成しません。

```txt
HeroContainer
```

```txt
PageContainer
```

```txt
SectionWrapper
```

単なるレイアウト目的であれば、HTML要素・CSS・レイアウトユーティリティで表現します。

## Rule 4 — TypographyだけのComponentは禁止

以下のような文字要素だけのコンポーネントは作成しません。

```txt
HeroHeading
```

```txt
Description
```

```txt
Title
```

タイポグラフィは Design Tokens とHTML要素で管理します。

## Rule 5 — 小さすぎるComponentは禁止

1つの要素しか持たないComponentは原則作成しません。

例

```txt
Badge.tsx
```

```txt
Heading.tsx
```

```txt
Label.tsx
```

ただし、Design Systemで共通Componentとして定義されている場合は例外とします。

## Rule 6 — ComponentはUI単位で考える

Componentは「画面の意味」を表現します。

例

推奨

- Button
- Card
- Hero
- DiagnosisResult
- ArticleCard

非推奨

- LeftArea
- TopSection
- TextGroup
- Wrapper

## Rule 7 — Propsを増やしすぎない

Variantや状態はPropsで管理します。

例

```tsx
<Button variant="primary" size="md" />
```

不要な派生Componentは作成しません。

非推奨

```txt
PrimaryButton
SecondaryButton
HeroButton
```

## Rule 8 — Compositionを優先する

必要に応じてchildrenを利用し、柔軟に組み合わせます。

例

```tsx
<Card>
  ...
</Card>
```

継承ではなくCompositionを基本とします。

## Rule 9 — Design Systemが最優先

Design Systemに定義されたComponentは、その責務を維持します。

独自判断で細分化・統合を行ってはいけません。

## Rule 10 — 迷ったら分割しない

コンポーネントを分割すべきか判断に迷う場合は、分割せず実装します。

必要になった時点でリファクタリングを行います。

## Review Checklist

コンポーネント追加時は以下を確認します。

- 明確な責務があるか
- 他画面でも利用されるか
- 分割理由を説明できるか
- ContainerだけのComponentではないか
- TypographyだけのComponentではないか
- Propsだけで表現できないか
- Design Systemと矛盾していないか

## Examples

### Good

```txt
Button.tsx
Card.tsx
Hero.tsx
DiagnosisResult.tsx
ArticleCard.tsx
```

### Avoid

```txt
HeroContainer.tsx
HeroHeading.tsx
HeroDescription.tsx
HeroActions.tsx
PageWrapper.tsx
TextGroup.tsx
SectionWrapper.tsx
```

## Priority

コンポーネント設計の優先順位は以下とします。

1. Brand Book
2. Brand Copy Guidelines
3. Design System
4. Engineering Design System
5. Component Change Policy
6. Component Granularity Policy
7. 実装コード

本ポリシーに反する分割が必要な場合は、実装を停止し、理由と代替案を報告してください。
