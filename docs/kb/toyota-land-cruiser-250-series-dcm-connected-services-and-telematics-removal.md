---
title: "Disabling the DCM: Connected Services and Driving-Assist Impacts on the 250-Series Toyota Land Cruiser"
subtitle: What the Data Communication Module actually powers, three ways owners report disabling it, and the one driving-assist feature Toyota's own manual confirms it breaks
datePublished: "2026-10-07T16:00:00"
published: true
author: Ron. A (@brz_typera)
description: "What the 250-series Land Cruiser's DCM (Data Communication Module) actually controls — Safety Connect, Remote Connect, Service Connect, Drive Connect, and the User Profile cloud layer — plus three community-reported methods for disabling it, their reported effects on the vehicle's microphone and Bluetooth, and the one Owner's Manual-confirmed casualty: Traffic Jam Assist."
tags:
  - toyota
  - TJH250-land-cruiser
  - infotainment
---

<a id="introduction"></a>

## Introduction

This article covers the **DCM (Data Communication Module)**, the 250-series
Land Cruiser's own built-in cell modem, what it actually powers, and what
happens when owners disable it. It's a companion to a separate article on
[Driver Identity, Apple CarPlay, and Bluetooth Settings on this
platform](/kb/toyota-land-cruiser-250-series-carplay-driver-identity-and-bluetooth-setup),
which this document intersects with but does not repeat. This one covers the
cellular hardware underneath the "User Profile" layer
those methods feed into, and what breaks if you cut it.

