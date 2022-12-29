document.getElementById("Form").addEventListener("submit", (e) => {
    e.preventDefault()
    const elements = document.getElementById("Form").elements;
    data = elements["firstName"];
    console.log(data);
})
