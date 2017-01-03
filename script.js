//cf https://gist.github.com/tavisrudd/1174381
function inject_page_script (script_file) { 
    script = document.createElement('script');
    script.setAttribute("type", "text/javascript");
    script.setAttribute("src", chrome.extension.getURL(script_file));
    document.documentElement.appendChild(script);
    document.documentElement.removeChild(script);
} 

inject_page_script('https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js');
inject_page_script('remove_colon.js');
