function FullWidthBanner(key,asset){
  var keyspace="FullWidthBanner".match(/[A-Z][a-z]+/g).join(" ");
  var number=key;

      if(isNaN(number)==false){
        keyspace=keyspace+" "+number;
        }
      else{
        number="";
      }

  return `
  <!-- BEGIN: ${keyspace}-->
  <div zcondition="Sections=='${keyspace}'" class="z_section-full-width-banner z_container-fluid" zp="true">
  	<div class="z_inner-container">
  		<div class="z_row">
  			<div style="text-align:center; line-height:0;">
  				<span zcondition="${keyspace} Link Option!='None'" zp="true">
  					<a class="idCarrier fakeButton" type="button" zsubmit="false" zp="true" onclick="assetClick('fullWidthBanner${number}LinkForm','fullWidthBanner${number}LinkNoForm','zval(${keyspace} Link Gate Option)')"><img src="zval(${keyspace} Image)" alt="zval(${keyspace} Image Alt Copy)" style="margin-bottom:0" zp="true"/></a>
  					<a class="idCarrier formNotFilled" zstep="Asset Form" zasset="asset${asset}" zmodal="large" id="fullWidthBanner${number}LinkForm" type="button" zsubmit="false" zp="true"><img src="zval(${keyspace} Image)" alt="zval(${keyspace} Image Alt Copy)" style="margin-bottom:0" zp="true"/></a>
  					<span class="formFilled">
  						<span zcondition="${keyspace} Asset Override!=NULL" zp="true">
  							<a zcondition="${keyspace} Link Type !='Video'" id="fullWidthBanner${number}LinkNoForm" href="zval(${keyspace} Asset Override)" target="_blank" zp="true"><img src="zval(${keyspace} Image)" alt="zval(${keyspace} Image Alt Copy)" style="margin-bottom:0" zp="true"/></a>
  							<a zcondition="${keyspace} Link Type =='Video'" id="fullWidthBanner${number}LinkNoForm" data-type="iframe" href="zval(${keyspace} Asset Override)" zp="true"><img src="zval(${keyspace} Image)" alt="zval(${keyspace} Image Alt Copy)" style="margin-bottom:0" zp="true"/></a>
  						</span><!--END: ${keyspace} Asset Override!=NULL -->
  						<span zcondition="${keyspace} Asset Override==NULL" zp="true">
  							<span zcondition="${keyspace} Link Type !='Video'" zp="true">
  								<a zcondition="${keyspace} Link Option=='Library Asset'" href="zval(${keyspace} Library Asset.Asset URL)" id="fullWidthBanner${number}LinkNoForm" target="_blank" zp="true"><img src="zval(${keyspace} Image)" alt="zval(${keyspace} Image Alt Copy)" style="margin-bottom:0" zp="true"/></a>
  								<a zcondition="${keyspace} Link Option=='Print Media'" id="fullWidthBanner${number}LinkNoForm" href="zval(${keyspace} Print Media)" target="_blank" zp="true"><img src="zval(${keyspace} Image)" alt="zval(${keyspace} Image Alt Copy)" style="margin-bottom:0" zp="true"/></a>
  								<a zcondition="${keyspace} Link Option=='Web Plugin'" href="zval(${keyspace} Web Plugin)" id="fullWidthBanner${number}LinkNoForm" target="_blank" zp="true"><img src="zval(${keyspace} Image)" alt="zval(${keyspace} Image Alt Copy)" style="margin-bottom:0" zp="true"/></a>
  								<a zcondition="${keyspace} Link Option=='URL'" zconversion="${keyspace}" id="fullWidthBanner${number}LinkNoForm" href="zval(${keyspace} URL)" target="_blank" zp="true"><img src="zval(${keyspace} Image)" alt="zval(${keyspace} Image Alt Copy)" style="margin-bottom:0" zp="true"/></a>
  							</span>
  							<span zcondition="${keyspace} Link Type =='Video'" zp="true">
  								<a zcondition="${keyspace} Link Option=='Library Asset'" id="fullWidthBanner${number}LinkNoForm" class="z_button" data-type="iframe" href="zval(${keyspace} Library Asset.Asset URL)" zp="true"><img src="zval(${keyspace} Image)" alt="zval(${keyspace} Image Alt Copy)" style="margin-bottom:0" zp="true"/></a>
  								<a zcondition="${keyspace} Link Option=='URL'" zconversion="${keyspace}" id="fullWidthBanner${number}LinkNoForm" class="z_button" data-type="iframe" href="zval(${keyspace} URL)" zp="true"><img src="zval(${keyspace} Image)" alt="zval(${keyspace} Image Alt Copy)" style="margin-bottom:0" zp="true"/></a>
  							</span>
  						</span>
  					</span><!-- END: ${keyspace} Asset Override==NULL -->
  				</span><!-- END: ${keyspace} Link Option!=None -->
  				<span zcondition="${keyspace} Link Option=='None'" zp="true">
  					<img src="zval(${keyspace} Image)" alt="zval(${keyspace} Image Alt Copy)" style="margin-bottom:0" zp="true"/>
  				</span><!-- END: ${keyspace} Link Option==None -->
  			</div>
  		</div>
  	</div>
  </div>
  <!-- END: ${keyspace} -->
`
}
