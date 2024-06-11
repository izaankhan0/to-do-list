document.addEventListener('DOMContentLoaded', function() {
    const inputHeader = document.getElementById('inputHeader');

    // Function to handle enter key event and replace input with p
    function handleEnterEvent(event, inputElement) {
        if (event.key === 'Enter') {
            event.preventDefault(); // Prevent the default action, such as form submission

            const inputText = inputElement.value;

            const pElement = document.createElement('p');
            pElement.textContent = inputText;
            pElement.className = inputElement.className; // Copy the classes from the input

            // Replace the input field with the p element
            inputElement.parentNode.replaceChild(pElement, inputElement);

            // Add click event to p to turn back into input
            pElement.addEventListener('click', function() {
                const newInputElement = document.createElement('input');
                newInputElement.type = 'text';
                newInputElement.className = pElement.className;
                newInputElement.id = 'inputHeader';
                newInputElement.value = inputText;
                pElement.parentNode.replaceChild(newInputElement, pElement);
                addEnterEventListener(newInputElement);
            });
        }
    }

    // Function to add the enter key event listener to an element
    function addEnterEventListener(element) {
        element.addEventListener('keydown', function(event) {
            handleEnterEvent(event, element);
        });
    }

    // Attach event listener to the header input
    addEnterEventListener(inputHeader);
});
