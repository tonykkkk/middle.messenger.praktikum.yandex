const tpl = `
<nav class="sidebar">
  <section class="sidebar__header">
    {{{profileButton}}}
    <div class="sidebar__search">
    {{{search}}}
    </div>
    
  </section>
  <div class="sidebar__content">
    {{{chatItems}}}
  </div>
</nav>

<section class="chat-body">
  <nav class="chat-body_header">
    <div class="chat-body__user">
      <div class="chat-body_icon"></div>
        <div class="chat-body__name">{{userName}}</div>
      </div>
  </nav>

  <div class="chat-body__content">
    {{{messageItems}}}
  </div>

  <section class="chat-body__form">
    <button class="chat-body__clip"></button>
      <form class="chat-body__field" id="messageForm">
        {{{messageField}}}
      </form>
      {{{buttonSubmit}}}
  </section>
</section>
`

export default tpl
