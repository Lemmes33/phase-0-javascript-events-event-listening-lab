function addingEventListener() {
  const button = document.getElementById("button");

  function handleClick() {
    alert("You clicked the button!");
  }
 
  button.addEventListener("click", handleClick);
}
addingEventListener();
