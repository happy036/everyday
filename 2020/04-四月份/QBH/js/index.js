// 入口函数
// $(document).ready();
$(function () {
  // 调用fullPage.js的方法

  $(".qbh-down").on('click', function () {
    $.fn.fullpage.moveSectionDown();
  })
  $('#fullpage').fullpage({
    // 1.设置每个section的背景色
    sectionsColor: ["#fadd67", "#84a2d4", "#ef674d", "#fed", "#d04759", "#84d9ed", "#8ac060"],
    // 2.让页面显示小圆圈导航
    navigation: true,
    // 3.调节滚动时间
    scrollingSpeed: 1500,
    // anchorLink 锚链接
    // index 索引 index从1开始
    afterLoad: function (anchorLink, index) {
      // 第一屏
      if (index == 1) {
        $(".qbh-down").animate({
          opacity: 1
        },1000)
      }
      // console.log(index);
      // animate(样式,动画的总时间,动画速度,回调函数)
      // 第二屏动画
      // 判断这一屏索引是否为 2
      if (index == 2) {
        // 找到 初始的搜索框  显示
        $('.qbh-list-initsearch').show().animate({
          right: 478
        }, 1000, function () {

          // 让搜索框中的文字显示
          $('.qbh-list-initsearch img:last-child').animate({
            opacity: 1
          }, 1000, function () {
            //$('.qbh-list-initsearch').hide(); //这句有问题 会让initsearch重新出现
            // 让初始的搜索框隐藏
            $('.qbh-list-initsearch').css({
              opacity: 0
            });
            // 完成的搜索框 向右上角 运动
            $(".qbh-list-finishsearch").show().animate({
              width: 150,
              bottom: 448,
              left: 710
            }, 1000);
            // 让沙发列表 放大
            $('.qbh-list-sofas').animate({
              width: 441
            }, 1000, function () {
              $(".qbh-down").animate({
                opacity: 1
              },1000)
            });

            // 让提示语变化
            // delay() 延迟  如果show()或者hide()用了delay 必须要给hide方法中加0
            $('.qbh-list-tips img:first-child').delay(1000).hide(0);
          });
        });
      }

      // 第五屏动画
      if (index == 5) {
        // 手移动到鼠标上，鼠标左键变色
        $('.qbh-payment-hand img').animate({
          top: 20
        }, 1000, function () {
          $('.qbh-payment-mouse img:last-child').show();
          // 从section顶部掉下一个沙发
          $('.qbh-payment-dropsofa').show().animate({
            bottom: 245
          }, 500, function () {
            $('.qbh-payment-cards img:first-child').animate({
              top: -100
            }, 400)

            $('.qbh-payment-cards img:last-child').animate({
              top: 140
            }, 400)
          })
        })
      }

      // 第七屏动画
      if (index == 7) {
        $('.qbh-apprise-main-star').addClass('active');
        $(".qbh-appraise-haoping").delay(1000).show(0).animate({
          left: 45
        }, 1000, function () {
          $(this).animate({
            width: 72
          }, 1000)
        })
      }

      // 第八屏
      if (index == 8) {
        $(document).mousemove(function (e) {
          // console.log(1);

          // 1.获取鼠标的坐标
          var pagex = e.pageX - 140;
          var pagey = e.pageY + 2;
          // console.log(pagex,pagey);
          var yy = $(window).height() - 449;
          // 2.判断坐标
          if (pagey < yy) {
            // 3.把坐标值设置给手的样式  
            $('.qbh-shopping-hands').css({
              left: pagex,
              top: yy
            })
          } else {
            // 3.把坐标值设置给手的样式  
            $('.qbh-shopping-hands').css({
              left: pagex,
              top: pagey
            })
          }
        })

        // 点击再来一次 回到第一屏
        $('.qbh-shopping-again').click(function () {
          $.fn.fullpage.moveTo(1);
        })
      }
    },
    // 当离开了某一个section 进入下一个section的时候触发
    // index  代表要离开的那个section的索引
    // nextIndex代表即将要进入的section的索引
    // direction 滚动的方向
    onLeave: function (index, nextIndex, direction) {
      if (index == 1 && nextIndex == 2) {
        $(".qbh-down").animate({
          opacity: 0
        },400)
      }
      // 第三屏动画
      if (index == 2 && nextIndex == 3) {
        // 离开第二屏 到第三屏 时，一个沙发从沙发列表掉落
        $('.qbh-list-dropsofa').show().animate({
          bottom: -($(window).height() - 260),
          width: 207,
          left: 370
        }, 1000, function () {
          $('.qbh-buy-main div:nth-child(2)').delay(1000).show(0);
        })
      }

      // 第四屏动画
      if (index == 3 && nextIndex == 4) {
        // 离开第三屏 到第四屏，一个斜着的沙发掉入购物车
        $(".qbh-list-dropsofa").css({
          opacity: 0
        })
        $('.qbh-buy-dropsofa').show().animate({
          bottom: -($(window).height() - 210),
          right: 450,
        }, 1000, function () {
          // 购物车载着斜着的沙发离开
          $('.qbh-buy-dropsofa').css({
            opacity: 0
          });
          $(".qbh-info-cart img:last-child").show();
          $(".qbh-info-cart").animate({
            right: -600
          }, 1000, function () {
            // 第四屏屏幕中间出现收货信息的同时 提示语发生变化
            $('.qbh-info-profile').animate({
              opacity: 1
            }, 1000, function () {
              $('.qbh-info-profile img:last-child').animate({
                opacity: 1
              }, 1000);
            });

            $('.qbh-info-tips img:last-child').animate({
              opacity: 1
            }, 1000);
          });
        })
      }

      // 第六屏
      if (index == 5 && nextIndex == 6) {
        // 沙发从第五屏落下，掉入快递盒内
        $('.qbh-payment-smallsofa').show().animate({
          bottom: -($(window).height() - 450),
          width: 40
        }, 1000)

        // 盒子往右上角去接沙发
        $('.qbh-delivery-box').show().animate({
          bottom: 450,
          left: 180
        }, 1000, function () {
          // 1.隐藏沙发
          $('.qbh-payment-smallsofa').css({
            opacity: 0
          })
          // 2.改变盒子的位置
          $(this).animate({
            bottom: 50,
            left: 480,
            width: 10
          }, 1000, function () {
            $(this).css({ opacity: 0 })
            // 小车移动
            $('.qbh-delivery').animate({
              'backgroundPositionX': '100%'
            }, 2000, function () {
              $('.qbh-delivery-tips img:last-child').animate({
                opacity: 1
              }, 2000, function () {
                // 让送货员把沙发搬出来
                $('.qbh-delivery-man').animate({
                  bottom: 108,
                  right: 610,
                  height: 305
                }, 1000, function () {
                  $(this).animate({
                    right: 400
                  }, 1000, function () {
                    $(".qbh-delivery-door").show();
                    $(".qbh-delivery-buyer").animate({
                      height: 294
                    }, 1000, function () {
                      $('.qbh-delivery-shouhuo').show();
                    })
                  })
                })
              })


            })
            // 小车移动的时候 出现地址
            $('.qbh-delivery-truck img:last-child').show();
            // 提示语变化
            $('.qbh-delivery-tips img:first-child').animate({
              opacity: 0
            }, 1000)

          })
        })
      }
    }
  });
});