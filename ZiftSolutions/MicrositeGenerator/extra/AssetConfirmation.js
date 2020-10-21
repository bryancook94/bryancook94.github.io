
function AssetConfirmation(val){
  var arrayString='';
  val.forEach((item, i) => {
    if(i==(val.length-1)){
      arrayString+=`"zval(${item} Gate Option)"`
    }
    else {
      arrayString+=`"zval(${item} Gate Option)",`
    }
  });

  var top=`<zp name="Panel CSS"></zp>
  <style type="text/css">
    .confirmationToggle,
    .zifttag.zifttype_richtext.ziftkey_Confirmation_Script.zift_contextual.ziftempty {
      display: none;
    }
  </style>
  <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
  <script src="https://s3.amazonaws.com/static.ziftsolutions.com/codebase/bootstrap/responsive-bootstrap-V2.js" type="text/javascript"></script>
  <zp name="Confirmation Script"></zp>
  <link href="https://s3.amazonaws.com/static.ziftsolutions.com/codebase/bootstrap/z_bootstrap-V2.css" rel="stylesheet" />
  <div id="z_wrapper" style="background-color:white; padding:60px 60px 0 60px;">


    <!-- Begin: No Assets are Selected -->
    <zscript> var assetGates = [${arrayString}];
      var style = document.createElement('style');
      style.type = 'text/css';

      function gateMessage (val,style) {
      if (!val.includes("Yes")) {
      style.innerHTML = '#z_ungatedNotification { display: block; } #z_gatedContent { display: none }';
      }
      else {
      style.innerHTML = '#z_ungatedNotification { display: none; } #z_gatedContent { display: block }';
      }
      document.getElementsByTagName('head')[0].appendChild(style);
      }

      gateMessage(assetGates,style);
    </zscript>
    <div zcondition="zpersonalizer=='true'" zp="true" class="z_HideIE">
      <div style="border: 2px solid #58585b; padding: 20px 20px 5px 20px;" id="z_ungatedNotification">
        <p style="color: #333333; font-size: 18px; margin:0;padding:0;">No assets are currently gated. This page will not be used.</p>
      </div>
    </div>

    <!-- END: No Assets are selected -->
    <!--BEGIN: At least one asset is selected -->
    <div id="z_gatedContent">

      <div style="margin-bottom: 25px;"><span zcondition="Asset Confirmation Copy!=NULL" zp="true">
          <zp name="Asset Confirmation Copy"></zp>
        </span> <span zcondition="Asset Confirmation Copy==NULL &amp;&amp; zmarcom_personalizer=='true'" zp="true">
          <zp name="Asset Confirmation Copy"></zp>
        </span>
      </div>

      <div class="z_button-container" zcondition="zpersonalizer=='true'" zp="true"><a class="z_button" target="_blank" zp="true">
          <zp name="Asset Confirmation CTA Copy">Button</zp>
        </a>
      </div>
      `;

  var loopstring="";
  val.forEach((item, i) => {
    if (item.indexOf("Group")>=0){
      loopstring+= `
                     <div class="z_button-container confirmationToggle" id="asset${i}a"><span zcondition="${item} Asset Override!=NULL" zp="true"> <a id="auto-click" zcondition="${item} Link Type!='Video'" class="z_button" href="zval(${item} Asset Override)"
                            target="_blank" zp="true">
                            <zp name="Asset Confirmation CTA Copy">Button</zp>
                          </a> <iframe zcondition="${item} Link Type=='Video'" src="zval(${item} Asset Override)" zp="true" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="" mozallowfullscreen=""
                            webkitallowfullscreen="" width="100%" height="400" frameborder="0"></iframe> </span> <span zcondition="${item} Asset Override==NULL" zp="true"> <span zcondition="${item} Link Type!='Video'" zp="true"> <a id="auto-click"
                              zcondition="${item} Link Option=='Library Asset'" class="z_button" href="zval(${item} Library Asset.Asset URL)" target="_blank" zp="true">
                              <zp name="Asset Confirmation CTA Copy">Button</zp>
                            </a> <a id="auto-click" zcondition="${item} Link Option=='Print Media'" class="z_button" href="zval(${item} Print Media)" target="_blank" zp="true">
                              <zp name="Asset Confirmation CTA Copy">Button</zp>
                            </a> <a id="auto-click" zcondition="${item} Link Option=='Web Plugin'" class="z_button" href="zval(${item} Web Plugin)" target="_blank" zp="true">
                              <zp name="Asset Confirmation CTA Copy">Button</zp>
                            </a> <a id="auto-click" zcondition="${item} Link Option=='URL'" zconversion="${item}" class="z_button" href="zval(${item} URL)" target="_blank" zp="true">
                              <zp name="Asset Confirmation CTA Copy">Button</zp>
                            </a> </span> <span zcondition="${item} Link Type=='Video'" zp="true"> <iframe zcondition="${item} Link Option=='Library Asset'" src="zval(${item} Library Asset.Asset URL)" zp="true"
                              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="" mozallowfullscreen="" webkitallowfullscreen="" width="100%" height="400" frameborder="0"></iframe> <iframe
                              zcondition="${item} Link Option=='URL'" src="zval(${item} URL)" zp="true" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="" mozallowfullscreen="" webkitallowfullscreen=""
                              width="100%" height="400" frameborder="0"></iframe> </span> </span>
                      </div>
                      <div class="z_button-container confirmationToggle" id="asset${i}b"><span zcondition="${item} Asset Override!=NULL" zp="true"> <a id="auto-click" zcondition="${item} Link Type!='Video'" class="z_button" href="zval(${item} Asset Override)"
                             target="_blank" zp="true">
                             <zp name="Asset Confirmation CTA Copy">Button</zp>
                           </a> <iframe zcondition="${item} Link Type=='Video'" src="zval(${item} Asset Override)" zp="true" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="" mozallowfullscreen=""
                             webkitallowfullscreen="" width="100%" height="400" frameborder="0"></iframe> </span> <span zcondition="${item} Asset Override==NULL" zp="true"> <span zcondition="${item} Link Type!='Video'" zp="true"> <a id="auto-click"
                               zcondition="${item} Link Option=='Library Asset'" class="z_button" href="zval(${item} Library Asset.Asset URL)" target="_blank" zp="true">
                               <zp name="Asset Confirmation CTA Copy">Button</zp>
                             </a> <a id="auto-click" zcondition="${item} Link Option=='Print Media'" class="z_button" href="zval(${item} Print Media)" target="_blank" zp="true">
                               <zp name="Asset Confirmation CTA Copy">Button</zp>
                             </a> <a id="auto-click" zcondition="${item} Link Option=='Web Plugin'" class="z_button" href="zval(${item} Web Plugin)" target="_blank" zp="true">
                               <zp name="Asset Confirmation CTA Copy">Button</zp>
                             </a> <a id="auto-click" zcondition="${item} Link Option=='URL'" zconversion="${item}" class="z_button" href="zval(${item} URL)" target="_blank" zp="true">
                               <zp name="Asset Confirmation CTA Copy">Button</zp>
                             </a> </span> <span zcondition="${item} Link Type=='Video'" zp="true"> <iframe zcondition="${item} Link Option=='Library Asset'" src="zval(${item} Library Asset.Asset URL)" zp="true"
                               allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="" mozallowfullscreen="" webkitallowfullscreen="" width="100%" height="400" frameborder="0"></iframe> <iframe
                               zcondition="${item} Link Option=='URL'" src="zval(${item} URL)" zp="true" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="" mozallowfullscreen="" webkitallowfullscreen=""
                               width="100%" height="400" frameborder="0"></iframe> </span> </span>
                       </div>
                       <div class="z_button-container confirmationToggle" id="asset${i}c"><span zcondition="${item} Asset Override!=NULL" zp="true"> <a id="auto-click" zcondition="${item} Link Type!='Video'" class="z_button" href="zval(${item} Asset Override)"
                              target="_blank" zp="true">
                              <zp name="Asset Confirmation CTA Copy">Button</zp>
                            </a> <iframe zcondition="${item} Link Type=='Video'" src="zval(${item} Asset Override)" zp="true" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="" mozallowfullscreen=""
                              webkitallowfullscreen="" width="100%" height="400" frameborder="0"></iframe> </span> <span zcondition="${item} Asset Override==NULL" zp="true"> <span zcondition="${item} Link Type!='Video'" zp="true"> <a id="auto-click"
                                zcondition="${item} Link Option=='Library Asset'" class="z_button" href="zval(${item} Library Asset.Asset URL)" target="_blank" zp="true">
                                <zp name="Asset Confirmation CTA Copy">Button</zp>
                              </a> <a id="auto-click" zcondition="${item} Link Option=='Print Media'" class="z_button" href="zval(${item} Print Media)" target="_blank" zp="true">
                                <zp name="Asset Confirmation CTA Copy">Button</zp>
                              </a> <a id="auto-click" zcondition="${item} Link Option=='Web Plugin'" class="z_button" href="zval(${item} Web Plugin)" target="_blank" zp="true">
                                <zp name="Asset Confirmation CTA Copy">Button</zp>
                              </a> <a id="auto-click" zcondition="${item} Link Option=='URL'" zconversion="${item}" class="z_button" href="zval(${item} URL)" target="_blank" zp="true">
                                <zp name="Asset Confirmation CTA Copy">Button</zp>
                              </a> </span> <span zcondition="${item} Link Type=='Video'" zp="true"> <iframe zcondition="${item} Link Option=='Library Asset'" src="zval(${item} Library Asset.Asset URL)" zp="true"
                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="" mozallowfullscreen="" webkitallowfullscreen="" width="100%" height="400" frameborder="0"></iframe> <iframe
                                zcondition="${item} Link Option=='URL'" src="zval(${item} URL)" zp="true" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="" mozallowfullscreen="" webkitallowfullscreen=""
                                width="100%" height="400" frameborder="0"></iframe> </span> </span>
                        </div>
                        <div class="z_button-container confirmationToggle" id="asset${i}d"><span zcondition="${item} Asset Override!=NULL" zp="true"> <a id="auto-click" zcondition="${item} Link Type!='Video'" class="z_button" href="zval(${item} Asset Override)"
                               target="_blank" zp="true">
                               <zp name="Asset Confirmation CTA Copy">Button</zp>
                             </a> <iframe zcondition="${item} Link Type=='Video'" src="zval(${item} Asset Override)" zp="true" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="" mozallowfullscreen=""
                               webkitallowfullscreen="" width="100%" height="400" frameborder="0"></iframe> </span> <span zcondition="${item} Asset Override==NULL" zp="true"> <span zcondition="${item} Link Type!='Video'" zp="true"> <a id="auto-click"
                                 zcondition="${item} Link Option=='Library Asset'" class="z_button" href="zval(${item} Library Asset.Asset URL)" target="_blank" zp="true">
                                 <zp name="Asset Confirmation CTA Copy">Button</zp>
                               </a> <a id="auto-click" zcondition="${item} Link Option=='Print Media'" class="z_button" href="zval(${item} Print Media)" target="_blank" zp="true">
                                 <zp name="Asset Confirmation CTA Copy">Button</zp>
                               </a> <a id="auto-click" zcondition="${item} Link Option=='Web Plugin'" class="z_button" href="zval(${item} Web Plugin)" target="_blank" zp="true">
                                 <zp name="Asset Confirmation CTA Copy">Button</zp>
                               </a> <a id="auto-click" zcondition="${item} Link Option=='URL'" zconversion="${item}" class="z_button" href="zval(${item} URL)" target="_blank" zp="true">
                                 <zp name="Asset Confirmation CTA Copy">Button</zp>
                               </a> </span> <span zcondition="${item} Link Type=='Video'" zp="true"> <iframe zcondition="${item} Link Option=='Library Asset'" src="zval(${item} Library Asset.Asset URL)" zp="true"
                                 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="" mozallowfullscreen="" webkitallowfullscreen="" width="100%" height="400" frameborder="0"></iframe> <iframe
                                 zcondition="${item} Link Option=='URL'" src="zval(${item} URL)" zp="true" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="" mozallowfullscreen="" webkitallowfullscreen=""
                                 width="100%" height="400" frameborder="0"></iframe> </span> </span>
                         </div>
                  `;

    }
    else {
      loopstring+= `
                     <div class="z_button-container confirmationToggle" id="asset${i}"><span zcondition="${item} Asset Override!=NULL" zp="true"> <a id="auto-click" zcondition="${item} Link Type!='Video'" class="z_button" href="zval(${item} Asset Override)"
                            target="_blank" zp="true">
                            <zp name="Asset Confirmation CTA Copy">Button</zp>
                          </a> <iframe zcondition="${item} Link Type=='Video'" src="zval(${item} Asset Override)" zp="true" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="" mozallowfullscreen=""
                            webkitallowfullscreen="" width="100%" height="400" frameborder="0"></iframe> </span> <span zcondition="${item} Asset Override==NULL" zp="true"> <span zcondition="${item} Link Type!='Video'" zp="true"> <a id="auto-click"
                              zcondition="${item} Link Option=='Library Asset'" class="z_button" href="zval(${item} Library Asset.Asset URL)" target="_blank" zp="true">
                              <zp name="Asset Confirmation CTA Copy">Button</zp>
                            </a> <a id="auto-click" zcondition="${item} Link Option=='Print Media'" class="z_button" href="zval(${item} Print Media)" target="_blank" zp="true">
                              <zp name="Asset Confirmation CTA Copy">Button</zp>
                            </a> <a id="auto-click" zcondition="${item} Link Option=='Web Plugin'" class="z_button" href="zval(${item} Web Plugin)" target="_blank" zp="true">
                              <zp name="Asset Confirmation CTA Copy">Button</zp>
                            </a> <a id="auto-click" zcondition="${item} Link Option=='URL'" zconversion="${item}" class="z_button" href="zval(${item} URL)" target="_blank" zp="true">
                              <zp name="Asset Confirmation CTA Copy">Button</zp>
                            </a> </span> <span zcondition="${item} Link Type=='Video'" zp="true"> <iframe zcondition="${item} Link Option=='Library Asset'" src="zval(${item} Library Asset.Asset URL)" zp="true"
                              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="" mozallowfullscreen="" webkitallowfullscreen="" width="100%" height="400" frameborder="0"></iframe> <iframe
                              zcondition="${item} Link Option=='URL'" src="zval(${item} URL)" zp="true" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="" mozallowfullscreen="" webkitallowfullscreen=""
                              width="100%" height="400" frameborder="0"></iframe> </span> </span>
                      </div>
                  `;
    }

  });

  var bottom = `
  </div>
  </div>
  `;
  var merge=top+loopstring+bottom;

  return merge;


}
