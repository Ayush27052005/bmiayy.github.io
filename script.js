//selectors
const bttn = document.querySelector(".sb-btn")

bttn.addEventListener('click',(e)=>{
    e.preventDefault();
    
    //variable
    const height= parseInt(document.querySelector("#height").value);
    const weight = parseInt(document.querySelector("#weight").value);
    let results = document.querySelector("#bombom")

    if(height  === '' || height<0 || isNaN(height)){//check whether height is NaN or not
        results.innerHTML = `<span>Invalild ${height}</span>`
    }
    else if(weight  === '' || weight<0 || isNaN(weight)){//check whether height is NaN or not
        results.innerHTML = `<span>invalid ${weight}</span>`
    }
    else{
        const bmi = (weight/((height*height)/10000)).toFixed(2);
        // results.innerHTML = `<span>${bmi}</span>`;
        let set;
        if(bmi<18.6) set="underweight";
        else if(18.6>=bmi && bmi<24.9) set="Normal weight";
        else set="overweight";
        results.innerHTML = `<span>${bmi}: ${set}</span>`;
    }
})