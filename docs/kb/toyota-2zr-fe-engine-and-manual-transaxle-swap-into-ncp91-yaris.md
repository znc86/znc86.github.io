---
title: "Toyota 2ZR-FE Engine and C50 Manual Transaxle Swap into the NCP91 Yaris — Installation and Instruction Manual"
subtitle: Conversion procedure for a 2ZR-FE and 5-speed manual transaxle into an automatic NCP91/XP90 Yaris, from a Scion xD donor
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

## Introduction

Thank you very much for undertaking this conversion. This document describes
procedures and precautions for replacing the `1NZ-FE` engine and `U340E`
automatic transaxle of the NCP91 Yaris with the `2ZR-FE` engine and `C50`
5-speed manual transaxle. Please be sure to read it before beginning work and
carry out correct installation and handling.

Toyota did not sanction this conversion and does not publish a procedure for it.
This document is assembled from two factory workshop manuals, one builder's
complete parts-and-task record, and roughly seventy pages of forum threads that
contradict one another and self-correct several times. Where the manuals speak,
they are quoted. Where only the community speaks, that is marked. Where nobody
knows, that is marked too.

The following symbols are displayed for important points, which must be observed.

| Note         |                                                                                                    |
| :----------- | :------------------------------------------------------------------------------------------------- |
| ⚠️ Warning   | Safety precautions that must be observed (Improper handling may result in death or serious injury) |
| ⚠️ Attention | For your safety and that of your vehicle (mishandling may result in injury or accident)            |
| ☝️ Advice    | Describes information that is useful for performing the work efficiently                           |

Source markers are displayed for every specification.

| Marker    | Meaning                                                                                     |
| :-------- | :------------------------------------------------------------------------------------------ |
| `[RM-Y]`  | Toyota Yaris/Vitz XP90 workshop manual (1NZ-FE chassis), cited by chapter and page          |
| `[RM-C]`  | Toyota Corolla / Scion xD repair manual, for 2ZR-FE engine values                           |
| `[C]`     | Community-reported. **Verify by trial fit or measurement before relying on it**             |

<details>
  <summary>⚠️ Warning</summary>

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

(Page 2)

## Compatible Vehicle Models

### Recipient Vehicle

| Item         | Specification                                              |
| :----------- | :--------------------------------------------------------- |
| Chassis      | `NCP91`, XP90 (2nd generation Vitz/Yaris), 5-door hatchback |
| Model year   | 2010–2011 (US market)                                      |
| Engine       | `1NZ-FE` 1.5 ℓ VVT-i                                       |
| Transaxle    | `U340E` 4-speed automatic                                  |
| Platform     | Toyota B platform                                          |

☝️ Advice: The B platform was later shared between the Vitz/Yaris and the
Aqua/Prius C. The 3-door XP90 is the "Yaris Liftback"; the 5-door was sold in
the US from the 2009 model year.

### Donor Vehicle — Recommended

| Item       | Specification                                          |
| :--------- | :----------------------------------------------------- |
| Vehicle    | **Scion xD, 2008–2014, US market, manual transmission** |
| Engine     | `2ZR-FE` 1.8 ℓ Dual VVT-i, DOHC 16-valve, timing chain  |
| Output     | 136 hp / 129 lb·ft at the crank (stock)                 |
| Transaxle  | `C50` 5-speed manual                                    |

<details>
  <summary>⚠️ Attention — donor selection determines how hard this job is</summary>

- **Acquire a complete, running donor vehicle.** Every source that has completed
  this conversion says the same thing, and one who pieced it together over
  six to nine months says explicitly that buying a whole donor xD is the way to
  do it. The guide's original author put it as: aside from the engine and its
  accessories, use every part from a Scion xD.
- **Verify the engine is `2ZR-FE`, not `2ZR-FAE`.** The FAE is the Valvematic
  variant and is not the subject of this document. The Corolla XRS also uses a
  different engine.
- **A US-market xD has no immobilizer.** The immobilizer ECU was fitted only to
  **Canadian** xDs from 08/2010 to 06/2014, and never to US xDs. The same ECM
  part number appears both ways. A US donor removes the single most
  car-stranding problem in this conversion — see Phase 9.
- **Obtain the donor's master key.** Without it, the dealer path for adding or
  registering keys closes entirely.
- **Record the donor VIN before purchase** and pull its history report.
- **Verify the engine harness has not been cut anywhere.** The manual-transmission
  xD engine harness is the scarcest single item in this conversion — reported
  unobtainable in 2016, 2017, 2020 and still in 2023. Source harnesses from
  salvage-inventory search services rather than auction sites.

</details>

### Donor Vehicle — Alternative

The Toyota Corolla (2009–2020) uses the same engine and is more plentiful.

⚠️ Warning: **Do not use a Corolla engine harness.** The Corolla ECM lives on the
driver's side; the Yaris and xD ECMs live on the passenger side. The Corolla
harness has three fusebox connectors and none of them match the Yaris — every
wire must be relocated individually, and the battery cables to the starter and
alternator must be cut and spliced to the 1NZ harness cables for length. The one
builder who did this describes it as a monumental task and advises against
attempting it without extensive wiring experience.

⚠️ Warning: **The 2010+ Corolla ECM is not compatible** unless you intend to
program new keys.

### Not Compatible

The Echo/xA frame will not accept this conversion. That is a different job.

---

(Page 3)

## Parts Manifest

☝️ Advice: Part numbers marked `[C]` are cross-referenced from parts catalogues,
not from a factory manual — the repair manual identifies fasteners by joint name,
not by part number. Verify against your donor's year before ordering.

### ① Harvested from the donor vehicle

| No. | Product name                              | Qty | Notes                                                     |
| --: | :---------------------------------------- | :-- | :-------------------------------------------------------- |
|   ① | 2ZR-FE engine assembly                    | 1   | With all accessories                                      |
|   ② | C50 5-speed manual transaxle              | 1   | See the driveline fork, Phase 0                           |
|   ③ | Engine ECM                                | 1   | `89661-52F81` M/T `[C]`. Must match engine **and** transaxle type |
|   ④ | Engine wiring harness                     | 1   | `82121-52E90` M/T, all years `[C]`. **Scarcest item**     |
|   ⑤ | Engine and transaxle mounts, all brackets | 6   | Six pieces, not three — see Phase 7                       |
|   ⑥ | Exhaust manifold and midpipe              | 1   | ⚠️ **Remove before the shell is scrapped**                |
|   ⑦ | Clutch master and slave cylinders         | 1   | No factory part number published for these                |
|   ⑧ | Shift cables and floor shifter            | 1   | xD cables mandatory with xD mounts                        |
|   ⑨ | CV axles                                  | 2   | Must match the transaxle spline count                     |
|   ⑩ | Intake airbox, tube, and MAF sensor       | 1   | MAF `22204-31020` `[C]`. Airbox lid carries the MAF mount |
|   ⑪ | Alternator, 140 A                         | 1   | `27060-37040` `[C]`                                       |
|   ⑫ | A/C compressor and hoses                  | 1   | `88310-1A660` `[C]`; lines `88712-52341`, `88711-52311`   |
|   ⑬ | Coolant filler neck and hoses             | 1   | See Phase 8                                               |

### ② Harvested from the recipient Yaris — retained

| No. | Product name                          | Notes                                                          |
| --: | :------------------------------------ | :------------------------------------------------------------- |
|   ⑭ | Radiator and cooling fans             | ☝️ **Reused.** Adequate even for track use                     |
|   ⑮ | Starter                               | ☝️ **Reused.** Both engines use a 9-bolt, 2-o'clock starter    |
|   ⑯ | Brake booster, master cylinder, lines | Booster reused; master cylinder replaced — see ⑳               |
|   ⑰ | A/C hard lines                        | Reused                                                         |

### ③ Sourced from a manual Yaris

| No. | Product name          | Notes                                                                    |
| --: | :-------------------- | :----------------------------------------------------------------------- |
|   ⑱ | Clutch pedal assembly | ⚠️ **From a Yaris, NOT the xD** — the Yaris pedal has no return spring    |
|   ⑲ | Clutch master-to-hose tube | `31481-52110` `[C]` — **no longer manufactured, salvage only**       |

### ④ Purchased new

| No. | Product name                     | Part number / spec                          | Notes                                        |
| --: | :------------------------------- | :------------------------------------------ | :------------------------------------------- |
|   ⑳ | **Brake master cylinder, M/T**   | Advics `BMT345` `[C]`                       | ⚠️ **Reservoir has the clutch bypass port.** Non-ABS M/T application. Circuit spacing differs from the automatic unit |
|   ㉑ | Clutch kit                       | Aisin `CKT062` `[C]`                        | Disc, cover, release bearing                 |
|   ㉒ | Clutch slave cylinder            | Aisin `CRT-115` `[C]`                       | ⚠️ **Buy new. Do not rebuild** — see Phase 6 |
|   ㉓ | Clutch hose to release cylinder  | `90947-02E09` `[C]`                         |                                              |
|   ㉔ | Clutch hose bracket, clamp, clip | `31484-52090`, `90949-01D17`, `90468-08035` `[C]` | The clamp resolves under Daihatsu      |
|   ㉕ | Cylinder head bolt set           | 10 pcs                                      | ⚠️ **Torque-to-yield. One-time use**         |
|   ㉖ | Front axle hub nuts              | `90177-22001` ×2 `[C]`                      | ⚠️ **One-time use, staked**                  |
|   ㉗ | Transaxle output shaft nut       | `90179-18005` `[C]`                         | ⚠️ **One-time use, staked**                  |
|   ㉘ | Transaxle drain/filler gaskets   | `90430-18008` `[C]`                         | New each time                                |
|   ㉙ | Catalytic converter, CARB-legal  | AP Eastern `771790` `[C]`                   | Must match the engine, not the chassis       |
|   ㉚ | Downstream O2 sensor             | Denso `234-4623` `[C]`                      |                                              |
|   ㉛ | Accessory drive belt             | Dayco `5060485` with A/C `[C]`              | Gates `K060365` without A/C                  |
|   ㉜ | Water pump                       | Aisin `WPT140` `[C]`                        |                                              |
|   ㉝ | Spark plugs                      | Denso `SC16HR11` `[C]`                      | Iridium                                      |
|   ㉞ | Ignition coils                   | `90919-02252` `[C]`                         |                                              |
|   ㉟ | Fuel injectors                   | `23250-0T020` `[C]`                         | ⚠️ Remanufactured and matched. **Do not fit untested no-name injectors** |
|   ㊱ | FIPG — Seal Packing 1281         | `08826-00090` `[RM-Y]`                      | Transaxle case mating surfaces               |
|   ㊲ | Adhesive 1344                    | `08833-00080` `[RM-Y]`                      | Output shaft nut, shift fork lock bolts      |

