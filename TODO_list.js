    function getandupdate(){
      console.log("Updating list....")
      let tit=document.getElementById("title").value
      let desc=document.getElementById("description").value
      if(localStorage.getItem('itemsJson')==null){
        itemJsonArray=[];
        itemJsonArray.push([tit,desc])
        localStorage.setItem('itemsJson',JSON.stringify(itemJsonArray))
        }
      else{
        itemJsonArraystr=localStorage.getItem('itemsJson')
        itemJsonArray=JSON.parse(itemJsonArraystr)
        itemJsonArray.push([tit,desc])
        localStorage.setItem('itemsJson',JSON.stringify(itemJsonArray))
      }
      update();
    }


      //populate the table
    function update(){
      if(localStorage.getItem('itemsJson')==null){
        itemJsonArray=[];
        localStorage.setItem('itemsJson',JSON.stringify(itemJsonArray))
        }
      else{
        itemJsonArraystr=localStorage.getItem('itemsJson')
        itemJsonArray=JSON.parse(itemJsonArraystr);
      }
      tableBody=document.getElementById("tableBody")
      let str="";
      itemJsonArray.forEach((element,index) => {
        str+=`
        <tr>
        <th scope="row">${index+1}</th>
        <td>${element[0]}</td>
        <td>${element[1]}</td>
        <td><button class="btn btn-primary" onclick="deleted(${index})">Delete</button></td>
        </tr>`;
      });
      tableBody.innerHTML=str;
    }

    let add=document.getElementById("add")
    add.addEventListener("click", getandupdate);
    update();
    function deleted(itemIndex){
      console.log('delete',itemIndex);
      itemJsonArraystr=localStorage.getItem('itemsJson')
      itemJsonArray=JSON.parse(itemJsonArraystr)
      //delet itemIndex element from the array
      itemJsonArray.splice(itemIndex,1);
      localStorage.setItem('itemsJson',JSON.stringify(itemJsonArray));
      update();

    }
    function clearstorage(){
      if(confirm("Do you really want to clear")){
      console.log("clearing the storage...")
      localStorage.clear();
      update();
      }
    }
