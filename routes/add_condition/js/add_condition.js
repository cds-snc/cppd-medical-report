const unknown = document.getElementById('unknown_details')
const radios = document.getElementsByName('condition_outlook')

unknown.style.display = 'none'

for (var i = 0, len = radios.length; i < len; i++) {
  if (radios[i].checked) {
    if (radios[i].value === '4') {
      unknown.style.display = 'block'
    }
  }
  radios[i].onclick = function() {
    if (this.checked && this.value === '4') {
      unknown.style.display = 'block'
    } else {
      unknown.style.display = 'none'
    }
  }
}
