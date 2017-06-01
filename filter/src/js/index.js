/**
 * Created by janieyuan on 17/5/22.
 */

$(function () {

    var vue;
    init();


    function init() {
        vue = new Vue({
            el: '.nav-container',
            data: {
                items: [
                    {
                        title: '对比度',
                        fragmentShader: '../filter/fragment_shader/contrast.dat',
                        slider: [
                            {
                                name: '对比度',
                                uniform: 'contrast',
                                min: 0.0,
                                max: 2.0,
                                step: 0.01
                            }
                        ]
                    },
                    {
                        title: '饱和度',
                        fragmentShader: '../filter/fragment_shader/saturation.dat',
                        slider: [
                            {
                                name: '饱和度',
                                uniform: 'saturation',
                                min: 0.0,
                                max: 2.0,
                                step: 0.01
                            }
                        ]
                    },
                    {
                        title: 'RGB',
                        fragmentShader: '../filter/fragment_shader/rgb.dat',
                        slider: [
                            {
                                name: 'red',
                                uniform: 'r',
                                min: 0.0,
                                max: 1.0,
                                step: 0.01
                            },
                            {
                                name: 'green',
                                uniform: 'g',
                                min: 0.0,
                                max: 1.0,
                                step: 0.01
                            },
                            {
                                name: 'blue',
                                uniform: 'b',
                                min: 0.0,
                                max: 1.0,
                                step: 0.01
                            }
                        ]
                    },
                    {
                        title: 'Gamma',
                        fragmentShader: '../filter/fragment_shader/gamma.dat',
                        slider: [
                            {
                                name: 'Gamma',
                                uniform: 'gamma',
                                min: 0.0,
                                max: 3.0,
                                step: 0.01
                            }
                        ]
                    },
                    {
                        title: '锐化',
                        fragmentShader: '../filter/fragment_shader/sharpen.dat',
                        slider: [
                            {
                                name: 'centerMultiplier',
                                uniform: 'centerMultiplier',
                                min: 0.0,
                                max: 9.0,
                                step: 0.01
                            }
                        ]
                    },
                    {
                        title: '速描',
                        fragmentShader: '../filter/fragment_shader/thresholdSketch.dat',
                        slider: [
                            {
                                name: '阈值',
                                uniform: 'threshold',
                                min: 0.0,
                                max: 1.0,
                                step: 0.01
                            }
                        ]
                    },
                    {
                        title: '反色',
                        fragmentShader: '../filter/fragment_shader/colorInvert.dat',
                        slider: [
                        ]
                    },
                    {
                        title: '像素化',
                        fragmentShader: '../filter/fragment_shader/pixellate.dat',
                        slider: [
                            {
                                name: '像素块宽度',
                                uniform: 'fractionalWidthOfPixel',
                                min: 0.001,
                                max: 0.1,
                                step: 0.001
                            },
                            {
                                name: '像素块高度',
                                uniform: 'aspectRatio',
                                min: 0.5,
                                max: 2.0,
                                step: 0.01
                            }
                        ]
                    },
                    {
                        title: '高斯模糊',
                        fragmentShader: '../filter/fragment_shader/gaussianBlur.dat',
                        slider: [
                            {
                                name: 'sigma',
                                uniform: 'sigma',
                                min: 0.0,
                                max: 10.0,
                                step: 0.01
                            }
                        ]
                    },
                    {
                        title: '相似度滤波',
                        fragmentShader: '../filter/fragment_shader/simularityBlur.dat',
                        slider: [
                            {
                                name: 'sigma',
                                uniform: 'sigma',
                                min: 0.0,
                                max: 1.0,
                                step: 0.01
                            }
                        ]
                    },
                    {
                        title: '双边滤波',
                        fragmentShader: '../filter/fragment_shader/bilateralFilter.dat',
                        slider: [
                            {
                                name: '空间滤波',
                                uniform: 'distanceSigma',
                                min: 0.0,
                                max: 4.0,
                                step: 0.01
                            },
                            {
                                name: '相似性滤波',
                                uniform: 'simularitySigma',
                                min: 0.0,
                                max: 1.0,
                                step: 0.01
                            }
                        ]
                    },
                    {
                        title: '美颜',
                        fragmentShader: '../filter/fragment_shader/beauty.dat',
                        slider: [
                            {
                                name: '空间滤波',
                                uniform: 'distanceSigma',
                                min: 0.0,
                                max: 4.0,
                                step: 0.01
                            },
                            {
                                name: '相似性滤波',
                                uniform: 'simularitySigma',
                                min: 0.0,
                                max: 1.0,
                                step: 0.01
                            }
                        ]
                    }]
            },
            mounted: function () {
                addFilterListener();
                setTimeout(function () {
                    $(".nav-container a").eq(0).trigger("click");
                }, 100);
            }
        });
    }


    function addFilterListener() {

        $(".nav-container a").click(function (event) {

            $(".nav-container>div>a.active").removeClass("active");
            $(event.target).addClass("active");

            $(".filter-container iframe").attr("src", "../html/blank.html?config=" + JSON.stringify(vue.items[$(".nav-container a").index($(event.target))]));
        });
    }

});







