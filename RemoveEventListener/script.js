
        const alertButton = document.getElementById("alertButton");
        const removeButton = document.getElementById("removeButton");

        function showAlert() {
            alert("Button clicked!");
        }

        // Add event listener to alertButton
        alertButton.addEventListener("click", showAlert);

        // Remove event listener on clicking removeButton
        removeButton.addEventListener("click", () => {
            alertButton.removeEventListener("click", showAlert);
            alert("Alert listener removed!");
        });
    

