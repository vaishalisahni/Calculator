const textArea=document.getElementById("text-area");
let s="";
let shouldClearScreen=false;

window.addEventListener("keydown",handlekeyboardinput);
const buttons=document.querySelectorAll(".btn");
buttons.forEach((btn)=>{
    
    
    // let x=0;
    btn.addEventListener('click',()=>{
        let val=btn.innerHTML;
        // console.log(val);
        if(val==="=")
        {
            try{
                s =eval(s).toString();
                textArea.innerHTML=s;
                shouldClearScreen=true;
            }
            catch(eror)
            {
                textArea.innerHTML = "Error"; 
                s = "";
            }
        }
        else if(val==="AC")
        {
            textArea.innerHTML="0";
            s="";
        }
        else if(val==="←")
        {
            s=s.slice(0,s.length-1);
            textArea.innerHTML=s;
        }
        else{
            if(shouldClearScreen){
                s="";
                shouldClearScreen=false;
            }
            s+=val;
            textArea.innerHTML=s;
        }
    })
})
function handlekeyboardinput(e){
    if((e.key>=0 && e.key<=9)|| e.key==='.' || e.key=== '+' || e.key === '-' || e.key === '*' || e.key === '/' ) {
        if(shouldClearScreen)
        {
            s="";
            shouldClearScreen=false;
        }
        s+=e.key;
        textArea.innerHTML=s;
    }
    else if(e.key ==="Enter" || e.key==="=")
    {
        
            try{
                s =eval(s).toString();
                textArea.innerHTML=s;
                shouldClearScreen=true;
            }
            catch(eror)
            {
                textArea.innerHTML = "Error"; 
                s = "";
            }
        
         
    }
    else if(e.key==="Backspace"){
    {
        s=s.slice(0,s.length-1);
        textArea.innerHTML=s;
    }
    }
    else if(e.key==="Escape")
    {
        textArea.innerHTML="0";
        s="";
    }
}