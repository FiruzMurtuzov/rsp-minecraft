// !FISRT PAGE
let used;
let pageIndex;
const name = document.getElementById('input')
const menu  = document.getElementById('rules_menu')
const firstpage = document.getElementById('firstTwoPage')
const secondpage = document.getElementById('secondTwoPage')
const nextBtn = document.getElementById('next')
const backBtn = document.getElementById('back')
const form = document.getElementById('form')
const exit = document.getElementById('exit')

const gameScreen = document.getElementById('game_screen')
const logo = document.getElementById('header')
const LeftKillsToNextLevel = document.getElementById('LeftKillsToNextLevel')
const loosScreen = document.getElementById('loosing')
const  imagesteve = document.getElementById('imagesteve');
const notify = document.getElementById('notificationContex')
const levelUpBox = document.getElementById('levelUp')
const newAttack = document.getElementById('newAttack')
const new_Health=document.getElementById('newHealth')
const endscreen = document.getElementById('endingScreen')
const firstuser = document.getElementById('userNameEnd')
const seconduser = document.getElementById('userNameEnding2')
const thirduser = document.getElementById('usernameEnd3')
var themeMusic = new Audio("./sounds/Minecraft Soundtrack - Calm 3.mp3");
themeMusic.loop=true;


themeMusic.oncanplaythrough = function(){
themeMusic.play();
}
var notification = new Audio("./sounds/Minecraft Notification Sound.mp3");

notification.oncanplaythrough = function(){
notification.play();
}
var levelup = new Audio("./sounds/minecraft_levelup.mp3");

levelup.oncanplaythrough = function(){
levelup.play();
}
var thisend = new Audio("./sounds/minecraft_advncmnt.mp3");

thisend.oncanplaythrough = function(){
thisend.play();
}
var endmusic = new Audio("./sounds/Minecraft Ending Poem & Credits (FULL).mp3");

endmusic.oncanplaythrough = function(){
endmusic.play();
}


var click = new Audio("./sounds/button.mp3");

click.oncanplaythrough = function(){
click.play();
}
let avarageAttack;
avarageAttack=20;
let allkill;
allkill=0;
let nextkill;
nextkill=1;
let avarage;
avarage=100;
function nextPage(){
    firstpage.style.display="none"
    secondpage.style.display="block"
    secondpage.style.display="flex"
   nextBtn.style.display="none"
   backBtn.style.display="block"
   backBtn.style.zIndex="100"


}
function backPage(){
    firstpage.style.display="block"
    secondpage.style.display="none"
    firstpage.style.display="flex"
   nextBtn.style.display="block"
   backBtn.style.display="none"


}
function open_rules(){
    menu.classList.add("come")
    exit.style.display="block"
    click.play()
}
function close_menu(){
    menu.classList.remove('come')
    exit.style.display="none"
    click.play()
    
}

function startGame(){

    click.play()
    if(input.value.length>1){
        
        startAnimation()
        themeMusic.play()
        startGameMode()

}   else{
        input.style.backgroundColor="red"
        alert('Your name must contain minimum 2 caracter')
}
}

function startAnimation()   {
    form.className="go"
    gameScreen.classList.add("comeScreen")
    logo.style.display="none"

}
//******************************* 
//******************************* 
//******************************* 
//******************************* 
//******************************* 
//******************************* 
//******************************* 

//******************************* 

//******************************* 
//******************************* 

//******************************* 
//******************************* 
//******************************* 

// !GAME SCREEN

   // ? parametres
        
   
        // !Diamond armors
                const diamondHelmet = document.getElementById('diamondHelmet')
                const diamondChestplate = document.getElementById('diamondChestplate')
                const diamondLegging = document.getElementById('diamondLegging')
                const diamondBoots = document.getElementById('diamondBoots')
        
         // !Leather armors
                const leatherHelmet = document.getElementById('leatherHelmet')
                const leatherChestplate = document.getElementById('leatherChestplate')
                const leatherLegging = document.getElementById('leatherLegging')
                const leatherBoots = document.getElementById('leatherBoots')
        
        // TODO SHIELD
        
                const shield = document.getElementById('shield')


            
   



//!Creating Mob Images

function zombie(){
    const zombieImage = document.createElement('img')
    zombieImage.src = './allPictures/mobs/zombie.png'
    document.getElementById('mob_image').appendChild(zombieImage)
    
    
    
   
}
function blaze(){
    const blazeImage = document.createElement('img')
    blazeImage.src = './allPictures/mobs/blazegif.gif' 
    
    document.getElementById('mob_image').appendChild(blazeImage)
 
   
}
function creeper(){
    const creeperImage = document.createElement('img')
    creeperImage.src = './allPictures/mobs/creeper.png' 
    
    document.getElementById('mob_image').appendChild(creeperImage)

   
}
function drowned(){
    const drownedImage = document.createElement('img')
    drownedImage.src = './allPictures/mobs/Drowned.png' 
    
    document.getElementById('mob_image').appendChild(drownedImage)
   
   
    
}
function enderDragon(){
    const dragonImage = document.createElement('img')
    dragonImage.src = './allPictures/mobs/enderdragon.gif' 
    
    document.getElementById('mob_image').appendChild(dragonImage)
   dragonImage.style.width="40vw"
   dragonImage.style.position="absolute"
   dragonImage.style.marginTop="-40%"
   
    
}
function ghast(){
    const ghastImage = document.createElement('img')
    ghastImage.src = './allPictures/mobs/ghast.png' 
    
    document.getElementById('mob_image').appendChild(ghastImage)
   
   
    
}
function hoglin(){
    const hoglinImage = document.createElement('img')
    hoglinImage.src = './allPictures/mobs/hoglin.png' 
    
    document.getElementById('mob_image').appendChild(hoglinImage)
   
   
    
}

