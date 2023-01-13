
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


function saveinLocalStorage(event){
event.preventDefault();
const sellingPrice = event.target.Price.value;
const productName = event.target.Product.value;
const myObj = {
    sellingPrice,
    productName
}
          var tempTotal = (document.getElementById('id7'));
  axios.post("https://crudcrud.com/api/1ed98a9a546b42d0a7098d63cb7a5149/AdminPage",myObj)
     .then((response)=>{
        displayUser(response.data)
        tempTotal.innerHTML = parseInt(tempTotal.innerHTML) + parseInt( response.data.sellingPrice)
        console.log(response)
     })
     .catch((err)=>{
        document.body.innerHTML = document.body.innerHTML + "<h4>Something went wrong</h4>"
        console.log(err)
     })
        


    }

       var tempTotal = (document.getElementById('id7'));
     window.addEventListener('DOMContentLoaded',(event)=>{
        axios.get("https://crudcrud.com/api/1ed98a9a546b42d0a7098d63cb7a5149/AdminPage")
        .then((response)=>{
            console.log(response)
            for(var i=0; i<response.data.length; i++){
                displayUser(response.data[i])
                
                
                tempTotal.innerHTML = ( tempTotal.innerHTML + response.data[i].sellingPrice) 
            }

          // tempTotal.innerHTML = parseInt(tempTotal.innerHTML)  + parseInt(response.data._id)
            
        })
        .catch((error)=>{
            console.log(error)
        })
     })


function displayUser(user){
    
   const ParentNode = document.getElementById('Users');
   const ChildHTML = `<li id = ${user._id}>${user.sellingPrice} - ${user.productName}
     <button onClick = deleteUser('${user._id}') >Delete Product</button></li>`
    
     ParentNode.innerHTML = ParentNode.innerHTML + ChildHTML;
}

function deleteUser(userId){
   axios.get(`https://crudcrud.com/api/1ed98a9a546b42d0a7098d63cb7a5149/AdminPage/${userId}`)
    .then((response)=>{

        tempTotal.innerHTML = parseInt(tempTotal.innerHTML)-parseInt(response.data.sellingPrice)
    })
     .catch((error)=>{
        console.log(error)
     })

    axios.delete(`https://crudcrud.com/api/1ed98a9a546b42d0a7098d63cb7a5149/AdminPage/${userId}`)
    .then((response)=>{
       //tempTotal.innerHTML = parseInt(tempTotal.innerHTML) - parseInt(response.data.sellingPrice)
        removeItemFromScreen(userId);
        console.log(response)
    })

   
        
    .catch((err)=>{
        console.log(err)
    })
}

function removeItemFromScreen(userId){

    const ParentNode = document.getElementById('Users')
    const elem = document.getElementById(userId)
       ParentNode.removeChild(elem)


}
























