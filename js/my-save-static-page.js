function savePageForDeploy(){

    const clone = document.documentElement.cloneNode(true);

    let html = clone.outerHTML;
    html = html.replace('<script type="text/javascript" src="data.js"></script>', '');
    html = html.replace('<script type="text/javascript" src="js/my-script.js"></script>', '');
    html = html.replace('<script type="text/javascript" src="js/my-save-static-page.js"></script>', '');

    html = zipHtml(html);

    let content = '<!DOCTYPE html>\n' + html;
    download(content, 'index.html', 'text/plain');
}

function zipHtml(html){
    html = html.replace(/<!--(.*?)-->/gm, '');
    html = html.replace(/\n\s+|\n/g, '');
    
    return html;
}

function download(text, name, type) {

    let a = document.createElement("a");
   
    let file = new Blob([text], {type: type});
    a.href = URL.createObjectURL(file);
    a.download = name;

    a.click();
    delete link_url;
  }