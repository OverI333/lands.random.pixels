

    const icono = document.getElementById('icon');
    const ocultarContenidoBtn = document.getElementById('ocultarContenidoBtn');
    const contenedorOpciones = document.querySelector('.contenedorOpciones');
    const showOptionsBtn = document.getElementById('showOptionsBtn');
    const options = document.getElementById('options');
    const container = document.getElementById('container');
    const radios = document.getElementById('radios'); 
    var widths = window.innerWidth;

    function irAPaginaBuscar() {
        window.location.href = "buscar.html";
    }
    
    showOptionsBtn.addEventListener('click', function(e) {
        
        e.stopPropagation();
        if (options.style.display === 'block') {
            options.style.display = 'none';
            radios.style.marginTop = '30px'; 
            icono.style.transform = 'rotate(0deg)';
        } else {
            icono.style.transform = 'rotate(-180deg)';
            options.style.display = 'block';
            radios.style.marginTop = (options.clientHeight + 30) + 'px'; 
        }
    });

    document.addEventListener('click', function() {
        options.style.display = 'none';
        radios.style.marginTop = '30px';
        icono.style.transform = 'rotate(0deg)';
    });

    options.addEventListener('click', function(event) {
        
        event.stopPropagation();
        if (event.target.tagName === 'BUTTON') {
            const num = parseInt(event.target.getAttribute('data-num'));
            createBoxes(num);
            options.style.display = 'none';
            radios.style.marginTop = '30px';
            updateNumbers();
        }
    });

    function createBoxes(num) {
        container.innerHTML = ''; 

        for (let i = 0; i < num; i++) {
            const boxContainer = document.createElement('div');
            const box = document.createElement('iframe'); 
            const boxInfo = document.createElement('div');

            boxContainer.classList.add('boxContainer');
            box.classList.add('box');
            boxInfo.classList.add('boxInfo');

            boxContainer.appendChild(box);
            boxContainer.appendChild(boxInfo);
            container.appendChild(boxContainer);


            if (num == 1){
                boxContainer.style.marginTop = '3.5%'
                boxContainer.style.width = '60%'
                boxContainer.style.height = '70vh'
            }
            if (num == 2){
                boxContainer.style.marginTop = '3.5%'
                boxContainer.style.width = '40%'
                boxContainer.style.height = '68vh'
            }
            if (num == 3){
                container.style.flexDirection = '';
                container.style.flexWrap = '';
                boxContainer.style.marginTop = '3.5%';
                boxContainer.style.width = '40%';
                boxContainer.style.marginLeft = '15px';
                boxContainer.style.height = '65vh';   

            }
            if (num == 4){
                container.style.flexDirection = 'row';
                container.style.flexWrap = 'wrap';
                boxContainer.style.marginTop = '0.5%';
                boxContainer.style.width = '35%';
                boxContainer.style.height = '40vh';
 
            }
            console.log(widths)
            if (widths <= 700) {
                container.style.flexDirection = '';
                container.style.flexWrap = '';
                    // Limpiar cualquier flotante previo
                container.style.flexDirection = 'column';
                boxContainer.style.width = '82%';
                boxContainer.style.height = '30%';
                if (num == 1){
                    boxContainer.style.marginTop = '-40vh'
                    boxContainer.style.width = '93%'
                    boxContainer.style.marginLeft='0.7vh'
                    boxContainer.style.height = '50vh'
                }
                if (num == 2){
                    container.style.marginTop = '-13vh' 
                    boxContainer.style.width = '90%'
                    boxContainer.style.height = '42vh'
                }
                if(num == 3 || num == 4){
                    container.style.marginTop = '0vh' 
                }
                
            }

            // Agregar la carga de las lands
            //----------------------------
            boxInfo.addEventListener('click', function() {
                copiarContenido(boxInfo);
            });
        }
    };

    var numColmenas = [264,284,541,997,1028,1340,1664,1781,2127,2676,2921,3041,3056,3297,3985,4076,4081,4200,4409,4547,4842];
    var numTextil = [107,262,351,411,438,571,783,1021,1077,1099,1423,1670,1772,1947,1960,2350,2381,2631,2840,2953,3049,3063,3136,3813,3888,4018,4841];
    var numHornos = [102,115,244,246,412,531,651,698,810,841,996,1052,1097,1110,1172,1370,1621,1663,1714,1780,1803,1818,1882,2096,2134,2271,2304,2318,2358,2417,2472,2498,2524,2525,2547,2802,2831,2860,2862,2870,3104,3107,3170,3181,3183,3237,3347,3349,
                    3576,3650,3701,3730,3740,3750,3794,3855,4060,4071,4174,4180,4218,4261,4400,4411,4695,4744,4750,4760,4778,4833];

    var numCarpenter = [120,121,152,199,206,267,268,275,276,305,308,320,338,372,429,440,472,504,574,613,639,644,715,749,750,759,784,799,860,865,978,995,1014,1030,1037,1043,1069,1088,1089,1100,1115,1116,1119,1123,1220,1232,1248,
                    1339,1429,1431,1445,1477,1483,1485,1564,1604,1611,1613,1631,1639,1726,1814,1815,1859,1881,1896,1913,1924,1982,1986,2015,2083,2085,2119,2149,2179,2237,2254,2296,2329,2331,2395,2471,2566,2573,2593,2619,2672,2766,2784,2796,2824,2849,2933,2943,
                    2973,2974,3067,3084,3111,3218,3355,3449,3450,3517,3541,3568,3575,3592,3643,3752,3753,3759,3766,3861,3871,3873,3951,3972,4034,4094,4145,4158,4257,4274,4275,4335,4408,4502,4522,4531,4533,4614,4619,4653,4663,4704,4784,4814,4856,4877,4943,4945,4968];

    var numMinas = [93,105,119,176,192,193,194,197,204,205,219,220,225,226,233,238,241,242,243,247,253,257,261,263,271,278,280,281,289,290,296,304,309,324,328,334,337,340,341,342,343,347,341,381,391,394,
                    396,397,399,402,407,409,416,423,437,441,447,484,487,491,502,506,507,520,526,528,536,538,547,555,559,561,5661,567,568,570,580,581,594,597,598,610,630,636,637,666,667,674,682,690,705,712,
                    729,731,733,735,744,745,755,763,786,813,823,829,835,890,910,932,935,394,968,984,991,1000,1011,1018,1056,1104,1106,1111,1133,1150,1162,1191,1201,1241,1245,1250,1252,1273,1294,1298,1309,1320,1332,1341,1343,1348,1351,1352,1353,1354,1355,1356,1357,1358,1359,1360,1397,1401,1403,
                    1434,1438,1439,1455,1480,1487,1529,1544,1571,1582,1597,1614,1627,1628,1648,1665,1667,1679,1680,1681,1699,1706,1717,1730,1759,1790,1804,1820,1887,1894,1930,1931,1934,1945,1972,1976,1987,1990,2002,2004,2027,2028,2029,2030,2034,2075,2081,2089,2110,2116,2125,2130,2138,2159,2176,2180,2182,2200,2202,2204,2214,2217,2218,2230,2240,2241,2251,2256,2264,2267,2270,2273,2278,
                    2284,2302,2303,2308,2313,2315,2332,2337,2355,2359,2367,2391,2421,2429,2430,2431,2449,2453,2455,2489,2492,2502,2544,2561,2567,2583,2594,2611,2632,2641,2642,2647,2650,2657,2678,2680,2681,2682,2683,2693,2730,3764,2770,2777,2782,2817,2832,2850,2851,2871,2877,2878,2906,2910,2932,2983,2987,2988,3013,3033,3034,3035,3079,3080,3081,3085,3110,3118,3128,3132,
                    3148,3171,3188,3205,3242,3260,3271,3290,3293,3299,3316,3321,3333,3337,3391,3413,3438,3445,3453,3461,3522,3533,3557,3558,3562,3565,3580,3595,3597,3598,3599,3610,3613,3630,3641,3647,3685,3700,3711,3731,3756,3760,3769,3779,3783,3785,3791,3795,3802,3849,3853,3856,3878,3882,3920,3921,3925,3968,3996,4015,4017,4030,4039,4041,4051,4055,4066,4068,4095,4099,4102,4111,4116,4120,4121,4125,
                    4126,4135,4156,4167,4168,4173,4175,4187,4193,4216,4224,4232,4234,4238,4240,4242,4262,4266,4277,4285,4290,4300,4306,4312,4347,4348,4353,4377,4379,4387,4388,4390,4396,4401,4402,4404,4409,4419,4423,4434,4462,4463,4467,4477,4478,4480,4495,4512,4528,4529,4539,4553,4566,4567,4582,4592,4617,4649,4657,4658,4665,4671,4679,4686,4687,4717,4741,4746,4763,4765,4768,4771,4772,4786,4797,4803,4806,4807,4808,4817,4818,4827,4830,
                    4861,4867,4869,4886,4887,4890,4896,4906,4910,4916,4917,4918,4923,4931,4947,4952,4953,4954,4960,4973,4982,4988,4991,4993,4998];

    var allowedNumbers = [10, 15, 17, 19, 23, 26, 43, 45,54,59,61,62,65,66,77,85,95,99,108,109,120,133,134,135,139,142,152,183,184,195,198,200,
                203,206,210,219,220,228,229,231,248,275,300,311,326,328,330,333,335,344,354,369,376,77,384,394,403,412,414,425,427,430,442,446,453,458,464,467,472,483,484,488,
                492,494,501,502,506,510,517,524,533,543,547,552,553,555,566,574,583,602,603,619,623,630,631,638,639,643,644,675,681,690,691,706,714,715,717,728,738,745,759,760,763,778,781,789,
                794,797,825,841,844,846,848,852,860,861,863,864,870,891,892,915,933,949,961,978,986,1000,1011,1014,1025,1032,1037,1060,1066,1069,1082,1089,1096,1097,1117,1119,1122,1124,1130,1135,1138,1143,1147,1158,
                1166,1169,1181,1182,1186,1198,1210,1219,1228,1244,1268,1285,1292,1302,1305,1318,1340,1347,1363,1374,1379,1383,1393,1419,1424,1431,144,1447,1462,1476,1480,1494,1495,1499,1501,1504,1516,1566,1569,1580,1590,1591,1593,1603,1608,1611,1620,1623,1641,1645,1647,1655,
                1662,1669,1670,1676,1682,1683,1687,1689,1699,1702,1711,1717,1719,1726,1742,1752,1756,1761,1766,1773,1778,1784,1787,1789,1793,1798,1799,1812,1813,1823,1824,1840,1848,1849,1860,1871,1880,1896,1906,1910,1916,1928,1929,1930,1934,1936,1938,1941,1944,1957,1959,1972,1976,1980,
                1981,1982,1984,2006,2017,2034,2035,2045,2070,2083,2084,2093,2109,2113,2119,2119,2125,2127,2129,2130,2144,2153, 2157,2171,2172,2179,2189,2202,2209,2212,2218,2219,2220,2241,2243,2251,2260,2261,2276,2284,2293,2304,2309,2316,2317,2332,2348,2353,2376,2391,2409,2422,2446,2447,2453,2459,2460,2462,2465,
                2466,2476,2480,2512,2524,2526,2530,2531,2535,2552,2555,2560,2578,2585,2602,2606,2632,2655,2657,2658,2672,2698,2704,2712,2714,2741,2756,2760,2765,2770,2771,2780,2790,2806,2812,2814,2837,2844,2849,2852,2859,2866,2867,2878,2879,2915,2918,2922,2925,2926,2933,2938,2943,2950,2955,2965,2968,2972,
                2974,2986,2994,2998,3007,3023,3029,3030,3036,3048,3051,3067,3082,3088,3091,3105,3108,3109,3111,3112,3119,3141,3152,3159,3162,3175,3185,3193,3195,3203,3204,3215,3230,3246,3248,3255,3256,3261,3272,3290,3292,3310,3316,3318,3328,3329,3332,
                3337,3339,3340,3349,3364,3374,3377,3378,3394,3399,3400,3427,3434,3435,3440,3449,3485,3499,3514,3521,3523,3525,3544,3559,3561,3577,3592,3595,3606,3619,3633,3638,3642,3644,3647,3657,3659,3667,3683,3687,3691,3694,3696,3714,3738,3739,3741,3742,
                3749,3750,3753,3768,3774,3776,3779,3797,3834,3853,3859,3870,3873,3885,3905,3919,3933,3946,3952,3987,3988,3992,3998,4011,4021,4028,4034,4036,4048,4061,4073,4079,4083,4093,4094,4122,4139,4146,4148,4154,4159,4164,4169,4172,4176,4186,4186,4198,4219,
                4223,4226,4245,4251,4252,4260,4295,4304,4305,4307,4309,4314,4333,4342,4348,4354,4372,4374,4383,4385,4387,4396,4401,4404,4442,4448,4455,4462,4464,4469,4478,4480,4499,4501,4509,4510,4512,4513,4527,4540,4546,4556,4556,4558,4560,4566,4581,4584,4589,
                4595,4598,4615,4641,4653,4660,4663,4665,4675,4680,4689,4697,4705,4706,4707,4716,4718,4721,4726,4748,4752,4772,4783,4784,4809,4814,4820,4827,4829,4833,4844,4856,4874,4893,4898,4907,4924,4929,4933,4938,4941,4948,4951,4953,4962,4965,4974,4993,4994];
    
    var valor = 1;
    var My_radios = document.querySelectorAll('input[type="radio"][name="numCajas"]');
    var randomIndex;
    // Añadir un evento de cambio a cada radio
    My_radios.forEach(function(radio) {
      radio.addEventListener('change', function() {
        // Verificar si el radio está marcado
        if (this.checked) {
           valor = this.value;
           updateNumbers();
        }
      });
    });
    

    function updateNumbers() {

        var iframes = document.querySelectorAll('iframe');
        var overlays = document.querySelectorAll('.boxInfo');
        
        var indices = [];
        var i = 0;
        while (indices.length < iframes.length) {

            if (valor == 1){
                console.log('arboles: ' + valor);
                var randomIndex = Math.floor(Math.random() * allowedNumbers.length);
                console.log('arboles: ' + valor + randomIndex);

                if (!indices.includes(randomIndex)) {
                    indices.push(randomIndex);
                    var randomNumber = allowedNumbers[randomIndex];
                    iframes[i].src = "https://play.pixels.xyz/pixels/share/" + randomNumber;
                    overlays[i].textContent = randomNumber;
                    i++;
                }
                
            }
            if (valor == 2){
                console.log('Molinos: ' + valor);
                var randomIndex = Math.floor(Math.random() * allowedNumbers.length);

                if (!indices.includes(randomIndex)) {
                    indices.push(randomIndex);
                    var randomNumber = allowedNumbers[randomIndex];
                    iframes[i].src = "https://play.pixels.xyz/pixels/share/" + randomNumber;
                    overlays[i].textContent = randomNumber;
                    i++;
                }
                
            }
            if (valor == 3){
                console.log('Gallinero: ' + valor);
                var randomIndex = Math.floor(Math.random() * allowedNumbers.length);

                if (!indices.includes(randomIndex)) {
                    indices.push(randomIndex);
                    var randomNumber = allowedNumbers[randomIndex];
                    iframes[i].src = "https://play.pixels.xyz/pixels/share/" + randomNumber;
                    overlays[i].textContent = randomNumber;
                    i++;
                }
                
            }
            if (valor == 4){
                console.log('Colmenas: ' + valor);
                var randomIndex = Math.floor(Math.random() * numColmenas.length);

                if (!indices.includes(randomIndex)) {
                    indices.push(randomIndex);
                    var randomNumber = numColmenas[randomIndex];
                    iframes[i].src = "https://play.pixels.xyz/pixels/share/" + randomNumber;
                    overlays[i].textContent = randomNumber;
                    i++;
                }
                
            }
            if (valor == 5){
                console.log('hornos: ' + valor);
                var randomIndex = Math.floor(Math.random() * numHornos.length);

                if (!indices.includes(randomIndex)) {
                    indices.push(randomIndex);
                    var randomNumber = numHornos[randomIndex];
                    iframes[i].src = "https://play.pixels.xyz/pixels/share/" + randomNumber;
                    overlays[i].textContent = randomNumber;
                    i++;
                }
                
                
            }
            if (valor == 6){
                console.log('Carpenteria: ' + valor);
                var randomIndex = Math.floor(Math.random() * numCarpenter.length);

                if (!indices.includes(randomIndex)) {
                    indices.push(randomIndex);
                    var randomNumber = numCarpenter[randomIndex];
                    iframes[i].src = "https://play.pixels.xyz/pixels/share/" + randomNumber;
                    overlays[i].textContent = randomNumber;
                    i++;
                }
                
            }
            if (valor == 7){
                console.log('Minas: ' + valor);
                var randomIndex = Math.floor(Math.random() * numMinas.length);

                if (!indices.includes(randomIndex)) {
                    indices.push(randomIndex);
                    var randomNumber = numMinas[randomIndex];
                    iframes[i].src = "https://play.pixels.xyz/pixels/share/" + randomNumber;
                    overlays[i].textContent = randomNumber;
                    i++;
                }
               
            }
            if (valor == 8){
                console.log('Textil: ' + valor);
                var randomIndex = Math.floor(Math.random() * numTextil.length);

                if (!indices.includes(randomIndex)) {
                    indices.push(randomIndex);
                    var randomNumber = numTextil[randomIndex];
                    iframes[i].src = "https://play.pixels.xyz/pixels/share/" + randomNumber;
                    overlays[i].textContent = randomNumber;
                    i++;
                }
                 
            }

        }
    };
    
    function copiarContenido(boxInfo) {
    var texto = boxInfo.innerText;
        navigator.clipboard.writeText(texto)
    }   
    document.getElementById('donacion').addEventListener('click', function() {
        var contenido = this.textContent;
        navigator.clipboard.writeText(contenido)
        
        });
    
    createBoxes(1);

    ocultarContenidoBtn.addEventListener('click', function() {
        if (contenedorOpciones.style.display === 'none') { 
            contenedorOpciones.style.display = 'flex'; 
            radios.style.marginTop = '30px'; 
            options.style.display = 'none';
            icono.style.transform = 'rotate(0deg)';
            
        } else {
            contenedorOpciones.style.display = 'none';  
        }
    });
