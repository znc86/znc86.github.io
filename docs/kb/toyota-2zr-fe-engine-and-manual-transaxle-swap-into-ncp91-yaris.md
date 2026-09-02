---
title: "Toyota 2ZR-FE Engine and C50 Manual Transaxle Swap into the NCP91 Yaris"
subtitle: Installation and Instruction Conversion procedure for a 2ZR-FE and 5-speed manual transaxle into an automatic NCP91/XP90 Yaris, from a Scion xD donor
datePublished: "2026-09-01T02:44:00"
published: true
author: Ron. A (@brz_typera)
description: Step-by-step workbook for swapping a 2ZR-FE engine and C50 5-speed manual transaxle from a Scion xD donor into an automatic 2010–2011 Toyota Yaris NCP91, with factory torque specifications.
tags:
  - ncp91
  - xp90
  - toyota
  - engine-swap
  - drivetrain
  - 2zr-fe
---

№ 2ZR-NCP91-0001

<a id="introduction"></a>

## Introduction

Thank you very much for undertaking this conversion. This document describes
procedures and precautions for replacing the `1NZ-FE` engine and `U340E`
automatic transaxle of the NCP91 Yaris with the `2ZR-FE` engine and `C50`
5-speed manual transaxle. Please be sure to read it before beginning work and
carry out correct installation and handling.

Toyota did not sanction this conversion and does not publish a procedure for it.
This document is assembled from one builder's complete parts-and-task record, and
roughly seventy pages of forum threads that contradict one another and self-correct
several times, and two factory workshop manuals. Where the manuals speak,
they are quoted. Where only the community speaks, that is marked. Where nobody
knows, that is marked too.

The following symbols are displayed for important points, which must be observed.

| Note         |                                                                                                    |
| :----------- | :------------------------------------------------------------------------------------------------- |
| ☠️ Warning   | Safety precautions that must be observed (Improper handling may result in death or serious injury) |
| ⚠️ Attention | For your safety and that of your vehicle (mishandling may result in injury or accident)            |
| ☝️ Advice    | Describes information that is useful for performing the work efficiently                           |

Source markers are displayed for every specification.

| Marker   | Meaning                                                                            |
| :------- | :--------------------------------------------------------------------------------- |
| `[RM-Y]` | Toyota Yaris/Vitz XP90 workshop manual (1NZ-FE chassis), cited by chapter and page |
| `[RM-C]` | Toyota Scion xD / Corolla repair manual, for 2ZR-FE engine values                  |
| `[C]`    | Community-reported. **Verify by trial fit or measurement before relying on it**    |

<details>
  <summary>⚠️ Advice — General</summary>

- This conversion is not emissions-certified. The resulting vehicle is not
  covered by any Toyota warranty, and the original vehicle's emissions
  certification does not carry over. OBD-II readiness monitors, local
  inspection requirements, and any engine-change approval process are the
  installer's responsibility. In California, a Bureau of Automotive Repair
  referee inspection with an engine-change sticker is required, and the
  catalytic converter must match the installed engine — the original Yaris
  converter is not valid for a 2ZR-FE. Check your own jurisdiction before
  spending money.
- The descriptions in this manual are intended for automobile mechanics or
  persons with basic knowledge of maintenance. Do not attempt this conversion by
  inexperienced persons only.
- Tighten all fasteners to the specified torque. Insufficient or excessive
  tightening may cause parts to come off or fail, leading to serious accidents.

</details>

---

<a id="contents"></a>

## Table of Contents

