---
name: Chiamate
description: Editor di script per chiamate a freddo disegnati come un centralino telefonico a spinotti.
colors:
  panel-ivory: "#e7ddc6"
  panel-hi: "#efe7d4"
  panel-lo: "#d8ccb0"
  panel-edge: "#b9ac89"
  brass: "#b78f3f"
  brass-hi: "#e6c878"
  brass-lo: "#7c5f22"
  brass-ink: "#5a4718"
  ink: "#2a241d"
  ink-soft: "#6b5f49"
  cord-graphite: "#2b2620"
  signal-amber: "#e0892a"
  lamp-apertura: "#4f9d67"
  lamp-decisione: "#3f7bb0"
  lamp-obiezione: "#e0892a"
  lamp-chiusura: "#c6462e"
  console-dark: "#241d16"
typography:
  plate:
    fontFamily: "Barlow Condensed, 'Arial Narrow', sans-serif"
    fontSize: "12.5px"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "0.16em"
  body:
    fontFamily: "Spectral, Georgia, serif"
    fontSize: "14.5px"
    fontWeight: 400
    lineHeight: 1.42
    letterSpacing: "normal"
  mono:
    fontFamily: "'JetBrains Mono', ui-monospace, monospace"
    fontSize: "10px"
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: "normal"
rounded:
  sm: "3px"
  md: "7px"
  lg: "12px"
spacing:
  xs: "6px"
  sm: "8px"
  md: "13px"
  lg: "18px"
components:
  plate:
    backgroundColor: "{colors.panel-hi}"
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
    padding: "11px 13px"
  plate-header:
    backgroundColor: "{colors.brass}"
    textColor: "{colors.brass-ink}"
    rounded: "{rounded.md}"
    padding: "7px 11px"
  knob:
    backgroundColor: "{colors.brass}"
    textColor: "{colors.brass-ink}"
    rounded: "{rounded.md}"
    padding: "7px 12px"
  cord-tag:
    backgroundColor: "{colors.panel-hi}"
    textColor: "{colors.ink}"
    rounded: "{rounded.sm}"
    padding: "3px 8px"
---

# Design System: Chiamate

## Overview

**Creative North Star: "Il centralino dell'operatore"**

Chiamate rende una telefonata a freddo come un vecchio centralino manuale a spinotti: una consolle di bakelite avorio su cui si innestano piastre-jack (i nodi dello script) e si tirano cavi intrecciati (le risposte del cliente). Non è una mappa di bolle pastello su griglia a punti — è un pannello di strumenti, con ferramenta d'ottone incisa, numeri di linea e un'unica spia ambra che segnala la "linea impegnata". L'estetica è calda, tecnica e sobria: coerente con lo stile blueprint dell'ecosistema Zenith Studio, ma con la materialità dell'apparato telefonico.

Il sistema è a **inchiostro caldo su avorio**: testo grafite ad alto contrasto per il parlato, ottone per la ferramenta e i controlli, un solo accento cromatico (ambra) riservato allo stato attivo. La profondità è reale — le piastre poggiano sul pannello con ombre morbide e si sollevano fisicamente quando selezionate. Anti-riferimento dichiarato: l'editor a nodi generico stile n8n (rettangoli arrotondati pastello, campo a puntini).

**Key Characteristics:**
- Pannello bakelite avorio a strisce di jack (mai griglia a punti)
- Ferramenta d'ottone incisa; maiuscoletto condensato per le targhette
- Un solo accento-segnale (ambra) per lo stato "linea impegnata"
- Copy del parlato sempre tra caporali («…»)
- Profondità tattile: le piastre si sollevano da selezionate

## Colors

Palette calda mono-accento: avorio e ottone costruiscono tutto, l'ambra parla solo quando una linea è attiva.

