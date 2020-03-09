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

    $(".friend-card").click(function(event) {
        var user = $(this).data('conversation');
        var iconSrc = $(this).find('img').attr('src');
        var currentUser = $(this).find('h4').text();

        $("#chat-container .conversation").each(function(){
            if(user == $(this).data('conversation')) {

                //$("#chat-container .conversation").hide();
                //$(this).show();
                $("#chat-container .conversation").removeClass("active");
                $(this).addClass("active");
                $("#friend-status").find('img').attr('src', iconSrc);
                $("#friend-status").find('h4').text(currentUser);
            }
        });
        // change friend card to selected card by click
        $(".friend-card").removeClass("active-friend");
        $(this).addClass("active-friend");


    });

    $(".new-message").keypress(function(event){
        if(event.keyCode == 13) {
            insertUserMessage();
            scroll();
            setTimeout(insertFriendMessage, 1000);

        }
    })
    $(".fa-paper-plane").click(function(event){
            insertUserMessage();
            scroll();
            setTimeout(insertFriendMessage, 1000);


    })

    $(".conversation-options").click(function(event) {
        //$(".options").toggleClass("hidden");

        $(this).next().toggleClass("hidden");

        $("#delete-message").click(function(event) {
            //console.log($(this).closest("div.wrapper"));
            console.log($(this).parent().parent().parent());
            //console.log($(this).parents().find(".wrapper"));
            $(this).closest("div.wrapper").hide();
            //$(this).parent().parent().parent().hide();
        })
    })


    function insertUserMessage() {
        var messageText;
        var newMessageObj;
        var getConversationBlock;

        messageText = $(".new-message").val()
        $(".new-message").val('');
        newMessageObj = $(".template .wrapper").clone();
        newMessageObj.find(".messaggio").text(messageText);
        newMessageObj.addClass("user-side");
        newMessageObj.children(".chat").addClass("user-color");

        $(".conversation.active").append(newMessageObj);
        scroll();

    }

    function insertFriendMessage() {
        var messageText;
        var newMessageObj;

        messageText = "ok";
        newMessageObj = $(".template .wrapper").clone();
        newMessageObj.find(".messaggio").text(messageText);
        newMessageObj.addClass("friend-side");
        newMessageObj.children(".chat").addClass("friend-color");

        $(".conversation.active").append(newMessageObj);
        scroll();

        //$("#chat-container").append(newMessageObj);
    }

    function scroll() {
        var scrollDown = $(".conversation.active").height();
        $(".conversation.active").scrollTop(scrollDown);
    }





})
