---
slug: intranet-manpower-dissemination-enhancement
title: Intranet manpower dissemination enhancement
authors: [cxy]
---

During my second reservist cycle (a 3-week stint), I implemented an enhancement to the existing manpower workflow,
resulting in an **annual savings of 180 man-hours** for a senior Engineer.

<!-- truncate -->

## Background

In this Organization, Engineers often receive their in-time to assigned locations only shortly in advance.

<div id="figure1" style={{ textAlign: "center" }}>

![Figure 1: Traditional Workflow](/img/qr-before.jpg)

**Figure 1: Traditional Workflow**

</div>

Manpower allocation is handled by a senior Engineer, who has access to the planned activities in advance.

The challenge? The schedule exists only on the intranet, but it needs to be shared over the internet via messaging platforms.

Currently, the planner has to manually type out the information **daily** (for up to **60 people**) and send it to other Engineers—an inefficient process that:

1. Is prone to **typos** and **human error**.
2. Consumes around **30 minutes every day**.

## Solution

### Identifying the problem

Manually entering daily manpower data takes around 30 minutes and is repetitive.
To improve efficiency, we need a solution that can:

1. **Parse the Excel file** into the required message structure.
2. **Seamlessly disseminate** the formatted message.

<div id="figure2" style={{ textAlign: "center", maxWidth: "60%", margin: "auto" }}>

![Figure 2: MSD compliance](/img/msd-zones-subset.jpg)

**Figure 2: MSD compliance**

</div>

The solution also has to be MSD-compliant, to ensure we're abiding by the restrictions.

### Introducing the QR Code

QR codes, short for Quick Response codes, are everywhere—from your Paylah QR to event tickets.
At first glance, they might just seem like a jumble of black and white squares, but they’re actually a powerful way to store information digitally.

<div id="figure3" style={{ textAlign: "center", maxWidth: "40%", margin: "auto" }}>

![Figure 3: Example QR Code](/img/qr-example.png)

**Figure 3: Example QR Code**

</div>

The most common use case for QR codes is opening a webpage instantly, but they are **not limited to just web links**.
They can also **encode text**, which can be easily read and processed by any modern smartphone.

This technology is what I leveraged to **enhance the manpower planner’s workflow**.

### Limitations

The intranet has several constraints:

1. **No internet access.**
2. **No software installations allowed**, except for those natively included.
3. **Computers must be operated within premises**, which has zone restrictions as illustrated in [Figure 2](#figure2).

These constraints mean that **message formatting and QR code generation must work within the limitations** outlined above.

### Implementation

[Project Nayuki](https://www.nayuki.io/page/qr-code-generator-library), an open source (under MIT License) QR Code generator,
has a [VBA port](https://github.com/wqweto/VbQRCodegen) which allows for offline QR code generation entirely using VBA.

Since Excel supports macros (VBA), we can:

1. **Parse the Excel file** using VBA (custom-written) into the required message structure.
2. **Generate QR code** based on the parsed data.
3. Have the **Engineer to scan the generated QR code**, allowing a one-click copy for efficient manpower dissemination.

### Enhanced Workflow

<div id="figure4" style={{ textAlign: "center" }}>

![Figure 4: Enhanced Workflow](/img/qr-after.jpg)

**Figure 4: Enhanced Workflow**

</div>

The implementation took roughly **4 days** and has been in effect since **26th August 2025**.

## Conclusion

Working around the limitations and delivering an effective solution during reservist has been very rewarding.
I hope to continue making a meaningful impact in the remaining reservist cycles to come!