### Primary
- **Ottone inciso** (#b78f3f, chiari #e6c878 / scuri #7c5f22): tutta la ferramenta — targhette dei nodi, bottoni-manopola, strumenti, jack. È il "metallo" della consolle.

### Secondary
- **Ambra-segnale** (#e0892a): unico accento cromatico vivo, riservato alla "linea impegnata" (cavo acceso sul ramo a valle del nodo selezionato, indicatore di salvataggio). La sua rarità è il messaggio.

### Tertiary
- **Lampade di codifica** (Apertura #4f9d67, Decisione #3f7bb0, Obiezione #e0892a, Chiusura #c6462e): piccole spie che distinguono il tipo di nodo, mai campiture estese.

### Neutral
- **Avorio bakelite** (#e7ddc6, alto #efe7d4, basso #d8ccb0): il pannello e la faccia delle piastre.
- **Grafite** (#2a241d testo / #2b2620 cavi): inchiostro del parlato e dei cavi.
- **Grafite tenue calda** (#6b5f49): testo secondario — tinto caldo, **mai grigio neutro**.
- **Consolle scura** (#241d16): cartiglio, rastrelliera e strumenti (il telaio dell'apparato).

### Named Rules
**The One-Signal Rule.** L'ambra è l'unico colore "acceso" del sistema e appare solo sullo stato attivo (linea impegnata / salvataggio). Se colora più di un ramo alla volta, ha smesso di significare qualcosa.

## Typography

**Display/Targhette:** Barlow Condensed (fallback Arial Narrow) — maiuscoletto condensato, inciso come sull'ottone.
**Body/Parlato:** Spectral (fallback Georgia serif) — la battuta da leggere ad alta voce.
**Label/Mono:** JetBrains Mono — numeri di linea (L01…), valori, timestamp.

**Character:** L'incisione condensata dà la voce "strumento/pannello"; il serif umanista dà calore e leggibilità al parlato; il mono è solo misura e identificatori, mai decorazione.

### Hierarchy
- **Targhetta tipo** (Barlow Condensed 700, 12.5px, tracking .16em, UPPERCASE): header ottone dei nodi e etichette di sezione.
- **Titolo nodo** (Barlow Condensed 600, 13px, tracking .06em, UPPERCASE): il nome della battuta dentro la piastra.
- **Parlato** (Spectral 400, 14.5px, line-height 1.42): il copy pronunciabile, tra caporali.
- **Cartellino-risposta** (Barlow Condensed 600, 12px, tracking .1em, UPPERCASE): l'etichetta sul cavo.
- **Numero di linea / meta** (JetBrains Mono 500, 10–11px, tabular-nums): L01…L05, orari, stato.

### Named Rules
**The Spoken-Line Rule.** Il testo di un nodo è sempre parlato: si mostra tra caporali («…») e si compone in Spectral. Se una stringa non si pronuncia ad alta voce, non è un nodo.

## Layout

Applicazione a schermo intero con tre chrome fisse sul pannello: **cartiglio** in alto (52px, consolle scura con marchio, nome script, azioni), **rastrelliera** a sinistra (168px, i tipi-jack) e **strumenti + minimap** in basso a destra. Il canvas React Flow vive inset dentro queste chrome (`inset: 52px 0 0 168px`) così non finisce mai sotto di esse. Il fondo è un pannello a strisce orizzontali di jack (repeating-linear-gradient), non una griglia a punti. Ritmo di spaziatura 6/8/13/18px. All'apertura il canvas fa sempre fit-view (viewport robusto tra dispositivi).

Responsive: sotto 720px la rastrelliera si sposta in basso a scorrimento orizzontale, il cartiglio diventa compatto a sole icone, la minimap si nasconde, gli handle crescono a 20px per il tocco.

## Elevation & Depth

Sistema **tattile a rilievo**: le superfici poggiano fisicamente sul pannello con ombre a offset+blur e un inset chiaro/scuro che simula il bordo smussato dell'ottone. La profondità è funzionale — segnala lo stato.

### Shadow Vocabulary
- **lift-1** (`0 1px 2px rgba(52,40,18,.18), 0 2px 6px rgba(52,40,18,.14)`): piastre e cartellini a riposo.
- **lift-2** (`0 3px 6px rgba(52,40,18,.22), 0 10px 22px rgba(52,40,18,.20)`): chrome (cartiglio, rastrelliera, strumenti).
- **lift-3** (`0 6px 12px rgba(52,40,18,.26), 0 22px 44px rgba(52,40,18,.28)`): nodo selezionato e pannello del PIN.
- **inset** (`inset 0 1px 0 rgba(255,251,240,.55), inset 0 -2px 4px rgba(120,96,40,.18)`): smusso dell'ottone su targhette e bottoni.

### Named Rules
**The Lift-On-Engage Rule.** Un nodo selezionato sale (translateY -2px + lift-3): la selezione è un gesto fisico, non solo un bordo colorato.

## Shapes

Angoli morbidi contenuti: 7px per piastre, bottoni e chrome; 3px per i cartellini-carta; 12px per i pannelli grandi (PIN, sheet). I jack di connessione sono cerchi con anello d'ottone e foro scuro. Il nodo Decisione è marcato come **giunzione/selettore**: header acciaio-blu e lampada a **rombo** (ruotata 45°), a distinguerlo dalle piastre lineari. I cavi sono bezier a tratto grafite spesso con overlay tratteggiato (trecciatura) e freccia d'ottone; lo stato attivo aggiunge un alone ambra sfocato.

## Components

### Buttons (manopole d'ottone)
- **Shape:** angoli 6–7px (`{rounded.md}`).
- **Primary (manopola piena):** gradiente ottone (brass-hi→brass→brass-lo), testo grafite scuro, padding 7px 12px, maiuscoletto Barlow Condensed, lift-1 + inset.
- **Ghost (cartiglio):** ottone traslucido su consolle scura, testo brass-hi.
- **Hover/Active:** `filter: brightness(1.06)` in hover; `translateY(1px)` e solo inset in active (il bottone si preme).

### Cards / Containers (piastre-jack)
- **Corner:** 7px. **Background:** faccia avorio (panel-hi→panel→panel-lo). **Header:** targhetta ottone incisa con lampada di tipo e numero di linea mono. **Shadow:** lift-1 a riposo, lift-3 da selezionato. **Border:** 1px panel-edge. **Padding:** 11–13px.

### Inputs / Fields
- **Style:** campo crema (#fffdf6), bordo ottone, radius 4px, ombra interna. Compaiono solo in editing (doppio-click sul nodo o sul cartellino).
- **Focus:** anello `2px solid signal-amber` con offset 2px (regola globale su :focus-visible).
- **Error:** bordo rosso-chiusura + shake (PIN); toast per errori d'importazione.

### Navigation (rastrelliera dei jack)
- Piastrine tipo-nodo su consolle scura, ognuna con lampada di codifica e nome inciso; hover scivola di 2px. Un tap inserisce il nodo al centro della viewport (touch-friendly).

### PIN gate (consolle di connessione)
- Pannello avorio sollevato (lift-3) con tastierino d'ottone; quattro slot-cifra crema; supporta tastiera fisica e tocco. È la "connessione operatore".

### Cord + tag (componente firma)
- Cavo bezier grafite con trecciatura tratteggiata e freccia; cartellino-carta appeso con foro dello spago che porta la risposta del cliente, editabile in doppio-click. Sul ramo a valle del nodo selezionato il cavo si accende d'ambra (linea impegnata).

## Do's and Don'ts

### Do:
- **Do** riservare l'ambra (#e0892a) al solo stato attivo/salvataggio; tutto il resto è avorio, ottone e grafite.
- **Do** comporre il parlato in Spectral tra caporali; targhette e controlli in Barlow Condensed maiuscoletto.
- **Do** dare profondità con ombre a offset+blur e sollevare le superfici quando cambiano stato.
- **Do** tenere il fondo a strisce di jack orizzontali; il pannello è una consolle, non un foglio.
- **Do** tingere il testo secondario di caldo (#6b5f49), mai grigio neutro.

### Don't:
- **Don't** reintrodurre il campo a puntini o rettangoli pastello arrotondati (l'anti-riferimento n8n).
- **Don't** usare più di un accento cromatico acceso per volta.
- **Don't** usare glifi unicode/emoji come icone: sempre SVG disegnati a stroke coerente.
- **Don't** usare il monospace come costume "tecnico": solo per numeri di linea, valori e orari.
- **Don't** far comparire nodi sotto le chrome fisse: il canvas resta inset dentro cartiglio e rastrelliera.
