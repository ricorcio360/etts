---
name: Customelo merchant storefront concept
description: Warm editorial shopping for personalized products
colors:
  primary: "#284d3d"
  paper: "#fbf9f5"
  surface: "#f0eee7"
  ink: "#252b25"
  muted: "#60665c"
  line: "#d9ddd2"
  focus: "#9b5c29"
typography:
  display:
    fontFamily: "DM Serif Display, Georgia, serif"
    fontSize: "clamp(68px, 6.65vw, 96px)"
    fontWeight: 400
    lineHeight: 1.01
    letterSpacing: "-0.035em"
  headline:
    fontFamily: "DM Serif Display, Georgia, serif"
    fontSize: "clamp(34px, 3.3vw, 48px)"
    fontWeight: 400
    lineHeight: 1.1
    letterSpacing: "-0.025em"
  body:
    fontFamily: "DM Sans, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.6
rounded:
  button: "3px"
  dialog: "12px"
spacing:
  group: "12px"
  card: "20px"
  section: "100px"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "#ffffff"
    rounded: "{rounded.button}"
    padding: "14px 23px"
    height: "52px"
  button-secondary:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.button}"
    padding: "14px 23px"
    height: "52px"
---

# Design system: Customelo merchant storefront concept

## Overview

**Creative North Star: "The personal gift shop"**

A proposed visual direction for this prototype, pending user feedback. Warm surfaces and expressive serif headings make space for product photographs. Precise shopping information and calm navigation support browsing. The identity belongs to the merchant; Customelo appears as the platform attribution in the footer.

Key characteristics: generous photography, sentence-case hierarchy, restrained green accents, fine section rules and readable shopping controls.

## Colors

Deep green anchors action and brand recognition. Cream and warm neutral surfaces separate content without repeated containers. Dark ink and muted olive text retain readable contrast. The example merchant can choose another accent; small text uses an independent contrast-safe role when an accent is too light.

## Typography

DM Serif Display supplies character to headings; its italic is used sparingly in the hero and personalization heading. DM Sans supplies navigation, prices, product names and body text. No uppercase display paragraphs. Product names wrap rather than being silently truncated. Prices use tabular numerals.

## Layout

The main container is at most 1440px, with fluid desktop gutters. Sections are 100px apart, then 76px and 58px at smaller widths. Hero and editorial features use split compositions; the mobile layout stacks them. Five-category rows become two columns with an intentional full-width final category. Featured products use five columns on desktop; between 601px and 900px, only the first three cards are shown in a three-column row. Mobile presents four in a grid and the fifth as a compact horizontal row. The catalog rail retains the full sample selection at every width.

## Elevation & Depth

Product cards stay flat. Tonal surface changes and photography provide depth. Soft offset shadows are reserved for dropdowns, dialogs, prototype tools and the standalone personalization image. No decorative halos.

## Shapes

Photography remains rectangular. Buttons have a slight corner; dialogs and tool surfaces use larger corners. Circular shapes are limited to compact icon controls and the existing chat entry point.

## Components

Primary buttons use the merchant accent and a contrast-safe foreground. Secondary shopping actions use understated text links; light buttons provide contrast on dark editorial surfaces. Product cards are single focusable links. The product rail has visible previous/next controls, touch snapping, keyboard browsing and disabled boundary states. Native FAQ disclosures preserve keyboard semantics. The mobile menu is an accessible disclosure with expanded state; Escape closes it. Dialogs use native focus containment and Escape dismissal.

## Do's and Don'ts

- Do let merchant photography and identity carry the storefront.
- Do distinguish real product capabilities from prototype presentation state.
- Do preserve actual product prices, customer quotes and merchant policies.
- Do support reduced motion and visible keyboard focus.
- Don't invent shipping guarantees, scarcity, review counts or verification badges.
- Don't imply every product supports AI Preview or Live Preview.
- Don't integrate this prototype with production without a separate approved task.
