
var form = document.getElementById('addForm');
form.addEventListener('submit',saveinLocalStorage);



// const incrementCount = document.getElementById('increment');
// //const decrementCount = document.getElementById('')
// const totalCount = document.getElementById("output");
// var count = 0;
// totalCount.innerHTML = count;

// const handleIncrement = () =>{
//     count++;
//     totalCount.innerHTML = count;
// }
// incrementCount.addEventListener('submit',handleIncrement);

// function increment(event){
//   event.preventDefault();
//   const sellingPrice = event.target.Price.value;
//   var output = document.getElementById('output');
//   output.innerHTML = '<h3>' +'Total:'+sellingPrice+'</h3>';

// }


 async function saveinLocalStorage(event){
event.preventDefault();
const sellingPrice = event.target.Price.value;
const productName = event.target.Product.value;
let promise1;
const myObj = {
    sellingPrice,
    productName
}
          
        try{
      promise1 = await axios.post("https://crudcrud.com/api/d8159ffa02564cea9980ca785f24ed69/AdminPage",myObj)
     
        displayUser(promise1.data)
        tempTotal.innerHTML =   parseInt(tempTotal.innerHTML) + parseInt( promise1.data.sellingPrice)
        console.log(promise1)
    
        }catch(err){
        document.body.innerHTML = document.body.innerHTML + "<h4>Something went wrong</h4>"
        console.log(err)
     }
    }
        

        var promise1;
       var tempTotal = (document.getElementById('id7'));
     window.addEventListener('DOMContentLoaded',async(event)=>{
        try{
       promise1 = await axios.get("https://crudcrud.com/api/d8159ffa02564cea9980ca785f24ed69/AdminPage")
        
           // console.log(promise1)
            for(var i=0; i<promise1.data.length; i++){
                displayUser(promise1.data[i])
                
                
                tempTotal.innerHTML = parseInt( tempTotal.innerHTML )+ parseInt(promise1.data[i].sellingPrice) 
            }

          // tempTotal.innerHTML = parseInt(tempTotal.innerHTML)  + parseInt(response.data._id)
            
        }
        catch(error){
            console.log(error)
        }
     })


function displayUser(user){
    
   const ParentNode = document.getElementById('Users');
   const ChildHTML = `<li id = ${user._id}>${user.sellingPrice} - ${user.productName}
     <button onClick = deleteUser('${user._id}') >Delete Product</button></li>`
    
     ParentNode.innerHTML = ParentNode.innerHTML + ChildHTML;
}

 async function deleteUser(userId){
     try{
    var promise1 = await axios.get(`https://crudcrud.com/api/d8159ffa02564cea9980ca785f24ed69/AdminPage/${userId}`)
    

        tempTotal.innerHTML = parseInt(tempTotal.innerHTML)-parseInt(promise1.data.sellingPrice)
    
}
     catch(error){
        console.log(error)
     }
      try{
     const promise3 = await axios.delete(`https://crudcrud.com/api/d8159ffa02564cea9980ca785f24ed69/AdminPage/${userId}`)
     
       //tempTotal.innerHTML = parseInt(tempTotal.innerHTML) - parseInt(response.data.sellingPrice)
        
       // console.log(response)
    

    }      
    catch(err){
        console.log(err)
    
 }finally{   
    removeItemFromScreen(userId);
 }
   
 }
function removeItemFromScreen(userId){

    const ParentNode = document.getElementById('Users')
    const elem = document.getElementById(userId)
       ParentNode.removeChild(elem)
}