☝️ Advice: If the donor is high-mileage, add the engine and transaxle rebuild
sets. Those are listed in Phases 2 and 3, which are optional.

Confirmation: Upon collecting these parts, immediately check that nothing is
damaged and that the harness has not been cut.

---

(Page 4)

## Tool Manifest

### Required for the conversion

| Tool                                        | Tool                                              |
| :------------------------------------------ | :------------------------------------------------ |
| Metric socket set, 1/2" and 3/8" drive       | Torque wrench, 5–25 N·m range                     |
| **6-point and 12-point sockets, 10–21 mm**   | Torque wrench, 20–110 N·m range                   |
| Metric combination wrench set                | Torque wrench, 100–250 N·m range                  |
| **10 mm bi-hexagon (12-point) bit**          | Angle gauge, or a marker for paint-mark method    |
| **30 mm 12-spline axle socket**              | Breaker bar                                       |
| **Flare nut (line) wrench set**              | Ball joint separator                              |
| Oil filter cap wrench, `09228-06501` or equiv. | Engine hoist and **load leveller**              |
| Engine stand                                 | Transmission jack                                 |
| Cobalt drill bits and knockout punch set     | Coil spring compressor                            |
| Vacuum pump and A/C manifold gauge set       | Brake bleeder kit                                 |
| Coolant refill funnel                        | Connector pin release pick                        |
| Soldering iron, heat-shrink                  | Feeler gauge                                      |
| Pry bars                                     | Catch pans, drain pans                            |
| Safety glasses, work gloves                  | Engine paint marker                               |

### Required only if rebuilding the donor engine or transaxle

| Tool                                    | Purpose                        |
| :-------------------------------------- | :----------------------------- |
| Shop press, 20 ton                      | Transaxle bearings             |
| Bearing splitter and bearing puller     | Transaxle bearings             |
| **Torque wrench reading to 0.3 N·m**    | Differential bearing preload   |
| Precision straight edge                 | Head and block flatness        |
| Dial bore gauge, micrometer set         | Engine measurement             |
| Piston ring compressor, ring grinder    | Engine assembly                |
| Snap ring expander, pin punches         | Transaxle internals            |

☝️ Advice: A reader performing a straight swap onto a known-good, low-mileage
donor engine does not need a shop press. Phases 2 and 3 are optional.

### Toyota Special Service Tools

| SST                       | Name                                | Used for                              | Source   |
| :------------------------ | :---------------------------------- | :------------------------------------ | :------- |
| `09564-32011`             | Differential Preload Adaptor        | Differential bearing preload          | `[RM-Y]` |
| `09930-00010`             | Drive Shaft Nut Chisel              | **Un-staking the axle hub nut**       | `[RM-Y]` |
| `09011-12301`             | Socket Wrench 30 mm                 | Axle hub nut                          | `[RM-Y]` |
| `09520-01010`             | Drive Shaft Remover Attachment      | Axle removal                          | `[RM-Y]` |
| `09628-00011`/`09628-62011` | Ball Joint Puller                 | Ball joint and tie rod separation     | `[RM-Y]` |
| `09301-00110`             | Clutch Guide Tool                   | Clutch disc centring                  | `[RM-Y]` |
| `09023-00100`             | Union Nut Wrench 10 mm              | Brake and clutch line fittings        | `[RM-Y]` |
| `09817-16011`             | Back-up Light Switch Tool           | Back-up light switch                  | `[RM-Y]` |
| `09670-00010`             | Front Crossmember Guide Tool        | Subframe realignment on reinstall     | `[RM-Y]` |
| `09727-30021`             | Coil Spring Compressor              | Strut disassembly                     | `[RM-Y]` |
| **`09843-18040`**         | **Diagnosis Check Wire No.2**       | **The TC–CG jumper.** See Phase 9     | `[RM-Y]` |
| `09213-58013` + `09330-00021` | Crankshaft Pulley Holding Tool  | 2ZR-FE crank pulley, 190 N·m          | `[RM-C]` |
| `09205-16010`             | Cylinder Head Bolt Wrench           | Connecting rod caps                   | `[RM-C]` |
| `09224-00010`             | Oxygen Sensor Wrench                | A/F and O2 sensors                    | `[RM-C]` |
| `09228-06501`             | Oil Filter Wrench                   | Cartridge oil filter cap              | `[RM-C]` |

### Scan tool

☝️ Advice: **A bidirectional scan tool is not required for a US-donor
conversion.** The factory ABS bleed on this chassis is a conventional two-person
pedal bleed with no actuator-bleed step and no tester-driven mode, and ABS
trouble codes can be read and cleared by jumpering **TC and CG** at the DLC3 with
SST `09843-18040`, whereupon the skid control ECU blinks two-digit codes. Sensor
check mode uses **TS and CG**. A generic OBD-II reader is still needed to confirm
no engine codes and that readiness monitors have set.

⚠️ Attention: If you are fitting a matched immobilizer set from a Canadian donor,
read Phase 9 in full before connecting the battery.

---

(Page 5)

## Installation Precautions (For Installers)

<details>
  <summary>⚠️ Warning</summary>

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

<details>
  <summary>⚠️ Attention</summary>

- **Set every torque wrench from the N·m column of this document.** The XP90
  workshop manual contains printing errors in its imperial and kgf·cm columns —
  the front wheel hub nut appears as "912 ft·lbf", a water bypass joint as
  "90 N·m" where 9.0 is meant, and the 1NZ-FE flywheel as "38 ft·lbf" where
  49 N·m equals 36. Every imperial figure in this document has been recomputed
  from the N·m value rather than transcribed.
- **The two engines have different head bolt procedures.** The 1NZ-FE coming out
  is 29 N·m + 90° + 90°, on an **8 mm** bi-hexagon. The 2ZR-FE going in is
  49 N·m + 90° + 45°, on a **10 mm** bi-hexagon. Do not carry one across to the
  other.
- Photograph every connector, ground strap, and bracket before disconnecting it.
  The single most valuable artefact this community has lost is its photographs —
  one builder's phone died with roughly thirty build photos on it, and the
  Yaris-versus-xD ECU pinout spreadsheet that everyone cites is now a dead link.
- Label every harness branch as you free it.
- Apply dielectric grease to all engine connectors on reassembly.

</details>

<details>
  <summary>☝️ Advice</summary>

- Work in the order given. This document deliberately tears down the donor and
  assembles the complete powertrain **before** the Yaris comes off the road, so
  the vehicle remains driveable through the longest part of the job.
- Retain the donor's fuse box. It is the source of spare `CA2` connector
  terminals, which Phase 8 requires.
- Budget approximately **$5,400 in parts and $900 in tools** for a full
  conversion including both rebuilds, based on one completed and
  emissions-certified build. See the Budget section.

</details>

---

(Page 6)

## Table of Contents

- Cover, symbol tables, legality warning … 1
- Compatible vehicle models, donor selection … 2
- Parts manifest … 3
- Tool manifest, special service tools, scan tool … 4
- Installation precautions (for installers) … 5
- Table of contents … 6
- Phase 0 — Donor intake and the driveline fork … 7
- Phase 1 — Donor teardown and harvest … 8
- Phase 2 — Transaxle service (optional) … 9
- Phase 3 — Engine service (optional) … 10
- Phase 4 — Joining engine and transaxle … 11
- Phase 5 — Yaris teardown … 12
- Phase 6 — Manual conversion, interior … 13
- Phase 7 — Powertrain installation … 14
- Phase 8 — Cooling, fuel, and electrical … 15
- Phase 9 — Immobilizer … 16
- Phase 10 — Instrumentation and signals … 17
- Phase 11 — First start and commissioning … 18
- Post-installation checks and precautions … 19
- Budget … 19
- Appendix A — Wrong-engine quarantine … 20
- Appendix B — Bolt-on reference … 20
- References … 21

---

(Page 7)

## Work Procedure

### Phase 0 — Donor Intake and the Driveline Fork

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

#### (0.7) The driveline fork

This is the decision that cascades furthest through the build, and it must be
made before money is spent. The two transaxles are both C50, both bolt to the
2ZR-FE identically, and differ in their output stub splines.

⚠️ Warning: **The axle splines are not interchangeable.** The Yaris uses
**23-tooth, 24/48 DP** stubs. The xD, Celica, Matrix and Corolla use **20-tooth,
20/40 DP** stubs. Differential input bore is 27 mm on the Yaris and 28 mm on the
xD. The ring gears are not interchangeable either. Choose one lane and stay in
it. `[C]`