function drowned(){
    const drownedImage = document.createElement('img')
    drownedImage.src = './allPictures/mobs/Drowned.png' 
    
    document.getElementById('mob_image').appendChild(drownedImage)
   
   
    
}
function hoglinpiglin(){
    const hoglinpiglinImage = document.createElement('img')
    hoglinpiglinImage.src = './allPictures/mobs/hoglinpiglin.png' 
    
    document.getElementById('mob_image').appendChild(hoglinpiglinImage)
 hoglinpiglinImage.style.position="absolute"
   hoglinpiglinImage.style.width="15vw"
   hoglinpiglinImage.style.marginTop="5vh"
    
}


function husk(){
    const huskImage = document.createElement('img')
    huskImage.src = './allPictures/mobs/husk.png' 
    
    document.getElementById('mob_image').appendChild(huskImage)
   
   
    
}

function magma(){
    const magmaImage = document.createElement('img')
    magmaImage.src = './allPictures/mobs/magmacube.png' 
    
    document.getElementById('mob_image').appendChild(magmaImage)
   
   
    
}
function piglin(){
    const piglinImage = document.createElement('img')
    piglinImage.src = './allPictures/mobs/piglin.png' 
    
    document.getElementById('mob_image').appendChild(piglinImage)
   
   
    
}
function piglinbrute(){
    const piglinBruteImage = document.createElement('img')
    piglinBruteImage.src = './allPictures/mobs/piglinbrute.png' 
    
    document.getElementById('mob_image').appendChild(piglinBruteImage)
   
   
    
}
function pillager(){
    const pillagerImage = document.createElement('img')
    pillagerImage.src = './allPictures/mobs/pillager.png' 
    
    document.getElementById('mob_image').appendChild(pillagerImage)
   
   
    
}
function shulker(){
    const shulkerImage = document.createElement('img')
    shulkerImage.src = './allPictures/mobs/shulker.png' 
    
    document.getElementById('mob_image').appendChild(shulkerImage)
    
    document.getElementById('mob_image').style.marginTop="10vh"

   
    
}

function spider(){
    const spiderImage = document.createElement('img')
    spiderImage.src = './allPictures/mobs/spider.png' 
    
    document.getElementById('mob_image').appendChild(spiderImage)
spiderImage.style.height="24vh"
spiderImage.style.marginTop="8vh"


   
    
}

function stray(){
    const strayImage = document.createElement('img')
    strayImage.src = './allPictures/mobs/stray.png' 
    
    document.getElementById('mob_image').appendChild(strayImage)
   
   
}
function vindicator(){
    const vindicatorImage = document.createElement('img')
    vindicatorImage.src = './allPictures/mobs/vindicator.png' 
    
    document.getElementById('mob_image').appendChild(vindicatorImage)
   vindicatorImage.style.height="38vh"
   vindicatorImage.style.height.marginTop="-23%"
   
    
}
function warden(){
    const wardenImage = document.createElement('img')
    wardenImage.src = './allPictures/mobs/warden.gif' 
    
    document.getElementById('mob_image').appendChild(wardenImage)
   wardenImage.style.height="49vh"
   document.getElementById('hearts').style.marginTop="-23vh"
   
}
function witch(){
    const witchImage = document.createElement('img')
    witchImage.src = './allPictures/mobs/witch.png' 
    
    document.getElementById('mob_image').appendChild(witchImage)
   
   
}
function wither(){
    const witherImage = document.createElement('img')
    witherImage.src = './allPictures/mobs/wither.png' 
    
    document.getElementById('mob_image').appendChild(witherImage)
   witherImage.style.height="40vh"
   
}
function witherskeleton(){
    const witherskeletonImage = document.createElement('img')
    witherskeletonImage.src = './allPictures/mobs/witherskeleton.png' 
    
    document.getElementById('mob_image').appendChild(witherskeletonImage)
   
   
}

function zoglin(){

    const zoglinImage = document.createElement('img')
    zoglinImage.src = './allPictures/mobs/zoglin.png' 
    
    document.getElementById('mob_image').appendChild(zoglinImage)
   
   
}
function skeleton(){
    const skeletonImage = document.createElement('img')
    skeletonImage.src = './allPictures/mobs/skeleton.png' 
    
    document.getElementById('mob_image').appendChild(skeletonImage)
}




let killedBosses;
killedBosses=0;


//!MOBS SPECATIONS
const   blazeSpec = {attack:30,health:100,name:"Blaze"}
const creeperSpec = {attack:100,health:100,name:"Creeper"}
const drownedSpec = {attack:15,health: 100,name:"Drowned"}
const enderDragonaSpec = {attack:50,health:1000,name:"Ender Dragon"}
const ghastSpec = {attack:60,health:100,name:"Ghast"}
const hoglinSpec = {attack:30,health:200,name:"Hoglin"}
const hoglinpiglinSpec = {attack:31,health:170,name:"Hoglin&Piglin"}
const huskSpec = {attack:15,health:100,name:"Husk"}
const magmaCubeSpec = {attack:30,health:80,name:"Magma Cube"}
const piglinSpec = {attack:40,health:80,name:"Piglin"}
const piglinbruteSpec = {attack:65 , health:200,name:"Piglin Brute"}
const pillagerSpec = {attack:20,health:120,name:"Pillager"}
const shulkerSpec = {attack:20,health:150,name:"Shulker"}
const skeletonSpec = {attack:25,health:100,name:"Skeleton"}
const spiderSpec = {attack:10,health:60,name:"Spider"}
const straySpec = {attack:25,health:100,name:"Stray"}
const vincdicatorSpec = {attack:65,health:120,name:"Vindicator"}
const wardenSpec = {attack:155,health:420,name:"Warden"}
const witherSpec = {attack:40,health:1500,name:"Wither"}
const witchSpec = {attack:30,health:110,name:"Witch"}
const witherskeletonSpec = {attack:40,health:100,name:"Wither Ske."}
const zombieSpec = {attack:15,health:100,name:"Zombie"}
const zoglinSpec = {attack:25,health:200,name:"Zoglin"}

