---
title: "Subaru TL70 Manual Transmission Swap into an Automatic-equipped ZC6/ZN6 Subaru BRZ, Toyota 86, or Scion FR-S"
subtitle: Installation and Instruction Conversion procedure for swapping a complete TL70 6-speed manual transaxle, pedal box, shifter, and clutch hydraulics from a manual-equipped ZC6/ZN6 donor into a ZC6/ZN6 that left the factory with the Aisin TG6A automatic, retaining the recipient's own FA20D engine and ECM
datePublished: "2026-10-15T18:00:00"
published: true
author: Ron. A (@brz_typera)
description: Step-by-step workbook for converting an automatic-transmission ZC6 Subaru BRZ or ZN6 Scion FR-S/Toyota 86 to a manual TL70 transaxle, covering the pedal box, clutch hydraulics, flywheel, shift linkage, starter, and the Transmission Wire harness changes, with factory torque specifications from the 2013 and 2017 Subaru BRZ factory manuals.
tags:
  - zc6
  - zn6
  - tl70
  - fa20d
  - subaru
  - toyota
  - scion
  - manual-transmission
  - clutch
  - drivetrain
---

<a id="introduction"></a>

## Introduction

<figure>
  <img data-pending-src="/kb/subaru-tl70-manual-transmission-swap-into-automatic-zc6-zn6/figure-00.jpg" src="/kb/no-image-available.svg" alt="TL70 six-speed manual transaxle on a stand beside a ZC6 Subaru BRZ that came from the factory with the automatic transmission" />
  <figcaption>
    Figure 0: A donor TL70 6-speed manual transaxle, pulled complete with its
    own bellhousing, pedal box, and shift linkage, beside an automatic-equipped
    recipient.
  </figcaption>
</figure>

This article describes procedures and precautions for converting a `ZN6`
Scion FR-S/Toyota 86 or `ZC6` Subaru BRZ built with the **Aisin TG6A 6-speed
automatic transmission** to the **TL70 6-speed manual transaxle**, using the
complete transaxle, pedal box, clutch hydraulics, shift linkage, and
transmission-case switches harvested from a manual-equipped donor of either
generation. The recipient's own `FA20D` engine and control systems
**all stay in the car, untouched.**

**Read this before you source a donor.** The mechanical part of this
conversion is well documented by the factory manual: the
TL70 bolts to the same bellhousing bolt pattern the automatic uses, at the
same torque. The two places this swap actually bites are electrical, not
mechanical. First, **the engine control module keeps a running,
continuously-monitored expectation that an automatic transmission control module exists
on the CAN bus**, simply unplugging the TCM without changing anything else
sets a permanent check-engine light `[RM-K]`. Second, **the clutch pedal box
has to go in without a documented drilling procedure**, because the
factory service manual has no firewall template to follow.

This document is assembled from the removal/installation and
exploded-view procedures of three factory manuals, each covering one half of
the car (manual transaxle internals, the automatic transaxle, and the shared
clutch/shift-linkage/driveline chapters), cross-read against each other where
the manual's own M/T-vs-A/T exploded views make the comparison directly, and
against community reports only where the manual is silent. Where the manuals
speak, they are quoted. Where only the community speaks, that is marked.
Where nobody knows, that is marked too.

The following symbols are displayed for important points, which must be
observed.

| Note       |                                                                                                    |
| :--------- | :------------------------------------------------------------------------------------------------- |
| ☠️ Warning | Safety precautions that must be observed (Improper handling may result in death or serious injury) |
| ⚠️ Warning | For your safety and that of your vehicle (mishandling may result in injury or accident)            |
| ☝️ Advice  | Describes information that is useful for performing the work efficiently                           |

Source markers are displayed for every specification.

| Marker     | Meaning                                                                                                                                                                                                                                                                                                    |
| :--------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `[RM-Z-T]` | 2013 Subaru BRZ Transmission manual (zenki). Covers only the **internal** manual-transaxle overhaul — gear sets, synchros, SST tooling. No on-vehicle R&I, pedal box, shifter, driveshaft, or differential content.                                                                                        |
| `[RM-Z-W]` | 2013 Subaru BRZ Electrical Wiring Diagram `G4400BE` (zenki). A true EWD — connector list, parts-location index, and harness-routing diagrams, both A/T and M/T variants on one set of diagrams.                                                                                                            |
| `[RM-K]`   | 2017 Subaru BRZ factory service manual `G4440BE` (kouki) — a single combined manual, OCR'd by chapter for this document. Cited by PDF page and section code (e.g. `CL-6`). This manual has **no standalone electrical wiring diagram chapter** — its circuit descriptions are prose, not a connector list. |
| `[C]`      | Community-reported, mainly `ft86club.com` forum threads. **Verify by trial fit or measurement before relying on it**                                                                                                                                                                                       |

<details>
  <summary>⚠️ Warning — General</summary>

- This conversion changes how the vehicle is certified to run (drivetrain
  type) even though the engine and its emissions calibration are otherwise
  unchanged. Any local inspection or titling requirement around a
  transmission-type change is the installer's responsibility.
- The descriptions in this manual are intended for automobile mechanics or
  persons with basic knowledge of maintenance. Do not attempt this conversion
  by inexperienced persons only.
- Tighten all fasteners to the specified torque. Insufficient or excessive
  tightening may cause parts to come off or fail, leading to serious
  accidents.
- Depressurize the fuel system and relieve clutch/brake hydraulic pressure
  before disconnecting lines.

</details>

### Summary of the Conversion

**Why.** The automatic ZC6/ZN6 is a strong, inexpensive used-car buy —
automatics depreciate faster than manuals on this platform, and a healthy
`FA20D` behind a slushbox is common on the used market. Converting it to a
manual gets a cheaper starting chassis to the same end state as a
factory-manual car, provided the parts and labor cost less than the
manual-car premium.

**What actually changes, in one sentence.** Everything that differs between
a factory M/T car and a factory A/T car of this platform: flywheel vs. drive
plate, clutch vs. torque converter, pedal box, shift linkage, starter, the
transmission-case switches, and the transmission wire harness branch that
carries them has to be converted, individually, in both directions
(automatic parts out, manual parts in). The engine, its ECM, the body
harness, the dash cluster, the rear differential, and (very likely) the
propeller shaft stay exactly as they are.

