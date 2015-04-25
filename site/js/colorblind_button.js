/**
 * Created by felix.wetell on 25/04/15.
 */
if(localStorage.stylename == undefined){
    localStorage.stylename = "not_colorblind";
    document.getElementsByTagName('link')[1].href = 'css/style.css';
} else if (localStorage.stylename == "colorblind"){
    document.getElementsByTagName('link')[1].href = 'css/style_colorblind.css';
} else {
    document.getElementsByTagName('link')[1].href = 'css/style.css';
}

function changeStyle(name) {
    if (name == 'not_colorblind') {
        document.getElementsByTagName('link')[1].href = 'css/style.css';
        localStorage.stylename = "not_colorblind";
    }
    else if (name == 'colorblind') {
        document.getElementsByTagName('link')[1].href = 'css/style_colorblind.css';
        localStorage.stylename = "colorblind";
    }
}