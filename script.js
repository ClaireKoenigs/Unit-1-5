let button = document.querySelector('button');
button.addEventListener('click', () => {
    fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => { return response.json() })

        .then(json => {
            console.log(json);
            json.forEach(element => {
                let el = document.createElement('p');
                el.textContent = element.title;
                document.querySelector('body').appendChild(el);
            }); 
        })
});