| Item                | Path A — Yaris-spec C50            | Path B — xD C50 (recommended)                     |
| :------------------ | :--------------------------------- | :------------------------------------------------ |
| Transaxle source    | 2007–2008 manual Yaris             | The donor xD                                      |
| Axles               | Reuse Yaris 23-tooth               | **xD CV shafts required** (larger trans outputs)  |
| Hubs and PCD        | Stock Yaris, 4×100                 | Yaris 4-lug hubs press into xD knuckles — **still 4×100** |
| Shift cables        | Yaris cables, **only with Yaris mounts** | **xD cables mandatory**                     |
| Gearing             | Stock                              | Taller 5th and a different final drive            |
| Speed sensor        | Already fitted                     | **Blank cap in the sensor location** — see 2.6    |
| Transaxle end cap   | `33102-12021` `[C]`                | `33102-52020` `[C]`                               |
| Differential        | Adequate to approximately 150 hp   | Stronger; more final-drive options available      |

☝️ Advice: **Path B is recommended, and 4×100 survives either way.** An earlier
generation of forum advice held that the xD driveline forces a 5×100 hub and
brake swap. It does not — one builder deliberately retained 4-lug for a stock
appearance by pressing Yaris 4-lug hubs into xD knuckles and running xD front
calipers on Yaris SE rotors. Path B is preferred because the mounts, shift
cables and gearing all agree with one another, and because the 2ZR-FE with
bolt-ons makes roughly the power the Yaris differential is rated for anyway.

☝️ Advice: Both transaxles share middle case `33111-12260` and bell housing
`31105-52060`. Only the end cap differs, because the xD transaxle mount also
bolts to the side of the case. `[C]`

---

(Page 8)

### Phase 1 — Donor Teardown and Harvest

⚠️ Warning: Have the A/C system discharged by a licensed technician before
beginning. Tape all open line ends immediately.

(1.1) Remove the battery. Drain the engine oil, transaxle oil, coolant, and
brake fluid.

☝️ Advice: Retain the donor's oil drain valve or plug.

(1.2) Harvest in the following order, applying the disposition shown. Items
marked **Keep** are required for the conversion; **Caution** items are
consumable or condition-dependent; **Dispose** items are not needed.

| Item                                   | Disposition |
| :------------------------------------- | :---------- |
| Heater hoses                           | Keep        |
| Fuel lines, rail to body               | Keep        |
| Engine wiring harness                  | **Keep**    |
| Engine and transaxle mounts, 6 pieces   | **Keep**    |
| Engine and transaxle assembly           | **Keep**    |
| ECM                                    | **Keep**    |
| Clutch master cylinder                 | Keep        |
| Brake reservoir and master cylinder    | Keep        |
| Floor shifter and shift cables         | Keep        |
| Exhaust manifold                       | **Keep**    |
| Exhaust midpipe                        | **Keep**    |
| Intake airbox, tube, MAF               | Keep        |
| Alternator                             | Keep        |
| A/C compressor and hoses               | Keep        |
| Coolant filler neck and radiator hoses | Keep        |
| **Fuse box**                           | **Keep** — source of `CA2` terminals |

⚠️ Warning: **Do not scrap the donor shell before the exhaust midpipe is
removed.** OEM xD midpipes are effectively unobtainable. One builder searched
more than twenty vendors and found a single unit at $450 plus shipping. `[C]`

☝️ Advice: The xD axle-back muffler section will bolt to the stock Yaris midpipe,
which is useful to know if you later want the Yaris exhaust back. `[C]`

(1.3) Remove the wiring harness with the ECM attached, as one assembly. Do not
cut it. Free the harness brackets from the strut tower and gearbox — these must
be transferred or improvised on the recipient car. `[C]`

(1.4) If the donor is a Canadian 08/2010–06/2014 xD, additionally harvest the
transponder key ECU, the ignition lock cylinder with its antenna coil, and both
keys, as a matched set. See Phase 9.

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

(Page 9)

### Phase 2 — Transaxle Service (Optional)

☝️ Advice: This phase is **optional**. It is mandatory on a high-mileage donor
and skippable on a known-good one. One builder found every synchro ring out of
specification on a 350,000-mile donor. Path B builders must complete at least
step (2.6).

<figure>
  <img src="/kb/toyota-2zr-fe-engine-and-manual-transaxle-swap-into-ncp91-yaris/figure-02.png" alt="C50 transaxle case split on the bench" />
  <figcaption>
    Figure 2: C50 case halves separated. Note the differential plate washer
    behind the tapered bearing race — this is the preload adjuster, and it is
    marked with a letter, not a part number.
  </figcaption>
</figure>

#### Rebuild parts

| Item                       | Part number `[C]`                                            |
| :------------------------- | :----------------------------------------------------------- |
| Synchro rings 1st–5th      | `33037-12040`, `33038-12020`, `33368-20090`, `33368-12210`, `33369-20040` |
| Output seals RH / LH       | `90311-35065` / `90311-35064`                                |
| Input shaft seal, bearing  | `90311-25028`, `90365-25021` (NSK VP25-4, 25 × 43.5 × 15 mm)  |
| Tapered bearings           | `90366-40094`, `90366-40097` — **one-time use**              |
| Snap rings                 | `90520-64002`, `90520-57002`                                 |
| Control shaft cover seal   | `90311-18013`                                                |
| Control shift gasket       | `33584-12060`                                                |
| Output shaft nut           | `90179-18005` — **staked, one-time use**                     |

☝️ Advice: The output seal is listed in one catalogue as `90311-34065`, but its
own link resolves to `90311-35065`, and the LH seal is `90311-35064`. Trust
`90311-35065`.

#### Torque specifications — C50

| Joint                                     | N·m | kgf·cm | ft·lbf / in·lbf | Notes                                | Source   |
| :---------------------------------------- | --: | -----: | :-------------- | :----------------------------------- | :------- |
| Case half × case                          |  29 |    300 | 22 ft·lbf       | See bolt-count note below            | `[RM-Y]` |
| Transmission case cover × case            |  18 |    185 | 13 ft·lbf       | ×9, FIPG `08826-00090`               | `[RM-Y]` |
| Bearing retainer rear × case              |  27 |    280 | 20 ft·lbf       | ×5, sealant-coated bolts             | `[RM-Y]` |
| **Output shaft rear set nut**             | 118 |  1,200 | 87 ft·lbf       | **NEW nut.** Adhesive 1344. Lock by engaging two gears, then **stake with a chisel** | `[RM-Y]` |
| **Differential ring gear × diff case**    |  77 |    790 | 57 ft·lbf       | **8 bolts. Heat ring gear to 90–110 °C (194–230 °F)**, align matchmarks, install quickly | `[RM-Y]` |
| Bearing lock plate × transaxle case       |  11 |    115 | 8 ft·lbf        |                                      | `[RM-Y]` |
| Control shaft cover × case                |  20 |    200 | 15 ft·lbf       | ×4                                   | `[RM-Y]` |
| Gear shift fork No.1/2/3 × shaft          |  16 |    160 | 12 ft·lbf       | Lock bolt, Adhesive 1344             | `[RM-Y]` |
| Reverse idler gear shaft bolt             |  29 |    300 | 22 ft·lbf       |                                      | `[RM-Y]` |
| Lock ball assembly No.1/No.2              |  29 |    300 | 22 ft·lbf       |                                      | `[RM-Y]` |
| Shift detent ball plug                    |  22 |    224 | 16 ft·lbf       |                                      | `[RM-Y]` |
| Reverse restrict pin plug                 |  13 |    130 | 10 ft·lbf       | Slotted pin drive-in depth 15.5–16.5 mm | `[RM-Y]` |
| Reverse shift arm bracket                 |  17 |    175 | 13 ft·lbf       |                                      | `[RM-Y]` |
| Oil receiver pipe No.1/No.2               |  17 |    175 | 13 ft·lbf       |                                      | `[RM-Y]` |
| Back-up light switch                      |  40 |    410 | 30 ft·lbf       | **New gasket.** SST `09817-16011`    | `[RM-Y]` |
| **Drain plug**                            |  39 |    400 | 29 ft·lbf       | **New gasket**                       | `[RM-Y]` |
| **Filler plug**                           |  39 |    400 | 29 ft·lbf       | **New gasket**                       | `[RM-Y]` |

⚠️ Attention: The manual contradicts itself on one bolt count. The differential
preload procedure says to install the transmission case with **16 bolts**, while
the components illustration annotates the same 29 N·m joint as **×13**. The
torque is 29 N·m either way — count your own fasteners.

#### (2.5) Differential bearing preload

| Item                                       | Value                                                                 | Source   |
| :----------------------------------------- | :-------------------------------------------------------------------- | :------- |
| Preload at starting, **new** bearing       | **0.78–1.57 N·m** (7.95–16.0 kgf·cm, **6.9–13.89 in·lbf**)            | `[RM-Y]` |
| Preload at starting, **used** bearing      | **0.49–0.98 N·m** (5.0–10.0 kgf·cm, 4.34–8.67 in·lbf)                 | `[RM-Y]` |
| Measurement tool                           | SST `09564-32011` Differential Preload Adaptor                        | `[RM-Y]` |
| Sensitivity                                | Preload changes approximately **0.3–0.4 N·m per 0.05 mm** of washer   | `[RM-Y]` |

Procedure: coat the differential case with gear oil, install it into the front
transaxle case, install the transmission case with its bolts at 29 N·m, turn the
differential assembly left and right two or three times to settle the bearings,
then measure.

⚠️ Attention: **The adjuster is a lettered plate washer, not a part-numbered
shim.** Community sources circulate a part-number range for this; that range
does not appear in the factory manual. Nineteen steps are available:

