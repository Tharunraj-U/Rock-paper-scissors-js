
          let obj=JSON.parse(localStorage.getItem('obj')) ||{
            Lose:0,
            Tie:0,
            Wins:0
          };
          let autop=false;
          let val;
         
          function autoplay(){
            
          
            if(autop ===false){
            val=setInterval(function(){
              const res2=computermove();
              funobj.outerfunction(res2);
              autop=true;
               
            },1000);
          }else{
              clearInterval(val);
               autop=false;
          }
          }
          function dis(){
          let pobj=document.querySelector('.p');
          pobj.innerHTML=`
          Wins:0, Lose:0,
          Tie:0
          `;
          } 
                
          function computermove() {
            let val2 = Math.random();
            if (val2 <= 1/3) {
              return  'paper';
            } else if (val2 <= 2/3) {
              return  'rock';
            } else {
              return 'scissors';
            }
          }
      
            
        const funobj={ 
          outerfunction:function(res){

      
            const res2=computermove();
          
          let ans;
          if(res == res2){
            ans='--Tie--&#x1F622';
          }
          else if(res=='rock' && res2=='scissors'){
            ans='$$ You won &#128512$$';
          }
          else if(res=='paper' && res2=='rock'){
            ans='$$ You won &#128512$$';
          }
          else if(res=='scissors' && res2=='paper'){
            ans='$$ You won &#128512$$';
          }
          else{
            ans='You lose &#x1F62D '
          }

          if(ans=='--Tie--&#x1F622'){
            obj.Tie++;
          }
          else if(ans=='$$ You won &#128512$$'){
            obj.Wins++;
          }
          else{
            obj.Lose++;
          }
          dis();
          function dis(){
          let pobj=document.querySelector('.p');
          
          pobj.innerHTML=`  <div class="secdiv"><p class="won">${ans} </p>
            <p class="tharun">You <img class="t1" src="img/${res}-emoji.png"> <img class="t1" src="img/${res2}-emoji.png" alt=""> Computer</p>
          </div><br><br>
          Wins${obj.Wins},Losses${obj.Lose},Ties${obj.Tie}`;
          } 
          


          localStorage.setItem('obj',JSON.stringify(obj));
          }
          
        }

        document.querySelector('.emj').addEventListener('click',()=>{
         
          let res1='rock';
          funobj.outerfunction(res1);
        });
        document.querySelector('.emj1').addEventListener('click',()=>{
         
          let res1='paper';
          funobj.outerfunction(res1);
        });
        document.querySelector('.emj2').addEventListener('click',()=>{
          
          let res1='scissors';
          funobj.outerfunction(res1);
        });
        document.body.addEventListener('keydown',(val)=>{
          
          if(val.key == 'r'){
            let res1='rock';
            funobj.outerfunction(res1);
          }
          if(val.key == 'p'){
            let res1='paper';
          funobj.outerfunction(res1);
          }
          if(val.key == 's'){
            let res1='scissors';
            funobj.outerfunction(res1);
          }
        });
                
 
