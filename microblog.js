

    function updateBlog(_entries, _files) {
        let blog = document.getElementById("Content");
        let tableOfContents = document.getElementById("TableOfContents");
        if (blog != null) {
            blog.innerHTML = "";
            let sortedEntries = sortEntries(_entries, getIndex, _files);
            AddEntriesToPage(sortedEntries, blog);
            AddEntriesToTableOfContents(sortedEntries, tableOfContents);
            
        }
    } 

    function getIndex(_url, _entries, _files) {
        var fileName = extractFilename(_url);
        var index = 0;
        for (var i = 0; i < _files.length; i++) {
            let fileNameFromIndex = _files[i];
            if (fileNameFromIndex === fileName) {
                index = i;
            }
        }
        return index;
    }

    function extractFilename(_path) {
        const pathArray = _path.split("/");
        const lastIndex = pathArray.length - 1;
        return pathArray[lastIndex];
    }
    hash = window.location.hash.toLowerCase().replace("#","");
    function init(_entries, _files, _converter, version) {
        for (let f = 0; f < _files.length; f++) {
            let client = new XMLHttpRequest();
         
            window.location.hash= "";


            client.open('GET', './' +version + "/" + _files[f]);
            client.send();
            client.onreadystatechange = function () {
                if (client.readyState != 4) return;
                let html = _converter.makeHtml(client.responseText);
                let url = client.responseURL;
                _entries.push({
                    html: html,
                    url: url,
                    version:version
                });
                if (_entries.length == _files.length) {
                    updateBlog(_entries, _files);
                    document.getElementById(hash).scrollIntoView();
                    window.location.hash = hash;                   
                }
            }
        }
    }

    function AddEntriesToPage(sortedEntries, blog) {
        for (let i = 0; i < sortedEntries.length; i++) {
            var url = sortedEntries[i].url;   
            var version = sortedEntries[i].version;   
            var fileName = GetFileNameFromUrl(url);
            blog.innerHTML += "<div class='blog-entry' id="+version+"/"+fileName+">"+sortedEntries[i].html+"</div>";
        }
    }
    
    function AddEntriesToTableOfContents(sortedEntries,tableOfContents) {
        for (let i = 0; i < sortedEntries.length; i++) {  
            var version = sortedEntries[i].version;   
            var url = sortedEntries[i].url;   
            var fileName = GetFileNameFromUrl(url);       
            var label = FormatUrlFilenameToCamelCase(url)
            tableOfContents.innerHTML += "<a href='#"+version+"/"+fileName+"'>"+label+"</a>";
        }
    }

    function FormatUrlFilenameToCamelCase (url){
        var fileName = GetFileNameFromUrl(url);
        var camelCaseName = ToCamelCase(fileName.replaceAll("-"," "));
        return camelCaseName;
    }

    function ToCamelCase(str){
        var firstLetterOfEachName = /(^\w{1})|(\s+\w{1})/g;
        return str.replace(firstLetterOfEachName, letter => letter.toUpperCase());
    }

    function sortEntries(_entries, getIndex, _files) {
        return _entries.sort(function (a, b) {
            return (getIndex(a.url, _entries, _files) < getIndex(b.url, _entries, _files)) ? -1 : 1;
        });
    } 

    function GetFileNameFromUrl(url) {
        return url.substring(url.lastIndexOf('/') + 1).replace(".md","");
    }


