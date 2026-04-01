# Instructor's Guide: Delivering the Web Development Fundamentals Course

## Communication & Community Strategy

### Slack Channels Structure

Create a Slack workspace with these channels:

| Channel Name | Purpose | Why It Works |
|--------------|---------|--------------|
| **#general** | Announcements, schedule changes, important links | One place for official communication |
| **#i-built-this** | Students post their completed projects (MVP: minimum 3 posts per student over course) | Public accountability, motivation, peer recognition |
| **#got-stuck** | Ask questions, share error messages, help each other | Normalizes struggling, peer learning |
| **#resources** | Share helpful links, tools, cheatsheets | Crowdsourced learning materials |
| **#i-achieved** | Post wins (small or big): "I deployed my first site!", "I fixed a bug!" | Momentum building, positivity |
| **#random** | Off-topic conversations, memes, fun | Community bonding |

### Daily/Weekly Rhythm

| Day | Action | Purpose |
|-----|--------|---------|
| **Monday** | Post weekly plan in #general: "This Saturday we'll build X. Here's what to expect." | Reduces anxiety, sets expectations |
| **Wednesday** | Send reminder + optional pre-reading/video (5 min max) | Gentle nudge, optional prep |
| **Friday** | "What questions do you have?" thread in #got-stuck | Address doubts before class |
| **Saturday (Class)** | Live session 2 hours | Main learning event |
| **Saturday Evening** | Post recording + summary + homework | Reinforcement |
| **Sunday** | Office hours (optional 1 hour) or asynchronous help | Support for those who need it |

---

## In-Class vs. Homework Strategy (Do Not Overwhelm!)

### The 80/20 Rule
- **In class:** 80% of new concepts, guided practice, core project building
- **At home:** 20% reinforcement, tiny exercises, optional exploration

### Weekly Structure

| Segment | Time | What Happens | Instructor Role |
|---------|------|--------------|-----------------|
| **Warm-up** | 15 min | Review previous week, answer questions | Listen, clarify |
| **Core Concept** | 30 min | Introduce new topic with live coding | Demonstrate, explain |
| **You Build (Struggle Time)** | 40 min | Students build along, get stuck | Walk around, help individually |
| **Break** | 10 min | Rest, stretch | Chat informally |
| **You Build Continued** | 40 min | Continue project, finish core feature | Debug, celebrate |
| **Show & Tell** | 15 min | 2-3 students share screens | Highlight wins, normalize mistakes |
| **Wrap-up & Homework** | 10 min | Recap, explain homework, what's next | Set clear expectations |

### Homework Philosophy

**Keep it light:** Maximum 1-2 hours per week (realistically, students have jobs/family)

| Type | Frequency | Examples | Time |
|------|-----------|----------|------|
| **Tiny Practice** | Every week | 3-5 small coding exercises (modify existing code, fix bugs, add small feature) | 30-45 min |
| **Reflection** | Every week | Post in #i-built-this or #i-achieved | 5 min |
| **Project Continuation** | Every 2-3 weeks | Complete the in-class project if not finished | 30-60 min |
| **Optional Challenge** | Some weeks | Extra feature for fast learners | Variable |

**Never assign new concepts for homework.** Homework should only reinforce what was taught in class.

---

## The 4 Portfolio Projects - How to Manage

### Project #1: Personal Profile Page (Weeks 1-2)

| Aspect | Details |
|--------|---------|
| **Build in class?** | Yes, S1-S2 (HTML structure, basic CSS) |
| **Finish at home?** | Polish and make responsive (S3 content applied) |
| **Deadline** | End of Week 2 |
| **Submission** | Post GitHub Pages link in #i-built-this |
| **Celebration** | Gallery walk - visit everyone's live sites in class |

### Project #2: HTML/CSS Mini Project (Week 3-4)

| Aspect | Details |
|--------|---------|
| **Build in class?** | Start in S6 (planning, wireframing, basic structure) |
| **Finish at home?** | Complete styling, responsive fixes |
| **Deadline** | End of Week 4 |
| **Submission** | Post GitHub Pages link in #i-built-this |
| **Celebration** | "Site Review Day" - peer feedback in pairs |

### Project #3: React Multi-Page App (Weeks 7-10)

| Aspect | Details |
|--------|---------|
| **Build in class?** | Build incrementally across S14-S20 |
| - S14: Components & Props (Profile Card) | Small practice, not main project |
| - S15: useState (Counter/To-do) | Small practice |
| - S16: Forms (Sign-up) | Small practice |
| - S17: useEffect (Posts list) | Start of main project |
| - S18: React Router | Add pages to main project |
| - S19-S20: Project Days | Dedicated time to complete |
| **Finish at home?** | Polish, add one extra feature, deploy |
| **Deadline** | End of Week 10 |
| **Submission** | Post Vercel/Netlify link in #i-built-this |
| **Celebration** | Lightning demos (2 min each) in class |

### Project #4: Final Portfolio Project (Week 12)

| Aspect | Details |
|--------|---------|
| **Build in class?** | S24 (last session) - dedicated build time |
| **Finish at home?** | Most work happens in Week 11-12 at home |
| **Deadline** | End of Week 12 (Demo Day) |
| **Submission** | Live URL + 3-min demo video (optional) |
| **Celebration** | Demo Day with guests (other instructors, friends, family) |

---

## Managing Student Accountability Without Pressure

### The "Commitment Contract" (Week 1)

Have students write down:
1. "I want to complete this course because ________"
2. "I commit to attending all sessions and posting my projects"
3. "When I get stuck, I will ask in #got-stuck before giving up"

Keep these and reference them mid-course.

### Weekly Check-ins

Simple Google Form each Friday (takes 2 minutes):