| Mark | mm     | Mark | mm     | Mark | mm     | Mark | mm     |
| :--- | :----- | :--- | :----- | :--- | :----- | :--- | :----- |
| AA   | 2.10   | GG   | 2.40   | MM   | 2.65   | RR   | 2.85   |
| BB   | 2.15   | HH   | 2.45   | NN   | 2.70   | SS   | 2.90   |
| CC   | 2.20   | JJ   | 2.50   | PP   | 2.75   | TT   | 2.95   |
| DD   | 2.25   | KK   | 2.55   | QQ   | 2.80   | UU   | 3.00   |
| EE   | 2.30   | LL   | 2.60   |      |        |      |        |
| FF   | 2.35   |      |        |      |        |      |        |

☝️ Advice: One builder reported moving from `DD` to `EE` — a single 0.05 mm step
— to bring a rebuilt differential into specification. That is exactly this scale,
which is a useful confirmation that the letter marks are what you will find
stamped on the washer.

#### (2.6) Speedometer sensor — Path B and non-ABS cars

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
the cap and fit the sensor into that location on the differential. This is far
simpler than the case-splitting procedure that circulates in forum threads, which
is only necessary if the driven gear is also absent.

| Item                        | Part number `[C]`                             |
| :-------------------------- | :-------------------------------------------- |
| Speedometer sensor          | `83181-12020`                                 |
| Sensor connector            | `90980-11143`                                 |
| **Speedometer driven gear** | **`33403-19455` (30 t) or `33403-19465` (31 t)** |
| Shaft sleeve clip           | `90468-12005`                                 |

☝️ Advice: **The 30-tooth versus 31-tooth driven gear is a speedometer
calibration lever.** This is not documented anywhere in the community record, and
it is very likely the answer to the roughly 2 mph optimistic error one builder
reported and never resolved. Choose deliberately, and see Phase 10.

#### (2.7) Optional gearing

☝️ Advice: If the transaxle is open anyway, this is the cheapest moment to change
5th gear or fit a limited-slip differential. See Appendix B. Note that a helical
LSD for this case is compatible with **20-spline** axles only, which is a further
argument for Path B.

---

(Page 10)

### Phase 3 — Engine Service (Optional)

☝️ Advice: This phase is **optional**. Skip it on a low-mileage donor with good
compression and clean oil pressure.

#### Rebuild parts

| Item                     | Part number `[C]`                    |
| :----------------------- | :----------------------------------- |
| Piston rings             | Enginetech `S80514-STD`              |
| Main bearings            | Enginetech `BC1048`                  |
| Rod bearings             | Enginetech `BB1059`                  |
| Thrust bearings          | Enginetech `TW185`                   |
| Full gasket set          | DNJ `FGS9028`                        |
| Timing chain kit         | DNJ `TK928` — chain, guides, tensioner |
| Valves, intake and exhaust | DNJ `VK16928`                      |
| Hydraulic lash adjusters | DNJ `LFK16312`, set of 16            |
| **Cylinder head bolts**  | DNJ `HBK928` — **one-time use**      |
| Oil filter housing       | `15620-37010`                        |

#### ⚠️ The cylinder head bolt procedure

⚠️ Warning: **2ZR-FE cylinder head bolts are 49 N·m (500 kgf·cm, 36 ft·lbf),
then +90°, then +45°.** The paint mark finishes at **135°**. Use a **10 mm
bi-hexagon** wrench. Oil the threads and the underside of each head.

⚠️ Warning: **The widely-circulated "36 ft·lbf plus 90° plus 90°" is wrong for
this engine.** That is 1ZZ-FE and 2AZ-FE carryover. Three independent repair
manual trees — Corolla, Scion xD, and the sibling 2ZR-FAE — all state +90° then
+45°, and the manual's own self-check note confirms it arithmetically: the paint
mark ends at 135°, and 90 + 45 = 135. Following the incorrect figure stretches
ten torque-to-yield bolts 45° beyond specification on a fresh head gasket.

⚠️ Attention: The 1NZ-FE being removed genuinely **is** 29 N·m + 90° + 90°, ending
at 180°, on an **8 mm** bi-hexagon. Different angle, different bit.

☝️ Advice: The repair manual gives the tightening **sequence** as an illustration
only, not as text, and warns that head warpage or cracking can result from
removing the bolts in the wrong order. Obtain the illustration; do not improvise
the order.

☝️ Advice: The cylinder head bolts are the **only** bi-hexagon fastener on the
2ZR-FE. No other fastener on this engine is 12-point.

#### Torque specifications — 2ZR-FE long block

| Fastener                              |  N·m | ft·lbf / in·lbf | Stages and notes                                          | Source   |
| :------------------------------------ | ---: | :-------------- | :-------------------------------------------------------- | :------- |
| **Cylinder head bolts (10)**          |   49 | 36 ft·lbf       | **+90° → +45°**, mark at 135°. 10 mm bi-hex. **Replace**  | `[RM-C]` |
| **Crankshaft pulley bolt**            |  190 | **140 ft·lbf**  | SST `09213-58013` + `09330-00021` to hold                 | `[RM-C]` |
| Main bearing cap bolts (10)           |   40 | 30 ft·lbf       | **+90°**, numerical sequence, mark at 90°                 | `[RM-C]` |
| Connecting rod cap bolts              |   20 | 15 ft·lbf       | **+90°**, SST `09205-16010`, alternately in steps         | `[RM-C]` |
| Camshaft timing gear, **intake** VVT-i |   54 | 40 ft·lbf       | ⚠️ **Never turn the gear in the retard direction.** Gear-to-flange clearance 0.1–0.4 mm before final torque | `[RM-C]` |
| Camshaft timing gear, **exhaust**     |   54 | 40 ft·lbf       | Align key groove and straight pin                         | `[RM-C]` |
| Camshaft bearing cap × housing (10)   |   16 | 12 ft·lbf       | Illustrated order                                         | `[RM-C]` |
| Camshaft housing × cylinder head      |   27 | 20 ft·lbf       |                                                           | `[RM-C]` |
| Timing chain cover, bolts A and E     |   26 | 19 ft·lbf       | 26 bolts total                                            | `[RM-C]` |
| Timing chain cover, bolts B and C     |   51 | 38 ft·lbf       |                                                           | `[RM-C]` |
| Timing chain cover, bolt D            |   10 | 89 in·lbf       |                                                           | `[RM-C]` |
| No.1 chain tensioner, 2 nuts          |   10 | 89 in·lbf       | **New gasket and new bracket**                            | `[RM-C]` |
| No.1 chain vibration damper, 2 bolts  |   21 | 15 ft·lbf       | Install before the chain                                  | `[RM-C]` |
| Oil pan No.2, lower steel             |   10 | 89 in·lbf       | 10 bolts + 2 nuts                                         | `[RM-C]` |
| Stiffening crankcase, upper alloy     |   21 | 15 ft·lbf       |                                                           | `[RM-C]` |
| **Oil pan drain plug**                |   37 | 27 ft·lbf       | **New crush washer**                                      | `[RM-C]` |
| **Oil filter cartridge cap**          |   25 | 18 ft·lbf       | ±5 N·m. SST `09228-06501`. New O-ring, oiled. Loosen 4 turns to drain | `[RM-C]` |
| Oil pump × block                      |   21 | 15 ft·lbf       |                                                           | `[RM-C]` |
| Oil pump cover                        |  8.8 | 78 in·lbf       |                                                           | `[RM-C]` |
| Oil pump drive shaft gear             |   28 | 21 ft·lbf       | The 2ZR-FE drives its oil pump from a separate No.2 chain | `[RM-C]` |

⚠️ Attention: **Toyota publishes no torque for the cylinder head cover.** The
repair manual says only to install it with 13 bolts. This is an absence, not an
omission in this document. If a figure is wanted, an aftermarket manual gives
84 in·lbf `[C]`.

☝️ Advice: **Valve clearance is not applicable.** The 2ZR-FE uses hydraulic lash
adjusters — the same units as the 2GR-FE V6. There is no specification and no
adjustment. The 1NZ-FE being removed does require adjustment, at 0.15–0.25 mm
intake and 0.25–0.35 mm exhaust, cold `[RM-Y]`.

#### Torque specifications — intake, exhaust, ignition, sensors

| Fastener                            |  N·m | ft·lbf / in·lbf | Notes                                | Source   |
| :---------------------------------- | ---: | :-------------- | :----------------------------------- | :------- |
| Intake manifold and stay            |   28 | 21 ft·lbf       | 4 bolts, 2 nuts, **new gasket**      | `[RM-C]` |
| Intake manifold stud bolts (2)      |  5.0 | 44 in·lbf       | **Torx E6**                          | `[RM-C]` |
| Throttle body                       |   10 | 89 in·lbf       | 2 bolts, 2 nuts, new gasket          | `[RM-C]` |
| **Exhaust manifold × head**         |   21 | 16 ft·lbf       | **5 nuts**                           | `[RM-C]` |
| Manifold stay, exhaust, 3 bolts     |   43 | 32 ft·lbf       |                                      | `[RM-C]` |
| Heat insulator No.1 (4) / No.2 (3)  |   12 | 9 ft·lbf        |                                      | `[RM-C]` |
| Spark plugs                         |   20 | 15 ft·lbf       | 14 mm long-reach                     | `[RM-C]` |
| Ignition coils (4)                  |   10 | 89 in·lbf       |                                      | `[RM-C]` |
| Camshaft timing OCV, intake and exhaust | 10 | 89 in·lbf     | One bolt each                        | `[RM-C]` |
| Oil pressure switch                 |   15 | 11 ft·lbf       | 24 mm deep socket. Adhesive 1344 on the last 2–3 threads. ⚠️ **Do not start the engine for one hour** | `[RM-C]` |
| Crankshaft position sensor          |   10 | 89 in·lbf       | Oil the O-ring                       | `[RM-C]` |
| Camshaft position sensor (**×2**)   |   10 | 89 in·lbf       | Both located in the cam cover        | `[RM-C]` |
| **A/F sensor, upstream**            |   44 | 32 ft·lbf       | **40 N·m** if using SST `09224-00010` on a 300 mm fulcrum wrench, SST parallel to the wrench | `[RM-C]` |
| Heated O2 sensor, downstream        |   44 | 32 ft·lbf       | Same SST alternative, 40 N·m         | `[RM-C]` |
| Knock sensor                        |   20 | 15 ft·lbf       | Orientation per illustration         | `[RM-C]` |

