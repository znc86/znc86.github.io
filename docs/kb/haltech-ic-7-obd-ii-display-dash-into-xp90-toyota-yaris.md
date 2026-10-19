---
title: "Haltech iC-7 OBD-II Display Dash (HT-067012) Installation into a 2010 Toyota Yaris"
subtitle: Wiring the included HT-135003 OBD-II CAN cable's switched +12V lead through the XP90's Instrument Panel J/B, with the factory wiring diagram used to tell the fuse that's actually switched from the ones that only look like it
datePublished: "2026-10-18T16:30:00"
published: true
author: Ron. A (@brz_typera)
description: Step-by-step install of the Haltech iC-7 OBD-II Color Display Dash (HT-067012) into a 2010 Toyota Yaris (XP90), focused on sourcing a correct switched "key on" +12V supply for the included HT-135003 OBD-II to DTM-4 CAN cable, using the factory Instrument Panel J/B fuse box beside the steering column and a 3A add-a-fuse tap, verified against the factory electrical wiring diagram.
tags:
  - toyota
  - yaris
  - xp90
  - haltech
  - ic-7
  - obd-ii
  - dash-display
  - wiring
---

<a id="introduction"></a>

## Introduction

This article covers installing the **Haltech iC-7 OBD-II Color Display Dash
(`HT-067012`)** into a 2010 Toyota Yaris (XP90 chassis). The iC-7 itself mounts
and configures the same way regardless of vehicle — Haltech's own Quick Start
Guide covers that well. What it does **not** cover, because it can't, is where
on a specific car to find a 12V supply that is only live with the key on. That
part is Yaris-specific, and it's the actual subject of this document.

