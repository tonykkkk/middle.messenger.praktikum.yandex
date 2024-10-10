
let chatView =  function(chatModel){
    return `<div class="chatCard">
    
    <img src="${chatModel.avatar}" class="chatCardAvatar" alt="link" />
    <div class="chatInfoBox">
   <div class="chatTitleBox">
   <p class="chatTitle">
        ${chatModel.title}
    </p>
    <p class="chatDate">
      20:02
    </p>
    </div>
    <div class="chatLastMessageBox">
   
    <p class="chatLastMessage">
        ${chatModel.last_message.content}
    </p>
        ${unreadCount(chatModel.unread_count)}
    </div>
  </div>
  `
};

let unreadCount = function(unreadCount){
    if(unreadCount!=0) return `<div class="chatUnreadCount">
    ${unreadCount}
    </div>`
    else return ''

}

export {chatView};