#### Torque specifications — cooling and accessories

| Fastener                                |  N·m | ft·lbf / in·lbf | Notes                       | Source   |
| :-------------------------------------- | ---: | :-------------- | :-------------------------- | :------- |
| Water pump × **timing chain cover**, bolt A | 26 | 19 ft·lbf     | 5 bolts total               | `[RM-C]` |
| Water pump, bolt B                      |   24 | 18 ft·lbf       |                             | `[RM-C]` |
| Water inlet / thermostat housing, 2 nuts |  10 | 89 in·lbf       | ⚠️ **Jiggle valve up, ±10°** | `[RM-C]` |
| Alternator bolt A, adjusting-lock       |   19 | 14 ft·lbf       | 12 mm head                  | `[RM-C]` |
| Alternator bolt B, pivot                |   43 | 32 ft·lbf       | 14 mm head                  | `[RM-C]` |
| Belt bolt D, check torque               |   19 | 14 ft·lbf       | Separate verification step  | `[RM-C]` |
| Alternator harness bracket              |  8.4 | 74 in·lbf       |                             | `[RM-C]` |
| **Starter × block**                     |   37 | 27 ft·lbf       | Confirmed in the xD, Corolla **and** Yaris manuals | `[RM-C]` `[RM-Y]` |
| Engine hanger × cylinder head           |   43 | 32 ft·lbf       |                             | `[RM-C]` |

☝️ Advice: **The 2ZR-FE uses a 5-rib accessory belt; the 1NZ-FE uses 3-rib.** Use
the 2ZR-FE's own accessories. The idea of swapping pulleys to retain the 1NZ
alternator and compressor has been floated repeatedly in the community and never
confirmed to work.

☝️ Advice: The Yaris has **electric power steering**. There is no power steering
pump, no hoses, and nothing to do.

☝️ Advice: Apply silicone grease to the dipstick O-ring. The 2ZR-FE dipstick
corrodes at the top of the tube and seizes. `[C]`

⚠️ Attention: One unresolved community problem — repeated failure of
overrunning-alternator-decoupler pulleys within weeks of installation, on both
used OEM and aftermarket units. No fix has been published. `[C]`

#### Fluids

| Fluid                | Specification                              | Capacity                              | Source   |
| :------------------- | :----------------------------------------- | :------------------------------------ | :------- |
| Engine oil           | 0W-20 preferred; 5W-20 acceptable 2009–2010 | **4.2 ℓ (4.4 US qt)** with filter; 3.9 ℓ (4.1 US qt) without | `[RM-C]` |
| Coolant              | Toyota Super Long Life Coolant, pre-mixed  | **4.8 ℓ (5.1 US qt)** M/T             | `[RM-Y]` |
| Transaxle gear oil   | **API GL-4, SAE 75W**                      | **1.9 ℓ (2.0 US qt)**                 | `[RM-Y]` |
| Brake and clutch fluid | SAE J1703 or FMVSS No. 116 **DOT 3**     | —                                     | `[RM-Y]` |
| A/C refrigerant      | R134a                                      | One 12 oz can `[C]`                   | `[C]`    |
| Drive shaft joint grease | —                                      | 125–135 g (4.4–4.8 oz) each joint     | `[RM-Y]` |

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

(Page 11)

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

| Joint                          |  N·m | kgf·cm | ft·lbf | Notes                                          | Source   |
| :----------------------------- | ---: | -----: | :----- | :--------------------------------------------- | :------- |
| **Clutch cover × flywheel**    |   19 |    195 | 14     | **6 bolts.** Begin at the bolt nearest the knock pin and tighten evenly | `[RM-Y]` |
| Release fork support × transaxle |  37 |    375 | 27     |                                                | `[RM-Y]` |

⚠️ Warning: **Check the clutch disc orientation.** One builder installed his
backwards and had to remove the transaxle again — the metal centre of the disc
contacted the flywheel bolts before the friction material reached the flywheel.
The parts were reusable, the afternoon was not. `[C]`

☝️ Advice: Use SST `09301-00110` Clutch Guide Tool to centre the disc. If it is
not to hand, a **15 mm deep socket with two wraps of electrical tape** has been
used successfully as a substitute. `[C]`

(4.3) Mate the transaxle to the engine. Align the input shaft to the clutch disc
first, then engage the dowels.

| Joint                            |  N·m | kgf·cm | ft·lbf | Notes      | Source   |
| :------------------------------- | ---: | -----: | :----- | :--------- | :------- |
| **Transaxle assembly × engine**  |   33 |    336 | **24** | **7 bolts** | `[RM-Y]` |

⚠️ Warning: **Community sources give this joint as 22 ft·lbf. That is wrong — it
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

(Page 12)

### Phase 5 — Yaris Teardown

☝️ Advice: Only now does the recipient vehicle come off the road.

<figure>
  <img src="/kb/toyota-2zr-fe-engine-and-manual-transaxle-swap-into-ncp91-yaris/figure-04.png" alt="NCP91 with front clip removed" />
  <figcaption>
    Figure 4: Front clip removed and subframe partially lowered. Every source
    that has completed this conversion recommends this approach.
  </figcaption>
</figure>

⚠️ Warning: Have the A/C system discharged by a licensed technician first.

(5.1) Disconnect and remove the battery. Drain the engine oil, automatic
transaxle fluid and coolant.

(5.2) Remove the front clip and partially lower the subframe. The engine and
transaxle come out the front as a unit.

☝️ Advice: Remove the front brackets and bracing **before** attempting to pull
the 1NZ-FE. This is the strongest single recommendation from a builder who did
it the other way first. `[C]`

(5.3) Harvest and dispose as follows.

| Item                                       | Disposition |
| :----------------------------------------- | :---------- |
| Wheels, wipers, cowl                       | Keep        |
| Intake, air cleaner and bracket            | Keep        |
| Battery carrier                            | Keep        |
| Bumper, headlights, front crash bar        | Keep        |
| **Radiator**                               | **Keep**    |
| A/C condenser and lines                    | Keep        |
| Radiator support bracket                   | Keep        |
| Radiator hoses, heater hoses               | Caution     |
| Accessory belt                             | Caution     |
| Fuel lines                                 | Keep        |
| **Brake master cylinder, lines, booster**  | **Keep** — booster reused, master cylinder replaced |
| Engine wiring harness                      | **Dispose** |
| CV axles                                   | **Dispose** — unless Path A |
| Engine mounts                              | **Dispose** |
| ECM                                        | **Dispose** |
| 1NZ-FE engine and U340E transaxle           | **Dispose** |

(5.4) Remove the axles. Torque values for reinstallation are in Phase 7.

| Joint                                    |  N·m | kgf·cm | ft·lbf / in·lbf | Notes                                       | Source   |
| :--------------------------------------- | ---: | -----: | :-------------- | :------------------------------------------ | :------- |
| **Front axle hub nut**                   |  216 |  2,203 | **159 ft·lbf**  | ⚠️ **NEW nut. Stake with chisel and hammer.** 30 mm socket. Un-stake on removal with SST `09930-00010`, **completely**, before turning | `[RM-Y]` |
| **Lower ball joint × knuckle**           |   98 |  1,000 | 72 ft·lbf       | **New castle nut and new clip.** Up to a further 60° to align the holes | `[RM-Y]` |
| Tie rod end × knuckle                    |   49 |    500 | 36 ft·lbf       | **New castle nut and new cotter pin.** Up to +60° | `[RM-Y]` |
| Tie rod end **lock nut**                 |   75 |    760 | 55 ft·lbf       | Distinct from the joint above               | `[RM-Y]` |
| Stabiliser link × strut                  |   74 |    755 | 55 ft·lbf       | Hold the stud with a 6 mm hex if it spins   | `[RM-Y]` |
| Strut × knuckle                          |  164 |  1,672 | 121 ft·lbf      |                                             | `[RM-Y]` |
| Strut top mount × body                   |   55 |    561 | 41 ft·lbf       |                                             | `[RM-Y]` |
| ABS speed sensor × knuckle                |  8.5 |     87 | 75 in·lbf       | Keep the tip clean. **Do not rotate from its original angle** | `[RM-Y]` |
| Front caliper × knuckle                  |  107 |  1,089 | 79 ft·lbf       |                                             | `[RM-Y]` |
| Wheel lug nuts                           |  103 |  1,050 | 76 ft·lbf       | Front and rear identical                    | `[RM-Y]` |

(5.5) Subframe fasteners, for reinstallation.

| Joint                              |  N·m | kgf·cm | ft·lbf | Source   |
| :--------------------------------- | ---: | -----: | :----- | :------- |
| **Crossmember × body, bolt A**     |   70 |    714 | 52     | `[RM-Y]` |
| **Crossmember × body, bolt B**     |  160 |  1,631 | 118    | `[RM-Y]` |
| **Crossmember × body, bolt C**     |   95 |    969 | 70     | `[RM-Y]` |
| Power steering gear × crossmember  |   96 |    979 | 71     | `[RM-Y]` |
| Lower arm × crossmember             |  137 |  1,397 | 101    | `[RM-Y]` |
| Lower arm × body                    |  160 |  1,631 | 118    | `[RM-Y]` |
| Stabiliser bracket × crossmember    |   47 |    479 | 35     | **Sequence: snug bolt A, torque B, then A** `[RM-Y]` |
| Steering sliding yoke, both joints  |   28 |    290 | 21     | `[RM-Y]` |

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

