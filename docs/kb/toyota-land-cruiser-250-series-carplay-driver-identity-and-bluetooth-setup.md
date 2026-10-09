---
title: "Driver Identity, Apple CarPlay, and Bluetooth Settings on the 250-Series Toyota Land Cruiser"
subtitle: How key fobs, face ID, and paired phones compete to decide whose iPhone gets the screen, and how to configure each identity method
datePublished: "2026-10-06T18:00:00"
published: true
author: Ron. A (@brz_typera)
description: How the TJH250-series Toyota Land Cruiser's "My Settings" driver profiles identify a driver by key fob, face authentication, or Bluetooth device, how Bluetooth primary/secondary priority governs which phone connects, and how that determines which phone's Apple CarPlay session actually loads — with the exact menu steps from both factory manuals.
tags:
  - toyota
  - TJH250-land-cruiser
  - infotainment
---

<a id="introduction"></a>

## Introduction

This article describes how the 250-series Land Cruiser's multimedia system
decides **who is driving**, and how that decision determines **which paired
iPhone's Apple CarPlay session actually appears on the screen** when more than
one key fob and more than one phone are present in the vehicle at once. Toyota splits this subject across two separate factory manuals, and neither one
covers it completely on its own. This document covers both and merges them into one procedure.

☝️ Advice: this article is paired with a companion piece on [Disabling the DCM
— Connected Services and Driving-Assist
Impacts](/kb/toyota-land-cruiser-250-series-dcm-connected-services-and-telematics-removal),
which covers the vehicle's cellular telematics hardware that the "User
Profile" layer below depends on, and what happens to it if that hardware is
disabled. The two articles intersect but don't repeat each other.

The following symbols are displayed for important points, which must be observed.

| Note         |                                                                                                                 |
| :----------- | :-------------------------------------------------------------------------------------------------------------- |
| ⚠️ Attention | For your safety and that of your personal data (mishandling may result in lost settings or exposed information) |
| ☝️ Advice    | Describes information that is useful for performing the work efficiently                                        |

Source markers are displayed for every specification.

| Marker | Meaning                                                                                                                       |
| :----- | :---------------------------------------------------------------------------------------------------------------------------- |
| `[OM]` | Toyota 2027 Land Cruiser Owner's Manual, cited by printed page                                                                |
| `[MM]` | Toyota 2027 Land Cruiser Multimedia System Owner's Manual, cited by printed page                                              |
| `[§]`  | This document, connecting a passage in one manual to a passage in the other — neither manual states the connection explicitly |

<details open>
  <summary>⚠️ Attention — General</summary>

- This feature set varies by trim and model year. Face authentication and the
  head-up display are explicitly marked "if equipped" in both manuals `[OM]p.192`
  `[MM]p.52` — confirm your own vehicle has the driver monitor camera before
  following the face ID section.

</details>

---

<a id="contents"></a>

## Table of Contents

