function Tabuada(){
  var num = document.getElementById('num')
  var end_point = document.getElementById('end_point')

  if(num.value.length == 0 || end_point.value.length == 0){
    window.alert('[ERRO] Confira os dados informados')
  } else {

    var n = Number(num.value)
    var e = Number(end_point.value)
    var x = 0
    var r = ''
    var res = document.getElementById('resposta')
    res.innerHTML = `<b>A tabuado do ${n} é:</b> <br><br>`
    do {
      r = n*x 
      res.innerHTML += `${x} x ${n} = ${r} <br>`
      x++
    } while(x <= e)

  }
  
}