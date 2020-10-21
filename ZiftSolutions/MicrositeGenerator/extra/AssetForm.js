function AssetForm(val){

var arrayString='';
val.forEach((item, i) => {
  if(i==(val.length-1)){
    arrayString+=`"zval(${item} Gate Option)"`
  }
  else {
    arrayString+=`"zval(${item} Gate Option)",`
  }
});


/*
needs to be in this format
var val=["Image Right","Full Width Content","Group Item 1"];
*/

  return `
  <!-- Things to change: In this zscript, put all the possible CTA Gate Options, so if they are all set to No, then a message will show that this page will not be used. Add as many as there are total on the microsite --> <zp name="Panel CSS"></zp>
  <link href="https://s3.amazonaws.com/static.ziftsolutions.com/codebase/bootstrap/z_bootstrap-V2.css" rel="stylesheet" />
  <div id="z_wrapper" style="background-color:white; padding:60px 60px 0 60px;"><!-- Begin: No Assets are Selected -->
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

  gateMessage(assetGates,style); </zscript>
  <div zcondition="zpersonalizer=='true'" zp="true" style="border: 2px solid #58585b; padding: 20px 20px 5px 20px;" id="z_ungatedNotification" class="z_HideIE">
  <p style="color: #333333; font-size: 18px; margin:0;padding:0;">No assets are currently gated. This page will not be used.</p>
  </div>
  <!-- END: No Assets are selected --> <!--BEGIN: At least one asset is selected -->
  <div id="z_gatedContent">
  <div style="margin-bottom: 25px;"><span zcondition="Asset Form Copy!=NULL" zp="true"><zp name="Asset Form Copy"></zp></span> <span zcondition="Asset Form Copy==NULL &amp;&amp; zmarcom_personalizer=='true'" zp="true"><zp name="Asset Form Copy"></zp></span></div>
  <!-- BEGIN: Asset Form -->
  <div class="z_form-container" style="padding: 0;">
  <form>
      <input style="display: none;" zf="Form Type" value="Asset Form" type="hidden" />
      <div class="z_form-group" zcondition="Asset Form Fields=='First Name'" zp="true"><input zcondition="Globalized=='No'" zp="true" placeholder="First Name *" zvars="required:true" zf="First Name" id="first_name" class="z_form-control" type="text" /> <span zcondition="Globalized=='Yes'" zp="true"> <input zcondition="Language=='English'" zp="true" placeholder="First Name *" zvars="required:true" zf="First Name" id="first_name" class="z_form-control" type="text" /> <input zcondition="Language=='Spanish'" zp="true" placeholder="Nombre *" zvars="required:true" zf="First Name" id="first_name" class="z_form-control" type="text" /> <input zcondition="Language=='German'" zp="true" placeholder="Vorname *" zvars="required:true" zf="First Name" id="first_name" class="z_form-control" type="text" /> <input zcondition="Language=='French'" zp="true" placeholder="Prénom *" zvars="required:true" zf="First Name" id="first_name" class="z_form-control" type="text" /> <input zcondition="Language=='Italian'" zp="true" placeholder="Nome *" zvars="required:true" zf="First Name" id="first_name" class="z_form-control" type="text" /> <input zcondition="Language=='Dutch'" zp="true" placeholder="Voornaam *" zvars="required:true" zf="First Name" id="first_name" class="z_form-control" type="text" /> <input zcondition="Language=='Portuguese'" zp="true" placeholder="Nome *" zvars="required:true" zf="First Name" id="first_name" class="z_form-control" type="text" /> <input zcondition="Language=='Russian'" zp="true" placeholder="Имя *" zvars="required:true" zf="First Name" id="first_name" class="z_form-control" type="text" /> <input zcondition="Language=='Korean'" zp="true" placeholder="이름 *" zvars="required:true" zf="First Name" id="first_name" class="z_form-control" type="text" /> <input zcondition="Language=='Chinese'" zp="true" placeholder="名字 *" zvars="required:true" zf="First Name" id="first_name" class="z_form-control" type="text" /> <input zcondition="Language=='Chinese Traditional'" zp="true" placeholder="名字 *" zvars="required:true" zf="First Name" id="first_name" class="z_form-control" type="text" /> <input zcondition="Language=='Japanese'" zp="true" placeholder="姓 *" zvars="required:true" zf="First Name" id="first_name" class="z_form-control" type="text" /> <input zcondition="Language=='Danish'" zp="true" placeholder="Fornavn *" zvars="required:true" zf="First Name" id="first_name" class="z_form-control" type="text" /> <input zcondition="Language=='Polish'" zp="true" placeholder="Imię *" zvars="required:true" zf="First Name" id="first_name" class="z_form-control" type="text" /> <input zcondition="Language=='Swedish'" zp="true" placeholder="Förnamn *" zvars="required:true" zf="First Name" id="first_name" class="z_form-control" type="text" /> <input zcondition="Language=='Norwegian'" zp="true" placeholder="Fornavn *" zvars="required:true" zf="First Name" id="first_name" class="z_form-control" type="text" /> <input zcondition="Language=='Finnish'" zp="true" placeholder="Etunimi *" zvars="required:true" zf="First Name" id="first_name" class="z_form-control" type="text" /> <input zcondition="Language=='Czech'" zp="true" placeholder="Jméno *" zvars="required:true" zf="First Name" id="first_name" class="z_form-control" type="text" /> <input zcondition="Language=='Hebrew'" zp="true" placeholder="שם פרטי *" zvars="required:true" zf="First Name" id="first_name" class="z_form-control" type="text" /> </span></div>
      <div class="z_form-group" zcondition="Asset Form Fields=='Last Name'" zp="true"><input zcondition="Globalized=='No'" zp="true" placeholder="Last Name *" zvars="required:true" id="last_name" zf="Last Name" class="z_form-control" type="text" /> <span zcondition="Globalized=='Yes'" zp="true"> <input zcondition="Language=='English'" zp="true" placeholder="Last Name *" zvars="required:true" id="last_name" zf="Last Name" class="z_form-control" type="text" /> <input zcondition="Language=='Spanish'" zp="true" placeholder="Apellido *" zvars="required:true" id="last_name" zf="Last Name" class="z_form-control" type="text" /> <input zcondition="Language=='German'" zp="true" placeholder="Nachname *" zvars="required:true" id="last_name" zf="Last Name" class="z_form-control" type="text" /> <input zcondition="Language=='French'" zp="true" placeholder="Nom *" zvars="required:true" id="last_name" zf="Last Name" class="z_form-control" type="text" /> <input zcondition="Language=='Italian'" zp="true" placeholder="Cognome *" zvars="required:true" id="last_name" zf="Last Name" class="z_form-control" type="text" /> <input zcondition="Language=='Dutch'" zp="true" placeholder="Achternaam *" zvars="required:true" id="last_name" zf="Last Name" class="z_form-control" type="text" /> <input zcondition="Language=='Portuguese'" zp="true" placeholder="Sobrenome *" zvars="required:true" id="last_name" zf="Last Name" class="z_form-control" type="text" /> <input zcondition="Language=='Russian'" zp="true" placeholder="Фамилия *" zvars="required:true" id="last_name" zf="Last Name" class="z_form-control" type="text" /> <input zcondition="Language=='Korean'" zp="true" placeholder="성 *" zvars="required:true" id="last_name" zf="Last Name" class="z_form-control" type="text" /> <input zcondition="Language=='Chinese'" zp="true" placeholder="姓氏 *" zvars="required:true" id="last_name" zf="Last Name" class="z_form-control" type="text" /> <input zcondition="Language=='Chinese Traditional'" zp="true" placeholder="姓氏 *" zvars="required:true" id="last_name" zf="Last Name" class="z_form-control" type="text" /> <input zcondition="Language=='Japanese'" zp="true" placeholder="名 *" zvars="required:true" id="last_name" zf="Last Name" class="z_form-control" type="text" /> <input zcondition="Language=='Danish'" zp="true" placeholder="Efternavn *" zvars="required:true" id="last_name" zf="Last Name" class="z_form-control" type="text" /> <input zcondition="Language=='Polish'" zp="true" placeholder="Nazwisko *" zvars="required:true" id="last_name" zf="Last Name" class="z_form-control" type="text" /> <input zcondition="Language=='Swedish'" zp="true" placeholder="Efternamn *" zvars="required:true" id="last_name" zf="Last Name" class="z_form-control" type="text" /> <input zcondition="Language=='Norwegian'" zp="true" placeholder="Etternavn *" zvars="required:true" id="last_name" zf="Last Name" class="z_form-control" type="text" /> <input zcondition="Language=='Finnish'" zp="true" placeholder="Sukunimi *" zvars="required:true" id="last_name" zf="Last Name" class="z_form-control" type="text" /> <input zcondition="Language=='Czech'" zp="true" placeholder="Příjmení *" zvars="required:true" id="last_name" zf="Last Name" class="z_form-control" type="text" /> <input zcondition="Language=='Hebrew'" zp="true" placeholder="שם משפחה *" zvars="required:true" id="last_name" zf="Last Name" class="z_form-control" type="text" /> </span></div>
      <div class="z_form-group"><input zcondition="Globalized=='No'" zp="true" placeholder="Email Address *" zvars="required:true" zf="Email" id="email" class="z_form-control" type="text" /> <span zcondition="Globalized=='Yes'" zp="true"> <input zcondition="Language=='English'" zp="true" placeholder="Email Address *" zvars="required:true" zf="Email" id="email" class="z_form-control" type="text" /> <input zcondition="Language=='Spanish'" zp="true" placeholder="Correo electrónico de la *" zvars="required:true" zf="Email" id="email" class="z_form-control" type="text" /> <input zcondition="Language=='German'" zp="true" placeholder="E-Mail-Adresse *" zvars="required:true" zf="Email" id="email" class="z_form-control" type="text" /> <input zcondition="Language=='French'" zp="true" placeholder="E-mail professionnel *" zvars="required:true" zf="Email" id="email" class="z_form-control" type="text" /> <input zcondition="Language=='Italian'" zp="true" placeholder="E-mail ufficio *" zvars="required:true" zf="Email" id="email" class="z_form-control" type="text" /> <input zcondition="Language=='Dutch'" zp="true" placeholder="E-mail *" zvars="required:true" zf="Email" id="email" class="z_form-control" type="text" /> <input zcondition="Language=='Portuguese'" zp="true" placeholder="E-mail comercial *" zvars="required:true" zf="Email" id="email" class="z_form-control" type="text" /> <input zcondition="Language=='Russian'" zp="true" placeholder="Эл. почта *" zvars="required:true" zf="Email" id="email" class="z_form-control" type="text" /> <input zcondition="Language=='Korean'" zp="true" placeholder="이메일 주소 *" zvars="required:true" zf="Email" id="email" class="z_form-control" type="text" /> <input zcondition="Language=='Chinese'" zp="true" placeholder="企业电子邮件 *" zvars="required:true" zf="Email" id="email" class="z_form-control" type="text" /> <input zcondition="Language=='Chinese Traditional'" zp="true" placeholder="企业电子邮件 *" zvars="required:true" zf="Email" id="email" class="z_form-control" type="text" /> <input zcondition="Language=='Japanese'" zp="true" placeholder="電子メールアドレス *" zvars="required:true" zf="Email" id="email" class="z_form-control" type="text" /> <input zcondition="Language=='Danish'" zp="true" placeholder="Email adresse *" zvars="required:true" zf="Email" id="email" class="z_form-control" type="text" /> <input zcondition="Language=='Polish'" zp="true" placeholder="Adres e-mail *" zvars="required:true" zf="Email" id="email" class="z_form-control" type="text" /> <input zcondition="Language=='Swedish'" zp="true" placeholder="E-postadress *" zvars="required:true" zf="Email" id="email" class="z_form-control" type="text" /> <input zcondition="Language=='Norwegian'" zp="true" placeholder="E-postadresse *" zvars="required:true" zf="Email" id="email" class="z_form-control" type="text" /> <input zcondition="Language=='Finnish'" zp="true" placeholder="Sähköpostiosoite *" zvars="required:true" zf="Email" id="email" class="z_form-control" type="text" /> <input zcondition="Language=='Czech'" zp="true" placeholder="E-mailová adresa *" zvars="required:true" zf="Email" id="email" class="z_form-control" type="text" /> <input zcondition="Language=='Hebrew'" zp="true" placeholder="*דואר אלקטרוני" zvars="required:true" zf="Email" id="email" class="z_form-control" type="text" /> </span></div>
      <div class="z_form-group" zcondition="Asset Form Fields=='Phone'" zp="true"><input zcondition="Globalized=='No'" zp="true" placeholder="Phone Number" zf="Phone Number" id="phone_number" class="z_form-control" type="text" /> <span zcondition="Globalized=='Yes'" zp="true"> <input zcondition="Language=='English'" zp="true" placeholder="Phone Number" zf="Phone Number" id="phone_number" class="z_form-control" type="text" /> <input zcondition="Language=='Spanish'" zp="true" placeholder="Teléfono del trabajo" zf="Phone Number" id="phone_number" class="z_form-control" type="text" /> <input zcondition="Language=='German'" zp="true" placeholder="Telefon geschäftlich" zf="Phone Number" id="phone_number" class="z_form-control" type="text" /> <input zcondition="Language=='French'" zp="true" placeholder="Numéro de téléphone" zf="Phone Number" id="phone_number" class="z_form-control" type="text" /> <input zcondition="Language=='Italian'" zp="true" placeholder="Telefono" zf="Phone Number" id="phone_number" class="z_form-control" type="text" /> <input zcondition="Language=='Dutch'" zp="true" placeholder="Telefoonnummer" zf="Phone Number" id="phone_number" class="z_form-control" type="text" /> <input zcondition="Language=='Portuguese'" zp="true" placeholder="Telefone comercial" zf="Phone Number" id="phone_number" class="z_form-control" type="text" /> <input zcondition="Language=='Russian'" zp="true" placeholder="Телефон" zf="Phone Number" id="phone_number" class="z_form-control" type="text" /> <input zcondition="Language=='Korean'" zp="true" placeholder="전화 번호" zf="Phone Number" id="phone_number" class="z_form-control" type="text" /> <input zcondition="Language=='Chinese'" zp="true" placeholder="企业电话" zf="Phone Number" id="phone_number" class="z_form-control" type="text" /> <input zcondition="Language=='Chinese Traditional'" zp="true" placeholder="企业电话" zf="Phone Number" id="phone_number" class="z_form-control" type="text" /> <input zcondition="Language=='Japanese'" zp="true" placeholder="電話番号" zf="Phone Number" id="phone_number" class="z_form-control" type="text" /> <input zcondition="Language=='Danish'" zp="true" placeholder="Telefon" zf="Phone Number" id="phone_number" class="z_form-control" type="text" /> <input zcondition="Language=='Polish'" zp="true" placeholder="Telefon" zf="Phone Number" id="phone_number" class="z_form-control" type="text" /> <input zcondition="Language=='Swedish'" zp="true" placeholder="Telefon" zf="Phone Number" id="phone_number" class="z_form-control" type="text" /> <input zcondition="Language=='Norwegian'" zp="true" placeholder="Telefon" zf="Phone Number" id="phone_number" class="z_form-control" type="text" /> <input zcondition="Language=='Finnish'" zp="true" placeholder="Puhelinnumero" zf="Phone Number" id="phone_number" class="z_form-control" type="text" /> <input zcondition="Language=='Czech'" zp="true" placeholder="Telefon" zf="Phone Number" id="phone_number" class="z_form-control" type="text" /> <input zcondition="Language=='Hebrew'" zp="true" placeholder="מכשיר טלפון" zf="Phone Number" id="phone_number" class="z_form-control" type="text" /> </span></div>
      <div class="z_form-group" zcondition="Asset Form Fields=='Company'" zp="true"><input zcondition="Globalized=='No'" zp="true" placeholder="Company *" zvars="required:true" id="company" zf="Company" class="z_form-control" type="text" /> <span zcondition="Globalized=='Yes'" zp="true"> <input zcondition="Language=='English'" zp="true" placeholder="Company *" zvars="required:true" id="company" zf="Company" class="z_form-control" type="text" /> <input zcondition="Language=='Spanish'" zp="true" placeholder="Nombre de la empresa *" zvars="required:true" id="company" zf="Company" class="z_form-control" type="text" /> <input zcondition="Language=='German'" zp="true" placeholder="Unternehmen *" zvars="required:true" id="company" zf="Company" class="z_form-control" type="text" /> <input zcondition="Language=='French'" zp="true" placeholder="Société *" zvars="required:true" id="company" zf="Company" class="z_form-control" type="text" /> <input zcondition="Language=='Italian'" zp="true" placeholder="Nome azienda *" zvars="required:true" id="company" zf="Company" class="z_form-control" type="text" /> <input zcondition="Language=='Dutch'" zp="true" placeholder="Bedrijf *" zvars="required:true" id="company" zf="Company" class="z_form-control" type="text" /> <input zcondition="Language=='Portuguese'" zp="true" placeholder="Nome da empresa *" zvars="required:true" id="company" zf="Company" class="z_form-control" type="text" /> <input zcondition="Language=='Russian'" zp="true" placeholder="Компания *" zvars="required:true" id="company" zf="Company" class="z_form-control" type="text" /> <input zcondition="Language=='Korean'" zp="true" placeholder="회사 *" zvars="required:true" id="company" zf="Company" class="z_form-control" type="text" /> <input zcondition="Language=='Chinese'" zp="true" placeholder="公司名称 *" zvars="required:true" id="company" zf="Company" class="z_form-control" type="text" /> <input zcondition="Language=='Chinese Traditional'" zp="true" placeholder="公司名称 *" zvars="required:true" id="company" zf="Company" class="z_form-control" type="text" /> <input zcondition="Language=='Japanese'" zp="true" placeholder="部署名 / 役職名 *" zvars="required:true" id="company" zf="Company" class="z_form-control" type="text" /> <input zcondition="Language=='Danish'" zp="true" placeholder="Firmanavn *" zvars="required:true" id="company" zf="Company" class="z_form-control" type="text" /> <input zcondition="Language=='Polish'" zp="true" placeholder="Firma *" zvars="required:true" id="company" zf="Company" class="z_form-control" type="text" /> <input zcondition="Language=='Swedish'" zp="true" placeholder="Företag *" zvars="required:true" id="company" zf="Company" class="z_form-control" type="text" /> <input zcondition="Language=='Norwegian'" zp="true" placeholder="Firmanavn *" zvars="required:true" id="company" zf="Company" class="z_form-control" type="text" /> <input zcondition="Language=='Finnish'" zp="true" placeholder="Yritys *" zvars="required:true" id="company" zf="Company" class="z_form-control" type="text" /> <input zcondition="Language=='Czech'" zp="true" placeholder="Společnost *" zvars="required:true" id="company" zf="Company" class="z_form-control" type="text" /> <input zcondition="Language=='Hebrew'" zp="true" placeholder="החברה *" zvars="required:true" id="company" zf="Company" class="z_form-control" type="text" /> </span></div>
      <div class="z_form-group" zcondition="Asset Form Fields=='Country'" zp="true"><select id="country" class="z_country z_form-control" zf="Country" zp="true" zvars="required:true" cookie="ignore" onclick="selectListColor()">
      <option zcondition="Language=='English'" zp="true" value="none" selected="selected" disabled="">Country *</option>
      <option zcondition="Language=='Spanish'" zp="true" value="none" selected="selected" disabled="">País *</option>
      <option zcondition="Language=='German'" zp="true" value="none" selected="selected" disabled="">Land *</option>
      <option zcondition="Language=='French'" zp="true" value="none" selected="selected" disabled="">Pays *</option>
      <option zcondition="Language=='Italian'" zp="true" value="none" selected="selected" disabled="">Paese *</option>
      <option zcondition="Language=='Dutch'" zp="true" value="none" selected="selected" disabled="">Land *</option>
      <option zcondition="Language=='Portuguese'" zp="true" value="none" selected="selected" disabled="">País *</option>
      <option zcondition="Language=='Russian'" zp="true" value="none" selected="selected" disabled="">Страна *</option>
      <option zcondition="Language=='Korean'" zp="true" value="none" selected="selected" disabled="">국가 *</option>
      <option zcondition="Language=='Chinese'" zp="true" value="none" selected="selected" disabled="">国家/地区 *</option>
      <option zcondition="Language=='Chinese Traditional'" zp="true" value="none" selected="selected" disabled="">国家/地区 *</option>
      <option zcondition="Language=='Japanese'" zp="true" value="none" selected="selected" disabled="">国 *</option>
      <option zcondition="Language=='Danish'" zp="true" value="none" selected="selected" disabled="">Land *</option>
      <option zcondition="Language=='Polish'" zp="true" value="none" selected="selected" disabled="">Kraj *</option>
      <option zcondition="Language=='Swedish'" zp="true" value="none" selected="selected" disabled="">Land *</option>
      <option zcondition="Language=='Norwegian'" zp="true" value="none" selected="selected" disabled="">Land *</option>
      <option zcondition="Language=='Finnish'" zp="true" value="none" selected="selected" disabled="">Maa *</option>
      <option zcondition="Language=='Czech'" zp="true" value="none" selected="selected" disabled="">Země *</option>
      <option zcondition="Language=='Hebrew'" zp="true" value="none" selected="selected" disabled="">מדינה *</option>
      <option value="AF">Afghanistan</option>
      <option value="AX">Åland Islands</option>
      <option value="AL">Albania</option>
      <option value="DZ">Algeria</option>
      <option value="AS">American Samoa</option>
      <option value="AD">Andorra</option>
      <option value="AO">Angola</option>
      <option value="AI">Anguilla</option>
      <option value="AQ">Antarctica</option>
      <option value="AG">Antigua and Barbuda</option>
      <option value="AR">Argentina</option>
      <option value="AM">Armenia</option>
      <option value="AW">Aruba</option>
      <option value="AU">Australia</option>
      <option value="AT">Austria</option>
      <option value="AZ">Azerbaijan</option>
      <option value="BS">Bahamas</option>
      <option value="BH">Bahrain</option>
      <option value="BD">Bangladesh</option>
      <option value="BB">Barbados</option>
      <option value="BY">Belarus</option>
      <option value="BE">Belgium</option>
      <option value="BZ">Belize</option>
      <option value="BJ">Benin</option>
      <option value="BM">Bermuda</option>
      <option value="BT">Bhutan</option>
      <option value="BO">Bolivia, Plurinational State of</option>
      <option value="BQ">Bonaire, Sint Eustatius and Saba</option>
      <option value="BA">Bosnia and Herzegovina</option>
      <option value="BW">Botswana</option>
      <option value="BV">Bouvet Island</option>
      <option value="BR">Brazil</option>
      <option value="IO">British Indian Ocean Territory</option>
      <option value="BN">Brunei Darussalam</option>
      <option value="BG">Bulgaria</option>
      <option value="BF">Burkina Faso</option>
      <option value="BI">Burundi</option>
      <option value="KH">Cambodia</option>
      <option value="CM">Cameroon</option>
      <option value="CA">Canada</option>
      <option value="CV">Cape Verde</option>
      <option value="KY">Cayman Islands</option>
      <option value="CF">Central African Republic</option>
      <option value="TD">Chad</option>
      <option value="CL">Chile</option>
      <option value="CN">China</option>
      <option value="CX">Christmas Island</option>
      <option value="CC">Cocos (Keeling) Islands</option>
      <option value="CO">Colombia</option>
      <option value="KM">Comoros</option>
      <option value="CG">Congo</option>
      <option value="CD">Congo, the Democratic Republic of the</option>
      <option value="CK">Cook Islands</option>
      <option value="CR">Costa Rica</option>
      <option value="CI">Côte d'Ivoire</option>
      <option value="HR">Croatia</option>
      <option value="CU">Cuba</option>
      <option value="CW">Curaçao</option>
      <option value="CY">Cyprus</option>
      <option value="CZ">Czech Republic</option>
      <option value="DK">Denmark</option>
      <option value="DJ">Djibouti</option>
      <option value="DM">Dominica</option>
      <option value="DO">Dominican Republic</option>
      <option value="EC">Ecuador</option>
      <option value="EG">Egypt</option>
      <option value="SV">El Salvador</option>
      <option value="GQ">Equatorial Guinea</option>
      <option value="ER">Eritrea</option>
      <option value="EE">Estonia</option>
      <option value="ET">Ethiopia</option>
      <option value="FK">Falkland Islands (Malvinas)</option>
      <option value="FO">Faroe Islands</option>
      <option value="FJ">Fiji</option>
      <option value="FI">Finland</option>
      <option value="FR">France</option>
      <option value="GF">French Guiana</option>
      <option value="PF">French Polynesia</option>
      <option value="TF">French Southern Territories</option>
      <option value="GA">Gabon</option>
      <option value="GM">Gambia</option>
      <option value="GE">Georgia</option>
      <option value="DE">Germany</option>
      <option value="GH">Ghana</option>
      <option value="GI">Gibraltar</option>
      <option value="GR">Greece</option>
      <option value="GL">Greenland</option>
      <option value="GD">Grenada</option>
      <option value="GP">Guadeloupe</option>
      <option value="GU">Guam</option>
      <option value="GT">Guatemala</option>
      <option value="GG">Guernsey</option>
      <option value="GN">Guinea</option>
      <option value="GW">Guinea-Bissau</option>
      <option value="GY">Guyana</option>
      <option value="HT">Haiti</option>
      <option value="HM">Heard Island and McDonald Islands</option>
      <option value="VA">Holy See (Vatican City State)</option>
      <option value="HN">Honduras</option>
      <option value="HK">Hong Kong</option>
      <option value="HU">Hungary</option>
      <option value="IS">Iceland</option>
      <option value="IN">India</option>
      <option value="ID">Indonesia</option>
      <option value="IR">Iran, Islamic Republic of</option>
      <option value="IQ">Iraq</option>
      <option value="IE">Ireland</option>
      <option value="IM">Isle of Man</option>
      <option value="IL">Israel</option>
      <option value="IT">Italy</option>
      <option value="JM">Jamaica</option>
      <option value="JP">Japan</option>
      <option value="JE">Jersey</option>
      <option value="JO">Jordan</option>
      <option value="KZ">Kazakhstan</option>
      <option value="KE">Kenya</option>
      <option value="KI">Kiribati</option>
      <option value="KP">Korea, Democratic People's Republic of</option>
      <option value="KR">Korea, Republic of</option>
      <option value="KW">Kuwait</option>
      <option value="KG">Kyrgyzstan</option>
      <option value="LA">Lao People's Democratic Republic</option>
      <option value="LV">Latvia</option>
      <option value="LB">Lebanon</option>
      <option value="LS">Lesotho</option>
      <option value="LR">Liberia</option>
      <option value="LY">Libya</option>
      <option value="LI">Liechtenstein</option>
      <option value="LT">Lithuania</option>
      <option value="LU">Luxembourg</option>
      <option value="MO">Macao</option>
      <option value="MK">Macedonia, the former Yugoslav Republic of</option>
      <option value="MG">Madagascar</option>
      <option value="MW">Malawi</option>
      <option value="MY">Malaysia</option>
      <option value="MV">Maldives</option>
      <option value="ML">Mali</option>
      <option value="MT">Malta</option>
      <option value="MH">Marshall Islands</option>
      <option value="MQ">Martinique</option>
      <option value="MR">Mauritania</option>
      <option value="MU">Mauritius</option>
      <option value="YT">Mayotte</option>
      <option value="MX">Mexico</option>
      <option value="FM">Micronesia, Federated States of</option>
      <option value="MD">Moldova, Republic of</option>
      <option value="MC">Monaco</option>
      <option value="MN">Mongolia</option>
      <option value="ME">Montenegro</option>
      <option value="MS">Montserrat</option>
      <option value="MA">Morocco</option>
      <option value="MZ">Mozambique</option>
      <option value="MM">Myanmar</option>
      <option value="NA">Namibia</option>
      <option value="NR">Nauru</option>
      <option value="NP">Nepal</option>
      <option value="NL">Netherlands</option>
      <option value="NC">New Caledonia</option>
      <option value="NZ">New Zealand</option>
      <option value="NI">Nicaragua</option>
      <option value="NE">Niger</option>
      <option value="NG">Nigeria</option>
      <option value="NU">Niue</option>
      <option value="NF">Norfolk Island</option>
      <option value="MP">Northern Mariana Islands</option>
      <option value="NO">Norway</option>
      <option value="OM">Oman</option>
      <option value="PK">Pakistan</option>
      <option value="PW">Palau</option>
      <option value="PS">Palestinian Territory, Occupied</option>
      <option value="PA">Panama</option>
      <option value="PG">Papua New Guinea</option>
      <option value="PY">Paraguay</option>
      <option value="PE">Peru</option>
      <option value="PH">Philippines</option>
      <option value="PN">Pitcairn</option>
      <option value="PL">Poland</option>
      <option value="PT">Portugal</option>
      <option value="PR">Puerto Rico</option>
      <option value="QA">Qatar</option>
      <option value="RE">Réunion</option>
      <option value="RO">Romania</option>
      <option value="RU">Russian Federation</option>
      <option value="RW">Rwanda</option>
      <option value="BL">Saint Barthélemy</option>
      <option value="SH">Saint Helena, Ascension and Tristan da Cunha</option>
      <option value="KN">Saint Kitts and Nevis</option>
      <option value="LC">Saint Lucia</option>
      <option value="MF">Saint Martin (French part)</option>
      <option value="PM">Saint Pierre and Miquelon</option>
      <option value="VC">Saint Vincent and the Grenadines</option>
      <option value="WS">Samoa</option>
      <option value="SM">San Marino</option>
      <option value="ST">Sao Tome and Principe</option>
      <option value="SA">Saudi Arabia</option>
      <option value="SN">Senegal</option>
      <option value="RS">Serbia</option>
      <option value="SC">Seychelles</option>
      <option value="SL">Sierra Leone</option>
      <option value="SG">Singapore</option>
      <option value="SX">Sint Maarten (Dutch part)</option>
      <option value="SK">Slovakia</option>
      <option value="SI">Slovenia</option>
      <option value="SB">Solomon Islands</option>
      <option value="SO">Somalia</option>
      <option value="ZA">South Africa</option>
      <option value="GS">South Georgia and the South Sandwich Islands</option>
      <option value="SS">South Sudan</option>
      <option value="ES">Spain</option>
      <option value="LK">Sri Lanka</option>
      <option value="SD">Sudan</option>
      <option value="SR">Suriname</option>
      <option value="SJ">Svalbard and Jan Mayen</option>
      <option value="SZ">Swaziland</option>
      <option value="SE">Sweden</option>
      <option value="CH">Switzerland</option>
      <option value="SY">Syrian Arab Republic</option>
      <option value="TW">Taiwan, Province of China</option>
      <option value="TJ">Tajikistan</option>
      <option value="TZ">Tanzania, United Republic of</option>
      <option value="TH">Thailand</option>
      <option value="TL">Timor-Leste</option>
      <option value="TG">Togo</option>
      <option value="TK">Tokelau</option>
      <option value="TO">Tonga</option>
      <option value="TT">Trinidad and Tobago</option>
      <option value="TN">Tunisia</option>
      <option value="TR">Turkey</option>
      <option value="TM">Turkmenistan</option>
      <option value="TC">Turks and Caicos Islands</option>
      <option value="TV">Tuvalu</option>
      <option value="UG">Uganda</option>
      <option value="UA">Ukraine</option>
      <option value="AE">United Arab Emirates</option>
      <option value="GB">United Kingdom</option>
      <option value="US">United States</option>
      <option value="UM">United States Minor Outlying Islands</option>
      <option value="UY">Uruguay</option>
      <option value="UZ">Uzbekistan</option>
      <option value="VU">Vanuatu</option>
      <option value="VE">Venezuela, Bolivarian Republic of</option>
      <option value="VN">Viet Nam</option>
      <option value="VG">Virgin Islands, British</option>
      <option value="VI">Virgin Islands, U.S.</option>
      <option value="WF">Wallis and Futuna</option>
      <option value="EH">Western Sahara</option>
      <option value="YE">Yemen</option>
      <option value="ZM">Zambia</option>
      <option value="ZW">Zimbabwe</option>
      </select></div>
      <div class="z_required-marker"><span title="Required" style="border:0;">*</span> <span zcondition="Globalized=='No'" zp="true">Required</span> <span zcondition="Globalized=='Yes'" zp="true"> <span zcondition="Language=='English'" zp="true">Required</span> <span zcondition="Language=='Spanish'" zp="true">obligatorio</span> <span zcondition="Language=='German'" zp="true">Pflichtfeld</span> <span zcondition="Language=='French'" zp="true">Champs requis</span> <span zcondition="Language=='Italian'" zp="true">Campo obbligatorio</span> <span zcondition="Language=='Dutch'" zp="true">Verplichte</span> <span zcondition="Language=='Portuguese'" zp="true">Obrigatório</span> <span zcondition="Language=='Russian'" zp="true">обязательно к заполнению</span> <span zcondition="Language=='Korean'" zp="true">필수 문서</span> <span zcondition="Language=='Chinese'" zp="true">必填</span> <span zcondition="Language=='Chinese Traditional'" zp="true">必填</span> <span zcondition="Language=='Japanese'" zp="true">は必須項目です。</span> <span zcondition="Language=='Danish'" zp="true">Skal udfyldes</span> <span zcondition="Language=='Polish'" zp="true">Required</span> <span zcondition="Language=='Swedish'" zp="true">Obligatorisk</span> <span zcondition="Language=='Norwegian'" zp="true">Påkrevd</span> <span zcondition="Language=='Finnish'" zp="true">Pakollinen</span> <span zcondition="Language=='Czech'" zp="true">Povinný</span> <span zcondition="Language=='Hebrew'" zp="true">נדרש</span> </span></div>
      <br />
      <div class="z_form-group z_privacy-container">
      <div class="z_privacy-checkbox"><input zp="true" zf="Privacy Consent" zvars="required:true" id="z_privacy_consent" value="true" class="z_form-control" type="checkbox" cookie="ignore" /></div>
      <div class="z_privacy-copy"><zp name="Stacker Global.GDPR"></zp></div>
      </div>
      <div class="z_button-container"><a class="z_button validateSubmit" onclick="validateForm()" zp="true"> <zp name="Asset Form CTA Copy">Submit</zp> </a></div>
      <div class="z_button-container" style="padding-bottom:50px;"><a class="z_button z_realSubmit" style="display:none !important;" zp="true" zstep="Asset Confirmation"> <zp name="Asset Form CTA Copy">Submit</zp> </a></div>
  </form>
  </div>
  <!-- END: Asset Form --></div>
  </div>
  <!-- Bootstrap core JavaScript --> <script src="https://s3.amazonaws.com/static.ziftsolutions.com/codebase/bootstrap/responsive-bootstrap-V2.js" type="text/javascript"></script> <!-- Email Validation --> <script> function validateForm() {
          var emailIsValid = false;
          var emailEl = document.getElementsByName('email');
          console.log(emailEl);
          console.log(emailEl.length);

          if (emailEl.length > 0) {
              //$("form input[name='email']").val();
              var email = emailEl[0].value;

              if (email != '') {
                  emailIsValid = validateEmail(email);

                  if (emailIsValid) {
                      document.querySelector(".z_realSubmit").click();
                      emailEl[0].style.border = 'none';
                  } else {
                      alert('Email is not in the correct format, please correct it before submitting again.');
                      emailEl[0].style.border = '1px solid red';
                  }
              } else {
                  document.querySelector(".z_realSubmit").click();
              }
          } else {
              document.querySelector(".z_realSubmit").click();
          }
      }

      function validateEmail(email) {
          var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/;
          return re.test(String(email).toLowerCase());
      } </script>

  `
}