The `HT-067012` kit is the **OBD-II pre-configured** variant of the iC-7 (the
other kit, `HT-067010`, is pre-configured for a direct Haltech CAN connection
instead). It ships with a **`HT-135003` OBD-II to DTM-4 CAN Cable**, 1400 mm
(55") long, which does two jobs at once: it reads CAN broadcast data from the
vehicle's OBD-II port for the dash to display, and it feeds the dash itself
+12V and ground, so no separate power wire would seem necessary `[H-QSG]`.
That second job is the trap. The OBD-II port's own +12V pin is wired straight
to the battery on every car built to the standard — a diagnostic tool has to
be able to read codes with the ignition off — so if the cable's red wire were
left on that pin, the dash would stay powered, and drawing current, for as
long as the car sits parked `[H-QSG]` `[H-KB]`.

Haltech's own installation diagram handles this by routing the red wire
*around* the OBD-II connector's own 12V pin entirely, to a separate switched
ignition source, through a dedicated 3A fuse. Confirming where that source is
and isn't on this chassis, and finding a clean place to tap it, is everything
this document adds beyond Haltech's manual.

The following symbols are displayed for important points, which must be observed.

| Note         |                                                                                       |
| :----------- | :------------------------------------------------------------------------------------ |
| ⚠️ Warning   | Safety precautions that must be observed (Improper handling may result in injury or vehicle damage) |
| ☝️ Advice    | Describes information that is useful for performing the work efficiently              |

Source markers are displayed for every specification.

| Marker    | Meaning                                                                                                          |
| :-------- | :---------------------------------------------------------------------------------------------------------------- |
| `[H-QSG]` | Haltech iC-7 Display Dash (`HT-067012`) Quick Start Guide, Rev. 12 — official factory documentation               |
| `[H-KB]`  | Haltech's support knowledge base article "Haltech uC-10 Display Dash," *CAN OBD-II connection* section — a different Haltech display, cited because it documents the same `HT-135003` cable and the same switched-power requirement |
| `[RM-Y]`  | Toyota Yaris/Vitz XP90 (2005–2011) workshop manual, `47. Electrical Wiring Diagram.pdf`, cited by section letter and printed page |
| `[C]`     | Community- or retailer-reported (product listings). **Not a factory source**                                     |

<a id="contents"></a>

## Table of Contents

- [Introduction](#introduction)
- [The Problem: Switched vs. Constant 12V](#the-problem)
- [Parts & Tools](#parts-tools)
- [Installation Precautions](#precautions)
- [Finding a Switched 12V Source — the Instrument Panel J/B](#finding-the-fuse)
- [Work Procedure](#work-procedure)
- [Post-Installation Verification](#verification)
- [References](#references)

---

<a id="the-problem"></a>

## The Problem: Switched vs. Constant 12V

Haltech's own `HT-135003` cable diagram states it plainly:

> "The +12V Supply from the vehicle's OBD II connector is constant and would
> cause the dash to be powered even when the vehicle is off. For this reason,
> the RED power wire must be connected to a switched +12V 'Key On' power
> source in the vehicle." `[H-QSG]`

<figure>
  <a id="fig-haltech-obd2-diagram"></a>
  <img src="/kb/haltech-ic-7-obd-ii-display-dash-into-xp90-toyota-yaris/haltech-ic7-obd2-power-wiring-diagram.png" alt="Haltech iC-7 to OBD-II installation diagram showing the ignition switch, a vehicle fuse, a dedicated 3A inline fuse, and the OBD-II CAN cable connecting to the battery and ground" />
  <figcaption>
    Figure 1: Haltech's own <code>iC-7 TO OBD-II INSTALLATION</code> diagram.
    The red wire runs from the battery through the <strong>ignition switch</strong>
    and an existing vehicle <strong>fuse</strong>, then through a dedicated
    <strong>3A</strong> inline fuse, to the cable. Haltech iC-7 Display Dash
    Quick Start Guide, Rev. 12, p.5.
  </figcaption>
</figure>

Read the diagram carefully and it's actually describing **two** fuses in
series, not one: the vehicle's own existing fuse on the ignition-switched
circuit (generic in Haltech's drawing because it varies by car), and a
**dedicated 3A fuse** Haltech wants added at the new tap, protecting the new
wire run independently of whatever the vehicle's own fuse is rated for.
That's the "3A fuse" this document keeps referring to — it is not a special
OEM fuse value to go looking for, it's a fuse **you add**, sized to the
dash's own trivial current draw rather than to whatever the factory circuit
you're borrowing from is rated for.

This isn't a theoretical warning for this specific car, either. The XP90
Yaris's own factory wiring confirms it. The Data Link Connector 3 (the
OBD-II port) circuit diagram shows its `BAT` terminal fed directly by the
**`7.5A OBD2`** fuse `[RM-Y]`F p.112, and the Section J current-flow chart
groups that same `OBD2` fuse under the ignition switch's **`AM1`** branch —
the "always hot" side of the switch, not a switched terminal `[RM-Y]`F
p.253. In other words: the fuse that's physically labeled for the OBD-II
port on this car is itself the constant-12V circuit Haltech is warning about.
Wiring the cable's red lead to the Yaris's own `OBD2` fuse, or to the
connector's pin 16 directly, reproduces the exact problem the diagram is
telling you to avoid.

---

<a id="parts-tools"></a>

## Parts & Tools

| Item                                            | Notes                                                                                                   |
| :----------------------------------------------- | :-------------------------------------------------------------------------------------------------------- |
| Haltech iC-7 OBD-II Display Dash, `HT-067012`     | Includes the display, 34-pin main connector harness, `HT-135003` OBD-II to DTM-4 CAN cable, USB cables, mounting screws, and iCC software on USB `[H-QSG]` |
| Mounting bracket                                  | Choose one of Haltech's options to suit the install location — standard (`HT-060070`), panel mount w/ visor (`HT-060071`), moulded panel mount (`HT-060090`), or tube mount for a roll cage/steering column (`HT-060072`) `[H-QSG]` |
| Add-a-fuse / fuse-tap adapter                     | Sized to match the **physical blade size** of the Instrument Panel J/B's fuses — verify at the fuse box before buying, see [Figure 3](#fig-fusebox-layout) |
| **3A fuse** (for the add-a-fuse's new slot)       | Matches Haltech's own spec on the cable's power lead `[H-QSG]`                                          |
| Wire, matching the cable's red lead gauge         | Only needed if the tap point isn't close enough to splice directly                                       |
| Solder or crimp butt connectors, heat-shrink       |                                                                                                           |
| Ring or spade terminal (optional)                 | If splicing into existing ring-terminal hardware rather than the fuse box directly                       |
| Digital multimeter                                |                                                                                                           |

**Tools:** trim panel removal tool, wire crimpers, wire strippers, soldering
iron (if soldering), heat gun, small flathead screwdriver (for the lower
finish panel fasteners).

---

<a id="precautions"></a>

## Installation Precautions

<details open>
  <summary>⚠️ Warning</summary>

- **Disconnect the negative battery terminal before splicing any bare
  conductor**, but not before — identifying which fuse-cavity blade is
  switched requires reading voltage with the key on, which needs the battery
  connected. See the Work Procedure for the order this actually happens in.
- The Instrument Panel J/B sits directly beside the **Airbag Sensor Assembly
  Center** and its wiring runs (see [Figure 2](#fig-instrument-panel-location)).
  You are not disconnecting or working on the SRS system itself, but keep
  clear of its harness and connectors while working in this area.
- **Test the add-a-fuse's orientation before trusting it.** These adapters
  work in only one direction — one blade feeds through to the original fuse
  slot, the other feeds the new slot, and both draw from the same incoming
  leg of the original fuse socket. Inserted backwards, the new accessory can
  end up back-feeding the factory circuit instead of drawing from it. Confirm
  with a meter or test light, key on, before closing anything up.

</details>

<details open>
  <summary>☝️ Advice</summary>

- Verify the physical fuse size at the Instrument Panel J/B before ordering
  an add-a-fuse adapter — Toyota used both standard (ATO) and mini/low-profile
  blade fuses across this era, and the adapter has to match.
- The OBD-II port (Data Link Connector 3) on this chassis is exposed under
  the dash near the steering column, in the same immediate area as the
  Instrument Panel J/B — no trim removal is needed to reach it.

</details>

---

<a id="finding-the-fuse"></a>

## Finding a Switched 12V Source — the Instrument Panel J/B

### Locating the J/B

The Yaris's **Instrument Panel J/B** sits under the dash, to the left of the
steering column, directly behind the **lower finish panel** `[RM-Y]`F p.21.
It's the fuse box the factory diagram shows right beside the steering column
in both body styles.

<figure>
  <a id="fig-instrument-panel-location"></a>
  <img src="/kb/haltech-ic-7-obd-ii-display-dash-into-xp90-toyota-yaris/xp90-yaris-instrument-panel-jb-location.png" alt="Toyota factory instrument panel component location diagram for the XP90 Yaris hatchback, showing the Instrument Panel J/B mounted below the dash to the left of the steering column, alongside the Fuse Block, ACC Cut Relay, Main Body ECU, and Airbag Sensor Assembly Center" />
  <figcaption>
    Figure 2: The <strong>Instrument Panel J/B</strong>, directly left of the
    steering column, behind the lower finish panel. <code>47. Electrical
    Wiring Diagram.pdf</code>, Section F, p.21.
  </figcaption>
</figure>

This location and fuse list are identical between the hatchback (`H/B`) and
sedan (`S/D`) body styles — the factory manual repeats the same diagram for
both, with only the surrounding ECU photos differing `[RM-Y]`F p.21.

### Reading the fuse layout

Pulling the lower finish panel exposes the J/B face shown below, with every
cavity labeled by current rating and circuit name.

<figure>
  <a id="fig-fusebox-layout"></a>
  <img src="/kb/haltech-ic-7-obd-ii-display-dash-into-xp90-toyota-yaris/xp90-yaris-instrument-panel-jb-fuse-layout.png" alt="Toyota factory fuse layout diagram for the XP90 Yaris Instrument Panel J/B, showing two rows of labeled fuse cavities including IGN, MET, GAUGE, ECU-IG, OBD2, STOP, and AM1" />
  <figcaption>
    Figure 3: Instrument Panel J/B fuse layout. <code>47. Electrical Wiring
    Diagram.pdf</code>, Section F, p.32.
  </figcaption>
</figure>

### Choosing a fuse: switched vs. constant

Not every fuse in this box is wired the same way. Toyota's own Section J
current-flow chart traces each one back to either the ignition switch's
**`AM1`** terminal (always hot, regardless of key position) or through the
**`IG2` relay**, which only closes with the key on `[RM-Y]`J p.253–257. The
relevant ones in this box split as follows:

| Fuse        | Rating | Behavior | Confirmed by                                                                 |
| :---------- | -----: | :------- | :----------------------------------------------------------------------------- |
| **`IGN`**   | 7.5A   | **Switched** — IG2 relay | Cruise Control, ECT, Engine Control, Engine Immobiliser, Seat Belt Warning, SRS `[RM-Y]`J p.256 |
| `ECU-IG`    | 10A    | **Switched** — IG2 relay | ABS, Audio, Combination Meter, Cooling Fan, Cruise Control, Door Lock Control, ECT, EPS, Headlight, Power Window, Theft Deterrent `[RM-Y]`J p.256–257 |
| `GAUGE`     | 10A    | **Switched** — IG2 relay | Combination Meter, A/C, Cruise Control, Defogger, Seat Belt Warning, Shift Lock, SRS, Taillight, Turn Signal `[RM-Y]`J p.257 |
| `MET`       | 7.5A   | **Switched** — IG2 relay | Combination Meter, Charging, Cruise Control, EPS, ECT, SRS `[RM-Y]`J p.256 |
| `ACC`       | 7.5A   | **Switched** — IG2 relay | Audio, Door Lock, Interior Light, Remote Mirror, Theft Deterrent `[RM-Y]`J p.256 |
| `OBD2`      | 7.5A   | **Constant** — `AM1` | Data Link Connector 3 only `[RM-Y]`J p.253, H p.112 |
| `STOP`      | 10A    | **Constant** — `AM1` | Stop Light, ABS, ECT, Cruise Control `[RM-Y]`J p.253 |
| `AM1`       | 25A    | **Constant** — `AM1` | Door Lock, Interior Light, Theft Deterrent `[RM-Y]`J p.253 |
| `PANEL1`/`PANEL2` | 7.5A | **Constant** — `AM1` | Key Reminder, Taillight/Illumination `[RM-Y]`J p.253 |
| `D/L`, `FR FOG`, `TAIL` | varies | **Constant** — `AM1` | Door Lock, Front Fog Light, Taillight `[RM-Y]`J p.253 |

This document uses **`IGN` (7.5A)** — it's the fuse literally named for
ignition-switched power, it's dead with the key out, and it has headroom to
spare over the 3A the dash's own cable asks for. `ECU-IG`, `GAUGE`, or `MET`
are equally valid switched alternatives if `IGN`'s cavity is awkward for a
particular add-a-fuse adapter's physical footprint — all four come off the
same `IG2` relay and go dead at the same time `[RM-Y]`J p.254.

⚠️ Attention: **Do not use `OBD2`, `STOP`, `AM1`, `PANEL1`/`PANEL2`, `D/L`,
`FR FOG`, or `TAIL`.** All of these are fed straight from the ignition
switch's `AM1` terminal and stay hot with the key fully off `[RM-Y]`J
p.253 — using any of them defeats the entire purpose of routing the red wire
away from the OBD-II connector's own pin 16 in the first place.

---

<a id="work-procedure"></a>

## Work Procedure

(1) Mount the iC-7 to the dash using the bracket of your choice, per
Haltech's own mounting instructions `[H-QSG]`.

(2) Route the supplied `HT-135003` cable from the dash to the Yaris's
OBD-II port (Data Link Connector 3), under the dash near the steering
column, and plug it in.

(3) Remove the lower finish panel below the steering column to expose the
Instrument Panel J/B ([Figure 2](#fig-instrument-panel-location)). The
battery stays connected for this — nothing here exposes a bare conductor.

(4) Locate the **`IGN`** fuse (7.5A) in the layout shown in
[Figure 3](#fig-fusebox-layout).

(5) With the key **off**, pull the `IGN` fuse and test both blade slots in
the empty cavity against a known ground — neither should read voltage.

(6) Turn the key to **ON** and test the same two slots again. One should
now show +12V, the other should not. The hot slot is the **input (source)**
side — note its position (e.g. "the slot nearer the connector tab") so it
can be found again with the fuse out.

☝️ Advice: This polarity test is the reason the battery is still connected
at this point. There is nothing to read voltage from otherwise.

(7) Turn the key back **off**, then disconnect the negative battery
terminal. Everything from here on involves a bare conductor.

(8) Insert the add-a-fuse adapter into the `IGN` cavity, oriented so its
pass-through blade lands on the **source** side identified in step (6).
Fit the original **7.5A** fuse back into the adapter's pass-through slot,
restoring the factory `IGN` circuit.

(9) Fit the **3A** fuse into the adapter's new slot.

(10) With the battery still disconnected, confirm 0V at the new slot's
output lead with a meter before cutting into anything — this should be a
given now, but it's cheap insurance against a wiring assumption made
earlier in the process being wrong.

(11) Splice (crimp or solder, with heat-shrink) the add-a-fuse's output
lead to the `HT-135003` cable's red power wire, extending it with matching
gauge wire if the run is too short to reach directly.

(12) Route and secure the new wire run along the existing harness, clear of
moving parts and the airbag sensor assembly's own wiring.

(13) Reinstall the lower finish panel.

(14) Reconnect the negative battery terminal.

---

<a id="verification"></a>

## Post-Installation Verification

(14.1) Key to **ON** (not start). The dash should show the Haltech logo
screen briefly, then the configured home screen, reading live OBD-II data
`[H-QSG]`.

(14.2) Key to **OFF**. The dash should power down within a second or two.

⚠️ Attention: **If the dash stays lit with the key off**, the tap landed on
a constant-hot circuit, not `IGN`. Pull the add-a-fuse and re-check which
fuse cavity it's actually seated in against [Figure 3](#fig-fusebox-layout)
before assuming the hardware is at fault.

(14.3) With a meter on the new tap's output lead: confirm 0V key-off and
approximately battery voltage key-on, before considering the install done.

---

<a id="references"></a>

## References

| Source                                                                                                                                 | Sections cited                                                                                          |
| :---------------------------------------------------------------------------------------------------------------------------------------- | :----------------------------------------------------------------------------------------------------- |
| `[H-QSG]` Haltech iC-7 Display Dash (`HT-067012`) Quick Start Guide, Rev. 12                                                              | p.2 (kit contents, `HT-067010` vs `HT-067012`), p.3 (first start-up), p.5 (`iC-7 TO OBD-II INSTALLATION` diagram), p.7 (DTM-4 pinout) |
| `[H-KB]` [Haltech Support — "Haltech uC-10 Display Dash"](https://support.haltech.com/portal/en/kb/articles/haltech-uc-10-display-dash), *CAN OBD-II connection* section | `HT-135003` cable function and switched +12V requirement, cross-referenced against the iC-7's own identical requirement |
| `[RM-Y]` Toyota Yaris/Vitz XP90 (2005–2011) Workshop Manual, `47. Electrical Wiring Diagram.pdf`                                          | Section F p.20–21 (relay/J-B locations), p.32 (Instrument Panel J/B fuse layout); Section H p.112 (Data Link Connector 3 circuit); Section J p.253–257 (power source current-flow chart, fuse/system cross-reference) |
| `[C]` [Vivid Racing — Haltech iC-7 OBD-II Colour Display Dash HT-067012](https://www.vividracing.com/haltech-ic7-obdii-colour-display-dash-p-153002419.html) | Display specifications, OBD-II CAN compatibility (approx. 2008-on vehicles)                             |
| `[C]` [DriftMotion — Haltech iC-7 OBD-II Color Display Dash HT-067012](https://www.driftmotion.com/Haltech-iC-7-OBD-II-Color-Display-Dash-HT-067012-p/dm3762.htm) | Kit contents cross-check                                                                                 |
