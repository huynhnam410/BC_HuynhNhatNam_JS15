console.log('hello');

function calSum(a, b , c ){
    // var a=1
    // var b=4
    var sum=a+b+c
    console.log(sum)
    return sum
}

var res=calSum(2, 4, 6);
console.log(res)
// calSum(1,2,3);
// calSum();

// cau1
// input:điểm chuẩn, điểm 3 môn, điểm ưu tiên kv và đt
// logic:tinh diem 3 môn và so sánh với điểm chuẩn
// out put:đậu hay rớt



// var local0=0
// var localA=2
// var localB=1
// var localC=0.5

// var level_0=;
// var leve1_l=2.5;
// var level_2=1.5;
// var level_3=1;

function calcAreaS(area){
    if(area ==="A"){return 2;}
    
    if(area ==="B")
    {return 1;}

    if(area ==="C")
    {return 0.5;}

   
return 0;

}

function calcTypeS(studentType){
    if(studentType === 1){
        return 2.5
    }

    if(studentType === 2){
        return 1.5
    }

    if(studentType ===3){
        return 0.5
    }

  
    return 0;
}




function ex1(){
    var sub1=8
    var sub2=5
    var sub3=6
    var area="A"
    var studentType=1
    var standardGrade=20

    var area=calcAreaS(area)

    var studentType= calcTypeS(studentType)

    var totalGrade=sub1+sub2+sub3+area+studentType;

   

if(totalGrade>=standardGrade)
{
console.log("đậu",totalGrade)
}else 
{
    console.log("rớt",totalGrade)
}
}

ex1()


// cau2
// input: lượng điện tiêu thụ
// logic:tinh giá điện theo từng mốc
// out put:tổng tiền


function ex2(){
var fullName= "nam";
var price;
var amoutKW=150;
var totalPrice;

if(amoutKW<50){
    totalPrice=500*amoutKW
    console.log("tien dien",totalPrice)
} else if(amoutKW<=100){
    totalPrice=500*50+(amoutKW-50)*650
    console.log("tien dien",totalPrice)
} else if(amoutKW<=200){
totalPrice=500*50+650*50+(amoutKW-100)*850
console.log("tien dien",totalPrice)
}
else if(amoutKW<=350){
    totalPrice=500*50+650*50+100*850+(amoutKW-200)*1100
    console.log("tien dien",totalPrice)
}else if(amoutKW>350){
    totalPrice=500*50+650*50+100*850+150*1100+(amoutKW-350)*1100
    console.log("tien dien",totalPrice)
}

}
ex2()


function ex3(){
    
}

