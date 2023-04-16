---
title: "OEM ZC6 ZN6 EDAs Electronic Driving Aids"
subtitle: "What the driving aids / nannies do"
datePublished: "2022-12-23T02:44:00"
published: true
author: Ron. A (@brz_typera)
tags:
  - zc6
  - zn6
  - electroncics
thumbnailPhoto: /kb/oem-zc6-zn6-edas-electronic-driving-aids/button.png
---

Going on track, drift, or otherwise pushing the car to the limits, you'll want to disable all the FR-S/86/BRZ traction and stability controls, **turn on the car and press and hold the Traction Control button for 5 seconds** until both the Traction Control and Slip lights come on. Don't bother with the various "Track Mode" buttons as they still have ignition-cut and brake modulation enabled.

<figure>
  <img src="/kb/oem-zc6-zn6-edas-electronic-driving-aids/button.png" alt="Traction control button on the left">
  <figcaption>
    Location of the Traction Control button
  </figcaption>
</figure>

| EDA | Purpose |
|:---|:---|
| **VSC** | Vehicle Stability Control, often known generically as **ESC** or Electronic Stability Control). This program identifies understeer (running wide, needing more and more lock to turn) and oversteer (back slipping out). It then corrects the car’s course by braking individual wheels, and in extreme cases, also reducing throttle to avoid making things worse. Subaru called VSC by the generic term of **ESC**. |
| **TRC** | Engine Traction Control. If you have both rear wheels spinning this system figures out you’re going nowhere and reduces the throttle. The 86/BRZ refers to this as TRC, or Traction Control, although it is a distinct programme from brake traction control (below). In 86-speak, TRC stands for “Traction Control System”. No, I don’t know why. Subaru call it **TCS**, or Traction Control System. |
| **B-TRC** / **Brake-LSD** (name from MY17 onwards) | Brake Traction Control. If one drive wheel spins up faster than the other this system detects that spin and brakes the spinning wheel which sends torque (“drive”) to the other wheel, so you can keep moving forwards. There is no official acronym for this system because it is not mentioned anywhere, but nevertheless it exists. For the purposes of this guide it’ll be known as B-TRC, because it is traction control operated via brakes as opposed to traction control by modulation of the throttle. This system is also known as an ‘LSD mode’, or limited-slip differential mode. That’s technically true but massively confusing because it’s not an LSD, it just acts a like one in some respects, and most 86/BRZs have a true, mechanical limited-slip differential in the form of a Torsen unit on the rear axle. Subaru’s term is **TCS Limited Slip Device**. Except it’s not a device, it’s just software. I did mention the names were confusing. |
| **ABS** | Anti-lock brakes. Detects that a wheel is about to lock and momentarily reduces brake pressure on that wheel to prevent the wheel locking up. Both Subaru and Toyota agree on this name. |
| **EBD & EBA** | Electronic Brakeforce Distribution. Cars are naturally designed to brake the front wheels more than the rear for safety reasons. Unfortunately, this means there is unused braking capacity on the rear wheels. EBD distributes braking force between all four wheels for maximum braking efficiency. Plain ABS just stops a wheel locking. There’s also EBA, Electronic Brake Assist and this helps you apply the brakes hard in an emergency by detecting how quickly your foot moved from accelerator to brake and if you don’t push the pedal all the way to the floor, it’ll help you. Both Subaru and Toyota agree on this name. |
