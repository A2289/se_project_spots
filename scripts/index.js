const editProfileBtn = document.querySelector(".profile__edit-btn"); 
const editProfileModal = document.querySelector("#edit-profile-modal"); 
const editProfileCloseBtn = editProfileModal.querySelector(".modal__close-btn");
const editProfileForm = editProfileModal.querySelector(".modal__form");

const editProfileNameInput = editProfileModal.querySelector("#edit-profile-name");
const editProfileDescriptionInput = editProfileModal.querySelector("#edit-profile-description");

const newPostBtn = document.querySelector(".profile__new-post-btn");
const newPostModal = document.querySelector("#new-post-modal");
const newPostCloseBtn = newPostModal.querySelector(".modal__close-btn");
const newPostForm = document.forms["new-post-form"];

const profileNameEl = document.querySelector(".profile__name");
const profileDescriptionEl = document.querySelector(".profile__description"); 

editProfileBtn.addEventListener("click", function () {
    editProfileNameInput.value = profileNameEl.textContent;
    editProfileDescriptionInput.value = profileDescriptionEl.textContent;
   editProfileModal.classList.add("modal_is-opened"); 
});

  editProfileCloseBtn.addEventListener("click", function () {
    editProfileModal.classList.remove("modal_is-opened"); 
  });

newPostBtn.addEventListener("click", function () {
    newPostModal.classList.add("modal_is-opened"); 
  });

  newPostCloseBtn.addEventListener("click", function () {
    newPostModal.classList.remove("modal_is-opened"); 
  }); 
 
  function handleEditProfileSubmit(evt) {
    evt.preventDefault();
   profileNameEl.textContent = editProfileNameInput.value;
   profileDescriptionEl.textContent = editProfileDescriptionInput.value;
   editProfileModal.classList.remove("modal_is-opened"); 
  }

  editProfileForm.addEventListener("submit", handleEditProfileSubmit); 

    function handlenewPostSubmit(evt) {
    evt.preventDefault();
    // Create a FormData object from the form
  const formData = new FormData(evt.target);

  // Convert FormData to a plain object to log it easily
  const data = {};
  formData.forEach((value, key) => {
    data[key] = value;
  });

  console.log(data); // 👈 This logs the form input values

  newPostModal.classList.remove("modal_is-opened"); // Close the modal
}

  newPostForm.addEventListener("submit", handlenewPostSubmit); 