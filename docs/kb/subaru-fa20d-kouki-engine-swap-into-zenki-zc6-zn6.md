---
title: "Subaru FA20D Kouki Engine and Wiring Harness Swap into a Zenki ZN6/ZC6 Scion FR-S or Subaru BRZ"
subtitle: Installation and Instruction Conversion procedure for swapping a 2017–2020 FA20D engine, ECM, and wiring harness into a 2013–2016 Scion FR-S or Subaru BRZ, retaining the original manual transaxle
datePublished: "2026-09-13T18:10:00"
published: true
author: Ron. A (@brz_typera)
description: Step-by-step workbook for swapping a 2017–2020 "kouki" FA20D engine, ECM, and wiring harness into a 2013–2016 "zenki" ZN6 Scion FR-S or ZC6 Subaru BRZ, with factory torque specifications and immobilizer-pairing guidance.
tags:
  - zn6
  - zc6
  - fa20d
  - subaru
  - toyota
  - scion
  - engine-swap
  - drivetrain
  - immobilizer
---

<a id="introduction"></a>

## Introduction

This article describes procedures and precautions for replacing the 2013–2016
("zenki") `FA20D` engine, engine control module, and engine wiring harness of a
`ZN6` Scion FR-S or `ZC6` Subaru BRZ with the 2017–2020 ("kouki") `FA20D`
engine, ECM, and harness from a later `ZN6`/`ZC6` donor. The recipient's own
manual transaxle, clutch hydraulics, axles, and body wiring stay in the car.
Please be sure to read it before beginning work and carry out correct
installation and handling.

Subaru and Toyota did not sanction this conversion and do not publish a
procedure for it. This document is assembled from two factory workshop
manuals — one fully text-searchable, one a scanned 221 MB combined manual with
no text layer, OCR'd chapter by chapter for this document — and from
`ft86club.com` build threads, some of which document a professional mechanic's
completed cross-generation swap. Where the manuals speak, they are quoted.
Where only the community speaks, that is marked. Where nobody knows, that is
marked too.

The following symbols are displayed for important points, which must be
observed.

| Note         |                                                                                                    |
| :----------- | :------------------------------------------------------------------------------------------------- |
| ☠️ Warning   | Safety precautions that must be observed (Improper handling may result in death or serious injury) |
| ⚠️ Advice    | For your safety and that of your vehicle (mishandling may result in injury or accident)            |
| ☝️ Advice    | Describes information that is useful for performing the work efficiently                           |

Source markers are displayed for every specification.

| Marker   | Meaning                                                                                                        |
| :------- | :-------------------------------------------------------------------------------------------------------------- |
| `[RM-Z]` | 2012–2013 Subaru BRZ factory service manual set (zenki) — Engine Mechanical, Electrical Wiring, Transmission, Quick Reference Index |
| `[RM-K]` | 2017 Subaru BRZ factory service manual `G4440BE` (kouki) — a single scanned combined manual, OCR'd by chapter for this document. Cited by PDF page and section code (e.g. `ES-685`) |
| `[C]`    | Community-reported, mainly `ft86club.com` forum threads. **Verify by trial fit or measurement before relying on it** |

<details>
  <summary>⚠️ Advice — General</summary>

- This conversion is not emissions-certified as a unit, even though donor and
  recipient share the same `FA20D` displacement and architecture. The model-year
  emissions certification does not automatically carry over between MY2013–2016
  and MY2017–2020 calibrations. OBD-II readiness monitors, local inspection
  requirements, and any engine-change approval process are the installer's
  responsibility.