//? it is time for some magic

const level = document.getElementById('levelIndex');
let kills;
kills=0;
let levelindex;
levelindex=0;
let armorStatus;
armorStatus=0;
let healthBoostIndex;
let strenghtIndex;
strenghtIndex=3;
healthBoostIndex=5
let resistanceIndex;
resistanceIndex=2;

const health = document.getElementById('healtboostcontainer')
const strenght = document.getElementById('strenghtcontainer')
const resistance = document.getElementById('resistancecontainer')
const strenghtIndexBox = document.getElementById('strenghtIndex')
const resistanceIndexBox = document.getElementById('resistanceIndex')
const healthBOOSTINDEXBOX = document.getElementById('healthBoostIndex')
resistanceIndexBox.innerText=resistanceIndex
const playerHealthbox =document.getElementById('playerHealthIndex')
const mobHealth = document.getElementById('health')
var playerHealthIndexaaaa =100;
function startGameMode(){
    
    
    resistance.style.display="none"
    strenghtIndexBox.innerText=strenghtIndex
    
    healthBOOSTINDEXBOX.innerText = healthBoostIndex
    level.innerText=levelindex
nextMob()

  



}

let playerAttack;
playerAttack = avarageAttack
function nextMob(){
    resistancestatus=1
    if(allkill==6){
        resistance.style.display="block"
        resistance.style.display="flex"
        alert('New item unlocked')
        notification.play()
    }
    
    creeperstatus=0;
    blur.style.display="none"
    rock.style.display="none"
    paper.style.display="none"
    scissors.style.display="none"
    stonebtn.style.backgroundColor="grey"
    paperbtn.style.backgroundColor="grey"
    scissorsbtn.style.backgroundColor="grey"
    stage.style.display="block"
    strenght.style.filter="brightness(1)"
    snippet.style.backgroundColor="black"
    
    used=0
playerAttack = avarageAttack;
    document.getElementById('mob_image').removeChild(document.getElementById('mob_image').firstChild)
    
    level.innerText=levelindex
    let mobIndex;
    if(levelindex==10){
        mobIndex=0
       
       
    }else{ mobIndex = Math.floor(Math.random() * 1000);}
   
    console.log(mobIndex)
    winningScreen.style.display="none"
   
    gameMain()
  if(levelindex==10){
        mobIndex=0
       
       
    }
       
      if(mobIndex==0){
       enderDragon()
       mobHealthindex = enderDragonaSpec.health
       mobHealth.innerHTML= mobHealthindex
       mobAttak = enderDragonaSpec.attack
       mobName=enderDragonaSpec.name
       mobNameInscreen.innerHTML=mobName
       document.getElementById('defeatedby').innerHTML=mobName
        
    }
    if(mobIndex==1){
        wither()
        mobHealthindex = witherSpec.health
        mobHealth.innerHTML= mobHealthindex

        mobAttak = witherSpec.attack
        mobName=witherSpec.name
        mobNameInscreen.innerHTML=mobName
        document.getElementById('defeatedby').innerHTML=mobName

    }if(mobIndex==2){
        warden()
        mobHealthindex = wardenSpec.health
        mobHealth.innerHTML= mobHealthindex
        mobAttak = wardenSpec.attack

        mobName=wardenSpec.name

        mobNameInscreen.innerHTML=mobName
        document.getElementById('defeatedby').innerHTML=mobName
    }if(mobIndex>2 && mobIndex<79){
        zombie()
        mobHealthindex = zombieSpec.health
        mobHealth.innerHTML= mobHealthindex
        mobAttak = zombieSpec.attack
        mobName=zombieSpec.name
        mobNameInscreen.innerHTML=mobName
        document.getElementById('defeatedby').innerHTML=mobName
    }if(mobIndex>78 && mobIndex<153){
        skeleton()
        mobHealthindex = skeletonSpec.health
       
        mobHealth.innerHTML= mobHealthindex
        mobAttak = skeletonSpec.attack
        mobName=skeletonSpec.name
        mobNameInscreen.innerHTML=mobName
        document.getElementById('defeatedby').innerHTML=mobName
    }if(mobIndex>152 && mobIndex<228){
        spider()
        mobHealthindex = spiderSpec.health
        mobHealth.innerHTML= mobHealthindex
        mobAttak = spiderSpec.attack
        mobName=spiderSpec.name
        mobNameInscreen.innerHTML=mobName
        document.getElementById('defeatedby').innerHTML=mobName
    
}if(mobIndex>227 && mobIndex<303){
    drowned()
    mobHealthindex = drownedSpec.health
    mobHealth.innerHTML= mobHealthindex
    mobAttak = drownedSpec.attack
    mobName=drownedSpec.name
    mobNameInscreen.innerHTML=mobName
    document.getElementById('defeatedby').innerHTML=mobName
}if(mobIndex>302 && mobIndex<378){
    stray()
    mobHealthindex = straySpec.health
    mobHealth.innerHTML= mobHealthindex
    mobAttak = straySpec.attack
    mobName=straySpec.name
    mobNameInscreen.innerHTML=mobName
    document.getElementById('defeatedby').innerHTML=mobName
}if(mobIndex>377 && mobIndex<453){
  husk()
    mobHealthindex = huskSpec.health
    mobHealth.innerHTML= mobHealthindex
    mobAttak = huskSpec.attack
    mobName=huskSpec.name
    mobNameInscreen.innerHTML=mobName
    document.getElementById('defeatedby').innerHTML=mobName


}if(mobIndex>452 && mobIndex<503){
    creeper()
    mobHealthindex = creeperSpec.health
    mobHealth.innerHTML= mobHealthindex
    mobAttak = creeperSpec.attack
    mobName=creeperSpec.name
    mobNameInscreen.innerHTML=mobName
    document.getElementById('defeatedby').innerHTML=mobName

}if(mobIndex>502 && mobIndex <553){
    ghast()
    mobHealthindex = ghastSpec.health
    mobHealth.innerHTML= mobHealthindex
    mobAttak = ghastSpec.attack
    mobName=ghastSpec.name
    mobNameInscreen.innerHTML=mobName
    document.getElementById('defeatedby').innerHTML=mobName

}if(mobIndex>552 && mobIndex<603){
    hoglin()
    mobHealthindex = hoglinSpec.health
    mobHealth.innerHTML= mobHealthindex
    mobAttak = hoglinSpec.attack
    mobName=hoglinSpec.name
    mobNameInscreen.innerHTML=mobName
    document.getElementById('defeatedby').innerHTML=mobName

}if(mobIndex>602 && mobIndex<653){
    zoglin()
    mobHealthindex = zoglinSpec.health
    mobHealth.innerHTML= mobHealthindex
    mobAttak = zoglinSpec.attack
    mobName=zoglinSpec.name
    mobNameInscreen.innerHTML=mobName
    document.getElementById('defeatedby').innerHTML=mobName

}if(mobIndex>652 && mobIndex <662){
hoglinpiglin()
mobHealthindex = hoglinpiglinSpec.health
mobHealth.innerText= mobHealthindex
mobAttak = hoglinpiglinSpec.attack
mobName=hoglinpiglinSpec.name
mobNameInscreen.innerHTML=mobName
document.getElementById('defeatedby').innerHTML=mobName

}if(mobIndex>661 && mobIndex<697){
    piglin()
    mobHealthindex = piglinSpec.health
mobHealth.innerText= mobHealthindex
mobAttak = piglinSpec.attack
mobName=piglinSpec.name
mobNameInscreen.innerHTML=mobName
document.getElementById('defeatedby').innerHTML=mobName



}if(mobIndex>696 && mobIndex<732){
    piglinbrute()
    mobHealthindex = piglinbruteSpec.health
    mobHealth.innerHTML= mobHealthindex
    mobAttak = piglinbruteSpec.attack
    mobName=piglinbruteSpec.name
    mobNameInscreen.innerHTML=mobName
    document.getElementById('defeatedby').innerHTML=mobName


}if(mobIndex>731 && mobIndex<767){
    shulker()
    mobHealthindex = shulkerSpec.health
    mobHealth.innerHTML= mobHealthindex
    mobAttak = shulkerSpec.attack
    mobName=shulkerSpec.name
    mobNameInscreen.innerHTML=mobName
    document.getElementById('defeatedby').innerHTML=mobName


}if(mobIndex>766 && mobIndex<802){
    pillager()
    mobHealthindex = pillagerSpec.health
    mobHealth.innerHTML= mobHealthindex
    mobAttak = pillagerSpec.attack
    mobName=pillagerSpec.name
    mobNameInscreen.innerHTML=mobName
    document.getElementById('defeatedby').innerHTML=mobName


}if(mobIndex>801 && mobIndex<837){
    vindicator()
    mobHealthindex = vincdicatorSpec.health
    mobHealth.innerHTML= mobHealthindex
    mobAttak = vindicatorSpec.attack
    mobName=vindicatorSpec.name
    mobNameInscreen.innerHTML=mobName
    document.getElementById('defeatedby').innerHTML=mobName


}if(mobIndex>836 && mobIndex<872){
    magma()
    mobHealthindex = magmaCubeSpec.health
    mobHealth.innerHTML= mobHealthindex
    mobAttak = magmaCubeSpec.attack
    mobName=magmaCubeSpec.name

    mobNameInscreen.innerHTML=mobName
    document.getElementById('defeatedby').innerHTML=mobName


}if(mobIndex>871 && mobIndex<900){
    witherskeleton()
    mobHealthindex = witherskeletonSpec.health
    mobHealth.innerHTML= mobHealthindex
    mobAttak = witherskeletonSpec.attack
    mobName=witherskeletonSpec.name
    mobNameInscreen.innerHTML=mobName
    document.getElementById('defeatedby').innerHTML=mobName


}if(mobIndex>899&& mobIndex<930){
    witch()
    mobHealthindex = witchSpec.health
    mobHealth.innerHTML= mobHealthindex
    mobAttak = witchSpec.attack
    mobName=witchSpec.name
    mobNameInscreen.innerHTML=mobName
    document.getElementById('defeatedby').innerHTML=mobName


}if(mobIndex>929 && mobIndex<1001){
    blaze()
    mobHealthindex = blazeSpec.health
    mobHealth.innerHTML= mobHealthindex
    mobAttak = blazeSpec.attack
    mobName=blazeSpec.name
    mobNameInscreen.innerHTML=mobName
    document.getElementById('defeatedby').innerHTML=mobName


}

if(mobName=='Ender Dragon'){
    notification.play()
    alert('Is it End???')
} 
}
let playerSelected;
function gameMain(){
 
}





