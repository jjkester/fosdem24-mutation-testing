import Reveal from 'reveal.js';
import RevealHighlight from 'reveal.js/plugin/highlight/highlight';
import RevealMarkdown from 'reveal.js/plugin/markdown/markdown';
import RevealMath from 'reveal.js/plugin/math/math';
import RevealNotes from 'reveal.js/plugin/notes/notes';

import 'reveal.js/dist/reveal.css';
import '../css/infosupport-theme.scss';
import '@fortawesome/fontawesome-free/css/all.min.css';

import PixelateHeadings from "./pixelate-headings.ts";
import CorporateStyle from "./corporate-style.ts";

let deck = new Reveal({
    width: 1280,
    height: 720,
    margin: 0.1,
    controls: false,
    controlsTutorial: false,
    slideNumber: 'c',
    hashOneBasedIndex: true,
    hash: true,
    pdfSeparateFragments: false,
    plugins: [ RevealMarkdown, RevealHighlight, RevealMath.KaTeX, RevealNotes, PixelateHeadings, CorporateStyle ]
})
deck.initialize();
