//Google Maps
var map;
function initMap(){
	map = new google.maps.Map(document.getElementById('mapa'),{
		center: {lat:38.79635, lng: -9.39602},
		zoom:15
	});
}
//Homepage Slideshow
setInterval(function(){
    var $this=$('#slideshow img.current');
    if($this.next().length==1)
    {
        var $proxima=$this.next();
    }
    else
    {
        var $proxima=$('#slideshow img:first');
    }
    $this.addClass('before');
    $this.removeClass('current');
    $proxima.addClass('current')
        .css({opacity:0.0})
        .animate({opacity:1.0},2000,function(){
            $this.removeClass('before');
    });
},3000);
//Login
var users = [
{username: 'admin',password: 'password'},
{username: 'vazant',password: 'rockroll'},
{username: 'persof',password: 'lgbtpride'},
{username: 'fireeye',password: 'christmas'},
{username: 'ferin',password: 'wedding'},
{username: 'vassar',password: 'birthday'},
{username: 'nungon',password: 'hapiness'}
];
var valid=1;
function check(){
    var username = document.querySelector('.user').value;
    var password = document.querySelector('.pass').value;
    for(var i=0;i<users.length;i++){
        if(username == users[i].username && password == users[i].password){
            alert('Login Bem Sucedido');
            break;
        }
        else{
            valid=0;
        }
    }
    if(valid==0){
        alert('Utilizador ou palavra-passe incorreta!');
    }
}

//Registo
function registovalido() {
  var x = document.forms["register-form"]["utilizador","password","email"].value;
  if (x == "") {
    alert("Preencha todos os parâmetros!");
    return false;
  }
  else{
    alert('Conta criada com sucesso!')
  }
}