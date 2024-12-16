const list = document.getElementById('list');

const render = (data) => {
    let child = '';
    data.forEach(element => {
        child += `
            <tr>
                <td>${element.userId}</td>
                <td>${element.id} </td>
                <td>${element.title}</td> 
                <td>${element.body}</td>
            </tr>
        `
    });

    list.innerHTML = child;
}

fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => render(data))
    .catch(err => console.log(err.message))
    .finally(() => console.log('Fetch completed'))