const modal = document.getElementById("modal")
const modalDescription = document.getElementById("modal-description")
const modalBody = document.getElementById("modal-body")
const closebtn = document.getElementById("close-btn")
const consentForm = document.getElementById("consent-form")
const btnWrap = document.getElementById("btn-wrap")
const declineBtn = document.getElementById("decline-btn")

setTimeout(function() {
  modal.style.display = "block"
}, 3000)



consentForm.addEventListener("submit", function(e) {
  e.preventDefault()

  const formData = new FormData(consentForm)
  const fullName = formData.get("fullName")

  modalDescription.innerHTML = `
    <img src="./assets/image/loading.svg" aria-hidden="true">
    <p id="upload-text">Uploading your data to the dark web...</p>
  `
  setTimeout(function() {
    document.getElementById("upload-text").textContent = "Making the sale..."
  }, 1500)

  setTimeout(function() {
    modalBody.innerHTML = `
      <h3 class="modal__title">Thanks <span class="modal__accent">${fullName}</span>, you sucker!</h3>
      <p class="modal__description">We just sold the rights to your eternal soul.</p>
      <img class="modal__gif" src="./assets/video/pirate.gif">
    `
    closebtn.disabled = false
    closebtn.style.cursor = "pointer"
  }, 3000)
})

closebtn.addEventListener("click", function() {
  modal.style.display = "none"
})

declineBtn.addEventListener("mouseenter", function() {
  btnWrap.classList.toggle("btn-wrap-reverse")
})