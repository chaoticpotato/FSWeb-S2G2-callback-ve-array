const { fifaData } = require('./fifa.js')


/* Görev 1: 
	Verilen datayı parçalayarak aşağıdaki verileri (console.log-ing) elde ederek pratik yapın. 
	
	💡 İPUCU: Öncelikle datayı filtrelemek isteyebilirsiniz */

//(a) 2014 Dünya kupası Finali Evsahibi takım ismi (dizide "Home Team Name" anahtarı)

//(b) 2014 Dünya kupası Finali Deplasman takım ismi  (dizide "Away Team Name" anahtarı)

//(c) 2014 Dünya kupası finali Ev sahibi takım golleri (dizide "Home Team Goals" anahtarı)

//(d)2014 Dünya kupası finali Deplasman takım golleri  (dizide "Away Team Goals" anahtarı)

//(e) 2014 Dünya kupası finali kazananı*/


/*  Görev 2: 
	Finaller adlı fonksiyonu kullanarak aşağıdakileri uygulayın:
	1. Bir dizi(array) olan Fifa datasını fonksiyonun birinci parametresi olarak alacak
	2. Sadece final maçlarını içeren nesnenin(object) datalarını filtreleyerek, bir dizi olarak döndürecek(return)
	
	💡 İPUCU - verilen data içindeki nesnelerin(objects) "Stage" anahtarına bakmalısınız
*/

function Finaller(/* kodlar buraya */) {
	
    /* kodlar buraya */
}



/*  Görev 3: 
	Bir higher-order fonksiyonu olan Yillar isimli fonksiyona aşağıdakileri uygulayın: 
	1. fifaData dizisini(array) fonksiyonun birinci parametresi olarak alacak
	2. Görev 2'de yazdığınız Finaller fonksiyonunu, geriçağırım(callback) olarak fonksiyonun ikinci parametresi olarak alacak
	3. Finaller data setindeki tüm yılları içeren "years" adındaki diziyi(array) döndürecek
	*/

function Yillar(/* kodlar buraya */) {
	
    /* kodlar buraya */
}


/*  Görev 4: 
	Bir higher-order fonksiyonunu olan Kazananlar isimli fonksiyona aşağıdakileri uygulayın:  
	1. fifaData dizisini(array) fonksiyonunun birinci parametresi olarak alacak
	2. Görev 2'de yazdığınız Finaller fonksiyonunu, geriçağırım(callback) olarak fonksiyonun ikinci parametresi olarak alacak
	3. Her final maçının kazananını (evsahibi ya da deplasman) belirleyecek
	💡 İPUCU: Beraberlikler(ties) için şimdilik endişelenmeyin (Detaylı bilgi için README dosyasına bakabilirsiniz.)
	4. Tüm kazanan ülkelerin isimlerini içeren `kazananlar` adında bir dizi(array) döndürecek(return)  */ 

function Kazananlar(/* kodlar buraya */) {
	
    /* kodlar buraya */
	
}



/*  Görev 5: 
	Bir higher-order fonksiyonu olan YillaraGoreKazananlar isimli fonksiyona aşağıdakileri uygulayın:
	1. fifaData dizisini(array) fonksiyonunun birinci parametresi olarak alacak
	2. Görev 2'de yazdığınız Finaller fonksiyonunu, geriçağırım(callback) olarak fonksiyonun ikinci parametresi olarak alacak
	3. Görev 3'de yazdığınız Yillar fonksiyonunu, geriçağırım(callback) olarak fonksiyonun üçüncü parametresi olarak alacak
	4. Görev 4'de yazdığınız Kazananlar fonksiyonunu, geriçağırım(callback) olarak fonksiyonun dördüncü parametresi olarak alacak
	5. Her yıl için "{yıl} yılında, {ülke} dünya kupasını kazandı!" cümlesini(string) içeren bir diziyi(array) döndürecek
	
	💡 İPUCU: her cümlenin adım 4'te belirtilen cümleyle birebir aynı olması gerekmektedir.
*/

function YillaraGoreKazananlar(/* kodlar buraya */) {
	
/* kodlar buraya */

}


/*  Görev 6: 
	Bir higher order fonksiyonu olan `OrtalamaGolSayisi` isimli fonksiyona aşağıdakileri uygulayın: 
	1. Görev 2'de yazdığınız `Finaller` fonksiyonunu birinci parametre olarak alacak; 'fifaData' dizisini argüman olarak eklediğinizden emin olun
	
	💡 İPUCU: Çağırma örneği: `OrtalamaGolSayisi(Finaller(fifaData));`
	
	2. Her maç için Ortalama toplam evsahibi gol sayısı ve toplam deplasman gol sayısını hesaplayacak (her maçta atılan toplam gol sayısı)
	
	3. Sonucun 2. ondalığını yuvarlayıp, bulunan değeri döndürecek(return)
	
	💡 İPUCU: .reduce, .toFixed (dizilim(syntax) için MDN'ye bakın) kullan, ve bunu 2 adımda yapın) 
	
*/

function OrtalamaGolSayisi(/* kodlar buraya */) {
	
    /* kodlar buraya */
	
}



/// EKSTRA ÇALIŞMALAR ///

function varsaArttirYoksaEkle(obj, str, value) {
	// bu fonksiyon, gönderilen str değeri obj içerisinde key olarak varsa, value değerini mevcut değere ekliyor
	// yoksa, yeni key yaratıp değerini value olarak belirliyor

	// örnek:
	// önce : obj = { Brazil: 4, Turkey: 2 }, str = "France", value = 5
	// sonra: obj = { Brazil: 4, Turkey: 2, France: 5 }

	// örnek:
	// önce : obj = { Brazil: 4, Turkey: 2, France: 5 }, str = "Turkey", value = 6
	// sonra: obj = { Brazil: 4, Turkey: 8, France: 5 }
	if (obj[str]) {
		obj[str] = obj[str] + value
	} else {
		obj[str] = value
	}
}