The motivation usually isn't the microphone or Traffic Jam Assist it's that
a vehicle with its own always-on cellular connection is a tracking device by
design. Modern connected vehicles are _"essentially roving computers, recording and
storing unprecedented types and quantities of data about our personal
lives"_ including location history, driving behavior, and in some vehicles audio and
video, raising creepy concerns about why they need this data, as well as Fourth
Amendment questions about warrantless law enforcement
access to that data (ACLU, ["Our Cars Are Now Roving Computers. Is The Fourth
Amendment
Ready?"](https://www.aclu.org/news/privacy-technology/our-cars-are-now-roving-computers-fourth-amendment)).
The ACLU has warned that vehicle connectivity features
should not _"become yet another vector for location tracking"_ (ACLU, ["Cars
That Talk to Each Other: What Are The Privacy
Implications?"](https://www.aclu.org/news/national-security/cars-talk-each-other-what-are-privacy-implications)).
Telemetry data rarely stays
confined to the original purpose it was collected for: it becomes a feedstock
for advertising profiles, identity aggregation across devices and accounts,
and resale to data brokers and insurers, the same economic logic critics call
**surveillance capitalism**. **If the data is collected, it becomes valuable. Once it is valuable, corporations have an obligation to profit from it.**

"Connected Services" bundles a genuine safety feature
(automatic crash notification via Safety Connect) with a data-collection
architecture that, once installed, has no feature-level opt-out, only an
account-level consent toggle, or a hardware disconnect. This article explores alternatives.

The following symbols are displayed for important points, which must be observed.

| Note         |                                                                                                                                      |
| :----------- | :----------------------------------------------------------------------------------------------------------------------------------- |
| ⚠️ Attention | For your safety and that of your personal data (mishandling may result in lost settings, lost functionality, or exposed information) |
| ☝️ Advice    | Describes information that is useful for performing the work efficiently                                                             |

Source markers are displayed for every specification.

| Marker | Meaning                                                                                                                                                             |
| :----- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `[OM]` | Toyota 2027 Land Cruiser Owner's Manual, cited by printed page                                                                                                      |
| `[MM]` | Toyota 2027 Land Cruiser Multimedia System Owner's Manual, cited by printed page                                                                                    |
| `[§]`  | This document, connecting a passage in one manual to a passage in the other — neither manual states the connection explicitly                                       |
| `[C]`  | Community-reported, from an owner forum or manufacturer product page. **Not verified against a factory source** — treat as a first-hand report, not a specification |

<a id="contents"></a>

## Table of Contents

- [Introduction](#introduction)
- [What the DCM Actually Powers](#dcm-overview)
- [Disabling the DCM — Three Reported Methods](#dcm-disable)
- [Driving-Assist Systems — What's Actually Confirmed to Break](#driving-assist-impact)
- [The Open Question Nobody Has Answered Yet](#open-question)
- [References](#references)

---

<a id="dcm-overview"></a>

## What the DCM Actually Powers

The **DCM** is the vehicle's own telematics system including a cell modem, a phone and
antenna independent of any paired phone's data plan. The dashboard has a
dedicated status icon showing its reception level, next to the Wi-Fi and
Bluetooth icons `[MM]p.29`. Every feature Toyota markets as "Connected
Services" runs through it, and the Owner's Manual's own chapter on the subject
(`[MM]`p.181–186) classifies each one by what else it needs beyond the DCM:

| Service                                                                         | What it offers                                                                              | Type   | Also requires                                                      | Source      |
| :------------------------------------------------------------------------------ | :------------------------------------------------------------------------------------------ | :----- | :----------------------------------------------------------------- | :---------- |
| **Safety Connect**                                                              | 24/7 automatic crash notification and SOS response center, GPS + cellular `[OM]p.67–68`     | Type B | DCM only                                                           | `[MM]p.183` |
| **Remote Connect**                                                              | View/remotely control the vehicle (e.g. lock, remote start) from the Toyota App `[MM]p.184` | Type C | DCM + the **Toyota App** (not your CarPlay phone — see note below) | `[MM]p.184` |
| **Service Connect**                                                             | Vehicle Health Report, maintenance notifications, vehicle alert notifications `[MM]p.185`   | Type C | DCM + the Toyota App                                               | `[MM]p.184` |
| **Drive Connect** (Cloud Navigation, Intelligent Assistant, Destination Assist) | Cloud-based navigation, voice assistant, and destination routing                            | Type A | DCM + the vehicle's own system                                     | `[MM]p.183` |
| **User Profile** (this is "My Settings")                                        | Driver profile cloud sync and cross-vehicle portability — see the companion article         | Type A | DCM + the vehicle's own system                                     | `[MM]p.183` |
| Wi-Fi Connect, OTA updates                                                      | In-vehicle Wi-Fi hotspot/streaming, and wireless software updates                           | Type A | DCM + the vehicle's own system                                     | `[MM]p.183` |

---

<a id="dcm-disable"></a>

## Disabling the DCM — Three Reported Methods

Neither Owners or Multimedia manual describes a user-facing way to disable the DCM. Owners on
TacomaWorld, Tundras.com, LandCruiserForum, and ToyotaOwnersClub report three
ways to do it, with very different amounts of risk `[C]`

### Three reported methods, from safest to most invasive

| Method                                                                                                                                                                                                               | What it does                                                                                                                                      | Reported feature impact                                                                                                                            |
| :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------ | :------------------------------------------------------------------------------------------------------------------------------------------------- |
| **① Decline "Master Data Consent"** in the Toyota App (Account → Data Privacy Portal → select vehicle → Manage Consent → Decline), or request it by phone/SOS button, **the Toyota-sanctioned, software-only route** | Account-level opt-out. Stops data transmission without touching any hardware                                                                      | Reported to leave Bluetooth and CarPlay untouched; costs some app-dependent features instead, such as remote start on some models `[C]`            |
| **② DCM bypass harness** (e.g. AutoHarnessHouse AHH-DCM77)                                                                                                                                                           | Physically disconnects the DCM from the vehicle's power/data bus, but reroutes the speaker and microphone circuits around it so they keep working | Designed specifically to preserve the speaker and microphone that a bare disconnect would take out — no reported impact on Bluetooth/CarPlay `[C]` |
| **③ Pull the DCM fuse** (5A or 7.5A, interior fuse panel / glove box) — **not recommended**                                                                                                                          | Hardware disconnect, no bypass. No warning lights or stored codes                                                                                 | Reportedly **kills the vehicle's microphone**, taking out Bluetooth hands-free calling and any voice command function with it `[C]`                |

### Why ① is the recommended starting point

Declining Master Data Consent is **Toyota's own supported mechanism** for
stopping data collection and it's a setting in Toyota's own app, not a
third-party workaround. It has no reported side effects on Bluetooth or CarPlay
The tradeoff is that it's software-level, not physical, it stops transmission but doesn't
pull the modem's power.

☝️ Advice: **the change is not instant.** Toggling consent either direction is
reported to take **up to 24 hours** to propagate to the vehicle `[C]`.

### Option ②, if you want the DCM physically cut

If software opt-out isn't enough and the goal is killing the DCM at the
hardware level without losing the microphone. One solution is the
**AutoHarnessHouse AHH-DCM77**, listed as fitting
2024–2027 Toyota Land Cruiser specifically, alongside 2020+ Toyotas.

<div class="cols-2">
  <figure>
    <a id="fig-dcm-bypass-harness"></a>
    <img src="/kb/toyota-land-cruiser-250-series-dcm-connected-services-and-telematics-removal/dcm-bypass-harness-ahh-dcm77-main.jpg" alt="AutoHarnessHouse AHH-DCM77 Toyota DCM bypass harness, showing the two connector adapters used to reroute the speaker and microphone circuits around a disconnected DCM module" />
    <figcaption>
      Figure 1: The <strong>AutoHarnessHouse AHH-DCM77</strong> DCM bypass
      harness, plugs in place of the DCM's connectors to keep the speaker and
      microphone working after the module itself is disconnected. Product photo,
      <a href="https://www.autoharnesshouse.com/store/AHH-DCM77">autoharnesshouse.com</a>.
    </figcaption>
  </figure>
  <figure>
    <a id="fig-dcm-module-and-harness"></a>
    <img src="/kb/toyota-land-cruiser-250-series-dcm-connected-services-and-telematics-removal/dcm-bypass-harness-ahh-dcm77-alt.jpg" alt="The genuine Toyota DCM telematics transceiver module itself, labeled TOYOTA TRANSCEIVER TELEMATICS model TL19BNN, shown alongside the bypass harness's adapter connectors" />
    <figcaption>
      Figure 1b: The actual <strong>Toyota DCM module</strong> (labeled
      <code>TRANSCEIVER TELEMATICS</code>) this kit unplugs from, shown next to
      the harness's adapters is useful for confirming you've found the right
      part before disconnecting anything. Product photo,
      <a href="https://www.autoharnesshouse.com/store/AHH-DCM77">autoharnesshouse.com</a>.
    </figcaption>
  </figure>
</div>

#### Finding the DCM on the 250-series console

In the center console, directly under the phone
holder. Take the shifter off, lift up the panel, and you can squeeze your hand
in to disconnect the DCM. No dash trim removal and no airbag work required, console only.

<figure>
  <a id="fig-dcm-location-diagram"></a>
  <img src="/kb/toyota-land-cruiser-250-series-dcm-connected-services-and-telematics-removal/lc250-dcm-location-diagram.svg" alt="Diagram of the 2024-2027 Toyota Land Cruiser showing the DCM telematics module location in the center console directly under the phone holder, with an overhead schematic view and a dash photo callout from the driver's seat" />
  <figcaption>
    Figure 2: DCM location on the 2024–2027 Land Cruiser in the center console,
    under the phone holder.
</figure>

#### Installation steps

1. Find the DCM module.
2. Turn off the vehicle, and disconnect one pole of the 12-volt battery if
   desired.
3. Disconnect all connectors from the DCM module, a square white/off-white
   connector and a longer gray connector.
4. Plug the kit's adapters in, in place of those connectors.
5. Reassemble the console panel and shifter.
6. Reconnect the battery.
7. Start the vehicle and test.

<figure>
  <a id="fig-dcm-bypass-connectors"></a>
  <img src="/kb/toyota-land-cruiser-250-series-dcm-connected-services-and-telematics-removal/dcm-bypass-harness-ahh-dcm77-connectors.jpg" alt="Close-up of the AutoHarnessHouse AHH-DCM77 bypass harness's two inline adapter connectors, which plug in between the vehicle's existing wiring and the DCM module" />
  <figcaption>
    Figure 3: The kit's two adapters, these are what step 4 plugs in, in
    place of the DCM's own square white/off-white and gray connectors.
    Product photo, <a href="https://www.autoharnesshouse.com/store/AHH-DCM77">autoharnesshouse.com</a>.
  </figcaption>
</figure>

### What the harness does to My Settings / driver profiles

`[§]` Installing this harness physically takes the DCM off the vehicle's data
bus, a harder cut than Option ①'s software consent decline, which only stops
transmission while the modem may otherwise remain connected. That means **User
Profile loses its cloud half completely**: no new profile creation (the
linking flow needs a live QR-code → Toyota App → authentication round-trip
`[MM]p.43`), no cloud sync of settings changes `[MM]p.43`, and no cross-vehicle
portability `[MM]p.42`.

**Switching between profiles that already exist in the vehicle should keep
working**, as this scenario already happens routinely without a bypass harness,
every time the vehicle is out of cellular range (a tunnel, a remote stretch of
road, exactly the kind of place a Land Cruiser gets driven), the DCM has no
connectivity at all, and My Settings isn't reported to stop recognizing
drivers in those moments. A hardware bypass is just a permanent version of a
condition the vehicle already tolerates every time it loses signal. See the
companion article's [My Settings — Driver
Profiles](/kb/toyota-land-cruiser-250-series-carplay-driver-identity-and-bluetooth-setup#my-settings)
section for the full mechanics this intersects with.

### Option ③, and why it's not recommended

⚠️ Attention: **a bare fuse pull reportedly kills the vehicle's microphone.** The mic
appears to be wired through the DCM on these platforms, so a bare fuse pull
takes out **both** Bluetooth hands-free calling **and** any voice-command
function, which would include Siri triggered through CarPlay, since CarPlay
routes Siri through the vehicle's own microphone, not the phone's.

☝️ Advice: **media playback is reportedly unaffected** by the fuse pull, only
functions that need the microphone break. Music, podcasts, and CarPlay's visual
interface are independent of the DCM `[C]`. But given that ① achieves the same
data-stoppage goal with no reported downside, and ② achieves a full hardware
disconnect without losing the mic, a bare fuse pull is the one option here with
a real, confirmed downside and no advantage over the other two.

---

<a id="driving-assist-impact"></a>

## Driving-Assist Systems — What's Actually Confirmed to Break

Section 4-5 of the Owner's Manual ("Using the driving support systems",
`[OM]`p.253–327) lists the operating conditions for every Toyota Safety Sense
3.0 function. Only one of them checks for Connected Services.

<details open>
  <summary>⚠️ Attention: Traffic Jam Assist stops working</summary>

Unlike the DCM-disabling methods above, this one **is** directly confirmed in
the Owner's Manual, not a forum report. Traffic Jam Assist's operating
conditions list includes, as a hard requirement alongside things like the seat
belt being fastened: _"Connected services is being subscribed to"_ `[OM]p.325`.

| System                         | Operating conditions checked | Connected Services required?   | Source          |
| :----------------------------- | :--------------------------- | :----------------------------- | :-------------- |
| **PCS** (Pre-Collision System) | ✓                            | No                             | `[OM]p.271–272` |
| **LTA** (Lane Tracing Assist)  | ✓                            | No                             | `[OM]p.281–282` |
| **LDA** (Lane Departure Alert) | ✓                            | No                             | `[OM]p.283–284` |
| **LCA** (Lane Change Assist)   | ✓                            | No                             | `[OM]p.283`     |
| **AHB** (Automatic High Beam)  | ✓                            | No                             | `[OM]p.239–242` |
| Dynamic Radar Cruise Control   | ✓                            | No                             | `[OM]p.300–306` |
| **Traffic Jam Assist**         | ✓                            | **Yes — explicit requirement** | `[OM]p.325–326` |

**PCS, LTA, LDA, LCA, and AHB should be unaffected by any of the three
DCM-disabling methods above** as none of them check for a subscription.

</details>

---

<a id="references"></a>

## References

| Source                                                                                                                                                                                                                  | Sections cited                                                                                                                                                                                                                                                                                               |
| :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `[OM]` Toyota 2027 Land Cruiser Owner's Manual                                                                                                                                                                          | p.239–242 (AHB), p.253–254 (driving support systems overview, Connected Services contract for software updates), p.267 (driver monitor camera, face data storage), p.271–272 (PCS), p.281–284 (LTA, LDA, LCA), p.300–306 (Dynamic Radar Cruise Control), p.325–326 (Traffic Jam Assist operating conditions) |
| `[MM]` Toyota 2027 Land Cruiser Multimedia System Owner's Manual                                                                                                                                                        | p.29 (DCM status icon), p.42 (User Profile, Toyota account requirement), p.119 (DCM definition), p.181–186 (Connected Services overview, Type A/B/C)                                                                                                                                                         |
| `[C]` [LandCruiserForum — "Let's figure out a solution for disabling the DCM telematics"](https://www.landcruiserforum.com/threads/let-figure-out-a-solution-for-disabling-the-dcm-telematics-silencing-antennas.4655/) | DCM fuse location, 2024 LC250 owner report on microphone loss                                                                                                                                                                                                                                                |
| `[C]` [TacomaWorld — "What happens when you pull the DCM fuse?"](https://www.tacomaworld.com/threads/what-happens-when-you-pull-the-dcm-fuse.848831/)                                                                   | Microphone/Bluetooth-phone impact, open question on ancillary systems                                                                                                                                                                                                                                        |
| `[C]` [AutoHarnessHouse — AHH-DCM77 product page](https://www.autoharnesshouse.com/store/AHH-DCM77)                                                                                                                     | DCM bypass harness fitment, function, and 7-step install procedure                                                                                                                                                                                                                                           |
| `[C]` [AutoHarnessHouse — 2025 Toyota Land Cruiser DCM location](https://www.autoharnesshouse.com/dcm-location.php?y=2025&m=Toyota%20Land%20Cruiser)                                                                    | LC250-specific DCM location diagram and access route, customer-confirmed                                                                                                                                                                                                                                     |
| `[C]` [support.toyota.com — opting out of vehicle data sharing](https://support.toyota.com/s/article/How-do-I-optout-of-sh-10033?language=en_US)                                                                        | Master Data Consent decline procedure                                                                                                                                                                                                                                                                        |
| [ACLU — "Our Cars Are Now Roving Computers. Is The Fourth Amendment Ready?"](https://www.aclu.org/news/privacy-technology/our-cars-are-now-roving-computers-fourth-amendment)                                           | Scope of connected-vehicle data collection; Fourth Amendment/law enforcement access concerns                                                                                                                                                                                                                 |
| [ACLU — "Cars That Talk to Each Other: What Are The Privacy Implications?"](https://www.aclu.org/news/national-security/cars-talk-each-other-what-are-privacy-implications)                                             | Vehicle connectivity as a potential location-tracking vector                                                                                                                                                                                                                                                 |
