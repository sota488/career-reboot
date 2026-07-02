> Version: v1.0

> Status: Active

> Last Updated: 2026-07-02

---

# Purpose

本ポリシーは、Career Reboot のコンポーネント変更ルールを定義するものです。

Design System と Engineering Design System を長期的に維持するため、コンポーネントの追加・変更・置換・削除は本ポリシーに従います。

---

# Principles

## 1. Design System を唯一の基準とする

すべてのコンポーネントは

- Brand Book
- Brand Copy Guidelines
- Design System
- Engineering Design System

に従います。

独自解釈による UI・UX・デザイン変更は禁止します。

---

## 2. 新規実装を優先する

新しい共通コンポーネントは追加して構いません。

ただし、既存画面を同時に置き換えてはいけません。

まず共通コンポーネントを完成させます。

---

## 3. 段階的に移行する

移行は以下の順序で実施します。

1. Component を作成
2. 動作確認
3. レビュー
4. 画面単位で置換
5. 旧実装削除

一度に全画面を変更しません。

---

## 4. スコープ外の変更は禁止

依頼内容以外の変更は禁止します。

例

依頼

- Button を作る

禁止

- Hero を修正
- Card を変更
- Layout を変更
- Copy を修正
- CSS 全体を整理

---

## 5. 既存画面を壊さない

新しい Component は追加しても構いません。

既存画面の挙動・デザインは維持します。

見た目が変わる変更は明示的な依頼がある場合のみ実施します。

---

## 6. Design Tokens を必ず利用する

以下の値をハードコードしてはいけません。

- Color
- Font Size
- Font Weight
- Radius
- Shadow
- Motion
- Spacing

必ず Design Tokens を利用します。

---

## 7. 共通 Component を優先する

同じ UI を複数実装しません。

- Button
- Card
- Input
- Tag
- Alert

などは必ず共通化します。

---

## 8. Breaking Change を避ける

以下は Breaking Change とみなします。

- API変更
- Props変更
- デザイン変更
- レイアウト変更
- 色変更
- サイズ変更

Breaking Change が必要な場合は実装前に報告します。

---

## 9. 不明点は停止する

仕様に存在しない場合は独自判断しません。

実装を停止し、

- 不足仕様
- 判断が必要な点
- 選択肢

を報告します。

---

# Migration Policy

移行は以下の順番で行います。

1. Design Tokens
2. Common Components
3. Layout
4. Screen Migration
5. Legacy Removal

---

# Review Checklist

実装後は必ず報告します。

## 実装内容

- 変更ファイル
- 実装理由

---

## 差分

- Design Systemとの差分
- 未実装項目
- 保留項目

---

## Breaking Change

有無を明記します。

---

## Next Recommendation

次に移行すべき Component を提案します。

---

# Scope

本ポリシーは以下に適用されます。

- UI Components
- Design Tokens
- Layout
- Styling
- Accessibility

Brand Book や Brand Copy Guidelines の変更には適用しません。
