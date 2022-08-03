 data=[];

let fish= async ()=>{
    let response = await fetch('https://www.fishwatch.gov/api/species')

    data = await response.json();

    console.log(data);

    

    data.forEach((val,index)=>{
        
console.log(val['Image Gallery']);
        
        if(val["Image Gallery"]===null){
            console.log('NO Img'+' '+index)
        }
        // if(typeof val["Image Gallery"]!=='Array'){
        //     console.log(val["Image Gallery"].src+' '+index)
        // }
        else{
            console.log(val["Image Gallery"][0].src+' '+index)
        }
    //    let dynaImg = document.createElement('div')
    //    dynaImg.setAttribute('id',`fish${index}`)
    //    dynaImg.innerHTML=``
    })
}
console.log(data)
document.addEventListener('DOMContentLoaded',fish)

var loop='';