(Page 13)

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

⚠️ Warning: **Automatic cars have no firewall holes for the clutch master
cylinder.** Use the manual pedal assembly's own bracket as a template, align it
with the top bolt hole, trace the holes, and drill. Cobalt drill bits and a
knockout punch set are the tools reported to work. `[C]`

#### ⚠️ Blocker 2 — the brake booster must come out

⚠️ Warning: **Most brake line connections must be disconnected and the brake
booster removed** to gain enough room to install the clutch master cylinder and
its hardline. The booster itself is **not** replaced — it comes out and goes
back in. `[C]`

#### ⚠️ Blocker 3 — the brake master cylinder is different

⚠️ Warning: **A manual-specification brake master cylinder is required.** On the
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

| Joint                                        |  N·m | kgf·cm | ft·lbf / in·lbf | Notes                          | Source   |
| :------------------------------------------- | ---: | -----: | :-------------- | :----------------------------- | :------- |
| **Clutch pedal support × body**              |   24 |    241 | 18 ft·lbf       |                                | `[RM-Y]` |
| **Clutch master cylinder × clutch pedal support** |  9.0 |     92 | 80 in·lbf   |                                | `[RM-Y]` |
| Clutch pedal sub-assembly × support          |   37 |    375 | 27 ft·lbf       |                                | `[RM-Y]` |
| **Clutch start switch × support**            |   16 |    160 | 12 ft·lbf       |                                | `[RM-Y]` |
| Clutch pedal stopper bolt lock nut           |   16 |    160 | 12 ft·lbf       |                                | `[RM-Y]` |
| Clutch master push rod clevis lock nut       |   12 |    120 | 9 ft·lbf        |                                | `[RM-Y]` |
| Clutch master → flexible hose tube           |   15 |    153 | 11 ft·lbf       |                                | `[RM-Y]` |
| **Brake booster, 4 nuts**                    |  9.0 |     92 | 80 in·lbf       | **New gasket**                 | `[RM-Y]` |
| **Brake master cylinder × booster**          |   13 |    127 | 10 ft·lbf       | 2 nuts                         | `[RM-Y]` |
| **Brake tube × master cylinder**, all unions |   14 |    143 | 10 ft·lbf       | ⚠️ **14 N·m WITH SST `09023-00100`; 15 N·m WITHOUT.** Use a 300 mm fulcrum wrench with the SST parallel to it | `[RM-Y]` |
| Push rod lock nut × booster push rod         |   26 |    265 | 19 ft·lbf       | Set when adjusting pedal height | `[RM-Y]` |
| Brake pedal × pedal support                  |   37 |    375 | 27 ft·lbf       |                                | `[RM-Y]` |
| Pedal support × instrument panel reinforcement |  24 |    241 | 18 ft·lbf     |                                | `[RM-Y]` |
| Piston stopper bolt × master cylinder body   |   10 |    102 | 7 ft·lbf        |                                | `[RM-Y]` |
| Front flexible hose × caliper, banjo         |   30 |    310 | 22 ft·lbf       |                                | `[RM-Y]` |
| Front disc brake bleeder plug                |  8.3 |     85 | 73 in·lbf       |                                | `[RM-Y]` |
| Proportioning valve × bracket / bracket × body | 5.4 / 19 | 55 / 194 | 48 in·lbf / 14 ft·lbf | Non-ABS cars           | `[RM-Y]` |

#### (6.5) Clutch hydraulic line and slave cylinder

| Joint                                     |  N·m | kgf·cm | ft·lbf / in·lbf | Notes                | Source   |
| :---------------------------------------- | ---: | -----: | :-------------- | :------------------- | :------- |
| **Clutch release cylinder × transaxle case** | 12 | 120 / 122 | 9 ft·lbf      | 4 bolts. ⚠️ **Bolt A is 120 kgf·cm, bolt B is 122** | `[RM-Y]` |
| Clutch pipe × transmission case           |   12 |    122 | 9 ft·lbf        |                      | `[RM-Y]` |
| Release cylinder bleeder plug             |  8.3 |     85 | 73 in·lbf       |                      | `[RM-Y]` |
| Release cylinder ↔ flexible hose tube     |   15 |    153 | 11 ft·lbf       |                      | `[RM-Y]` |

⚠️ Warning: **Buy the slave cylinder new. Do not rebuild it.** One builder's
rebuilt unit failed at approximately 150 miles — the piston seal let go and he
lost the clutch suddenly in a parking lot. New units are inexpensive. `[C]`

#### (6.6) Shift cables and floor shifter

Remove the exhaust heat shield, then the three 10 mm nuts on the cable
pass-through seal. Pull the automatic cable out from below, feed the two manual
cables in, and reseal. The floor shifter is four 12 mm bolts either way. `[C]`

| Joint                                  |  N·m | kgf·cm | ft·lbf / in·lbf | Notes | Source   |
| :------------------------------------- | ---: | -----: | :-------------- | :---- | :------- |
| Shift cable bracket × transaxle case   |   25 |    255 | 18 ft·lbf       | ×2    | `[RM-Y]` |
| Transmission control cable × body      |  5.0 |     51 | 44 in·lbf       |       | `[RM-Y]` |
| Floor shift lever assembly × body      |   12 |    122 | 9 ft·lbf        |       | `[RM-Y]` |
| Selecting bell crank × case, bolt      |   25 |    250 | 18 ft·lbf       | ×2    | `[RM-Y]` |
| Selecting bell crank × case, nut       |   12 |    120 | 9 ft·lbf        |       | `[RM-Y]` |
| Shift lever damper × shaft             |   12 |    120 | 9 ft·lbf        |       | `[RM-Y]` |

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

| Item                                | Specification            | Source   |
| :---------------------------------- | :----------------------- | :------- |
| Pedal height from dash panel        | **133.0–143.0 mm**       | `[RM-Y]` |
| Pedal free play                     | **5.0–15.0 mm**          | `[RM-Y]` |
| Push rod play at pedal top          | **1.0–5.0 mm**           | `[RM-Y]` |
| Release point                       | **≥25 mm** from the end of full stroke | `[RM-Y]` |

(6.9) Fill and bleed the brake system, then the clutch system.

☝️ Advice: **No scan tool is required to bleed the brakes on this chassis.** The
factory procedure is the conventional two-person pedal bleed — bleed the master
cylinder, then bleed the brake lines — and it is referenced identically from the
ABS-equipped procedures. There is no actuator bleed step and no tester-driven
bleed mode anywhere in the brake chapters. `[RM-Y]`

---

(Page 14)

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

#### Mount part numbers

| Position                      | Part number `[C]` |
| :---------------------------- | :---------------- |
| RH engine-side bracket        | `12315-37040`     |
| RH engine stay                | `12317-37010`     |
| Dogbone bracket               | `12313-37010`     |
| Dogbone isolator              | `12363-37010`     |
| Gearbox-side bracket          | `12325-37100`     |
| Gearbox-side isolator         | `12372-37141`     |
| Gearbox-side damper           | `12351-37100`     |
| Mount bolts, stud and nuts    | `91552-L1240`     |

⚠️ Warning: **Do not use Corolla/Matrix/Vibe bracket `12315-37030`.** The engine
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

(7.2) Lower the powertrain in. Fit the RH engine mount and the dogbone, then fit
the **gearbox-side mount last**.

☝️ Advice: Remove the gearbox-side mount and bracket before installation. The
larger engine leaves insufficient room to line these up while they are already
attached to the transaxle. `[C]`

☝️ Advice: The dogbone should be **test fitted first**, before committing to the
rest of the arrangement. `[C]`

#### Mount torque specifications

| Joint                                            |  N·m | kgf·cm | ft·lbf | Notes                            | Source   |
| :----------------------------------------------- | ---: | -----: | :----- | :------------------------------- | :------- |
| Transverse engine mounting **bracket** × transmission case cover |  64 |    653 | 47     | 4 bolts                          | `[RM-Y]` |
| Transverse engine mounting **insulator** × body  |   52 |    530 | 38     | 5 bolts                          | `[RM-Y]` |
| Mounting bracket LH × isolator LH, bolt and nut  |   52 |    530 | 38     |                                  | `[RM-Y]` |
| Transverse engine mounting **control bracket** × transaxle case | 39 | 398 | 29 |                              | `[RM-Y]` |
| **Engine mounting × engine moving control rod (dogbone)** | 120 | 1,224 | **89** |                            | `[RM-Y]` |
| Dogbone, transaxle side (xD)                     |  100 |  1,020 | 74     | ☝️ *Temporarily tighten the transaxle side, then torque* | `[RM-C]` |
| Dogbone, second bolt at crossmember (xD)         |  120 |  1,224 | 89     | ⚠️ **Two different specs on the same part** | `[RM-C]` |
| RH mounting bracket (xD)                         |   51 |    520 | 38     |                                  | `[RM-C]` |
| Engine mounting stay (xD)                        |   26 |    265 | 19     |                                  | `[RM-C]` |
| Battery carrier × body                           |   17 |    175 | 13     | 5 bolts                          | `[RM-Y]` |
| Air cleaner bracket × body                       |   19 |    194 | 14     | 2 bolts                          | `[RM-Y]` |
| Wire harness × transmission case                 |   26 |    260 | 19     |                                  | `[RM-Y]` |

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

