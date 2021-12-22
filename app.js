var btnOpen = document.querySelector('.open-modal-btn')
var modal = document.querySelector('.modal')
var iconClose = document.querySelector('.modal__header i')
var btnClose = document.querySelector('.modal__footer button')

function toggleModal(e){
	console.log(e.target);
	modal.classList.toggle('hide')
}

btnOpen.addEventListener('click', toggleModal)
btnClose.addEventListener('click', toggleModal)
iconClose.addEventListener('click', toggleModal)
modal.addEventListener('click', function(e){
	if(e.target == e.curentTarget){
		toggleModal()
	}
})


var ntdOpen = document.querySelector('.open-format-ntd')
var format = document.querySelector('.format')
var iconClose = document.querySelector('.format__header i')
var ntdClose = document.querySelector('.format__footer button')

function toggleFormat(e){
	console.log(e.target);
	format.classList.toggle('hide')
}

ntdOpen.addEventListener('click', toggleFormat)
ntdClose.addEventListener('click', toggleFormat)
iconClose.addEventListener('click', toggleFormat)
format.addEventListener('click', function(e){
	if(e.target == e.curentTarget){
		toggleFormat()
	}
})

var vtvOpen = document.querySelector('.open-method-vtv')
var method = document.querySelector('.method')
var iconClose = document.querySelector('.method__header i')
var vtvClose = document.querySelector('.method__footer button')

function toggleMethod(e){
	console.log(e.target);
	method.classList.toggle('hide')
}

vtvOpen.addEventListener('click', toggleMethod)
vtvClose.addEventListener('click', toggleMethod)
iconClose.addEventListener('click', toggleMethod)
method.addEventListener('click', function(e){
	if(e.target == e.curentTarget){
		toggleMethod()
	}
})


var youOpen = document.querySelector('.open-stick-you')
var stick = document.querySelector('.stick')
var iconClose = document.querySelector('.stick__header i')
var youClose = document.querySelector('.stick__footer button')

function toggleStick(e){
	console.log(e.target);
	stick.classList.toggle('hide')
}

youOpen.addEventListener('click', toggleStick)
youClose.addEventListener('click', toggleStick)
iconClose.addEventListener('click', toggleStick)
stick.addEventListener('click', function(e){
	if(e.target == e.curentTarget){
		toggleStick()
	}
})

var taqOpen = document.querySelector('.open-memory-taq')
var memory = document.querySelector('.memory')
var iconClose = document.querySelector('.memory__header i')
var taqClose = document.querySelector('.memory__footer button')

function toggleMemory(e){
        console.log(e.target);
        memory.classList.toggle('hide')
}

taqOpen.addEventListener('click', toggleMemory)
taqClose.addEventListener('click', toggleMemory)
iconClose.addEventListener('click', toggleMemory)
memory.addEventListener('click', function(e){
        if(e.target == e.curentTarget){
                toggleMemory()
        }
})

var tdtOpen = document.querySelector('.open-mentos-tdt')
var mentos = document.querySelector('.mentos')
var iconClose = document.querySelector('.mentos__header i')
var tdtClose = document.querySelector('.mentos__footer button')

function toggleMentos(e){
        console.log(e.target);
        mentos.classList.toggle('hide')
}

tdtOpen.addEventListener('click', toggleMentos)
tdtClose.addEventListener('click', toggleMentos)
iconClose.addEventListener('click', toggleMentos)
mentos.addEventListener('click', function(e){
        if(e.target == e.curentTarget){
                toggleMentos()
        }
})



/*
Snow Fall 1 - no images - Java Script
Visit http://rainbow.arch.scriptmania.com/scripts/
  for this script and many more
*/

// Set the number of snowflakes (more than 30 - 40 not recommended)
var snowmax=40

// Set the colors for the snow. Add as many colors as you like
var snowcolor=new Array("#aaaacc","#ddddff","#ccccdd","#f3f3f3","#f0ffff")

// Set the fonts, that create the snowflakes. Add as many fonts as you like
var snowtype=new Array("Times","Arial","Times","Verdana")

