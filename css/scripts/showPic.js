function showPic (whichpic)  //Funktio showPic saa attribuuttina html-koodissa valitun li-elementin sisälllön.
{
    var source = whichpic.getAttribute ("href"); //muuttujan source arvoksi sijoitetaan li-elementin attribuutin href arvo.
    var placeholder = document.getElementById("placeholder");  //muuttujan placeholder arvoksi sijoitetaan html-tiedoston elementti, jonka nimenä (id) on "placeholder"
    placeholder.setAttribute("src", source);  //placeholder nimisen elementin attribuutin "src" arvoksi sijoitetaan muuttujan source (href) arvo.
    var text = whichpic.getAttribute("title");
    var description = document.getElementById("description");
    description.firstChild.nodeValue = text;
}