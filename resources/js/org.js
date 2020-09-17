let src_page = undefined;
async function fetch_src() {
    const response = await fetch(window.location.href.replace(/\/$/, "/index.html").replace(/\.html$/, ".org.html"));
    const data = await response.text();
    src_page = data;
}
window.addEventListener('load', (event) => { fetch_src(); });

async function show_org_source() {
    const elem = document.getElementById("src")
    if (elem) {
        elem.parentNode.removeChild(elem);
        document.body.parentElement.style.overflowY = 'initial';
    } else {
        if (src_page === undefined) {
            await fetch_src();
        }
        src = document.createElement("iframe");
        src.setAttribute("id", "src");
        src.src = "about:blank";
        document.body.appendChild(src);
        document.body.parentElement.style.overflowY = 'hidden';
        sDoc = src.contentWindow.document;
        sDoc.open('text/html', 'replace');
        sDoc.write(src_page);
        sDoc.close();
    }
}
