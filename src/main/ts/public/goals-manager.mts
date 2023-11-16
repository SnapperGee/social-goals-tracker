console.log("Manage dem goals");

const privateBtn = document.getElementById("privateBtn");

privateBtn?.addEventListener("click", (event) =>
{
    const clickedBtn = event.target;

    if (clickedBtn instanceof HTMLButtonElement)
    {
        if (clickedBtn.classList.contains("active"))
        {
            clickedBtn.classList.remove("active");
        }
        else
        {
            clickedBtn.classList.add("active");
        }

        clickedBtn.ariaPressed = clickedBtn.ariaPressed === "true" ? "false" : "true";
    }
});
