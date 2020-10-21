function Proposition(){
  return `
  <!-- BEGIN: Value Proposition -->
  <div zcondition="Basic Features=='Value Proposition'" class="z_section-value-proposition z_container-fluid" style="background-image: url(zval(Value Proposition Background Image)); background-color:zval(Value Proposition Background Color); color: zval(Value Proposition Copy Color);" zp="true">
  	<div class="z_inner-container">
  		<div class="z_value-proposition-divider" zcondition="Value Proposition Background Color=='#ffffff'" zp="true"></div>
  		<div style="padding:80px 40px">
  			<div class="z_row">
  				<div class="z_center-content">
  					<zp name="Value Proposition Copy"></zp>
  				</div>
  			</div>
  		</div>
  	</div>
  </div>
  <!-- END: Value Proposition -->
`
}
