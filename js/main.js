$(document).ready(function() {

    $(".new-message").focus(function() {
        $(".send-reply .fa-paper-plane").toggleClass("fas fa-paper-plane fa fa-microphone");
    })
    $(".new-message").blur(function() {
        $(".send-reply .fa-microphone").toggleClass("fas fa-paper-plane fa fa-microphone");
    })

    var messageText;
    var newMessageObj;

    $(".new-message").keypress(function(event){
        if(event.keyCode == 13) {
            insertUserMessage();
            setTimeout(insertFriendMessage, 1000);
        }
    })
    $(".fa-paper-plane").click(function(event){
            insertUserMessage();
            setTimeout(insertFriendMessage, 1000);
    })


    function insertUserMessage() {
        messageText = $(".new-message").val()
        $(".new-message").val('');
        newMessageObj = $(".template .wrapper").clone();
        newMessageObj.find(".messaggio").text(messageText);
        newMessageObj.addClass("user-side");
        newMessageObj.children(".chat").addClass("user-color");
        $("#chat-container").append(newMessageObj);
    }

    function insertFriendMessage() {
        messageText = "ok";
        newMessageObj = $(".template .wrapper").clone();
        newMessageObj.find(".messaggio").text(messageText);
        newMessageObj.addClass("friend-side");
        newMessageObj.children(".chat").addClass("friend-color");
        $("#chat-container").append(newMessageObj);
    }







})
