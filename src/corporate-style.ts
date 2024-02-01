import Reveal from "reveal.js";

import welcomeImage from '@infosupport/kc-cli/public/cli-img/front.svg';
import moduleImage from '@infosupport/kc-cli/public/cli-img/stripes-bottomright-corner-lightblue.svg';
import importantImage from '@infosupport/kc-cli/public/cli-img/stripes-and-triangle.svg';
import contentImage from '@infosupport/kc-cli/public/cli-img/triangle-upside-down-full-lightblue.svg';
import variation1Image from '@infosupport/kc-cli/public/cli-img/stripes-lightblue.svg';
import variation2Image from '@infosupport/kc-cli/public/cli-img/triangle-upside-down-full-lightblue.svg';
import variation3Image from '@infosupport/kc-cli/public/cli-img/triangle-full-darkblue.svg';
import variation4Image from '@infosupport/kc-cli/public/cli-img/triangles-bottomright-corner-lightblue.svg';
import variation5Image from '@infosupport/kc-cli/public/cli-img/triangle-upside-down-full-lightblue.svg';
import fancy1Image1 from '@infosupport/kc-cli/public/cli-img/front-with-green-triangles.svg';
import fancy1Image2 from '@infosupport/kc-cli/public/cli-img/triangles-fancy.svg';
import fancy2Image1 from '@infosupport/kc-cli/public/cli-img/three-triangles.svg';
import fancy2Image2 from '@infosupport/kc-cli/public/cli-img/triangles-bottomleft-corner-green.svg';
import fancy3Image1 from '@infosupport/kc-cli/public/cli-img/three-triangles-variation.svg';
import fancy3Image2 from '@infosupport/kc-cli/public/cli-img/stripes-bottomleft-corner-green.svg';
import closingImage from '@infosupport/kc-cli/public/cli-img/logo-white.png'
import labImage from '@infosupport/kc-cli/public/cli-img/lab-background.png'

interface SlideBackground {
    id: string;
    autoApplied: boolean;
    color?: string;
    image?: string;
    size?: string;
    position?: string;
    repeat?: string;
    opacity?: string;
    pixelate?: boolean;
    triangle?: boolean;
    caret?: boolean;
}

const slideBackgrounds: SlideBackground[] = [
    {id: 'welcome', autoApplied: false, image: welcomeImage, size: '40%', position: 'bottom right', pixelate: true},
    {id: 'module', autoApplied: false, color: '#00a3e0', image: moduleImage, size: '15%', position: 'bottom right', pixelate: true, caret: true},
    {id: 'important', autoApplied: false, image: importantImage, size: '20%', position: 'bottom right', triangle: true},
    {id: 'content', autoApplied: false, image: contentImage, size: '5%', position: 'bottom right', triangle: true},
    {id: 'variation1', autoApplied: true, image: variation1Image, size: '5%', position: 'top 3em right', triangle: true},
    {id: 'variation2', autoApplied: true, image: variation2Image, size: '5%', position: 'bottom right', triangle: true},
    {id: 'variation3', autoApplied: true, image: variation3Image, size: '5%', position: 'bottom left', triangle: true},
    {id: 'variation4', autoApplied: true, image: variation4Image, size: '10%', position: 'bottom right', triangle: true},
    {id: 'variation5', autoApplied: true, image: variation5Image, size: '5%', position: 'top right', triangle: true},
    {id: 'fancy1', autoApplied: false, image: fancy1Image1 + ", " + fancy1Image2, color: '#003865', size: '30%, 18%', position: 'top left, bottom right', triangle: true},
    {id: 'fancy2', autoApplied: false, image: fancy2Image1 + ", " + fancy2Image2, color: '#003865', size: '20%, 8%', position: 'top right, bottom left', triangle: true},
    {id: 'fancy3', autoApplied: false, image: fancy3Image1 + ", " + fancy3Image2, color: '#003865', size: '20%, 8%', position: 'top right, bottom right', triangle: true},
    {id: 'closing', autoApplied: false, color: '#003865', image: closingImage, size: '25%', position: 'center center'},
    {id: 'lab', autoApplied: false, color: '#00539f', image: labImage, size: 'cover', position: 'center center', triangle: true},
]

const CorporateStyle: Reveal.PluginFunction = () => {
    function isLeafSection(slide: HTMLElement) {
        return slide.firstElementChild == null || slide.firstElementChild.nodeName !== "SECTION"
    }

    function needsCorporateStyle(slide: HTMLElement) {
        return !getCorporateStyle(slide) && !slide.dataset.background;
    }

    function getCorporateStyle(slide: HTMLElement) {
        let found = slideBackgrounds.filter((sb) => sb.id == slide.dataset.corporateStyle);
        return found.length > 0 ? found[0] : undefined
    }

    function setCorporateStyle(slide: HTMLElement, value: SlideBackground) {
        slide.dataset.corporateStyle = value.id;
    }

    function backfillCorporateStyle(variations: SlideBackground[]) {
        return function (slide: HTMLElement, index: number) {
            if (variations.length > 0) {
                let styleIndex = (index % variations.length);
                setCorporateStyle(slide, variations[styleIndex]);
            }
        }
    }

    function applyCorporateStyle(slide: HTMLElement) {
        // Get configured identity
        let identity = getCorporateStyle(slide);
        let hasColor = slide.dataset.backgroundColor !== undefined || slide.dataset.backgroundGradient !== undefined;
        let hasImage = slide.dataset.background !== undefined || slide.dataset.backgroundImage !== undefined;

        if (identity) {
            // Apply style
            if (identity.color && !hasColor) {
                slide.dataset.backgroundColor = identity.color;
            }
            if (identity.image && !hasImage) {
                slide.dataset.backgroundImage = identity.image;
            }
            if (identity.size && !hasImage) {
                slide.dataset.backgroundSize = identity.size;
            }
            if (identity.position && !hasImage) {
                slide.dataset.backgroundPosition = identity.position;
            }
            if (identity.repeat && !hasImage) {
                slide.dataset.backgroundRepeat = identity.repeat;
            }
            if (identity.opacity && !hasImage) {
                slide.dataset.backgroundOpacity = identity.opacity;
            }
            if (identity.pixelate) {
                slide.classList.add("heading-pixelated")
            }
            if (identity.triangle) {
                slide.classList.add("heading-triangle")
            }
            if (identity.caret) {
                slide.classList.add("heading-caret")
            }
        }
    }

    return {
        id: 'corporate-style',
        init: (deck) => {
            const autoAppliedBackgrounds = slideBackgrounds.filter(({autoApplied}) => autoApplied)

            // deck.addEventListener('ready', () => {
                let slides = deck.getSlides().filter(isLeafSection);
                slides.filter(needsCorporateStyle).map(backfillCorporateStyle(autoAppliedBackgrounds));
                slides.map(applyCorporateStyle);
            // });
        }
    }
}

export default CorporateStyle
