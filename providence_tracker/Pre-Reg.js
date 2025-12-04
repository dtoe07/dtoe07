    
var arr = ["Afghan = 265",
"Afrikaans = 224","Akan = 016","Akateko = 418","Albanian = 070","Amharic-Ethiopia = 027","Arabi = 090","Armenian = 072","Armenian-Eastern = 420","Armenian-Western = 421",
"Ashanti = 365","Assyrian = 139","Azerbaijani = 109","Bambara = 019","Belarusian = 225","Bemba-Zambia = 324","Bengali = 084","Berber = 269","Bhutanese-Dzongkha = 391",
"Borana = 382","Bosnian = 263","Brazil-Portuguese = 270","Bulgarian = 069","Burmese = 042","Cambodian = 048","Cantonese = 031","Cape Verdean = 013","Cebuano = 122","Chaldean = 138",
"Chamorro = 403","Chao Chow = 038","Chin = 378","Chin-Falam = 405","Chin-Hakha = 406","Chin-Tedim = 408","Chin-Zophel = 407","Chinese = 030","Chiu Chow = 346","Chungshan = 034",
"Chuukese = 316","Crioulo = 341","Croatian = 067","Czech = 063","Danish = 055","Dari-Afghanistan = 111","Dinka-Sudan = 131","Duch = 056","Ebon = 272","Edo = 273","Egyptian Arabic = 398",
"Eritrean = 274","Estonian = 077","Ethiopian = 275","Ewe = 321","Fanti = 074","Farsi = 107","Filipino = 395","Finnish = 052","Flemish = 227","Foochow = 276","French = 058",
"French Cajun = 277","French Canadian = 383","French Creole = 217","Fukienese = 032","Fulani = 014","Fuzhou = 229","Ga = 230","Garri = 388","Georgian = 216","German = 057",
"Greek = 071","Guamanian = 125","Gujarati = 083","Gulf Arabic = 401","Haitian Creole = 129","Hakka = 039","Hamer-Bana = 396","Hausa = 022","Hebrew = 106","Hindi = 082","Hmong = 046",
"Hokkien = 286","Hunanese = 147","Hungarian = 065","Ibo = 218","Ilocano = 113","Ilonggo = 121","Indonesian = 050","Iraqi Arabic = 399","Italian = 059","Japanese = 040","Jingpho = 379",
"Jula = 328","Kachchi = 371","Kamba = 412","Kanjobal = 288","Karen = 369","Karenni-Kayah = 384","Kashmiri = 237","Kazakh = 238","Khmer = 023","Kikuyu = 239","Kinya-Rwanda = 366",
"Kirundi = 338","Kiswahill = 424","Kizigua = 425","Kongo = 376","Korean = 041","Krahn = 320","Kunama = 370","Kurdish = 140","Kurdish-Badini = 414","Kurdish-Kurmanji = 375",
"Kurdish-Sorani = 375","Kyrgyz = 240","Lao = 043","Levantine Arabic = 402","Lingala = 024","Lithuanian = 075","Luo = 329","Mayy Somali = 315","Macedonian = 068","Malay = 051",
"Malayalam = 088","Malinke = 354","Mandarin = 035","Mandingo = 015","Mandinka = 246","Marathi = 205","Marshallese = 291","Mien = 045","Mirpuri = 373","Mixteco = 292","Mixteco-Alto = 415",
"Mixteco-Bajo = 416","Mola-Mossi = 389","Moldovan = 340","Mongolian = 150","Montenegrin = 339","Moroccan Arabic = 381","Navajo = 144","Neapolitan = 249","Nepali = 081","Nigerian English-Pidgin = 363",
"Norwegian = 054","Nuer-Sudan = 294","Oromo-Ethiopia = 251","Ouatchi = 386","Pashto-Afghanistan = 110","Persian = 297","Pidgin English = 254","Polish = 062","Portuguese = 061",
"Portuguese-Creole = 141","Punjabi = 080","Quechua = 145","Quiche = 317","Romanian = 066","Russian = 078","Samoan = 126","Saudi Arabic = 400","Serbian = 148","Serbo-Croatian = 299",
"Shanghainese = 037","Sichuan-Szechuan = 333","Sicilian = 256","Sinhala = 089","Slovak = 064","Slovakian = 301","Slovenian = 134","Somali = 142","Soninke = 312","Soninke-Maraka = 413",
"Soninke-Sarahuleh = 337","Soninke-Sarakole = 419","Spanish = 060","Sudanese Arabic = 311","Swahili = 026","Swahili-Kibajuni = 422","Swedish = 053","Syiheti = 377","Tadzhik = 302",
"Tagalog = 117","Taiwanese = 033","Tamil = 137","Telugu = 303","Thai = 047","Tibetan = 105","Tigrigna-Eritrea = 028","Toisan = 305","Toishanese = 036","Tongan = 305",
"Trukese-Chuukese = 342","Turkish = 112","Twi = 095","Ukrainian = 076","Urdu = 079","Uzbek = 336","Vietnamese = 049","Visayan = 214","Waray-Waray = 119","Wolof = 020","Wuxinese = 260",
"Yemeni Arabic = 387","Yiddish = 135","Yoruba = 021","Yugoslavian = 262","Zambai = 115"
];

var dept = ["Medical Record = 503-215-7423","Estimate = 503-215-9551","Estimate = 855-367-1339","Billing = 503-215-4300","Billing = 877-215-7833","Interpreter = 844-235-2930","Verification WA = 855-367-1348", "Verification WA DI = 855-367-1349","Verification OR = 855-367-1344","Verification OR DI = 855-367-1345","Verification AK = 855-367-1351","Maternity Fax: 503-215-0825","Pre-Registration WA = 855-359-6321","Pre-Registration OR = 503-215-9565","Pre-Registration OR = 855-367-1341","Pre-Registration AK = 907-212-3149","Pre-Registration AKI = 855-360-5474"];

