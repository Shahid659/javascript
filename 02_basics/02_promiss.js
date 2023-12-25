	const datas=[
    {name:"Shahid",profession:"Software Engineer"},
    {name:"Ajit",profession:"Software Engineer"}
]

function getData(){
    let output="";
    setTimeout(()=>{
        datas.forEach((data,index)=>{
                 output +=`<li>${data.name}</li>`;
        })
        document.body.innerHTML=output;
    }, 1000)
}

function setData(newdata,callback){
    setTimeout(()=>{
        datas.push(newdata);
        callback();
    }, 2000)
}


setData({name:"Rahul",profession:"Software Engineer"},getData);
