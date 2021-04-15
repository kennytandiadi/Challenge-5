
function pilihanComp(){
    const comp = Math.random();
    
    if (comp<0.34)return 'gunting'; 
    if(comp>=0.34&&comp<0.67)return 'batu';
    return'kertas';
}

function getHasil(comp,player){

    if(player==comp)return'info_seri';
    if (player=='batu') return (comp=='kertas') ? 'info_kalah' : 'info_menang';
    if (player=='kertas') return (comp=='batu') ? 'info_menang' : 'info_kalah';
    if (player=='gunting') return (comp=='kertas') ? 'info_menang' : 'info_kalah';
    
}

function logHasil (info){
    if(info=='info_menang') return console.log('PLAYER 1 WIN');
    if(info=='info_kalah') return console.log('COMP WIN');
    return console.log('DRAW');
}

function choosenComputer(pilihanComp){
    if(pilihanComp=='gunting') return 'cogunting';
    if(pilihanComp=='batu') return 'cobatu';
    return 'cokertas';
}

function pilihanPlayer(pilihanPlayer){
    if(pilihanPlayer=='plbatu') return 'batu';
    if(pilihanPlayer=='plgunting') return 'gunting'
    return 'kertas';
}

const pilihan = document.querySelectorAll('.player img');
pilihan.forEach(function(pil){
    pil.addEventListener('click',function(){
        
        console.log(pil);
        pil.classList.add('choosen');
        const pComp = pilihanComp();
        console.log('Pilihan komputer ='+pComp);

        const choComp =choosenComputer(pComp);
        console.log(choComp);

        const tandaComp = document.getElementById(choComp);
        tandaComp.classList.add('choosen');


        const pPlayer = pilihanPlayer(this.id);
        console.log('pilihan player ='+pPlayer);

        const hasil=getHasil(pComp,pPlayer);
        console.log(hasil);

        const tampilanHasil=document.getElementById(hasil);
        tampilanHasil.classList.remove('info_bef');
        tampilanHasil.classList.add('info_aft');

        logHasil(hasil);

        const vs = document.getElementById('versus');
        versus.classList.add('vs_aft');
        versus.classList.remove('vs_bef');

    });
});

const reset = document.getElementById('reset');
reset.addEventListener('click',function(){
    const resetPlayer = document.querySelectorAll('.choosen');
    [].forEach.call(resetPlayer, function(el) {
        el.classList.remove("choosen");
      });

    const resetComp = document.querySelector('.info_aft');
    resetComp.classList.remove('info_aft');
    resetComp.classList.add('info_bef');

    const vs = document.getElementById('versus');
    versus.classList.remove('vs_aft');
    versus.classList.add('vs_bef');

    console.clear();
})

/*
const pBatu = document.getElementById('plbatu');
pBatu.addEventListener('click',function(){
    pBatu.classList.add('choosen');
    const pComputer = pilihanComputer();
    const pPlayer = choosenPlayer('plbatu');
    const hasil = getHasil(pComputer,pPlayer);

    console.log('Player = ' + pPlayer);
    console.log('Computer = ' + pComputer);
    
    console.log(hasil);


})*/
