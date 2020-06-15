const modal = document.getElementById("notify-user-modal");

function handleSubmit(event) {
    event.preventDefault();

    //Get input from form input field
    var input_url = document.querySelectorAll('input[name=input-url]');

    //Verify that input is a valid url
    if (Client.validURL(JSON.parse(JSON.stringify(input_url[0].value)))) {
        console.log("::: FORM INPUT VALID :::");

        console.log("BUILDING REQUEST");
        fetch('http://localhost:8081/article', {
                method: 'POST',
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ text: input_url[0].value })
            })
            .then(res => res.json())
            .then(function(res) {
                // Populate html with result
                document.querySelector('section.url-results #polarity').innerHTML = res.polarity;
                document.querySelector('section.url-results #subjectivity').innerHTML = res.subjectivity;
                document.querySelector('section.url-results #polarity_confidence').innerHTML = res.polarity_confidence;
                document.querySelector('section.url-results #subjectivity_confidence').innerHTML = res.subjectivity_confidence;
                document.querySelector('section.url-results #excerpt').innerHTML = res.text;
            })
            .catch(e => console.log(e))

    } else {
        modal.style.display = "block";
        const span = document.getElementsByClassName("close")[0];

        // When the user clicks on <span> (x), close the modal
        span.onclick = function() {
            modal.style.display = "none";
        }

        // When the user clicks anywhere outside of the modal, close it
        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }
        const error_section = document.querySelector('section.errors');
        const error = document.querySelector('section.errors .error');
        error.innerHTML = "The URL: [" + JSON.stringify(input_url[0].value) + "] is not valid. Please enter a valid url."
    }
}

export { handleSubmit }