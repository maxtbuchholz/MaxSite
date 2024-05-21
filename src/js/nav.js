export function navToGitHub() {
    window.open("https://github.com/maxtbuchholz", "gitHub");
}
export function startEmail() {
    window.open("mailto:maxtbuchholz@gmail.com?&subject=test&body=mail", "email");
}
export function scrollTo(name){
    if(name === "Home"){
        name = "Top";
    }
    var element = document.getElementById(name);
    if(element != null){
        element.scrollIntoView({ behavior: "smooth" });
    }
}