
function Landing(val){
  return `
  <zp name="Panel CSS"></zp>
  <zp name="Panel Scripts"></zp>
  <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
  <script src="//cdnjs.cloudflare.com/ajax/libs/venobox/1.6.0/venobox.min.js"></script>
  <script zonload="true" zp="true">
    $(function() {
      $('a[data-type]').venobox();
    });
  </script>
  <link rel="stylesheet" href="//s3.amazonaws.com/static.ziftsolutions.com/files/ff808181592485f4015945febbcd5601/venobox.css" />
  <link href="https://s3.amazonaws.com/static.ziftsolutions.com/codebase/bootstrap/z_bootstrap-V2.css" rel="stylesheet" />
  <div id="z_wrapper">

  ${val}

  </div>
  <!-- Bootstrap core JavaScript -->
  <script src="https://s3.amazonaws.com/static.ziftsolutions.com/codebase/bootstrap/responsive-bootstrap-V2.js" type="text/javascript"></script> <!-- Email Validation -->
  <script>
    function validateForm() {
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
    }
  </script>

  `
}
