

var vm = new Vue({
    el : '#app',
    data : {
      color : 'green'
    }
  ,
  methods : {
    changeColor : function (event){
      this.color = event.target.getAttribute('data-color')
    }
  }
})