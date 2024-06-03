
          let obj=JSON.parse(localStorage.getItem('obj')) ||{
            Lose:0,
            Tie:0,
            Wins:0
          };
          function dis(){
          let pobj=document.querySelector('.p');
          pobj.innerHTML=`
          Wins:0, Lose:0,
          Tie:0
          `;
          } 
            
        const funobj={ 
          outerfunction:function(res){

            

        let val2=Math.random();
          let res2;
          if(val2>0 && val2 <=1/3){
            res2='rock';
          }
          else if(val2>0 && val2 <2/3){
            res2='paper';
          }
          else if(val2>0 && val2 <1){
            res2='scissors';
          }
          
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
                
