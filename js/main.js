$(document).ready(function() {

    var source = $('#friend-card-template').html();
    var template = Handlebars.compile(source);

    var friendCards = {
        f0:
            [
            {
                friendID: 0,
                friendAvatar: 'img/friend_laura.png',
                friendName: 'Laura',
                friendLastMessage: 'Non poteva essere altriment',
                messageTimeStamp: '17:53'
            }
            ],
        f1:
            [
            {
                friendID: 1,
                friendAvatar: 'img/friend_john.png',
                friendName: 'John',
                friendLastMessage: 'Non poteva essere altriment',
                messageTimeStamp: '17:53'
            }
            ],
        f2:
            [
            {
                friendID: 2,
                friendAvatar: 'img/friend_goof.png',
                friendName: 'Goof',
                friendLastMessage: 'Non poteva essere altriment',
                messageTimeStamp: '17:53'
            }
            ],
        f3:
            [
            {
                friendID: 1,
                friendAvatar: 'img/friend_ScaryDude.png',
                friendName: 'Scary',
                friendLastMessage: 'Non poteva essere altriment',
                messageTimeStamp: '17:53'
            }
            ],
        f4:
            [
            {
                friendID: 1,
                friendAvatar: 'img/friend_silly.png',
                friendName: 'Silly',
                friendLastMessage: 'Non poteva essere altriment',
                messageTimeStamp: '17:53'
            }
            ],
        f5:
            [
            {
                friendID: 1,
                friendAvatar: 'img/friend_sammy.png',
                friendName: 'Sammy',
                friendLastMessage: 'Non poteva essere altriment',
                messageTimeStamp: '17:53'
            }
            ],
        f6:
            [
            {
                friendID: 1,
                friendAvatar: 'img/friend_peachy.png',
                friendName: 'Peachy',
                friendLastMessage: 'Non poteva essere altriment',
                messageTimeStamp: '17:53'
            }
            ],
        f7:
            [
            {
                friendID: 1,
                friendAvatar: 'img/friend_alex.png',
                friendName: 'Alex',
                friendLastMessage: 'Non poteva essere altriment',
                messageTimeStamp: '17:53'
            }
            ],
        f8:
            [
            {
                friendID: 1,
                friendAvatar: 'img/friend_catty.png',
                friendName: 'Catty',
                friendLastMessage: 'Non poteva essere altriment',
                messageTimeStamp: '17:53'
            }
            ],
    };

    for (var key in friendCards) {
        console.log("key.length is: " + key.length);
        for (var i = 0; i < key.length - 1; i++) {
            //console.log("first: " + friendCards[key]);
            console.log( friendCards[key][i]);
            var templateFriendCard = template(friendCards[key][i]);
            $('#friend-list').append(templateFriendCard);
        }
    }


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
    $(".fa-paper-plane").on('click', function(event){
            insertUserMessage();
            scroll();
            setTimeout(insertFriendMessage, 1000);


    })

    $("#chat-container").on('click', '.conversation-options', function(event){

        //$(".options").addClass("hidden");
        $('.conversation-options').not(this).siblings('.options').addClass('hidden');
        //if (!$(".conversation-options").hasClass("hidden")) {
        //$(".conversation-options").next().addClass("hidden");
        //}
        //console.log('clicked on arrow');
        //$(this).next().toggleClass("hidden");
        $(this).next().toggleClass("hidden");



    })
    $("#chat-container").on('click', '.delete-message', function(event) {
        //console.log("i clicked");
        $(this).closest(".wrapper").hide();

    })


    function insertUserMessage() {
        //var messageText;

        var newMessageObj;
        var getConversationBlock;

        var source = $('#messaggio-template').html();
        var template = Handlebars.compile(source);

        var messaggioObj = {
            testoMessaggio : $(".new-message").val(),
            direzione : 'user-side',
            colore : 'user-color'
        };

        newMessageObj = template(messaggioObj);
        //messageText = $(".new-message").val()
        $(".new-message").val('');
        //newMessageObj = $(".template .wrapper").clone();
        //newMessageObj.find(".messaggio").text(messageText);
        //newMessageObj.addClass("user-side");
        //newMessageObj.children(".chat").addClass("user-color");

        $(".conversation.active").append(newMessageObj);
        scroll();

    }

    function insertFriendMessage() {
        var messageText;
        var newMessageObj;

        var source = $('#messaggio-template').html();
        var template = Handlebars.compile(source);

        var messaggioObj = {
            testoMessaggio : 'ok',
            direzione : 'friend-side',
            colore : 'friend-color'
        };

        newMessageObj = template(messaggioObj);

        //messageText = "ok";
        //newMessageObj = $(".template .wrapper").clone();
        //newMessageObj.find(".messaggio").text(messageText);
        //newMessageObj.addClass("friend-side");
        //newMessageObj.children(".chat").addClass("friend-color");

        $(".conversation.active").append(newMessageObj);
        scroll();

        //$("#chat-container").append(newMessageObj);
    }

    function scroll() {
        var scrollDown = $(".conversation.active").height();
        $(".conversation.active").scrollTop(scrollDown);
    }





})
