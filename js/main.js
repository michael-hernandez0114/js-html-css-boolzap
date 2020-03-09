$(document).ready(function() {

    $("#search-friends").keyup(function(event){
        var searchFilter = $(this).val().toLowerCase();

        $('.friend-card').each(function() {
            var friend = $(this).find('#friend-name').text().toLowerCase();
            //console.log(friend);
            if(friend.includes(searchFilter)) {
                $(this).show();
            }
            else {
                $(this).hide();
            }
        });

    });

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
