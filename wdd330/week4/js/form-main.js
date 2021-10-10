const form = document.forms.search;
const input = form.elements.searchInput;


//input.addEventListener('focus', () => alert('focused'), false);
//input.addEventListener('blur', () => alert('blurred'), false);
//input.addEventListener('change', () => alert('changed'), false);

input.value = 'Search Here';
form.addEventListener('submit', search, false);

function search(event) {
    alert('Form Submitted');
    event.preventDefault();
} 

//form2 stuff

const form2 = document.forms.search2;
const input2 = form.elements.searchInput2;
input2.value = 'Search Here';

input2.addEventListener('focus', function(){
    if (input2.value==='Search Here') {
        input2.value = ''
    }
}, false);
input2.addEventListener('blur', function(){
    if (input2.value==='') {
        input2.value = 'Search Here'
    }
}, false);

form2.addEventListener('submit', search2, false);

function search2(event) {
    alert(`You searched for: ${input.value}`);
    event.preventDefault();
}
