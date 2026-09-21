---
title: "Subaru FA24D (ZN8/ZD8) Engine Swap into a Late-Model (Kouki) Toyota 86 (ZN6) or Subaru BRZ (ZC6)"
subtitle: Installation and Instruction Conversion procedure for swapping a 2022+ FA24D engine from a Toyota GR86 (ZN8) or Subaru BRZ (ZD8) into a 2017–2020 Toyota 86 (ZN6) or Subaru BRZ (ZC6), on a standalone Link G5 ECU, retaining the recipient's own manual transmission, exhaust, and engine harness
datePublished: "2026-09-20T18:00:00"
published: true
author: Ron. A (@brz_typera)
description: Step-by-step workbook for swapping a 2022+ FA24D engine from a ZN8 Toyota GR86 or ZD8 Subaru BRZ into a 2017–2020 "kouki" ZN6 Toyota 86 or ZC6 Subaru BRZ, keeping the recipient's own TL70 transaxle, exhaust, engine harness, alternator, and A/C system, wired to a Link G5 Plug-In ECU with a CAN Lambda module, with factory torque specifications and dyno results.
tags:
  - zc6
  - zn6
  - zn8
  - zd8
  - fa24d
  - fa20d
  - subaru
  - toyota
  - gr86
  - brz
  - engine-swap
  - drivetrain
  - link-ecu
---

<a id="introduction"></a>

## Introduction

<figure>
  <img src="/kb/subaru-fa24d-zn8-zd8-engine-swap-into-kouki-zc6-zn6/figure-00-engine-bay.jpg" alt="FA24D engine installed in a kouki Subaru BRZ engine bay, with the OEM black plastic intake manifold and the Link G5 ECU" />
  <figcaption>
    Figure 0: The completed swap — an FA24D in a 2017–2020 BRZ engine bay,
    on the OEM black plastic intake manifold, GR intake.
  </figcaption>
</figure>

