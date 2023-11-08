const appleAccordion = document.querySelector(".apple");

appleAccordion.addEventListener("click", function(event) {
  const wrapper = event.target.closest(".wrapper");

  if (wrapper){
    wrapper.classList.toggle("active");
    const svgIcon = wrapper.querySelector('svg');
    svgIcon.classList.toggle('hori');

    const answerbox = wrapper.nextElementSibling;

    if (answerbox.style.maxHeight) {
      answerbox.style.maxHeight = null;
    } else {
      answerbox.style.maxHeight = answerbox.scrollHeight + "px";
    } 
  }
});