const winningScreen = document.getElementById('winningEachMob')
const blur = document.getElementById('blurEffect')

const homeScreen = document.getElementById('homeScreen')
const nextMobButton = document.getElementById('nextMobButton')
const saveButtonn = document.getElementById('save')
homeScreen.style.display="none"
blur.style.display="none"
winningScreen.style.display="none"


const snippet = document.getElementById('snippet')
//rock
//
//
const rock = document.createElement('img')
rock.src="./allPictures/pictures/Stone.png"
rock.style.width="5vw"
rock.style.position="absolute"
//paper
//
//
const paper = document.createElement('img')
paper.src="./allPictures/pictures/paper.png"
paper.style.width="6vw"
paper.style.position="absolute"
//scissors
//
//
const scissors = document.createElement('img')
scissors.src="./allPictures/pictures/scissors.png"
scissors.style.width="6vw"
scissors.style.position="absolute"

const stage = document.getElementById('stage')
const mobNameInscreen = document.getElementById('mobName')
//!Buttons
const stonebtn = document.getElementById('stoneButton')
const paperbtn = document.getElementById('paperButton')
const scissorsbtn = document.getElementById('scissorsButton')
let creeperstatus;
creeperstatus=0;
function stoneSelected(){

    const SelectVariants = ["rock","paper","scissors"]
    const mobRandomSelect =Math.floor(Math.random() * 3)
    const mobSelect = SelectVariants[mobRandomSelect]
   
    playerSelected = SelectVariants[0]
    if(mobSelect==SelectVariants[0]){
    
        snippet.appendChild(rock)
        paper.style.display="none"
        scissors.style.display="none"
        rock.style.display="block"
        stage.style.display="none"
       
        snippet.style.backgroundColor="yellow"
        stonebtn.style.backgroundColor="yellow"
        scissorsbtn.style.backgroundColor="rgb(168, 168, 168)"
        paperbtn.style.backgroundColor="rgb(168, 168, 168)"
       

    }if(mobSelect==SelectVariants[1]){
       
        snippet.appendChild(paper)
        rock.style.display="none"
        scissors.style.display="none"
        paper.style.display="block"
       playerHealthIndexaaaa=playerHealthIndexaaaa-((mobAttak-(armorStatus*1.5))*resistancestatus)
     playerHealthbox.innerHTML=playerHealthIndexaaaa
     stage.style.display="none"
     stonebtn.style.backgroundColor="red"
    snippet.style.backgroundColor="lightgreen"
    
        scissorsbtn.style.backgroundColor="rgb(168, 168, 168)"
        paperbtn.style.backgroundColor="rgb(168, 168, 168)"
       

       
    }if(mobSelect==SelectVariants[2]){
        snippet.appendChild(scissors)
        stage.style.display="none"
        paper.style.display="none"
        rock.style.display="none"
        scissors.style.display="block"
        mobHealthindex = mobHealthindex-playerAttack
        mobHealth.innerHTML= mobHealthindex
        stonebtn.style.backgroundColor="lightgreen"
        snippet.style.backgroundColor="red"
        
        scissorsbtn.style.backgroundColor="rgb(168, 168, 168)"
        paperbtn.style.backgroundColor="rgb(168, 168, 168)"
    }  

    if(playerHealthIndexaaaa<1){
        loosScreen.style.display="block"
        blur.style.display="block"
        
    }if(mobHealthindex<1){
        if(mobName=="Ender Dragon" || mobName=="Wither" || mobName=="Warden"){
            killedBosses++
        }
        if(mobName=="Ender Dragon"){
            thisend.play()
            endmusic.play()
            themeMusic.pause()

            endscreen.style.display="block"
            document.getElementById('rules_button').style.display="none"
            document.getElementById('skip').style.display="block"

            firstuser.innerText=name.value+"?"
            seconduser.innerText=name.value+" player of games"
            thirduser.innerText=name.value="...."
        }
        winningScreen.style.display="block"
       
        kills++
        LeftKillsToNextLevel.innerHTML=(nextkill-kills)+" kills left to next Level"
        blur.style.display="block"
        allkill++
        if(nextkill-kills==0){
            nextkill=nextkill+1
            levelup.play()
            levelUpBox.style.display="block"
            blur.style.display="block"
            const healthplus = Math.floor(Math.random() *10) + 1;
            const attackplus = Math.floor(Math.random() * 10) + 1;
            avarage=avarage+healthplus
            avarageAttack=avarageAttack+attackplus
            new_Health.innerText="+ "+healthplus+" Max Health"
            newAttack.innerText="+ "+attackplus+" Attack"
         
            kills=0
            levelindex++
            level.innerHTML=levelindex
            strenghtIndex++
            strenghtIndexBox.innerHTML=strenghtIndex
            healthBoostIndex++
            healthBOOSTINDEXBOX.innerHTML=healthBoostIndex
            resistanceIndex++
            resistanceIndexBox.innerText=resistanceIndex
    
        }
        if(allkill==1){
            armorStatus++
        }if(allkill==2){
            armorStatus++
        }if(allkill==3){
            armorStatus++
        }if(allkill==4){
            armorStatus++
        }if(allkill==9){
            armorStatus++
        }if(allkill==12){
            armorStatus++
        }if(allkill==15){
            armorStatus++
        }if(allkill==19){
            armorStatus++

        }if(allkill==21){
            armorStatus++
        }
        if(armorStatus==1){
            leatherBoots.style.display="block"
            onlyLeatherBoots()
           
        }if(armorStatus==2){
            leatherLegging.style.display="block"
            onlyLeatherBootsleggging()

        }if(armorStatus==3){
            leatherChestplate.style.display="block"
            onlyLeatherWithoutHelmet()

        }if(armorStatus==4){
            leatherHelmet.style.display="block"
            fullderi()
            
        }if(armorStatus==5){
            leatherBoots.style.display="none"
            diamondBoots.style.display="block"
            onlydiamondBoots()

        }if(armorStatus==6){
            leatherLegging.style.display="none"
            diamondLegging.style.display="block"
            onlydiamondBootsLegging()

        }if(armorStatus==7){
            leatherChestplate.style.display="none"
            diamondChestplate.style.display="block"
            onlydiamondBootsLeggingChestplate()

        }if(armorStatus==8){
            leatherHelmet.style.display="none"
            diamondHelmet.style.display="block"
            onlydiamondfull()

        }if(armorStatus==9){
            shield.style.display="block"
            full()

        }
    }

}


