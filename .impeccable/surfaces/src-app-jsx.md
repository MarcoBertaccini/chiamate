---
version: 1
slug: "src-app-jsx"
primary_target: "src/App.jsx"
related_targets: []
---

# Surface brief — Editor "Centralino" (app single-surface)

Scope: la superficie unica dell'app Chiamate (canvas editor + gate PIN + lista flussi). Visitor mode: **Operate** — l'utente (Marco / piccolo team Zenith) costruisce e consulta script di chiamata a freddo; scanabilità, stato chiaro e affordance familiari battono l'espressione, ma il brand vive nel dettaglio preciso.

Audience/job: chi fa outbound a freddo, spesso al telefono, deve trovare in fretta la battuta giusta e il ramo corretto in base alla risposta del cliente. Azione primaria: aggiungere/collegare nodi (editing) e seguire il percorso (consultazione). Contenuto: copy pronunciabile per nodo + etichette-risposta sulle frecce. Vincoli: sito statico (GitHub Pages), persistenza Supabase, PIN, multi-dispositivo (mouse/dito/tastiera).

Direzione scelta: **Centralino a spinotti** (Impeccable's pick, mondo del centralino telefonico manuale). Momento memorabile: *innestare un cavo* — trascinare da un jack fa scattare lo spinotto nel jack di destinazione, e il percorso attivo si illumina come "linea impegnata".

## Direction contract

THESIS: La telefonata a freddo è un centralino da innestare, non una mind-map di bolle pastello. Ogni nodo è una piastra-jack con la battuta da pronunciare; ogni freccia è un cavo patch che porta la risposta del cliente. Rifiuta il default n8n (rettangoli pastello arrotondati su griglia a punti).

OWN-WORLD: Pannello bakelite avorio caldo (griglia a strisce di jack a filo, mai a punti), ferramenta ottone, inchiostro cavo grafite scuro; UN solo accento-segnale ambra/rosso = "linea impegnata" sul percorso attivo. Nodi = piastre-jack con targhetta ottone incisa (tipo+nome) e battuta virgolettata sulla faccia; codifica per tipo con lampada-linea (Apertura verde, Copy ottone neutro, Decisione = giunzione a rombo/selettore, Obiezione ambra, Chiusura rossa). Frecce = cavi intrecciati con spinotti metallici e cartellino-carta appeso (la risposta). Controlli = manopole/interruttori ottone su strip strumenti; minimap = piastra "quadro d'insieme"; barra alta = cartiglio "ZENITH STUDIO · CENTRALINO". Etichette in maiuscoletto inciso, copy in umanista leggibile (AA), numeri-jack in mono.

STORY: Marco apre uno script, vede la chiamata come un quadro di innesti, segue il cavo illuminato mentre il cliente risponde, legge la battuta virgolettata dalla piastra e innesta il ramo giusto.

FIRST VIEWPORT: Pannello bakelite a tutto schermo. In alto, cartiglio ottone: "CENTRALINO — <nome script>" + revisione + marchio Zenith, con manopole zoom/fit a destra. A sinistra, rastrelliera stretta di tipi-nodo come piastrine ottone (azione primaria = aggiungi nodo). Al centro, un flusso d'esempio: piastra Apertura a sinistra, cavi che instradano attraverso una giunzione di decisione fino a Obiezione/Chiusura, un cavo acceso ambra (linea impegnata) con cartellini-risposta. In basso a destra, minimap "quadro" + manopole ottone.

FORM: centralino telefonico manuale a spinotti; posizione #1 (pick) della mia lista di 7 mondi radicati; seed key 1a64a1d4. Alzata con: annotazioni su leader-line + "traccia ramo" (da tensegrity), copy tra virgolette vere (da streetwear), nodo attivo fisicamente sollevato con ombra vera (da studio-pelle), inchiostro singolo + un accento-segnale (da ASCII).

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance.
