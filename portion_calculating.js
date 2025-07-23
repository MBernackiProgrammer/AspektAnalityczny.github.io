function calculate(defaultNumberOfPortions, numberOflistItems){
    const input = document.getElementById('quantity').value;
    if(isNaN(input) || isNaN(defaultNumberOfPortions) || isNaN(numberOflistItems)){
        return;
    }

    for(let c=1;c<=numberOflistItems;c++){
        const i = document.getElementById('i'+c.toString()).innerHTML;
        const q = document.getElementById('q'+c.toString());

        q.innerHTML = ((Number(i) / defaultNumberOfPortions) * input).toFixed(3);
    }
}