// Set the letter that creates your snowflake (recommended: * )
var snowletter="*"

// Set the speed of sinking (recommended values range from 0.3 to 2)
var sinkspeed=0.6

// Set the maximum-size of your snowflakes
var snowmaxsize=40

// Set the minimal-size of your snowflakes
var snowminsize=10

// Set the snowing-zone
// Set 1 for all-over-snowing, set 2 for left-side-snowing
// Set 3 for center-snowing, set 4 for right-side-snowing
var snowingzone=1

///////////////////////////////////////////////////////////////////////////
// CONFIGURATION ENDS HERE
///////////////////////////////////////////////////////////////////////////


// Do not edit below this line
var snow=new Array()
var marginbottom
var marginright
var timer
var i_snow=0
var x_mv=new Array();
var crds=new Array();
var lftrght=new Array();
var browserinfos=navigator.userAgent
var ie5=document.all&&document.getElementById&&!browserinfos.match(/Opera/)
var ns6=document.getElementById&&!document.all
var opera=browserinfos.match(/Opera/)
var browserok=ie5||ns6||opera

function randommaker(range) {
        rand=Math.floor(range*Math.random())
    return rand
}

function initsnow() {
        if (ie5 || opera) {
                marginbottom = document.body.scrollHeight
                marginright = document.body.clientWidth-15
        }
        else if (ns6) {
                marginbottom = document.body.scrollHeight
                marginright = window.innerWidth-15
        }
        var snowsizerange=snowmaxsize-snowminsize
        for (i=0;i<=snowmax;i++) {
                crds[i] = 0;
            lftrght[i] = Math.random()*15;
            x_mv[i] = 0.03 + Math.random()/10;
                snow[i]=document.getElementById("s"+i)
                snow[i].style.fontFamily=snowtype[randommaker(snowtype.length)]
                snow[i].size=randommaker(snowsizerange)+snowminsize
                snow[i].style.fontSize=snow[i].size+'px';
                snow[i].style.color=snowcolor[randommaker(snowcolor.length)]
                snow[i].style.zIndex=1000
                snow[i].sink=sinkspeed*snow[i].size/5
                if (snowingzone==1) {snow[i].posx=randommaker(marginright-snow[i].size)}
                if (snowingzone==2) {snow[i].posx=randommaker(marginright/2-snow[i].size)}
                if (snowingzone==3) {snow[i].posx=randommaker(marginright/2-snow[i].size)+marginright/4}
                if (snowingzone==4) {snow[i].posx=randommaker(marginright/2-snow[i].size)+marginright/2}
                snow[i].posy=randommaker(2*marginbottom-marginbottom-2*snow[i].size)
                snow[i].style.left=snow[i].posx+'px';
                snow[i].style.top=snow[i].posy+'px';
        }
        movesnow()
}

function movesnow() {
        for (i=0;i<=snowmax;i++) {
                crds[i] += x_mv[i];
                snow[i].posy+=snow[i].sink
                snow[i].style.left=snow[i].posx+lftrght[i]*Math.sin(crds[i])+'px';
                snow[i].style.top=snow[i].posy+'px';

                if (snow[i].posy>=marginbottom-2*snow[i].size || parseInt(snow[i].style.left)>(marginright-3*lftrght[i])){
                        if (snowingzone==1) {snow[i].posx=randommaker(marginright-snow[i].size)}
                        if (snowingzone==2) {snow[i].posx=randommaker(marginright/2-snow[i].size)}
                        if (snowingzone==3) {snow[i].posx=randommaker(marginright/2-snow[i].size)+marginright/4}
                        if (snowingzone==4) {snow[i].posx=randommaker(marginright/2-snow[i].size)+marginright/2}
                        snow[i].posy=0
                }
        }
        var timer=setTimeout("movesnow()",50)
}

for (i=0;i<=snowmax;i++) {
        document.write("<span id='s"+i+"' style='position:absolute;top:-"+snowmaxsize+"'>"+snowletter+"</span>")
}
initsnow();