const tpl = `
      {{{profileSidebar}}}
      <section class="editing-profile-wrapper">
        <div class="editing-profile-icon"></div>
        <h2 class="editing-profile-name">{{username}}</h2>
         <div class="editing-profile-form-wrapper" id="editingProfile">
            {{{editingForm}}}
            <div class="editing-profile-form-buttons">
            {{{buttons}}}
        </div>
      </div>
	  
	</div>
      </section>
`

export default tpl
