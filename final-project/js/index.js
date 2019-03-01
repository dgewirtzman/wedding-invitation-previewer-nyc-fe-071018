document.addEventListener('DOMContentLoaded', (event) => {
    let firstNameInput = document.querySelector('#firstName')
    let secondNameInput = document.querySelector('#secondName')
    let lastNameInput = document.querySelector('#lastName')
    let dateInput = document.querySelector('#weddingDate')
    let locationInput = document.querySelector('#weddingLocation')
    
    const aCateredAffairStyle = document.getElementById('catered-affair')
    const iDoiDoStyle = document.getElementById('ido-ido')
    const sweeneyToddStyle = document.getElementById('sweeney-todd')
    
    let activeElement = "#style-cateredaffair"
    
    aCateredAffairStyle.addEventListener('click', (event) => {
      if (activeElement == "#style-idoido") {
          $('#style-cateredaffair, #style-idoido').toggleClass('hidden');
          activeElement = "#style-cateredaffair"
      }

      if (activeElement == "#style-sweeneytodd") {
        $('#style-cateredaffair, #style-sweeneytodd').toggleClass('hidden');
        activeElement = "#style-cateredaffair"
      }      
     
    })
    
    iDoiDoStyle.addEventListener('click', (event) => {
      if (activeElement == "#style-cateredaffair") {
        $('#style-cateredaffair, #style-idoido').toggleClass('hidden');
        activeElement = "#style-idoido"
      }

      if (activeElement == "#style-sweeneytodd") {
          $('#style-sweeneytodd, #style-idoido').toggleClass('hidden');
          activeElement = "#style-idoido"
      }      
     
    })
    
    sweeneyToddStyle.addEventListener('click', (event) => {
      if (activeElement == "#style-cateredaffair") {
        $('#style-cateredaffair, #style-sweeneytodd').toggleClass('hidden');
          activeElement = "#style-sweeneytodd"
      }

      if (activeElement == "#style-idoido") {
        $('#style-idoido, #style-sweeneytodd').toggleClass('hidden');
          activeElement = "#style-sweeneytodd"
      }     
     
    })
    
    firstNameInput.addEventListener('keyup', (event) => {
      let value = firstNameInput.value
      $(".invitationFirstName").html(value);
      let firstLetter = value.slice(0,1)
      $(".firstInitial").html(firstLetter.toUpperCase())
      if (value != "") {
        $(".initial-ampersand").html("&nbsp;&amp;&nbsp;")
        $(".name-ampersand").html("&nbsp;&amp;&nbsp;")
        $(".inviteText").html("You are cordially invited to the wedding of")
      } else {
        $(".initial-ampersand").html("")
        $(".name-ampersand").html("")
        $(".inviteText").html("")
      }
      
    })
  
    secondNameInput.addEventListener('keyup', (event) => {
      let value = secondNameInput.value
      $(".invitationSecondName").html(value);
      let secondLetter = value.slice(0,1)
      $(".secondInitial").html(secondLetter.toUpperCase())
    })
    
    lastNameInput.addEventListener('keyup', (event) => {
      let value = lastNameInput.value
      $(".invitationLastName").html(value)
    })
    
    dateInput.addEventListener('keyup', (event) => {
      let value = dateInput.value
      $(".invitationDate").html(value)
    })
    
    locationInput.addEventListener('keyup', (event) => {
      let value = locationInput.value
      $(".invitationLocation").html(value)
    })
    
    //for image download

    $('#downloadButton').click(function() {
        html2canvas($(activeElement)[0]
        ).then(function(canvas) {
          var trimmedCanvas = trim(canvas);
          var a = document.createElement('a');
          document.body.appendChild(a)
          a.href = trimmedCanvas.toDataURL("image/png");
          a.download = 'invitation.png';
          a.target="_self"
          a.click();
          document.body.removeChild(a);
        });
      
    });
    
    //typewriter effect for h1
    
    let str = "Wedding Invitation Designer"
    let spans = '<span>' + str.split('').join('</span><span>') + '</span>';
      $(spans).hide().appendTo('.typing').each(function (i) {
          $(this).delay(125 * i).css({
              display: 'inline',
              opacity: 0
          }).animate({
              opacity: 1
          }, 0);
      });
})