/**
 * Created by felix.wetell on 25/04/15.
 */
function showDiv(idInfo) {
    var sel = document.getElementById('divlinks').getElementsByTagName('div');
    for (var i = 0; i < sel.length; i++) {
        sel[i].style.display = 'none';
    }
    document.getElementById('container' + idInfo).style.display = 'block';
    return false;
}