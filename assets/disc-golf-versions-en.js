window.KH_DISC_GOLF_RELEASES = [
  { version: "0.9.1", date: "2026-10-15", status: "Closed testing · Alpha · release 36", current: true,
    summary: "The major update introduced in version 0.9.0 reached the selected test group in release 36 (0.9.1), with GPS measurement, multi-round practice, records, analysis and multiplayer distance-throwing competitions.",
    newItems: [
      "GPS throw-distance measurement supports either a separate start point for every throw or one shared start for the measurement round. GPS results are approximate estimates that the player approves before saving.",
      "Multi-round distance practice supports 1–10 discs and 1–10 measurement rounds, with a new disc selection available between rounds.",
      "Per-disc overall, backhand and forehand records and throw analysis help compare results. Analysis uses available weather and wind data.",
      "Friend discs have their own section and can be combined with personal discs in a multiplayer distance-throwing competition on one phone.",
      "A distance-throwing competition produces one shareable scorecard for the whole group.",
      "Practice history brings together sessions, measurement rounds, throws and analyses. A completed practice result can be previewed and shared."
    ],
    improvedItems: [
      "The course-round interface, round setup and player selection have been made more compact and easier to follow.",
      "The Finnish and English in-app guide now covers the new practice, record and group-play workflows.",
      "Android startup was fixed by keeping the required Expo startup and splash-screen classes available in the main DEX."
    ],
    testerItems: [
      "Google Play closed Alpha release 36 (0.9.1) was last updated on 15 October 2026.",
      "Google Play granted production release access on 13 October 2026, but the app has not been released on the public production track.",
      "Local build 37 and TEST build 38 packages are not presented as Google Play releases."
    ] },
  { version: "0.9.0", date: "2026-10-14", status: "Major-update foundation · build 34", current: false,
    summary: "Version 0.9.0 introduced the foundation for a major practice and interface update. The features reached the selected Google Play Alpha group in 0.9.1/build 36 together with the Android startup fix.",
    newItems: [
      "The foundation was prepared for GPS distance practice, throw analysis, records, Friend discs and multiplayer distance-throwing competitions.",
      "The course-round interface, round setup and player selection were redesigned."
    ],
    improvedItems: ["The Finnish and English in-app guide was expanded to explain the new workflows."],
    testerItems: ["Build 34 was prepared for closed testing on 14 October 2026. The current Google Play Alpha release is 0.9.1/build 36."] },
  { version: "0.8.0", date: "2026-10-03", status: "Closed test release", current: false,
    summary: "Version 0.8.0 adds optional walking-distance tracking and a weather snapshot, with improvements to the Disc Bag, round history, shared scorecards and privacy information.",
    newItems: [
      "Optional distance tracking can measure the total distance walked during an active round, including while the screen is off.",
      "A weather snapshot can save temperature, conditions, wind speed and available gust data from Open-Meteo.",
      "Round duration, walking distance and weather can appear in history and on the shared scorecard image.",
      "The Disc Bag adds manufacturers, plastics, custom values and weight filtering.",
      "The About screen includes privacy information, Open-Meteo attribution and an explanation of location use."
    ],
    improvedItems: ["Unsaved-change protection improves Disc Bag editing.", "Round history, shared scorecards, update checking and overall reliability have been improved."],
    testerItems: ["Version 0.8.0 was published to the Google Play closed Alpha test channel on 3 October 2026.", "Selected testers can install the version through Google Play."] },
  { version: "0.7.0", date: "2026-09-27", status: "Closed test release", current: false,
    summary: "Version 0.7.0 expanded personal play tracking with scorecard sharing, a local My Profile view and a 501-card Card Deck.",
    newItems: ["Share a completed round as a scorecard image, including from round history.", "My Profile brings together local play and card statistics without an account.", "The Card Deck contains 501 Common, Rare, Epic and Legendary cards.", "Completed rounds can award PLAYED cards; GIFTED cards can be received by QR code.", "Card explanations and the disc golf glossary are available in Finnish and English.", "Scorecards gained hole and course record achievements and clearer score confirmation."],
    improvedItems: ["Round summaries, history and scorecards are easier to use.", "Card Deck, language switching and local data reliability were improved."],
    testerItems: ["Version 0.7.0 was submitted for Google Play closed Alpha review on 27 September 2026."] },
  { version: "0.6.1", date: "2026-09-21", status: "Closed test release", current: false,
    summary: "Version 0.6.1 was published to the Google Play closed Alpha channel for selected testers.",
    newItems: ["Disc Bag favourites became clearer, with Show favourites and Show all states.", "Search works together with the favourites filter and keeps the search text when switching views.", "Feedback and issue reports can include up to five previewable, individually removable images."],
    improvedItems: ["Feedback images are automatically reduced before being attached to email without changing the originals.", "The release also includes usability and reliability improvements."],
    testerItems: ["The version is available to selected Alpha testers through Google Play."] },
  { version: "0.6.0", date: "2026-09-17", status: "Closed test release", current: false,
    summary: "Version 0.6.0 improved round setup, the Disc Bag, course library and general usability.",
    newItems: ["Simplified round setup uses the course's saved hole and par data.", "Temporarily closed holes can be excluded from a round.", "Play again starts a new round with previous settings.", "Disc Bag search and favourites make discs easier to find.", "Favourite courses are easier to reach.", "An in-app Finnish/English setting works independently of the device language.", "Feedback and issue reporting are available from About and during an active round."],
    improvedItems: ["Disc Bag usability, round-setting loading and overall reliability were improved."] },
  { version: "0.5.3", date: "2026-09-08", status: "Internal test release", current: false,
    summary: "Flick two-player mode and the shared record board became clearer and work better with long player names.",
    newItems: ["Solo and two-player Flick share one Record Board · TOP 6.", "Either player's personal eight-hole score can enter the same TOP 6.", "A three-character player identifier is stored for a new TOP 6 score."],
    improvedItems: ["Two-player results were clarified, and long player names, safe areas and small screens are handled better."],
    testerItems: ["The version was published to Google Play internal testing."] },
  { version: "0.5.2", date: "2026-09-07", status: "Internal test release", current: false,
    summary: "The Disc Bag and flight estimate expanded equipment management, and custom courses became editable after creation.",
    newItems: ["Save disc details including manufacturer, plastic, colour, weight, condition, purchase information, ratings and preferences.", "Add Speed, Glide, Turn and Fade plus an image selected from the gallery.", "Local flight estimates help illustrate disc characteristics without an online service.", "User-created courses and map images can be edited later."],
    improvedItems: ["ZIP backups include Disc Bag images.", "The Flick launch area, app information and settings were clarified."] },
  { version: "0.5.1", date: "2026-09-06", status: "First broader internal test release", current: false,
    summary: "The first broader Google Play internal test release brought together the core round, course and garden-game features.",
    newItems: ["Included courses and maps plus custom course creation.", "Round scoring, history and personal course and hole records.", "Personal one-to-five-star course ratings.", "Discs into the cage and the one-player eight-hole Flick mini-game with a TOP 6 board."],
    improvedItems: ["Phone and tablet scrolling and Flick touch targeting were improved."] }
];
