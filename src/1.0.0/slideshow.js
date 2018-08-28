/**
 * the main WebGL SlideShow class
 */
export default class WebglSlideShow{

    /**
     * @constructor
     * @param {Object} options
     * @param {HTMLElement} placeholder
     */
    constructor(options, placeholder){

        if(!options || !placeholder) return;


        for(let slide of options.slides){

            const img = document.createElement('img');
            img.onload = () => {
              console.log('loaded!');
            };
            img.src = slide.image;

            placeholder.appendChild(img);
        }
    }
}