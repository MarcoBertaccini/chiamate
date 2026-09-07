# Chiamate — checklist di sviluppo

Editor di flussi per i copy delle telefonate (Zenith Studio). Stile n8n: tavola con pan/zoom da mouse/dito/tastiera, forme da diagramma di flusso, salvataggio Supabase, accesso via PIN. Deploy su `chiamate.zenith-studio.it` via GitHub Pages + Actions.

## Fase 0 — Setup progetto
- [x] 0.1 Clonare repo in locale
- [x] 0.2 npm init + install (vite, react, @xyflow/react, @supabase/supabase-js)
- [x] 0.3 Scaffold (index.html, vite.config, main.jsx, App.jsx, styles.css)
- [x] 0.4 Dev server verificato in browser
- [x] 0.5 plan.md + primo commit

## Fase 1 — Direzione visiva
- [x] 1.1 impeccable → direzione scelta: **Centralino a spinotti** (PRODUCT.md + surface brief con direction contract, seed 1a64a1d4)
- [ ] 1.2 Token in styles.css

## Fase 2 — Canvas e nodi
- [x] 2.1 FlowCanvas (ReactFlow, pannello a strisce, strumenti, minimap)
- [x] 2.2 Nodi custom (Apertura/Battuta/Decisione/Obiezione/Chiusura) come piastre-jack
- [x] 2.3 Editing nodo + cavo con cartellino-risposta + "traccia ramo"
- [x] 2.4 Rastrelliera "aggiungi nodo"
- [x] 2.5 Cartiglio (nuovo, lista, export/import JSON)
- [x] 2.6 Verifica interazioni in browser (PIN, editing, persistenza reload)

## Fase 3 — Persistenza e accesso
- [x] 3.1 Progetto Supabase dedicato (`fuabyzevydmphrhnzsms`, eu-west-1)
- [x] 3.2 Tabella flows + RLS + policy anon
- [x] 3.3 lib/supabase.js + lib/db.js (backend Supabase)
- [x] 3.4 useFlowPersistence (autosave debounced)
- [x] 3.5 PinGate (PIN 1234, sblocco in localStorage)
- [x] 3.6 Lista flussi (crea/rinomina/cambia/elimina)
- [x] 3.7 Verifica persistenza (riga nel DB, guard anti-doppio-seed)

## Fase 4 — Input multi-dispositivo + polish
- [x] 4.1 Tastiera (+/-, F, Delete) + touch
- [x] 4.2 Mobile (cartiglio compatto, rastrelliera in basso, fit-view, handle grandi)
- [x] 4.3 Polish (canvas dentro le chrome, nodo Decisione come selettore)

## Fase 5 — Deploy
- [x] 5.1 public/CNAME (chiamate.zenith-studio.it)
- [x] 5.2 GitHub Actions deploy.yml
- [x] 5.3 Commit + push
- [ ] 5.4 Pages = GitHub Actions, Action verde (richiede impostazione repo di Marco)
- [ ] 5.5 Istruzioni DNS a Marco + custom domain
- [ ] 5.6 App live verificata

## Fase 6 — Chiusura
- [x] 6.1 impeccable finish (detector pulito, DESIGN.md; review in-thread — vedi nota)
- [ ] 6.2 Aggiornare memory
