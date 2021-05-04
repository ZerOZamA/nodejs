window.onload=init;
function init (){
    document.querySelector('.btn-secondary').addEventListener('click',function(){
        window.location.href="signin.html"
    });
    document.querySelector('.btn-primary').addEventListener('clck',login);
}

function login(){
var mail=document.getElementById('input-mail').value;
var password=document.getElementById('input-password').value;
axios({
    method:'post',
    url:'locallhost:3000/user/login',
    data:{
        user_mail:mail,
        user_password:password}
}).then(function(res){
    console.log(res)
})
}