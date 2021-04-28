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

//Open-search 스크롤시 고정
window.addEventListener('scroll', function(){
    let searchScroll = document.getElementById('openSearch');
    if(window.scrollY > 0){
        searchScroll.classList.add('fixed');
    }else{
        searchScroll.classList.remove('fixed');
    }
});

//input에 입력된 값 검색
let searchTxt = document.getElementById('searchTxt');

searchTxt.addEventListener('change', function(){
    let titleTxt = document.getElementsByClassName('title');
    let titleTxtArray = [...titleTxt];
    let listItem = document.getElementsByClassName('list-item');
    let searchTxtValue = searchTxt.value;

    for(let list of listItem){
        list.style.display = 'none'
        titleTxtArray.forEach((item,idx) => {
            if(item.innerText.indexOf(searchTxtValue) >=0){
                listItem[idx].style.display = 'block';
            }
        });
    }
});



