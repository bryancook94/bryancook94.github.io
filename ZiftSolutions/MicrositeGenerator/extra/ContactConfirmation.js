function ContactConfirmation(){
  return `
  <div zcondition="zpersonalizer=='true'" zp="true">
  <div style="border: 2px solid #58585b; padding: 20px;" zcondition="Sections!='Contact' || Contact Section!='Show'" zp="true">
  <p style="color: #333333; font-size: 18px; margin:0;padding:0;">Contact form is hidden. This page will not be used.</p>
  </div>
  </div>
  <div zcondition="Sections=='Contact' &amp;&amp; Contact Section=='Show'" style="position: absolute;background-color: #ffffff!important;color: #333333;font-family: zval(Copy Font-Family);right: 0;bottom: 0;left: 0;top: 0;text-align: center; padding:80px; line-height:1.4" zp="true"><span zcondition="Language=='English'" zp="true">
  <h2>Thank you</h2>
  A representative from <zp name="Company Display Name"></zp> will contact you shortly.</span> <span zcondition="Language=='French'" zp="true">
  <h2>Merci</h2>
  Un représentant de <zp name="Company Display Name"></zp> vous contactera prochainement.</span> <span zcondition="Language=='German'" zp="true">
  <h2>Vielen Dank</h2>
  Ein Mitarbeiter von <zp name="Company Display Name"></zp> wird Sie in Kürze kontaktieren.</span> <span zcondition="Language=='Portuguese'" zp="true">
  <h2>Obrigado</h2>
  Um representante da <zp name="Company Display Name"></zp> falará com você em breve.</span> <span zcondition="Language=='Chinese'" zp="true">
  <h2>谢谢您</h2>
  <zp name="Company Display Name"></zp> 的代表将会尽快与您联系。</span> <span zcondition="Language=='Spanish'" zp="true">
  <h2>Gracias</h2>
  Un representante de <zp name="Company Display Name"></zp> se pondrá en contacto con usted a la mayor brevedad.</span> <span zcondition="Language=='Russian'" zp="true">
  <h2>Спасибо!</h2>
  Представитель <zp name="Company Display Name"></zp> свяжется с Вами в ближайшее время.</span> <span zcondition="Language=='Dutch'" zp="true">
  <h2>Hartelijk dank.</h2>
  Een medewerker van <zp name="Company Display Name"></zp> neemt binnenkort contact met u op.</span> <span zcondition="Language=='Japanese'" zp="true">
  <h2>お問い合わせいただきありがとうございます。</h2>
  <zp name="Company Display Name"></zp> 様担当者より折り返しご連絡させていただきます。</span> <span zcondition="Language=='Korean'" zp="true">
  <h2>감사합니다.</h2>
  조만간 <zp name="Company Display Name"></zp> 의 대표가 연락 드릴 것입니다.</span> <span zcondition="Language=='Italian'" zp="true">
  <h2>Grazie,</h2>
  un rappresentante da <zp name="Company Display Name"></zp> ti contatterà a breve.</span> <span zcondition="Language=='Polish'" zp="true">
  <h2>Dziękujemy.</h2>
  Przedstawicie <zp name="Company Display Name"></zp> wkrótce się z Tobą skontaktuje.</span> <span zcondition="Language=='Hebrew'" zp="true">
  <h2>,תודה</h2>
  .יצור אתך קשר בהקדם <zp name="Company Display Name"></zp> נציג של</span> <span zcondition="Language=='Chinese Traditional'" zp="true">
  <h2>谢谢您</h2>
  <zp name="Company Display Name"></zp> 的代表将会尽快与您联系。</span> <span zcondition="Language=='Danish'" zp="true">
  <h2>Thank you</h2>
  A representative from <zp name="Company Display Name"></zp> will contact you shortly.</span> <span zcondition="Language=='Swedish'" zp="true">
  <h2>Thank you</h2>
  A representative from <zp name="Company Display Name"></zp> will contact you shortly.</span> <span zcondition="Language=='Norwegian'" zp="true">
  <h2>Thank you</h2>
  A representative from <zp name="Company Display Name"></zp> will contact you shortly.</span> <span zcondition="Language=='Finnish'" zp="true">
  <h2>Thank you</h2>
  A representative from <zp name="Company Display Name"></zp> will contact you shortly.</span> <span zcondition="Language=='Czech'" zp="true">
  <h2>Thank you</h2>
  A representative from <zp name="Company Display Name"></zp> will contact you shortly.</span></div>

  `
}
