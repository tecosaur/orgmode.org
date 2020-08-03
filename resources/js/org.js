function goToByScroll(id){
    $('html,body').animate({scrollTop: $("#"+id).offset().top},'slow');
}
function show_org_source() {
    window.location.assign(window.location.href.replace(/\/$/, "/index.html").replace(/\.html$/, ".org.html") )
}
