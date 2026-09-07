# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

React + Vite con React Flow (`@xyflow/react`) per il canvas; `@supabase/supabase-js` per la persistenza. Scelta confermata dall'utente (React Flow per il comportamento "stile n8n" già pronto: pan/zoom, drag, connessioni, touch). Deploy statico su GitHub Pages con build automatica via GitHub Actions. Nessun backend proprio oltre a Supabase.

## Users

Utente primario: **Marco** (Zenith Studio) che effettua **chiamate outbound a freddo** a potenziali clienti per proporre i servizi dello studio. Situazione d'uso: al telefono o in preparazione alla chiamata, spesso con poco tempo, alternando desktop (portatile, tastiera) e mobile (in movimento, dito). Uso esteso a un **piccolo team** Zenith che consulta gli stessi script → utile una libreria di flussi condivisa.

## Product Purpose

Costruire e consultare i **copy degli script di chiamata** come **diagramma di flusso** navigabile: mappare l'andamento reale di una telefonata (apertura → battuta → cosa risponde il cliente → obiezione → chiusura) per avere le idee chiare e riusare i copy che funzionano. Successo = durante/prima della chiamata trovo subito la battuta giusta e il ramo corretto in base alla risposta del cliente, senza perdermi.

## Positioning

Non un generico tool di diagrammi né un CRM: è un **editor di script conversazionali a rami**, pensato per la telefonata a freddo, dove ogni nodo è un pezzo di copy pronunciabile e ogni freccia è una risposta del cliente. La forma a flowchart rispecchia il ramificarsi reale della conversazione.

## Operating Context

- Uso **multi-dispositivo**: navigazione della tavola con mouse (rotella/drag), dito (pan/pinch su mobile), tastiera (portatile: frecce, zoom, fit).
- Momenti d'uso: preparazione dello script a tavolino (editing) e consultazione rapida durante la chiamata (lettura/navigazione).
- Più flussi salvati (es. script diversi per servizio o tipo di target), selezionabili da una lista.
- Salvataggio cloud (Supabase) per sincronizzare tra portatile e telefono e condividere con il team.

## Capabilities and Constraints

- Canvas infinito pan/zoom con nodi trascinabili e connessioni con etichette (es. "SÌ", "NO", "se dice X").
- Tipi di nodo pensati per l'outbound a freddo: **Apertura**, **Battuta/Copy**, **Domanda/Decisione** (rombo, diramazione sulla risposta), **Obiezione** (obiezione + risposta), **Chiusura** (call to action / appuntamento).
- Editing inline del testo dei nodi (titolo + copy) ed etichette sulle frecce.
- Persistenza autosave su Supabase; export/import JSON.
- Accesso protetto da **PIN** semplice (gate lato client). Nota: PIN + anon key pubblica = protezione a livello di offuscamento, adeguata ad appunti di lavoro, non a dati riservati. Login email rimandato.
- Vincolo di hosting: sito statico su GitHub Pages (nessun server custom).

## Brand Commitments

- Nome app: **Chiamate**. Contesto: **Zenith Studio** (`zenith-studio.it`), studio di web/design.
- Dominio di pubblicazione: `chiamate.zenith-studio.it`.
- Coerenza con l'ecosistema personale dell'utente (progetti sobri, tecnici, no fronzoli — cfr. stile "blueprint" di Partisani), ma l'identità visiva specifica è decisa in new-work, non qui.

## Evidence on Hand

- Nessun copy di script reale fornito finora: i testi dei nodi di esempio sono **placeholder dimostrativi** da sostituire con i copy reali di Marco. Non inventare testimonianze, numeri o claim sui servizi Zenith.
- Immagine di riferimento fornita dall'utente: un diagramma di flusso generico (nodi colorati + rombo di decisione) come spunto di forma, non come identità visiva vincolante.

## Product Principles

1. **La telefonata è un albero, non una lista.** La UI deve rendere naturale ramificare sulla risposta del cliente.
2. **Copy pronunciabile prima di tutto.** Ogni nodo contiene testo che si legge ad alta voce; leggibilità > densità.
3. **Trovala in fretta.** Durante la chiamata conta la velocità di consultazione: navigazione fluida, gerarchia chiara, zero attrito.
4. **Stesso strumento ovunque.** Deve funzionare bene con dito e con tastiera, non solo col mouse.
5. **Riuso.** Gli script buoni si salvano, si duplicano e si condividono col team.

## Accessibility & Inclusion

Target di contrasto AA sul testo dei nodi (spesso letto rapidamente). Aree di tocco adeguate su mobile per controlli e handle di connessione. Navigazione da tastiera per l'uso su portatile.
