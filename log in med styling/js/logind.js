function TheLogin(form) {
    var password = 'eaaa';
    var brugernavn = 'eaaa';	
    if (form.pass.value == password && form.name.value == brugernavn) {
        window.alert("TILLYKKE!!! Kodeord og navn er korrekt og du logges ind :-)");
        top.location.href="side.html";
    }
    else {
        if (form.pass.value != password && form.name.value != brugernavn)
            window.alert("Kodeord er forkert og Navn er ukendt - prøv veligst igen :-)");
        else if (form.pass.value != password)
            window.alert("Navn er kendt men Kodeord er forkert - prøv veligst igen :-)");
        else if (form.name.value != brugernavn)
            window.alert("Navn er ukendt men kodeordet er rigtigt - prøv veligst igen :-)");	  		
      }
    }
