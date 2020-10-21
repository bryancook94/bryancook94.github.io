function HeaderTwoLogos(key){
  /* no variables for this one*/
  return `
  <!-- BEGIN: Header Two Logos -->
  <div zcondition="Basic Features=='Header'" zp="true" class="z_section-header-two-logos z_container-fluid" style="padding: 20px 0 20px 0;">
  	<div class="z_inner-container" style="padding:0 40px">
  		<div class="z_row" style="display:flex;align-items: center;">
  			<div class="z_col-xs-6 z_logos">
  				<img src="zval(Company Logo)" alt="zval(Company Display Name)" zp="true"/>
  			</div>
  			<div class="z_col-xs-6 z_logos" style="text-align: right;">
  				<img src="zval(Supplier Logo)" alt="zval(Supplier Name)" class="z_logos" zp="true"/>
  			</div>
  		</div>
  	</div>
  </div>
  <!-- END: Header Two Logos -->
`
}
