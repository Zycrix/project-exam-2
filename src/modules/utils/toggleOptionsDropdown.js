function handleOptions(e) {
  e.preventDefault();
  const dropdown = document.querySelectorAll(".options-dropdown");
  const newArray = Array.from(dropdown);
  const targetDropdown = newArray.filter(
    (item) => item.dataset.id === e.target.dataset.id
  );
  targetDropdown[0].classList.toggle("show");
}

export default handleOptions;
