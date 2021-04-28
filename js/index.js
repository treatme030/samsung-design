//Open-search 열기/닫기
let gnbWrap = document.getElementById('gnbWrap');
//열기
document.getElementById('searchBox').addEventListener('click', function(){
    gnbWrap.classList.add('open');
});
//닫기
document.getElementById('closeBtn').addEventListener('click', function(e){
    e.preventDefault();
    gnbWrap.classList.remove('open');
});

//스크롤 이벤트
window.addEventListener('scroll', function(){

    //Open-search 스크롤시 고정
    let searchScroll = document.getElementById('openSearch');
    if(window.scrollY > 0){
        searchScroll.classList.add('fixed');
    }else{
        searchScroll.classList.remove('fixed');
    }

    //top 버튼 스크롤 이벤트
    if(window.scrollY > window.innerHeight){
        document.getElementById('topBtn'). classList.add('top');
    }else{
        document.getElementById('topBtn'). classList.remove('top');
    }
});

//input에 입력된 값 검색
let searchTxt = document.getElementById('searchTxt');
let searchResultNum = 0;//입력한 값과 매칭되는 결과 값

searchTxt.addEventListener('change', function(){
    let titleTxt = document.getElementsByClassName('item-title');
    let listItem = document.getElementsByClassName('list-item');
    let searchTxtValue = searchTxt.value;//입력된 값
    let searchTxtValuePattern = new RegExp(searchTxtValue,"i");//입력되는 값 대소문자 구분하지 않음/indexOf()사용불가

    //값이 입력되면 hero 사라짐
    document.getElementById('heroWrap').style.display = 'none';
    
    //입력된 값과 item-title 텍스트 값 비교하고, 해당되는 아이템 보여주기
    for(let i = 0; i < listItem.length; i++){
        if(titleTxt[i].innerText.search(searchTxtValuePattern) >= 0){
            listItem[i].style.display = 'block';
            searchResultNum++;
        } else {
            listItem[i].style.display = 'none';
        }
         //입력된 값과 매칭되는 값이 없을 때
        if(searchResultNum === 0){
            document.getElementById('msg').style.display = 'block';
            document.getElementById('error').innerText = searchTxtValue;
            document.getElementById('mainBtn').style.display = 'none';
        } else {
            document.getElementById('msg').style.display = 'none';
            document.getElementById('mainBtn').style.display = 'block';
        }
    }
   
});




