# PostHog post-wizard report

The wizard completed a client-side PostHog integration for this Next.js App Router project using `instrumentation-client.ts`, a reverse proxy in `next.config.ts`, and targeted event capture in key interaction points. It also added app-level error capture with `app/global-error.tsx`, created `.env.local` entries for the PostHog token and host, and created a PostHog dashboard plus five saved insights. Package installation could not be completed in this environment because no bash shell is available, so `posthog-js` still needs to be added to the project dependencies before this code will build successfully.

| Event name | Event description | File |
| --- | --- | --- |
| explore_events_clicked | Tracks when a visitor clicks the explore events call to action. | `app/components/ExploreBtn.tsx` |
| event_card_selected | Tracks when a visitor selects an event card from the featured events grid. | `app/components/EventCard.tsx` |
| navigation_link_clicked | Tracks when a visitor uses the main navigation links. | `app/components/Navbar.tsx` |
| app_error_seen | Tracks when a visitor hits the app-level error boundary. | `app/global-error.tsx` |

## Next steps

We've built some insights and a dashboard for you to keep an eye on user behavior, based on the events we just instrumented:

- Dashboard: [Analytics basics (wizard)](https://us.posthog.com/project/512064/dashboard/1847035)
- Insight: [Explore to selection funnel (wizard)](https://us.posthog.com/project/512064/insights/qCeF0A7O)
- Insight: [Explore events clicks (wizard)](https://us.posthog.com/project/512064/insights/dS4ZO8wm)
- Insight: [Navigation clicks (wizard)](https://us.posthog.com/project/512064/insights/JuJ9QTBt)
- Insight: [Event card selections (wizard)](https://us.posthog.com/project/512064/insights/dX6oNva9)
- Insight: [App errors seen (wizard)](https://us.posthog.com/project/512064/insights/OcLO1Fc1)

## Verify before merging

- [ ] Run a full production build (the wizard only verified the files it touched) and fix any lint or type errors introduced by the generated code.
- [ ] Run the test suite — call sites that were rewritten or instrumented may need updated mocks or fixtures.
- [ ] Add the exact PostHog env var names you added to `.env.example` and any monorepo/bootstrap scripts so collaborators know what to set.
- [ ] Wire source-map upload (`posthog-cli sourcemap` or your bundler's upload step) into CI so production stack traces de-minify.
- [ ] Install `posthog-js` in the project dependencies because package installation could not run in this environment.

### Agent skill

We've left an agent skill folder in your project. You can use this context for further agent development when using Claude Code. This will help ensure the model provides the most up-to-date approaches for integrating PostHog.
