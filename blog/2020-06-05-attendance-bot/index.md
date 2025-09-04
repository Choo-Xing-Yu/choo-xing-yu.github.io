---
slug: genus-attendance-bot
title: NUS Guitar Ensemble Attendance Bot
authors: [cxy]
---

I've developed a Telegram bot using Java and Springboot to automate attendance taking,
saving **6 hours of administrative work weekly**.
Enabling the Executive Committee to make data driven decisions.

<!-- truncate -->

## Preamble

_Hey, future Xingyu here. Just wanted to share a few thoughts before jotting this particular project down._

This project was completed during my first year as a student, when I had **no prior background in programming**.

Naturally, I made many sub-optimal choices—such as handwriting parsing logic with the Google Sheets API instead of using a relational database—simply because I didn’t know better at the time.

What I did have, however, was **youth and determination**. With enough hours and effort, I managed to make the project usable—and thankfully, it worked!

## Background

The current practice for attendance relies heavily on the SL/ASL to account for each member in their section, after which they report the attendance to the Secretary.  
However, individual members are not directly aware of when their attendance is being taken.

This approach poses several issues:

1. **Accuracy** – There may be cases where a member is late but is still reported as present and on time for convenience.
2. **Workload** – Both the SL/ASL and Secretary bear the administrative burden of tracking every member’s attendance at each practice.
3. **Human error** – Relying on memory increases the risk of mistakes.

Although taking attendance seems simple, it quickly becomes a tedious process.  
So why not **automate it with a Telegram bot**?

## Solution

### User Flow

<div id="figure1" style={{ textAlign: "center" }}>

![Figure 1: User Flow Diagram](/img/attendance-bot-user-flow-diagram.png)

**Figure 1: User Flow Diagram**

</div>

After registering, a member will send their location (longitude and latitude) to the Telegram bot via a simple inline-button click.  
The bot will then mark the member as **present** if they are within **200 meters** of the practice venue (to account for GPS inaccuracy).

The distance between two coordinates is calculated using the **Haversine Formula**.

This approach ensures that attendance submission is:

1. **Hassle-free** – only one button click required.
2. **Accurate** – based on precise location data.

### Admin Flow

<div id="figure2" style={{ textAlign: "center" }}>

![Figure 2: Admin Flow Diagram](/img/attendance-bot-admin-flow-diagram.png)

**Figure 2: Admin Flow Diagram**

</div>

The admin, usually the Secretary, manages the **start and end of practice sessions**, which tells the bot which user submissions should be recorded.

The admin also has access to key information and functionalities, including:

1. **Attendance status** of each member for the current practice (Present, Absent, Late).
2. **Reminders** to members who have not yet submitted their attendance via bot PMs.
3. **Report generation** at both individual and overall levels, including an overall attendance breakdown.

## Conclusion

This project ran for **2 years** (June 2020 to October 2022) before I retired it due to Heroku discontinuing its free tier.

Looking back as a more experienced software engineer (September 2025), there are several things I would have done differently:

1. **Use a dedicated relational database** (e.g SQLite | mySQL) instead of wrangling with Google Sheets API to simplify things.
2. **Continue hosting it on low-power computers** I have available (such as Raspberry Pis), which would also provide valuable DevOps practice.
3. **Validate member registration**, as previously anyone could register and the bot would not prevent it.

Overall, developing this Telegram bot as a first-year student taught me a great deal such as handling asynchronous issues and debugging complex workflows.

These experiences have significantly supplemented my education and helped shape me into the software engineer I am today.