- **The hardest part of this swap is not mechanical.** The engine ECM, the
  vehicle's immobilizer/Smart Entry hardware, and the ignition keys form a single
  matched security set on this platform `[RM-Z]` `[RM-K]` `[C]`. Read
  [Phase 2](#phase-2) in full, and decide your immobilizer strategy, **before**
  you buy a donor.
- The descriptions in this manual are intended for automobile mechanics or
  persons with basic knowledge of maintenance. Do not attempt this conversion by
  inexperienced persons only.
- Tighten all fasteners to the specified torque. Insufficient or excessive
  tightening may cause parts to come off or fail, leading to serious accidents.

</details>

### Summary of the Conversion

**Why.** The zenki and kouki `FA20D` share the same 2.0 ℓ naturally-aspirated
flat-four architecture — this is not a displacement swap. What the kouki engine
brings is a **Hall-effect crankshaft position sensor** in place of the zenki's
sensor `[C]`, a factory **"Track Mode"** throttle and traction-control
calibration reported to sharpen throttle response and permit disabling traction
control, and modestly more rated horsepower `[C]`. Whether the kouki long block
also carries a piston-ring revision addressing the zenki engine's widely
discussed oil-consumption complaints is **not confirmed by either factory
manual** in the sections reviewed for this document, and no `ft86club.com`
thread found during research states it outright either — treat it as an
unconfirmed possibility, not a documented reason, until you find a primary
source.

The work divides into five stages.

- **Source a complete, matching donor.** One donor car, one model year, engine
  and harness and ECM and immobilizer components together. See
  [Phase 0](#phase-0) and why "one donor" matters more here than it did for
  other swaps.
- **Decide the immobilizer strategy.** This has to happen before teardown, not
  after. See [Phase 2](#phase-2).
- **Harvest the donor** — engine, harness, ECM, and (depending on your
  immobilizer path) its keys and security components, as matched, un-cut
  assemblies.
- **Install into the recipient** on the recipient's own mounts and against the
  recipient's own manual transaxle — the bellhousing interface is unchanged
  across both generations `[RM-K]`.
- **Wire it in and commission it** — the injector feed relocation and the
  charging-system protocol change are the two wiring gotchas specific to this
  generation gap.

☝️ Advice: Unlike the NCP91/xD conversion this document is styled after, this
swap does not require stripping the recipient down to a rolling shell. The
transaxle, clutch, axles, subframe, body harness, and dash all stay exactly
where they are.

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
  - [Phase 2 — Immobilizer strategy](#phase-2)
  - [Phase 3 — Recipient preparation](#phase-3)
  - [Phase 4 — Mechanical installation](#phase-4)
  - [Phase 5 — Wiring integration](#phase-5)
  - [Phase 6 — Commissioning](#phase-6)
- [Post-installation Checks and Precautions](#post-install)
- [Budget](#budget)
- [References](#references)

---

<a id="compatible-vehicles"></a>

## Compatible Vehicle Models

### Recipient Vehicle — "Zenki"

| Item              | Specification                                                                        |
| :---------------- | :------------------------------------------------------------------------------------ |
| **Applied model** | `ZN6` (Scion FR-S) or `ZC6` (Subaru BRZ)                                              |
| Model-year letter | `A`–`D` in the applied-model code — 2012/03 through 2016/07 production `[C]`          |
| Engine            | `FA20D` 2.0 ℓ DOHC, naturally aspirated                                               |
| Transaxle         | `TL70` 6-speed manual — **retained**, not part of this conversion                     |

☝️ Advice: Scion badged this chassis "FR-S"; Subaru badged it "BRZ." Both are the
same `ZN6`/`ZC6` platform and take the same engine, harness, and ECM — the badge
does not change anything in this document.

### Donor Vehicle — "Kouki"

| Item              | Specification                                                                                     |
| :---------------- | :-------------------------------------------------------------------------------------------------- |
| **Applied model** | `ZN6` (**Toyota 86** — Scion was discontinued in 2016, so the 2017+ Toyota-badged car is not an FR-S) or `ZC6` (Subaru BRZ) |
| Model-year letter | `E`–`H` — production from 2016/07 through the platform's final MY2020, marketed in the US as the **"2017 BRZ"** `[C]` |
| Engine            | `FA20D` 2.0 ℓ DOHC, naturally aspirated — same displacement and block family as zenki |
| Transaxle         | `TL70` 6-speed manual — **not used**; the recipient's own transaxle stays in the car               |

⚠️ Advice: **Prefer a manual-transmission donor, and confirm the swap thread
you're following used one too.** Community reports indicate automatic-transmission
cars received only a partial subset of the kouki-generation revisions `[C]` —
this document assumes an M/T donor throughout.

<details open>
  <summary>⚠️ Advice — insist on one donor, one model year</summary>

This is the single most important sourcing rule in this document, and it
exists because the generation gap is not clean.

A `ft86club.com` poster who had already completed this class of swap put it
plainly: *"the engine loom from an early 2012/2013 motor is different to the
later 2015/2016 motor and... the 2017 motor is quite different again"* `[C]`.
That is at least **three** harness sub-generations across zenki alone, before
kouki is even considered. Buying an engine from one car and a harness or ECM
from another — even both nominally "zenki" or both nominally "kouki" — risks
combinations nobody has verified.

**Buy one complete, running donor**, and take the engine, the ECM, the harness,
and (per [Phase 2](#phase-2)) the immobilizer components and keys, all from that
one car. Record the donor's full VIN and decode its model-year letter before
you commit to the purchase.

</details>

<details>
  <summary>⚠️ Advice — do not attempt to mix generations of ECU and sensors</summary>

A `ft86club.com` thread citing Subaru's own documented changed-parts list for a
cross-generation swap lists: *"Changed fuel pressure sensor, changed specs of
cam angle sensor plate, changed specs of crank angle sensor, changed shape of
crank angle sensor plate, changed engine harness, changed alternator, etc."*
`[C]`. A professional mechanic who performed the reverse-direction swap (a
newer long block onto an older ECU) had to source and fit, piece by piece, "the
reluctor wheels on all the cam gears," "the crank trigger ring that goes
between the flywheel and crankshaft," "the crank sensor bracket that bolts to
the back of the block," and an older-generation DI fuel rail — specifically
*because* he kept the older ECM `[C]`. Another contributor on the same thread
was blunter: *"The cam and crank sensor plates from 2017 will confound a 2016
ECU"* `[C]`.

This document's whole strategy is to avoid that piecemeal path by taking the
**entire** kouki engine + harness + ECM + sensor set together, matched, from
one donor — never pairing a kouki ECM with zenki sensors or vice versa.

</details>

---

<a id="parts-manifest"></a>

## Parts Manifest

### ① Harvested from the donor vehicle

| No. | Product name                                          | Qty | Notes                                                                                    |
| --: | :----------------------------------------------------- | :-- | :---------------------------------------------------------------------------------------- |
|   ① | `FA20D` engine assembly, dressed                       | 1   | Complete long block with intake, DBW throttle body, exhaust manifold, alternator          |
|   ② | Engine control module (ECM)                            | 1   | 4 connectors, `A33`–`A36` `[RM-K]` — same connector naming as zenki, **not interchangeable calibration** |
|   ③ | Engine wiring harness, complete                         | 1   | Do not cut. Remove with the ECM attached as one assembly                                  |
|   ④ | Crankshaft position sensor + crank angle sensor plate    | 1   | ⚠️ **The plate is a separate part, mounted between crank and flywheel, not the sensor itself** `[RM-K]` — see [Phase 4](#phase-4) |
|   ⑤ | Camshaft/VVT position sensors                           | 4   | One per bank per cam. Comes with the harness, do not substitute zenki units `[RM-K]`      |
|   ⑥ | Knock sensors                                           | 2   | One per bank `[RM-K]`                                                                     |
|   ⑦ | Camshaft timing oil control valves                      | 4   | One per bank per cam                                                                      |
|   ⑧ | Flywheel (M/T)                                          | 1   | Carries the crank angle sensor plate — must come from the donor, matched to ④ `[RM-K]`    |
|   ⑨ | Clutch cover / pressure plate                           | 1   | Physically interchangeable across generations — see [Phase 4](#phase-4) for whether to reuse the recipient's own |
|  ⑩ | Fuel pressure sensor and DI fuel rail                    | 1   | Generation-specific; take the donor's, do not mix with zenki-generation parts `[C]`        |
|  ⑪ | Immobilizer/Smart Entry components                      | —   | **Only if pursuing the "bring the whole security set" path** — see [Phase 2](#phase-2)    |
|  ⑫ | At least one working ignition key                       | ≥1  | **Only if pursuing the "bring the whole security set" path** — see [Phase 2](#phase-2)    |

### ② Retained from the recipient vehicle

| No. | Product name                                    | Notes                                                                                                  |
| --: | :----------------------------------------------- | :------------------------------------------------------------------------------------------------------ |
|  ⑬ | `TL70` manual transaxle                          | Bellhousing bolt pattern is unchanged across generations — **3 bolts and 2 nuts, 50 N·m** `[RM-K]` — see [Phase 4](#phase-4) |
|  ⑭ | Front and rear engine mounting insulators        | ☝️ Reused if in good condition — kouki torque values differ from the zenki figures on file, see [Phase 4](#phase-4) |
|  ⑮ | Axles, front subframe/crossmember                | Unchanged                                                                                                |
|  ⑯ | Body wiring harness, dash cluster, body ECU/BCM  | Unchanged, unless the immobilizer strategy in [Phase 2](#phase-2) requires otherwise                    |
|  ⑰ | Clutch disc, release bearing, hydraulics          | Reusable if condition allows — see [Phase 4](#phase-4)                                                  |

### ③ Purchased new

| No. | Product name                             | Notes                                                                                    |
| --: | :---------------------------------------- | :----------------------------------------------------------------------------------------- |
|  ⑱ | Crank/cam sensor O-rings                  | New each time, oil-lubricated on install `[RM-Z]` `[RM-K]`                                 |
|  ⑲ | Engine mount hardware                     | New bolts/nuts at the torques in [Phase 4](#phase-4), particularly the crossmember nuts    |
|  ⑳ | Wiring materials for the injector-feed fix | See [Phase 5](#phase-5) — gauge to match the existing harness, appropriate fuse and terminal |
|  ㉑ | Dielectric grease                         | All reconnected engine and chassis connectors                                             |
|  ㉒ | FIPG / gasket set as required by teardown | Valve covers, oil pan, etc., depending on how far the donor engine is serviced before install |

Confirmation: Upon collecting these parts, immediately check that nothing is
damaged and that the harness has not been cut.

---

<a id="tool-manifest"></a>

## Tool Manifest

### Hand and shop tools

| Tool                                            | Tool                                        |
| :----------------------------------------------- | :------------------------------------------- |
| Metric socket set, 1/2" and 3/8" drive           | Torque wrench, 5–25 N·m range                |
| Torque wrench, 20–90 N·m range                   | Breaker bar                                  |
| Engine hoist and load leveller                   | Engine stand                                 |
| Transmission jack                                | Connector pin release pick                   |
| Soldering iron, heat-shrink                       | Multimeter, with continuity and resistance   |
| Thread-locking compound                          | Anti-seize compound                          |
| Catch pans, drain pans                            | Safety glasses, work gloves                  |

### Scan tool

⚠️ Advice: **A Subaru-capable scan tool with security/immobilizer access
(Subaru Select Monitor / SSM4, or an aftermarket equivalent with immobilizer
functions) is not optional for this conversion**, regardless of which
immobilizer strategy you pick in [Phase 2](#phase-2). The kouki factory manual
states explicitly, for ECM replacement: *"the engine control computer for
model with immobilizer is replaced, be sure to register the immobilizer
system"* and *"do not use the one with a wrong specification"* `[RM-K]`, and
separately: *"When replacing the engine control computer, perform registration
of the identification code. (For registration procedure, refer to
'REGISTRATION MANUAL FOR IMMOBILIZER.')"* `[RM-K]`. **That registration manual
is not part of either factory manual set researched for this document** — plan
on a dealer, locksmith, or specialist shop for the actual registration step
unless you go the standalone-ECU route in [Phase 2](#phase-2).

---

<a id="precautions"></a>

## Installation Precautions (For Installers)

<details open>
  <summary>☠️ Warning</summary>

- **Disconnect the negative battery terminal** before beginning electrical
  work.
- Support the vehicle on rated stands. Do not work under a vehicle held only by
  a jack. The engine is the heaviest single assembly you will move in this job.
- Allow the exhaust system to cool fully before removal.
- Depressurise the fuel system before disconnecting the fuel line.

</details>

<details open>
  <summary>⚠️ Advice</summary>

- **Do not attempt a first start until your immobilizer strategy is fully
  resolved.** A mismatched ECM/immobilizer/key set will not start the car, and
  repeated failed start attempts on some immobilizer systems can trigger a
  security lockout requiring dealer intervention. Read [Phase 2](#phase-2)
  before you touch the battery.
- **Do not carry a torque spec from one generation to the other without
  checking this document.** Several kouki mount torques found in the factory
  manual (see [Phase 4](#phase-4)) do not match the single, less-certain zenki
  figure available — use the kouki values, since the mounts you're torquing are
  matched to the kouki engine going in.
- Photograph every connector, ground strap, and bracket before disconnecting
  it, and label every harness branch as you free it.
- Apply dielectric grease to all engine connectors on reassembly.

</details>

<details open>
  <summary>☝️ Advice</summary>

- Confirm your donor's exact model-year letter and immobilizer variant (ID Code
  Box with Smart Entry, or Transponder Key ECU without) before removing
  anything — both exist on this platform `[RM-Z]` `[RM-K]`, and your strategy in
  [Phase 2](#phase-2) depends on which one you have.
- Take the donor's alternator along with the engine. The kouki charging system
  is reported to be ECU-controlled over a single-wire protocol with different
  battery-sensing wiring than zenki `[C]` — see [Phase 5](#phase-5).

</details>

---

<a id="work-procedure"></a>

## Work Procedure

<a id="phase-0"></a>

### Phase 0 — Donor Inspection

<figure>
  <img data-pending-src="/kb/subaru-fa20d-kouki-engine-swap-into-zenki-zc6-zn6/figure-01.jpg" src="/kb/no-image-available.svg" alt="Donor kouki-generation Toyota 86 or Subaru BRZ engine bay before teardown" />
  <figcaption>
    Figure 1: The donor kouki `FA20D`. Photograph the ECM connectors, the
    alternator, and the crank sensor mounting location before anything is
    disconnected.
  </figcaption>
</figure>

(0.1) Record the donor VIN and decode the applied-model code to confirm it
falls in the `E`–`H` model-year-letter range.

(0.2) Confirm the engine is `FA20D` and the transaxle is manual. A manual
donor is assumed for the rest of this document.

(0.3) **Identify the donor's immobilizer variant** — `ID Code Box` (fitted with
Smart Entry & Start) or `Transponder Key ECU Assembly` (without) `[RM-Z]`
`[RM-K]`. This determines which branch of [Phase 2](#phase-2) applies.

(0.4) **Verify the donor runs, using the seller's key.** Perform a compression
test and, if possible, a leakdown test. Scan for stored trouble codes and
photograph the results.

(0.5) Photograph and label every connector, ground, and bracket, with
particular attention to the ECM's four connectors (`A33`–`A36`) and the
alternator's charging-control wiring.

---

<a id="phase-1"></a>

### Phase 1 — Donor Harvest

(1.1) Remove the battery. Drain the engine oil and coolant.

(1.2) Harvest in the following order:

| Item                                                  | Disposition |
| :------------------------------------------------------ | :----------- |
| Engine wiring harness with ECM attached, uncut          | **Keep**    |
| Engine assembly, dressed (intake, DBW throttle body, exhaust manifold, alternator) | **Keep**    |
| Crankshaft and camshaft position sensors                | **Keep**    |
| Knock sensors, OCV assemblies                            | **Keep**    |
| Fuel pressure sensor, DI fuel rail                        | **Keep**    |
| Flywheel                                                 | **Keep** — carries the crank angle sensor plate |
| Clutch cover / pressure plate                             | Keep — see [Phase 4](#phase-4) for whether it's needed |
| Immobilizer components and at least one key               | **Keep only if pursuing the "bring the whole security set" path** — see [Phase 2](#phase-2) |

(1.3) Remove the wiring harness with the ECM attached, as one assembly. Do not
cut it.

(1.4) Remove the engine, out the front, without disturbing the donor's own
transaxle — the donor's `TL70` is not needed.

(1.5) Separate the engine from the donor's transaxle. Recover the flywheel with
the engine side.

⚠️ Advice: Photograph the crank angle sensor plate's orientation before removing
the flywheel — it is aligned to the crankshaft with a locating pin `[RM-K]`, and
losing track of its index makes reassembly slower, not impossible.

---

<a id="phase-2"></a>

### Phase 2 — Immobilizer Strategy

☝️ Advice: **Decide this before you buy a donor, not after you've torn one
down.** Everything else in this document assumes you have already made this
choice.

On this platform, the ECM, the immobilizer/Smart Entry hardware, and the
ignition key(s) form a single matched security set. A `ft86club.com` poster
explained the mechanism directly: *"there is a set of modules in the car that
form a security set and this includes at least the dash cluster, immobiliser
module and the engine ecu plus rfid chips in keys. If you swap out any of the
modules in the security set then car wont start unless you go through a
specific procedure to sync in each new module into car"* `[C]`. The kouki
factory manual confirms the same architecture from its own side: a
`Certification ECU` (Smart Key ECU) collates an encrypted ID exchange with the
key and *"sends them to the engine control computer"* `[RM-K]`, and an ECM swap
on an immobilizer-equipped car requires registration via a "REGISTRATION MANUAL
FOR IMMOBILIZER" that is **not included in either factory manual set** consulted
for this document `[RM-K]`.

Three strategies are documented or reported in the community. None is a clean
"just plug it in."

<details open>
  <summary>Option A — bring the whole donor security set</summary>

Harvest the donor's ECM, its immobilizer module (`ID Code Box` or `Transponder
Key ECU Assembly`), and at least one of its working keys, and have a dealer or
locksmith register that **complete, already-matched set** into the recipient
body via SSM4 or equivalent. This keeps the engine-side and immobilizer-side
components matched to each other exactly as the donor manufacturer paired
them — you are asking the shop to introduce one new matched set into the car,
not to re-pair mismatched components.

⚠️ Advice: This still requires professional registration equipment and time at
a dealer or specialist, and depends on whether that shop's tooling supports
introducing a full donor security set into a different VIN. Confirm this with
the shop before committing to sourcing keys and modules from the donor.

</details>

<details>
  <summary>Option B — resync the kouki ECM into the existing zenki security set</summary>

Attempt to register the donor's ECM alone against the recipient's existing
immobilizer module, dash cluster, and keys, via dealer or SSM4 tooling. **This
is the least-verified option.** One `ft86club.com` thread on exactly this
question (*"How to replace ecu / immobilizer system?"*) ends without the
original poster ever posting a working procedure, despite claiming to have
solved it `[C]`. A professional mechanic on a separate completed swap thread
warned generally that *"slapping ECUs around... prepare to deal with the
engine immobiliser not wanting to go"* `[C]`, and another poster on the same
thread stated flatly that the older ECU's calibration is not compatible with
the newer car's security pairing in the reverse direction — implying the
mismatch runs both ways `[C]`. Treat this option as unproven; if you pursue it,
confirm your specific shop's tooling can actually perform a cross-generation
resync before you tear anything down.

</details>

<details>
  <summary>Option C — bypass with a standalone ECU</summary>

Replace the factory ECM entirely with a plug-in aftermarket standalone ECU that
has no immobilizer dependency — a `ft86club`-adjacent harness vendor lists an
existing plug-in solution for this exact platform `[C]`. This sidesteps the
whole security-set problem, at the cost of losing the factory ECM's calibration
and requiring a professional tune. This is the option the community leans
toward for a clean cross-generation swap specifically **because** Options A and
B both depend on dealer-level tooling and an unpublished registration
procedure.

</details>

---

<a id="phase-3"></a>

### Phase 3 — Recipient Preparation

(3.1) With the immobilizer strategy from [Phase 2](#phase-2) settled, remove
the recipient's zenki engine following the standard factory procedure —
battery, fluids, intake, exhaust, engine harness connectors (labelled per
[Phase 1](#phase-1) conventions), mounts, and the engine-to-transaxle bolts.

(3.2) Leave the transaxle, clutch hydraulics, axles, and subframe in place.

(3.3) Inspect the recipient's engine mount insulators for condition. They are
reused unless damaged — see [Phase 4](#phase-4) for the torque values to apply
on reinstall.

---

<a id="phase-4"></a>

### Phase 4 — Mechanical Installation

<figure>
  <img data-pending-src="/kb/subaru-fa20d-kouki-engine-swap-into-zenki-zc6-zn6/figure-02.jpg" src="/kb/no-image-available.svg" alt="Kouki FA20D long block being lowered onto the recipient's engine mounts" />
  <figcaption>
    Figure 2: The kouki long block on the hoist, ready to mate to the
    recipient's `TL70` transaxle.
  </figcaption>
</figure>

(4.1) Mate the flywheel harvested with the donor engine to the crankshaft,
respecting the crank angle sensor plate's original index. Torque the flywheel
bolts to **85 N·m {867 kgf·cm, 62.7 ft·lbf}**, 8 bolts `[RM-K]`.

(4.2) Fit the clutch cover / pressure plate. The kouki factory manual gives 6
bolts at **16 N·m {163 kgf·cm, 11.8 ft·lbf}** `[RM-K]`. ☝️ Advice: the recipient's
own clutch disc, release bearing, and pressure plate can be reused here if
condition allows — this interface has not changed between generations; no
`ft86club.com` build thread reviewed for this document reports a bellhousing or
clutch mismatch on a cross-generation swap.

(4.3) Mate the engine to the recipient's `TL70` transaxle. The bellhousing
fastens with **3 bolts and 2 nuts at 50 N·m {510 kgf·cm, 36.9 ft·lbf}** — the
kouki manual quotes this identical figure for both manual and automatic
installs, consistent with an unchanged bolt pattern across generations
`[RM-K]`.

(4.4) Lower the assembly onto the recipient's engine mount insulators. Torque
to the **kouki** values, since the incoming engine and its mount bosses are
kouki-generation:

| Joint                                          | N·m | kgf·cm | ft·lbf | Notes                          | Source   |
| :---------------------------------------------- | --: | -----: | :----- | :------------------------------ | :------- |
| Front engine mounting insulator, 4 bolts        |  35 |    357 | 25.8   |                                  | `[RM-K]` |
| Rear engine mounting insulator No.1, 4 bolts    |  40 |    408 | 29.5   |                                  | `[RM-K]` |
| Engine rear mounting member, bolts               |  65 |    663 | 47.9   | ×4                               | `[RM-K]` |
| Engine rear mounting member, nuts                |  55 |    561 | 40.6   | ×2                               | `[RM-K]` |
| Front crossmember sub-assembly, nuts             |  60 |    612 | 44.2   | **New nuts** — general subframe reinstall spec, unrelated to the mounts above but listed here since it's disturbed during this job | `[RM-K]` |

⚠️ Advice: A single zenki-side figure of **45 N·m** for "engine mount" was found
during research, but it came from a spark-plug R&R procedure that merely
requires unbolting and re-hanging the engine on a support tool — not from a
dedicated mount torque table — and it is not used in this document. Use the
kouki table above.

(4.5) Reconnect exhaust, intake, and any hoses freed in [Phase 3](#phase-3).

---

<a id="phase-5"></a>

### Phase 5 — Wiring Integration

(5.1) Route the donor's engine harness to the ECM location and connect all four
connectors, `A33` through `A36` — the connector naming is unchanged from zenki
`[RM-Z]` `[RM-K]`, but the calibration behind them is not; do not substitute a
zenki ECM here.

(5.2) **Fix the injector feed relocation.** Community reports describe a "big
black plug" at the firewall that carries the injector +12 V feed on zenki
harnesses; on kouki harnesses, that feed is instead sourced **near the
battery** `[C]`. Pairing a kouki engine harness with the recipient's zenki dash
harness — exactly this swap's situation — leaves the injectors unfed unless a
new feed wire is run from the battery/fuse box to the point the kouki harness
expects it. Confirm continuity with a multimeter before commissioning; do not
assume the stock firewall connector supplies this feed.

(5.3) **Verify the charging system wiring.** The kouki alternator is reported
to be controlled by the ECM over a single-wire network, with different
battery-sensing wiring than zenki `[C]`. Confirm the recipient's body harness
provides the signal path the kouki alternator and ECM expect; where it does
not, wire a dedicated feed rather than assuming the zenki charge-light circuit
is compatible.

(5.4) Reconnect the crank position sensor (differential pair, no chassis
ground reference — pins `A34-16` and `A34-27` on the ECM side, `[RM-K]`), the
four camshaft/VVT sensors, the two knock sensors, and the four oil control
valves, using new O-rings on any sensor that was unseated.

(5.5) Reconnect the DBW throttle body connector and the fuel pressure
sensor/DI fuel rail wiring.

(5.6) Apply dielectric grease to every reconnected connector.

---

<a id="phase-6"></a>

### Phase 6 — Commissioning

(6.1) Fill oil and coolant. Prime the oil system before the first crank if the
engine sat dry for any length of time.

(6.2) **Complete the immobilizer registration chosen in [Phase 2](#phase-2)**
before attempting to start the car. If using Option A or B, this happens via
your dealer/locksmith's SSM4-equivalent tooling. If using Option C, confirm the
standalone ECU's own security handling (or lack of it) instead.

⚠️ Advice: Do not repeatedly attempt to start the car through immobilizer
failures hoping it resolves itself — resolve the registration first.

(6.3) First start: check for leaks, listen for any timing-related knock or
misfire that would indicate a crank/cam sensor or reluctor mismatch, and scan
for stored codes.

(6.4) Confirm the charging system is functioning — a fault in the [Phase 5](#phase-5)
alternator wiring will typically surface quickly as a charge warning or a
battery-voltage code.

---

<a id="post-install"></a>

## Post-installation Checks and Precautions

- Re-torque the engine mount and bellhousing fasteners after the first several
  drive cycles.
- Confirm no stored DTCs related to crank/cam position, knock, or charging
  system after the readiness monitors have had a chance to run.
- Recheck the injector-feed splice from [Phase 5, (5.2)](#phase-5) under load —
  a marginal connection there tends to show up as a rough idle or a misfire
  under acceleration rather than a dead injector outright.

---

<a id="budget"></a>

## Budget

☝️ Advice: No completed build's itemized cost was found during research for
this exact conversion. Budget for a complete running donor vehicle (the largest
single cost), a Subaru-capable scan tool session or dealer visit for the
immobilizer step in [Phase 2](#phase-2), new mount hardware, and — if pursuing
Option C — a standalone ECU and professional tune. Treat any total figure here
as unverified until a completed build's costs are documented.

---

<a id="references"></a>

## References

- `[RM-Z]` 2012 Subaru BRZ Service Manual Quick Reference Index; 2013 Subaru
  BRZ Engine Mechanical; 2013 Subaru BRZ Electrical Wiring; 2013 Subaru BRZ
  Transmission.
- `[RM-K]` 2017 Subaru BRZ Service Manual `G4440BE`, OCR'd by chapter — cited
  pages 142, 146, 171–172, 808–810, 816–818, 820–821, 839–841, 905–907, 936,
  961–962, 1650, 1654–1655, 2924–2930, 2967–2968.
- `[C]` `ft86club.com/forums` — threads on FA20 crankshaft angle sensor type,
  FA20-to-ECU compatibility, engine swaps across model years, immobilizer
  location and pairing, and a completed cross-generation engine swap build
  log; and general web research on zenki/kouki harness connector and
  charging-system differences.
