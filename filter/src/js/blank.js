/**
 * Created by janieyuan on 17/5/23.
 */
$(function () {

    var configJson = JSON.parse(getUrlParams("config"));
    if(configJson == undefined){
        return;
    }

    var filter;
    var app;
    var background;


    var vue = new Vue({
        el: '#main',
        data: configJson,
        mounted: function () {
            initRenderer();
        }
    });

    function initRenderer() {

        var orignalImg = $("img");
        var imgPath = orignalImg.attr("src");
        app = new PIXI.Application(orignalImg.width(), orignalImg.height());
        $(".effect").append(app.view);

        background = PIXI.Sprite.fromImage(imgPath);
        background.width = orignalImg.width();
        background.height = orignalImg.height();


        app.stage.addChild(background);
        app.stop();


        PIXI.loader.add('fragmentShader', configJson.fragmentShader).load(onLoaded);
    }

    function onLoaded(loader, res) {

        filter = new PIXI.Filter(null, res.fragmentShader.data);

        background.filters = [filter];

        filter.uniforms.canvasWidth = background.width;
        filter.uniforms.canvasHeight = background.height;

        app.start();

        addSliderListener();

        $("input").trigger("input");
    }

    function addSliderListener() {

        $(".parameters input").bind("input propertychange", function (event) {

            var index = $("input").index($(event.target));
            var val = $(event.target).val();

            filter.uniforms[configJson.slider[index].uniform] = parseFloat(val);
            $(event.target).next().text(val);
        });
    }

    function getUrlParams(paras) {
        var reg = new RegExp("(^|&)" + paras + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
        var r = window.location.search.substr(1).match(reg);  //匹配目标参数
        if (r != null) return decodeURI(r[2]);
        return null; //返回参数值
    }
});