//classification
function startClassification(){
    navigator.mediaDevices.getUserMedia({audio:true,video:false});
    classifer=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/10a5MSrik/model.json',{probabilityThreshold:0.7},modelReady);

    cat=0
    dog=0
}
function modelReady(){
    classifer.classify(gotResults);
}
//result or error
function gotResults(error,results){
if (error){
    console.error(error);
    }else{
        console.log(results);
        document.getElementById("result_label").innerHTML="I can hear "+results[0].label;
    }
}
//scores
if(results[0]==cats){
    cat=cat + 1;
    document.getElementById("result_count").innerHTML="cats= "+cat;
    
}else{
    dog=dog+1;
    document.getElementById("result_count").innerHTML="dogs= "+dog;
}