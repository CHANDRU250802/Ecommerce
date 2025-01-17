// script.js

document.addEventListener("DOMContentLoaded", () => {
    const paymentMethod = document.getElementById("paymentMethod");
    const paymentSections = document.querySelectorAll(".payment-section");
    const emiAmount = document.getElementById("emiAmount");
    const emiPlan = document.getElementById("emiPlan");
    const emiDetails = document.getElementById("emiDetails");
    const emiBreakdown = document.getElementById("emiBreakdown");

    // Show/Hide Payment Sections Based on Selection
    paymentMethod.addEventListener("change", () => {
        paymentSections.forEach((section) => (section.style.display = "none"));
        const selectedMethod = paymentMethod.value;

        if (selectedMethod === "cod") {
            document.getElementById("codSection").style.display = "block";
        } else if (selectedMethod === "card") {
            document.getElementById("cardSection").style.display = "block";
        } else if (selectedMethod === "upi") {
            document.getElementById("upiSection").style.display = "block";
        } else if (selectedMethod === "emi") {
            document.getElementById("emiSection").style.display = "block";
        }
    });

    // EMI Calculation
    emiPlan.addEventListener("change", () => {
        const amount = parseFloat(emiAmount.value);
        const months = parseInt(emiPlan.value);

        if (amount && months) {
            const monthlyEMI = (amount / months).toFixed(2);
            emiDetails.style.display = "block";
            emiBreakdown.textContent = `For ${months} months, your monthly EMI will be INR ${monthlyEMI}.`;
        } else {
            emiDetails.style.display = "none";
        }
    });

    emiAmount.addEventListener("input", () => {
        emiDetails.style.display = "none";
    });

    // Handle Form Submission
    document.getElementById("paymentForm").addEventListener("submit", (e) => {
        e.preventDefault();
        alert("Payment processed successfully!");
    });
});
