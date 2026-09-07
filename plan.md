# Chiamate — checklist di sviluppo

Editor di flussi per i copy delle telefonate (Zenith Studio). Stile n8n: tavola con pan/zoom da mouse/dito/tastiera, forme da diagramma di flusso, salvataggio Supabase, accesso via PIN. Deploy su `chiamate.zenith-studio.it` via GitHub Pages + Actions.

## Fase 0 — Setup progetto
- [x] 0.1 Clonare repo in locale
- [x] 0.2 npm init + install (vite, react, @xyflow/react, @supabase/supabase-js)
- [x] 0.3 Scaffold (index.html, vite.config, main.jsx, App.jsx, styles.css)
- [x] 0.4 Dev server verificato in browser
- [x] 0.5 plan.md + primo commit

## Fase 1 — Direzione visiva
- [ ] 1.1 impeccable → direzione (palette, tipografia, look tavola/nodi, motion)
- [ ] 1.2 Token in styles.css

## Fase 2 — Canvas e nodi
- [ ] 2.1 FlowCanvas (ReactFlow, background punti, controls, minimap)
- [ ] 2.2 Nodi custom (Start, Copy, Decision, Objection, End)
- [ ] 2.3 Editing nodo + edge con label
- [ ] 2.4 Sidebar palette "aggiungi nodo"
- [ ] 2.5 Toolbar (nuovo, fit-view, export/import JSON)
- [ ] 2.6 Verifica interazioni in browser

## Fase 3 — Persistenza e accesso
- [ ] 3.1 Progetto Supabase dedicato
- [ ] 3.2 Tabella flows + RLS
- [ ] 3.3 lib/supabase.js + lib/db.js
- [ ] 3.4 useFlowPersistence (autosave debounced)
- [ ] 3.5 PinGate
- [ ] 3.6 Lista flussi (crea/rinomina/cambia/elimina)
- [ ] 3.7 Verifica persistenza

## Fase 4 — Input multi-dispositivo + polish
- [ ] 4.1 Tastiera (frecce, +/-, F, Delete)
- [ ] 4.2 Mobile (pan/pinch, pulsanti add-node)
- [ ] 4.3 baseline-ui pass

## Fase 5 — Deploy
- [ ] 5.1 public/CNAME
- [ ] 5.2 GitHub Actions deploy.yml
- [ ] 5.3 Commit + push
- [ ] 5.4 Pages = GitHub Actions, Action verde
- [ ] 5.5 Istruzioni DNS a Marco + custom domain
- [ ] 5.6 App live verificata

## Fase 6 — Chiusura
- [ ] 6.1 impeccable finish review
- [ ] 6.2 Aggiornare memory
