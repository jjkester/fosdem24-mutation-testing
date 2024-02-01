import Reveal from "reveal.js";
import {pixelateHeadings} from '@infosupport/kc-cli/src/client/cli-js/util/pixelate-headings.ts';

const PixelateHeadings: Reveal.PluginFunction = () => ({
    id: 'pixelate-headings',
    init: (deck) => {
        deck.addEventListener('ready', pixelateHeadings)
    }
});

export default PixelateHeadings
