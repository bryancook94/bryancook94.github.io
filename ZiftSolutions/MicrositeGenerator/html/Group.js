function Group(key,asset){

  var keyspace="Group".match(/[A-Z][a-z]+/g).join(" ");
  var number=key;

      if(isNaN(number)==false){
        keyspace=keyspace+" "+number;
        }
      else{
        number="";
      }

  return `
  <!-- BEGIN: ${keyspace} -->
  <div zcondition="Sections=='${keyspace}'" class="z_section-group z_container-fluid" style="background-image: url(zval(${keyspace} Background Image)); background-color:zval(${keyspace} Background Color); color: zval(${keyspace} Copy Color);" zp="true">
  	<div style="padding-top:80px;"> </div><!-- Add a zcondition to hide this spacer if needed -->
  	<div zcondition="${keyspace} Columns=='2 Columns'" zp="true" class="z_section-2-column"></div>
  	<div zcondition="${keyspace} Columns=='3 Columns'" zp="true" class="z_section-3-column"></div>
  	<div zcondition="${keyspace} Columns=='4 Columns'" zp="true" class="z_section-4-column"></div>
  	<div class="z_item-container z_inner-container">
  		<div zcondition="${keyspace} Items=='Item 1'" zp="true" class="z_item">
  			<div zcondition="${keyspace} Item 1 Image!=NULL" style="text-align: center;" zp="true"><img src="zval(${keyspace} Item 1 Image)" alt="zval(${keyspace} Item 1 Image Alt Copy)" zp="true"/></div>
  			<div zcondition="${keyspace} Item 1 Image==NULL && zmarcom_personalizer=='true'" style="text-align: center;" zp="true"><zp name="${keyspace} Item 1 Image"></zp></div>
  			<div class="z_flex-copy">
  				<span zcondition="${keyspace} Item 1 Copy!=NULL" zp="true"><zp name="${keyspace} Item 1 Copy"></zp></span>
  				<span zcondition="${keyspace} Item 1 Copy==NULL && zmarcom_personalizer=='true'" zp="true"><zp name="${keyspace} Item 1 Copy"></zp></span>
  			</div>
  			<div class="z_button-container" style="text-align: center">
  				<span zcondition="${keyspace} Item 1 Link Option!='None'" zp="true">
  					<a class="z_button idCarrier fakeButton" type="button" zsubmit="false" zp="true" onclick="assetClick('group${number}Item1LinkForm','group${number}Item1LinkNoForm','zval(${keyspace} Item 1 Gate Option)')"><zp name="${keyspace} Item 1 CTA Copy">Button</zp></a>
  					<a id="group${number}Item1LinkForm" class="z_button idCarrier formNotFilled" zstep="Asset Form" zasset="asset${asset}a" zmodal="large" type="button" zsubmit="false" zp="true"><zp name="${keyspace} Item 1 CTA Copy">Button</zp></a>
  					<span class="formFilled">
  						<span zcondition="${keyspace} Item 1 Asset Override!=NULL" zp="true">
  							<a zcondition="${keyspace} Item 1 Link Type !='Video'" id="group${number}Item1LinkNoForm" class="z_button" href="zval(${keyspace} Item 1 Asset Override)" target="_blank" zp="true"><zp name="${keyspace} Item 1 CTA Copy">Button</zp></a>
  							<a zcondition="${keyspace} Item 1 Link Type =='Video'" id="group${number}Item1LinkNoForm" class="z_button" data-type="iframe" href="zval(${keyspace} Item 1 Asset Override)" zp="true"><zp name="${keyspace} Item 1 CTA Copy">Button</zp></a>
  						</span><!--END: ${keyspace} Item 1 Asset Override!=NULL -->
  						<span zcondition="${keyspace} Item 1 Asset Override==NULL" zp="true">
  							<span zcondition="${keyspace} Item 1 Link Type !='Video'" zp="true">
  								<a zcondition="${keyspace} Item 1 Link Option=='Library Asset'" id="group${number}Item1LinkNoForm" class="z_button" href="zval(${keyspace} Item 1 Library Asset.Asset URL)" target="_blank" zp="true"><zp name="${keyspace} Item 1 CTA Copy">Button</zp></a>
  								<a zcondition="${keyspace} Item 1 Link Option=='Print Media'" id="group${number}Item1LinkNoForm" class="z_button" href="zval(${keyspace} Item 1 Print Media)" target="_blank" zp="true"><zp name="${keyspace} Item 1 CTA Copy">Button</zp></a>
  								<a zcondition="${keyspace} Item 1 Link Option=='Web Plugin'" id="group${number}Item1LinkNoForm" class="z_button" href="zval(${keyspace} Item 1 Web Plugin)" target="_blank" zp="true"><zp name="${keyspace} Item 1 CTA Copy">Button</zp></a>
  								<a zcondition="${keyspace} Item 1 Link Option=='URL'" zconversion="${keyspace} Item 1" id="group${number}Item1LinkNoForm" class="z_button" href="zval(${keyspace} Item 1 URL)" target="_blank" zp="true"><zp name="${keyspace} Item 1 CTA Copy">Button</zp></a>
  							</span>
  							<span zcondition="${keyspace} Item 1 Link Type =='Video'" zp="true">
  								<a zcondition="${keyspace} Item 1 Link Option=='Library Asset'" id="group${number}Item1LinkNoForm" class="z_button" data-type="iframe" href="zval(${keyspace} Item 1 Library Asset.Asset URL)" zp="true"><zp name="${keyspace} Item 1 CTA Copy">Button</zp></a>
  								<a zcondition="${keyspace} Item 1 Link Option=='URL'" zconversion="${keyspace} Item 1" id="group${number}Item1LinkNoForm" class="z_button" data-type="iframe" href="zval(${keyspace} Item 1 URL)" zp="true"><zp name="${keyspace} Item 1 CTA Copy">Button</zp></a>
  							</span>
  						</span>
  					</span><!-- END: ${keyspace} Item 1 Asset Override==NULL -->
  				</span><!-- END: ${keyspace} Item 1 Link Option!=None -->
  			</div><!-- END: Button Container -->
  		</div><!-- END: ${keyspace} Item 1 -->
  		<div zcondition="${keyspace} Items=='Item 2'" zp="true" class="z_item">
  			<div zcondition="${keyspace} Item 2 Image!=NULL" style="text-align: center;" zp="true"><img src="zval(${keyspace} Item 2 Image)" alt="zval(${keyspace} Item 2 Image Alt Copy)" zp="true"/></div>
  			<div zcondition="${keyspace} Item 2 Image==NULL && zmarcom_personalizer=='true'" style="text-align: center;" zp="true"><zp name="${keyspace} Item 2 Image"></zp></div>
  			<div class="z_flex-copy">
  				<span zcondition="${keyspace} Item 2 Copy!=NULL" zp="true"><zp name="${keyspace} Item 2 Copy"></zp></span>
  				<span zcondition="${keyspace} Item 2 Copy==NULL && zmarcom_personalizer=='true'" zp="true"><zp name="${keyspace} Item 2 Copy"></zp></span>
  			</div>
  			<div class="z_button-container" style="text-align: center">
  				<span zcondition="${keyspace} Item 2 Link Option!='None'" zp="true">
  					<a class="z_button idCarrier fakeButton" type="button" zsubmit="false" zp="true" onclick="assetClick('group${number}Item2LinkForm','group${number}Item2LinkNoForm','zval(${keyspace} Item 2 Gate Option)')"><zp name="${keyspace} Item 2 CTA Copy">Button</zp></a>
  					<a id="group${number}Item2LinkForm" class="z_button idCarrier formNotFilled" zstep="Asset Form" zasset="asset${asset}b" zmodal="large" type="button" zsubmit="false" zp="true"><zp name="${keyspace} Item 2 CTA Copy">Button</zp></a>
  					<span class="formFilled">
  						<span zcondition="${keyspace} Item 2 Asset Override!=NULL" zp="true">
  							<a zcondition="${keyspace} Item 2 Link Type !='Video'" id="group${number}Item2LinkNoForm" class="z_button" href="zval(${keyspace} Item 2 Asset Override)" target="_blank" zp="true"><zp name="${keyspace} Item 2 CTA Copy">Button</zp></a>
  							<a zcondition="${keyspace} Item 2 Link Type =='Video'" id="group${number}Item2LinkNoForm" class="z_button" data-type="iframe" href="zval(${keyspace} Item 2 Asset Override)" zp="true"><zp name="${keyspace} Item 2 CTA Copy">Button</zp></a>
  						</span><!--END: ${keyspace} Item 2 Asset Override!=NULL -->
  						<span zcondition="${keyspace} Item 2 Asset Override==NULL" zp="true">
  							<span zcondition="${keyspace} Item 2 Link Type !='Video'" zp="true">
  								<a zcondition="${keyspace} Item 2 Link Option=='Library Asset'" id="group${number}Item2LinkNoForm" class="z_button" href="zval(${keyspace} Item 2 Library Asset.Asset URL)" target="_blank" zp="true"><zp name="${keyspace} Item 2 CTA Copy">Button</zp></a>
  								<a zcondition="${keyspace} Item 2 Link Option=='Print Media'" id="group${number}Item2LinkNoForm" class="z_button" href="zval(${keyspace} Item 2 Print Media)" target="_blank" zp="true"><zp name="${keyspace} Item 2 CTA Copy">Button</zp></a>
  								<a zcondition="${keyspace} Item 2 Link Option=='Web Plugin'" id="group${number}Item2LinkNoForm" class="z_button" href="zval(${keyspace} Item 2 Web Plugin)" target="_blank" zp="true"><zp name="${keyspace} Item 2 CTA Copy">Button</zp></a>
  								<a zcondition="${keyspace} Item 2 Link Option=='URL'" zconversion="${keyspace} Item 2" id="group${number}Item2LinkNoForm" class="z_button" href="zval(${keyspace} Item 2 URL)" target="_blank" zp="true"><zp name="${keyspace} Item 2 CTA Copy">Button</zp></a>
  							</span>
  							<span zcondition="${keyspace} Item 2 Link Type =='Video'" zp="true">
  								<a zcondition="${keyspace} Item 2 Link Option=='Library Asset'" id="group${number}Item2LinkNoForm" class="z_button" data-type="iframe" href="zval(${keyspace} Item 2 Library Asset.Asset URL)" zp="true"><zp name="${keyspace} Item 2 CTA Copy">Button</zp></a>
  								<a zcondition="${keyspace} Item 2 Link Option=='URL'" zconversion="${keyspace} Item 2" id="group${number}Item2LinkNoForm" class="z_button" data-type="iframe" href="zval(${keyspace} Item 2 URL)" zp="true"><zp name="${keyspace} Item 2 CTA Copy">Button</zp></a>
  							</span>
  						</span>
  					</span><!-- END: ${keyspace} Item 2 Asset Override==NULL -->
  				</span><!-- END: ${keyspace} Item 2 Link Option!=None -->
  			</div><!-- END: Button Container -->
  		</div><!-- END: ${keyspace} Item 2 -->
  		<div zcondition="${keyspace} Items=='Item 3'" zp="true" class="z_item">
  			<div zcondition="${keyspace} Item 3 Image!=NULL" style="text-align: center;" zp="true"><img src="zval(${keyspace} Item 3 Image)" alt="zval(${keyspace} Item 3 Image Alt Copy)" zp="true"/></div>
  			<div zcondition="${keyspace} Item 3 Image==NULL && zmarcom_personalizer=='true'" style="text-align: center;" zp="true"><zp name="${keyspace} Item 3 Image"></zp></div>
  			<div class="z_flex-copy">
  				<span zcondition="${keyspace} Item 3 Copy!=NULL" zp="true"><zp name="${keyspace} Item 3 Copy"></zp></span>
  				<span zcondition="${keyspace} Item 3 Copy==NULL && zmarcom_personalizer=='true'" zp="true"><zp name="${keyspace} Item 3 Copy"></zp></span>
  			</div>
  			<div class="z_button-container" style="text-align: center">
  				<span zcondition="${keyspace} Item 3 Link Option!='None'" zp="true">
  					<a class="z_button idCarrier fakeButton" type="button" zsubmit="false" zp="true" onclick="assetClick('group${number}Item3LinkForm','group${number}Item3LinkNoForm','zval(${keyspace} Item 3 Gate Option)')"><zp name="${keyspace} Item 3 CTA Copy">Button</zp></a>
  					<a id="group${number}Item3LinkForm" class="z_button idCarrier formNotFilled" zstep="Asset Form" zasset="asset${asset}c" zmodal="large" type="button" zsubmit="false" zp="true"><zp name="${keyspace} Item 3 CTA Copy">Button</zp></a>
  					<span class="formFilled">
  						<span zcondition="${keyspace} Item 3 Asset Override!=NULL" zp="true">
  							<a zcondition="${keyspace} Item 3 Link Type !='Video'" id="group${number}Item3LinkNoForm" class="z_button" href="zval(${keyspace} Item 3 Asset Override)" target="_blank" zp="true"><zp name="${keyspace} Item 3 CTA Copy">Button</zp></a>
  							<a zcondition="${keyspace} Item 3 Link Type =='Video'" id="group${number}Item3LinkNoForm" class="z_button" data-type="iframe" href="zval(${keyspace} Item 3 Asset Override)" zp="true"><zp name="${keyspace} Item 3 CTA Copy">Button</zp></a>
  						</span><!--END: ${keyspace} Item 3 Asset Override!=NULL -->
  						<span zcondition="${keyspace} Item 3 Asset Override==NULL" zp="true">
  							<span zcondition="${keyspace} Item 3 Link Type !='Video'" zp="true">
  								<a zcondition="${keyspace} Item 3 Link Option=='Library Asset'" id="group${number}Item3LinkNoForm" class="z_button" href="zval(${keyspace} Item 3 Library Asset.Asset URL)" target="_blank" zp="true"><zp name="${keyspace} Item 3 CTA Copy">Button</zp></a>
  								<a zcondition="${keyspace} Item 3 Link Option=='Print Media'" id="group${number}Item3LinkNoForm" class="z_button" href="zval(${keyspace} Item 3 Print Media)" target="_blank" zp="true"><zp name="${keyspace} Item 3 CTA Copy">Button</zp></a>
  								<a zcondition="${keyspace} Item 3 Link Option=='Web Plugin'" id="group${number}Item3LinkNoForm" class="z_button" href="zval(${keyspace} Item 3 Web Plugin)" target="_blank" zp="true"><zp name="${keyspace} Item 3 CTA Copy">Button</zp></a>
  								<a zcondition="${keyspace} Item 3 Link Option=='URL'" zconversion="${keyspace} Item 3" id="group${number}Item3LinkNoForm" class="z_button" href="zval(${keyspace} Item 3 URL)" target="_blank" zp="true"><zp name="${keyspace} Item 3 CTA Copy">Button</zp></a>
  							</span>
  							<span zcondition="${keyspace} Item 3 Link Type =='Video'" zp="true">
  								<a zcondition="${keyspace} Item 3 Link Option=='Library Asset'" id="group${number}Item3LinkNoForm" class="z_button" data-type="iframe" href="zval(${keyspace} Item 3 Library Asset.Asset URL)" zp="true"><zp name="${keyspace} Item 3 CTA Copy">Button</zp></a>
  								<a zcondition="${keyspace} Item 3 Link Option=='URL'" zconversion="${keyspace} Item 3" id="group${number}Item3LinkNoForm" class="z_button" data-type="iframe" href="zval(${keyspace} Item 3 URL)" zp="true"><zp name="${keyspace} Item 3 CTA Copy">Button</zp></a>
  							</span>
  						</span>
  					</span><!-- END: ${keyspace} Item 3 Asset Override==NULL -->
  				</span><!-- END: ${keyspace} Item 3 Link Option!=None -->
  			</div><!-- END: Button Container -->
  		</div><!-- END: ${keyspace} Item 3 -->
  		<div zcondition="${keyspace} Items=='Item 4'" zp="true" class="z_item">
  			<div zcondition="${keyspace} Item 4 Image!=NULL" style="text-align: center;" zp="true"><img src="zval(${keyspace} Item 4 Image)" alt="zval(${keyspace} Item 4 Image Alt Copy)" zp="true"/></div>
  			<div zcondition="${keyspace} Item 4 Image==NULL && zmarcom_personalizer=='true'" style="text-align: center;" zp="true"><zp name="${keyspace} Item 4 Image"></zp></div>
  			<div class="z_flex-copy">
  				<span zcondition="${keyspace} Item 4 Copy!=NULL" zp="true"><zp name="${keyspace} Item 4 Copy"></zp></span>
  				<span zcondition="${keyspace} Item 4 Copy==NULL && zmarcom_personalizer=='true'" zp="true"><zp name="${keyspace} Item 4 Copy"></zp></span>
  			</div>
  			<div class="z_button-container" style="text-align: center">
  				<span zcondition="${keyspace} Item 4 Link Option!='None'" zp="true">
  					<a class="z_button idCarrier fakeButton" type="button" zsubmit="false" zp="true" onclick="assetClick('group${number}Item4LinkForm','group${number}Item4LinkNoForm','zval(${keyspace} Item 4 Gate Option)')"><zp name="${keyspace} Item 4 CTA Copy">Button</zp></a>
  					<a id="group${number}Item4LinkForm" class="z_button idCarrier formNotFilled" zstep="Asset Form" zasset="asset${asset}d" zmodal="large" type="button" zsubmit="false" zp="true"><zp name="${keyspace} Item 4 CTA Copy">Button</zp></a>
  					<span class="formFilled">
  						<span zcondition="${keyspace} Item 4 Asset Override!=NULL" zp="true">
  							<a zcondition="${keyspace} Item 4 Link Type !='Video'" id="group${number}Item4LinkNoForm" class="z_button" href="zval(${keyspace} Item 4 Asset Override)" target="_blank" zp="true"><zp name="${keyspace} Item 4 CTA Copy">Button</zp></a>
  							<a zcondition="${keyspace} Item 4 Link Type =='Video'" id="group${number}Item4LinkNoForm" class="z_button" data-type="iframe" href="zval(${keyspace} Item 4 Asset Override)" zp="true"><zp name="${keyspace} Item 4 CTA Copy">Button</zp></a>
  						</span><!--END: ${keyspace} Item 4 Asset Override!=NULL -->
  						<span zcondition="${keyspace} Item 4 Asset Override==NULL" zp="true">
  							<span zcondition="${keyspace} Item 4 Link Type !='Video'" zp="true">
  								<a zcondition="${keyspace} Item 4 Link Option=='Library Asset'" id="group${number}Item4LinkNoForm" class="z_button" href="zval(${keyspace} Item 4 Library Asset.Asset URL)" target="_blank" zp="true"><zp name="${keyspace} Item 4 CTA Copy">Button</zp></a>
  								<a zcondition="${keyspace} Item 4 Link Option=='Print Media'" id="group${number}Item4LinkNoForm" class="z_button" href="zval(${keyspace} Item 4 Print Media)" target="_blank" zp="true"><zp name="${keyspace} Item 4 CTA Copy">Button</zp></a>
  								<a zcondition="${keyspace} Item 4 Link Option=='Web Plugin'" id="group${number}Item4LinkNoForm" class="z_button" href="zval(${keyspace} Item 4 Web Plugin)" target="_blank" zp="true"><zp name="${keyspace} Item 4 CTA Copy">Button</zp></a>
  								<a zcondition="${keyspace} Item 4 Link Option=='URL'" zconversion="${keyspace} Item 4" id="group${number}Item4LinkNoForm" class="z_button" href="zval(${keyspace} Item 4 URL)" target="_blank" zp="true"><zp name="${keyspace} Item 4 CTA Copy">Button</zp></a>
  							</span>
  							<span zcondition="${keyspace} Item 4 Link Type =='Video'" zp="true">
  								<a zcondition="${keyspace} Item 4 Link Option=='Library Asset'" id="group${number}Item4LinkNoForm" class="z_button" data-type="iframe" href="zval(${keyspace} Item 4 Library Asset.Asset URL)" zp="true"><zp name="${keyspace} Item 4 CTA Copy">Button</zp></a>
  								<a zcondition="${keyspace} Item 4 Link Option=='URL'" zconversion="${keyspace} Item 4" id="group${number}Item4LinkNoForm" class="z_button" data-type="iframe" href="zval(${keyspace} Item 4 URL)" zp="true"><zp name="${keyspace} Item 4 CTA Copy">Button</zp></a>
  							</span>
  						</span>
  					</span><!-- END: ${keyspace} Item 4 Asset Override==NULL -->
  				</span><!-- END: ${keyspace} Item 4 Link Option!=None -->
  			</div><!-- END: Button Container -->
  		</div><!-- END: ${keyspace} Item 4 -->
  	</div>
  </div><!-- END: ${keyspace} -->
`
}