function objedekiEnBuyukValueHangiKeyeAit(obj) {
	const degerlerArr = Object.values(obj);
	const keysArr = Object.keys(obj);
	let enBuyugunIndeksi = 0;
	for (let t = 0; t < degerlerArr.length; t++) {
		if (degerlerArr[t] >= degerlerArr[enBuyugunIndeksi]) {
			enBuyugunIndeksi = t;
		}
	}
	return keysArr[enBuyugunIndeksi];
}

/*  BONUS 1:  
	`UlkelerinKazanmaSayilari` isminde bir fonksiyon oluşturun, parametre olarak `data` ve `takım kısaltmalarını` alacak ve hangi ülkenin kaç dünya kupası olduğunu döndürecek
	
	İpucu: "takım kısaltmaları" (team initials) için datada araştırma yapın!
İpucu: `.reduce` Kullanın*/

function kazananinKisaltmasi(mac) {
	let kazananKisaltmasi = "";
	if (mac["Home Team Goals"] > mac["Away Team Goals"]) {
		kazananKisaltmasi = mac["Home Team Initials"];
	} else if (mac["Home Team Goals"] < mac["Away Team Goals"]) {
		kazananKisaltmasi = mac["Away Team Initials"];
	} else {
		// berabere biten maclar
		const kazananAdi = mac["Win conditions"].split(" ")[0]
		if (kazananAdi === mac["Away Team Name"]) {
			kazananKisaltmasi = mac["Away Team Initials"]
		} else {
			kazananKisaltmasi = mac["Home Team Initials"]
		}
	}
	return kazananKisaltmasi;
}

function UlkelerinKazanmaSayilari(macArr, kisaltma) {
	const sonuc = {};

	// tüm veriden stage değeri final olan maçları filtreledim
	const finalMaclari = macArr.filter(mac => mac["Stage"] === "Final");
	const kazananlar = finalMaclari.map(mac => kazananinKisaltmasi(mac));

	for (let m = 0; m < kazananlar.length; m++) {
		varsaArttirYoksaEkle(sonuc, kazananlar[m], 1)
	}

	return (sonuc[kisaltma])

	/* kodlar buraya */

}

console.log("BRA kısaltmasına sahip ülkenin dünya kupası sayısı: ", UlkelerinKazanmaSayilari(fifaData, "BRA"));



/*  BONUS 2:  
EnCokGolAtan() isminde bir fonksiyon yazın, `data` yı parametre olarak alsın ve Dünya kupası finallerinde en çok gol atan takımı döndürsün */

function EnCokGolAtan(macArr) {
	/* boş bir obje oluşturuyorum, objeyi sonrasında şu şekilde doldurmak istiyorum:
	takimlarVeGoller = {
		Brazil: 21,
		Turkey: 15,
		France: 30
	}
	*/
	let takimlarVeGoller = {};


	// tüm veriden stage değeri final olan maçları filtreledim
	const finalMaclari = macArr.filter(mac => mac["Stage"] === "Final");


	for (let k = 0; k < finalMaclari.length; k++) {
		// final maçları arrayinin her bir elemanı yine bir final maçı
		const finalMacininBiri = finalMaclari[k];

		// bu maçtaki home takımın adı, örneğin "France"
		const buMactakiTakim_home = finalMacininBiri["Home Team Name"];

		// bu maçta home takımın attığı gol, örneğin 4
		const buMactakiTakim_homeGoal = finalMacininBiri["Home Team Goals"];

		// bu maçtaki away takımın adı, örneğin "Brazil"
		const buMactakiTakim_away = finalMacininBiri["Away Team Name"];

		// bu maçta away takımın attığı gol, örneğin 1
		const buMactakiTakim_awayGoal = finalMacininBiri["Away Team Goals"];


		// yukarıda bir yardımcı fonksiyon tanımladım
		// takimlarVeGoller objesine takım adı ve golünü eklemek için kullanıyorum
		// eğer takimlarVeGoller objesinde key olarak takım adı zaten varsa, gol sayısına ekleme yapacak
		// ama yoksa, key olarak takım adını key olarak oluşturup değerini gol sayısına eşitleyecek
		varsaArttirYoksaEkle(takimlarVeGoller, buMactakiTakim_home, buMactakiTakim_homeGoal);
		varsaArttirYoksaEkle(takimlarVeGoller, buMactakiTakim_away, buMactakiTakim_awayGoal);
	}

	return objedekiEnBuyukValueHangiKeyeAit(takimlarVeGoller);
}

console.log("Dünya kupası finallerinde en çok gol atan takım:", EnCokGolAtan(fifaData));


/*  BONUS 3: 
EnKotuDefans() adında bir fonksiyon yazın, `data` yı parametre olarak alsın ve Dünya kupasında finallerinde en çok golü yiyen takımı döndürsün*/

function EnKotuDefans(/* kodlar buraya */) {
	
    /* kodlar buraya */
	
}


/* Hala vaktiniz varsa, README dosyasında listelenen hedeflerden istediğinizi aşağıdaki boşluğa yazabilirsiniz. */


/* Bu satırın aşağısındaki kodları lütfen değiştirmeyin */
function sa(){
    console.log('Kodlar çalışıyor');
    return 'as';
}
sa();
module.exports = {
    sa,
    Finaller,
    Yillar,
    Kazananlar,
    YillaraGoreKazananlar,
    OrtalamaGolSayisi
}
