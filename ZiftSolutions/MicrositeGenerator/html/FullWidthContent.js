function FullWidthContent(key,asset){

  var keyspace="FullWidthContent".match(/[A-Z][a-z]+/g).join(" ");
  var number=key;

      if(isNaN(number)==false){
        keyspace=keyspace+" "+number;
        }
      else{
        number="";
      }

  return `
  <!-- BEGIN: ${keyspace} -->
  <div zcondition="Sections=='${keyspace}'" class="z_section-full-width-content z_container-fluid" style="padding: 0px 0 80px 0; background-image: url(zval(${keyspace} Background Image)); background-color:zval(${keyspace} Background Color); color: zval(${keyspace} Copy Color);" zp="true">
  	<div style="padding-top:80px;"> </div><!-- Add a zcondition to hide this spacer if needed -->
  	<div class="z_inner-container" style="padding:0 40px">
  		<div class="z_row">
  			<div class="z_center-content">
  				<div zcondition="${keyspace} Image!=NULL" style="text-align: center;margin-bottom:20px;" zp="true"><img src="zval(${keyspace} Image)" alt="zval(${keyspace} Image Alt Copy)" zp="true"/></div>
  				<div zcondition="${keyspace} Image==NULL && zmarcom_personalizer=='true'" style="text-align: center;" zp="true"><zp name="${keyspace} Image"></zp></div>
  				<span zcondition="${keyspace} Copy!=NULL" zp="true"><zp name="${keyspace} Copy"></zp></span>
  				<span zcondition="${keyspace} Copy==NULL && zmarcom_personalizer=='true'" zp="true"><zp name="${keyspace} Copy"></zp></span>
  				<div class="z_button-container">
  					<span zcondition="${keyspace} Link Option!='None'" zp="true">
  						<a class="z_button idCarrier fakeButton" type="button" zsubmit="false" zp="true" onclick="assetClick('fullWidthContent${number}LinkForm','fullWidthContent${number}LinkNoForm','zval(${keyspace} Gate Option)')"><zp name="${keyspace} CTA Copy">Button</zp></a>
  						<a id="fullWidthContent${number}LinkForm" class="z_button idCarrier formNotFilled" zstep="Asset Form" zasset="asset${asset}" zmodal="large" type="button" zsubmit="false" zp="true"><zp name="${keyspace} CTA Copy">Button</zp></a>
  						<span class="formFilled">
  							<span zcondition="${keyspace} Asset Override!=NULL" zp="true">
  								<a zcondition="${keyspace} Link Type !='Video'" id="fullWidthContent${number}LinkNoForm" class="z_button" href="zval(${keyspace} Asset Override)" target="_blank" zp="true"><zp name="${keyspace} CTA Copy">Button</zp></a>
  								<a zcondition="${keyspace} Link Type =='Video'" id="fullWidthContent${number}LinkNoForm" class="z_button" data-type="iframe" href="zval(${keyspace} Asset Override)" zp="true"><zp name="${keyspace} CTA Copy">Button</zp></a>
  							</span><!--END: ${keyspace} Asset Override!=NULL -->
  							<span zcondition="${keyspace} Asset Override==NULL" zp="true">
  								<span zcondition="${keyspace} Link Type !='Video'" zp="true">
  									<a zcondition="${keyspace} Link Option=='Library Asset'" id="fullWidthContent${number}LinkNoForm" class="z_button" href="zval(${keyspace} Library Asset.Asset URL)" target="_blank" zp="true"><zp name="${keyspace} CTA Copy">Button</zp></a>
  									<a zcondition="${keyspace} Link Option=='Print Media'" id="fullWidthContent${number}LinkNoForm" class="z_button" href="zval(${keyspace} Print Media)" target="_blank" zp="true"><zp name="${keyspace} CTA Copy">Button</zp></a>
  									<a zcondition="${keyspace} Link Option=='Web Plugin'" id="fullWidthContent${number}LinkNoForm" class="z_button" href="zval(${keyspace} Web Plugin)" target="_blank" zp="true"><zp name="${keyspace} CTA Copy">Button</zp></a>
  									<a zcondition="${keyspace} Link Option=='URL'" zconversion="${keyspace}" id="fullWidthContent${number}LinkNoForm" class="z_button" href="zval(${keyspace} URL)" target="_blank" zp="true"><zp name="${keyspace} CTA Copy">Button</zp></a>
  								</span>
  								<span zcondition="${keyspace} Link Type =='Video'" zp="true">
  									<a zcondition="${keyspace} Link Option=='Library Asset'" id="fullWidthContent${number}LinkNoForm" class="z_button" data-type="iframe" href="zval(${keyspace} Library Asset.Asset URL)" zp="true"><zp name="${keyspace} CTA Copy">Button</zp></a>
  									<a zcondition="${keyspace} Link Option=='URL'" zconversion="${keyspace}" id="fullWidthContent${number}LinkNoForm" class="z_button" data-type="iframe" href="zval(${keyspace} URL)" zp="true"><zp name="${keyspace} CTA Copy">Button</zp></a>
  								</span>
  							</span>
  						</span><!-- END: ${keyspace} Asset Override==NULL -->
  					</span><!-- END: ${keyspace} Link Option!=None -->
  				</div><!-- END: Button Container -->
  			</div>
  		</div>
  	</div>
  </div>
  <!-- END: ${keyspace} -->
`
}
