function movePage(x){
    if(x=='page1'){
      document.getElementById('page2').style.display = 'none';
      document.getElementById('head').style.display = 'unset';
    }else if(x =='page2'){
      document.getElementById('page1').style.display = 'none';
      document.getElementById('head').style.display = 'none';
    }
  }