**The two documented gotchas.** First, **the ECM continuously monitors for
the transmission control module over CAN and sets a fault if it goes
missing** — `[RM-K]` documents **DTC `U0101`** ("Lost Communication With
TCM," check-engine light on after 0.5 seconds of lost communication, 1-trip logic) and **DTC
`U0402`** ("Invalid Data Received From TCM," after 2 seconds) `[RM-K]`. This
is not a one-time learned fault from a single disconnection; it is continuous
monitoring, meaning an A/T-calibrated ECM with no TCM on the bus throws a
permanent check-engine light. See [Phase 2](#phase-2) for how this document
resolves it. Second, **idle speed itself is a different hard-coded
calibration value by transmission type**: 600–800 r/min on automatic,
550–750 r/min on manual `[RM-K]` — direct factory confirmation that the two
transmission types run genuinely different ECM calibrations, not just
different wiring.

**What does _not_ need to change.** The rear differential, its carrier, and
the LSD/non-LSD option are **common parts across both transmissions** —
`[RM-K]`'s axle/differential chapter gives parallel "Model with LSD" and
"Model without LSD" procedures with no M/T/A/T split anywhere in that chapter
`[RM-K]`. The propeller shaft's own exploded view likewise shows one
part, not an M/T and an A/T version `[RM-K]`.

---

<a id="contents"></a>

## Table of Contents

- [Introduction](#introduction)
- [Compatible Vehicle Models](#compatible-vehicles)
- [Parts Manifest](#parts-manifest)
- [Tool Manifest](#tool-manifest)
- [Installation Precautions (For Installers)](#precautions)
- [Work Procedure](#work-procedure)
  - [Phase 0 — Donor inspection](#phase-0)
  - [Phase 1 — Donor harvest](#phase-1)
  - [Phase 2 — ECU and TCM strategy](#phase-2)
  - [Phase 3 — Recipient preparation](#phase-3)
  - [Phase 4 — Mechanical installation](#phase-4)
  - [Phase 5 — Wiring integration](#phase-5)
  - [Phase 6 — Commissioning](#phase-6)
- [Post-installation Checks and Precautions](#post-install)
- [References](#references)

---

<a id="compatible-vehicles"></a>

## Compatible Vehicle Models

### Recipient Vehicle

| Item              | Specification                                                        |
| :---------------- | :------------------------------------------------------------------- |
| **Applied model** | `ZN6` (Scion FR-S / Toyota 86) or `ZC6` (Subaru BRZ), any model year |
| Engine            | `FA20D` 2.0ℓ DOHC, naturally aspirated — **retained, unchanged**     |
| Transaxle         | Aisin `TG6A` 6-speed automatic — **removed**                         |

### Donor Vehicle

| Item              | Specification                                                                                                                                                                             |
| :---------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Applied model** | `ZN6` or `ZC6`, zenki or kouki generation — ☝️ **either generation works**, since the `TL70` is not part of the kouki engine/harness revision the companion engine-swap article documents |
| Transaxle         | `TL70` 6-speed manual, complete with bellhousing, pedal box, shift linkage, and clutch hydraulics                                                                                         |

---

<a id="parts-manifest"></a>

## Parts Manifest

### ① Harvested from the donor vehicle

| No. | Product name                                                                                                                                | Qty | Notes                                                                                                                                                                                                                                    |
| --: | :------------------------------------------------------------------------------------------------------------------------------------------ | :-- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|   ① | `TL70` manual transaxle ASSY, complete with bellhousing                                                                                     | 1   | Mounts to the engine on **3 bolts + 2 nuts at 50 N·m {510 kgf·cm} {36.9 ft·lbf}** `[RM-K]` — same torque as the automatic's mounting, different bolt count (A/T: 2 bolts + 2 nuts) — see [Phase 4](#phase-4)                             |
|   ② | Flywheel SUB-ASSY                                                                                                                           | 1   | **Not interchangeable with the recipient's drive plate.** 8 bolts, 85 N·m {867 kgf·cm} {62.7 ft·lbf} `[RM-K]` — see [Phase 4](#phase-4)                                                                                                  |
|   ③ | Clutch disc ASSY and clutch cover ASSY (pressure plate)                                                                                     | 1   | Clutch cover: 6 bolts, 16 N·m {163 kgf·cm} {11.8 ft·lbf} `[RM-K]`. Disc facing-to-rivet wear limit 0.8 mm {0.031 in}, runout max 0.7 mm {0.028 in} `[RM-K]`                                                                              |
|   ④ | Clutch release cylinder ASSY (external slave, bolts to the bellhousing)                                                                     | 1   | 2 bolts, 37 N·m {377 kgf·cm} {27.3 ft·lbf} `[RM-K]` — not a concentric slave                                                                                                                                                             |
|   ⑤ | Clutch master cylinder ASSY and reservoir SUB-ASSY                                                                                          | 1   | A **separate reservoir from the brake master cylinder** — no shared-reservoir bypass port on this platform `[RM-K]`, unlike some shared-body economy cars — see [Phase 4](#phase-4)                                                      |
|   ⑥ | Clutch pedal SUB-ASSY and clutch pedal support SUB-ASSY                                                                                     | 1   | Includes assist rods A/B, assist bush, pedal bush ×2, clutch clevis pin ×2, pedal spring, pedal stopper, No.1 clutch pedal cushion — support mounts at 18 N·m {184 kgf·cm} {13.3 ft·lbf} `[RM-K]`                                        |
|   ⑦ | Clutch Start Switch Assembly and Clutch Switch Assembly                                                                                     | 2   | **Two separate switches, two separate jobs** — starter-crank interlock and cruise-control clutch cutout, respectively `[RM-K]`. Both 8.0 N·m {82 kgf·cm} {5.9 ft·lbf} at the pedal support `[RM-K]`                                      |
|   ⑧ | Back-Up Light Switch and Neutral Switch (threaded into the transmission case)                                                               | 2   | Each 32.3 N·m {329.4 kgf·cm} {23.8 ft·lbf}, new gasket each `[RM-K]` — on the automatic these two functions are consolidated into one "neutral start switch" `[RM-K]`, see [Phase 5](#phase-5)                                           |
|   ⑨ | Floor shift, shift lever ASSY — Lever CP, floor shift control shift lever retainer, stopper, insulator, plate CP, shift & select lever boot | 1   | Rod-operated, not cable `[RM-K]` — see [Phase 4](#phase-4)                                                                                                                                                                               |
|   ⑩ | Floor shift control shaft                                                                                                                   | 1   | Solid rod linking the shift lever to the transmission's own shift knuckle `[RM-K]`                                                                                                                                                       |
|   ⑪ | Starter motor, manual-transmission specification                                                                                            | 1   | ⚠️ **Not the same part as the automatic's starter** despite an identical 50 N·m mounting torque — see [Phase 4](#phase-4)                                                                                                                |
|   ⑫ | Water by-pass pipe No.1, manual-transmission specification                                                                                  | 1   | ⚠️ **Not the same part as the automatic's.** The A/T version carries an extra spigot feeding the transmission oil cooler; the M/T version does not. 2 bolts, 6.4 N·m {65 kgf·cm} {4.7 ft·lbf} `[RM-K]` — see [Phase 4, (4.14)](#phase-4) |
|   ⑬ | (Optional, only if pursuing [Phase 2, Option B](#phase-2)) Donor's own ECM                                                                  | 1   | Only if reusing the donor's already-proven M/T calibration instead of retuning the recipient's own ECM                                                                                                                                   |

### ② Retained from the recipient vehicle

| No. | Product name                                                                      | Notes                                                                                                                                                                     |
| --: | :-------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
|   ⑭ | `FA20D` engine assembly                                                           | **Untouched** — stays matched to its own ECM, keys, and immobilizer pairing                                                                                               |
|   ⑮ | ECM                                                                               | **Reflashed/retuned, not replaced** under this document's recommended [Phase 2, Option A](#phase-2)                                                                       |
|   ⑯ | Rear differential, carrier, and half-shafts                                       | ☝️ Common hardware across M/T and A/T per `[RM-K]`'s axle/differential chapter — see [Phase 4, (4.7)](#phase-4)                                                           |
|   ⑰ | Propeller shaft                                                                   | ☝️ Likely reusable — `[RM-K]`'s exploded view shows one part, not an M/T and A/T version — ⚠️ **verify by trial fit**, see [Phase 4, (4.6)](#phase-4)                     |
|   ⑱ | Brake pedal support, shaft, bushes, return spring, clevis, pin, stop light switch | Shared mounting with the clutch pedal support — ⚠️ brake pedal _height_ differs by spec (145 mm M/T vs. 150 mm A/T from the floor mat `[RM-K]`) — see [Phase 4](#phase-4) |
|   ⑲ | Accelerator pedal assembly                                                        | Drive-by-wire sensor, independent of transmission type — not referenced anywhere in the clutch/transmission chapters `[RM-K]`                                             |
|   ⑳ | Body wiring harness, dash cluster, body ECU/BCM                                   | Unaffected — no immobilizer or cross-VIN concern on this conversion                                                                                                       |

### ③ Purchased new

| No. | Product name                                                                           | Notes                                                                                                                                                            |
| --: | :------------------------------------------------------------------------------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|  ㉑ | Shift lever pins ×2                                                                    | **Non-reusable, new required** `[RM-K]`                                                                                                                          |
|  ㉒ | Clutch line banjo/union gaskets                                                        | New each time the release-cylinder hydraulic joint is broken `[RM-K]`                                                                                            |
|  ㉓ | Clutch fluid, FMVSS No.116 DOT3 or DOT4                                                | Separate circuit from brake fluid on this platform `[RM-K]`                                                                                                      |
|  ㉔ | Manual transmission gear oil — `MG Gear Oil Special II`                                | `[RM-Z-T]`                                                                                                                                                       |
|  ㉕ | Differential gear oil LX (with LSD) or LT (without LSD), API GL-5 SAE 75W-85           | Only if the differential is opened — not required if it is reused as-is. Fill 1.15±0.05 L {1.22±0.05 US qt} `[RM-K]`                                             |
|  ㉖ | Automotive wiring stock, sealed terminals, inline fuses                                | For the Transmission Wire harness conversion in [Phase 5](#phase-5)                                                                                              |
|  ㉗ | Dielectric grease                                                                      | All reconnected connectors                                                                                                                                       |
|  ㉘ | Standalone ECU or tuning solution — **only if pursuing [Phase 2, Option A](#phase-2)** | A **Link G5 ECU Plug-In** is already a documented plug-in solution for this platform per the companion engine-swap article — reuse it here if not already fitted |

Confirmation: Upon collecting these parts, immediately check that nothing is
damaged and that the harness has not been cut.

---

<a id="tool-manifest"></a>

## Tool Manifest

### Hand and shop tools

| Tool                                                                      | Tool                                                                                         |
| :------------------------------------------------------------------------ | :------------------------------------------------------------------------------------------- |
| Metric socket set, 1/2" and 3/8" drive                                    | Torque wrench, 5–25 N·m range                                                                |
| Torque wrench, 20–90 N·m range                                            | Breaker bar                                                                                  |
| Transmission jack                                                         | Engine support bar/hoist                                                                     |
| SST `18355AA000` + `18334AA000` (crankshaft pulley holder)                | Used to secure the crankshaft while removing/installing the flywheel or drive plate `[RM-K]` |
| SST `09325-20010` (MTM extension housing oil seal) or `09325-40010` (ATM) | Different tool per transmission type — see [Phase 4, (4.6)](#phase-4) `[RM-K]`               |
| Connector pin release pick                                                | Soldering iron, heat-shrink                                                                  |
| Multimeter, with continuity and resistance                                | Thread-locking compound                                                                      |
| Brake/clutch line flare-nut wrench set                                    | Catch pans, drain pans                                                                       |
| Thickness/feeler gauge, 0.3 mm                                            | Safety glasses, work gloves                                                                  |

### Scan tool

☝️ Advice: A Subaru-capable scan tool is useful here for a different reason
than on the companion engine-swap article — not for immobilizer registration
(this conversion has none), but to **confirm the ECM has stopped setting
`U0101`/`U0402` after the [Phase 2](#phase-2) ECU strategy is applied**, and
to clear any stored DTCs from the automatic-to-manual harness conversion
before first drive.

---

<a id="precautions"></a>

## Installation Precautions (For Installers)

<details open>
  <summary>☠️ Warning</summary>

- **Disconnect the negative battery terminal** before beginning electrical
  work.
- Support the vehicle on rated stands. Do not work under a vehicle held only
  by a jack.
- Depressurize the fuel system and relieve clutch/brake hydraulic pressure
  before disconnecting lines.

</details>

<details open>
  <summary>⚠️ Warning</summary>

- **Do not simply unplug the TCM and drive off.** An A/T-calibrated ECM left
  in place will set a continuous `U0101`/`U0402` fault for lost TCM
  communication `[RM-K]`. Resolve your [Phase 2](#phase-2) ECU strategy
  before first start.
- **Do not assume the recipient's firewall has pre-cut provisions for the
  clutch pedal support.** No source consulted for this document confirms or
  denies this either way — see [Phase 4](#phase-4). Dry-fit before cutting
  or drilling anything.
- **Do not carry a torque spec from the automatic side of the car to the
  manual side without checking this document.** Several figures that look
  identical at first glance (e.g. the 50 N·m transaxle-to-engine torque)
  apply at a **different bolt count** per transmission type — see
  [Phase 4](#phase-4).
- Photograph every connector, ground strap, and bracket before disconnecting
  it, and label every harness branch as you free it.
- Apply dielectric grease to all reconnected connectors.

</details>

<details open>
  <summary>☝️ Advice</summary>

- Source the starter motor from the manual donor, not the recipient — the two
  are different parts despite an identical mounting bolt pattern and torque
  `[RM-K]` — see [Phase 4](#phase-4).
- Take photographs of the donor's shift linkage geometry (Lever CP height,
  floor shift control shaft orientation) before disassembly — the reverse
  check adjustment in [Phase 4](#phase-4) is easier to verify against a known
  good reference.

</details>

---

<a id="work-procedure"></a>

## Work Procedure

<a id="phase-0"></a>

### Phase 0 — Donor Inspection

<figure>
  <img data-pending-src="/kb/subaru-tl70-manual-transmission-swap-into-automatic-zc6-zn6/figure-01.jpg" src="/kb/no-image-available.svg" alt="Manual-equipped donor ZC6 or ZN6 interior, pedal box and center console before teardown" />
  <figcaption>
    Figure 1: The donor's pedal box and shift linkage before anything is
    disconnected. Photograph the clutch switch wiring and the floor shift
    control shaft geometry.
  </figcaption>
</figure>

(0.1) Confirm the donor is `TL70`-equipped and record its generation (zenki or
kouki) and VIN.

(0.2) Inspect the donor's clutch system for wear: pedal feel, clutch disc
facing-to-rivet depth (service limit 0.8 mm {0.031 in}), and clutch disc
runout (service limit 0.7 mm {0.028 in}) `[RM-K]`.

(0.3) Photograph and label the shift linkage geometry, the clutch pedal
support's three electrical connectors (Clutch Start Switch, Clutch Switch,
and any courtesy wiring), and the transmission-case switch locations (Back-Up
Light Switch and Neutral Switch) before removal.

(0.4) Decide your [Phase 2](#phase-2) ECU strategy now, not after teardown —
it determines whether you also need the donor's ECM.

---

<a id="phase-1"></a>

### Phase 1 — Donor Harvest

(1.1) Remove the battery. Drain the manual transmission oil per the factory
procedure before removal `[RM-Z-T]`.

(1.2) Harvest in the following order:

| Item                                                                                                | Disposition                                                                                                                                                                          |
| :-------------------------------------------------------------------------------------------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Starter motor                                                                                       | **Keep**                                                                                                                                                                             |
| `TL70` transaxle ASSY, complete with bellhousing                                                    | **Keep**                                                                                                                                                                             |
| Clutch disc ASSY, clutch cover ASSY, release cylinder ASSY                                          | **Keep**                                                                                                                                                                             |
| Flywheel SUB-ASSY                                                                                   | **Keep** — recover with the engine-side disassembly if the donor's engine is also disturbed, or pull it directly off the flexplate-equivalent location on the donor's own crankshaft |
| Clutch master cylinder ASSY and reservoir                                                           | **Keep**                                                                                                                                                                             |
| Clutch pedal SUB-ASSY and clutch pedal support SUB-ASSY, with Clutch Start Switch and Clutch Switch | **Keep**, uncut wiring pigtails                                                                                                                                                      |
| Back-Up Light Switch, Neutral Switch                                                                | **Keep**, with gaskets discarded (new gaskets required on install)                                                                                                                   |
| Floor shift, shift lever ASSY, floor shift control shaft                                            | **Keep**                                                                                                                                                                             |
| ECM (only if pursuing [Phase 2, Option B](#phase-2))                                                | **Keep only if pursuing Option B**                                                                                                                                                   |

(1.3) **Flywheel removal requires the crankshaft held stationary.** Use a box wrench
or SST `18355AA000` and `18334AA000` to secure the crankshaft pulley,
then remove the eight flywheel bolts `[RM-K]`, the same tool and procedure the manual uses
for the automatic's drive-plate removal, which is worth knowing if you are
harvesting from a donor whose engine you are not otherwise disturbing.

(1.4) **Do not cut the clutch pedal support's wiring pigtails.** The Clutch
Start Switch and Clutch Switch each carry a dedicated 2-pin connector that
should unplug at the harness, not require a splice — see
[Phase 5](#phase-5) for why keeping these intact matters.

---

<a id="phase-2"></a>

### Phase 2 — ECU and TCM Strategy

☝️ Advice: **Decide this before you tear down the recipient's console or
transmission tunnel.** It changes what you disconnect and in what order in
[Phase 3](#phase-3).

Two facts drive this phase.

- First, idle speed is a different hard-coded
  calibration value by transmission type — automatic 600–800 r/min, manual
  550–750 r/min `[RM-K]`, confirming the ECM's calibration genuinely differs
  between the two factory configurations, not just the wiring around it.
- Second, the ECM continuously monitors the CAN bus for the automatic transmission
  control module and sets a fault if it is not there: **DTC `U0101`** ("Lost
  Communication With TCM"), triggered when communication is "impossible for 0.5
  seconds or more," check-engine light on within one operation cycle (1-trip logic), and **DTC
  `U0402`** ("Invalid Data Received From TCM"), triggered after 2 seconds
  `[RM-K]`.

<details open>
  <summary>Option A — retune or reflash the recipient's own ECM w/ ECUTek (recommended)</summary>

Keep the recipient's own ECM in the car and have it reflashed or retuned to a
manual-transmission calibration, either the factory M/T ROM for this model
year, if your tuner has access to it, or a standalone solution such as the
**Link G5 ECU Plug-In** already documented as a working plug-in option for
this platform in the companion engine-swap article. Either path produces an
ECM that was never built to expect a TCM on the bus, so `U0101`/`U0402` never
fire in the first place — M/T cars never shipped with a TCM to monitor for.

☝️ Advice: **ECUTek ProECU is the community-documented tool for this
specific conversion, with a tuning-vendor's confirmation that transmission
type does not affect the flashing process itself** — Circuit Motorsports,
answering exactly this question on the ft86club thread
["Ecutek on an automatic"](https://www.ft86club.com/forums/showthread.php?t=73599),
stated plainly: _"EcuTek tunes load the same on Automatic and Manual
transmission cars... the mode does not matter in loading tunes"_ `[C]`. A
separate, dedicated ft86club guide thread,
["How to: Manual Swap FRS/BRZ"](https://www.ft86club.com/forums/showthread.php?t=125318),
walks through the ECU side of an automatic-to-manual conversion on this
exact platform `[C]`.

</details>

<details>
  <summary>⚠️ Warning: A version-specific ECUTek RaceROM bug has caused CEL U0101</summary>

**A version-specific ECUTek RaceROM bug has caused exactly the
`U0101`/ABS `C1288` fault this document warns about, even on builds that
otherwise did everything right.** A separate ft86club thread,
["ABS C1288 - ECU Matching failed"](https://www.ft86club.com/forums/showthread.php?p=3162105),
documents multiple builders hitting this after an automatic-to-manual
conversion, the ABS module kept searching for a TCM that no longer existed,
despite carrying manual-equivalent part numbers and software IDs `[C]`. The
fix was software-version-specific. **If you hit `U0101`/`C1288` after
flashing an M/T calibration onto a reflashed ECM, check your RaceROM version
against known-good ones before assuming the hardware conversion itself is at
fault.**

</details>

<details>
  <summary>☝️ Advice: ECUTek license transfers from ECU to ECU are more cost</summary>

Budget for having to transfer ECUTek licences **only if you swap ECUs**. The
author of the
["How to: Manual Swap FRS/BRZ"](https://www.ft86club.com/forums/showthread.php?t=125318)
guide, who tunes on ECUTek himself, warned: _"Anyone on Ecutek (like myself)
transferring a license is quite the process... you may just want to purchase
a new license and sell your old ECU with the license attached to it"_ `[C]`.
If your recipient's ECM is not already ECUTek-licensed, factor a new license
into the cost of this option, not just the reflash.

</details>

<details>
  <summary>☝️ Advice: OpenFlash Tablet (OFT) was raised as a cheaper alternative in
the same guide thread, but its viability for this specific conversion is
unconfirmed</summary>

☝️ Advice: **OpenFlash Tablet (OFT) was raised as a cheaper alternative in
the same guide thread, but its viability for this specific conversion is
unconfirmed.** The guide author noted _"If you're stock, that's simple, OFT
would be straightforward,"_ but another poster, `finch1750`, asked directly
_"Has anyone confirmed using the AT ecu with OFT and just flashing a MT
tune?"_ — a question that went unanswered in that
[thread](https://www.ft86club.com/forums/showthread.php?t=125318) `[C]`.
Treat OFT as untested for this specific job until you find a confirmed
report, rather than assuming it is interchangeable with ECUTek here.

</details>

<details>
  <summary>Option B (Not recommended) bring the donor's own ECM along with the transmission</summary>

If the donor's manual-transmission ECM is available and already proven
working in its own car, harvest it with the rest of the driveline and install
it in place of the recipient's A/T-calibrated unit. This reuses a
factory-verified M/T calibration without needing a tuner.

⚠️ Warning: **This is still an ECM replacement, and this platform's general
ECM-replacement rule still applies regardless of why you're swapping it** —
`[RM-K]` states generally that replacing the engine control computer on an
immobilizer-equipped car requires registering the new unit via the
"REGISTRATION MANUAL FOR IMMOBILIZER" procedure, the same one the companion
engine-swap article found is not included in either factory manual set
consulted for this KB. Swapping to a donor's ECM here is a **normal,
same-generation** ECM replacement — not the cross-VIN problem the companion
article describes — but it is still an ECM replacement, and still needs
dealer/SSM4-equivalent registration. Weigh that cost against simply
reflashing the ECM already in the car under Option A.

⚠️ Warning: **If your recipient is a 2013–2016 zenki car, community reports
describe a harder immobilizer problem with this option than the general
ECM-replacement rule above implies — this was not found in any factory manual
consulted for this document, so treat it as unconfirmed but worth planning
around.** A builder documenting a 2013–2016-specific conversion in the same
["How to: Manual Swap FRS/BRZ"](https://www.ft86club.com/forums/showthread.php?t=125318)
thread (`MujisGarage`) wrote: _"For 13-16 there are a few Modules you want to swap
over such as the ECU & BCM! You will also need to replace all interior
electrical components from the SAME CAR, the reason being is because these
model years have an issue with the immobilizer tweaking up on you"_, listing
the full set as _"BCM, Cluster, ECU, ABS, Donor Key, Key Cylinder, Interior
dash harness and the Power steering module"_ `[C]`. That is substantially
more than a single ECM swap — it is closer to the companion engine-swap
article's "bring the whole donor security set" strategy, applied here to a
transmission conversion instead of an engine swap. **This document's own
exhaustive search of the kouki `G4440BE` manual found no documented link
between transmission type and the immobilizer at all** — one explanation is
that this is a zenki-generation-specific quirk not present on kouki
(consistent with the companion article's observation that this platform's
harness and ECU generations are not uniform even within "zenki"), but this
document could not verify that explanation against a primary source. If your
recipient is zenki-generation and you intend to swap in a donor ECM under
this option, budget for the fuller module list above rather than assuming a
single-ECM registration will be enough, and confirm the current scope with
your registering dealer or locksmith before sourcing parts.

</details>

<details>
  <summary>Option C (Not recommended) leave the A/T-calibrated ECM in place unmodified</summary>

Disconnect the TCM and drive with the factory automatic calibration otherwise
untouched. **This will set a continuous check-engine light** — `[RM-K]`'s DTC logic for
`U0101`/`U0402` is 1-trip, meaning it does not require repeated failures to
set, only one communication timeout. No primary source consulted for this
document documents a factory-sanctioned way to suppress this monitor from
within the A/T calibration itself. Only pursue this if you have independently
confirmed a way to disable the specific CAN monitor, and understand you are
doing so without factory documentation.

</details>

---

<a id="phase-3"></a>

### Phase 3 — Recipient Preparation

(3.1) With the [Phase 2](#phase-2) ECU strategy settled, remove the
recipient's automatic transmission ASSY following the factory procedure:
drain the transmission fluid, disconnect the floor shift gear shifting rod
SUB-ASSY No.1 from the control shaft lever RH, remove the exhaust pipe
bracket, support the transmission with SST `18632AA010`, remove the engine
rear mounting member, then separate and remove the transmission `[RM-K]`.

<figure>
  <img src="/kb/subaru-tl70-manual-transmission-swap-into-automatic-zc6-zn6/kouki-flywheel-driveplate-clutch-comparison.png" alt="Subaru factory exploded view comparing the automatic transmission's drive plate and ring gear sub-assembly against the manual transmission's flywheel, clutch disc, and clutch cover, with torque specifications for each" />
  <figcaption>
    Figure 2: Drive plate (A/T, top) against flywheel and clutch (M/T,
    bottom) — the same engine rear oil seal page covers both, because the
    crankshaft interface is otherwise identical. Note the drive-plate-spacer
    bolts torque higher (95 N·m) than the flywheel bolts (85 N·m).
    <code>2017 Subaru BRZ Service Manual G4440BE</code>, page 906 (EM-52).
  </figcaption>
</figure>

(3.2) **Remove the drive plate & ring gear SUB-ASSY**, using SST
`18355AA000`/`18334AA000` to hold the crankshaft, then remove the eight
drive-plate-spacer bolts `[RM-K]`.

(3.3) Remove the automatic-specific interior and wiring items and set them
aside — they will not be reused:

- The console's floor shift gear shifting rod SUB-ASSY No.1, control shaft
  lever RH, swivel, and arm COMPL `[RM-K]`.
- The console shifter's `Shifting hole cover SUB-ASSY`, which on the
  automatic carries a shift position (PRNDL) indicator fastened with 2
  screws — the manual version of this cover uses 4 screws and has no
  indicator `[RM-K]`.
- The transmission's neutral start switch ASSY, transmission wire connector,
  and transmission revolution sensor (SP2) connector `[RM-K]`.
- The **flywheel housing under cover** — a small bolt-on sheet-metal shield at
  the bottom of the bellhousing-to-block joint, used only to access the drive
  plate & torque converter setting bolts through a service hole `[RM-K]`. See
  [Phase 4, (4.14)](#phase-4) for why this is deleted outright, not replaced.
- The **transmission oil cooler ASSY**, its 2 transmission oil cooler hoses
  (No.1 and No.3), and its 2 water by-pass hoses `[RM-K]` — see
  [Phase 4, (4.14)](#phase-4).
- The Shift Lock solenoid and its release button — an automatic-only system
  that shares a fuse/relay block with cruise control and the A/T shift
  indicator circuit `[RM-Z-W]`; no equivalent exists or is needed on the
  manual side.

(3.4) Remove the recipient's automatic-equipped starter motor — it is not
reused; see [Phase 4, (4.4)](#phase-4).

(3.5) Leave the rear differential, half-shafts, and (pending the trial fit in
[Phase 4, (4.6)](#phase-4)) the propeller shaft in place.

---

<a id="phase-4"></a>

### Phase 4 — Mechanical Installation

(4.1) **Remove the recipient's drive plate spacer FR and drive plate/ring
gear SUB-ASSY**, if not already done in [Phase 3, (3.2)](#phase-3) (see
Figure 2 there). Discard both —
neither is reused.

(4.2) Mate the donor's flywheel to the recipient's crankshaft, holding it
stationary with a box wrench or SST `18355AA000`/`18334AA000`. Torque the eight flywheel
bolts to **85 N·m {867 kgf·cm} {62.7 ft·lbf}** `[RM-K]` — note this is
**lower** than the drive-plate-spacer torque it replaces (95 N·m
{969 kgf·cm} {70.1 ft·lbf} `[RM-K]`), so do not carry the higher figure over
by habit.

(4.3) Fit the clutch disc and clutch cover. Six bolts at **16 N·m
{163 kgf·cm} {11.8 ft·lbf}** `[RM-K]`.

(4.4) **Install the manual-specification starter, not the recipient's own.**
`[RM-K]` prints two separate exploded views and disassembly procedures, "for
Manual Transmission" and "for Automatic Transmission" — this is a genuinely
different part, not a shared unit with different wiring. Service data
confirms the difference is real, not cosmetic: armature runout standard
0.05 mm (M/T) vs. 0.02 mm (A/T); brush length standard 12.3 mm (M/T) vs.
14.4 mm (A/T) `[RM-K]`. Both mount with the same bolts at the same torque
(50 N·m `[RM-K]`), which is exactly why this is easy to miss.

(4.5) Mate the `TL70` to the recipient's engine. **3 bolts + 2 nuts at 50 N·m
{510 kgf·cm} {36.9 ft·lbf}** `[RM-K]` — the same torque the automatic used
for its own 2-bolt + 2-nut mounting, but at a different bolt count; use the
`TL70`'s own bolt holes, not the automatic's pattern.

<figure>
  <img src="/kb/subaru-tl70-manual-transmission-swap-into-automatic-zc6-zn6/kouki-flywheel-housing-under-cover-and-oil-cooler.png" alt="Subaru factory exploded view of the automatic-transmission-only engine cover sub-assembly, transmission oil cooler hose No. 1 and No. 3, flywheel housing under cover, and injector driver, all shown on the back of the FA20 engine block" />
  <figcaption>
    Figure 3: Parts the factory service manual groups together as automatic-only, at the
    engine-to-bellhousing joint: the No. 1 engine cover sub-assembly, the two
    transmission oil cooler hoses, and the flywheel housing under cover.
    None of the three exist on a manual-equipped engine.
    <code>2017 Subaru BRZ Service Manual G4440BE</code>, page 912 (EM-58).
  </figcaption>
</figure>

(4.14) **Engine-block covers and coolant hardware — delete the automatic's,
do not block them off.** `[RM-K]`'s own exploded views group three items
under a "For Automatic Transmission" heading at the back of the block,
immediately above the flywheel/drive-plate area: the **No. 1 engine cover
sub-assembly**, and the **No. 1 and No. 3 transmission oil cooler hoses**
`[RM-K]`. A fourth item, the **flywheel housing under cover**, used during
teardown to reach the drive plate & torque
converter setting bolts through a service hole without fully separating the
engine and transmission `[RM-K]`. ☝️ Advice: **there is no block-off plate
to source for any of this** — these
parts simply do not exist on a manual-equipped block, they are not holes left
behind that need plugging.

<figure>
  <img src="/kb/subaru-tl70-manual-transmission-swap-into-automatic-zc6-zn6/kouki-water-by-pass-pipe-mt-vs-at.png" alt="Subaru factory exploded view comparing the manual transmission's water by-pass pipe No. 1, a simple coolant pipe, against the automatic transmission's water by-pass pipe No. 1, which carries an additional spigot feeding transmission oil cooler hose No. 1" />
  <figcaption>
    Figure 4: Water by-pass pipe No. 1, side by side — the A/T version (right)
    carries a spigot feeding the transmission oil cooler; the M/T version
    (left) does not. Same 2-bolt mount, 6.4 N·m, on both.
    <code>2017 Subaru BRZ Service Manual G4440BE</code>, page 921 (EM-67).
  </figcaption>
</figure>

⚠️ Warning: **the one coolant-side part that is not a simple deletion is
Water by-pass pipe No. 1 itself**, which `[RM-K]`'s own exploded view prints
in two different shapes side by side, labelled "Transmission M/T:" and
"Transmission A/T:" `[RM-K]`. The automatic's pipe carries the extra spigot
that feeds transmission oil cooler hose No. 1; the manual's pipe is a plain
coolant pipe with no spigot at all. **Replace the recipient's A/T-shape pipe
with the donor's M/T-shape pipe** — do not reuse the recipient's own pipe and
cap the spare port, since the manual's correct pipe has no port to cap in the
first place. Both shapes mount with 2 bolts at the same **6.4 N·m
{65 kgf·cm} {4.7 ft·lbf}** `[RM-K]`.

(4.15) Remove the recipient's transmission oil cooler ASSY: disconnect the 2
transmission oil cooler hoses (catching residual ATF), disconnect the 2 water
by-pass hoses (catching residual coolant), then remove the 3 mounting bolts
(2 at 23 N·m {235 kgf·cm} {17 ft·lbf}, plus the bracket) `[RM-K]`. With the
M/T-shape water by-pass pipe No.1 installed per (4.14), there is nothing left
to connect these hoses to — discard the cooler, its hoses, and its bracket.
Refill and leak-check the cooling system with Subaru genuine Super Coolant
`[RM-K]`.

<figure>
  <img src="/kb/subaru-tl70-manual-transmission-swap-into-automatic-zc6-zn6/kouki-propeller-shaft-exploded.png" alt="Subaru factory exploded view of the propeller shaft with center bearing assembly, showing companion flange bolts torqued to 74 Newton meters and center bearing bracket bolts torqued to 52 Newton meters, with no separate manual or automatic transmission variant shown" />
  <figcaption>
    Figure 5: The propeller shaft's exploded view — one part number, no
    M/T/A/T split shown. <code>2017 Subaru BRZ Service Manual G4440BE</code>,
    page 1740 (DP-14).
  </figcaption>
</figure>

(4.6) **Reconnect the propeller shaft to the `TL70`'s output flange.**
`[RM-K]`'s own exploded view shows a single `Propeller shaft w/ center
bearing ASSY`, not separate M/T and A/T part numbers, which is why this
document lists it as likely reusable in the Parts Manifest. ⚠️ Warning:
**one tooling detail complicates that conclusion and could not be resolved
from the manuals consulted for this document.** The extension-housing oil
seal is installed with **different SSTs by transmission type** — `09325-20010`
for the manual transmission housing, `09325-40010` for the automatic, with
different documented drive-in depths (automatic: 5.4–5.8 mm from the housing
end face) `[RM-K]`. Two different seal tools for two different housings is
at minimum suggestive that the `TL70` and `TG6A` extension housings are not
identical, which could mean the propeller shaft's front slip-yoke spline does
not mate the same way to both. **Verify by trial fit whether the recipient's
existing propeller shaft actually engages the incoming `TL70`'s tailshaft
correctly before assuming it carries over** `[C]` — this is an inference from
primary-source tooling evidence, not a statement the manual makes outright.
Torque the companion flange at **74 N·m {755 kgf·cm} {54.6 ft·lbf}** (4
bolts/4 nuts) and the center bearing bracket at **52 N·m {530 kgf·cm}
{38.4 ft·lbf}** (2 bolts) `[RM-K]`. Runout limit 0.6 mm {0.0236 in} `[RM-K]`.

(4.7) **The rear differential does not need to change.** `[RM-K]`'s
axle/differential chapter gives parallel refill procedures for "Model with
LSD" and "Model without LSD," with no M/T/A/T distinction anywhere in that
chapter, but there is a different final-drive ratio between manual and
automatic cars on this platform: 4.1 for automatic and 4.3 for manual.

<figure>
  <img src="/kb/subaru-tl70-manual-transmission-swap-into-automatic-zc6-zn6/kouki-floor-shift-lever-assy-exploded.png" alt="Subaru factory exploded view of the floor shift, shift lever assembly for the manual transmission, showing the lever CP, floor shift control shift lever retainer, stopper torqued to 7.5 Newton meters, shift and select lever boot, insulator, and plate CP torqued to 18 Newton meters, connected to the floor shift control shaft" />
  <figcaption>
    Figure 6: The TL70 shift lever assembly, rod-operated, not cable.
    <code>2017 Subaru BRZ Service Manual G4440BE</code>, page 1642 (MT-12).
  </figcaption>
</figure>

(4.8) Install the floor shift, shift lever ASSY into the console opening.
Torque sequence per `[RM-K]`: install the Lever CP to the floor shift control
shift lever retainer, install the stopper with 4 bolts at **7.5 N·m
{77 kgf·cm} {5.5 ft·lbf}**, apply Permalub ECN-9 (or equivalent) to the tip of
the floor shift control shaft, connect it to the Lever CP with a **new** plate
washer and clip, then install the plate CP with 4 bolts at **18 N·m
{184 kgf·cm} {13.3 ft·lbf}**. Install a new shift & select lever boot — it is
a listed non-reusable part `[RM-K]`.

⚠️ Warning: **Use new shift lever pins.** `[RM-K]` explicitly marks the shift
lever pins as non-reusable — reinstalling the old ones risks the same
reverse-check adjustment described next drifting out of spec over time.

(4.9) **Perform the reverse check adjustment**: pull the floor shift gear
shifting rod toward the rear of the vehicle until it stops, then return it 2
steps, confirming clean engagement between 1st and 2nd before final assembly
`[RM-K]`.

<figure>
  <img src="/kb/subaru-tl70-manual-transmission-swap-into-automatic-zc6-zn6/kouki-clutch-pedal-components.png" alt="Subaru factory exploded view of the clutch pedal components, showing the clutch pedal lever, clutch pedal bush, clutch pedal stopper, brake pedal, assist rod A and B, clutch pedal spring, assist bush, E-ring, clutch clevis pin, bush, No.1 clutch pedal cushion, and clutch pedal sub-assembly with torque specifications of 18 Newton meters" />
  <figcaption>
    Figure 7: Clutch pedal components. Note the brake pedal hangs from the
    same support bracket as the clutch pedal — the manual says nothing about
    whether an automatic-built body's support already carries the clutch
    pedal's mounting provision.
    <code>2017 Subaru BRZ Service Manual G4440BE</code>, page 1606 (CL-6).
  </figcaption>
</figure>

(4.10) **Install the clutch pedal support SUB-ASSY.** `[RM-K]`'s removal
procedure for this assembly runs through disconnecting the steering
intermediate shaft and removing the instrument panel under cover and the
power steering computer to gain access `[RM-K]` — plan the same teardown in
reverse for installation. The support carries both the clutch pedal lever and
the brake pedal on one bracket, fastened with **3 bolts + 4 nuts at 18 N·m
{184 kgf·cm} {13.3 ft·lbf}** `[RM-K]`.

⚠️ Warning: **The automatic chassis doesn't have has the clutch pedal support's
mounting bosses already in place.**
Dry-fit the support before drilling, mark and re-check before modifying anything.
`[C]`.

☝️ Advice: **The brake pedal height differs by spec** — 145 mm {5.709 in} on
manual cars, 150 mm {5.906 in} on automatic cars, measured from the floor mat
`[RM-K]`. Measure your recipient's brake pedal height against the manual figure before
assuming the stock brake pedal carries over unmodified.

(4.11) **Install the clutch master cylinder ASSY** to the clutch pedal
support — **not to the firewall directly**. Nuts at 18 N·m
{184 kgf·cm} {13.3 ft·lbf} `[RM-K]`. Connect the push rod clevis pin and
retaining clip.

(4.12) **Connect the clutch hydraulic line.** Master-cylinder-to-hose union:
**15 N·m {153 kgf·cm} {11.1 ft·lbf}**. Hose-to-release-cylinder union bolt,
through two new gaskets: **18 N·m {184 kgf·cm} {13.3 ft·lbf}**. Release
cylinder to bellhousing: **37 N·m {377 kgf·cm} {27.3 ft·lbf}** (2 bolts).
Bleeder plug: **7.8 N·m {80 kgf·cm} {5.8 ft·lbf}** `[RM-K]`. Use FMVSS
No.116 DOT3 or DOT4 fluid `[RM-K]` — this platform's clutch reservoir is
separate from the brake reservoir.

(4.13) Connect the Clutch Start Switch and Clutch Switch pigtails at the
pedal support, and the Back-Up Light Switch and Neutral Switch at the
transmission case, each with a new gasket, torqued to **32.3 N·m
{329.4 kgf·cm} {23.8 ft·lbf}** `[RM-K]`.

---

<a id="phase-5"></a>

### Phase 5 — Wiring Integration

<figure>
  <img src="/kb/subaru-tl70-manual-transmission-swap-into-automatic-zc6-zn6/zenki-wiring-routing-engine-bay-transmission-wire.png" alt="Subaru factory electrical wiring routing diagram showing the Transmission Wire harness joining the Engine Room Main Wire at connectors AL1 and AL2 near the dash panel, and joining the Engine Wire and No. 1 Engine Wire at connectors C1 and Cd1 at the engine unit" />
  <figcaption>
    Figure 8: The <strong>Transmission Wire</strong> — the harness branch
    that actually differs between A/T and M/T. It joins the Engine Room Main
    Wire at <code>AL1</code>/<code>AL2</code> (Dash Panel) and the Engine
    Wire/No. 1 Engine Wire at <code>C1</code>/<code>Cd1</code> (Engine Unit).
    <code>2013 Subaru BRZ Electrical Wiring.pdf</code>, page 46.
  </figcaption>
</figure>

(5.1) **Understand what the Transmission Wire actually carries, by
transmission type.** `[RM-Z-W]`'s parts-location index and connector list
show this single harness branch carrying entirely different hardware
depending on which transmission is fitted:

| Connector   | Carries                                      | Fitted on |
| :---------- | :------------------------------------------- | :-------- |
| `A20`       | Clutch Start Switch Assembly                 | M/T only  |
| `A21`       | Clutch Switch Assembly                       | M/T only  |
| `A18`/`A19` | Transmission Control Module (two connectors) | A/T only  |
| `A53`       | Back-Up Light Switch Assembly                | M/T only  |
| `A54`/`L2`  | Park/Neutral Position Switch Assembly        | A/T only  |

`[RM-Z-W]` — see the connector-location table around the "Parts Location"
index, and the circuit heading naming "Cruise Control, Electronically
Controlled Transmission and A/T Indicator (A/T), Engine Control, Shift
Indicator (M/T) and Shift Lock," which confirms the shift-lock, A/T
indicator, M/T shift indicator, and cruise-control circuits share fuses and
relay logic on this harness branch.

(5.2) **Wire in the Clutch Start Switch.** `[RM-K]` describes its function
directly: the switch is the starter-crank interlock, preventing the starter
from engaging unless the clutch pedal is fully depressed `[RM-K]`. On the
automatic side, the equivalent crank-permission logic runs through the
neutral start switch and an `INHIBITOR` relay instead `[RM-Z-W]`. Route the
Clutch Start Switch into the starter circuit in place of that inhibitor-relay
logic, matching the M/T wiring already present at connector `A20`
`[RM-Z-W]`.

(5.3) **Wire in the Clutch Switch separately — it is not the same circuit as
(5.2).** `[RM-K]`'s cruise-control diagnostic section documents this switch's
job directly: cruise control is released when the clutch pedal is depressed,
and a fault is logged if cruise control is _not_ released after the clutch
pedal is operated `[RM-K]`. This is a cruise-control safety cutout, wired at
connector `A21`, independent of the starter-interlock switch at `A20`
`[RM-Z-W]`.

(5.4) **Wire in the Back-Up Light Switch and Neutral Switch**, both threaded
directly into the `TL70` case. On the automatic, these two functions —
reverse-light signal and transmission-neutral detection — are consolidated
into a single "neutral start switch ASSY" `[RM-K]`; on the manual side they
are two dedicated switches at connectors `A53` and `A54`/`L2` respectively
`[RM-Z-W]` `[RM-K]`. Wire the reverse lights from the Back-Up Light Switch,
not from any surviving automatic-side wiring.

(5.5) **Delete the Shift Lock solenoid circuit entirely.** It has no manual
equivalent and no manual-side wiring exists for it on this harness branch
`[RM-Z-W]`.

(5.6) **Disconnect the TCM** per your [Phase 2](#phase-2) ECU strategy. Under
the recommended Option A, the reflashed/retuned ECM was never built to expect
a TCM response, so simply removing it from the harness produces no fault.
Under any other strategy, confirm independently that `U0101`/`U0402` will not
set before considering the car driveable.

(5.7) Apply dielectric grease to every reconnected connector.

---

<a id="phase-6"></a>

### Phase 6 — Commissioning

(6.1) Fill the `TL70` with `MG Gear Oil Special II` `[RM-Z-T]`. Bleed the
clutch hydraulic system through the bleeder plug, torqued to **7.8 N·m
{80 kgf·cm} {5.8 ft·lbf}** on completion `[RM-K]`.

(6.2) Confirm the [Phase 2](#phase-2) ECU strategy is actually resolved
before first start — scan for stored codes and confirm no `U0101`/`U0402`
is present before and after a short drive cycle.

(6.3) First start: confirm the Clutch Start Switch prevents cranking with the
clutch pedal up, and permits cranking with it fully depressed `[RM-K]`.
Confirm reverse lights function from the new Back-Up Light Switch wiring.

(6.4) Confirm cruise control (if equipped/retained) disengages correctly on
clutch-pedal actuation, verifying the (5.3) Clutch Switch wiring.

(6.5) Road test and recheck the reverse-check shift adjustment from
[Phase 4, (4.9)](#phase-4) after the linkage has settled.

---

## Post-installation Checks and Precautions

- Re-torque the transaxle-to-engine, flywheel, and clutch cover fasteners
  after the first several drive cycles.
- Recheck the clutch pedal support's mounting bolts/nuts — if the firewall
  provision from [Phase 4, (4.10)](#phase-4) required any drilling or
  fabrication, this is the joint most likely to work loose first.
- Confirm no stored DTCs related to CAN communication
  (`U0101`/`U0402`) after the ECM has had a full drive cycle to run its
  monitors.
- Recheck the propeller shaft's companion flange and center bearing bracket
  torques under load, particularly if [Phase 4, (4.6)](#phase-4)'s trial fit
  required any adjustment.

---

<a id="references"></a>

## References

- `[RM-Z-T]` 2013 Subaru BRZ Transmission manual — manual transaxle internal
  overhaul, SST tooling, gear-set torque specifications.
- `[RM-Z-W]` 2013 Subaru BRZ Electrical Wiring Diagram `G4400BE` — connector
  list, parts-location index, and harness-routing diagrams for both A/T and
  M/T variants.
- `[RM-K]` 2017 Subaru BRZ Service Manual `G4440BE`, OCR'd by chapter — cited
  sections: `IN` (general specifications and service data), `CL` (clutch),
  `MT` (manual transmission/transaxle), `AT` (automatic transmission/
  transaxle), `EM` (engine mechanical, engine rear oil seal), `DP` (drive
  shaft/propeller shaft), `AD` (axle/differential), `ST` (starter), `ES`
  (engine control, CAN diagnostics and DTC tables), `IT` (interior trim,
  console).
- `[C]` `ft86club.com/forums` — final-drive ratio claims and general
  community reporting, flagged inline wherever cited, including:
  - [How to: Manual Swap FRS/BRZ](https://www.ft86club.com/forums/showthread.php?t=125318)
  - [ABS C1288 - ECU Matching failed](https://www.ft86club.com/forums/showthread.php?p=3162105)
  - [Ecutek on an automatic](https://www.ft86club.com/forums/showthread.php?t=73599)
