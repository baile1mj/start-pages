const $ = document.querySelector.bind(document);

$('#candidate').addEventListener('input', () => {
    setResult(getRearranged($('#candidate').value));
});

$('#clearInput').addEventListener('click', () => {
    clearInput();
});

function setResult(value) {
    $('#result').innerText = value
}

function getRearranged(inputValue) {
    if (!inputValue || inputValue.length < 7) {
        return 'Value too short';
    }

    let firstPart = inputValue.slice(0, 4);
    let changing = inputValue.charAt(6) + inputValue.charAt(4) + inputValue.charAt(5);
    let lastPart = inputValue.slice(7);

    return (changing + firstPart + lastPart).toUpperCase();
}

function clearInput() {
    $('#candidate').value = '';
    setResult(getRearranged(''));
    $('#candidate').focus();
}

// Make sure that the input box gets cleared out when the page is reloaded.
clearInput();