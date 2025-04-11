function typeWriter(element, text, delay = 50) {
    let i = 0;
    function type () {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, delay);
        }
    }
    type ();
}

document.addEventListener('DOMContentLoaded', () => {
    const quoteElement = document.getElementById('quote');
    const text = quoteElement.getAttribute('data-text');
    typeWriter(quoteElement, text, 70);
});