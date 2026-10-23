# ReleaseLab QA V2

Run it:

    npm install
    npm run dev        # open http://localhost:3000

Build check: `npm run build`

Where to edit things
- lib/site.ts      Calendly, email, LinkedIn, Formspree ID, GitHub repo URL, nav, footer links
- lib/content.ts   ALL page text: services, projects, assessments, partner models, tools,
                   testimonials (empty = honest placeholder), founder (null = hidden)
- app/             one folder per page (services, work, partners, tools, about, consultation)
- components/      layout (Navbar, Footer, Logo), sections, ui

Placeholders to replace
- Logo is text/CSS (components/layout/Logo.tsx). Swap in your logo image when ready.
- Hero dashboard and Intelligence chat are illustrations, labelled as such. Replace with real screenshots.
- privacy / terms contain placeholder text. Paste in your existing policies.
- lib/content.ts: scenarioCount (47) must match your real documented scenario count.
- lib/site.ts: set githubRepo once the repo is public.
- lib/content.ts: set `founder` to show a bio card on /about.
