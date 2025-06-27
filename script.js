let currentStep = 0;
const steps = document.querySelectorAll(".step-page");
const sidebarSteps = document.querySelectorAll(".sidebar .step");

function showStep(stepIndex) {
  steps.forEach((step, i) => {
    step.classList.toggle("active", i === stepIndex);
    sidebarSteps[i].classList.toggle("active", i === stepIndex);
  });
}

function nextStep() {
  if (currentStep < steps.length - 1) {
    currentStep++;
    showStep(currentStep);
  }
}

function prevStep() {
  if (currentStep > 0) {
    currentStep--;
    showStep(currentStep);
  }
}

document.getElementById("multiStepForm").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Form submitted successfully!");
});
