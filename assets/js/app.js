define(function(require,exports,module){
    var echarts = require('echarts');
    $(function () {

        //设置侧边导航的高度
        function setAsideHeight(){
            var winH = $(window).height();
            var $leftAside = $('.module-aside');
            var $moduleMain = $('.module-main');
            $leftAside.css({'height':winH-49});
            $moduleMain.css({'height':winH-49});
        }
        setAsideHeight();
        $(window).resize(function(){
            setAsideHeight();
        });

        //标签页
        $('#myTabs a').click(function (e) {
            e.preventDefault();
            $(this).tab('show')
        });


        //左侧导航连接
        $('.aside-nav').on('click','li>a',function(){
            var rel = $(this).attr('rel');
            if(rel){
                $.get(rel+'?timestamp=' + new Date().getTime(),function(d){
                    $('.module-main').html(d);
                })
            }
        });

        //弹出表单布局的两种形式

        $(document).on('click','.form-demo',function(){
            var rel = $(this).attr('rel');
            if(rel){
                $.get(rel+'?timestamp=' + new Date().getTime(),function(d){
                    var myDialog = dialog({
                        'title' : '形式1',
                        'width' : '600px',
                        'content' : d
                    });
                    myDialog.showModal();
                })
            }
        });
        //日历
        $(document).on('click','#inputDate1',function(){
             window.WdatePicker();
        })


    });
});