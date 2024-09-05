document.getElementById("settingsIcon").onclick = function() {
        var menu = document.getElementById("settingsMenu");
        if (menu.style.display === "block") {
            menu.style.display = "none";
        } else {
            menu.style.display = "block";
        }
    };

     document.addEventListener("click", function(event) {
        var menu = document.getElementById("settingsMenu");
        var icon = document.getElementById("settingsIcon");
        if (!menu.contains(event.target) && !icon.contains(event.target)) {
            menu.style.display = "none";
        }
    });

