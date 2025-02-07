const myfunc = () => {
    const btn = document.getElementById("btn");
    let number = +btn.textContent + 1;
    btn.innerHTML = number;
}
