
function renderTweets(tweets) {
    let finalTweet = tweets.map(userTweet).join('');

    return `
        <div class="text-center mt-5">
            ${finalTweet}
        </div>
    `
}

function userTweet(tweets){
    
    if (tweets.user.isVerified) {
        
        return `
            <div class= tweet_body>
                <div class="tweet_header">
                    <img class="profile_pic" src="${tweets.user.profilePic}"/>
                    <div class="user_info">
                        <h5>${tweets.user.username} <img class="user_verified" src="twitterIcons/verified-account.png"/></h5>
                        <div class="user_handle">${tweets.user.handle}</div>
                    </div>
                </div>
                <div class="tweet_text">${tweets.text}</div>
                <hr>
                <div class="tweet_footer">
                    <div class="tweet_replies footer_content"><img class="comment_icon" src="twitterIcons/speech-bubble-with-dots.png"/> ${tweets.replies}K </div>
                    <div class="retweets footer_content"><img class="retweet_icon" src="twitterIcons/retweet.png"/> ${tweets.retweets}K </div>
                    <div class="tweet_likes footer_content"><img class="like_icon" src="twitterIcons/like.png"/> ${tweets.likes}K </div>
                    <img class="email_icon" src="twitterIcons/important-mail.png"/>
                </div>
    
            </div>
        `
    }else{
        return `
            <div class= tweet_body>
                <div class="tweet_header">
                    <img class="profile_pic" src="${tweets.user.profilePic}"/>
                    <div class="user_info">
                        <h5>${tweets.user.username}</h5>
                        <div class="user_handle">${tweets.user.handle}</div>
                    </div>
                </div>
                <div class="tweet_text">${tweets.text}</div>
                <hr>
                <div class="tweet_footer">
                    <div class="tweet_replies footer_content"><img class="comment_icon" src="twitterIcons/speech-bubble-with-dots.png"/> ${tweets.replies}K </div>
                    <div class="retweets footer_content"><img class="retweet_icon" src="twitterIcons/retweet.png"/> ${tweets.retweets}K </div>
                    <div class="tweet_likes footer_content"><img class="like_icon" src="twitterIcons/like.png"/> ${tweets.likes}K </div>
                    <img class="email_icon" src="twitterIcons/important-mail.png"/>
                </div>
    
            </div>
        `
    }
}



function tweets() {
    var content = document.getElementById('content');

    var tweetsAbstraction = [
        {
            user: {
                handle: "@officialjaden",
                username: "Jaden Smith",
                isVerified: true,
                profilePic: "https://image.freepik.com/free-icon/user-image-with-black-background_318-34564.jpg"
            },
            text: "The Moment That Truth Is Organized It Becomes A Lie",
            likes: 231,
            retweets: 12,
            replies: 21
        },
        {
            user: {
                handle: "@officialjaden",
                username: "Jaden Smith",
                isVerified: true,
                profilePic: "https://image.freepik.com/free-icon/user-image-with-black-background_318-34564.jpg"
            },
            text: "How Can Mirrors Be Real If Our Eyes Aren't Real",
            likes: 112,
            retweets: 2,
            replies: 24
        },
        {
            user: {
                handle: "@DigitalCrafts",
                username: "DigitalCrafts Bootcamp",
                isVerified: false,
                profilePic: "https://image.freepik.com/free-icon/user-image-with-black-background_318-34564.jpg"
            },
            text: "Sign up for our next course plz!",
            likes: 11,
            retweets: 3,
            replies: 14
        }
    ]

    content.innerHTML = renderTweets(tweetsAbstraction);

}