function paperSelected(){
    const SelectVariants = ["rock","paper","scissors"]
    const mobRandomSelect =Math.floor(Math.random() * 3)
    const mobSelect = SelectVariants[mobRandomSelect]
    
    playerSelected = SelectVariants[1]
    if(mobSelect==SelectVariants[0]){
        stage.style.display="none"
        snippet.appendChild(rock)
        paper.style.display="none"
        scissors.style.display="none"
        rock.style.display="block"
        mobHealthindex = mobHealthindex-playerAttack
        mobHealth.innerHTML= mobHealthindex
        paperbtn.style.backgroundColor="lightgreen"
        snippet.style.backgroundColor="red"
      
        scissorsbtn.style.backgroundColor="rgb(168, 168, 168)"
        stonebtn.style.backgroundColor="rgb(168, 168, 168)"
       
    }if(mobSelect==SelectVariants[1]){
        
        stage.style.display="none"
        snippet.appendChild(paper)
        rock.style.display="none"
        scissors.style.display="none"
        paper.style.display="block"
       
        mobHealth.innerHTML= mobHealthindex

        paperbtn.style.backgroundColor="yellow"
        snippet.style.backgroundColor="yellow"
       
        scissorsbtn.style.backgroundColor="rgb(168, 168, 168)"
        stonebtn.style.backgroundColor="rgb(168, 168, 168)"
       
        
    }if(mobSelect==SelectVariants[2]){
    
        
        stage.style.display="none"
        snippet.appendChild(scissors)
        paper.style.display="none"
        rock.style.display="none"
        scissors.style.display="block"
        playerHealthIndexaaaa=playerHealthIndexaaaa-((mobAttak-(armorStatus*1.5))*resistancestatus)
       
        playerHealthbox.innerHTML=playerHealthIndexaaaa
        paperbtn.style.backgroundColor="red"
        snippet.style.backgroundColor="lightgreen"
       
        scissorsbtn.style.backgroundColor="rgb(168, 168, 168)"
        stonebtn.style.backgroundColor="rgb(168, 168, 168)"
      
    }  
    if(playerHealthIndexaaaa<1){
        loosScreen.style.display="block"
        blur.style.display="block"
        
    }
            if(mobHealthindex<1){
                if(mobName=="Ender Dragon" || mobName=="Wither" || mobName=="Warden"){
                    killedBosses++
                }
                if(mobName=="Ender Dragon"){
                    themeMusic.pause()
                    thisend.play()
        
                    endmusic.play()
            

                    endscreen.style.display="block"
                    document.getElementById('rules_button').style.display="none"
                    document.getElementById('skip').style.display="block"
        
                    firstuser.innerText=name.value+"?"
                    seconduser.innerText=name.value+" player of games"
                    thirduser.innerText=name.value="...."
                }
                winningScreen.style.display="block"
                kills++
                LeftKillsToNextLevel.innerHTML=(nextkill-kills)+" kills left to next Level"
                  allkill++
                blur.style.display="block"
                if(nextkill-kills==0){
                    nextkill=nextkill+1
                    levelup.play()
                    levelUpBox.style.display="block"
                    blur.style.display="block"
                    const healthplus = Math.floor(Math.random() * 15) + 1;
                    const attackplus = Math.floor(Math.random() * 10) + 1;
                    avarage=avarage+healthplus
                    avarageAttack=avarageAttack+attackplus
                    new_Health.innerText="+ "+healthplus+" Max Health"
                    newAttack.innerText="+ "+attackplus+" Attack"
                    kills=0
                    levelindex++
                    level.innerHTML=levelindex
                    strenghtIndex++
                    strenghtIndexBox.innerHTML=strenghtIndex
                    healthBoostIndex++
                    resistanceIndex++
                    resistanceIndexBox.innerText=resistanceIndex
                    healthBOOSTINDEXBOX.innerHTML=healthBoostIndex
                
                }
                if(allkill==1){
                    armorStatus++
                }if(allkill==2){
                    armorStatus++
                }if(allkill==3){
                    armorStatus++
                }if(allkill==4){
                    armorStatus++
                }if(allkill==6){
                    armorStatus++
                }if(allkill==8){
                    armorStatus++
                }if(allkill==12){
                    armorStatus++
                }if(allkill==14){
                    armorStatus++

                }if(allkill==15){
                    armorStatus++
                }
                if(armorStatus==1){
                    leatherBoots.style.display="block"
                    onlyLeatherBoots()
                   
                }if(armorStatus==2){
                    leatherLegging.style.display="block"
                    onlyLeatherBootsleggging()

                }if(armorStatus==3){
                    leatherChestplate.style.display="block"
                    onlyLeatherWithoutHelmet()

                }if(armorStatus==4){
                    leatherHelmet.style.display="block"
                    fullderi()
                    
                }if(armorStatus==5){
                    leatherBoots.style.display="none"
                    diamondBoots.style.display="block"
                    onlydiamondBoots()

                }if(armorStatus==6){
                    leatherLegging.style.display="none"
                    diamondLegging.style.display="block"
                    onlydiamondBootsLegging()

                }if(armorStatus==7){
                    leatherChestplate.style.display="none"
                    diamondChestplate.style.display="block"
                    onlydiamondBootsLeggingChestplate()

                }if(armorStatus==8){
                    leatherHelmet.style.display="none"
                    diamondHelmet.style.display="block"
                    onlydiamondfull()

                }if(armorStatus==9){
                    shield.style.display="block"
                    full()

                }
            }
        
}


    function scissorsSelected(){
    const SelectVariants = ["rock","paper","scissors"]
    const mobRandomSelect =Math.floor(Math.random() * 3)
    const mobSelect = SelectVariants[mobRandomSelect]
 
    playerSelected = SelectVariants[2]
     if(mobSelect==SelectVariants[0]){
       
        snippet.appendChild(rock)
        stage.style.display="none"
        playerHealthIndexaaaa=playerHealthIndexaaaa-((mobAttak-(armorStatus*1.5))*resistancestatus)
        paper.style.display="none"
        scissors.style.display="none"
        rock.style.display="block"
        scissorsbtn.style.backgroundColor="red"
        snippet.style.backgroundColor="lightgreen"
       
        stonebtn.style.backgroundColor="rgb(168, 168, 168)"
        paperbtn.style.backgroundColor="rgb(168, 168, 168)"
      
       
      
        playerHealthbox.innerHTML=playerHealthIndexaaaa
    }if(mobSelect==SelectVariants[1]){
        stage.style.display="none"
        snippet.appendChild(paper)
        mobHealthindex = mobHealthindex-playerAttack
        mobHealth.innerHTML= mobHealthindex
        rock.style.display="none"
        scissors.style.display="none"
        paper.style.display="block"
        scissorsbtn.style.backgroundColor="lightgreen"
        snippet.style.backgroundColor="red"
       
        stonebtn.style.backgroundColor="rgb(168, 168, 168)"
        paperbtn.style.backgroundColor="rgb(168, 168, 168)"
      
    }if(mobSelect==SelectVariants[2]){
       
        stage.style.display="none"
        snippet.appendChild(scissors)
       
        mobHealth.innerHTML= mobHealthindex
        paper.style.display="none"
        rock.style.display="none"
        scissors.style.display="block"

        playerHealthbox.innerHTML=playerHealthIndexaaaa
        scissorsbtn.style.backgroundColor="yellow"
        snippet.style.backgroundColor="yellow"
        
        stonebtn.style.backgroundColor="rgb(168, 168, 168)"
        paperbtn.style.backgroundColor="rgb(168, 168, 168)"
    }  
    if(playerHealthIndexaaaa<1){
        loosScreen.style.display="block"
        blur.style.display="block"
        
            }if(mobHealthindex<1){
                if(mobName=="Ender Dragon" || mobName=="Wither" || mobName=="Warden"){
                    killedBosses++
                }
                if(mobName=="Ender Dragon"){
                    themeMusic.pause()
                    thisend.play()
        
                    endmusic.play()
            

                    endscreen.style.display="block"
                    document.getElementById('rules_button').style.display="none"
                    document.getElementById('skip').style.display="block"
        
                    firstuser.innerText=name.value+"?"
                    seconduser.innerText=name.value+" player of games"
                    thirduser.innerText=name.value="...."
                }
                winningScreen.style.display="block"
                kills=kills+1
                LeftKillsToNextLevel.innerText=(nextkill-kills)+" kills left to next Level"
                blur.style.display="block"
                allkill++
                if(nextkill-kills==0){
                    levelUpBox.style.display="block"
                    blur.style.display="block"
                    const healthplus = Math.floor(Math.random() * 16) + 1;
                    const attackplus = Math.floor(Math.random() * 15) + 1;
                    avarage=avarage+healthplus
                    avarageAttack=avarageAttack+attackplus
                    new_Health.innerText="+ "+healthplus+"Max Health"
                    newAttack.innerText="+ "+attackplus+" Attack"
                    nextkill=nextkill+1
                    levelup.play()
                    kills=0
                    levelindex++
                    level.innerHTML=levelindex
                    strenghtIndex++
                    strenghtIndexBox.innerHTML=strenghtIndex
                    healthBoostIndex++
                    healthBOOSTINDEXBOX.innerHTML=healthBoostIndex
                    resistanceIndex++
                    resistanceIndexBox.innerText=resistanceIndex
                    

                }
                if(allkill==1){
                    armorStatus++
                }if(allkill==2){
                    armorStatus++
                }if(allkill==3){
                    armorStatus++
                }if(allkill==4){
                    armorStatus++
                }if(allkill==6){
                    armorStatus++
                }if(allkill==8){
                    armorStatus++
                }if(allkill==12){
                    armorStatus++
                }if(allkill==14){
                    armorStatus++

                }if(allkill==15){
                    armorStatus++
                }
                if(armorStatus==1){
                    leatherBoots.style.display="block"
                    onlyLeatherBoots()
                   
                }if(armorStatus==2){
                    leatherLegging.style.display="block"
                    onlyLeatherBootsleggging()

                }if(armorStatus==3){
                    leatherChestplate.style.display="block"
                    onlyLeatherWithoutHelmet()

                }if(armorStatus==4){
                    leatherHelmet.style.display="block"
                    fullderi()
                    
                }if(armorStatus==5){
                    leatherBoots.style.display="none"
                    diamondBoots.style.display="block"
                    onlydiamondBoots()

                }if(armorStatus==6){
                    leatherLegging.style.display="none"
                    diamondLegging.style.display="block"
                    onlydiamondBootsLegging()

                }if(armorStatus==7){
                    leatherChestplate.style.display="none"
                    diamondChestplate.style.display="block"
                    onlydiamondBootsLeggingChestplate()

                }if(armorStatus==8){
                    leatherHelmet.style.display="none"
                    diamondHelmet.style.display="block"
                    onlydiamondfull()

                }if(armorStatus==9){
                    shield.style.display="block"
                    full()

                }
              
            }
        
   
}




