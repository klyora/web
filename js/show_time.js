document.addEventListener("DOMContentLoaded", () => {
    const timeSpecificInput = document.getElementById("time-specific");
    const timeContainer = document.getElementById("time-container");
    const deliveryTimeInput = document.getElementById("delivery-time");
  
    if (timeSpecificInput && timeContainer) {
      timeContainer.style.display = "none";
  
      document
        .querySelectorAll('input[name="delivery-time"]')
        .forEach(function (input) {
          input.addEventListener("change", function () {
            if (timeSpecificInput.checked) {
              timeContainer.style.display = "block";
            } else {
              timeContainer.style.display = "none";
            }
          });
        });
    }
  });
  