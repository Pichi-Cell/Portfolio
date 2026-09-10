---
title: "Building a small telemetry pipeline"
description: "A practical look at the boundaries between sensors, messages, storage, and the interface that makes industrial data useful."
pubDate: 2026-09-10
lang: en
translationKey: telemetry-pipeline
slug: building-a-small-telemetry-pipeline
tags:
  - Embedded systems
  - MQTT
  - TypeScript
draft: false
---

Industrial telemetry starts with a deceptively simple question: **what happened, and when?** The answer becomes useful only when every layer preserves enough context for the next one.

## Start with a clear event

A sensor reading should carry more than a number. A compact event might look like this:

```ts
type TelemetryEvent = {
  deviceId: string;
  metric: string;
  value: number;
  unit: string;
  recordedAt: string;
};
```

This shape keeps the data portable. The edge device can publish it over MQTT, a worker can validate it, and the database can store it without knowing anything about the screen that will eventually display it.

## Keep the boundaries boring

The most valuable design decision is often the least exciting one: make each boundary explicit. Validate messages at ingestion, use stable topic names, and keep persistence separate from presentation. When a compressor changes firmware, the dashboard should not need to change with it.

That separation also makes the system easier to test. A fixture can represent a real message, while the application tests can focus on how that message is aggregated and presented.

## A small system can still be thoughtful

Good telemetry is not about collecting everything. It is about collecting the right signals with enough context to make a decision later. Start with one metric, one device, and one useful question. Then let the next question guide the next piece of the system.
