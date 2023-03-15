var terrains = {
    "m": "images/mountain.jpg",
    "s": "images/sands.jpg",
    "w": "images/wetland.jpg",
    "j": "images/jungle.jpg",
    "c": "images/coast.jpg",
    "js": "images/junglesand.jpg",
    "jw": "images/junglewetland.jpg",
    "mj": "images/mountainjungle.jpg",
    "mw": "images/mountainwetland.jpg",
    "sm": "images/sandmountain.jpg",
    "sw": "images/sandwetland.jpg",
    "special": "images/special.png",
    "empty": ""
};

function createCard(title, img) {
    return $("<div/>", {
            class: "col"
            }).append($("<div/>", {
                class: "card text-center",
            }).append($("<div/>", {
                class: "card-body"
                }).append($("<h1/>", {
                    class: "card-title",
                    html: title
                }))
            ).append($("<img/>", {
                class: "card-img-bottom",
                src: terrains[img]
            })));
}