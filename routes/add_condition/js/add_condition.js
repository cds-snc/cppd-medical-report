(function () {
    const unknown = document.getElementById('unknown_details')
    unknown.style.display = 'none'

    var radios = document.forms[0].elements['condition_outlook'];

    for (var i = 0, len = radios.length; i < len; i++) {
        radios[i].onclick = function () {
            if (this.checked && this.value == 4) {
                unknown.style.display = 'block'
            } else {
                unknown.style.display = 'none'
            }
        };
    }
}());