function strenghtfunc(){
    if(strenghtIndex>0 && used==0){
    
    playerAttack=avarageAttack*2.5;
    strenghtIndex=strenghtIndex-1;
    strenghtIndexBox.innerHTML=strenghtIndex
    used=1
    strenght.style.filter="brightness(0.4)"

    }else{
       
    }if(strenghtIndex==0){
        strenght.style.filter="brightness(0.4)"
        notification.play()
        
       alert("You have Used all your items")
    }
}

function healthboostfunc(){
    if(healthBoostIndex>0 && playerHealthIndexaaaa==avarage){
        notification.play()
        alert("Your health is full")
      
        
        
        
    }
     if(healthBoostIndex>0 && playerHealthIndexaaaa!=avarage){
        playerHealthIndexaaaa=avarage
        playerHealthbox.innerHTML=playerHealthIndexaaaa
        healthBoostIndex=  healthBoostIndex-1
        healthBOOSTINDEXBOX.innerHTML=healthBoostIndex
       
       
        
        
    }else{


    }
}
function fullderi(){
imagesteve.removeChild(imagesteve.lastElementChild)
const test1 = document.createElement('IMG')
test1.src="./allPictures/armor/deri set/full deri set.png"
imagesteve.appendChild(test1)
test1.style.height="389px"
test1.style.marginTop="9%"
test1.style.marginLeft="-16%"

}
function onlyLeatherBoots(){
imagesteve.removeChild(imagesteve.firstElementChild)
const test2 = document.createElement('IMG')
test2.src="./allPictures/armor/deri set/deri set ancaq ayaqqabili.png"
imagesteve.appendChild(test2)
test2.style.height="450px"
test2.style.marginTop="-10%"

}
function onlyLeatherBootsleggging(){
    imagesteve.removeChild(imagesteve.firstElementChild)
    const test3 = document.createElement('IMG')
    test3.src="./allPictures/armor/deri set/deri set ayaqqabi salvar.png"
    imagesteve.appendChild(test3)
    test3.style.height="450px"
    test3.style.marginTop="-10%"
    
    }
    function onlyLeatherWithoutHelmet(){
        imagesteve.removeChild(imagesteve.firstElementChild)
        const test4 = document.createElement('IMG')
        test4.src="./allPictures/armor/deri set/deri set basliqsiz.png"
        imagesteve.appendChild(test4)
        test4.style.height="450px"
        test4.style.marginTop="-10%"
        
        }
      function onlydiamondBoots(){
        imagesteve.removeChild(imagesteve.firstElementChild)
        const test5 = document.createElement('IMG')
        test5.src="./allPictures/armor/diamond set/diamond set ancaq ayaqqabi qalxansiz.png"
        imagesteve.appendChild(test5)
        test5.style.height="389px"
        test5.style.marginTop="3%"
        test5.style.marginLeft="-12%"
      }
            
      function onlydiamondBootsLegging(){
        imagesteve.removeChild(imagesteve.firstElementChild)
        const test6 = document.createElement('IMG')
        test6.src="./allPictures/armor/diamond set/diamond set ayaqqabi salvar qalxansiz.png"
        imagesteve.appendChild(test6)
        test6.style.height="470px"
        test6.style.marginTop="-28%"
        
      }
      function onlydiamondBootsLeggingChestplate(){
        imagesteve.removeChild(imagesteve.firstElementChild)
        const test7 = document.createElement('IMG')
        test7.src="./allPictures/armor/diamond set/diamond set basliqsiz qalxansiz.png"
        imagesteve.appendChild(test7)
        test7.style.height="345px"
        test7.style.marginTop="10%"
        test7.style.marginLeft="-4%"
        
      }

      function onlydiamondfull(){
        imagesteve.removeChild(imagesteve.firstElementChild)
        const test8 = document.createElement('IMG')
        test8.src="./allPictures/armor/diamond set/full diamond set qalxansiz.png"
        imagesteve.appendChild(test8)
        test8.style.height="375px"
        test8.style.marginTop="14%"
        test8.style.marginLeft="-4%"
        
      }
      function full(){
        imagesteve.removeChild(imagesteve.firstElementChild)
        const test9 = document.createElement('IMG')
        test9.src="./allPictures/armor/qalxanli set/diamond set basliqsiz amma qalxanli.png"
        imagesteve.appendChild(test9)
        test9.style.height="497px"
        test9.style.marginTop="-12%"
        test9.style.marginLeft="-12%"
        
      }


  
    
   
let resistancestatus;
resistancestatus=1;
      function ok(){
          levelUpBox.style.display="none"
          blur.style.display="none"
      }

      function skipaa(){
          endscreen.style.display="none"
          document.getElementById('rules_button').style.display="block"
          document.getElementById('skip').style.display="none"
          levelindex++
          level.innerHTML=levelindex
          
      }

      function resistancefunc(){
          resistancestatus=0
          resistanceIndex--
          resistanceIndexBox.innerText=resistanceIndex
          if(resistanceIndex==0){
            resistance.style.filter="brightness(0.4)"
            notification.play()
            
           alert("You have Used all your items")
        }
      }