1. How confident do you feel about last week's material? (1-5)
2. What's one thing you're struggling with?
3. What's one win from this week?
4. Will you make it to class tomorrow?

Use responses to tailor Sunday office hours.

### Peer Accountability Pods

In Week 3, create groups of 3-4 students who:
- Exchange phone numbers (optional)
- Check in on each other before class
- Share wins and struggles
- Can ask "quick questions" without formality

### The "3 Strikes" Policy (Gentle)

- Miss 1 session: Instructor reaches out personally
- Miss 2 sessions: Peer pod reaches out
- Miss 3 sessions: Check-in call to see if they need to pause and rejoin next cohort

**Never shame.** Life happens. Welcome them back whenever.

---

## In-Class Teaching Best Practices

### Live Coding Rules

1. **Start from empty file every time** (no pre-written code)
2. **Make mistakes on purpose** and show how to fix them
3. **Comment as you go** - explain every line
4. **Use consistent naming** (no `x`, `y`, `foo`)
5. **Slow down** - type slowly, explain why

### The "Struggle Window"

When a student is stuck:
1. Wait 30 seconds (let them think)
2. Ask: "What do you expect to happen?"
3. Ask: "What is actually happening?"
4. Ask: "What's different?"
5. Guide them to the fix, don't just give it

### Pair Programming in Class

For project sessions:
- Pair students (random or by level)
- One driver (types), one navigator (thinks)
- Switch every 15 minutes
- Both must talk through the code

### Dealing with Different Paces

| Student Type | Strategy |
|--------------|----------|
| **Struggling** | Pair with stronger student, give simpler version of task |
| **Average** | Main curriculum |
| **Fast finisher** | "Bonus challenge" ready (add feature, try alternative approach, help others) |

---

## Homework Details (Week by Week)

| Week | Homework | Estimated Time | Due |
|------|----------|----------------|-----|
| **1** | Complete profile page styling • Post link in #i-built-this | 1 hour | Before Week 2 |
| **2** | Make profile responsive • Test on phone • Fix 1 bug | 1 hour | Before Week 3 |
| **3** | Complete HTML/CSS mini project • Post link | 1-2 hours | Before Week 4 |
| **4** | Practice console exercises • Write 3 functions | 45 min | Before Week 5 |
| **5** | Add clear button to shopping list • Add character counter | 45 min | Before Week 6 |
| **6** | Add filter button to product catalog • Post screenshot | 45 min | Before Week 7 |
| **7** | Complete React profile card • Experiment with props | 45 min | Before Week 8 |
| **8** | Complete counter + simple to-do | 45 min | Before Week 9 |
| **9** | Complete sign-up form with validation | 45 min | Before Week 10 |
| **10** | Polish React project • Add one extra feature • Deploy | 1-2 hours | Before Week 11 |
| **11** | Plan final project • Create wireframes • Set up repo | 1 hour | Before Week 12 |
| **12** | Complete final project • Prepare 3-min demo | 2-3 hours | Demo Day |

---

## Demo Day (Last Session)

### Structure

| Time | Activity |
|------|----------|
| 15 min | Setup, welcome, nerves calming |
| 60 min | 3-min demos (20 students = 60 min) |
| 15 min | Break, applause, high-fives |
| 20 min | Certificates, group photo, next steps |
| 10 min | Closing circle: "One thing I'm proud of" |

### Demo Format (3 Minutes Each)

1. **30 sec:** What did you build?
2. **1 min:** Show the live app (click around)
3. **1 min:** Show one piece of code you're proud of
4. **30 sec:** One challenge you overcame

### Guests to Invite
- Other instructors
- Alumni (if any)
- Family/friends (virtual)
- Local tech employers (optional, for networking)

---

## Tools & Automation

### What to Set Up Before Course Starts

| Tool | Purpose | Setup Needed |
|------|---------|--------------|
| **Slack** | Communication | Create channels, invite students |
| **Google Drive** | Share recordings, slides, resources | Create folder structure |
| **Google Forms** | Weekly check-ins | Create template |
| **GitHub Classroom** | Distribute exercises (optional) | Learn basics |
| **Zoom/Meet** | Live sessions | Test recording, screen sharing |
| **Notion/Website** | Course hub with all links (optional) | Create one page with everything |

### Automated Reminders

Use Slack reminders or a tool like Remind.com:

- "Class tomorrow at 10am! Bring your laptop charged ⚡"
- "Homework due tomorrow: Post your project link in #i-built-this"
- "Office hours Sunday at 4pm - bring your questions!"

---

## Instructor Mindset

### Your Mantras

1. **"They don't need to be experts, they need to be started."**
2. **"Confidence > Perfection."**
3. **"If they build it, they learned it."**
4. **"The best teacher is the one who struggled yesterday."**

### What to Celebrate

- First HTML page ✓
- First Git commit ✓
- First deployed site ✓
- First bug fixed independently ✓
- First time helping another student ✓
- First "I did it!" message ✓

### What NOT to Worry About

- If they don't finish every exercise
- If they forget syntax (Google exists)
- If they go slower than expected
- If they ask "basic" questions (there are none)

---

## Summary Checklist Before Week 1

| Task | Done? |
|------|-------|
| Slack workspace created with all channels | ☐ |
| Week 1 plan posted in #general | ☐ |
| Reminder sent to students | ☐ |
| All tools installed on your machine | ☐ |
| Backup plan for technical issues | ☐ |
| First session projects prepared | ☐ |
| Welcome slides ready | ☐ |
| Recording setup tested | ☐ |
| Coffee ☕ | ☐ |

---

You're not just teaching code. You're showing people that they can build things. That changes everything.

**Go change some lives.** 🚀