(7.3) Fit the CV axles. Torque the hub nuts to **216 N·m (159 ft·lbf)** with
**new** nuts, and **stake them** `[RM-Y]`.

⚠️ Attention: **Watch for front axle bind.** One builder found the front left
axle fully compressed and oscillating about a quarter inch on hard right turns.
The axle was too long for the new engine position. The fix reported is a **1998
Toyota Tercel non-ABS driver-side axle** — same spline count, roughly 0.5 to
1 inch shorter. This problem surfaced seven years into the main build thread, so
check for it deliberately rather than waiting to hear a clunk. `[C]`

(7.4) Fit the exhaust.

⚠️ Warning: **The 2ZR-FE manifold flange will not mate to the Yaris downpipe.**
The flange is larger and the bolt spacing is wider. Pipe inner diameter is 46 mm
against the Yaris's 40 mm. `[C]`

| Option                                  | Assessment                                              |
| :-------------------------------------- | :------------------------------------------------------ |
| **Donor xD midpipe** (recommended)      | Comes free with the donor car. ⚠️ Remove it before the shell is scrapped — replacements are effectively unobtainable |
| Weld a larger flange to the Yaris pipe  | Cheap and repeatable. One shop welded a 2.25" flange with a single cat section for $208 `[C]` |
| Full custom fabrication                 | Most flexible, most expensive                           |
| Long-tube header                        | See Appendix B. Requires O2 sensor extension, a firewall indent for A/F sensor clearance, and a flex joint |

| Joint                              |  N·m | ft·lbf | Notes                                        | Source   |
| :--------------------------------- | ---: | :----- | :------------------------------------------- | :------- |
| Front exhaust pipe × manifold      |   43 | 32     | 2 bolts and **2 compression springs**, ball joint | `[RM-C]` |
| Tail pipe × front pipe             |   43 | 32     | The US system is 2-piece; there is no separate mid pipe | `[RM-C]` |

☝️ Advice: Apply anti-seize to the exhaust manifold, intake manifold and fuel
rail bolts, and silicone lubricant to hose metal fittings. `[C]`

(7.5) Fit the shift cables and adjust. Torques in (6.6).

---

(Page 15)

### Phase 8 — Cooling, Fuel, and Electrical

#### (8.1) Cooling

☝️ Advice: **The Yaris radiator and fans are retained.** They are adequate,
including for track use. The Corolla, xD and Yaris all use the same size
radiator — only the hose routing and fans differ. **No fan rewiring is
required.** `[C]`

What changes is the plumbing.

| Item                                        | Part number `[C]` | Notes                                       |
| :------------------------------------------ | :---------------- | :------------------------------------------ |
| **Coolant filler neck**                     | `16502-37010`     | ⚠️ **Bolts to the radiator**, not to the throttle body as on the Yaris |
| Upper long hose, block to filler            | `16571-37090`     | The Yaris upper hose is **too short and kinks** |
| Lower hose, radiator to block               | `16572-37080`     |                                             |
| Upper short hose, radiator to filler        | `16573-37030`     |                                             |
| Radiator hose clamps                        | `90467-33006` ×6  | Plus `90467-34004`, `90467-37005` at the outlets |
| Heater hoses, short and long                | `87245-52151`, `87245-52141` | Yaris heater hoses kink               |
| Heater hose clamps                          | `96136-42501`     |                                             |

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

⚠️ Warning: Triple-check every fitting and bolt length before recharging. See the
warning on Page 5.

#### (8.4) Electrical — the four pins that differ

This is the heart of the conversion, and the good news is that it is small.

☝️ Advice: **Use the xD ECM and the xD engine harness as a matched pair, matched
to your transaxle type.** Do not mix. The xD ECU pinout is approximately 99%
incompatible with the Yaris. The engine-bay connector is `C20` on the Yaris and
`C19` on the xD. `[C]`

With a matched xD ECM and harness, every pin matches the `A21` connector on the
Yaris body harness and the two fusebox connectors `CA1` and `CA2`. Fusebox
orientation is **`CA2` top left, `CA1` top right**. Exactly four pins deviate:

| Pin           | Signal          | Resolution                                                    |
| :------------ | :-------------- | :------------------------------------------------------------ |
| **`CA2` pin 9** | MAF sensor power | ⚠️ **No supporting pin exists in the Yaris fusebox.** See below |
| **`CA2` pins 11, 12, 13** | Speedometer | Move the speed sensor wires to the same positions in the xD `CA2` plug |

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

1. **Fit the speed sensor to the transaxle** — see (2.6). Simplest.
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

(Page 16)

### Phase 9 — Immobilizer

This is the phase with the worst reputation in the community record, and most of
that reputation is misplaced. Read it in full before connecting the battery.

<details>
  <summary>⚠️ Warning — read before connecting the battery</summary>

**Do not turn the ignition switch from ON to OFF 20 times or more before the
ECU–ECM communication ID is set.** If that many cycles are likely, **disconnect
the negative battery terminal cable** to avoid engine start disablement. Failure
to observe this will result in the engine not starting unless the transponder key
ECU is **replaced with a new one**. `[RM-Y]`

**Do not disconnect the battery while the ECU–ECM communication ID is being
set.** `[RM-Y]`

☝️ Note the tension between those two. Disconnect the battery if you are about to
cycle the ignition many times *before* setting the ID; do not disconnect it
*during* the setting procedure.

</details>

⚠️ Attention: The community warning on this point is that "you have 10 tries to
start the car before you are completely locked out." The mechanism is real and
the consequence is real, but the factory figure is **20 ignition ON-to-OFF
cycles**, the counter runs on **ignition cycles rather than start attempts**, and
the factory supplies a mitigation — disconnecting the negative terminal — that
the community record does not mention. That turns an unrecoverable mistake into
a routine precaution.

#### (9.1) Does this phase apply to you?

| Donor                                        | Immobilizer fitted? | What to do                              |
| :------------------------------------------- | :------------------ | :-------------------------------------- |
| **US-market xD, any year 2008–2014**         | **No**              | Isolate the Yaris transponder ECU — (9.3) |
| Canadian xD, 08/2010–06/2014                 | **Yes**             | Harvest the matched set — (9.4)          |
| Canadian xD, before 08/2010                  | No                  | As US                                    |
| 2010+ Corolla                                | Yes                 | ⚠️ **Not compatible** unless programming new keys |

☝️ Advice: **US-market xDs never had an immobilizer**, and the 2009+ Yaris does.
For a US donor this entire phase reduces to isolating three wires.

#### (9.2) What the system actually is

The key carries two codes — the key code, or immobilizer code, and the wireless
recognition code. The transponder key ECU reads the key and passes key data to
the ECM. Without matching data the ECM will not allow the engine to run. `[RM-Y]`

⚠️ **Correction to the community record.** The most-repeated technical claim about
this system is that `SIL` — the ISO-9141 K-line at DLC3 pin 7 — carries the
immobilizer conversation, and that the fix is to disconnect "the brown K-line at
pin 9." The factory wiring diagram shows something different. The ECM and the
transponder key ECU communicate over a **dedicated three-wire link**:

| Transponder key ECU `D23` | ECM `A21`      | Direction   | Standard resistance |
| :------------------------ | :------------- | :---------- | :------------------ |
| **`D23-13` `EFIO`**       | **`A21-11` `IMI`** | ECU → ECM | Below 1 Ω          |
| **`D23-12` `EFII`**       | **`A21-10` `IMO`** | ECM → ECU | Below 1 Ω          |
| **`D23-11` `EGND`**       | **`A21-9` `EOM`**  | Ground    | Below 1 Ω          |

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

#### (9.3) US donor — non-immobilizer ECM

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
decision is respected here. Contact the builders directly if you need it. It is a
separate question from the factory registration procedure below, which is fully
documented.

#### (9.4) Canadian donor — matched immobilizer set

If you harvested a matched set, the factory registration matrix applies. `[RM-Y]`

| What was replaced           | What must be registered              | Procedure     |
| :-------------------------- | :----------------------------------- | :------------ |
| Adding keys                 | Key codes into the transponder key ECU | **"A"**      |
| **Transponder key ECU**     | Key codes, then ECU–ECM communication ID | **"B"** then **"C"(a)** |
| **ECM — this is the engine swap** | ECU–ECM communication ID       | **"C"(b)**    |
| Both                        | Both                                 | **"B"** then **"C"(c)** |
| Lost key                    | Erase key codes                      | **"D"**       |

##### Procedure "C"(b) — after replacing the ECM

> 1. Insert a previously registered key into the ignition key cylinder.
> 2. Start the engine.
> 3. Check that the engine starts and stays on for **more than 3 seconds**. The
>    registration is complete.

Security indicator condition: **OFF**. `[RM-Y]`

☝️ Advice: **That is the whole procedure.** For an ECM replacement — which is what
an engine swap is — **registration is automatic on first start.** There is no
jumper and no waiting period.

⚠️ **Correction to the community record.** The widely-circulated "jumper TC and
CG at the DLC3, ignition ON, wait 30 minutes" procedure is **Procedure "C"(a) —
after replacing the transponder key ECU.** It is a genuine Toyota procedure, but
it applies to a different part. Applying it to an ECM swap adds half an hour of
ceremony the manual does not ask for.

For completeness, Procedure "C"(a), which you need only if you also replaced the
transponder key ECU: register the key codes per Procedure "B"; using SST
`09843-18040`, connect **TC and CG** at the DLC3 **before** inserting the key;
insert a previously registered key, turn the ignition **ON without starting**,
and leave it for **30 minutes**; turn the ignition OFF and disconnect TC and CG;
start the engine and confirm it runs for more than 3 seconds. `[RM-Y]`

#### (9.5) Diagnosis

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

