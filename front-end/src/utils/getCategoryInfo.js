export function getCategoryInfo(category) {
    switch (category) {
        case "noun":
            return "W języku angielskim znajduje się ponad 80 000 rzeczowników!";
        case "verb":
            return "W języku angielskim znajduje się ponad 25 000 czasowników!";
        default:
            return "W języku angielskim znajduje się ponad 170 000 słów!";
    }
}
