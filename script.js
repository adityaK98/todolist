body {
    margin: 0;
    padding: 0;
    font-family: sans-serif;
}

.main-container{
    height: 100%;
    min-height: 100vh;
    background: linear-gradient(135deg, red,blueviolet);
    padding: 10px;
}

/* For mobile devices */
@media screen and (max-width:500px) {
    .main-container{
        background: linear-gradient(135deg, red,blueviolet);
        padding: 10px;
        padding-right: 30px;
    }
}

/* main app background */

.todoapp{
    max-width: 50%;
    background-color: antiquewhite;
    border-radius: 10px;
    margin: auto;
    padding: 10px;
    display: flex;
    flex-direction: column;
}

.todoapp h3 img{
    height: 15px;
    margin-left: 5px;
}

/* For mobile devices */
@media screen and (max-width:500px) {
    .todoapp{
        width: 100%;
        max-width: 100%;
        background-color: antiquewhite;
        border-radius: 10px;
        margin: auto;
        padding: 10px;
        display: flex;
        flex-direction: column;
    }
}

/* Text inpput & button contaioner */
.row{
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: lightgreen;
    border-radius: 50px;
    overflow: hidden;
    padding-left: 10px;
}

input{
    flex: 1;
    background: transparent;
    border: none;
    outline: none;
    font-size: 14px;
    padding: 10px;
    width: 80%;
    position: relative;
}

button{
    border: none;
    outline: none;
    border-radius: 50px;
    cursor: pointer;
    background-color: orange;
    padding: 16px 50px;
    font-size: 16px;
    position: relative;
    color: white;
}

/* Tasks' list */
ul li{
    list-style: none;
    padding: 8px;
    cursor: pointer;
    position: relative;
    user-select: none;
    overflow-wrap: break-word;
    margin: -16px 40px 16px 0px;
}

/* tasks count */

.taskCount{
    display: flex;
    justify-content: space-around;
    overflow: auto;
}

/* Checkbox - before click on it*/
ul li::before{
    content: '\26AA';
    position: absolute;
    left: -15px;
    top: 6px;
}

/* Checkbox - after click on it*/
ul li.checked::before{
    content: '\26AB';
    cursor: pointer;
    position: absolute;
    left: -15px;
    top: 6px;
}
/* stikethrough the text */
ul li.checked{
    color: grey;
    text-decoration:line-through;
}

/* delete tasks */
ul li span{
    right: 0;
    position: absolute;
    height: 40px;
    width: 40px;
    border-radius: 50%;
    text-align: center;
    font-size: 22px;
    line-height: 40px;
    color:black;
    top: -0.4px;
    margin-right: -25px;
    cursor: pointer;
}

ul li span:hover{
    background-color: gainsboro;
}
