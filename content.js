const adElements = [
  ".ad", ".ads", ".ad-container", ".ad-wrapper", ".ad-banner",
  ".adsbygoogle", ".google-ad", ".google-ads",
  ".banner-ad", ".banner_ad", ".display-ad",
  ".advertisement", ".advertisement-container",
  ".sponsored", ".sponsored-content", ".sponsoredPost",
  ".promo", ".promo-ad",
  "#ad", "#ads", "#ad-container", "#banner-ad", "#sponsored",
  "iframe[src*='doubleclick']", "iframe[src*='googlesyndication']",
  "[data-ad]", "[data-ads]", "[data-ad-unit]",
  "[aria-label='advertisement']", "[aria-label='Advertisement']",
  ".dfp-ad", ".dfp-slot",
  ".outbrain", ".taboola",
  ".carbonads", ".carbon-ads"
]

async function catImage() {
    const res = await fetch('https://cataas.com/cat');
    const data = await res.blob();   
    
    // browser cant use img data, so this converts into special temp url the browser can use
    return URL.createObjectURL(data);
}

async function replace() {
    const elements = document.querySelectorAll(adElements.join(","));

    for(const element of elements) {
        const img = document.createElement('img');
        img.style.width="100%";
        img.src = await catImage();
        element.replaceWith(img);
    }
}

replace();