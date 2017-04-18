const tooltipHtml = '<div class="js-push-notifications__tooltip tooltip tooltip_arrow_top-left tooltip_positioned tooltip_shown tooltip_collapse tooltip_width_huge" style="position: fixed; z-index: 9999; top: -10px; left: 75px; display:none;"> <div class="tooltip__box"> <div class="tooltip__inner"> <div class="tooltip__content"> <div class="m-push-notifications__text"><span class="text text_light_normal">Хотите получать первыми самые важные новости? Подпишитесь на уведомления!</span> </div><div class="line line_separator"></div><div class="m-push-notifications__buttons"> <div class="m-push-notifications__button"> <button class="button button_color_project button_color_project js-push-notifications__button" data-action="subscribe" name="clb22520373"><span class="button__inner"><div class="button__text">Подписаться</div></span></button> </div><div class="m-push-notifications__button"> <button class="button js-push-notifications__button" data-action="defer" name="clb22520377"> <span class="button__inner"><div class="button__text">Не сейчас</div></span></button> </div></div></div></div></div></div>';


function addCss(fileName) {
    var head = document.head
        , link = document.createElement('link');
    link.type = 'text/css';
    link.rel = 'stylesheet';
    link.href = fileName;
    head.appendChild(link);
}

var hideTooltip = function(){
    const tooltipWrapper = document.querySelector('#tooltip-wrapper');
    document.body.removeChild(tooltipWrapper);
};

var initTooltip = function(){
    addCss('https://push/styles/index.css');
    var ttEl = document.createElement('div');
    ttEl.id = "tooltip-wrapper";
    ttEl.innerHTML = tooltipHtml;
    document.body.appendChild(ttEl);

    const tooltip = document.querySelector('.js-push-notifications__tooltip');
    const tooltipButtons = document.querySelectorAll('.js-push-notifications__button');

    if(tooltip) {
        tooltip.style.display = "block";
    }
    if(tooltipButtons && tooltipButtons.length) {
        tooltipButtons.forEach(function(el){
            el.addEventListener('click', function (e) {
                var action = e.currentTarget.getAttribute('data-action');
                if (action == 'subscribe') {
                    var newWin = window.open("about:blank", "Подписка", "width=440,height=440");

                    newWin.document.write(
                        "<script>window.location.assign('https://push/subscribe.html')</script>"
                    );
                }
                hideTooltip();
            });
        })

    }
};

initTooltip();