---
title: "Diagnosing trouble codes for the Toyota 86 ZN6 Subaru BRZ ZC6 with Toyota Techstream ODB-II code reader"
subtitle: "How to connect ZN6, ZC6 vehicles to Toyota Techstream software with an ODB-II to USB cable and VirtualBox with Toyota Techstream software"
datePublished: "2023-01-06T14:44:00"
published: true
author: Ron. A (@brz_typera)
tags:
  - software
  - diagnostics
  - electronics
  - ECU
  - toyota techstream
  - ODB-II
  - zn6
  - zc6
thumbnailPhoto: /kb/diagnosing-trouble-codes-for-the-toyota-86-zn6-subaru-brz-zc6-with-toyota-techstream-odb-ii-code-reader/card.png
---

<figure>
  <img src="/kb/diagnosing-trouble-codes-for-the-toyota-86-zn6-subaru-brz-zc6-with-toyota-techstream-odb-ii-code-reader/laptop.png" alt="ODB-II diagnosis with Toyota Techstream">
  <figcaption>
    ODB-II diagnosis with Toyota Techstream
  </figcaption>
</figure>

Toyota Techstream is diagnostic software that allows you to diagnose and troubleshoot issues with Toyota and some Subaru vehicles. It reads and clears diagnostic trouble codes (DTCs) that are stored in the vehicle's on-board computer. It also provides access to various functions and systems in the vehicle, such as the engine control system, transmission system, and ABS (anti-lock brake system), so that technicians can perform tests and make adjustments as needed.

To read codes with Toyota Techstream, you will need to connect a ODB-II to USB cable to the vehicle's ODB-II port. The technician will then start the Techstream software and follow the prompts to access the diagnostic functions of the vehicle. Once the diagnostic functions are accessed, the technician can retrieve the stored DTCs and use them to diagnose and fix the issue with the vehicle.

Subaru SSM4 is Toyota's equivalent of Techstream, their dealer tool to read, set and manipulate values in the ECU, but there isn't much difference of the capabilities.

## Buy a ODB-II Mini-VCI Cable

Buy a USB to Mini-VCI ODB-II cable, you can buy them on [Amazon](https://www.amazon.com/gp/product/B097YC5LSR/) or [eBay](https://www.ebay.com/itm/314111811780?mkevt=1&mkcid=1&mkrid=711-53200-19255-0&siteid=0&customid=&campid=5337589904&toolid=10001&mpt=9031539)

## Download and install VirtualBox

- [Windows](https://download.virtualbox.org/virtualbox/7.0.2/VirtualBox-7.0.2-154219-Win.exe)
- [Apple Intel macOS](https://download.virtualbox.org/virtualbox/7.0.2/VirtualBox-7.0.2-154219-OSX.dmg)
- [Apple M1, M2 macOS](https://github.com/utmapp/UTM/releases/latest/download/UTM.dmg)

On Windows: Double-Click downloaded file, on macOS Double-Click downloaded file, run installer or drag Applications folder.

## Download and install TechStream

- [Windows / Apple Intel macOS](https://mega.nz/#!fsEizJyC!aH_2a1hQnX6LpicDS1Bq-gEKVEU57cotd3_QesN2_M0) v12.20.024
- [Apple M1, M2 macOS](https://mega.nz/file/rkNlgAIS#2KhsbV9__V3u1Q3XvqXCTEbhZ8Q5t9MwQ0yHGaFkT7M)

## Instructions

<figure>
  <img src="/kb/diagnosing-trouble-codes-for-the-toyota-86-zn6-subaru-brz-zc6-with-toyota-techstream-odb-ii-code-reader/screenshot.jpg" alt="ODB-II diagnosis with Toyota Techstream">
  <figcaption>
    ODB-II diagnosis with Toyota Techstream
  </figcaption>
</figure>

1. Plug ODB-II Mini-VCI cable into the ODB-II port of the vehicle, located under the steering wheel. Plug the USB side into computer
2. Verify the USB controller is enabled on the Techstream image
    - in VirtualBox, click the Settings icon, navigate to Ports, USB, and verify the "Enable USB controller" is checked
3. Run Techstream image in VirtualBox, wait for Windows to boot
4. Run the installed Techstream software, located on the Windows Desktop "TechStream"
5. Click the "Connect to Vehicle" button



