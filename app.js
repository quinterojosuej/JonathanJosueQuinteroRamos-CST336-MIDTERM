$(document).ready(function() {
    // alert("EHELLLO");
    $("button").on("click", function () {
        let textIn = $("#textIn").val();
        let bookPlace = $("#book");
        // let infoPlace = $("#info");
        let title = $("#title");
        let author = $("#author");
        let year = $("#publish_year");
        let publisher = $("#publisher");
        let isbn = $("#ISBN");
        let pages = $("#pages");
        
        $.ajax({
            method:     "GET",
            url:        "https://openlibrary.org/api/books?bibkeys=ISBN:" + textIn +"&format=json&jscmd=data",
            dataType:   "json",
            success: function(result) {
                
                bookPlace.html("");
                title.html("");
                author.html("");
                year.html("");
                publisher.html("");
                isbn.html("");
                pages.html("");
                
                // console.log(result["ISBN:"+textIn]); // this is the way to be inside the object
                
                bookPlace.append("<img class='cover' src=" + result["ISBN:" + textIn]["cover"]["large"] + ">");
                
                title.append("<div>"+result["ISBN:" + textIn]["title"] + "</div>");
                
                // console.log("TO GET AUTHORS");
                // console.log(result["ISBN:" + textIn]["authors"]);
                
                result["ISBN:" + textIn]["authors"].forEach(function(i){
                    author.append("<div>" + i["name"] + "</div>");
                });
                
                year.append("<div>" + result["ISBN:" + textIn]["publish_date"]);
                
                // console.log("PUBLISHER");
                
                result["ISBN:" + textIn]["publishers"].forEach(function(i){
                    publisher.append("<div>" + i["name"] + "</div>");
                });
                
                isbn.append("<div>"+textIn+"</div>");
                
                // console.log("PAGES");
                
                pages.append("<div>" + result["ISBN:" + textIn]["number_of_pages"] + "</div>");
                
            },
            
            error: function(err) {
                console.log("error is " + err);
            }
         
        }); // end of ajax
        
    }); // end of button
    
});