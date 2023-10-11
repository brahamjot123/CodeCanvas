function displayInput() {
    const userInput = document.getElementById("search-input").value;
    const resultDiv = document.getElementById("result");

    if (userInput.trim() !== "") {
        resultDiv.innerHTML = `You entered: ${userInput}`;
    } else {
        resultDiv.innerHTML = "Please enter something in the search bar.";
    }
}
