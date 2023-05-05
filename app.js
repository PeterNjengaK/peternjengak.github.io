(function () {
    [...document.querySelectorAll(".control")].forEach(button => {
        button.addEventListener("click", function() {
            document.querySelector(".active-btn").classList.remove("active-btn");
            this.classList.add("active-btn");
            document.querySelector(".active").classList.remove("active");
            document.getElementById(button.dataset.id).classList.add("active");
        })
    });
    document.querySelector(".theme-btn").addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
    })
})();
            function download(file, text) {
              
                //creating an invisible element
                var element = document.createElement('a');
                element.setAttribute('href', 
                'data:text/plain;charset=utf-8, '
                + encodeURIComponent(text));
                element.setAttribute('download', file);
              
                // Above code is equivalent to
                // <a href="path of file" download="file name">
              
                document.body.appendChild(element);
              
                //onClick property
                element.click();
              
                document.body.removeChild(element);
            }
              
            // Start file download.
            document.getElementById("btn")
            .addEventListener("click", function() {
                // Generate download of hello.txt 
                // file with some content
                var text = document.getElementById("text").value;
                var filename = "GFG.txt";
              
                download(filename, text);
            }, false);
            function download(){
                axios({
                    url:'https://docs.google.com/document/d/1L2T51KMnoG4eEFVIXUPo2VbgCo9i-ORO/edit#',
                    method:'GET',
                    responseType: 'blob'
            })
            .then((response) => {
                   const url = window.URL
                   .createObjectURL(new Blob([response.data]));
                          const link = document.createElement('a');
                          link.href = url;
                          link.setAttribute('download', 'CV.pdf');
                          document.body.appendChild(link);
                          link.click();
            })
            }
              