This article describes procedures swapping the
2017–2020 ("kouki") `FA20D` engine of a `ZN6` Toyota 86 or `ZC6` Subaru BRZ
with the `FA24D` engine from a 2022+ `ZN8` Toyota GR86 or `ZD8` Subaru BRZ.
The recipient's own manual transmission, clutch hydraulics, axles, exhaust,
engine harness, alternator, A/C system, **and factory ECM** all stay with the
original car, still paired to each other exactly as shipped. Because
the swap maintains the recipient's ECM and keys, any concern about the
immobilizer does not arise here, and it means the recipient's own factory
`FA20D` ECM can run the `FA24D` long block. This document is
written using a standalone Link G5 Plug-In ECU instead — see
[Phase 2](#phase-2) for why, and for
what keeping the factory ECM would require. Please be sure to read this
document before beginning work and carry out correct installation and
handling.

This is a **different swap from the companion document**,
["Subaru FA20D Late-Model (Kouki) Engine Swap into an Early-model (Zenki) ZN6/ZC6"](/kb/subaru-fa20d-kouki-engine-swap-into-zenki-zc6-zn6).
That document argued that a kouki `FA20D` swap only makes economic sense if
one has already fallen into your lap cheaply. For the same order of effort,
**the `FA24D` is the better engine to end
up with**. This document is the result of taking that advice, and it exists
because the recipient chassis matters as much as the donor engine does. The
[companion document's](/kb/subaru-fa20d-kouki-engine-swap-into-zenki-zc6-zn6)
chassis is the 2013–2016 "zenki" `ZN6`/`ZC6`, whose
`FA20D` uses a magnetic-pickup crankshaft sensor. **This document's chassis
is the 2017–2020 "kouki" `ZN6`/`ZC6`** — the same generation as the donor's
own crank trigger technology, since the kouki `FA20D` already uses a Hall-effect
crank sensor `[RM-K]`. That single fact removes one of the two hardest
problems a first-generation-chassis `FA24D` swap otherwise has to solve, and
it is the reason this document's recipient is deliberately narrower than the
[companion document's](/kb/subaru-fa20d-kouki-engine-swap-into-zenki-zc6-zn6).

**This document does not cover the 2013–2016 zenki chassis** since they require
additional supporting modifications, trigger-type conversion chief among
them (out of scope of this document) `[C]`.

Subaru and Toyota did not sanction this conversion and do not publish a
procedure for it. This document is assembled primarily from **the author's
own completed swap** — the parts actually used, the wiring actually
changed, and the dyno numbers actually recorded on this car.
Where the author's own build speaks, it is quoted as such.
Where the manual speaks, it is quoted. Where only the community speaks, that
is marked. Where nobody knows, that is marked too.

The following symbols are displayed for important points, which must be
observed.

| Note       |                                                                                                    |
| :--------- | :------------------------------------------------------------------------------------------------- |
| ☠️ Warning | Safety precautions that must be observed (Improper handling may result in death or serious injury) |
| ⚠️ Warning | For your safety and that of your vehicle (mishandling may result in injury or accident)            |
| ☝️ Advice  | Describes information that is useful for performing the work efficiently                           |

Source markers are displayed for every specification.

| Marker   | Meaning                                                                                                                                                                                                                                                                   |
| :------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `[RM-K]` | 2017 Subaru BRZ factory service manual `G4440BE` (kouki) — covers the **recipient's own** `FA20D` mounts, sensors, transmission and wiring, all of which this swap reuses. **Does not cover the `FA24D`** — no `ZN8`/`ZD8` factory manual was consulted for this document |
| `[B]`    | The author's own completed build — first-hand fitment notes and dyno results for this specific car. Documents what worked here, not a general specification                                                                                                               |
| `[C]`    | Community/vendor-reported (`ft86club.com`, `gr86.org`, Hachi Electronics, Link Engine Management, Verus Engineering, Radium Engineering). **Verify before relying on it**                                                                                                 |

<details>
  <summary>⚠️ Warning — General</summary>

- This conversion is not emissions-certified as a unit. The `FA24D` is a
  larger-displacement engine than the recipient's original `FA20D`, and this
  swap discards the factory ECM entirely in favor of a standalone unit —
  OBD-II readiness monitors, local inspection requirements, and any
  engine-change approval process are the installer's responsibility.
- The descriptions in this manual are intended for automobile mechanics or
  persons with basic knowledge of maintenance. Do not attempt this conversion
  by inexperienced persons only.
- Tighten all fasteners to the specified torque. Insufficient or excessive
  tightening may cause parts to come off or fail, leading to serious
  accidents.

</details>

### Summary of the Conversion

**Why.** The recipient's kouki `FA20D` is rated at 205 hp / 156 lb·ft at the
crank; the `FA24D` is rated at 228 hp / 184 lb·ft `[C]`, and it arrives with
notably more torque throughout the range. On this specific car, with a
carried-over exhaust and a properly chosen intake manifold, the swap
returned **200 hp / 177 tq at the wheels**, up from **188 hp / 149 tq**
on the same exhaust before the swap — see [Dyno Results](#dyno-results) for
the full comparison and why that on-paper 12 hp / 28 tq gain undersells how
the car actually feels.

**Why there is no immobilizer detour, and why this document uses a
standalone ECU anyway.** The
[companion document on the kouki-`FA20D`-into-zenki swap](/kb/subaru-fa20d-kouki-engine-swap-into-zenki-zc6-zn6)
spends a great deal of its length on the factory ECM/immobilizer/
key security set, because that swap takes a donor's ECM and harness into a
different car, breaking the pairing between them. **This swap never does
that.** The recipient's own engine harness and its own factory ECM stay
together, in the recipient's own car, the entire time — so there is no
security set to satisfy and no registration manual to chase, regardless of
which ECU ends up running the `FA24D`. On that basis, the recipient's own
factory `FA20D` ECM can be reflashed and used to run the `FA24D` long block.

☝️ Advice: If you keep the factory ECM, have it tuned on **EcuTek** and
properly dyno-tuned. The `FA24D`'s larger displacement and different
injector and cam specification need a real calibration pass to run safely —
not a carried-over `FA20D` map.

**This document is written for, and follows throughout, a standalone
Link G5 Plug-In ECU**, paired with a **Link CAN Lambda module**, rather than
the factory-ECM path above — see [Phase 2](#phase-2).

**Why keep so much of the recipient, and so little of the donor.** The
guiding principle of this build, and the reason the parts manifest below is
short on the donor side, is: **take the `FA24D` long block and the handful
of sensors that physically differ, and leave everything else — transaxle,
exhaust, harness, alternator, A/C, mounts — on the recipient's own kouki
hardware.** This is the opposite emphasis from a same-family cross-generation
swap, where the harness and ECM travel together as a matched set. Here, nothing
about the donor's own FA24D ECM, immobilizer, or wiring makes the trip at all.

The work divides into six stages.

- **Decide the ECU and tuning strategy first.** This document follows a
  Link G5 Plug-In ECU and CAN Lambda module, chosen and ordered for the
  correct LHD/RHD market before teardown; keeping the recipient's own
  factory ECM and tuning it on EcuTek is a viable alternative, since no
  immobilizer pairing is ever broken here — see [Phase 2](#phase-2).
- **Harvest the `FA24D` long block and its differing sensors** from the
  donor — see [Phase 1](#phase-1).
- **Modify the recipient's own engine mounts** for the `FA24D`'s thicker
  mounting studs — see [Phase 4](#phase-4). This is the one step in this
  document that is a minor modification, not bolt-together.
- **Install the `FA24D` onto the recipient's own transaxle, mounts, and
  exhaust** — see [Phase 5](#phase-5).
- **Wire it in** — four sensors differ in connector, location, or both
  between `FA20D` and `FA24D`, and each is handled differently. See
  [Phase 6](#phase-6).
- **Tune it and confirm the gain** — see [Phase 7](#phase-7) and
  [Dyno Results](#dyno-results).

---

<a id="contents"></a>

## Table of Contents

- [Introduction](#introduction)
- [Compatible Vehicle Models](#compatible-vehicles)
- [Parts Manifest](#parts-manifest)
- [Tool Manifest](#tool-manifest)
- [Installation Precautions (For Installers)](#precautions)
- [Work Procedure](#work-procedure)
  - [Phase 0 — Donor and recipient inspection](#phase-0)
  - [Phase 1 — Donor harvest](#phase-1)
  - [Phase 2 — ECU and tuning strategy](#phase-2)
  - [Phase 3 — Recipient preparation](#phase-3)
  - [Phase 4 — Engine mount modification](#phase-4)
  - [Phase 5 — Mechanical installation](#phase-5)
  - [Phase 6 — Wiring integration](#phase-6)
  - [Phase 7 — Commissioning and tuning](#phase-7)
- [Dyno Results](#dyno-results)
- [Post-installation Checks and Precautions](#post-install)
- [References](#references)

---

<a id="compatible-vehicles"></a>

## Compatible Vehicle Models

### Recipient Vehicle — "Kouki"

| Item              | Specification                                                                                    |
| :---------------- | :----------------------------------------------------------------------------------------------- |
| **Applied model** | `ZN6` (Toyota 86 — Scion was discontinued in 2016, so this is not an FR-S) or `ZC6` (Subaru BRZ) |
| Model-year letter | `E`–`H` — production from 2016/07 through the platform's final MY2020 `[C]`                      |
| Engine            | `FA20D` 2.0ℓ DOHC, naturally aspirated, Hall-effect crank sensor `[RM-K]`                        |
| Transaxle         | `TL70` 6-speed manual — **retained**, not part of this conversion                                |

⚠️ Warning: **This document assumes a manual-transmission recipient throughout.**
The bellhousing and mount torques cited in this document are the `[RM-K]`
manual-transmission values; an automatic-transmission recipient's equivalent
figures differ and are not covered here.

☝️ Advice: **This document does not cover the 2013–2016 zenki `ZN6`/`ZC6`.**
See [Introduction](#introduction) for why the crank-sensor generation gap
makes that a materially different, out-of-scope job.

### Donor Vehicle

| Item              | Specification                                                                         |
| :---------------- | :------------------------------------------------------------------------------------ |
| **Applied model** | `ZN8` (Toyota GR86) or `ZD8` (Subaru BRZ)                                             |
| Model year        | 2022+ `[C]`                                                                           |
| Engine            | `FA24D` 2.4ℓ DOHC, naturally aspirated — 228 hp / 184 lb·ft at the crank, stock `[C]` |
| Transaxle         | Not used — the recipient's own `TL70` stays in the car                                |

☝️ Advice: A donor need not be a complete running car for this swap the way it
must be for a same-family cross-generation swap. Because no donor ECM,
harness, or immobilizer component makes the trip, a bare, dressed `FA24D`
long block with its own sensors is sufficient — see [Phase 1](#phase-1) for
exactly which sensors to take with it.

---

<a id="parts-manifest"></a>

## Parts Manifest

### ① Harvested from the donor (`ZN8`/`ZD8`, `FA24D`)

| No. | Product name                                              | Qty | Notes                                                                                                                                                                                                           |
| --: | :-------------------------------------------------------- | :-- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|   ① | `FA24D` engine assembly, dressed                          | 1   | Long block with the OEM black plastic intake manifold                                                                                                                                                           |
|   ② | Crankshaft position sensor                                | 1   | Hall-effect, same sensor **type** as the recipient's own kouki sensor, but a different connector `[B]` — see [Phase 6](#phase-6)                                                                                |
|   ③ | Engine coolant temperature sensor                         | 1   | Mounted at a different point on the coolant crossover pipe than the kouki `FA20D`, and a different connector `[B]` — see [Phase 6](#phase-6)                                                                    |
|   ④ | Engine oil temperature sensor                             | 1   | Different connector from the kouki `FA20D` unit `[B]` — see [Phase 6](#phase-6)                                                                                                                                 |
|   ⑤ | Engine mount hardware (bolts) from the donor's own mounts | —   | ☝️ If your `FA24D` arrives with its own mounts attached, keep the shorter bolts — they are used in the [Phase 4](#phase-4) mount modification, and are fresher hardware than reusing worn recipient bolts `[B]` |

### ② Retained from the recipient (`ZN6`/`ZC6`, kouki)

| No. | Product name                                                                      | Notes                                                                                                                                                                                                                      |
| --: | :-------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|   ⑥ | `TL70` manual transaxle                                                           | Bellhousing bolt pattern is unchanged — **3 bolts and 2 nuts, 50 N·m** `[RM-K]` — see [Phase 5](#phase-5)                                                                                                                  |
|   ⑦ | Engine Wire + Engine Room Main Wire (kouki engine harness), ECM connectors unused | ☝️ Reused with the wiring changes in [Phase 6](#phase-6). The factory ECM these connectors normally serve is **not used** — the harness is repurposed to feed the Link G5                                                  |
|   ⑧ | Front and rear engine mounting insulators                                         | ⚠️ **Require modification** for the `FA24D`'s thicker mounting studs — see [Phase 4](#phase-4)                                                                                                                             |
|   ⑨ | Exhaust manifold/headers and axle-back                                            | ☝️ This document's own build kept a **TOMEI Powered unequal-length header** and a **Fujitsubo axle-back** already fitted to the recipient — see the [dyno chart](#fig-fa24d-exhaust-dyno) in [Dyno Results](#dyno-results) |
|   ⑩ | Alternator                                                                        | ⚠️ **Must be retained from the kouki recipient, not sourced from the donor** — see [Phase 5](#phase-5) for why                                                                                                             |
|   ⑪ | A/C compressor                                                                    | Retained — see [Phase 5](#phase-5)                                                                                                                                                                                         |
|   ⑫ | Accessory drive (V-)belt                                                          | Brought over from the recipient's own kouki `FA20D` `[B]`                                                                                                                                                                  |
|   ⑬ | Brake booster vacuum pump lines                                                   | Retained unmodified — see [Phase 5](#phase-5)                                                                                                                                                                              |
|   ⑭ | Fuel pressure sensor, DI fuel rail (bank 1 side), and fuel rail cover             | ⚠️ **Transferred to the `FA24D` engine**, replacing the donor's own — this is how this build avoided repinning the fuel pressure sensor connector. See [Phase 6](#phase-6)                                                 |
|   ⑮ | Injector driver ("DI ECU")                                                        | Transferred with ⑭ as part of the same fuel-delivery assembly — see [Phase 5](#phase-5)                                                                                                                                    |
|   ⑯ | Clutch disc, release bearing, hydraulics, axles                                   | Unchanged                                                                                                                                                                                                                  |

### ③ Purchased new

| No. | Product name                                                                                                                                                | Notes                                                                                                                                                                                                                                                                                            |
| --: | :---------------------------------------------------------------------------------------------------------------------------------------------------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|   ⑰ | **Link G5 Plug-In ECU**, part `241-4000` (LHD) or `241-4200` (RHD)                                                                                          | See [Phase 2](#phase-2)                                                                                                                                                                                                                                                                          |
|   ⑱ | **Link CAN Lambda module**, part `125-1000`                                                                                                                 | Wideband O2 input for the Link G5, over CAN `[B]`                                                                                                                                                                                                                                                |
|   ⑲ | (Optional) Aftermarket engine mounts (this build used **Cusco**)                                                                                            | ☝️ OEM or aftermarket required cutting to fit — see [Phase 4](#phase-4). Any mount with the recipient's crossmember bolt pattern is a candidate, but expect to modify it                                                                                                                         |
|   ⑳ | Engine mount modification hardware — shorter bolts                                                                                                          | Sourced from the donor's own mount bolts per ⑤, or purchased new to the recipient's `[RM-K]` thread and length specification                                                                                                                                                                     |
|  ㉑ | **Verus Engineering Fuel Rail / Direct-Injector Cover & ECU Bracket** (passenger side / black), `A0023A-BLK`, or the **Radium Engineering** equivalent      | One combined part — it is both the fuel rail cover _and_ the injector driver ("DI ECU") mounting bracket, not two separate products. From the recipient's own FA20-generation stock, or the OEM black plastic FA20 cover modified to clear the `FA24D` intake manifold — see [Phase 5](#phase-5) |
|  ㉒ | Automotive wiring stock, sealed terminals, inline fuses, heat-shrink                                                                                        | For the four sensor connector jobs in [Phase 6](#phase-6)                                                                                                                                                                                                                                        |
|  ㉓ | Dielectric grease                                                                                                                                           | All reconnected engine and chassis connectors                                                                                                                                                                                                                                                    |
|  ㉔ | New crank/cam and fuel pressure sensor O-rings, sensor gaskets                                                                                              | New each time, per [RM-K] torque tables in [Phase 6](#phase-6)                                                                                                                                                                                                                                   |
|  ㉕ | High-heat engine enamel                                                                                                                                     | For refinishing the modified mounts after machining — see [Phase 4](#phase-4)                                                                                                                                                                                                                    |
|  ㉖ | **[Hachi Electronics `FA24` engine swap harness kit](https://hachielectronics.com/products/fa24-engine-swap-harness)** ("17-20" recipient, Link G5 variant) | **Optional (recommended)** — resolves the four [Phase 6](#phase-6) sensor connector jobs as a ready-made kit rather than by hand; see the advice box below                                                                                                                                       |

<details open>
  <summary>☝️ Advice — the Hachi Electronics adapter harness will shorten this job</summary>

Hachi Electronics sells a
[plug-and-play `FA24` engine swap harness](https://hachielectronics.com/products/fa24-engine-swap-harness)
that runs a `FA24D` on an **unmodified `FA20` engine harness**, and its
**"17-20" kit** — meaning a kouki recipient, exactly this document's chassis —
is offered in both a stock-ECM and a Link G5 variant. Its listed contents line
up closely with the wiring problems this document solves by hand in
[Phase 6](#phase-6):

- Oil temperature sensor adapter
- Coolant temperature sensor adapter
- EVAP purge solenoid adapter
- Crankshaft position sensor adapter

The vendor's own product listing additionally confirms that the 17-20 kit
"requires modified FA20 engine
mounts, fuel pressure sensor transfer, and direct injection ECU relocation"
`[C]` — the same three non-wiring problems [Phase 4](#phase-4),
[Phase 5](#phase-5), and [Phase 6](#phase-6) walk through here. This document
describes the from-scratch wiring path because that is what was actually done
on this build; a builder starting fresh should price the kit against their own
time before committing to hand-splicing four connectors.

</details>

Confirmation: Upon collecting these parts, immediately check that nothing is
damaged and that no harness has been cut.

---

<a id="tool-manifest"></a>

## Tool Manifest

### Hand and shop tools

| Tool                                   | Tool                                                                  |
| :------------------------------------- | :-------------------------------------------------------------------- |
| Metric socket set, 1/2" and 3/8" drive | Torque wrench, 5–25 N·m range                                         |
| Torque wrench, 20–90 N·m range         | Breaker bar                                                           |
| Engine hoist and load leveller         | Engine stand                                                          |
| Transmission jack                      | Connector pin release pick                                            |
| Soldering iron, heat-shrink            | Multimeter, with continuity and resistance                            |
| Bench grinder or angle grinder         | Machinist's tools — for the mount modification in [Phase 4](#phase-4) |
| Thread-locking compound                | Anti-seize compound                                                   |
| Catch pans, drain pans                 | Safety glasses, work gloves                                           |

### Tuning tools

☝️ Advice: **A laptop with PCLink and a Link CAN Lambda module are required
for the Link G5 path this document follows.** This document does not
publish a base map, because none of the `FA24D`-specific PCLink trigger and
calibration settings used on this build have been independently verified
against a second build. Budget for a professional tune.

If you instead keep the recipient's factory ECM (see
[Phase 2](#phase-2)), PCLink and the CAN Lambda module do not apply — but
tuning that ECM on **EcuTek**, with a proper dyno tune, is strongly
recommended regardless of which ECU ends up running the `FA24D`. See
[Phase 2](#phase-2) and [Phase 7](#phase-7).

---

<a id="precautions"></a>

## Installation Precautions (For Installers)

<details open>
  <summary>☠️ Warning</summary>

- **Disconnect the negative battery terminal** before beginning electrical
  work.
- Support the vehicle on rated stands. Do not work under a vehicle held only
  by a jack. The engine is the heaviest single assembly you will move in this
  job.
- Allow the exhaust system to cool fully before removal.
- Depressurise the fuel system before disconnecting the fuel line.

</details>

<details open>
  <summary>⚠️ Warning</summary>

- **Do not carry a torque spec from the `FA20D` to the `FA24D` without
  checking this document.** Where this document cites `[RM-K]`, that figure
  is for the **kouki `FA20D` hardware the recipient is keeping** — mounts,
  bellhousing, sensors of the same physical design. It is not a `FA24D`
  factory figure, because no `FA24D` factory manual was consulted for this
  document.
- **Do not assume the aftermarket mount torque given in this document
  generalizes to your own mount brand.** The 47 N·m figure in
  [Phase 4](#phase-4) is specific to the Cusco mount used on this build
  `[B]`, not a Subaru factory value.
- Photograph every connector, ground strap, and bracket before disconnecting
  it, and label every harness branch as you free it. This matters more than
  usual on this job — four connectors in [Phase 6](#phase-6) get cut and
  re-spliced, and there is no factory diagram of the result to check your
  work against afterward.
- Apply dielectric grease to all engine connectors on reassembly.

</details>

<details open>
  <summary>☝️ Advice</summary>

- **Decide your ECU part number and tuning plan before you buy mount
  hardware.** Nothing about the Link G5/CAN Lambda decision in
  [Phase 2](#phase-2) depends on how far teardown has progressed, and getting
  it wrong is expensive to unwind later.
- Take the donor's own engine mount bolts along with the `FA24D` if it
  arrives with its mounts still attached — see [Phase 1](#phase-1).

</details>

---

<a id="work-procedure"></a>

## Work Procedure

<a id="phase-0"></a>

### Phase 0 — Donor and Recipient Inspection

(0.1) Confirm the donor engine is `FA24D`, and record whatever provenance is
available for it — donor VIN if pulled from a complete car, or a build/serial
tag if bought as a long block.

(0.2) Perform a compression test and, if possible, a leakdown test on the
donor engine before committing to it. This is the last point at which the
long block can be assessed cheaply.

(0.3) Confirm the recipient's model-year letter falls in the kouki `E`–`H`
range and that its transaxle is the `TL70` manual — see
[Compatible Vehicle Models](#compatible-vehicles). This document assumes
both from here on.

(0.4) Photograph and label every connector, ground, and bracket on the
recipient's own `FA20D` before disconnecting anything, with particular
attention to the four sensors that will need new wiring in
[Phase 6](#phase-6): the crankshaft position sensor, the engine coolant
temperature sensor, the engine oil temperature sensor, and the fuel pressure
sensor/DI fuel rail.

---

<a id="phase-1"></a>

### Phase 1 — Donor Harvest

(1.1) Remove the `FA24D` from the donor, dressed with its intake manifold,
throttle body, and exhaust manifold. Drain its oil and coolant if it arrives
wet.

(1.2) Harvest the following sensors with the engine, since each differs from
the recipient's kouki `FA20D` equivalent in connector, mounting location, or
both, and the recipient's harness will be adapted to reach them in
[Phase 6](#phase-6):

| Item                              | Disposition | Why it travels with the engine                                                                                       |
| :-------------------------------- | :---------- | :------------------------------------------------------------------------------------------------------------------- |
| Crankshaft position sensor        | **Keep**    | Hall-effect, same signal type as the kouki `FA20D` sensor, but a different connector `[B]` — see [Phase 6](#phase-6) |
| Engine coolant temperature sensor | **Keep**    | Mounted at a different point on the crossover pipe, different connector `[B]` — see [Phase 6](#phase-6)              |
| Engine oil temperature sensor     | **Keep**    | Different connector `[B]` — see [Phase 6](#phase-6)                                                                  |

(1.3) **Do not take the donor's fuel pressure sensor or DI fuel rail.** This
build instead transferred the recipient's own kouki-generation fuel pressure
sensor, fuel delivery pipe (bank 1 side), and injector driver ("DI ECU")
onto the `FA24D` engine — see [Phase 5](#phase-5) and [Phase 6](#phase-6).
Leave the donor's own fuel-delivery assembly with the donor's shell.

(1.4) **Do not take the donor's ECM, engine harness, alternator, or engine
mounts as functional parts.** None of them are used in this build. If the
`FA24D` arrives with its own engine mounts attached, keep only their
**bolts** — see [Phase 4](#phase-4) — and set the mounts themselves aside.

☝️ Advice: **Leaving the donor's ECM and harness behind is exactly what
keeps this swap free of any immobilizer question.** The recipient's own
engine harness and its own factory ECM never leave the recipient's car, and
are never asked to pair with a different immobilizer or key set — see
[Phase 2](#phase-2) for what that means for your ECU choice.

⚠️ Warning: The donor's mounts and the recipient's mounts are not
interchangeable as-is even though both are Subaru-pattern insulators — the
`FA24D` mount uses a thicker stud than the `FA20D` mount `[B]`. This is
addressed by modifying the **recipient's** `FA20D` mounts in [Phase 4](#phase-4), not
by fitting the donor's mounts directly.

---

<a id="phase-2"></a>

### Phase 2 — ECU and Tuning Strategy

☝️ Advice: **Decide this before you buy anything else.** The recipient's own
`FA20D` engine harness and factory ECM stay paired to each other, and to the
car's own immobilizer and keys, throughout this swap, whichever ECU ends up
running the engine. The open question is purely which ECU to run the `FA24D`
on, and this document's example is a standalone Link G5.

<details open>
  <summary>☝️ Advice — the factory ECM is a viable option too, tuned properly</summary>

Because no immobilizer pairing is ever broken in this swap, the recipient's
own factory `FA20D` ECM can be reflashed and used to run the
`FA24D` long block, with the same [Phase 6](#phase-6) sensor wiring changes
this document makes regardless of ECU choice. **If you take this route, have
the car tuned on EcuTek and properly dyno-tuned** — the `FA24D`'s larger
displacement, injectors, and cam specification need a real calibration pass
to run safely, not a carried-over `FA20D` map.

**This document does not walk through that path.** From here on, this
document is written for, and assumes, the standalone Link G5 route below.

</details>

This build used a **Link G5 Plug-In ECU**, part `241-4000` — the
**left-hand-drive (LHD)** part number for this application, on a
US-market car `[B]` — and a **Link CAN Lambda module**, part `125-1000`, for
wideband O2 input over CAN `[B]`.

☝️ Advice: The right-hand-drive equivalent is part `241-4200`. Confirm
against Link's current dealer page for your own market before ordering.

☝️ Advice: **This document does not publish `FA24D` PCLink trigger or fuel
pressure calibration settings.** The
[companion kouki-`FA20D` document](/kb/subaru-fa20d-kouki-engine-swap-into-zenki-zc6-zn6)
is able to publish exact settings for the `FA20D` because the community has converged
on a single, cross-checked set of values for that engine on this ECU. No
equivalent independently-verified `FA24D` settings exist for this document to
cite responsibly. Budget for a professional tune, and treat your tuner's base
map as the source of truth over anything in this document.

---

<a id="phase-3"></a>

### Phase 3 — Recipient Preparation

(3.1) With the ECU strategy from [Phase 2](#phase-2) settled, remove the
recipient's kouki `FA20D` following the standard factory procedure — battery,
fluids, intake, exhaust, engine harness connectors (labelled per
[Phase 0](#phase-0) conventions), mounts, and the engine-to-transaxle bolts.

(3.2) Leave the transaxle, clutch hydraulics, axles, and subframe in place.

(3.3) **Leave the alternator, A/C compressor, and brake booster vacuum pump
lines connected to the recipient's own chassis harness and plumbing** — they
are not disturbed by this swap beyond what is needed to lift the old engine
clear. See [Phase 5](#phase-5) for why each is retained rather than sourced
from the donor.

☝️ Advice: **Do not disconnect the A/C lines on the recipient.** It is not
necessary.

<figure>
  <img src="/kb/subaru-fa24d-zn8-zd8-engine-swap-into-kouki-zc6-zn6/empty-engine-bay.jpg" alt="The recipient's engine bay with the FA20D removed, showing the transmission bellhousing, alternator, and A/C compressor and lines left connected to the chassis" />
  <figcaption>
    Figure 1: Do not disconnect the A/C lines on the recipient.
  </figcaption>
</figure>

(3.4) Set the recipient's own fuel pressure sensor, DI fuel rail (bank 1
side), and injector driver aside intact, rather than scrapping them with the
old long block — they are reused on the `FA24D` in [Phase 5](#phase-5).

---

<a id="phase-4"></a>

### Phase 4 — Engine Mount Modification

<figure>
  <img src="/kb/subaru-fa24d-zn8-zd8-engine-swap-into-kouki-zc6-zn6/figure-03-mount-before-after.jpg" alt="Before and after photographs of an engine mount modified by cutting off the protruding block and shortening the bolt to clear the thicker FA24D mounting stud" />
  <figcaption>
    Figure 2: The engine mount before and after modification — the protruding
    block cut away and a shorter bolt fitted.
  </figcaption>
</figure>

The `FA24D`'s engine mount stud is thicker than the kouki `FA20D`'s `[B]`,
which is why the recipient's own mounts cannot bolt straight onto the new
engine. Two approaches exist for this: **Option 1**, modifying the
recipient's own mount, is what this build used and is the only one described
here.

(4.1) Identify the small block that protrudes from the mount and cut it away.

(4.2) Fit a shorter bolt in its place. ☝️ Advice: **if your `FA24D` arrived
with its own engine mounts attached, use the bolts from those mounts** — they
are correctly sized for the thicker `FA24D` stud already, and on this build
they were fresher hardware than reusing the recipient's own worn bolts `[B]`.

(4.3) Smooth and clean the cut and the surrounding surface.

(4.4) Refinish with a quick coat of high-heat engine enamel.

(4.5) Attach the modified mount to the engine and torque to
**47 N·m (34.7 ft·lbf)** `[B]`.

---

<a id="phase-5"></a>

### Phase 5 — Mechanical Installation

<figure>
  <img src="/kb/subaru-fa24d-zn8-zd8-engine-swap-into-kouki-zc6-zn6/kouki-front-engine-mounting-bracket-exploded.png" alt="Subaru factory exploded-view diagram of the kouki FA20 front engine mounting bracket, injector driver, and related hardware with torque values" />
  <figcaption>
    Figure 3: The recipient's own front engine mounting hardware and injector
    driver ("DI ECU") location, from the kouki <code>FA20D</code>'s own
    partial-engine assembly diagram. The modified mount in
    <a href="#phase-4">Phase 4</a> bolts to this same bracket location.
    <code>2017 Subaru BRZ Service Manual G4440BE</code>, page EM–58.
  </figcaption>
</figure>

(5.1) Lower the `FA24D`, on its modified mounts from [Phase 4](#phase-4),
onto the recipient's own front and rear mount locations, and mate it to the
recipient's `TL70` transaxle.

| Joint                                            | N·m | kgf·cm | ft·lbf | Notes                                                                                          | Source   |
| :----------------------------------------------- | --: | -----: | :----- | :--------------------------------------------------------------------------------------------- | :------- |
| Bellhousing, 3 bolts and 2 nuts                  |  50 |    510 | 36.9   | Unchanged bolt pattern across `FA20D`/`FA24D` fitment `[RM-K]`                                 | `[RM-K]` |
| Engine mounting insulator RR No.1, 4 bolts       |  40 |    408 | 29.5   | Rear insulator, on the transaxle side                                                          | `[RM-K]` |
| Engine rear mounting member, 4 bolts             |  65 |    663 | 47.9   |                                                                                                | `[RM-K]` |
| Engine rear mounting member, 2 nuts              |  55 |    561 | 40.6   |                                                                                                | `[RM-K]` |
| Front engine mounting bracket, per side          |  35 |    357 | 25.8   | Factory `FA20D` bracket-to-engine torque — see the ⚠️ note below for the modified mount itself | `[RM-K]` |
| Clutch release cylinder to transmission, 2 bolts |  37 |    377 | 27.3   |                                                                                                | `[RM-K]` |

<figure>
  <img src="/kb/subaru-fa24d-zn8-zd8-engine-swap-into-kouki-zc6-zn6/kouki-rear-mounting-member-crossmember-exploded.png" alt="Subaru factory exploded-view diagram of the kouki manual transmission engine rear mounting member, engine mounting insulator RR No.1, and clutch release cylinder with torque values" />
  <figcaption>
    Figure 4: The recipient's own rear mount and engine rear mounting member,
    on the manual transaxle housing.
    <code>2017 Subaru BRZ Service Manual G4440BE</code>, page MT–17.
  </figcaption>
</figure>

⚠️ Warning: **The 35 N·m front bracket figure above is the factory `FA20D`
bracket-to-engine torque, cited for reference only.** It is not a
confirmation that the modified mount in [Phase 4](#phase-4) uses the same
joint or the same torque — that mount's own 47 N·m value is the one to use at
that specific bolt. See the warning in [Phase 4](#phase-4).

(5.2) Reconnect the exhaust. This build kept its existing **TOMEI Powered
unequal-length header and Fujitsubo axle-back** without modification `[B]` —
see [Dyno Results](#dyno-results) for how this exhaust performed on both the
`FA20D` and the `FA24D`, and the [dyno chart](#fig-fa24d-exhaust-dyno) there
for a later overpipe/midpipe refinement to the same exhaust.

(5.3) **Choose the intake manifold deliberately — this is the single largest
lever in this swap.** This build initially retrofitted the wrinkle-red
intake manifold unique to late-model manual-transmission kouki `FA20D`
BRZs, out of curiosity about how it would compare to the `FA24D`'s own OEM
black plastic manifold. That configuration made **175 hp / 170 tq**. Fitting
the OEM black plastic `FA24D` manifold in its place immediately yielded gains
across the entire powerband, to **200 hp / 177 tq** — a **25 hp / 7 tq** net
gain from the manifold alone, "well worth it" `[B]`. **Use the OEM black
plastic `FA24D` intake manifold.**

☝️ Advice: this direction — the `FA24D`'s
own manifold outperforming a retrofitted kouki-generation red manifold — is
corroborated by at least one independent dyno comparison thread in the
`gr86.org` community, though the exact margins reported there differ from
this build's own numbers `[C]`.

(5.4) Fit the retained fuel pressure sensor, DI fuel rail (bank 1 side), and
injector driver from [Phase 3](#phase-3) onto the `FA24D`'s injectors, using
the **Verus Engineering Fuel Rail / Direct-Injector Cover & ECU Bracket,
`A0023A-BLK`** (or the Radium Engineering equivalent) — this is a single
combined part, not a cover and a bracket bought separately, and it does both
jobs at once: it covers the fuel rail from the recipient's own
FA20-generation stock (or the OEM black plastic FA20 cover modified to clear
the OEM black plastic `FA24D` intake manifold from (5.3)), and it mounts the
injector driver ("DI ECU") to the engine in the same piece, rather than
requiring a separate bracket or an improvised mount `[B]`.

<figure>
  <img src="/kb/subaru-fa24d-zn8-zd8-engine-swap-into-kouki-zc6-zn6/kouki-fuel-pressure-sensor-di-fuel-rail-exploded.png" alt="Subaru factory exploded-view diagram of the kouki FA20 fuel pressure sensor and DI fuel delivery pipe with torque values" />
  <figcaption>
    Figure 5: The fuel pressure sensor and DI fuel delivery pipe (bank 1
    side) transferred intact from the recipient's own kouki <code>FA20D</code>.
    <code>2017 Subaru BRZ Service Manual G4440BE</code>, page FU–40.
  </figcaption>
</figure>

| Joint                                     | N·m | kgf·cm | ft·lbf | Notes                                                                               | Source   |
| :---------------------------------------- | --: | -----: | :----- | :---------------------------------------------------------------------------------- | :------- |
| Fuel pressure sensor to delivery pipe     |  46 |    469 | 33.9   | New sensor threads dry, do not re-torque once tightened                             | `[RM-K]` |
| Fuel delivery pipe (bank 1 side), 2 bolts |  19 |    194 | 14.0   |                                                                                     | `[RM-K]` |
| Injector driver ("DI ECU"), 3 bolts       | 6.4 |     65 | 4.7    | Grounds to the engine through this joint — keep the mounting surface clean `[RM-K]` | `[RM-K]` |

(5.5) The Verus/Radium cover-and-bracket from (5.4) makes the engine bay
noticeably tidier than an improvised DI ECU mount `[B]`.

<figure>
  <img src="/kb/subaru-fa24d-zn8-zd8-engine-swap-into-kouki-zc6-zn6/figure-07-di-ecu-bracket.jpg" alt="Fuel rail cover and DI ECU bracket installed on the FA24D engine, mounting the injector driver via a Verus Engineering or Radium Engineering combined part" />
  <figcaption>
    Figure 6: The Verus/Radium fuel rail cover and DI ECU bracket installed,
    with the injector driver mounted to it.
  </figcaption>
</figure>

(5.6) Fit the recipient's own alternator to the `FA24D`.

<figure>
  <img src="/kb/subaru-fa24d-zn8-zd8-engine-swap-into-kouki-zc6-zn6/kouki-alternator-exploded.png" alt="Subaru factory exploded-view diagram of the kouki FA20 alternator assembly with mounting bolt torque values" />
  <figcaption>
    Figure 7: The recipient's own kouki <code>FA20D</code> alternator.
    Retained on this build rather than sourced from the donor — see the
    warning below.
    <code>2017 Subaru BRZ Service Manual G4440BE</code>, page BH–30.
  </figcaption>
</figure>

<details open>
  <summary>⚠️ Warning — do not fit the donor's `FA24D` alternator</summary>

The `FA20D` alternator must be used on the `FA24D`, not the donor's own
unit `[B]`.

Mounting bolt torque, unchanged from the recipient's own kouki figures:

| Joint                             |  N·m | kgf·cm | ft·lbf | Source   |
| :-------------------------------- | ---: | -----: | :----- | :------- |
| Alternator ASSY, 2 mounting bolts |   25 |    255 | 18.4   | `[RM-K]` |
| Alternator B-terminal nut         | 15.5 |    158 | 11.4   | `[RM-K]` |

☝️ Advice: **One mounting hole will not line up.** The `FA20D` alternator's
mounting tabs do not perfectly match the `FA24D`'s bracket at every hole —
one hole on the right does not line up on this build, which appears to be a
tolerable mismatch rather than a fault, since the alternator seats and
tensions correctly on the remaining fasteners `[B]`. The community reports
the same mismatch and notes at least one vendor offering a modified bracket
to resolve it fully `[C]`.

</details>

(5.7) Route and fit the recipient's own accessory drive belt.

<figure>
  <img src="/kb/subaru-fa24d-zn8-zd8-engine-swap-into-kouki-zc6-zn6/kouki-v-belt-routing-exploded.png" alt="Subaru factory exploded-view diagram of the kouki FA20 V-belt routing around the alternator, A/C compressor, water pump, and idler pulleys" />
  <figcaption>
    Figure 8: The recipient's own kouki <code>FA20D</code> V-belt routing,
    kept unmodified on this build.
    <code>2017 Subaru BRZ Service Manual G4440BE</code>, page EM–5.
  </figcaption>
</figure>

☝️ Advice: Bring the belt over from the recipient's own kouki `FA20D` rather
than sourcing a `FA24D`-specific part `[B]`.

(5.8) Fit the recipient's own A/C compressor and connect its existing lines —
unchanged from the recipient's own kouki fitment.

(5.9) Reconnect the recipient's own brake booster vacuum pump lines,
unmodified.

<figure>
  <img src="/kb/subaru-fa24d-zn8-zd8-engine-swap-into-kouki-zc6-zn6/kouki-vacuum-pump-assy-exploded.png" alt="Subaru factory exploded-view diagram of the kouki FA20 vacuum pump assembly that supplies the brake booster, with torque values" />
  <figcaption>
    Figure 9: The recipient's own vacuum pump assembly, the brake booster's
    vacuum source, retained unmodified on this build.
    <code>2017 Subaru BRZ Service Manual G4440BE</code>, page BR–32.
  </figcaption>
</figure>

| Joint                                     | N·m | kgf·cm | ft·lbf | Source   |
| :---------------------------------------- | --: | -----: | :----- | :------- |
| Vacuum pump ASSY, union-to-connector hose |  16 |    163 | 11.8   | `[RM-K]` |

---

<a id="phase-6"></a>

### Phase 6 — Wiring Integration

Four sensors differ between the kouki `FA20D` and the `FA24D` in a way this
build had to wire around, and each was handled differently. This is the
section a builder considering the Hachi Electronics adapter harness (see the
advice box in [Parts Manifest](#parts-manifest)) should weigh most carefully
against doing it by hand.

(6.1) **Crankshaft position sensor — repin the connector, keep the signal
type.** Because the recipient is kouki, its own `FA20D` crank sensor is
already Hall-effect, the same signal type the `FA24D` sensor uses `[RM-K]`
`[B]`. Only the connector differs. Wire the `FA24D` sensor's connector into
the recipient's harness at the point where the kouki `FA20D` connector used
to terminate, and confirm pin-for-pin against the recipient's own sensor
before cutting anything.

<figure>
  <img src="/kb/subaru-fa24d-zn8-zd8-engine-swap-into-kouki-zc6-zn6/kouki-crankshaft-position-sensor-exploded.png" alt="Subaru factory exploded-view diagram of the kouki FA20 crankshaft position sensor with mounting bolt torque" />
  <figcaption>
    Figure 10: The recipient's own kouki crankshaft position sensor mount —
    the physical mounting point and torque are unchanged; only the
    <code>FA24D</code> sensor's connector differs.
    <code>2017 Subaru BRZ Service Manual G4440BE</code>, page ES–685.
  </figcaption>
</figure>

| Joint                           | N·m | kgf·cm | ft·lbf | Source   |
| :------------------------------ | --: | -----: | :----- | :------- |
| Crankshaft position sensor bolt | 6.4 |     65 | 4.7    | `[RM-K]` |

☝️ Advice: **With the Hachi Electronics kit** (see [Parts Manifest](#parts-manifest)),
skip the repin — plug its crankshaft position sensor adapter in between the
`FA24D` sensor and the recipient's harness instead of splicing anything.

(6.2) **Engine coolant temperature sensor — lengthen and repin.** The
`FA24D`'s coolant temperature sensor sits at a different point on the
crossover pipe than the kouki `FA20D`'s own sensor, and uses a different
connector `[B]`. Lengthen the recipient's harness wiring to reach the new
location and repin to the `FA24D` connector.

<figure>
  <img src="/kb/subaru-fa24d-zn8-zd8-engine-swap-into-kouki-zc6-zn6/kouki-engine-coolant-temperature-sensor-exploded.png" alt="Subaru factory exploded-view diagram of the kouki FA20 engine coolant temperature sensor with mounting torque" />
  <figcaption>
    Figure 11: The recipient's own kouki coolant temperature sensor location —
    for reference only. The <code>FA24D</code>'s own sensor sits elsewhere on
    the crossover pipe.
    <code>2017 Subaru BRZ Service Manual G4440BE</code>, page ES–698.
  </figcaption>
</figure>

| Joint                             | N·m | kgf·cm | ft·lbf | Notes               | Source   |
| :-------------------------------- | --: | -----: | :----- | :------------------ | :------- |
| Engine coolant temperature sensor |  18 |    184 | 13.3   | New gasket `[RM-K]` | `[RM-K]` |

☝️ Advice: **With the Hachi Electronics kit**, its coolant temperature
sensor adapter is a pre-made pigtail already sized to reach the `FA24D`'s
relocated sensor and adapt its connector — plug it in rather than
lengthening and repinning the recipient's harness by hand.

(6.3) **Engine oil temperature sensor — repin the connector.** The `FA24D`'s
oil temperature sensor uses a different connector from the kouki `FA20D`
unit `[B]`. Repin to match.

<figure>
  <img src="/kb/subaru-fa24d-zn8-zd8-engine-swap-into-kouki-zc6-zn6/kouki-engine-oil-temperature-sensor-exploded.png" alt="Subaru factory exploded-view diagram of the kouki FA20 engine oil temperature sensor with mounting torque" />
  <figcaption>
    Figure 12: The recipient's own kouki oil temperature sensor mount — the
    physical location and torque are unchanged; only the connector differs.
    <code>2017 Subaru BRZ Service Manual G4440BE</code>, page ES–701.
  </figcaption>
</figure>

| Joint                         | N·m | kgf·cm | ft·lbf | Notes               | Source   |
| :---------------------------- | --: | -----: | :----- | :------------------ | :------- |
| Engine oil temperature sensor |  18 |    184 | 13.3   | New gasket `[RM-K]` | `[RM-K]` |

☝️ Advice: **With the Hachi Electronics kit**, plug its oil temperature
sensor adapter in between the `FA24D` sensor and the recipient's harness
instead of repinning by hand.

(6.4) **Fuel pressure sensor — no rewiring needed, by design.** Because the
whole recipient fuel pressure sensor, DI fuel rail, and injector driver were
transferred onto the `FA24D` in [Phase 5, step (5.4)](#phase-5), the
sensor's connector never has to be adapted — the recipient's own harness
plugs into the recipient's own sensor, now sitting on the new engine. This is
the one sensor difference this build engineered around entirely rather than
wiring around.

☝️ Advice: **The Hachi Electronics kit does not change this step.** Its own
product listing requires the same fuel pressure sensor transfer described
here — the kit's contents include no fuel pressure sensor adapter, so
(6.4) is the procedure whether or not you buy the kit.

(6.5) Apply dielectric grease to every reconnected connector.

---

<a id="phase-7"></a>

### Phase 7 — Commissioning and Tuning

(7.1) Fill oil and coolant. Prime the oil system before the first crank if
the engine sat dry for any length of time.

(7.2) **There is no immobilizer step.** The Link G5 has no factory
immobilizer dependency, so unlike the
[companion kouki-`FA20D` document](/kb/subaru-fa20d-kouki-engine-swap-into-zenki-zc6-zn6),
there is nothing to register before the first start.

(7.3) First start: check for leaks, listen for any timing-related knock or
misfire that would indicate a crank-sensor wiring fault from
[Phase 6](#phase-6), and scan for stored codes on the Link G5.

(7.4) Confirm the charging system is functioning — a fault or a marginal
connection at the alternator's connector, noted in
[Phase 5, step (5.6)](#phase-5), will typically surface quickly as a charge
warning.

(7.5) Have the car professionally tuned on the Link G5, with the CAN Lambda
module providing wideband feedback. See [Dyno Results](#dyno-results) for
what this build achieved with the OEM black plastic intake manifold from
[Phase 5, step (5.3)](#phase-5).

---

<a id="dyno-results"></a>

## Dyno Results

| Configuration                                                                            |      HP |      TQ | Notes                                                                    |
| :--------------------------------------------------------------------------------------- | ------: | ------: | :----------------------------------------------------------------------- |
| Kouki `FA20D` (pre-swap), TOMEI Powered unequal headers + Fujitsubo axle-back, on ECUTek |     188 |     149 | Baseline: this same exhaust, on this same car, before the swap `[B]`     |
| `FA24D`, wrinkle-red kouki manual-only intake manifold retrofit, Link G5                 |     175 |     170 | Interim configuration, tested out of curiosity — see [Phase 5](#phase-5) |
| `FA24D`, OEM black plastic intake manifold, Link G5, same exhaust as baseline            |     200 |     177 | Final configuration                                                      |
| **Net change vs. kouki `FA20D` baseline**                                                | **+12** | **+28** | See discussion below                                                     |

☝️ Advice: **A 12 hp / 28 tq gain understates the swap.** The horsepower
number looks unimpressive set against the effort of an engine swap, but the
larger-displacement `FA24D`'s torque curve is broader and arrives lower in
the rev range than the `FA20D`'s did on the same exhaust, which is felt as a
significant improvement across the car's whole operating range in normal
driving, not just at the dyno's peak numbers `[B]`.

⚠️ Warning: **The baseline and post-swap dyno runs were made on different
platforms** — ECUTek for the `FA20D` baseline, Link G5/PCLink for the swap.
Different dynos, correction factors, and tuning platforms do not always
produce directly comparable absolute numbers even on the same car and the
same exhaust; treat the **shape** of the comparison (manifold choice
mattering more than the swap itself) as more reliable than the exact
delta `[B]`.

### Exhaust Refinement — Overpipe and Midpipe

<a id="fig-fa24d-exhaust-dyno"></a>

<figure>
  <img src="/kb/subaru-fa24d-zn8-zd8-engine-swap-into-kouki-zc6-zn6/fa24d-dyno-chart.jpg" alt="Dyno chart titled Adams BRZ FA24 Baseline number 8, showing peak torque and horsepower versus RPM on the FA24D before and after fitting an overpipe and midpipe, on the TOMEI Powered unequal-length header and Fujitsubo axle-back exhaust" />
  <figcaption>
    Figure 13: <code>DYNOmite</code> test "Adams BRZ FA24 Baseline #8," run
    by Kinetic Motorworks, on the <code>FA24D</code> with the TOMEI Powered
    unequal-length header and Fujitsubo axle-back already fitted, 93 octane
    — before and after adding an overpipe and midpipe.
  </figcaption>
</figure>

| Configuration                                                       |      WHP |        TQ | Notes                                                         |
| :------------------------------------------------------------------ | -------: | --------: | :------------------------------------------------------------ |
| `FA24D`, TOMEI header + Fujitsubo axle-back, baseline               |    210.5 |     176.3 | Before fitting the overpipe and midpipe — see Figure 13 `[B]` |
| `FA24D`, TOMEI header + Fujitsubo axle-back, + overpipe and midpipe |    216.8 |     186.4 | Final — see Figure 13 `[B]`                                   |
| **Net change**                                                      | **+6.3** | **+10.1** |                                                               |

☝️ Advice: **This is a separate dyno session, on a different dyno**
(`DYNOmite`, run by Kinetic Motorworks) **from the ECUTek/Link G5 comparison
above — do not merge these numbers into the main table.** It documents a
later refinement to the same TOMEI header and Fujitsubo axle-back already
fitted to this car (see [Parts Manifest](#parts-manifest) item ⑨ and
[Phase 5, step (5.2)](#phase-5)), not a different intake manifold or ECU
configuration.

### Final Thoughts

Across every dyno session recorded on this car, the same pattern holds: the
`FA24D` nets significant torque benefits to drivability and fun, with decent
horsepower gains on top — the torque is what's felt from the driver's seat,
even where the horsepower delta alone looks modest.

**The intake manifold decision is worth restating plainly.** The OEM black
plastic `FA24D` manifold looks a lot less cool than the kouki `FA20D`'s
wrinkle-red manifold, but it nets considerably more torque and horsepower —
see [Phase 5, step (5.3)](#phase-5). Looks lost to power, decisively.

**A full exhaust is also worth it.** The overpipe and midpipe refinement
above, on top of the TOMEI header and Fujitsubo axle-back already fitted,
is a real gain for a comparatively small job — see
[Figure 13](#fig-fa24d-exhaust-dyno).

☝️ Advice: **The OEM `FA24D` intake manifold outperforms nearly every
aftermarket intake this build has compared it against, with one
exception** — the **GR Performance intake** produced the best results of
anything tested `[B]`. If you are shopping for an intake upgrade, this is
the one to look at first.

---

<a id="post-install"></a>

## Post-installation Checks and Precautions

- Re-torque the modified engine mount and bellhousing fasteners after the
  first several drive cycles, particularly the engine mount.
- Confirm no stored DTCs related to crank position, coolant temperature, oil
  temperature, or charging system, once the Link G5's own readiness checks
  have had a chance to run.
- Recheck the four re-spliced connectors from [Phase 6](#phase-6) under
  load after the first few heat cycles. A marginal splice on a sensor signal
  tends to show up as an intermittent or out-of-range reading rather than an
  outright dead circuit.
- Check the alternator's mismatched mounting hole from
  [Phase 5, step (5.6)](#phase-5) periodically for movement, even though it
  is expected not to fully engage.

---

<a id="references"></a>

## References

- Thanks to Andy Smedegard at ASMotorsports.
- Thanks to Ryan Widing at Kinetic Motorworks.
- Thanks to Link ECU.
- `[RM-K]` 2017 Subaru BRZ Service Manual `G4440BE` — cited pages EM–5, EM–58,
  EM–108, ES–685–686, ES–698–699, ES–701–702, FU–40–42, FU–43–44, BH–30–31,
  BR–32–33, MT–15–17, MT–19–22, MT–26, AT–220, AT–226–227, AT–230.
- `[B]` The author's own completed `FA24D`-into-kouki swap — parts used,
  wiring changes made, and dyno results recorded on this car.
- `[C]` `ft86club.com` and `gr86.org` forum threads on `FA24D`-into-first-generation-chassis
  swaps, the Hachi Electronics `FA24` engine swap harness product listing,
  the Link Engine Management GT86/BRZ/FR-S plug-in ECU dealer page, and the
  Verus Engineering and Radium Engineering DI ECU bracket product listings.
