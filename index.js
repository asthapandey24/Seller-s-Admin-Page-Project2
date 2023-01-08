function saveinLocalStorage(event){
event.preventDefault();
const sellingPrice = event.target.Price.value;
const productName = event.target.Product.value;
const myObj = {
    sellingPrice,
    productName
}

  axios.post("https://crudcrud.com/api/cde03255baa443f9a5f26c6ccfb568b9/AdminPage",myObj)
     .then((response)=>{
        displayUser(response.data)
        console.log(response)
     })
     .catch((err)=>{
        document.body.innerHTML = document.body.innerHTML + "<h4>Something went wrong</h4>"
        console.log(err)
     })

    }
   
     window.addEventListener('DOMContentLoaded',(event)=>{
        axios.get("https://crudcrud.com/api/cde03255baa443f9a5f26c6ccfb568b9/AdminPage")
        .then((response)=>{
            console.log(response)
            for(var i=0; i<response.data.length; i++){
                displayUser(response.data[i])
            }
        })
        .catch((error)=>{
            console.log(error)
        })
     })


function displayUser(user){
    
   const ParentNode = document.getElementById('Users');
   const ChildHTML = `<li id = ${user._id}>${user.sellingPrice} - ${user.productName}
     <button onClick = deleteUser('${user._id}')>Delete Product</button></li>`

     ParentNode.innerHTML = ParentNode.innerHTML + ChildHTML;
    

}

function deleteUser(userId){
    axios.delete(`https://crudcrud.com/api/cde03255baa443f9a5f26c6ccfb568b9/AdminPage/${userId}`)
    .then((response)=>{
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
























