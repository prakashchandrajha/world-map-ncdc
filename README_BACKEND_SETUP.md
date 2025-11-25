# Ultimate High-Performance Architecture Guide
**Stack:** Angular (Frontend) + Spring Boot (Backend) + PostgreSQL (Database)

This guide focuses on making your site **super fast** and **scalable** (200+ sites, new components) while keeping the Google Translate API key secure.

---

## 1. The Golden Rule: "Backend is the Brain"
**NEVER** store your Google API Key in the Angular frontend.
*   **Security:** If it's in Angular, anyone can steal it and use your quota.
*   **Performance:** If Angular calls Google API, the browser does the heavy lifting.
*   **Solution:** Store the API Key in your Spring Boot `application.properties` (or environment variables). Only the backend talks to Google.

---

## 2. Database Strategy (PostgreSQL)
To handle future growth (more sites, more components) without slowing down, use a **Hybrid SQL/NoSQL** approach.

### Table 1: `sites` (Lightweight Index)
*   **Purpose:** Used for the Map and Lists. Must be tiny and fast.
*   **Columns:** `id`, `lat`, `lng`, `type`, `main_image_url`.
*   **Why:** When the map loads, it fetches this table. It's small, so 200 (or even 2000) markers load instantly.

### Table 2: `translations` (The Content Vault)
*   **Purpose:** Stores all text for every component in every language.
*   **Columns:**
    *   `id` (PK)
    *   `entity_id` (FK to `sites` or other components)
    *   `entity_type` (e.g., 'SITE', 'ABOUT_US', 'HEADER') <-- *Crucial for future components*
    *   `language` (e.g., 'fr', 'es')
    *   `content` (**JSONB**) <-- *The Secret Weapon*
*   **Why JSONB?** You can store *any* structure here. Today it's a Site description, tomorrow it's a new "About Us" component structure. You don't need to change the DB schema when you add new features.

---

## 3. The "Super Fast" Workflow

### Scenario: User switches language to French ('fr')

1.  **Frontend (Angular):**
    *   Sends **ONE** request: `GET /api/page-content?lang=fr&page=home`
    *   *Optimization:* Do not request translation for every single paragraph. Request the whole page or site object at once.

2.  **Backend (Spring Boot):**
    *   **Step A (The Cache Check):** Queries Postgres: `SELECT content FROM translations WHERE language='fr'`.
    *   **Step B (The Hit):** If found, return JSON immediately. (Speed: < 50ms).
    *   **Step C (The Miss - First Time Only):**
        1.  Fetch English content.
        2.  Call Google API (using the hidden Key).
        3.  **Save result to Postgres `translations` table.**
        4.  Return JSON. (Speed: ~1s, but only once in history).

---

## 4. Additional "Super Fast" Tricks

### A. Image Optimization (CDN)
*   **Problem:** Your `assets/images` are served from your server. If a user is in Japan and your server is in US, it's slow.
*   **Solution:** Use a CDN (Cloudflare, AWS CloudFront). It caches your images on servers near the user.
*   **Format:** Convert all PNG/JPG to **WebP**. It reduces size by ~30% with no quality loss.

### B. Angular "OnPush" Strategy
*   In your `MapComponent` and `SiteDetailComponent`, add `changeDetection: ChangeDetectionStrategy.OnPush`.
*   **Why:** This tells Angular "Don't check this component for changes unless I tell you." It stops the map from lagging when you scroll or click.

### C. Redis (The "Ferrari" Layer) - *Optional but Recommended*
*   If Postgres isn't fast enough (unlikely for <10k sites), put **Redis** in front of it.
*   Redis stores the JSON in RAM. Fetching from Redis is measured in *microseconds*.

---

## 5. Summary Checklist

1.  [ ] **Move API Key:** Delete from Angular. Add to Spring Boot `application.properties`.
2.  [ ] **Setup Postgres:** Create `sites` and `translations` (with JSONB) tables.
3.  [ ] **Spring Boot Logic:** Implement "Check DB -> If Missing, Call API & Save" logic.
4.  [ ] **Angular Update:** Refactor `SitesService` to call your new Spring Boot endpoints.
5.  [ ] **Images:** Convert to WebP.