var wq = ["OR WQ Transfer = 11201 ADT OR All Ver Admin","WA WQ Transfer = 2866 ADT WAMT All Ver Admin","AK WQ Transfer = 3044 ADT AK All Ver Admin"];


    var outPtCall = 0;
    var outPtHar = 0;
    
    var paidFull = 0;
    var paidPartial = 0;
    var collectOnsite = 0;
    var billed = 0;
    
    var deptCount = 0;
    var researchCount = 0;
    
    var ptAttempt = 0;
    var ptHar = 0;
    
    var total = 0;
    var timeInHr = 0;
    
    function sum(){
        total = ptHar + ptAttempt*3 +outPtHar + paidPartial*13 + outPtCall*8 + paidFull*13 + 
        researchCount*3 + deptCount*5 + collectOnsite*11 + billed*11;
    }
    
    //Increasing counter on lick
    function onClick(val) {
        
        //Out pt call
        if(val == "outCall"){
            outPtCall += 1;
            sum();
            
            timeInHr  =  minToHr(total);
            document.getElementById("outCall").innerHTML = outPtCall;
            document.getElementById("total").innerHTML = timeInHr;
        }
        
        //Money collected in FUll
        else if(val == "ptPaid"){
            paidFull += 1;
            sum();
            
            timeInHr  =  minToHr(total);
            document.getElementById("ptPaid").innerHTML = paidFull;
            document.getElementById("total").innerHTML = timeInHr;
        }
        
        //Out pt har
        else if(val == "outHar"){
            outPtHar += 1;
            sum();
            
            timeInHr  =  minToHr(total);
            document.getElementById("outHar").innerHTML = outPtHar;
            document.getElementById("total").innerHTML = timeInHr;
        }
        
        //Money collected partially
        else if(val == "ptPartial"){
            paidPartial += 1;
            sum();
            
            timeInHr  =  minToHr(total);
            document.getElementById("ptPartial").innerHTML =  paidPartial;
            document.getElementById("total").innerHTML = timeInHr;
        }
        
        //Money to be collected onsite
        else if(val == "payOnsite"){
            collectOnsite += 1;
            sum();
            
            timeInHr  =  minToHr(total);
            document.getElementById("payOnsite").innerHTML =  collectOnsite;
            document.getElementById("total").innerHTML = timeInHr;
        }
        
        //Pt request to be billed later
        else if(val == "toBeBilled"){
            billed += 1;
            sum();
            
            timeInHr  =  minToHr(total);
            document.getElementById("toBeBilled").innerHTML =  billed;
            document.getElementById("total").innerHTML = timeInHr;
        }
        
        //Research counter
        else if(val == "research"){
            researchCount += 1;
            sum();
            
            timeInHr  =  minToHr(total);
            document.getElementById("research").innerHTML = researchCount;
            document.getElementById("total").innerHTML = timeInHr;
        }
        
        //Dept and interpreter call
        else if(val == "deptCall"){
            deptCount += 1;
            sum();
            
            timeInHr  =  minToHr(total);
            document.getElementById("deptCall").innerHTML = deptCount;
            document.getElementById("total").innerHTML = timeInHr;
        }
        
        //Attempt call
        else if(val == "attempt"){
            ptAttempt += 1;
            sum();
            
            timeInHr  =  minToHr(total);
            document.getElementById("attempt").innerHTML = ptAttempt;
            document.getElementById("total").innerHTML = timeInHr;
        }
        
        //Creating Har
        else if(val == "makeHar"){
            ptHar += 1;
            sum();
            
            timeInHr  =  minToHr(total);
            document.getElementById("makeHar").innerHTML = ptHar;
            document.getElementById("total").innerHTML = timeInHr;
        }
    }
    
    
    //Convert Minute to Hr
    function minToHr(minutes) {
        var h = Math.floor(minutes / 60);
         var m = minutes % 60;
        h = h < 10 ? '0' + h : h;
        m = m < 10 ? '0' + m : m;
        return h + ':' + m;
    }
    
    //Real time searching
    const updateResult = query => {
	   let resultList = document.querySelector(".result");
	   resultList.innerHTML = "";
	   arr.map(algo =>{
		  query.split(" ").map(word =>{
              if(algo.toLowerCase().indexOf(word.toLowerCase()) != -1){
                resultList.innerHTML += `<li class="list-group-item">${algo}</li>`;
			 }
		  })
	   })
    }
    
    //Realtime Search pure JS
    function realTimeSearch() {
        let resultList = document.querySelector(".result");
        resultList.innerHTML = "";
        
        var input = document.getElementById("lang").value;   
        var filter = input.toUpperCase();
        
        //Looping thru Language codes
        for (i = 0; i < arr.length; i++) {
            if (arr[i].toUpperCase().indexOf(filter) != -1) {
                resultList.innerHTML += `<li>${arr[i]}</li>`;
            }
        }
        
        //:ooping thru depts
        for (i = 0; i < dept.length; i++) {
            if (dept[i].toUpperCase().indexOf(filter) != -1) {
                resultList.innerHTML += `<li>${dept[i]}</li>`;
            }
        }
        
        //Looping thru WQ transfer codes
        for (i = 0; i < wq.length; i++) {
            if (wq[i].toUpperCase().indexOf(filter) != -1) {
                resultList.innerHTML += `<li>${wq[i]}</li>`;
            }
        }
        
        if(filter === ""){
            resultList.innerHTML = "";
        }
    }
    