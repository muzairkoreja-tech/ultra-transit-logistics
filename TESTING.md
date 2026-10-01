# Ultra Transit Logistics — Test Checklist

The site has no logins or user accounts. Every visitor uses the same pages, so there are no
test users to create. Test it with the sample people below; each form submission arrives as an
email at **infoutldispatch@gmail.com**.

> **First time only:** the very first form submission sends an activation email from
> FormSubmit to infoutldispatch@gmail.com. Click **Activate Form** in that email. After that,
> every submission is delivered.

## Sample test people

| Role | Name | Phone | Email |
|---|---|---|---|
| Owner-operator (semi) | Test Carrier One | 555-010-0001 | use your own inbox, e.g. a second Gmail |
| Box truck fleet | Test Fleet Two | 555-010-0002 | same |
| CDL driver | Test Driver Three | 555-010-0003 | same |
| Tire buyer | Test Buyer Four | 555-010-0004 | same |

Use **MC 123456 / DOT 1234567** as fake numbers. Start every name with "TEST" so you can tell
these emails apart from real leads.

## 1. Home page — look and navigation
- [ ] Logo and "ULTRA TRANSIT" show in the header; the blue "Onboard Your Truck" button works
- [ ] Every menu item scrolls to its section (Solutions ▾ and Sales ▾ open their dropdowns)
- [ ] Phone: the ☰ menu opens and closes, and the dropdowns expand when tapped
- [ ] The blue strip under the opening section scrolls its text
- [ ] The counters count up to 48 / 24/7 / 5+ / 11+
- [ ] Clicking an equipment tile (Box Trucks, Semi…) highlights the matching price card; click again to clear
- [ ] The WhatsApp button opens a chat with +92 334 4550042
- [ ] The ↑ button appears after scrolling and returns to the top

## 2. Forms (each should land on the "Thank you!" page and send an email)
- [ ] **Driver Application** (Drivers section) — Test Driver Three, CDL-A
- [ ] **Carrier Onboarding** — Test Carrier One, Semi — Dry Van, 1 truck; attach a small PDF or photo as the W-9
- [ ] **Request Service** (Contact) — Test Fleet Two, service "MC Leasing"
- [ ] Buttons such as "Ask About MC Leasing" preselect that service in the Contact form
- [ ] Submitting with a required field empty is blocked by the browser

## 3. Other features
- [ ] **Track Load**: enter `TEST-001` → WhatsApp opens with the reference number filled in
- [ ] **MC/DOT Lookup** page: click "USDOT 44110" → the FMCSA SAFER page opens in a new tab
- [ ] **Truck Tires** page: "Price Drive Tires" preselects Drive; submit as Test Buyer Four
- [ ] Phone, email and WhatsApp links in the contact section and footer all work

## 4. Devices
- [ ] Desktop browser (Chrome / Edge)
- [ ] Android phone
- [ ] iPhone (Safari)
