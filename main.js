let detailDiv = document.querySelector('.details');
let btnContinue = document.createElement('span');
let finalScore = document.querySelector('.score');
fetch("./data.json")
.then(response => response.json())
.then(data => {
    for (let i=0; i < data.length ; i++){
        let contDiv = document.createElement('div');
        let imgIcon = document.createElement('img');
        let spanScore = document.createElement('span');
        let spanCategory = document.createElement('span');
        imgIcon.src = data[i].icon;
        spanCategory.textContent = data[i].category;
        spanScore.textContent = `${data[i].score} / 100`;
        contDiv.appendChild(imgIcon);
        contDiv.appendChild(spanCategory);
        contDiv.appendChild(spanScore);
        contDiv.className = `cont${i+1}`;
        detailDiv.appendChild(contDiv);
    }
    btnContinue.className = 'btn';
    btnContinue.textContent = 'Continue';
    detailDiv.appendChild(btnContinue);
    let sum = 0;
    data.map(obj => {
        sum += obj.score;
    });
    finalScore.textContent = `${parseInt(sum / data.length)}`;
})