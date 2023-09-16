const inputBox = document.getElementById("textbox")
const listContainer = document.getElementById("list-container")
const totalCount = document.getElementById("total")
const completedCount = document.getElementById("completed")
const remainingCount = document.getElementById("remaining")
const listElement = document.getElementsByClassName('checked').value

// function to count total task
function totalCountnum(){
    return document.getElementById("list-container").getElementsByTagName('li').length
}

// function to count completed task
function completedCountnum(){
    return document.getElementById("list-container").getElementsByClassName('checked').length
}

// function to count remaining task
function remainingCountnum(){
    return totalCountnum()-completedCountnum()
}

// function to add text writeen in the input box to the list
function addList(){
    if(inputBox.value.trim()===''){
        alert("Please write the task first!!")
    }
    else{
        let list = document.createElement("li");
        list.innerHTML=inputBox.value;
        listContainer.appendChild(list)

        let span = document.createElement("span");
        span.innerHTML="\u00d7"
        list.appendChild(span)
        totalCount.innerText=totalCountnum();
        remainingCount.innerText=remainingCountnum();
    }
    inputBox.value = "";
    saveData();
}

// event listener to add text writeen in the input box to the list after clicking on Enter button
inputBox.addEventListener("keydown", function(e){
    if(e.key==="Enter"){
        addList();
    }
})

// event listener to remove and strikethrough the task
listContainer.addEventListener("click", function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
        completedCount.innerText=completedCountnum()
        remainingCount.innerText=remainingCountnum();
        saveData();
        
    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        totalCount.innerText=totalCountnum();
        completedCount.innerText=completedCountnum()
        remainingCount.innerText=remainingCountnum();
        saveData();
    }
},false)

// function to save data in the browser itself - after refreshing the page the will not get lost
function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
    localStorage.setItem("data1", totalCount.innerText);
    localStorage.setItem("data2", completedCount.innerText);
    localStorage.setItem("data3", remainingCount.innerText);

}

// function to show the saved data in the browser
function showData(){
    listContainer.innerHTML = localStorage.getItem("data");
    totalCount.innerText = localStorage.getItem("data1");
    completedCount.innerText = localStorage.getItem("data2");
    remainingCount.innerText = localStorage.getItem("data3");
}

// calling function to show the saved data
showData();