- [Introduction](#introduction)
- [The Three Identity Attestation Methods](#three-methods)
- [My Settings — Driver Profiles](#my-settings)
- [Setting Up Each Attestation Method](#setup)
  - [Linking a key fob](#setup-key)
  - [Registering face identification](#setup-face)
  - [Linking a Bluetooth device](#setup-bluetooth)
- [Managing Bluetooth Devices — Primary, Secondary, and Priority](#bluetooth-priority)
- [How Apple CarPlay Selection Actually Works](#carplay-logic)
- [Applying This: Two Drivers, Two Phones, One Land Cruiser](#two-driver-scenario)
- [References](#references)

---

<a id="three-methods"></a>

## The Three Identity Attestation Methods

My Settings can identify an individual driver using any of three methods. They
are not equally weighted — when more than one is present at the same time and
they disagree, the manual gives an explicit resolution order `[OM]p.193`:

| Priority                | Method                                         | How it identifies you                                                                                                                                                                                                                                               | Source      |
| :---------------------- | :--------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | :---------- |
| **1st**                 | **Face authentication system** _(if equipped)_ | Identified at door open/close when face information registered via the driver monitor camera is recognized. **Prioritized over electronic key/digital key** if the two disagree on who is entering the vehicle.                                                     | `[OM]p.193` |
| **2nd**                 | **Electronic key / Digital key**               | Identified when the smart key system detects the registered key fob or digital key.                                                                                                                                                                                 | `[OM]p.193` |
| **3rd (fallback only)** | **Bluetooth® device**                         | Identified only if neither of the above has already identified someone. Recognizes "the same Bluetooth device that was used as a hands-free phone the last time the vehicle was entered" — **not** whichever phone is currently nearest or most recently connected. | `[OM]p.193` |

☝️ Advice: This priority order governs **driver identification** — which of up
to three My Settings profiles is active. It is a separate thing from the
Bluetooth **connection** priority order covered in
[Managing Bluetooth Devices](#bluetooth-priority) below, which governs which
_phone_ connects once a profile is already active. The two systems interact,
and that interaction is what actually decides CarPlay — see
[How Apple CarPlay Selection Actually Works](#carplay-logic).

⚠️ Attention: Bluetooth-device identification is explicitly the **lowest**
priority of the three, and is skipped entirely whenever a key fob or face
match already exists: _"If an individual is identified by detecting an
electronic key, digital key, or face information, identification by Bluetooth
device will not be performed"_ `[OM]p.193`.

---

<a id="my-settings"></a>

## My Settings — Driver Profiles

**My Settings** stores up to **3 driver profiles** `[MM]p.51`. Each profile can
be assigned one or more of the identification methods above, and once a driver
is identified by any assigned method, the vehicle recalls that profile's saved
settings, including:

- **Driving position** (seat, steering wheel, head-up display if equipped) —
  recalled on power switch ACC/ON `[OM]p.191–193`
- **Meter displays and head-up display information** — recalled from what was
  set when the power switch was last turned off `[OM]p.193`
- **Multimedia settings** — recalled from what was set when the power switch
  was last turned off `[OM]p.193`

`[§]` This last line is the one the Owner's Manual states but never expands on,
and it is the reason the rest of this article exists: "multimedia settings"
is where the Bluetooth primary-device assignment lives, and that assignment is
what ultimately decides which phone's CarPlay session loads.

☝️ Advice: this profile system is itself a Connected Service ("User Profile")
that depends on the vehicle's cellular hardware and an active Toyota account —
see the companion article's [overview of what the DCM
powers](/kb/toyota-land-cruiser-250-series-dcm-connected-services-and-telematics-removal#dcm-overview)
if you're curious how that layer works, or what happens to it if that hardware
is disabled.

`[§]` **If that hardware is physically bypassed** (the companion article's
[Option ②, the DCM bypass
harness](/kb/toyota-land-cruiser-250-series-dcm-connected-services-and-telematics-removal#dcm-disable)),
User Profile loses its cloud half entirely — no new profile creation, no
settings sync, no cross-vehicle portability. **Switching between profiles that
already exist in the vehicle should keep working**, reasoned from the fact that
face ID, key fob, and Bluetooth identification are all local hardware
functions, and that the manual implies profiles are cached locally in the
vehicle separately from the cloud copy. Treat this as likely, not guaranteed —
see the companion article for the full reasoning and its one open caveat.

---

<a id="setup"></a>

## Setting Up Each Attestation Method

All three methods are configured from the same screen: touch the gear icon
`[⚙️]` on the main menu, then touch **[Personal info]** on the sub menu
`[MM]p.51`.

<figure>
  <a id="fig-personal-info-screen"></a>
  <img src="/kb/toyota-land-cruiser-250-series-carplay-driver-identity-and-bluetooth-setup/lc250-personal-info-driver-identification-screen.jpg" alt="Toyota Land Cruiser multimedia system Personal info screen, showing the active driver profile 'Robert Smith' marked as Primary driver, a Bluetooth devices section reading 'No devices linked' with a Link devices button, and a Face identification row" />
  <figcaption>
    Figure 1: The <strong>Personal info</strong> screen for a driver profile —
    Profile Name, Bluetooth devices, and Face identification are all set from
    here. <code>MULTIMEDIA OWNER'S MANUAL</code>, p.51.
  </figcaption>
</figure>

| Setting on this screen                | What it does                                                                                                   | Source           |
| :------------------------------------ | :------------------------------------------------------------------------------------------------------------- | :--------------- |
| "Profile Name"                        | Displays the name of the driver                                                                                | `[MM]p.51`       |
| "Bluetooth devices"                   | Driver identification performed via a linked smartphone/Bluetooth device. Touch **[Link devices]** to register | `[MM]p.51, p.93` |
| "Face identification" _(if equipped)_ | Driver identification via face recognition. Touch **[Setup face]** to register, **[Remove face]** to delete    | `[MM]p.51–52`    |
| `[Link key]`                          | Driver identification via the vehicle's smart key                                                              | `[MM]p.51`       |

⚠️ Attention: Face identification and `[Link key]` are both marked "Refer to
the separate OWNER'S MANUAL" and "Cannot be used with fleet vehicles such as
rental cars" `[MM]p.52`. The Bluetooth-device method carries neither
restriction.

<a id="setup-key"></a>

### Linking a key fob

Touch **[Link key]** on the Personal info screen for the profile you want the
fob tied to `[MM]p.51`. Once linked, the smart key system identifies that
specific electronic key or digital key and loads this profile automatically
when it is detected — this is the **2nd-priority** method from the table above.

<a id="setup-face"></a>

### Registering face identification

1. Touch the gear icon `[⚙️]` on the main menu.
2. Touch **[Personal info]** on the sub menu.
3. Touch **[Setup face]**.
4. Carefully read the Terms of Service and touch **[Accept]**.
5. Look directly at the driver monitor camera, ensure only your face is being
   displayed, and touch **[Begin]**.
6. The system scans your face. A confirmation message displays once
   registration is complete. If an error message appears instead, follow the
   on-screen instructions and try again.

`[MM]p.52`

<figure>
  <a id="fig-driver-monitor-camera"></a>
  <img src="/kb/toyota-land-cruiser-250-series-carplay-driver-identity-and-bluetooth-setup/lc250-driver-monitor-camera-location.jpg" alt="Toyota factory diagram of the Land Cruiser steering column, with an arrow pointing to the driver monitor camera module mounted on the upper steering column shroud" />
  <figcaption>
    Figure 2: The <strong>driver monitor camera</strong> — the same camera used
    for both face identification (My Settings) and the separate driver
    attention/distraction monitoring system. <code>MULTIMEDIA OWNER'S
    MANUAL</code>, p.52.
  </figcaption>
</figure>

To remove registered face data, return to **[Personal info]** and touch
**[Remove face]** `[MM]p.51`. ⚠️ Attention: this deletion is permanent —
face data stored in the vehicle computer cannot be decoded or recovered once
removed `[OM]p.267`.

<a id="setup-bluetooth"></a>

### Linking a Bluetooth device

Touch **[Link devices]** under "Bluetooth devices" on the Personal info screen
`[MM]p.51, p.93`. This registers the device to the multimedia system generally
and ties it to the active driver profile for identification purposes. Once a
device is registered this way, configuring _how_ it behaves — hands-free
calling, audio, CarPlay, and its priority relative to other registered phones
— happens on a separate screen, covered next.

---

<a id="bluetooth-priority"></a>

## Managing Bluetooth Devices — Primary, Secondary, and Priority

The multimedia system can register **up to 5 Bluetooth devices** in total
`[MM]p.76`. Each one is configured independently: touch the gear icon, touch
**[Bluetooth & Devices]**, then touch the device to configure from the sub menu
`[MM]p.78`.

<figure>
  <a id="fig-bluetooth-devices-screen"></a>
  <img src="/kb/toyota-land-cruiser-250-series-carplay-driver-identity-and-bluetooth-setup/lc250-bluetooth-devices-settings-screen.jpg" alt="Toyota Land Cruiser multimedia system Bluetooth and Devices screen, showing two registered phones — John's Phone marked Connected and a second iPhone marked Not connected — with toggle switches for Use for phone, Use for media, and Use for Apple CarPlay for the selected device" />
  <figcaption>
    Figure 3: The <strong>Bluetooth &amp; Devices</strong> screen with two
    registered phones. This is the exact two-phone scenario this article is
    about — only one of these two devices has <code>Use for Apple CarPlay</code>
    available to enable. <code>MULTIMEDIA OWNER'S MANUAL</code>, p.78.
  </figcaption>
</figure>

### Per-device toggles

| Setting                             | What it does                                                  | Source     |
| :---------------------------------- | :------------------------------------------------------------ | :--------- |
| `[Use for phone]`                   | Enables/disables the hands-free call function for this device | `[MM]p.78` |
| `[Use for media]`                   | Enables/disables the audio function for this device           | `[MM]p.78` |
| `[Use for Apple CarPlay]`           | Enables/disables Apple CarPlay for this device                | `[MM]p.78` |
| `[Use for Android Auto]`            | Enables/disables Android Auto for this device                 | `[MM]p.78` |
| `[Setup secure password]`           | Changes the password for the Wireless Android Auto function   | `[MM]p.78` |
| `[Set as secondary device]`         | Sets this device as the secondary device (see below)          | `[MM]p.78` |
| `[Remove secondary device setting]` | Removes this device's secondary-device status                 | `[MM]p.78` |

⚠️ Attention: these toggles are mutually exclusive with CarPlay/Android Auto in
both directions — _"This cannot be used for calls or audio while Apple CarPlay
or Android Auto is set to on. The same also applies in reverse"_ `[MM]p.79`.
Turning a toggle off also fully disconnects that function for the device; it
does **not** silently reconnect later just because the device comes back in
range — _"When connected with a device such as by being automatically
connected, the function that turned off will not automatically turn on"_
`[MM]p.79`.

### Primary and secondary devices, and the connection priority order

A device can only be set as **secondary** once two conditions are both true:
a driver has been registered, and the device (if HFP-supported) **is not
already the primary device** `[MM]p.79`. The manual does not describe a
separate screen for assigning the _primary_ device directly — in practice,
primary status follows from which phone is linked to the active driver profile
via **[Link devices]** on the Personal info screen (see
[Setting Up Each Attestation Method](#setup-bluetooth)); `[Set as secondary
device]` is how you add a _second_ phone to that same profile without
disturbing the first.

This is the single most important sentence in either manual for the question
this article is answering:

> _"The priority order for connecting Bluetooth devices is **primary device,
> secondary device, and latest device in the connection history**."_ > `[MM]p.79`

| Priority       | Device                                  | Notes                                                                |
| :------------- | :-------------------------------------- | :------------------------------------------------------------------- |
| 1st            | **Primary device**                      | The phone linked to the active driver's profile                      |
| 2nd            | **Secondary device**                    | Only assignable if not already primary; requires a registered driver |
| 3rd (fallback) | **Latest device in connection history** | Used only if neither primary nor secondary is available              |

---

<a id="carplay-logic"></a>

## How Apple CarPlay Selection Actually Works

`[§]` Neither manual states this as a single procedure — it is assembled here
from the driver-identification rule `[OM]p.193`, the Bluetooth connection
priority rule `[MM]p.79`, and the CarPlay exclusivity rule `[MM]p.102`. Taken
together, there are three steps:

**Step 1 — identify the driver.** The vehicle determines which of up to 3 My
Settings profiles is active, using face authentication first, electronic/digital
key second, and Bluetooth device as a last-resort fallback `[OM]p.193`.

**Step 2 — connect a phone, in priority order.** For the identified driver's
profile, the system attempts to connect **primary device → secondary device →
most recently connected device in history** `[MM]p.79`.

**Step 3 — load CarPlay, exclusively.** Whichever phone wins Step 2, **and**
has `[Use for Apple CarPlay]` enabled, gets the active CarPlay session.
Apple CarPlay is strictly single-tenant across the whole vehicle: _"While Apple
CarPlay or Android Auto of a device is connected, Apple CarPlay or Android Auto
of a different device cannot be used"_ `[MM]p.102`. There is no split-screen,
no per-seat session, and no manual override shown in either manual for two
simultaneous CarPlay sessions.

⚠️ Attention: once a phone is running CarPlay, CarPlay takes over its calls and
audio — it no longer uses plain Bluetooth for those `[MM]p.102, p.105`. A
second, non-CarPlay phone can still connect for its own calls and audio at the
same time; it just can't also run CarPlay.

---

<a id="two-driver-scenario"></a>

## Applying This: Two Drivers, Two Phones, One Land Cruiser

Picture the scenario this article was written to answer: two people, two key
fobs, two iPhones, all in the vehicle together.

1. The vehicle identifies a driver using the priority order from
   [The Three Identity Attestation Methods](#three-methods) — face auth first
   if equipped and registered, otherwise whichever key fob the smart key system
   detects.
2. That identification loads one of the (up to 3) My Settings profiles.
3. The system tries to connect a phone for that profile: **that profile's
   primary phone first**, then its secondary phone, then the most recently
   connected device in history overall `[MM]p.79`.
4. Whichever phone connects and has `[Use for Apple CarPlay]` enabled gets the
   screen. The other phone does not get a simultaneous CarPlay session
   `[MM]p.102`, though it can still ride along as an independent Bluetooth
   hands-free connection if its own toggles are on.

☝️ Advice: **if you want a specific phone to reliably win**, the fix is not
"connect it last" or "sit closer to it" — Bluetooth proximity and connection
order only matter in the lowest-priority fallback case. Make that phone the
**primary device** on whichever driver profile will be active (via
**[Link devices]** on that profile's Personal info screen), and confirm
`[Use for Apple CarPlay]` is on for it. That beats a second phone regardless of
whose key fob is physically in the car, because primary-device status is tied
to the profile, not to the key fob holder's proximity.

---

<a id="references"></a>

## References

| Source                                                           | Sections cited                                                                                                                      |
| :--------------------------------------------------------------- | :---------------------------------------------------------------------------------------------------------------------------------- |
| `[OM]` Toyota 2027 Land Cruiser Owner's Manual                   | p.191–193 (My Settings, driver identification priority), p.267 (driver monitor camera, face identification limitations)             |
| `[MM]` Toyota 2027 Land Cruiser Multimedia System Owner's Manual | p.51–52 (Driver settings, face registration), p.76–79 (Bluetooth settings, device priority), p.102–105 (Apple CarPlay/Android Auto) |
