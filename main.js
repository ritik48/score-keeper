
const select=document.querySelector('select')
const buttons=document.querySelectorAll('button');

const score1=document.querySelector('#score1')
const score2=document.querySelector('#score2')

let round=0;

let scoreA=0;
let scoreB=0;

let rounds=select.options[select.selectedIndex].value;
console.log("present " + rounds);

select.addEventListener('change',(e)=>{
    rounds=parseInt(select.options[select.selectedIndex].value)
    reset();
})
console.dir(buttons[0])
buttons[0].addEventListener('click',changeScore);
buttons[1].addEventListener('click',changeScore);
buttons[2].addEventListener('click',reset);

function changeScore(e)
{
    let id=e.target.id;
    if(id=='1')
    {
        scoreA+=1;
    }
    else
    {
        scoreB+=1;
    }
    round += 1;
    checkWinner();
    score1.innerText=scoreA;
    score2.innerText=scoreB;
}

function checkWinner()
{
    console.log("round = "+round+" rounds= "+rounds)
    console.log("A "+scoreA+" B "+scoreB)
    if(rounds==round)
    {
        if(scoreA==scoreB)
        {

            score1.classList.add('winner');
            score2.classList.add('winner');
        }
        else if(scoreA>scoreB)
        {
            score1.classList.add('winner');
            score2.classList.add('loser');
        }
        else
        {
            score1.classList.add('loser');
            score2.classList.add('winner');
        }

        buttons[0].style.pointerEvents="none";
        buttons[1].style.pointerEvents="none";
        buttons[0].style.opacity="0.5";
        buttons[1].style.opacity="0.5";
        
    }
}

function reset()
{

    buttons[0].style.pointerEvents="";
    buttons[1].style.pointerEvents="";

    buttons[0].style.opacity="";
    buttons[1].style.opacity="";

    score1.classList.remove('winner','loser');
    score2.classList.remove('winner','loser');

    round=0;
    scoreA=0;
    scoreB=0;

    score1.innerText=scoreA;
    score2.innerText=scoreB;
}

