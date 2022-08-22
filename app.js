const div = document.querySelectorAll("form div");
const colors = ["black", "black", "black", "#1D366F", "#1D366F"]

for (i = 0; i < div.length; i++){
    div[i].style.color = colors[i];
}

