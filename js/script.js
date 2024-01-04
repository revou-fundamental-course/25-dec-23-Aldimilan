  
  
  /* Maaf teruntuk kakak yang mengecek code, ID keliling dan Luas terbalik */
  
  function hitungLuas() {
    var sisia = parseFloat(document.getElementById('sisia').value);
    var sisib = parseFloat(document.getElementById('sisib').value);
    var sisic = parseFloat(document.getElementById('sisic').value);

    if (isNaN(sisia) || isNaN(sisib) || isNaN(sisic)) {
      alert('tolong input bilangan yang sesuai');
      return;
    }
    if (sisia + sisib > sisic && sisib + sisic > sisia && sisic + sisia > sisib) {
      var area = sisia + sisib + sisic;
      document.getElementById('hasilLuas').textContent = '' + area.toFixed();
    } else {
        alert('Bilangan yang dimasukkan tidak valid');
    }
  }

  function resetLuas(){
    document.getElementById('sisia').value = '';
    document.getElementById('sisib').value = '';
    document.getElementById('sisic').value = '';
    document.getElementById('hasilLuas').innerHTML = '';
  }


  function hitungKeliling(){
    var alas = parseFloat(document.getElementById('alas').value);
    var tinggi = parseFloat(document.getElementById('tinggi').value);

    if (isNaN(alas) || isNaN(tinggi)) {
      alert('Bilangan yang dimasukkan tidak valid');
      return;}

      var area = 0.5 * alas * tinggi;
      document.getElementById('hasilKeliling').textContent = '' + area.toFixed(2);
  }

  function resetKeliling(){
    document.getElementById('alas').value = '';
    document.getElementById('tinggi').value = '';
    document.getElementById('hasilKeliling').innerHTML = '';
  }