- [Introduction](#introduction)
- [Compatible Vehicle Models](#compatible-vehicles)
- [Parts Manifest](#parts-manifest)
- [Tool Manifest](#tool-manifest)
- [Installation Precautions (For Installers)](#precautions)
- [Work Procedure](#work-procedure)
  - [Phase 0 — Donor intake](#phase-0)
  - [Phase 1 — Donor teardown and harvest](#phase-1)
  - [Phase 2 — Transaxle preparation](#phase-2)
  - [Phase 3 — Engine preparation](#phase-3)
  - [Phase 4 — Joining engine and transaxle](#phase-4)
  - [Phase 5 — Yaris teardown](#phase-5)
  - [Phase 6 — Manual conversion, interior](#phase-6)
  - [Phase 7 — Powertrain installation](#phase-7)
  - [Phase 8 — Cooling, fuel, and electrical](#phase-8)
  - [Phase 9 — Immobilizer](#phase-9)
  - [Phase 10 — Instrumentation and signals](#phase-10)
  - [Phase 11 — First start and commissioning](#phase-11)
- [Post-installation Checks and Precautions](#post-install)
- [Budget](#budget)
- [Appendix A — Wrong-Engine Quarantine](#appendix-a)
- [Appendix B — Bolt-on Reference](#appendix-b)
- [References](#references)

---

<a id="compatible-vehicles"></a>

## Compatible Vehicle Models

### Recipient Vehicle

| Item              | Specification                                                                                                 |
| :---------------- | :------------------------------------------------------------------------------------------------------------ |
| **Applied model** | **`NCP91L`** — XP90, 2nd generation Vitz/Yaris, 5-door hatchback. `L` = left-hand drive. The sedan is `NCP93` |
| Model year        | 2010–2011 (US market)                                                                                         |
| Engine            | `1NZ-FE` 1.5 ℓ VVT-i                                                                                          |
| Transaxle         | `U340E` 4-speed automatic                                                                                     |
| Platform          | Toyota B platform                                                                                             |

☝️ Advice: The B platform was later shared between the Vitz/Yaris and the
Aqua/Prius C. The 3-door XP90 is the "Yaris Liftback"; the 5-door was sold in
the US from the 2009 model year.

### Donor Vehicle — Recommended

| Item              | Specification                                                              |
| :---------------- | :------------------------------------------------------------------------- |
| Vehicle           | **Scion xD, 2008–2014, US market, manual transmission**                    |
| **Applied model** | **`ZSP110L-AHMRKA`** — the US-market 5-door manual `[C]`                   |
| Engine            | `2ZR-FE` 1.8 ℓ Dual VVT-i, DOHC 16-valve, timing chain                     |
| Output            | 136 hp / 129 lb·ft at the crank (stock)                                    |
| Transaxle         | `C50` 5-speed manual                                                       |
| Production period | 06.2007 – 07.2014 `[C]`                                                    |
| Platform          | Shared with the 2nd-generation Toyota ist (`NCP110` / `NCP115` / `ZSP110`) |

<details>
  <summary>⚠️ Warning — `AZE151` is a different car, and it is an easy mistake</summary>

A code that circulates in this context is **`AZE151L`**, sometimes with suffixes
like `-FHMNKA`, listed against build periods 03.2007–03.2010 and 03.2010–12.2015.
**That is not the Scion xD.**

`AZE151` is the **Scion xB**, 2008–2015, and its engine is the **`2AZ-FE`
2.4 ℓ** — a completely different engine from a different family. Any parts
catalogue listing that code will show `2AZFE` in its engine column, which is the
tell.

The reason the mistake is easy: Toyota's leading letters encode the **engine
family**, not the transmission or the drivetrain. `AZ` means an AZ-series engine
(1AZ/2AZ), `NCP` means an NZ-series engine, and `ZSP` means the ZR-series engine
in the ist/xD family. So `AZE151` announces a 2AZ-FE before it says anything
about the body at all. Nothing in the base code indicates manual versus
automatic — that lives in the suffix.

Ordering 2ZR-FE swap parts against an `AZE151` lookup returns 2.4 ℓ xB
components: different mounts, different accessories, different everything. See
[Appendix A](#appendix-a) for the other wrong-vehicle traps in this conversion.

</details>

<details open>
  <summary>⚠️ Attention — donor selection determines how hard this job is</summary>

- **Acquire a complete, running donor vehicle.** Every source that has completed
  this conversion says the same thing, and one who pieced it together over
  six to nine months says explicitly that buying a whole donor xD is the way to
  do it. The guide's original author put it as: aside from the engine and its
  accessories, use every part from a Scion xD.
- **Verify the engine is `2ZR-FE`, not `2ZR-FAE`.** The FAE is the Valvematic
  variant and is not the subject of this document. The Corolla XRS also uses a
  different engine.
- ⚠️ **Buy a US-market car.** The immobilizer ECU was fitted only to **Canadian**
  xDs from 08/2010 to 06/2014, and never to US xDs. The same ECM part number
  appears both ways, so the market matters more than the number. **This document
  assumes a US donor throughout** — see [Phase 9](#phase-9).
- **Obtain the donor's master key.** Without it, the dealer path for adding or
  registering keys closes entirely.
- **Record the donor VIN before purchase** and pull its history report.
- **Verify the engine harness has not been cut anywhere.** The manual-transmission
  xD engine harness is the scarcest single item in this conversion — reported
  unobtainable in 2016, 2017, 2020 and still in 2023. Source harnesses from
  salvage-inventory search services rather than auction sites.

</details>

#### Which xD model years make this easier

The xD was sold in the US for model years **2008 through 2014**, and the
2ZR-FE/C50 combination is unchanged across all of them. There is no wrong year.
But three things do shift with the calendar.

| Consideration             | Earlier (2008–2009)                                                                                                         | Later (2010–2014)                                                              |
| :------------------------ | :-------------------------------------------------------------------------------------------------------------------------- | :----------------------------------------------------------------------------- |
| **Community coverage**    | ☝️ **Best.** Almost every documented build used an 08–09 donor, so part numbers and pinouts are verified against these cars | Thinner. The wiring is identical, but fewer builders have walked it            |
| **ECM part number**       | Simplest — `89661-52F71` covers 06/2007–03/2009 `[C]`                                                                       | Splits four ways by build date: `52F72`, `52M20`, `52U00`, `52Y60` `[C]`       |
| **RH mount isolator**     | `12305-37040` for 06/2007–11/2007 `[C]`                                                                                     | `12305-37190` from 01/2008 onward `[C]` — the majority case                    |
| **Condition and mileage** | Older, higher miles, more seized fasteners                                                                                  | ☝️ **Better.** Lower miles, and the bell housing bolts are less likely to snap |
| **Salvage availability**  | Thinning out                                                                                                                | ☝️ **Better**, and improving as these cars age into yards                      |

☝️ Advice: **The practical sweet spot is a 2011–2014 car.** Condition and
availability outweigh community familiarity — the wiring work is identical either
way, and a donor whose fasteners are not seized saves more time than a matching
forum post does. The one real advantage of an 08–09 car is that its single ECM
part number removes a sourcing decision if the ECM ever needs replacing on its
own.

⚠️ Attention: **The transmission is the constraint, not the year.** Manual xDs
are far rarer in salvage than automatics, and the M/T engine harness
`82121-52E90` is reported to be the same across all years `[C]`. Let the
availability of a _manual_ car drive the year decision, not the reverse.

⚠️ Attention: The right-hand mount isolator number is **disputed across
sources** — `12305-37091` also appears alongside the two dated numbers above.
Verify against the donor's own build date plate before ordering. `[C]`

### Donor Vehicle — Alternative

The Toyota Corolla (2009–2020) uses the same engine and is far more plentiful in
salvage yards. It is a viable source for the **engine itself**, but not for the
electrical and mounting hardware.

<details>
  <summary>⚠️ Advice — do not use a Corolla engine harness</summary>

- The Corolla ECM lives on the **driver's side**; the Yaris and xD ECMs live on
  the **passenger side**. Nothing about the routing carries over.
- The Corolla harness has **three fusebox connectors and none of them match the
  Yaris**. Every wire must be relocated individually into the Yaris `CA1` and
  `CA2` plugs.
- The battery cables to the starter and alternator must be **cut and spliced** to
  the 1NZ-FE harness cables for length and correct terminals.
- The one builder who completed this route describes it as a monumental task and
  advises against attempting it without extensive wiring experience. His workaround
  for the reach problem was to flip the ECM plug harness over the valve cover and
  mount the xD ECM to the cowl. `[C]`
- **The 2010+ Corolla ECM is not compatible** unless you intend to program new
  keys.

☝️ If a Corolla is your only donor, buy the engine from it and source the ECM,
engine harness and mounts separately from an xD.

</details>

<details>
  <summary>⚠️ Advice — vehicles this conversion does not fit</summary>

- **The Echo / Scion xA frame will not accept this conversion.** That is a
  different job with different mounts and no shared procedure.
- **The third-generation Yaris (NCP131 and later) is out of scope.** It uses a
  different ECM and chassis harness, requires a `ZRE18X` ECU rather than
  `ZRE152`, and its ABS unit will not communicate with a `ZRE152` ECU.
  Approximately ten pins require repinning. See Phase 10. `[C]`
- **The 2AZ-FE is not an alternative engine.** It mates to the E351 transaxle and
  requires cutting and welding. `[C]`

</details>

---

<a id="parts-manifest"></a>

## Parts Manifest

☝️ Advice: Part numbers marked `[C]` are cross-referenced from parts catalogues,
not from a factory manual — the repair manual identifies fasteners by joint name,
not by part number. Verify against your donor's year before ordering.

### ① Harvested from the donor vehicle

| No. | Product name                              | Qty | Notes                                                             |
| --: | :---------------------------------------- | :-- | :---------------------------------------------------------------- |
|   ① | 2ZR-FE engine assembly                    | 1   | With all accessories                                              |
|   ② | C50 5-speed manual transaxle              | 1   | Comes with the donor. See [Phase 0](#phase-0)                     |
|   ③ | Engine ECM                                | 1   | `89661-52F81` M/T `[C]`. Must match engine **and** transaxle type |
|   ④ | Engine wiring harness                     | 1   | `82121-52E90` M/T, all years `[C]`. **Scarcest item**             |
|   ⑤ | Engine and transaxle mounts, all brackets | 6   | Six pieces, not three — see Phase 7                               |
|   ⑥ | Exhaust manifold and midpipe              | 1   | ⚠️ **Remove before the shell is scrapped**                        |
|   ⑦ | Clutch master and slave cylinders         | 1   | No factory part number published for these                        |
|   ⑧ | Shift cables and floor shifter            | 1   | xD cables mandatory with xD mounts                                |
|   ⑨ | CV axles                                  | 2   | Must match the transaxle spline count                             |
|   ⑩ | Intake airbox, tube, and MAF sensor       | 1   | MAF `22204-31020` `[C]`. Airbox lid carries the MAF mount         |
|   ⑪ | Alternator, 140 A                         | 1   | `27060-37040` `[C]`                                               |
|   ⑫ | A/C compressor and hoses                  | 1   | `88310-1A660` `[C]`; lines `88712-52341`, `88711-52311`           |
|   ⑬ | Coolant filler neck and hoses             | 1   | See Phase 8                                                       |

### ② Harvested from the recipient Yaris — retained

| No. | Product name                          | Notes                                                       |
| --: | :------------------------------------ | :---------------------------------------------------------- |
|   ⑭ | Radiator and cooling fans             | ☝️ **Reused.** Adequate even for track use                  |
|   ⑮ | Starter                               | ☝️ **Reused.** Both engines use a 9-bolt, 2-o'clock starter |
|   ⑯ | Brake booster, master cylinder, lines | Booster reused; master cylinder replaced — see ⑳            |
|   ⑰ | A/C hard lines                        | Reused                                                      |

### ③ Sourced from a manual Yaris

☝️ Advice: A manual Yaris in a salvage yard is worth a trip even after you
already have the donor xD, because ⑱ and ⑲ cannot come from the xD and ⑲ cannot
be bought new at all. While you are under the dash, take the rest of the list —
the trip is already paid for, and every item on it is either cheaper or more
certain than the mail-order equivalent.

| No. | Product name                         | Notes                                                                                                                |
| --: | :----------------------------------- | :------------------------------------------------------------------------------------------------------------------- |
|   ⑱ | **Clutch pedal assembly**            | ⚠️ **From a Yaris, NOT the xD** — see below                                                                          |
|   ⑲ | **Clutch master-to-hose tube**       | `31481-52110` `[C]` — ⚠️ **no longer manufactured**, salvage only                                                    |
|   ⑳ | Clutch master cylinder               | A Yaris unit is the direct fit; the donor xD's also works                                                            |
|  ㉑ | **Brake master cylinder, M/T**       | The salvage alternative to buying new — ⚠️ must be the **manual** unit, whose reservoir carries the clutch feed port |
|  ㉒ | Clutch hydraulic hardware, remaining | Flexible hose, brackets, clamps and clips — cheaper to take the lot than to order them singly                        |

**⑱ Why the pedal must come from a Yaris, not the xD.** The xD clutch pedal
carries a **return spring** and the Yaris pedal does not. The Yaris pedal box and
firewall are designed around the no-spring arrangement, so the xD pedal does not
drop into a Yaris correctly even though almost everything else on the donor does.
This is the one place where the otherwise-reliable rule of "use every part from
the xD" gives the wrong answer, and getting it wrong means pulling the pedal box
back out. `[C]`

**⑲ Why `31481-52110` matters so much.** This is the short rigid hardline that
carries fluid from the clutch master cylinder to the flexible hose. It is a
**Yaris-specific part** — the routing between the master cylinder and the hose is
particular to this chassis, so the xD tube does not fit — and it is
**discontinued, with no new stock available anywhere.** The only supply is a
manual Yaris in a salvage yard.

That combination makes it the quiet critical-path item of the whole conversion.
Every other hard-to-find part in this document has a substitute, a fabrication
route, or at least an expensive new option. This one has none: without it there
is no way to get fluid from the master cylinder to the slave, and the car does
not move. **Pull it, and pull a spare if there is a second manual car in the
yard.**

**⑳–㉒ Why take the hydraulics as a set.** The clutch master, the brake master,
the flexible hose and the small brackets, clamps and clips that locate the lines
are all cheap or free at a yard and individually tedious to order — several are
low-value parts whose shipping exceeds their cost, and one clamp catalogues under
Daihatsu rather than Toyota. Taking the whole hydraulic path off one car also
guarantees the pieces fit each other. The **brake master cylinder** is the one to
be careful about: it must come from a _manual_ car, because its reservoir carries
the clutch feed port that the automatic unit lacks entirely. Buying the two
master cylinders new is still the more reliable route and is listed in ④ — the
salvage option is here because it works and costs nothing.

### ④ Purchased new

| No. | Product name                     | Part number / spec                                | Notes                                                                                                                 |
| --: | :------------------------------- | :------------------------------------------------ | :-------------------------------------------------------------------------------------------------------------------- |
|  ㉓ | **Brake master cylinder, M/T**   | Advics `BMT345` `[C]`                             | ⚠️ **Reservoir has the clutch bypass port.** Non-ABS M/T application. Circuit spacing differs from the automatic unit |
|  ㉔ | Clutch kit                       | Aisin `CKT062` `[C]`                              | Disc, cover, release bearing                                                                                          |
|  ㉕ | Clutch slave cylinder            | Aisin `CRT-115` `[C]`                             | ⚠️ **Buy new. Do not rebuild** — see Phase 6                                                                          |
|  ㉖ | Clutch hose to release cylinder  | `90947-02E09` `[C]`                               |                                                                                                                       |
|  ㉗ | Clutch hose bracket, clamp, clip | `31484-52090`, `90949-01D17`, `90468-08035` `[C]` | The clamp resolves under Daihatsu                                                                                     |
|  ㉘ | Front axle hub nuts              | `90177-22001` ×2 `[C]`                            | ⚠️ **One-time use, staked**                                                                                           |
|  ㉙ | Transaxle output shaft nut       | `90179-18005` `[C]`                               | ⚠️ **One-time use, staked**                                                                                           |
|  ㉚ | Transaxle drain/filler gaskets   | `90430-18008` `[C]`                               | New each time                                                                                                         |
|  ㉛ | Catalytic converter, CARB-legal  | AP Eastern `771790` `[C]`                         | ⚠️ **Must match the engine, not the chassis.** See below                                                              |
|  ㉜ | Downstream O2 sensor             | Denso `234-4623` `[C]`                            |                                                                                                                       |
|  ㉝ | Accessory drive belt             | Dayco `5060485` with A/C `[C]`                    | Gates `K060365` without A/C                                                                                           |
|  ㉞ | Water pump                       | Aisin `WPT140` `[C]`                              |                                                                                                                       |
|  ㉟ | Spark plugs                      | Denso `SC16HR11` `[C]`                            | Iridium                                                                                                               |
|  ㊱ | Ignition coils                   | `90919-02252` `[C]`                               |                                                                                                                       |
|  ㊲ | Fuel injectors                   | `23250-0T020` `[C]`                               | ⚠️ Remanufactured and matched. **Do not fit untested no-name injectors**                                              |
|  ㊳ | FIPG — Seal Packing 1281         | `08826-00090` `[RM-Y]`                            | Transaxle case mating surfaces                                                                                        |
|  ㊴ | Adhesive 1344                    | `08833-00080` `[RM-Y]`                            | Output shaft nut, shift fork lock bolts                                                                               |

#### Why the catalytic converter must be bought new

⚠️ Advice: **The original Yaris catalytic converter is not valid for a 2ZR-FE,
and neither is the one on the donor xD in most cases.** This is the single
largest new-parts expense in the conversion — roughly $780 — and it is not
optional if the vehicle must pass an emissions inspection.

Three separate reasons converge on buying a new, correctly-specified unit:

1. **The converter is certified against the engine, not the chassis.** An
   inspector or referee checks that the converter's part number and serial
   correspond to the engine now installed. The Yaris converter was certified for
   a 1.5 ℓ 1NZ-FE; its serial will not validate against a 1.8 ℓ 2ZR-FE no matter
   what condition it is in. `[C]`
2. **It will not physically fit anyway.** The 2ZR-FE manifold flange is larger
   with wider bolt spacing, and the pipe inner diameter is 46 mm against the
   Yaris's 40 mm — see Phase 7. Retaining the Yaris converter means restricting
   a larger engine through a smaller pipe.
3. **The donor's own converter is usually not a safe bet.** It has the mileage of
   a scrapped car on it, and a converter that is merely tired rather than dead
   will still set a P0420 efficiency code once the readiness monitors run —
   which fails the inspection just as surely as having the wrong part.

☝️ Advice: `AP Eastern 771790` is the specific unit used on one completed and
California-BAR-certified build of this conversion, paired with a **Denso
`234-4623`** downstream oxygen sensor. That pairing is the closest thing to a
known-good answer that exists for this swap. Buy the O2 sensor new at the same
time — a used downstream sensor on a new converter makes the one measurement the
inspection depends on untrustworthy.

⚠️ Attention: One builder deliberately leaves the second oxygen sensor
disconnected and runs rich as a result. That will not pass an inspection, and it
is noted here only so it is not mistaken for an acceptable shortcut. `[C]`

Confirmation: Upon collecting these parts, immediately check that nothing is
damaged and that the harness has not been cut.

---

<a id="tool-manifest"></a>

## Tool Manifest

### Hand and shop tools

| Tool                                           | Tool                                       |
| :--------------------------------------------- | :----------------------------------------- |
| Metric socket set, 1/2" and 3/8" drive         | Torque wrench, 5–25 N·m range              |
| **6-point and 12-point sockets, 10–21 mm**     | Torque wrench, 20–110 N·m range            |
| Metric combination wrench set                  | Torque wrench, 100–250 N·m range           |
| **30 mm 12-spline axle socket**                | Breaker bar                                |
| **Flare nut (line) wrench set**                | Ball joint separator                       |
| Oil filter cap wrench, `09228-06501` or equiv. | Engine hoist and **load leveller**         |
| Engine stand                                   | Transmission jack                          |
| **Drill bits and knockout punch set**          | Taps and dies, for chasing threads         |
| Vacuum pump and A/C manifold gauge set         | Brake bleeder kit                          |
| Coolant refill funnel                          | Connector pin release pick                 |
| Soldering iron, heat-shrink                    | Taps and dies, for chasing damaged threads |
| Pry bars                                       | Catch pans, drain pans                     |
| Safety glasses, work gloves                    | Engine paint marker                        |

☝️ Advice: The bits and knockout punch are for drilling the firewall in
Phase 6, which is the only fabrication this conversion strictly requires. The
taps and dies are worth having on hand for the corroded bell housing bolts noted
in Phase 1.

### Toyota Special Service Tools

| SST                         | Name                           | Used for                          | Source   |
| :-------------------------- | :----------------------------- | :-------------------------------- | :------- |
| `09930-00010`               | Drive Shaft Nut Chisel         | **Un-staking the axle hub nut**   | `[RM-Y]` |
| `09011-12301`               | Socket Wrench 30 mm            | Axle hub nut                      | `[RM-Y]` |
| `09520-01010`               | Drive Shaft Remover Attachment | Axle removal                      | `[RM-Y]` |
| `09628-00011`/`09628-62011` | Ball Joint Puller              | Ball joint and tie rod separation | `[RM-Y]` |
| `09301-00110`               | Clutch Guide Tool              | Clutch disc centring              | `[RM-Y]` |
| `09023-00100`               | Union Nut Wrench 10 mm         | Brake and clutch line fittings    | `[RM-Y]` |
| `09817-16011`               | Back-up Light Switch Tool      | Back-up light switch              | `[RM-Y]` |
| `09670-00010`               | Front Crossmember Guide Tool   | Subframe realignment on reinstall | `[RM-Y]` |
| **`09843-18040`**           | **Diagnosis Check Wire No.2**  | **The TC–CG jumper.** See Phase 9 | `[RM-Y]` |
| `09224-00010`               | Oxygen Sensor Wrench           | A/F and O2 sensors                | `[RM-C]` |
| `09228-06501`               | Oil Filter Wrench              | Cartridge oil filter cap          | `[RM-C]` |

### Scan tool

☝️ Advice: **A bidirectional scan tool is not required for a US-donor
conversion.** The factory ABS bleed on this chassis is a conventional two-person
pedal bleed with no actuator-bleed step and no tester-driven mode, and ABS
trouble codes can be read and cleared by jumpering **TC and CG** at the DLC3 with
SST `09843-18040`, whereupon the skid control ECU blinks two-digit codes. Sensor
check mode uses **TS and CG**. A generic OBD-II reader is still needed to confirm
no engine codes and that readiness monitors have set.

⚠️ Attention: Read [Phase 9](#phase-9) in full **before connecting the battery** —
the recipient Yaris has an immobilizer with a limited number of ignition cycles
available before it locks out.

---

<a id="precautions"></a>

## Installation Precautions (For Installers)

<details open>
  <summary>☠️ Warning</summary>

- **Discharge the air conditioning system by a licensed technician before
  disconnecting any refrigerant line.** Venting refrigerant is illegal in most
  jurisdictions and the liquid causes immediate cryogenic injury.
- **Triple-check all A/C fittings before recharging.** One builder fitted a bolt
  that was too short, the line blew off under pressure, and in his words it will
  freeze your cornea very fast.
- **Depressurise the fuel system before disconnecting the fuel line.**
- **Disconnect the negative battery terminal** before beginning electrical work.
  Torque on reinstallation: **5.4 N·m (55 kgf·cm, 48 in·lbf)** `[RM-Y]`.
- Observe the SRS airbag system lockout waiting period given in the vehicle
  repair manual before working near the steering column or instrument panel.
- Support the vehicle on rated stands. Do not work under a vehicle held only by
  a jack. The engine and transaxle together are the heaviest single assembly you
  will move in this job.
- Allow the exhaust system to cool fully before removal.

</details>

<details open>
  <summary>⚠️ Attention</summary>

- **Set every torque wrench from the N·m column of this document.** The XP90
  workshop manual contains printing errors in its imperial and kgf·cm columns —
  the front wheel hub nut appears as "912 ft·lbf", a water bypass joint as
  "90 N·m" where 9.0 is meant, and the 1NZ-FE flywheel as "38 ft·lbf" where
  49 N·m equals 36. Every imperial figure in this document has been recomputed
  from the N·m value rather than transcribed.
- **Do not carry a specification from one engine to the other.** The 1NZ-FE
  coming out and the 2ZR-FE going in differ in ways that are easy to miss —
  their cylinder head bolt procedures, bit sizes, valve adjustment and fluid
  capacities are all different. This conversion does not require opening either
  engine, so those figures are deliberately not listed here; if you do open one,
  read [Appendix A](#appendix-a) first.
- Photograph every connector, ground strap, and bracket before disconnecting it.
  The single most valuable artefact this community has lost is its photographs —
  one builder's phone died with roughly thirty build photos on it, and the
  Yaris-versus-xD ECU pinout spreadsheet that everyone cites is now a dead link.
- Label every harness branch as you free it.
- Apply dielectric grease to all engine connectors on reassembly.

</details>

<details open>
  <summary>☝️ Advice</summary>

- Work in the order given. This document deliberately tears down the donor and
  assembles the complete powertrain **before** the Yaris comes off the road, so
  the vehicle remains driveable through the longest part of the job.
- Retain the donor's fuse box. It is the source of spare `CA2` connector
  terminals, which Phase 8 requires.
- Budget approximately **$3,400 in parts** for the conversion as described here,
  based on one completed and emissions-certified build with its optional engine
  and transaxle rebuild costs removed. See [Budget](#budget).

</details>

---

<a id="work-procedure"></a>

## Work Procedure

<a id="phase-0"></a>

### Phase 0 — Donor Intake

<figure>
  <img src="/kb/toyota-2zr-fe-engine-and-manual-transaxle-swap-into-ncp91-yaris/figure-01.png" alt="Donor Scion xD on arrival, before teardown" />
  <figcaption>
    Figure 1: The donor 2008–2014 Scion xD as received. Photograph the complete
    engine bay from four angles before anything is disconnected.
  </figcaption>
</figure>

(0.1) Record the donor VIN and obtain its history report.

(0.2) Confirm the engine is `2ZR-FE` and the transaxle is `C50` manual.
Photograph the ECM part number label.

(0.3) Confirm the donor is US-market if you wish to avoid the immobilizer
entirely. See Phase 9.

(0.4) Verify the donor runs. Perform a compression test and, if possible, a
leakdown test. Scan for stored trouble codes and photograph the results. This is
the last moment at which the engine can be assessed cheaply.

☝️ Advice: 2ZR-FE oil pressure is much lower than the 1NZ-FE and this alarms
people needlessly. Specification is **25 kPa (3.7 psi) minimum at idle** and
**150–400 kPa (21.8–58.0 psi) at 3000 rpm** `[RM-C]`.

(0.5) Secure the donor's **master key**.

(0.6) Photograph and label every connector, ground, and bracket.

#### (0.7) The transaxle and axles

The donor supplies the transaxle and both CV axles, and **they stay together as a
set.** There is no decision to make here, only a constraint to respect.

| Component                        | Source                                                   |
| :------------------------------- | :------------------------------------------------------- |
| Transaxle                        | **xD `C50`** 5-speed manual, from the donor              |
| CV axles                         | **xD shafts, both sides** — from the same donor          |
| Knuckles, hubs, bearings, brakes | **Yaris, unchanged** — 4×100                             |

⚠️ Warning: **The axles must come from the donor along with the transaxle.** The
xD differential has **20-tooth, 20/40 DP** side gears in a 28 mm output bore; the
Yaris uses **23-tooth, 24/48 DP** in 27 mm. A Yaris axle will not engage an xD
differential, and the ring gears are not interchangeable either. Take both axles
when you take the transaxle. `[C]`

☝️ Advice: **Nothing outboard of the axle changes.** The xD CV shaft's *outer* end
matches the Yaris hub — one builder states it plainly: *"the xD transmission does
require you to use xD CV shafts (bigger outputs on the trans) but the hub side is
the same as the Yaris."* `[C]` So the knuckles, hubs, bearings, brakes and the
4×100 bolt pattern all stay exactly as they are. See
[Phase 7, step (7.3)](#phase-7) for the installation.

<details>
  <summary>☝️ Advice — if you can only find a Yaris C50</summary>

A `C50` from a 2007–2008 manual Yaris also bolts to the 2ZR-FE, and it is worth
knowing about only in one situation: you have ended up with a 2ZR-FE and the
manual xD electrics, but no xD transaxle. It is a fallback, not an alternative
worth choosing — the donor arrives with a C50 already in it, and sourcing a
second car for a part you own makes no sense otherwise.

If you are forced down this route, three consequences follow:

- **Keep your Yaris axles**, because the Yaris C50 has the 23-tooth differential.
- ⚠️ **Expect the driver-side axle to bind.** The mandatory xD right-hand mount
  sits the engine lower and closer to the firewall, which shortens the span the
  axle must cover, and the Yaris axle is then too long. It presents as a clunk or
  thud on hard right turns, with the axle fully compressed and oscillating about
  a quarter inch. The reported fix is a **1998 Toyota Tercel non-ABS driver-side
  axle** — same 23-tooth spline count, roughly 0.5 to 1 inch shorter, about $84
  remanufactured. `[C]`
- **You lose the gearing and differential options.** The taller 5th gear, the
  alternative final drives and the helical LSD are all 20-spline parts and will
  not fit. See [Appendix B](#appendix-b).

</details>

☝️ Advice: Both transaxles share middle case `33111-12260` and bell housing
`31105-52060`. Only the end cap differs, because the xD transaxle mount also
bolts to the side of the case. `[C]`

---

<a id="phase-1"></a>

### Phase 1 — Donor Teardown and Harvest

☠️ Warning: Have the A/C system discharged by a licensed technician before
beginning. Tape all open line ends immediately.

(1.1) Remove the battery. Drain the engine oil, transaxle oil, coolant, and
brake fluid.

☝️ Advice: Retain the donor's oil drain valve or plug.

(1.2) Harvest in the following order, applying the disposition shown. Items
marked **Keep** are required for the conversion; **Caution** items are
consumable or condition-dependent; **Dispose** items are not needed.

| Item                                   | Disposition                          |
| :------------------------------------- | :----------------------------------- |
| Heater hoses                           | Keep                                 |
| Fuel lines, rail to body               | Keep                                 |
| Engine wiring harness                  | **Keep**                             |
| Engine and transaxle mounts, 6 pieces  | **Keep**                             |
| Engine and transaxle assembly          | **Keep**                             |
| ECM                                    | **Keep**                             |
| Clutch master cylinder                 | Keep                                 |
| Brake reservoir and master cylinder    | Keep                                 |
| Floor shifter and shift cables         | Keep                                 |
| Exhaust manifold                       | **Keep**                             |
| Exhaust midpipe                        | **Keep**                             |
| Intake airbox, tube, MAF               | Keep                                 |
| Alternator                             | Keep                                 |
| A/C compressor and hoses               | Keep                                 |
| Coolant filler neck and radiator hoses | Keep                                 |
| **Fuse box**                           | **Keep** — source of `CA2` terminals |

⚠️ Advice: **Do not scrap the donor shell before the exhaust midpipe is
removed.** OEM xD midpipes are effectively unobtainable. One builder searched
more than twenty vendors and found a single unit at $450 plus shipping. `[C]`

☝️ Advice: The xD axle-back muffler section will bolt to the stock Yaris midpipe,
which is useful to know if you later want the Yaris exhaust back. `[C]`

(1.3) Remove the wiring harness with the ECM attached, as one assembly. Do not
cut it. Free the harness brackets from the strut tower and gearbox — these must
be transferred or improvised on the recipient car. `[C]`

(1.4) The donor's transponder key ECU, ignition lock cylinder and keys are **not
needed** — a US-market xD has no immobilizer, and the recipient Yaris keeps its
own. Leave them in the donor. See [Phase 9](#phase-9).

(1.5) Remove the EGR valve and the harness brackets from the top of the engine.
The 2ZR-FE will not clear the Yaris engine bay with these fitted. `[C]`

(1.6) Remove the CV axles completely rather than partially. There are flat spots
on the axle where a pry bar or a wide blunt chisel can be seated and struck with
a hammer; they pop out. `[C]`

(1.7) Remove the engine and transaxle as a single unit, out the front.

(1.8) Separate the engine from the transaxle.

⚠️ Attention: **Bell housing bolts corrode and snap.** One builder lost two of
the lower bolts to penetrating fluid and correctly refused to apply heat to an
aluminium case. The recovery is to drill out the broken bolts, chase the threads
with a tap, and use longer bolts with nuts from the back side. The starter bolt
needed the same treatment. Inspect and soak these fasteners early. `[C]`

(1.9) Check the dowel pins. They may remain in either the engine or the
transaxle, and will prevent reassembly if overlooked.

---

<a id="phase-2"></a>

### Phase 2 — Transaxle Preparation

☝️ Advice: This document assumes the donor transaxle is used **as received**. It
is not opened, and no internal work is described. On a high-mileage donor a full
rebuild is worth considering, but that is a separate job with its own tooling
requirements — a shop press, bearing pullers and a torque wrench reading to
0.3 N·m — and it is out of scope here.

<figure>
  <img src="/kb/toyota-2zr-fe-engine-and-manual-transaxle-swap-into-ncp91-yaris/figure-02.png" alt="C50 transaxle on the bench, ready to mate to the engine" />
  <figcaption>
    Figure 2: The C50 as received. Check the dowel pins, the input shaft
    splines, and the speed sensor location before mating it to the engine.
  </figcaption>
</figure>

(2.1) Drain the transaxle and refill with fresh gear oil. Use **new gaskets** on
both plugs.

| Joint           | N·m | kgf·cm | ft·lbf | Notes          | Source   |
| :-------------- | --: | -----: | :----- | :------------- | :------- |
| **Drain plug**  |  39 |    400 | 29     | **New gasket** | `[RM-Y]` |
| **Filler plug** |  39 |    400 | 29     | **New gasket** | `[RM-Y]` |

Gear oil specification: **API GL-4, SAE 75W**, capacity **1.9 ℓ (2.0 US qt)**
`[RM-Y]`. Drain and filler plug gaskets are `90430-18008` `[C]`.

(2.2) Inspect the input shaft splines and the release fork and bearing. Replace
the release bearing while access is free — it is included in the clutch kit and
replacing it later means pulling the transaxle again.

(2.3) **Check the dowel pins.** They may have remained in the donor engine when
the transaxle was separated, or in the transaxle. Both must be present and seated
in the transaxle before mating, or the assembly will not pull up square. Grease
them lightly.

☝️ Advice: The fasteners that join the transaxle to the engine, and the clutch
that goes between them, are covered in Phase 4.

#### (2.4) Shift linkage bushings — worth doing now, not later

☝️ Advice: The shifter and both cables are out of the car at this point, and the
transaxle is on the bench. This is by far the cheapest moment to address shift
feel; doing it afterwards means pulling the console and disconnecting the cables
again for no other reason.

Shifter vagueness on this linkage is almost always the **plastic sockets at the
cable ends** and the **shift lever retainer** the cables clip into, not the
transaxle internals. Both wear into an oval and the play they introduce shows up
at the knob multiplied by the lever ratio.

⚠️ Attention: **Toyota does not sell these bushings separately.** They are
supplied only as part of larger assemblies, which is the single most useful thing
to know before shopping:

| Wear item                          | How Toyota supplies it                                                                                      |
| :--------------------------------- | :---------------------------------------------------------------------------------------------------------- |
| Cable end sockets, both ends       | Inside the **transmission control cable assembly** — manual Yaris/Vios 2006–2016 is **`33820-52440`** `[C]` |
| Shift lever retainer and its pivot | Inside the **floor shift lever assembly**, which the factory manual treats as a single serviceable unit     |

⚠️ Warning: **Be careful what you buy.** Several parts sold under searches for
"Yaris shifter bushing" belong to the **automatic** transmission — `33560-52220`,
which appears prominently, is the **shift lock control unit**, an automatic-only
component with a solenoid and a brake interlock. It has nothing to do with a
manual linkage. Confirm any part is listed for a **manual** transmission before
ordering.

☝️ Advice on polyurethane and solid replacements: press-in polymer bushing kits
that replace the worn cable-end sockets do exist, and generic sets are listed as
fitting Yaris / Matrix / xA / xB / xD. **I could not confirm from any
authoritative source that these fit the Yaris or xD C50 manual linkage
specifically** — most listings that name the Yaris are automatic-cable kits, and
the C5x family shares enough part numbers to make cross-family listings
plausible-looking but unreliable. Treat these as `[C]` at best: measure the
socket and the pin before buying, and expect to verify fitment yourself.

☝️ Advice: The honest recommendation, given the above, is **new OEM cables and a
new lever assembly if the used ones feel loose**, and to regard poly bushings as
an experiment rather than a known solution. A firm, accurate shifter on this
chassis comes mostly from fresh factory parts — the linkage is cable-operated and
there is no rod-and-bushing arrangement to stiffen.

| Joint                                | N·m | kgf·cm | ft·lbf / in·lbf | Notes                            | Source   |
| :----------------------------------- | --: | -----: | :-------------- | :------------------------------- | :------- |
| Shift cable bracket × transaxle case |  25 |    255 | 18 ft·lbf       | ×2                               | `[RM-Y]` |
| Selecting bell crank × case, bolt    |  25 |    250 | 18 ft·lbf       | ×2                               | `[RM-Y]` |
| Selecting bell crank × case, nut     |  12 |    120 | 9 ft·lbf        |                                  | `[RM-Y]` |
| Control shaft cover × case           |  20 |    200 | 15 ft·lbf       | ×4, new seal `90311-18013` `[C]` | `[RM-Y]` |
| Shift lever damper × shaft           |  12 |    120 | 9 ft·lbf        |                                  | `[RM-Y]` |
| Floor shift lever assembly × body    |  12 |    122 | 9 ft·lbf        | 4 bolts                          | `[RM-Y]` |
| Transmission control cable × body    | 5.0 |     51 | 44 in·lbf       |                                  | `[RM-Y]` |

#### (2.5) Speedometer sensor — required on non-ABS cars

⚠️ Attention: The factory manual branches this on **ABS, not on chassis**. A car
**without** ABS receives a bolt-on `SPEEDOMETER SENSOR`; a car **with** ABS
receives a `SPEEDOMETER DRIVEN HOLE COVER` blanking plate, because vehicle speed
is taken from the wheel speed sensors instead. Both use a **new O-ring** and both
torque to **11 N·m (115 kgf·cm, 8 ft·lbf)** `[RM-Y]`.

This resolves a long-running confusion. The xD C50 is not missing a speed sensor
because it is an xD — it is missing one because it came from a car with ABS. What
you need depends on which signal path your recipient car uses, not on the badge
on the donor.

☝️ Advice: There is a **cap at the sensor location**. On a non-ABS recipient, pop
the cap and fit the sensor into that location on the differential. This is the
whole job, and it is far simpler than the case-splitting procedure that
circulates in forum threads — that is only necessary if the driven gear is also
absent, which on a C50 from a running car it will not be.

| Item                        | Part number `[C]`                                |
| :-------------------------- | :----------------------------------------------- |
| Speedometer sensor          | `83181-12020`                                    |
| Sensor connector            | `90980-11143`                                    |
| **Speedometer driven gear** | **`33403-19455` (30 t) or `33403-19465` (31 t)** |
| Shaft sleeve clip           | `90468-12005`                                    |

☝️ Advice: **The 30-tooth versus 31-tooth driven gear is a speedometer
calibration lever.** This is not documented anywhere in the community record, and
it is very likely the answer to the roughly 2 mph optimistic error one builder
reported and never resolved. Choose deliberately, and see Phase 10.

---

<a id="phase-3"></a>

### Phase 3 — Engine Preparation

☝️ Advice: This document assumes the donor engine is used **as received**. The
block is not opened and no internal work is described — a 2ZR-FE from a running
donor with good compression and healthy oil pressure needs nothing internal to
complete this conversion.

⚠️ Attention: If you do intend to open the engine, its specifications are **not
in this document** and must not be inferred from the Yaris manual, which covers
the 1NZ-FE. In particular the 2ZR-FE cylinder head bolt procedure differs from
every figure commonly quoted for it — see Appendix A before touching a head bolt.

This phase covers refitting the external components that were removed to get the
engine out, and the fluid specifications for filling it.

(3.1) Fit the intake and exhaust manifolds, throttle body, ignition coils, spark
plugs and sensors, to the torques below.

(3.2) Fit the water pump, thermostat housing, alternator, A/C compressor and
accessory belt.

☝️ Advice: Apply anti-seize to the exhaust manifold, intake manifold and fuel
rail bolts, and silicone lubricant to hose metal fittings. `[C]`

#### Torque specifications — intake, exhaust, ignition, sensors

| Fastener                                | N·m | ft·lbf / in·lbf | Notes                                                                                                 | Source   |
| :-------------------------------------- | --: | :-------------- | :---------------------------------------------------------------------------------------------------- | :------- |
| Intake manifold and stay                |  28 | 21 ft·lbf       | 4 bolts, 2 nuts, **new gasket**                                                                       | `[RM-C]` |
| Intake manifold stud bolts (2)          | 5.0 | 44 in·lbf       | **Torx E6**                                                                                           | `[RM-C]` |
| Throttle body                           |  10 | 89 in·lbf       | 2 bolts, 2 nuts, new gasket                                                                           | `[RM-C]` |
| **Exhaust manifold × head**             |  21 | 16 ft·lbf       | **5 nuts**                                                                                            | `[RM-C]` |
| Manifold stay, exhaust, 3 bolts         |  43 | 32 ft·lbf       |                                                                                                       | `[RM-C]` |
| Heat insulator No.1 (4) / No.2 (3)      |  12 | 9 ft·lbf        |                                                                                                       | `[RM-C]` |
| Spark plugs                             |  20 | 15 ft·lbf       | 14 mm long-reach                                                                                      | `[RM-C]` |
| Ignition coils (4)                      |  10 | 89 in·lbf       |                                                                                                       | `[RM-C]` |
| Camshaft timing OCV, intake and exhaust |  10 | 89 in·lbf       | One bolt each                                                                                         | `[RM-C]` |
| Oil pressure switch                     |  15 | 11 ft·lbf       | 24 mm deep socket. Adhesive 1344 on the last 2–3 threads. ⚠️ **Do not start the engine for one hour** | `[RM-C]` |
| Crankshaft position sensor              |  10 | 89 in·lbf       | Oil the O-ring                                                                                        | `[RM-C]` |
| Camshaft position sensor (**×2**)       |  10 | 89 in·lbf       | Both located in the cam cover                                                                         | `[RM-C]` |
| **A/F sensor, upstream**                |  44 | 32 ft·lbf       | **40 N·m** if using SST `09224-00010` on a 300 mm fulcrum wrench, SST parallel to the wrench          | `[RM-C]` |
| Heated O2 sensor, downstream            |  44 | 32 ft·lbf       | Same SST alternative, 40 N·m                                                                          | `[RM-C]` |
| Knock sensor                            |  20 | 15 ft·lbf       | Orientation per illustration                                                                          | `[RM-C]` |

#### Torque specifications — cooling and accessories

| Fastener                                    | N·m | ft·lbf / in·lbf | Notes                                              | Source            |
| :------------------------------------------ | --: | :-------------- | :------------------------------------------------- | :---------------- |
| Water pump × **timing chain cover**, bolt A |  26 | 19 ft·lbf       | 5 bolts total                                      | `[RM-C]`          |
| Water pump, bolt B                          |  24 | 18 ft·lbf       |                                                    | `[RM-C]`          |
| Water inlet / thermostat housing, 2 nuts    |  10 | 89 in·lbf       | ⚠️ **Jiggle valve up, ±10°**                       | `[RM-C]`          |
| Alternator bolt A, adjusting-lock           |  19 | 14 ft·lbf       | 12 mm head                                         | `[RM-C]`          |
| Alternator bolt B, pivot                    |  43 | 32 ft·lbf       | 14 mm head                                         | `[RM-C]`          |
| Belt bolt D, check torque                   |  19 | 14 ft·lbf       | Separate verification step                         | `[RM-C]`          |
| Alternator harness bracket                  | 8.4 | 74 in·lbf       |                                                    | `[RM-C]`          |
| **Starter × block**                         |  37 | 27 ft·lbf       | Confirmed in the xD, Corolla **and** Yaris manuals | `[RM-C]` `[RM-Y]` |
| Engine hanger × cylinder head               |  43 | 32 ft·lbf       |                                                    | `[RM-C]`          |

☝️ Advice: **The 2ZR-FE and 1NZ-FE accessory belts are different, and so are the
pulleys behind them.** Use the 2ZR-FE's own accessories and its own belt. The
idea of swapping pulleys to retain the 1NZ alternator and compressor has been
floated repeatedly in the community and never confirmed to work.

| Belt                             | Part number       | Specification                                                                                                                                                                  |
| :------------------------------- | :---------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **2ZR-FE, Scion xD 2008–2014**   | **`90916-02664`** | Toyota "Belt, V-Ribbed". **6 ribs.** 49.25 in (1250.95 mm) outside circumference, 0.84 in (21.3 mm) top width. Drives alternator, water pump and A/C. Supersedes `99366-K1230` |
| 2ZR-FE, Corolla 2009–2011        | `90916-A2018`     | 6 ribs, 48.75 in outside circumference — the Corolla routing differs from the xD                                                                                               |
| 1NZ-FE, Yaris 2007–2012 with A/C | `90916-02500`     | The belt being removed. Listed for contrast only                                                                                                                               |

Aftermarket equivalents for the xD belt: **Dayco `5060485`** or **Gates
`K060365`** for the no-A/C length `[C]`.

⚠️ Attention: **The community describes this as a "5-rib" belt. It is 6-rib.**
The 0.84 in (21.3 mm) top width is exactly six ribs at the 3.56 mm K-section
pitch, and both aftermarket cross-references decode as six as well — Dayco
`5060485` and Gates `K060365` both carry a `06` rib-count field. Order a 6PK belt.

☝️ Advice: The Yaris has **electric power steering**. There is no power steering
pump, no hoses, and nothing to do.

☝️ Advice: Apply silicone grease to the dipstick O-ring. The 2ZR-FE dipstick
corrodes at the top of the tube and seizes. `[C]`

⚠️ Attention: One unresolved community problem — repeated failure of
overrunning-alternator-decoupler pulleys within weeks of installation, on both
used OEM and aftermarket units. No fix has been published. `[C]`

#### Fluids

| Fluid                    | Specification                               | Capacity                                                     | Source   |
| :----------------------- | :------------------------------------------ | :----------------------------------------------------------- | :------- |
| Engine oil               | 0W-20 preferred; 5W-20 acceptable 2009–2010 | **4.2 ℓ (4.4 US qt)** with filter; 3.9 ℓ (4.1 US qt) without | `[RM-C]` |
| Coolant                  | Toyota Super Long Life Coolant, pre-mixed   | **4.8 ℓ (5.1 US qt)** M/T                                    | `[RM-Y]` |
| Transaxle gear oil       | **API GL-4, SAE 75W**                       | **1.9 ℓ (2.0 US qt)**                                        | `[RM-Y]` |
| Brake and clutch fluid   | SAE J1703 or FMVSS No. 116 **DOT 3**        | —                                                            | `[RM-Y]` |
| A/C refrigerant          | R134a                                       | One 12 oz can `[C]`                                          | `[C]`    |
| Drive shaft joint grease | —                                           | 125–135 g (4.4–4.8 oz) each joint                            | `[RM-Y]` |

⚠️ Attention: Community sources widely quote 75W-90 gear oil at 3 quarts, and
coolant at 5.5 litres. **Both are wrong.** The factory figures are above. Some
builders deliberately overfill the transaxle by 300–400 ml; that is a choice, not
a specification. `[C]`

☝️ Advice: Coolant is a **conventional gravity fill** — there is no vacuum filler
and no coolant-fill SST in the factory procedure. Open the radiator and cylinder
block drain cocks, fill the radiator to overflow, squeeze the hoses, top the
reservoir to FULL, and run the engine until the fan cycles. The drain cocks have
no torque specification; they are hand-tight.

☝️ Advice: The "4.2 versus 4.4 litre" oil capacity disagreement that circulates
is not a real conflict. 4.2 litres **is** 4.4 US quarts.

---

<a id="phase-4"></a>

### Phase 4 — Joining Engine and Transaxle

<div class="cols-2">
  <figure>
    <img src="/kb/toyota-2zr-fe-engine-and-manual-transaxle-swap-into-ncp91-yaris/figure-03.png" alt="2ZR-FE flywheel and clutch on the bench" />
    <figcaption>Figure 3</figcaption>
  </figure>
  <p>
    (4.1) Fit the flywheel to the crankshaft.<br />
    ☝️ The 2ZR-FE and 1NZ-FE flywheels are the same diameter, but the 2ZR-FE has
    <strong>8 bolts where the 1NZ-FE has 6</strong>. <code>[C]</code><br />
    ⚠️ Yaris and xD flywheel bolt patterns differ. A 2009 Corolla flywheel and
    clutch is a known-working combination. <code>[C]</code>
  </p>
</div>

Flywheel bolt torque: **49 N·m (36 ft·lbf) then +90°**, criss-cross pattern,
torque-to-yield, one-time use. `[C]`

⚠️ Attention: This flywheel figure is **not repair-manual verified for the
2ZR-FE**. The "38 ft·lbf plus 90°" value circulating in the community is the
**1NZ-FE** specification, read from the Yaris manual's misprinted imperial
column — 49 N·m is 36 ft·lbf, not 38. Both engines happen to take 49 N·m + 90°,
so the advice has been harmless, but its provenance was wrong. Verify against a
Corolla or xD manual if you can.

(4.2) Fit the clutch disc, cover and release bearing.

| Joint                            | N·m | kgf·cm | ft·lbf | Notes                                                                   | Source   |
| :------------------------------- | --: | -----: | :----- | :---------------------------------------------------------------------- | :------- |
| **Clutch cover × flywheel**      |  19 |    195 | 14     | **6 bolts.** Begin at the bolt nearest the knock pin and tighten evenly | `[RM-Y]` |
| Release fork support × transaxle |  37 |    375 | 27     |                                                                         | `[RM-Y]` |

⚠️ Advice: **Check the clutch disc orientation.** One builder installed his
backwards and had to remove the transaxle again — the metal centre of the disc
contacted the flywheel bolts before the friction material reached the flywheel.
The parts were reusable, the afternoon was not. `[C]`

☝️ Advice: Use SST `09301-00110` Clutch Guide Tool to centre the disc. If it is
not to hand, a **15 mm deep socket with two wraps of electrical tape** has been
used successfully as a substitute. `[C]`

(4.3) Mate the transaxle to the engine. Align the input shaft to the clutch disc
first, then engage the dowels.

| Joint                           | N·m | kgf·cm | ft·lbf | Notes       | Source   |
| :------------------------------ | --: | -----: | :----- | :---------- | :------- |
| **Transaxle assembly × engine** |  33 |    336 | **24** | **7 bolts** | `[RM-Y]` |

⚠️ Advice: **Community sources give this joint as 22 ft·lbf. That is wrong — it
conflates two different fasteners.** The transaxle-to-engine bell housing bolt is
**33 N·m / 24 ft·lbf across 7 bolts**. The 29 N·m / 22 ft·lbf figure belongs to
the **internal case-half** bolt. Using the forum number under-torques the single
most important joint in the conversion.

(4.4) Fit the starter. Both engines use a 9-bolt, 2-o'clock orientation, and the
Yaris starter is compatible and reused. Grease the dowels lightly.

Starter × housing: **37 N·m (377 kgf·cm, 27 ft·lbf)** `[RM-Y]`.
Terminal 30 nut: **9.8 N·m (100 kgf·cm, 87 in·lbf)** `[RM-Y]`.

☝️ Advice: Some builders prefer the cold-specification **1.8 kW** starter over the
standard Yaris 0.8 kW unit. The connectors are identical. Both the 0.8 kW and
1.6 kW variants share the same 37 N·m mounting torque `[RM-Y]`. `[C]`

(4.5) Do **not** fit the transaxle-side mount yet. See (7.2).

---

<a id="phase-5"></a>

### Phase 5 — Yaris Teardown

☝️ Advice: Only now does the recipient vehicle come off the road.

<figure>
  <img src="/kb/toyota-2zr-fe-engine-and-manual-transaxle-swap-into-ncp91-yaris/figure-04.png" alt="NCP91 with front clip removed" />
  <figcaption>
    Figure 4: Front clip removed and subframe partially lowered. Every source
    that has completed this conversion recommends this approach.
  </figcaption>
</figure>

☠️ Warning: Have the A/C system discharged by a licensed technician first.

(5.1) Disconnect and remove the battery. Drain the engine oil, automatic
transaxle fluid and coolant.

(5.2) Remove the front clip and partially lower the subframe. The engine and
transaxle come out the front as a unit.

☝️ Advice: Strip the front structure **completely, before** attempting to lift
the 1NZ-FE — not partially, and not while working around it. This is the
strongest single recommendation from a builder who tried it the other way first.
`[C]` Concretely, that means removing all of the following:

| Item                                 | Why it has to go                                                                                                                                                     |
| :----------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Front bumper cover                   | Access to everything behind it                                                                                                                                       |
| **Bumper reinforcement / crash bar** | The steel beam behind the cover. Blocks the hoist's approach angle                                                                                                   |
| Headlight assemblies                 | Vulnerable, and their brackets tie into the support panel                                                                                                            |
| **Upper radiator support / tie bar** | The removable cross panel above the radiator. This is the part most often meant by "the bracing" — it is what prevents the powertrain coming straight up and forward |
| Radiator, condenser and fan shroud   | See the disposition table above — radiator and lines are kept                                                                                                        |
| **Radiator support side brackets**   | The vertical brackets each side of the radiator opening                                                                                                              |
| Hood latch and its support           | Mounted to the upper support; comes off with it                                                                                                                      |

⚠️ Attention: **Partially lower the front subframe as well.** Dropping it 25–50 mm
buys the clearance that makes the difference between an awkward extraction and a
straightforward one, and it is also what lets the axles come out cleanly. Use SST
`09670-00010` to realign it on reinstallation, and see the crossmember torques in
(5.5). `[C]`

☝️ Advice: The alternative some builders attempt — pulling the powertrain out
through the top with the front clip intact — is what produces the cracked
windshields and pinched CV boots reported in the community record. The engine and
transaxle come out **forward**, and the front of the car has to be open for that
to work.

(5.3) Harvest and dispose as follows.

| Item                                      | Disposition                                         |
| :---------------------------------------- | :-------------------------------------------------- |
| Wheels, wipers, cowl                      | Keep                                                |
| Intake, air cleaner and bracket           | Keep                                                |
| Battery carrier                           | Keep                                                |
| Bumper, headlights, front crash bar       | Keep                                                |
| **Radiator**                              | **Keep**                                            |
| A/C condenser and lines                   | Keep                                                |
| Radiator support bracket                  | Keep                                                |
| Radiator hoses, heater hoses              | Caution                                             |
| Accessory belt                            | Caution                                             |
| Fuel lines                                | Keep                                                |
| **Brake master cylinder, lines, booster** | **Keep** — booster reused, master cylinder replaced |
| Engine wiring harness                     | **Dispose**                                         |
| CV axles                                  | **Dispose**                                         |
| Engine mounts                             | **Dispose**                                         |
| ECM                                       | **Dispose**                                         |
| 1NZ-FE engine and U340E transaxle         | **Dispose**                                         |

(5.4) Remove the axles. Torque values for reinstallation are in Phase 7.

| Joint                          | N·m | kgf·cm | ft·lbf / in·lbf | Notes                                                                                                                                  | Source   |
| :----------------------------- | --: | -----: | :-------------- | :------------------------------------------------------------------------------------------------------------------------------------- | :------- |
| **Front axle hub nut**         | 216 |  2,203 | **159 ft·lbf**  | ⚠️ **NEW nut. Stake with chisel and hammer.** 30 mm socket. Un-stake on removal with SST `09930-00010`, **completely**, before turning | `[RM-Y]` |
| **Lower ball joint × knuckle** |  98 |  1,000 | 72 ft·lbf       | **New castle nut and new clip.** Up to a further 60° to align the holes                                                                | `[RM-Y]` |
| Tie rod end × knuckle          |  49 |    500 | 36 ft·lbf       | **New castle nut and new cotter pin.** Up to +60°                                                                                      | `[RM-Y]` |
| Tie rod end **lock nut**       |  75 |    760 | 55 ft·lbf       | Distinct from the joint above                                                                                                          | `[RM-Y]` |
| Stabiliser link × strut        |  74 |    755 | 55 ft·lbf       | Hold the stud with a 6 mm hex if it spins                                                                                              | `[RM-Y]` |
| Strut × knuckle                | 164 |  1,672 | 121 ft·lbf      |                                                                                                                                        | `[RM-Y]` |
| Strut top mount × body         |  55 |    561 | 41 ft·lbf       |                                                                                                                                        | `[RM-Y]` |
| ABS speed sensor × knuckle     | 8.5 |     87 | 75 in·lbf       | Keep the tip clean. **Do not rotate from its original angle**                                                                          | `[RM-Y]` |
| Front caliper × knuckle        | 107 |  1,089 | 79 ft·lbf       |                                                                                                                                        | `[RM-Y]` |
| Wheel lug nuts                 | 103 |  1,050 | 76 ft·lbf       | Front and rear identical                                                                                                               | `[RM-Y]` |

(5.5) Subframe fasteners, for reinstallation.

| Joint                              | N·m | kgf·cm | ft·lbf | Source                                               |
| :--------------------------------- | --: | -----: | :----- | :--------------------------------------------------- |
| **Crossmember × body, bolt A**     |  70 |    714 | 52     | `[RM-Y]`                                             |
| **Crossmember × body, bolt B**     | 160 |  1,631 | 118    | `[RM-Y]`                                             |
| **Crossmember × body, bolt C**     |  95 |    969 | 70     | `[RM-Y]`                                             |
| Power steering gear × crossmember  |  96 |    979 | 71     | `[RM-Y]`                                             |
| Lower arm × crossmember            | 137 |  1,397 | 101    | `[RM-Y]`                                             |
| Lower arm × body                   | 160 |  1,631 | 118    | `[RM-Y]`                                             |
| Stabiliser bracket × crossmember   |  47 |    479 | 35     | **Sequence: snug bolt A, torque B, then A** `[RM-Y]` |
| Steering sliding yoke, both joints |  28 |    290 | 21     | `[RM-Y]`                                             |

☝️ Advice: **These crossmember torques are identical on the Yaris, the 1NZ-FE
Yaris table, and the Scion xD** — 70, 160 and 95 N·m, confirmed by three
independent sources. Same B platform, same hardware. The crossmember work carries
over cleanly, which is a rare piece of good news in this area of the car. Use SST
`09670-00010` to realign the subframe on reinstallation.

(5.6) Remove the automatic-specific items and set them aside: the shift lever
assembly and its cable, **the two electrical connectors at the shifter** (these
are the shift-lock and park/neutral circuits and they will not be reused), the
neutral safety switch, and the transaxle cooler lines.

---

<a id="phase-6"></a>

### Phase 6 — Manual Conversion, Interior

This phase converts the pedal box and brake hydraulics. It is the part of the
conversion that the community record covers worst, and it contains two hard
blockers that are easy to discover too late.

<div class="cols-2">
  <figure>
    <img src="/kb/toyota-2zr-fe-engine-and-manual-transaxle-swap-into-ncp91-yaris/figure-05.png" alt="Automatic one-piece pedal assembly beside the manual two-piece assembly" />
    <figcaption>Figure 5</figcaption>
  </figure>
  <p>
    ⚠️ <strong>The automatic pedal assembly is one piece with a single
    connector. The manual assembly is two pieces</strong> — a separate clutch
    pedal and brake pedal. They are not interchangeable as units.<br />
    ☝️ Source the clutch pedal assembly from a <strong>manual Yaris, not the
    xD</strong>. The Yaris pedal has no return spring; the xD pedal does.
    <code>[C]</code>
  </p>
</div>

#### ⚠️ Blocker 1 — the firewall has no holes

⚠️ Advice: **Automatic cars have no firewall holes for the clutch master
cylinder.** Use the manual pedal assembly's own bracket as a template, align it
with the top bolt hole, trace the holes, and drill. Drill bits and a
knockout punch set are the tools reported to work. `[C]`

#### ⚠️ Blocker 2 — the brake booster must come out

⚠️ Advice: **Most brake line connections must be disconnected and the brake
booster removed** to gain enough room to install the clutch master cylinder and
its hardline. The booster itself is **not** replaced — it comes out and goes
back in. `[C]`

#### ⚠️ Blocker 3 — the brake master cylinder is different

⚠️ Advice: **A manual-specification brake master cylinder is required.** On the
manual car the **brake fluid reservoir also feeds the clutch line**, and the
spacing between the two circuits differs from the automatic unit. The correct
part depends on **both** the ABS fitment and the transmission type.

☝️ Advice: For a non-ABS manual Yaris, one completed and emissions-certified
build used **Advics `BMT345`**, described as having a reservoir with the bypass
for the clutch master cylinder. That is the concrete answer to a question the
forums never resolved — no reservoir modification, no improvised tee, just the
correct part. `[C]`

#### Procedure

(6.1) Remove the automatic pedal assembly. Disconnect the brake light switch and
the return spring, free the booster pin, remove the upper dash pad per the
vehicle repair manual, then the top 12 mm bolt and the four 12 mm nuts on the
main bracket. `[C]`

(6.2) **Install the clutch master cylinder first.** Then slide the clutch pedal
assembly over the clutch master studs, fit the nuts loosely, install the top
bolt, torque, connect the clutch master pin and return spring, and plug in the
clutch switch.

⚠️ Attention: **The clutch master cylinder mounts to the clutch pedal support,
not directly to the firewall.** There is no "clutch master to firewall" joint in
the factory manual, and describing it that way misleads on both the parts list
and the drilling step.

(6.3) Fit the brake pedal assembly the same way.

(6.4) Fit the manual brake master cylinder and reconnect the brake lines.

#### Torque specifications — pedal box and brake hydraulics

| Joint                                             |      N·m |   kgf·cm | ft·lbf / in·lbf       | Notes                                                                                                         | Source   |
| :------------------------------------------------ | -------: | -------: | :-------------------- | :------------------------------------------------------------------------------------------------------------ | :------- |
| **Clutch pedal support × body**                   |       24 |      241 | 18 ft·lbf             |                                                                                                               | `[RM-Y]` |
| **Clutch master cylinder × clutch pedal support** |      9.0 |       92 | 80 in·lbf             |                                                                                                               | `[RM-Y]` |
| Clutch pedal sub-assembly × support               |       37 |      375 | 27 ft·lbf             |                                                                                                               | `[RM-Y]` |
| **Clutch start switch × support**                 |       16 |      160 | 12 ft·lbf             |                                                                                                               | `[RM-Y]` |
| Clutch pedal stopper bolt lock nut                |       16 |      160 | 12 ft·lbf             |                                                                                                               | `[RM-Y]` |
| Clutch master push rod clevis lock nut            |       12 |      120 | 9 ft·lbf              |                                                                                                               | `[RM-Y]` |
| Clutch master → flexible hose tube                |       15 |      153 | 11 ft·lbf             |                                                                                                               | `[RM-Y]` |
| **Brake booster, 4 nuts**                         |      9.0 |       92 | 80 in·lbf             | **New gasket**                                                                                                | `[RM-Y]` |
| **Brake master cylinder × booster**               |       13 |      127 | 10 ft·lbf             | 2 nuts                                                                                                        | `[RM-Y]` |
| **Brake tube × master cylinder**, all unions      |       14 |      143 | 10 ft·lbf             | ⚠️ **14 N·m WITH SST `09023-00100`; 15 N·m WITHOUT.** Use a 300 mm fulcrum wrench with the SST parallel to it | `[RM-Y]` |
| Push rod lock nut × booster push rod              |       26 |      265 | 19 ft·lbf             | Set when adjusting pedal height                                                                               | `[RM-Y]` |
| Brake pedal × pedal support                       |       37 |      375 | 27 ft·lbf             |                                                                                                               | `[RM-Y]` |
| Pedal support × instrument panel reinforcement    |       24 |      241 | 18 ft·lbf             |                                                                                                               | `[RM-Y]` |
| Piston stopper bolt × master cylinder body        |       10 |      102 | 7 ft·lbf              |                                                                                                               | `[RM-Y]` |
| Front flexible hose × caliper, banjo              |       30 |      310 | 22 ft·lbf             |                                                                                                               | `[RM-Y]` |
| Front disc brake bleeder plug                     |      8.3 |       85 | 73 in·lbf             |                                                                                                               | `[RM-Y]` |
| Proportioning valve × bracket / bracket × body    | 5.4 / 19 | 55 / 194 | 48 in·lbf / 14 ft·lbf | Non-ABS cars                                                                                                  | `[RM-Y]` |

#### (6.5) Clutch hydraulic line and slave cylinder

| Joint                                        | N·m |    kgf·cm | ft·lbf / in·lbf | Notes                                               | Source   |
| :------------------------------------------- | --: | --------: | :-------------- | :-------------------------------------------------- | :------- |
| **Clutch release cylinder × transaxle case** |  12 | 120 / 122 | 9 ft·lbf        | 4 bolts. ⚠️ **Bolt A is 120 kgf·cm, bolt B is 122** | `[RM-Y]` |
| Clutch pipe × transmission case              |  12 |       122 | 9 ft·lbf        |                                                     | `[RM-Y]` |
| Release cylinder bleeder plug                | 8.3 |        85 | 73 in·lbf       |                                                     | `[RM-Y]` |
| Release cylinder ↔ flexible hose tube       |  15 |       153 | 11 ft·lbf       |                                                     | `[RM-Y]` |

⚠️ Advice: **Buy the slave cylinder new. Do not rebuild it.** One builder's
rebuilt unit failed at approximately 150 miles — the piston seal let go and he
lost the clutch suddenly in a parking lot. New units are inexpensive. `[C]`

#### (6.6) Shift cables and floor shifter

Remove the exhaust heat shield, then the three 10 mm nuts on the cable
pass-through seal. Pull the automatic cable out from below, feed the two manual
cables in, and reseal. The floor shifter is four 12 mm bolts either way. `[C]`

| Joint                                | N·m | kgf·cm | ft·lbf / in·lbf | Notes | Source   |
| :----------------------------------- | --: | -----: | :-------------- | :---- | :------- |
| Shift cable bracket × transaxle case |  25 |    255 | 18 ft·lbf       | ×2    | `[RM-Y]` |
| Transmission control cable × body    | 5.0 |     51 | 44 in·lbf       |       | `[RM-Y]` |
| Floor shift lever assembly × body    |  12 |    122 | 9 ft·lbf        |       | `[RM-Y]` |
| Selecting bell crank × case, bolt    |  25 |    250 | 18 ft·lbf       | ×2    | `[RM-Y]` |
| Selecting bell crank × case, nut     |  12 |    120 | 9 ft·lbf        |       | `[RM-Y]` |
| Shift lever damper × shaft           |  12 |    120 | 9 ft·lbf        |       | `[RM-Y]` |

⚠️ Attention: **With xD mounts you must use xD shift cables.** The new mounts push
the transaxle forward by approximately two inches. One builder stretched Yaris
cables to reach and **tore the mounting studs out of the body**, requiring two
holes to be welded up and the studs reinstalled. `[C]`

#### (6.7) Starter interlock and reverse lights — no fabrication required

☝️ Advice: **The clutch start switch connector already exists in the Yaris body
harness footwell.** It is plug-and-play. The manual back-up light switch
connector comes on the manual engine harness. Neither the starter interlock nor
the reverse lights require any fabrication — this is the one part of the manual
conversion that is easier than it looks. `[C]`

#### (6.8) Clutch pedal adjustment

| Item                         | Specification                          | Source   |
| :--------------------------- | :------------------------------------- | :------- |
| Pedal height from dash panel | **133.0–143.0 mm**                     | `[RM-Y]` |
| Pedal free play              | **5.0–15.0 mm**                        | `[RM-Y]` |
| Push rod play at pedal top   | **1.0–5.0 mm**                         | `[RM-Y]` |
| Release point                | **≥25 mm** from the end of full stroke | `[RM-Y]` |

(6.9) Fill and bleed the brake system, then the clutch system.

☝️ Advice: **No scan tool is required to bleed the brakes on this chassis.** The
factory procedure is the conventional two-person pedal bleed — bleed the master
cylinder, then bleed the brake lines — and it is referenced identically from the
ABS-equipped procedures. There is no actuator bleed step and no tester-driven
bleed mode anywhere in the brake chapters. `[RM-Y]`

---

<a id="phase-7"></a>

### Phase 7 — Powertrain Installation

<figure>
  <img src="/kb/toyota-2zr-fe-engine-and-manual-transaxle-swap-into-ncp91-yaris/figure-06.png" alt="Six mount pieces laid out — three brackets and three isolators" />
  <figcaption>
    Figure 6: The mount set is six pieces, not three. Each mount position is a
    bracket on the engine or transaxle plus an isolator on the body or subframe.
  </figcaption>
</figure>

⚠️ Attention: **Each mount is two parts** — a bracket on the engine or transaxle,
and an isolator on the body or subframe. Three positions, six pieces. Counting
them as three is the origin of most of the mount confusion in the community
record. `[C]`

☝️ Advice on naming: the third mount — the link that resists engine rotation
under torque — is called the **engine moving control rod** in the Toyota repair
manual, and that is the term used throughout this document and the one to search
parts catalogues with. Forum threads almost always call it the **"dogbone"**,
after its shape, and some suppliers list it as a torque strut or torque rod. All
four names describe the same part.

#### Mount part numbers

| Position                   | Part number `[C]` |
| :------------------------- | :---------------- |
| RH engine-side bracket     | `12315-37040`     |
| RH engine stay             | `12317-37010`     |
| Control rod bracket        | `12313-37010`     |
| Control rod isolator       | `12363-37010`     |
| Gearbox-side bracket       | `12325-37100`     |
| Gearbox-side isolator      | `12372-37141`     |
| Gearbox-side damper        | `12351-37100`     |
| Mount bolts, stud and nuts | `91552-L1240`     |

⚠️ Advice: **Do not use Corolla/Matrix/Vibe bracket `12315-37030`.** The engine
block bolt holes align differently. `[C]`

⚠️ Attention: The RH isolator part number is **disputed across sources** —
`12305-37091`, `12305-37040` (06/2007–11/2007), and `12305-37190`
(01/2008–06/2014) all appear. This is most likely a year-range split. Verify
against your donor's build date before ordering. `[C]`

☝️ Advice: One builder bought a $31 aftermarket engine mount, found excessive
movement, and replaced it with the OEM part at $181. Buy the OEM mount. `[C]`

#### Procedure

(7.1) Install the ECM before the engine goes in. Route the engine harness and
seat the firewall pass-through grommet.

(7.2) Lower the powertrain in. Fit the RH engine mount and the control rod, then fit
the **gearbox-side mount last**.

☝️ Advice: Remove the gearbox-side mount and bracket before installation. The
larger engine leaves insufficient room to line these up while they are already
attached to the transaxle. `[C]`

☝️ Advice: The control rod should be **test fitted first**, before committing to the
rest of the arrangement. `[C]`

#### Mount torque specifications

| Joint                                                            | N·m | kgf·cm | ft·lbf | Notes                                                    | Source   |
| :--------------------------------------------------------------- | --: | -----: | :----- | :------------------------------------------------------- | :------- |
| Transverse engine mounting **bracket** × transmission case cover |  64 |    653 | 47     | 4 bolts                                                  | `[RM-Y]` |
| Transverse engine mounting **insulator** × body                  |  52 |    530 | 38     | 5 bolts                                                  | `[RM-Y]` |
| Mounting bracket LH × isolator LH, bolt and nut                  |  52 |    530 | 38     |                                                          | `[RM-Y]` |
| Transverse engine mounting **control bracket** × transaxle case  |  39 |    398 | 29     |                                                          | `[RM-Y]` |
| **Engine mounting × engine moving control rod**                  | 120 |  1,224 | **89** |                                                          | `[RM-Y]` |
| Control rod, transaxle side (xD)                                 | 100 |  1,020 | 74     | ☝️ _Temporarily tighten the transaxle side, then torque_ | `[RM-C]` |
| Control rod, second bolt at crossmember (xD)                     | 120 |  1,224 | 89     | ⚠️ **Two different specs on the same part**              | `[RM-C]` |
| RH mounting bracket (xD)                                         |  51 |    520 | 38     |                                                          | `[RM-C]` |
| Engine mounting stay (xD)                                        |  26 |    265 | 19     |                                                          | `[RM-C]` |
| Battery carrier × body                                           |  17 |    175 | 13     | 5 bolts                                                  | `[RM-Y]` |
| Air cleaner bracket × body                                       |  19 |    194 | 14     | 2 bolts                                                  | `[RM-Y]` |
| Wire harness × transmission case                                 |  26 |    260 | 19     |                                                          | `[RM-Y]` |

⚠️ Attention: **The xD RH insulator has three published torques — 45, 88 and
52 N·m — and only two illustration labels, A and B.** Which torque belongs to
which fastener is genuinely unpublished; the page text, the OCR layer and the
scanned illustration were all checked. Verify against your donor's own
illustration. Do not guess.

☝️ Advice: xD mounts place the engine **slightly lower and slightly further from
the firewall** than the Yaris mounts. Expect an extra hour and a pry bar. The
minimum requirement is the **RH mount and isolator from the xD** — the Yaris item
will not work with the 2ZR-FE. `[C]`

⚠️ Attention: **The battery tray no longer sits correctly on top of the gearbox
mount. The mounting holes must be slotted.** `[C]`

#### (7.3) Fitting the CV axles

The axles installed here are the **xD shafts that came with the donor
transaxle** — see [(0.7)](#phase-0). Everything outboard of them is the Yaris's
own hardware, untouched.

| Component         | Source                                                   |
| :---------------- | :------------------------------------------------------- |
| CV axles          | **xD shafts** — 20-tooth, 20/40 DP inner stubs           |
| Knuckles          | Yaris, unchanged                                         |
| Hubs and bearings | Yaris, unchanged — **no press work**                     |
| Brakes            | Yaris, unchanged                                         |
| Bolt pattern      | **4×100, unchanged**                                     |

☝️ Advice: **The front suspension and brakes are never disturbed** beyond
unbolting and rebolting them to get the axles in and out. No hub pressing, no
machine shop, no wheel fitment change.

##### The axle is used as a complete assembly — nothing is taken apart

⚠️ Attention: To be unambiguous about this, because the community record is not:
**the CV axle is installed as a complete, undisturbed assembly** — inner joint,
intermediate shaft, outer joint and both boots, exactly as it comes off the donor
or out of the box. You do **not**:

- split the axle to mix an xD inner joint onto a Yaris shaft, or vice versa;
- press an outer joint off one shaft and onto another;
- swap stub shafts, cages or tripods between axles;
- shorten, lengthen or re-spline anything.

The spline patterns quoted in [(0.7)](#phase-0) describe the **inner stub splines
of a whole axle**. They are how you identify the correct complete axle, not an
invitation to rebuild one.

☝️ Advice: The clearest confirmation is that builders buy complete replacement
units off the shelf when a used one is tired. One build used a junkyard xD axle
on one side and a new **GSP `69541`** complete assembly on the other. `[C]` A
complete aftermarket axle would be useless if the job required internal mixing.

☝️ Advice: Rebuilding a CV joint is a legitimate repair in its own right — for a
torn boot or a clicking joint — and if a donor axle is worn, replace or rebuild
it **as a separate bench job before this step.**

<details>
  <summary>☝️ Advice — assembling the axles, step by step</summary>

1. **Pack the joints.** Grease capacity is **125–135 g (4.4–4.8 oz) per joint**,
   inboard and outboard `[RM-Y]`. Inspect both boots; replace any that are split
   or weeping before installation, because doing it later means pulling the axle
   again.
2. **Seat the inner joint into the differential.** Push the shaft in squarely
   until the retaining circlip snaps into the side gear groove — you will feel it
   engage. Then pull firmly outward by hand to confirm it is captured. An
   unseated inner joint will walk out under load.
3. ⚠️ **Do not pinch the boot** between the subframe and the transaxle case. One
   builder destroyed a boot exactly this way during installation. `[C]`
4. **Pass the outer end through the hub** and start the nut by hand.
5. **Reconnect the suspension** — lower ball joint to knuckle at 98 N·m with a
   **new castle nut and new clip**, tie rod end at 49 N·m with a **new castle nut
   and new cotter pin** (both may be tightened up to a further 60° to align the
   holes), stabiliser link at 74 N·m, strut to knuckle at 164 N·m `[RM-Y]`. Full
   values in [Phase 5](#phase-5), step (5.4).
6. **Refit the ABS speed sensor** at 8.5 N·m (75 in·lbf). ⚠️ Keep the tip clean
   and **do not rotate it from its original angle** `[RM-Y]`.
7. **Torque the hub nut with the vehicle's weight on the wheel**, or with the hub
   otherwise locked — never through the CV joint. **216 N·m (2,203 kgf·cm,
   159 ft·lbf)**, using a **new** nut, then **stake it** with a chisel and hammer
   `[RM-Y]`. The nut is one-time-use; `90177-22001` `[C]`.
8. **Check for bind at full lock, both directions, before driving.** With the
   matched xD transaxle and axles no builder has reported bind, but confirm it on
   stands rather than assuming — it presents as a vague intermittent clunk rather
   than an obvious fault, and it took seven years to surface in the main build
   thread.

</details>

☝️ Advice: **ABS tone rings are a non-issue**, and that is a direct benefit of
leaving the hubs alone. The tone ring is part of the hub assembly and nothing here
changes it, so tooth count, sensor air gap and the ABS module's calibration all
stay factory. No source consulted addresses tone rings — and on this procedure,
none needs to.

(7.4) Fit the exhaust.

⚠️ Advice: **The 2ZR-FE manifold flange will not mate to the Yaris downpipe.**
The flange is larger and the bolt spacing is wider. Pipe inner diameter is 46 mm
against the Yaris's 40 mm. `[C]`

| Option                                 | Assessment                                                                                                           |
| :------------------------------------- | :------------------------------------------------------------------------------------------------------------------- |
| **Donor xD midpipe** (recommended)     | Comes free with the donor car. ⚠️ Remove it before the shell is scrapped — replacements are effectively unobtainable |
| Weld a larger flange to the Yaris pipe | Cheap and repeatable. One shop welded a 2.25" flange with a single cat section for $208 `[C]`                        |
| Full custom fabrication                | Most flexible, most expensive                                                                                        |
| Long-tube header                       | See Appendix B. Requires O2 sensor extension, a firewall indent for A/F sensor clearance, and a flex joint           |

| Joint                         | N·m | ft·lbf | Notes                                                   | Source   |
| :---------------------------- | --: | :----- | :------------------------------------------------------ | :------- |
| Front exhaust pipe × manifold |  43 | 32     | 2 bolts and **2 compression springs**, ball joint       | `[RM-C]` |
| Tail pipe × front pipe        |  43 | 32     | The US system is 2-piece; there is no separate mid pipe | `[RM-C]` |

☝️ Advice: Apply anti-seize to the exhaust manifold, intake manifold and fuel
rail bolts, and silicone lubricant to hose metal fittings. `[C]`

(7.5) Fit the shift cables and adjust. Torques in (6.6).

⚠️ Warning: **Use the donor's xD shift cables.** The xD mounts sit the transaxle
roughly two inches further forward, and a builder who stretched Yaris cables to
reach tore the mounting studs out of the body, requiring two holes to be welded
up. `[C]`

---

<a id="phase-8"></a>

### Phase 8 — Cooling, Fuel, and Electrical

#### (8.1) Cooling

☝️ Advice: **The Yaris radiator and fans are retained.** They are adequate,
including for track use. The Corolla, xD and Yaris all use the same size
radiator — only the hose routing and fans differ. **No fan rewiring is
required.** `[C]`

What changes is the plumbing.

| Item                                 | Part number `[C]`            | Notes                                                                  |
| :----------------------------------- | :--------------------------- | :--------------------------------------------------------------------- |
| **Coolant filler neck**              | `16502-37010`                | ⚠️ **Bolts to the radiator**, not to the throttle body as on the Yaris |
| Upper long hose, block to filler     | `16571-37090`                | The Yaris upper hose is **too short and kinks**                        |
| Lower hose, radiator to block        | `16572-37080`                |                                                                        |
| Upper short hose, radiator to filler | `16573-37030`                |                                                                        |
| Radiator hose clamps                 | `90467-33006` ×6             | Plus `90467-34004`, `90467-37005` at the outlets                       |
| Heater hoses, short and long         | `87245-52151`, `87245-52141` | Yaris heater hoses kink                                                |
| Heater hose clamps                   | `96136-42501`                |                                                                        |

⚠️ Attention: The Yaris fan shroud has two existing holes for the xD filler neck,
but they must be **tapped M6 × 1.00** and secured with 10 mm bolts. `[C]`

☝️ Advice: If retaining the Yaris heater hoses, **trim 2 inches off the engine
side**. `[C]`

⚠️ Attention: Lower radiator hose clamps are reported as unexpectedly difficult —
one builder spent approximately two hours on the lower hose connection alone.
`[C]`

#### (8.2) Fuel

☝️ Advice: **The fuel line must be installed backwards** — flipped end for end —
or an xD fuel line purchased. `[C]`

The fuel pump is adequate at these power levels. The brake booster, remaining
radiator hoses, and EVAP solenoid hose install as originally fitted. `[C]`

⚠️ Attention: One builder chased a `P0456` EVAP small-leak code to a non-OEM hose
on the EVAP purge solenoid, and fixed it with a trimmed OEM 2ZR-FE hose. `[C]`

#### (8.3) A/C

The Yaris **hard lines are reused**. The compressor and hoses differ between the
1NZ-FE and 2ZR-FE and come from the donor. `[C]`

☠️ Warning: Triple-check every fitting and bolt length before recharging. See
the A/C warning in [Installation Precautions](#precautions).

#### (8.4) Electrical — the four pins that differ

This is the heart of the conversion, and the good news is that it is small.

☝️ Advice: **Use the xD ECM and the xD engine harness as a matched pair, matched
to your transaxle type.** Do not mix. The xD ECU pinout is approximately 99%
incompatible with the Yaris. The engine-bay connector is `C20` on the Yaris and
`C19` on the xD. `[C]`

With a matched xD ECM and harness, every pin matches the `A21` connector on the
Yaris body harness and the two fusebox connectors `CA1` and `CA2`. Fusebox
orientation is **`CA2` top left, `CA1` top right**. Exactly four pins deviate:

| Pin                       | Signal           | Resolution                                                             |
| :------------------------ | :--------------- | :--------------------------------------------------------------------- |
| **`CA2` pin 9**           | MAF sensor power | ⚠️ **No supporting pin exists in the Yaris fusebox.** See below        |
| **`CA2` pins 11, 12, 13** | Speedometer      | Move the speed sensor wires to the same positions in the xD `CA2` plug |

Speed sensor wire colours: **pin 1 black, pin 2 white with black stripe, pin 3
pink**. `[C]`

##### MAF sensor power

⚠️ Attention: Do not attempt to bypass this through the fusebox by soldering to
another +12 V wire. One builder tried and reported that **the MAF voltage
fluctuated**. `[C]`

Two working methods, in order of preference:

1. **Preferred, OEM-style.** Salvage a **fuse clip** from the donor fuse box,
   solder a wire to the clip on the powered bus side, heat-shrink it, install the
   clip into an **empty fuse slot**, and plug the other end into the empty
   position on `CA2`. Fit a fuse. `[C]`
2. **Fallback.** Cut the MAF power wire 8 inches from the MAF plug and run a
   dedicated feed through an add-a-circuit in an **ignition-switched** fuse
   location. `[C]`

☝️ Advice: The fuse box separates into two halves held by **seven to ten tabs**,
and is far easier to open once unbolted from the frame. **Practise on a salvage
Yaris or Echo fuse box first.** `[C]`

☝️ Advice: One builder took power for the MAF from the **fused EFI2 circuit**, and
the speedometer sensor from **ECU-IG with the signal to the dash**. Those are the
two circuits to look for. `[C]`

##### Speed signal, if using the xD transaxle without a fitted sensor

Three options, in order of preference:

1. **Fit the speed sensor to the transaxle** — see (2.5). Simplest.
2. **Take the signal from ABS.** Insert part `82998-12720` into **location 4 on
   the ABS connector** — the smaller white wire in the top row, four from the
   left counting the two larger wires — and connect the pink speed sensor wire to
   it. `[C]`
3. Split the gearbox and fit the driven gear. Only necessary if the driven gear
   is absent.

⚠️ Attention: Cars **without** ABS do not have option 2 available.

##### Connector pin removal

The procedure below applies to the `C20` main harness connector and, identically,
to the ABS module plug. `[C]`

1. Pop the grey lock tab out approximately **1 mm**.
2. Slide a fine pick into the pin release hole. Pull the wire and wiggle it until
   it slides out.
3. Pop the rubber seal out of the destination position, slide the wire in until
   it clicks, and reinstall the rubber seal in the vacated position.
4. Push the grey lock tab back in.

☝️ Advice: Pins are **double-locked**. Prefer moving pins over cutting and
soldering — there is less chance of a loose connection or high internal
resistance. `[C]`

##### Automatic-transaxle wiring — not applicable here

☝️ Advice: If you were retaining the automatic, two further changes would be
needed: a ground added at trans connector **pin 9** — **do not cut the blue wire
to make it**, take a pin from the old Yaris trans connector instead and add an
eyelet to the trans body — and, with a Corolla harness only, the SL solenoid
moved from `C20` pin 57 to pin 58 to clear a `P2770` torque converter code. Both
are irrelevant to a manual conversion and are noted only because they dominate
the forum threads. `[C]`

#### (8.5) Charging and starting

The alternator is the xD **140 A** unit. The starter is the reused Yaris item.
Retain and reconnect all engine ground straps.

⚠️ Attention: One builder using a Corolla harness found **the starter wire would
not reach the Yaris battery terminal** and had to reroute it. With a matched xD
harness this does not arise. `[C]`

---

<a id="phase-9"></a>

### Phase 9 — Immobilizer

This is the phase with the worst reputation in the community record, and most of
that reputation is misplaced — on a US-market donor it comes down to isolating
three wires. Read it in full **before connecting the battery.**

<details open>
  <summary>⚠️ Advice — read before connecting the battery</summary>

The factory manual states, of the ECU–ECM communication ID:

> Do not turn the ignition switch from ON to OFF **20 times or more** before
> setting the ECU–ECM communication ID. If this operation is likely to be
> performed 20 times or more, **disconnect the negative battery terminal cable**
> in order to avoid engine start disablement. Failure to do so will result in the
> engine not starting unless the **transponder key ECU is replaced with a new
> one.** `[RM-Y]`

**Why this matters on a US-donor swap, where no ID is ever set.** The incoming
non-immobilizer ECM cannot hold the handshake at all, so the Yaris transponder key
ECU sees an unanswered request on every ignition cycle and never reaches a
satisfied state. The counter above is therefore running the whole time the car is
sitting on stands with the new engine in it — and every accessory-position turn
of the key while you chase a wiring fault spends one of the twenty.

⚠️ **Keep the negative terminal disconnected until the isolation in (9.3) is
done.** Reconnect it to test, not to poke around. If the count is exhausted, the
transponder key ECU has to be replaced — there is no reset.

</details>

⚠️ Attention: The community warning on this point is that "you have 10 tries to
start the car before you are completely locked out." The mechanism is real and
the consequence is real, but three details are wrong or missing. The factory
figure is **20**, not 10. The counter runs on **ignition ON-to-OFF cycles, not
start attempts** — so it is spent faster than the folklore suggests, because
turning the key to test a circuit counts. And the factory supplies a
mitigation, **disconnecting the negative terminal**, that the community record
never mentions. That last point turns an unrecoverable mistake into a routine
precaution.

#### (9.1) Does this phase apply to you?

This document assumes a **US-market xD donor**, which has no immobilizer of its
own. The recipient Yaris does have one, so the work here is entirely on the
Yaris side: the car's own transponder key ECU has to stop expecting a
conversation that the incoming ECM cannot hold.

| Donor                                | Immobilizer fitted? | Consequence                                                            |
| :----------------------------------- | :------------------ | :--------------------------------------------------------------------- |
| **US-market xD, any year 2008–2014** | **No**              | ☝️ Isolate the Yaris transponder ECU — (9.3). This is the assumed case |
| Canadian xD, 08/2010–06/2014         | **Yes**             | ⚠️ Out of scope — see the note below                                   |
| Canadian xD, before 08/2010          | No                  | As US                                                                  |
| 2010+ Corolla                        | Yes                 | ⚠️ **Not compatible** unless programming new keys                      |

<details>
  <summary>☝️ Advice — why Canadian cars differ, and why they are excluded here</summary>

Canada mandated engine immobilizers on new passenger vehicles from the 2007 model
year, several years ahead of any equivalent US requirement. Toyota met that rule
by fitting a transponder key ECU and immobilizer-capable engine ECM to Canadian
cars while continuing to ship non-immobilizer hardware to the US. For the xD this
produces the split above: **Canadian cars built 08/2010 to 06/2014 have the
immobilizer, US cars never do**, and — the part that catches people out — **the
ECM part number is frequently the same on both.** The market the car was sold in
is the reliable indicator, not the number on the box. `[C]`

There is a further generational trap within the Canadian cars: key systems are
not cross-compatible between generations. First-generation keys carry a dot mark
and later ones a "G" mark, and a Yaris on one generation will not accept keys or
an immobilizer ECU from the other. `[C]`

**A Canadian donor is workable** — at least one builder has done it by
transplanting a matched engine ECU, immobilizer ECU and key set — but it requires
a factory key-code and communication-ID registration sequence, carries a hard
lockout risk if performed incorrectly, and the procedure differs by system
generation. **None of that is documented here.** If a Canadian car is your only
option, work from the Engine Immobiliser chapter of the factory manual for your
specific year rather than from this document.

</details>

#### (9.2) What the system actually is

The key carries two codes — the key code, or immobilizer code, and the wireless
recognition code. The transponder key ECU reads the key and passes key data to
the ECM. Without matching data the ECM will not allow the engine to run. `[RM-Y]`

⚠️ **Correction to the community record.** The most-repeated technical claim about
this system is that `SIL` — the ISO-9141 K-line at DLC3 pin 7 — carries the
immobilizer conversation, and that the fix is to disconnect "the brown K-line at
pin 9." The factory wiring diagram shows something different. The ECM and the
transponder key ECU communicate over a **dedicated three-wire link**:

| Transponder key ECU `D23` | ECM `A21`          | Direction | Standard resistance |
| :------------------------ | :----------------- | :-------- | :------------------ |
| **`D23-13` `EFIO`**       | **`A21-11` `IMI`** | ECU → ECM | Below 1 Ω           |
| **`D23-12` `EFII`**       | **`A21-10` `IMO`** | ECM → ECU | Below 1 Ω           |
| **`D23-11` `EGND`**       | **`A21-9` `EOM`**  | Ground    | Below 1 Ω           |

`SIL` is a separate diagnostic bus line to the DLC3 for the scan tool, not the
immobilizer path. `[RM-Y]`

☝️ Advice: The better-informed contributors to the community record had this
right — one described checking the **`EFII` and `EFIO`** waveforms and noted that
the **`IMI` and `IMO`** terminals correspond between ECM connectors, and another
said simply to pull the immobilizer pins from the connector that goes into the
ECU. Those descriptions match the manual. It is the widely-quoted "SIL, pin 9"
framing that is wrong, or at best describes a different circuit.

☝️ Advice: `A21` is the ECM connector, which independently corroborates the
observation that every pin of the xD ECM matches the `A21` connector on the Yaris
body harness.

#### (9.3) Isolating the Yaris transponder key ECU

The failure mode to avoid: a **non-immobilizer ECM begins behaving as though
immobilizer-enabled** when the chassis transponder key ECU is still present and
connected. `[C]`

The published remedy is to **disconnect the communication link at the transponder
key ECU** — the `IMI`/`IMO` pair described above. The same key works, the antenna
coil can stay around the ignition tumbler, and the transponder key ECU itself can
remain in the car. `[C]`

⚠️ Attention: This is not symmetrical. Installing an immobilizer-equipped ECM into
a non-immobilizer car does **not** remove the immobilizer function. `[C]`

☝️ Advice: Expect the **red security indicator on the dash to keep flashing.**
That is cosmetic. The factory explanation is that when the immobilizer is
operating normally and the key is removed, the security indicator blinks
continuously — the indicator is doing exactly what it is designed to do. `[RM-Y]`

⚠️ Attention: The community has a working method for running a non-immobilizer
ECM against a live transponder key ECU, and has **deliberately chosen not to
publish it**, on the stated grounds that it presents a security problem. That
decision is respected here. Contact the builders directly if you need it.

#### (9.4) Diagnosis

The code to expect is **`B2799` Engine Immobiliser System**, listed in the **ECM**
trouble code chart with trouble areas "1. Wire harness, 2. ECM". `[RM-Y]`

> This DTC is output when: 1) the ECM detects errors in its own communication
> with the transponder key ECU; 2) the ECM detects errors in the communication
> lines; and 3) **the ECU–ECM communication IDs between the transponder key ECU
> and the ECM are different and an engine start is attempted.**

That third condition is this conversion's signature failure.

☝️ Advice: **Triage order matters.** Before troubleshooting `B2799`, confirm that
no transponder key ECU codes are present. If any are, resolve those first.
`[RM-Y]`

| Code    | Detection item                         |
| :------ | :------------------------------------- |
| `B2784` | Antenna coil open or short             |
| `B2793` | Transponder chip malfunction           |
| `B2794` | Unmatched encryption code              |
| `B2795` | Unmatched key code                     |
| `B2796` | No communication in immobilizer system |
| `B2798` | Communication malfunction No. 2        |
| `B2799` | Engine immobilizer system              |

Diagnostic check: with `D23` and `A21` disconnected, measure resistance across
the three pairs in (9.2). Each should read **below 1 Ω**. `[RM-Y]`

⚠️ Attention: Third-party immobilizer bypass modules and EEPROM modification exist.
They are not recommended for a daily-driven vehicle and are not covered here.

---

<a id="phase-10"></a>

### Phase 10 — Instrumentation and Signals

#### (10.1) Speedometer

The signal source depends on the path chosen in Phase 0 and on whether the
recipient car has ABS. See (2.5) — the factory manual branches this on **ABS, not
chassis**.

⚠️ Attention: One builder running an xD transaxle with a Yaris speed sensor
fitted reported the **speedometer reading approximately 2 mph optimistic** — 20
indicated against 22 to 22.5 actual, on 185/60R15 tyres. No fix was published.
`[C]`

☝️ Advice: **The driven gear is a calibration lever.** Two are available:
`33403-19455` at 30 teeth and `33403-19465` at 31 teeth. A one-tooth change is
roughly a 3% correction, which is the right order of magnitude for the error
above. Choose deliberately, and record which one you fitted.

#### (10.2) Tachometer, cluster, and shift indicator

No tachometer or cluster incompatibility has been reported on this chassis. The
2nd-generation Yaris and xD interface is discrete-wire plus the ISO-9141 K-line;
there is no CAN handshake to satisfy between these two ECUs. `[C]`

☝️ Advice: The **odometer lives in the cluster, not the ECM.** Swapping the ECM
does not lose recorded mileage. `[C]`

☝️ Advice: The automatic's **shift position indicator** has nothing left to
report. Plan for how the cluster should look — the two shifter connectors removed
in (5.6) were its inputs.

#### (10.3) Check engine light and readiness monitors

The target state is no stored codes and all readiness monitors set. This is also
the emissions requirement in most jurisdictions.

⚠️ Attention: One builder deliberately did not connect the second oxygen sensor
and runs rich as a result. This will not pass an inspection and is noted only so
that it is not mistaken for an acceptable shortcut. `[C]`

☝️ Advice: If pursuing California BAR certification, the referee process
reportedly requires photographs of the catalytic converters in position, the
oxygen sensors and their locations, engine bay connections and EVAP components;
scanner screenshots showing no codes and completed monitors; **CAL ID and CAL
CVN** data to demonstrate the ECM is untampered; the donor VIN; current
registration; and emissions certification for both vehicles. The in-person
inspection is a rolling-road test taking up to two hours. `[C]`

#### (10.4) A note on third-generation Yaris

⚠️ Attention: This document covers the **NCP91/XP90** chassis only. The
third-generation Yaris uses a different ECM and chassis harness, requires a
`ZRE18X` ECU rather than `ZRE152`, and its ABS unit will not communicate with a
`ZRE152` ECU. Approximately ten pins require repinning, and the recommended
approach is a patch harness using Sumitomo connectors rather than destructive
modification. That is a different job. `[C]`

---

<a id="phase-11"></a>

### Phase 11 — First Start and Commissioning

(11.1) Fill all fluids to the capacities in Phase 3.

(11.2) Fill and bleed the cooling system by gravity, per the factory procedure —
see the advice note in Phase 3.

(11.3) Prime the oil system. **Pull the EFI and EFI2 fuses** and crank until the
oil pressure light goes out, approximately **30 to 50 seconds**. Refit the fuses.
`[C]`

(11.4) Start the engine.

⚠️ Attention: Do not attempt to clear a flooded condition by holding the throttle
open — on the 2ZR-FE this simply bounces off the rev limiter. `[C]`

(11.5) Inspect for leaks at every joint opened. Check oil pressure against the
specification in (0.4).

(11.6) Bleed the clutch and brakes again if the pedal is not firm. Set the clutch
pedal to the specification in (6.8).

(11.7) Adjust the shift cables.

(11.8) Evacuate and recharge the A/C. Reported practice is a 20-minute vacuum to
leak-check, then a further hour to remove moisture, then charge. `[C]`

(11.9) Road test.

#### Break-in

| Interval            | Action                                   |
| :------------------ | :--------------------------------------- |
| **15 minutes**      | Change the engine oil                    |
| **50 miles**        | Change the engine oil again              |
| **Until 500 miles** | **No wide-open throttle** — ring seating |

`[C]`

#### Retorque schedule

| When                               | What                                                               |
| :--------------------------------- | :----------------------------------------------------------------- |
| After the first heat cycle         | Exhaust manifold and downpipe fasteners                            |
| After approximately 100 km / 60 mi | All mount fasteners, axle hub nuts, subframe bolts, wheel lug nuts |
| After 100 km / 60 mi               | Re-check all fluid levels                                          |

---

<a id="post-install"></a>

## Post-installation Checks and Precautions

1. Check that all six mount pieces are fitted and torqued, and that the
   powertrain does not contact the body, subframe or steering rack at full lock
   in either direction.
2. Check for **front axle bind** — jack the front wheels, turn to full lock both
   ways, and confirm the axles are not fully compressed. See (7.3).
3. Check that the CV boots are not pinched between the subframe and the
   transaxle. One builder pinched one during installation. `[C]`
4. Confirm the battery tray is secure on its slotted holes.
5. Confirm no exhaust component contacts the firewall, floor or fuel lines.
6. Confirm the clutch and brake pedals meet the specifications in (6.8), and that
   the clutch start switch prevents cranking with the pedal released.
7. Confirm reverse lights operate.
8. Confirm the speedometer reads correctly against a GPS reference, and record
   which driven gear is fitted.
9. Re-scan for trouble codes. Confirm no stored codes and that readiness monitors
   have set.
10. Check the coolant level after the first several heat cycles — air pockets
    migrate out of this system over the first few days.
11. Confirm oil pressure at idle and at 3000 rpm against specification.
12. Check for leaks at every fitting opened, with the vehicle warm.

☝️ Advice: A completed conversion of this type has been reported reliable over
thousands of miles with no check engine light, returning approximately 30 mpg
combined, and with **no measurable weight gain** — one car scaled 2,362 lb both
before and after the conversion. `[C]`

⚠️ Attention: The most-reported subjective complaint is **rev hang, worse than the
1NZ-FE**. A lightweight flywheel does not fix it. `[C]`

<a id="budget"></a>

## Budget

Figures below are from one completed and emissions-certified build, and are
indicative only. Prices move; this is `[C]` and dated.

| Section                         |        Cost | Notes                                |
| :------------------------------ | ----------: | :----------------------------------- |
| Engine, transaxle, ECM, harness |      $1,288 | One salvage purchase, complete       |
| Intake and exhaust              |        $944 | Includes a $780 CARB-legal converter |
| Fuel, electrical, starting      |        $359 |                                      |
| Cooling                         |        $124 |                                      |
| Driveline                       |         $79 |                                      |
| Clutch and hydraulics           |        $276 |                                      |
| A/C                             |        $363 |                                      |
| **Parts total**                 |  **$3,433** |                                      |
| Tools                           |       ~$500 | Excludes rebuild-only tooling        |
| **All-in**                      | **~$3,933** |                                      |

☝️ Advice: The figures above are the same builder's totals with his **optional
engine rebuild ($609) and transaxle rebuild and gearing ($1,329) removed**, since
this document does not open either unit. His full all-in figure including both
rebuilds and all tooling was **$6,305**.

☝️ Advice: The original community guide advises budgeting approximately $3,000,
which the table above suggests is close to right for a straight swap. Another
builder itemised $1,795 for a swap onto a low-mileage donor engine, and a third
assembled most of a swap for under $850 through a long-standing salvage yard
relationship. The single largest line item that is genuinely not compressible is
the **$780 catalytic converter** — see [Parts Manifest](#parts-manifest).

---

<a id="appendix-a"></a>

## Appendix A — Wrong-Engine Quarantine

Half the danger in a swap workbook is a confidently-stated number that belongs to
a different engine. The values below circulate in connection with this
conversion and are **wrong for the 2ZR-FE**. They are listed specifically so
they can be recognised and rejected.

| Value in circulation                                 | Actually belongs to                          | Correct 2ZR-FE value                           |
| :--------------------------------------------------- | :------------------------------------------- | :--------------------------------------------- |
| Head bolts **"36 ft·lbf + 90° + 90°"**               | **1ZZ-FE / 2AZ-FE**                          | **49 N·m + 90° + 45°**, mark at 135°           |
| Head bolts, 8 mm bi-hexagon                          | **1NZ-FE** (the engine coming out)           | **10 mm** bi-hexagon                           |
| Flywheel "38 ft·lbf + 90°"                           | **1NZ-FE**, via a misprinted imperial column | 49 N·m + 90° = **36 ft·lbf**                   |
| Bell housing **"22 ft·lbf"**                         | The **internal case-half** bolt              | **33 N·m / 24 ft·lbf**, 7 bolts                |
| Rod cap "18 ft·lbf"                                  | **2AZ-FE**                                   | **20 N·m / 15 ft·lbf** + 90°                   |
| Engine moving control rod **"64 N·m"**               | **2AZ-FE, 2004 Camry**                       | 100 N·m transaxle side, 120 N·m at crossmember |
| Insulator "80 N·m" + hangers "25 N·m"                | **1AD/2AD-FTV diesel**                       | See Phase 7                                    |
| Chain tensioner slipper "19 N·m"                     | **2AZ-FE**                                   | ⚠️ **Not published** — see below               |
| Chain tensioner slipper "18.5 N·m"                   | **1ZZ-FE**                                   | ⚠️ Not published                               |
| Chain tensioner slipper "20.5 N·m"                   | **2ZZ-GE**                                   | ⚠️ Not published                               |
| Chain tensioner slipper "9.0 N·m"                    | **1NZ-FE**                                   | ⚠️ Not published                               |
| Transaxle oil "75W-90, 3 qt"                         | Community practice, not a spec               | **GL-4, SAE 75W, 1.9 ℓ**                       |
| Coolant "5.5 ℓ"                                      | Community estimate                           | **4.8 ℓ** M/T                                  |
| Differential shim part numbers `90564-41014`–`41032` | Not in any factory manual                    | Lettered plate washers **AA–UU**               |
| Applied model **`AZE151L`**                          | **Scion xB**, `2AZ-FE` 2.4 ℓ                 | The xD is **`ZSP110L-AHMRKA`**                 |

⚠️ Advice: **Toyota manual RM3027** is a complete 2ZR-FE "Engine Assembly" mount
table and is easy to find. It is **JDM Auris/ist — not US-market xD or
Corolla.** Its crossmember figure is 99 N·m against the xD's 70/160/95 and the
Corolla's 113/157/52. It _partially_ agrees with the US Corolla on the insulator
rows, which makes it **more** dangerous, not less. Do not use it for a US
vehicle.

### Specifications that genuinely do not exist

Publishing these as gaps is more useful than filling them with a guess.

| Item                                               | Status                                                                                                        |
| :------------------------------------------------- | :------------------------------------------------------------------------------------------------------------ |
| Cylinder head cover torque                         | **Toyota publishes none.** An absence, not a gap                                                              |
| 2ZR-FE valve clearance                             | **Not applicable** — hydraulic lash adjusters                                                                 |
| Chain tensioner slipper bolt                       | Not located for the 2ZR-FE                                                                                    |
| Head bolt tightening **sequence** (1–10)           | Illustration only in the manual, not text                                                                     |
| Timing chain cover sequence, 26 bolts              | Illustration only                                                                                             |
| A/C compressor mounting bolts                      | Not located                                                                                                   |
| Drive belt idler pulley, as a distinct row         | Not located                                                                                                   |
| Engine coolant temperature sensor torque           | Not located                                                                                                   |
| LH transaxle mounting **bracket** to case bolts    | Not located — the manuals route this to an "Engine Assembly / Installation" document absent from both mirrors |
| xD RH insulator — which of 45/88/52 N·m goes where | **Genuinely unpublished.** Three torques, two illustration labels                                             |
| Oil pump relief valve plug                         | Sources give 49 and 37 N·m irreconcilably. **Treat as not found**                                             |
| Radiator and block drain cocks                     | No torque printed — hand-tight                                                                                |
| ABS tone rings                                     | Never addressed by any source — **and not needed**, because nothing in this procedure changes the hubs. See (7.3) |
| Fastener part numbers generally                    | The repair manual names joints, not part numbers                                                              |

☝️ Advice: Row labels such as "No.1 / No.2 front and rear mounting bracket" do
**not exist** in the 2ZR-FE repair manual. That naming comes from other engine
families — do not go looking for them.

<a id="appendix-b"></a>

## Appendix B — Bolt-on Reference

☝️ Advice: **None of this is required for the conversion.** It is collected here
so that the main procedure stays a stock-replacement document.

### Measured output

| Configuration                                | Wheel hp | Torque    |
| :------------------------------------------- | -------: | :-------- |
| Stock, plus intake                           |      123 | 121 lb·ft |
| Plus long-tube header and 2.25–2.5" mid pipe |      134 | 134 lb·ft |
| Plus prototype intake manifold               |      148 | 137 lb·ft |

The header and mid pipe alone added approximately 15 lb·ft at 3000 rpm.
Realistic naturally-aspirated ceiling is around 150 wheel hp. `[C]`

☝️ Advice: The 2ZR-FE has **no variable valve lift** — only cam phasing, advance
and retard. The strong pull above 4000 rpm that gets described as VTEC-like is
cam timing, not a lift change. `[C]`

### Exhaust

A long-tube header will not bolt to any OEM midpipe; reputable kits ship an extra
flange and gasket. Installation notes from builders: the coating will be
scratched during installation, the bracket tab must be bent to fit from
underneath, **an indent must be made in the firewall for A/F sensor clearance**,
the rear O2 sensor requires an extension because of the header length, and a
**flex joint** should be fitted or the engine vibrates noticeably at idle with the
A/C engaged. `[C]`

### Gearing

| Option                     | Effect                                                   |
| :------------------------- | :------------------------------------------------------- |
| QRP 5th gear set, 0.725:1  | From 0.815:1. Drops 70 mph from 3,228 to 2,871 rpm       |
| 4.31 final drive, 04–06 xB | Drop-in. In-gear top speeds 29 / 54 / 80 / 101 / 121 mph |
| Helical LSD                | 20-spline axles — fits the xD differential               |
| EC60 / EC67 6-speed        | See below                                                |

⚠️ Attention: On the 6-speed — the EC-series cases are shorter than the C-series
because Toyota moved to a two-piece case design, so no hammer work is needed to
fit one. However the EC67 uses a **special throwout bearing with an integrated
cylinder**, so the entire clutch hydraulic system must change. One builder who
fitted an EC60 reported first gear is far too short and concluded it "isn't
really worth it" on an otherwise stock car. `[C]`

### Driveline strength

| Output        | Recommendation                         |
| :------------ | :------------------------------------- |
| Up to ~150 hp | Yaris differential and shafts adequate |
| 150–250 bhp   | xD driveline                           |
| Above 250 bhp | Custom shafts                          |

☝️ Advice: Automatic transaxles begin slipping above approximately 275 hp; keep
boosted builds on a U340E to 220–230 hp. Not relevant to this conversion, but it
comes up constantly. `[C]`

---

<a id="references"></a>

## References

### Factory manuals

- **Toyota Yaris/Vitz XP90 2005–2011 Workshop Manual**, 49 chapters. All `[RM-Y]`
  values in this document are cited by chapter and page. The chapters used were
  3 (Service Specifications), 16 (Clutch), 17 (C50 Manual Transaxle), 18 (Drive
  Shaft), 19 (Axle), 20 (Suspension), 22 (Brake Control), 23 (Brake),
  31 (Engine Immobilizer), 2 (Preparation), 4 (Maintenance), 10 (Cooling).
- **Toyota Corolla and Scion xD repair manuals**, 2ZR-FE. All `[RM-C]` values.
  Accessible via the [Operation CHARM](https://charm.li/) mirror and
  [workshop-manuals.com](https://workshop-manuals.com/).

☝️ Advice for anyone verifying these figures: appending `/sitemap.xml` to a
workshop-manuals.com model path returns a complete leaf-URL inventory — 7,233
URLs for the Corolla — which removes all page-number guessing. Note that
`toyotaguru.us`, widely linked in older threads, is now a parked domain.

⚠️ Attention: The XP90 workshop manual contains **printing errors in its imperial
and kgf·cm columns**. Every imperial figure in this document was recomputed from
the N·m value. Set your wrench from the N·m column.

### Community sources

- [The 2zr-fe engine swap guide](https://www.yarisworld.com/forums/showthread.php?t=56031)
  — the original guide, 417 posts across 24 pages, begun 2016. The most complete
  single source, and the one that self-corrects most often. Its author declined
  to reorganise it into a matrix.
- [Yet another 2ZR swap — Auto to Manual + CARB legal](https://www.yarisworld.com/forums/showthread.php?t=64908)
  — **the closest match to this document's subject**: a genuine automatic-to-manual
  plus 1NZ-to-2ZR double conversion, California BAR certified, 2023.
- [THE 2ZRFE engine swap thread — Just the facts](https://www.yarisworld.com/forums/showthread.php?t=56678)
  — tool list, procedure, the trans-pin-9 correction.
- [Cranky's 2ZR-FE swap](https://www.yarisworld.com/forums/showthread.php?t=56523)
  — the best part-number list in the community record.
- [The xD Swap thread](https://www.yarisworld.com/forums/showthread.php?t=61427)
  — a build log rather than a guide; source of the 4×100 hub finding and the
  speed-sensor cap method.
- [T Montague's 2zr swap, 08 M/T sedan](https://www.yarisworld.com/forums/showthread.php?t=57875)
  — 16 pages; the axle bind diagnosis and the Tercel axle fix.
- [The auto trans to manual trans conversion guide](https://www.yarisworld.com/forums/showthread.php?t=56928)
- [06YarisRS's 2ZR-FE Swap 5-Door Hatchback](https://www.yarisworld.com/forums/showthread.php?t=61176)
  — itemised costs.
- [Engine Swaps — Using an Immobilizer ECM](https://www.yarisworld.com/forums/showthread.php?t=60629)
- [2ZR Swap ECU](https://www.yarisworld.com/forums/showthread.php?t=63235)
  — the Canadian-versus-US immobilizer fitment finding.
- [3rd gen 2zr swap with 6 speed](https://www.yarisworld.com/forums/archive/index.php/t-61491.html)
  — cooling part numbers.

### Applied model and chassis codes

- [Toyota-Club.net — Scion xD (2007–2014)](https://toyota-club.net/files/techdata/ttx/scion_xd.htm)
  — confirms `ZSP110` and `2ZR-FE`, and gives the manual transaxle fill as
  **1.9 ℓ of 75W GL-4**, independently corroborating the factory Yaris figure
  used in [Phase 3](#phase-3).
- [Real Street Performance — 2AZ-FE xB, `AZE151`](https://www.realstreetperformance.com/shop-by-vehicle/toyota-lexus/2az-fe-xb.html)
  — confirms `AZE151` is the 2008–2015 Scion xB with the 2.4 ℓ 2AZ-FE, not the xD.

### Parts cross-reference

[ToyoDIY](https://www.toyodiy.com/) and [Amayama](https://www.amayama.com/) for
part numbers; [car-part.com](https://www.car-part.com/) for salvage harness and
ECM sourcing, which is more productive than auction sites for these items.

### What could not be retrieved

Stated plainly, because a reader deserves to know where this document is thin.

- **A full Yaris-versus-xD ECU pinout spreadsheet.** The document everyone cites
  is a dead Google Sheets link, returning HTTP 410. No replacement was found.
  This is the single most valuable lost artefact in the community record.
- **A third private build document**, linked from one builder's own public
  checklist, returns HTTP 401. Contents unknown.
- **Page 24 of the main guide thread**, posts 415–417.
- **Build photographs.** Mount comparison shots, the `C20` lock tab, the pin
  release views, the `CA2` connector, and the manual-versus-automatic pedal
  assemblies exist only as forum image attachments. One builder lost
  approximately thirty photographs when his phone died and says so himself. Two
  survive publicly, at `jeff.epicwelding.com/yaris_mounts1.jpg` and
  `yaris_mounts2.jpg`.
- **The community's immobilizer bypass method**, withheld deliberately. See (9.3).
- A 2ZR-FE flywheel bolt torque confirmed against a factory manual. See Phase 4.

☝️ Advice: The figures in this document are drawn from two factory manuals and
cross-checked against every builder's account that could be located. Where a
value is marked `[C]`, it has not been confirmed against a manual — verify it by
trial fit or measurement before relying on it. Where a value is absent, it is
absent because it could not be found, not because it was omitted for brevity.

If you complete this conversion, **photograph it.** The gap in this document is
not specifications any more. It is pictures.
