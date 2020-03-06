$(document).ready(function() {

    var messageText;
    var newMessageObj;

    $(".new-message").keypress(function(event){
        if(event.keyCode == 13) {
            messageText = $(".new-message").val()
            console.log(messageText);
            $(".new-message").val('');

            newMessageObj = $(".template .wrapper").clone();

            console.log(newMessageObj);

            newMessageObj.find(".messaggio").text(messageText);
            console.log(newMessageObj.find(".messaggio").text());
            newMessageObj.addClass("user-side");
            newMessageObj.children(".chat").addClass("user-color");
            $("#chat-container").append(newMessageObj);


        }
    })
    //messageText = $(".new-message").text()







})
