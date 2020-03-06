$(document).ready(function() {

    var messageText;
    var newMessageObj;

    $(".new-message").keypress(function(event){
        if(event.keyCode == 13) {
            insertMessage();


        }
    })

    function insertMessage() {
        messageText = $(".new-message").val()
        $(".new-message").val('');
        newMessageObj = $(".template .wrapper").clone();
        newMessageObj.find(".messaggio").text(messageText);
        newMessageObj.addClass("user-side");
        newMessageObj.children(".chat").addClass("user-color");
        $("#chat-container").append(newMessageObj);
    }







})