| Code    | Detection item                       |
| :------ | :----------------------------------- |
| `B2784` | Antenna coil open or short           |
| `B2793` | Transponder chip malfunction         |
| `B2794` | Unmatched encryption code            |
| `B2795` | Unmatched key code                   |
| `B2796` | No communication in immobilizer system |
| `B2798` | Communication malfunction No. 2      |
| `B2799` | Engine immobilizer system            |

Diagnostic check: with `D23` and `A21` disconnected, measure resistance across
the three pairs in (9.2). Each should read **below 1 Ω**. `[RM-Y]`

☝️ Advice: A matched immobilizer combination reported working is a 2011–2012 xD
engine ECU with a 2011–2014 xD or Yaris sedan immobilizer ECU and third-generation
"G"-marked keys, `89785-08040`. Canadian first-generation dot-marked keys are not
compatible with the second and third generation systems. `[C]`

⚠️ Attention: Third-party immobilizer bypass modules and EEPROM modification exist.
They are not recommended for a daily-driven vehicle and are not covered here.

---

(Page 17)

### Phase 10 — Instrumentation and Signals

#### (10.1) Speedometer

The signal source depends on the path chosen in Phase 0 and on whether the
recipient car has ABS. See (2.6) — the factory manual branches this on **ABS, not
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

(Page 18)

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

| Interval             | Action                                  |
| :------------------- | :-------------------------------------- |
| **15 minutes**       | Change the engine oil                   |
| **50 miles**         | Change the engine oil again             |
| **Until 500 miles**  | **No wide-open throttle** — ring seating |

`[C]`

#### Retorque schedule

| When                          | What                                                        |
| :---------------------------- | :---------------------------------------------------------- |
| After the first heat cycle    | Exhaust manifold and downpipe fasteners                     |
| After approximately 100 km / 60 mi | All mount fasteners, axle hub nuts, subframe bolts, wheel lug nuts |
| After 100 km / 60 mi          | Re-check all fluid levels                                   |

---

(Page 19)

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

## Budget

Figures below are from one completed and emissions-certified build, and are
indicative only. Prices move; this is `[C]` and dated.

| Section                          | Cost      | Notes                                     |
| :------------------------------- | --------: | :---------------------------------------- |
| Engine, transaxle, ECM, harness  | $1,288    | One salvage purchase, complete            |
| Engine rebuild parts             | $609      | **Optional — Phase 3**                    |
| Intake and exhaust               | $944      | Includes a $780 CARB-legal converter      |
| Fuel, electrical, starting       | $359      |                                           |
| Cooling                          | $124      |                                           |
| Transaxle rebuild and gearing    | $1,329    | **Optional — Phase 2**, includes an LSD   |
| Driveline                        | $79       |                                           |
| Clutch and hydraulics            | $276      |                                           |
| A/C                              | $363      |                                           |
| **Parts total**                  | **$5,371** |                                          |
| Tools                            | $916      | Approximately half is rebuild-only        |
| **All-in**                       | **$6,305** |                                          |

☝️ Advice: The original community guide advises budgeting approximately $3,000.
That figure appears achievable only by skipping both rebuild phases and sourcing
patiently. Another builder itemised $1,795 for a straight swap onto a
low-mileage donor engine, and a third assembled most of a swap for under $850
through a long-standing salvage yard relationship. Removing the two optional
rebuild phases from the table above brings the parts total to approximately
$3,433.

---

(Page 20)

## Appendix A — Wrong-Engine Quarantine

Half the danger in a swap workbook is a confidently-stated number that belongs to
a different engine. The values below circulate in connection with this
conversion and are **wrong for the 2ZR-FE**. They are listed specifically so
they can be recognised and rejected.

| Value in circulation                          | Actually belongs to                    | Correct 2ZR-FE value          |
| :-------------------------------------------- | :------------------------------------- | :---------------------------- |
| Head bolts **"36 ft·lbf + 90° + 90°"**        | **1ZZ-FE / 2AZ-FE**                    | **49 N·m + 90° + 45°**, mark at 135° |
| Head bolts, 8 mm bi-hexagon                   | **1NZ-FE** (the engine coming out)     | **10 mm** bi-hexagon          |
| Flywheel "38 ft·lbf + 90°"                    | **1NZ-FE**, via a misprinted imperial column | 49 N·m + 90° = **36 ft·lbf** |
| Bell housing **"22 ft·lbf"**                  | The **internal case-half** bolt        | **33 N·m / 24 ft·lbf**, 7 bolts |
| Rod cap "18 ft·lbf"                           | **2AZ-FE**                             | **20 N·m / 15 ft·lbf** + 90°  |
| Engine moving control rod **"64 N·m"**        | **2AZ-FE, 2004 Camry**                 | 100 N·m transaxle side, 120 N·m at crossmember |
| Insulator "80 N·m" + hangers "25 N·m"         | **1AD/2AD-FTV diesel**                 | See Phase 7                   |
| Chain tensioner slipper "19 N·m"              | **2AZ-FE**                             | ⚠️ **Not published** — see below |
| Chain tensioner slipper "18.5 N·m"            | **1ZZ-FE**                             | ⚠️ Not published              |
| Chain tensioner slipper "20.5 N·m"            | **2ZZ-GE**                             | ⚠️ Not published              |
| Chain tensioner slipper "9.0 N·m"             | **1NZ-FE**                             | ⚠️ Not published              |
| Transaxle oil "75W-90, 3 qt"                  | Community practice, not a spec         | **GL-4, SAE 75W, 1.9 ℓ**      |
| Coolant "5.5 ℓ"                               | Community estimate                     | **4.8 ℓ** M/T                 |
| Differential shim part numbers `90564-41014`–`41032` | Not in any factory manual       | Lettered plate washers **AA–UU** |

⚠️ Warning: **Toyota manual RM3027** is a complete 2ZR-FE "Engine Assembly" mount
table and is easy to find. It is **JDM Auris/ist — not US-market xD or
Corolla.** Its crossmember figure is 99 N·m against the xD's 70/160/95 and the
Corolla's 113/157/52. It *partially* agrees with the US Corolla on the insulator
rows, which makes it **more** dangerous, not less. Do not use it for a US
vehicle.

### Specifications that genuinely do not exist

Publishing these as gaps is more useful than filling them with a guess.

| Item                                                | Status                                              |
| :-------------------------------------------------- | :-------------------------------------------------- |
| Cylinder head cover torque                          | **Toyota publishes none.** An absence, not a gap    |
| 2ZR-FE valve clearance                              | **Not applicable** — hydraulic lash adjusters       |
| Chain tensioner slipper bolt                        | Not located for the 2ZR-FE                          |
| Head bolt tightening **sequence** (1–10)            | Illustration only in the manual, not text           |
| Timing chain cover sequence, 26 bolts               | Illustration only                                   |
| A/C compressor mounting bolts                       | Not located                                         |
| Drive belt idler pulley, as a distinct row          | Not located                                         |
| Engine coolant temperature sensor torque            | Not located                                         |
| LH transaxle mounting **bracket** to case bolts     | Not located — the manuals route this to an "Engine Assembly / Installation" document absent from both mirrors |
| xD RH insulator — which of 45/88/52 N·m goes where  | **Genuinely unpublished.** Three torques, two illustration labels |
| Oil pump relief valve plug                          | Sources give 49 and 37 N·m irreconcilably. **Treat as not found** |
| Radiator and block drain cocks                      | No torque printed — hand-tight                      |
| ABS tone rings                                      | Never addressed in any source consulted             |
| Fastener part numbers generally                     | The repair manual names joints, not part numbers    |

☝️ Advice: Row labels such as "No.1 / No.2 front and rear mounting bracket" do
**not exist** in the 2ZR-FE repair manual. That naming comes from other engine
families — do not go looking for them.

## Appendix B — Bolt-on Reference

☝️ Advice: **None of this is required for the conversion.** It is collected here
so that the main procedure stays a stock-replacement document.

### Measured output

| Configuration                                 | Wheel hp | Torque    |
| :-------------------------------------------- | -------: | :-------- |
| Stock, plus intake                            | 123      | 121 lb·ft |
| Plus long-tube header and 2.25–2.5" mid pipe  | 134      | 134 lb·ft |
| Plus prototype intake manifold                | 148      | 137 lb·ft |

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

| Option                          | Effect                                                      |
| :------------------------------ | :---------------------------------------------------------- |
| QRP 5th gear set, 0.725:1       | From 0.815:1. Drops 70 mph from 3,228 to 2,871 rpm          |
| 4.31 final drive, 04–06 xB      | Drop-in. In-gear top speeds 29 / 54 / 80 / 101 / 121 mph    |
| Helical LSD                     | ⚠️ **20-spline axles only** — an argument for Path B         |
| EC60 / EC67 6-speed             | See below                                                   |

⚠️ Attention: On the 6-speed — the EC-series cases are shorter than the C-series
because Toyota moved to a two-piece case design, so no hammer work is needed to
fit one. However the EC67 uses a **special throwout bearing with an integrated
cylinder**, so the entire clutch hydraulic system must change. One builder who
fitted an EC60 reported first gear is far too short and concluded it "isn't
really worth it" on an otherwise stock car. `[C]`

### Driveline strength

| Output              | Recommendation                          |
| :------------------ | :-------------------------------------- |
| Up to ~150 hp       | Yaris differential and shafts adequate  |
| 150–250 bhp         | xD driveline                            |
| Above 250 bhp       | Custom shafts                           |

☝️ Advice: Automatic transaxles begin slipping above approximately 275 hp; keep
boosted builds on a U340E to 220–230 hp. Not relevant to this conversion, but it
comes up constantly. `[C]`

---

(Page 21)

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
