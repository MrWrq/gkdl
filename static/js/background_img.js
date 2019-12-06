var slideImgs = $(".scheme_sider > .slide")
slideImgs.each(function (index, ele) {
    $(ele).find(".scheme_list_icon").css({"backgroundImage":"url(../tstkj/img/b0"+(index+1)+".png)","width":"60px","height":"60px"})
    if(index == 3 || index ==4) {
        $(ele).find(".scheme_list_icon").css({"width":"118px","height":"60px"})
    }
})