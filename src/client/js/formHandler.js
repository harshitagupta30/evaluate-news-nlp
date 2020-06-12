function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let input_url = document.getElementById('name').value
    Client.checkForName(formText)

    console.log("::: Form Submitted :::")
    fetch('http://localhost:8081/test', {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            body: JSON.stringify({ text: input_url })
        })
        .then(res => res.json())
        .then(function(res) {
            console.log(res);
            document.getElementById('results').innerHTML = res.text
        })
}

export { handleSubmit }