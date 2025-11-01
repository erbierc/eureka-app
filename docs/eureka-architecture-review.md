# Eureka App Data Architecture Review

This document outlines potential **weak points** in the current data handling approach for the Eureka app, along with **recommended fixes**.

---

## 🧱 1. Static Eureka Data ("Fetched Once and Cached Forever")

**Weak Points:**
- May serve **stale data** if Tina content updates silently.
- No cache invalidation mechanism.
- Difficult to extend if server-side filtering or pagination is needed later.

**Fixes:**
- Add **cache versioning** (e.g. commit hash or timestamp).
- Set a **reasonable `staleTime`** (e.g. 1 day) and revalidate periodically.
- Abstract fetching logic so you can later switch to dynamic filtering without refactoring UI components.

---

## 👤 2. Ownership Data (LocalStorage)

**Weak Points:**
- Can bloat quickly if many owned items are stored.
- No defined schema → brittle structure.
- Migration pain if ownership data changes shape in the future.
- No persistence across devices unless synced to backend.

**Fixes:**
- Use a **versioned schema** in LocalStorage: `{ version, data }`.
- Add lightweight **migration logic** on app load.
- Optionally sync with Supabase or another backend for multi-device persistence.

---

## ⚙️ 3. Client-Side Filtering (TanStack Table)

**Weak Points:**
- All Eurekas are loaded into memory → can lag for large datasets.
- Complex nested filters (color/style) can cause unnecessary re-renders.
- Difficult to scale if data volume increases.

**Fixes:**
- Normalize or flatten nested color structures before rendering.
- Use **memoized selectors** for filtering and sorting.
- If dataset grows, move filtering and sorting back to server-side.

---

## 🪄 4. Data Integrity (Content vs Ownership)

**Weak Points:**
- Ownership and content are decoupled — deleted or renamed content in Tina can create orphaned ownership records.
- No reconciliation between stored ownership data and available Eurekas.

**Fixes:**
- Implement a **reconciliation step** during hydration:
  - Compare ownership keys against current Eurekas.
  - Remove or update invalid entries automatically.

---

## 💬 TL;DR Summary

| Layer | Weak Point | Fix |
|-------|-------------|-----|
| Eureka Cache | Might serve stale data | Add versioning + revalidation |
| Ownership Store | Can bloat or break | Add schema + versioning |
| Client Filtering | Might lag later | Memoize or normalize |
| Data Integrity | Possible orphans | Cross-validate on load |

---

**Overall Verdict:**  
✅ Excellent starting architecture — lightweight, cost-free, and performant.  
⚠️ Needs cache invalidation, versioning, and ownership reconciliation to remain stable long-term.
