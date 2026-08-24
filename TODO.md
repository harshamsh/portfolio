# Before publishing

## 1. Placeholders in `index.html` (site is broken-ish without these)

| What | Where | Note |
|---|---|---|
| `REPLACE@example.com` | hero links, contact links | 2 occurrences |
| `linkedin.com/in/REPLACE` | hero links, contact links | 2 occurrences |
| `cv.pdf` | hero links, contact links | drop the PDF next to `index.html` |
| GitHub URL | hero links, contact links | currently `github.com/harshamsh` — point it wherever you want |

## 2. Claims deliberately left out

Your content bank flagged these as unconfirmed. Rather than publish a softened version, I cut them — an interviewer can check most of them in thirty seconds, and a missing claim costs nothing while a wrong one costs a lot.

- **Play Store status.** Case study E now ends at "prepared for review" and claims no outcome. No store link anywhere. Once you've confirmed the actual state — live and publicly listed, closed testing, or approved but unlisted — add one sentence to the case study outcome, plus a link in the hero if it's genuinely public.
- **The NVIDIA engagement and the automotive expo.** Both cut entirely. Add back once you can name the real shape of the relationship and the event.
- **The specific Android 15 change.** Cut. Naming it is what turns it into evidence; unnamed it's just a boast.
- **Protocol-version gating in the desktop app.** Cut from the release-engineering paragraph. If it's shipped, say so; if it's roadmap, "planned" reads fine on a portfolio.
- **Named tooling** — installer (WiX/Inno/MSIX), DI container, logging framework, code signing. All cut. Add whichever are real.
- **"Lead software engineer" on the 2023 UKRI project.** Not claimed anywhere; the site says sole/main software contributor at EarSwitch, which the content bank supports.
- **Unit test coverage.** Case study D says the seam exists and coverage is partial. Leave it that way unless you have a number.

## 3. Numbers worth adding

Case study C is the thinnest piece because it has no figures. Frame rate, end-to-end latency, subject count, session duration — any one of these makes it land. Same for case study E: detection latency, calibration time, review turnaround.

## 4. Visuals

The site has no images yet, and this portfolio lives or dies on showing the hardware. Highest value first:

1. Board photo + the bus-sniff bench setup (case study A)
2. Logic-analyser capture, real one, next to the stylised hero trace
3. The OLED showing live vitals (case study C)
4. WPF screenshot (D), Android screenshots (E)

## 5. Confidentiality

Run all five case studies past your CTO before this goes public — especially anything naming the clinical study, exact architecture detail, and the Play review specifics. Case study A discusses a named third-party chip's undocumented behaviour, which is almost certainly fine to publish, but confirm.

## 6. Repo links

Case studies aside, the tools section would be stronger with GitHub links on Project Map, Sponsor Checker, and both embedded projects.
