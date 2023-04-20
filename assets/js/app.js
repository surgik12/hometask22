
    function imb (){
        let mass = +inputMass.value;

        let height = +inputHeight.value;

        if(height > 3){
            height = height / 100;
        }

        let imb = mass / (height ** 2);

        imb = Math.round(imb * 100) / 100;

        resultPlace.innerHTML = imb;

        if(imb < 18.5){
            infoWeight.innerHTML = `Недостатня маса`;
        } else if(imb < 25){
            infoWeight.innerHTML = `Норма`;
        } else if(imb < 30){
            infoWeight.innerHTML = `Передожиріння (гладкість)`;
        } else if(imb < 35){
            infoWeight.innerHTML = `Ожиріння I ступеня`;
        } else if(imb < 40){
            infoWeight.innerHTML = `Ожиріння II ступеня`;
        } else if(imb > 40){
            infoWeight.innerHTML = `Ожиріння III ступеня`;
        }
    }