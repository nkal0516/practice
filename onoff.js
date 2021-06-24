function onOffSwitch(p) {
    var x = document.getElementById("myDIV")
 var list =[`동해물과 백두산이 마르고 닳도록<br>
            하느님이 보우하사 우리나라만세<br>`,
            `남산위에 저 소나무 철갑을 두른듯<br>
             바람서리 불변함은 우리 기상일세<br>`,
            `가을하늘 공활한데 높고 구름없이<br>
            밝은달은 우리가슴 일편단심일세<br>`,
            `이 기상과 이맘으로 충성을 다하여<br>
             괴로우나 즐거우나 나라 사랑하세<br>`,
             `<br>무궁화 삼천리 화려강산
            <br>대한사람 대한으로 길이 보전하세`];
    if (x.innerHTML === "") {
      x.innerHTML = list[p] + list[4];
    } else if(0<x.innerHTML.length){
        x.innerHTML  = list[p] + list[4];
    }  
    };

  function off(){
    var x = document.getElementById("myDIV")
    x.innerHTML = "";
  };