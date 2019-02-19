/*
      -Sinirli uzun bir donguye gir
      -Kullanicinin isim ve soyismini al
      -Kullanicinin ogrenci numarasini al
      -bufferMetin'sine ekle
      -buffer mantigiyla belli araliklarla (1000,5000, vs.)
      listeyi bilgisayara kaydet
      
      
*/




var kulIsim = "";
var kulNo = "";
var sonrakiKullaniciId = 0;
var bufferSatirLimiti = 1000;
var bufferMetin = "";

var bekle = 0;
var sonlandir = 0;

function devamEttir(){
   bekle = 1;
}

function programiSonlandir(){
   //buranin calisabilmesi icin sonlandir dugmesinin olusturulmasi gerekli
   sonlandir = 1;
}

//girilen sayisal deger kullanici sayisini belirler, 
var istenenKullaniciSayisi = 5000 / bufferSatirLimiti; 


//ana dongu baslangici
var anaDonguSayisi = 0;
for (anaDonguSayisi = 0; anaDonguSayisi < istenenKullaniciSayisi; anaDonguSayisi++)
{
   //buffer dongu baslangici
   var satirNo = 0;
   bufferMetin = "";
   for (satirNo = 0; satirNo < bufferSatirLimit; satirNo++)
   {
      
      //ISIM SOYISIM
      bufferMetin += document.getElementsByClassName("profile-user")[0].innerHTML + ":";
      //OGRENCINO
      bufferMetin += document.getElementsByClassName("icon fa fa-windows")[0].href.split("/")[4] + "\n";

      //    Bir sonraki kullaniciya gec
      //adresin sonundaki degeri bir arttir

      sonrakiKullaniciId = parseInt(window.location.href.split("=")[1])+1;
      
      var totalKullaniciSayisi = (anaDonguSayisi * bufferSatirLimiti) + satirNo;
      if (totalKullaniciSayisi >= istenenKullaniciSayisi)
      {
         //istenen kullanici limiti buffer limitinden az ise erken cikis vermek icin
         //veya
         //1500 gibi buffer limitinin katlari olmayan bir ara miktar belirlendiginde
         //donguyu fazla tekrarsiz kapatmak icin
         //yani
         //alinmasi gereken sayiya ulasildiginda donguyu sonlandir
         break;
      }
      
      //eklentiden islemi durdurma yapabilmem icin
      if (sonlandir)
      {
         break;
      }
      
      //yeni adresi olustur
      //yonlendir
      window.location.href = "http://dys.mu.edu.tr/user/profile.php?id=" + sonrakiKullaniciId;
      
   }
   //eklentiden islemi durdurma yapabilmem icin
   if (sonlandir)
   {
      break;
   }
   
   
   //dosya kaydet ekrani goster
   var filename = "ogrenciler" + (sonrakiKullaniciId -1) + ".txt";
   var element = document.createElement('a');
   element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(bufferMetin));
   element.setAttribute('download', filename);

   element.style.display = 'none';
   document.body.appendChild(element);

   //!!!MUHTEMEL HATA!!!
   //bu kaydetme ozelligi hazir koddan kopyalandi
   //muhtemelen bir click olayi bekleyecegi icin
   //dosyayi kaydet penceresi goruntulenmeyecek
   element.click();

   document.body.removeChild(element);      

//    Bir sonraki kullaniciya gec


}
