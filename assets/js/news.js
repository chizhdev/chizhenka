'use strict';

const urlNews = 'https://api.vk.com/method/wall.get?owner_id=-17971696&lang=ru&filter=owner&count=3&access_token=f48abc29f48abc29f48abc29bcf4eb4d6aff48af48abc29ae381100037c54c880e3553e&v=5.73'

$.ajax({
    url: urlNews,
    type: 'get',
    crossDomain: true,
    dataType: 'jsonp',
    success: function (response) {

        let wall = response.response.items;
        wall = wall.reverse();
        let feed = document.querySelector('.js-feed');

        wall.forEach(function (item) {

            let link = '' + item.from_id + '_' + item.id + '';
            let text;
            let image;

            if (item.copy_history) {
                item.copy_history.forEach(function (repost) {
                    text = repost.text;
                    if (repost.attachments[0].type === 'video') {
                        image = repost.attachments[0].video.photo_800;
                    }
                    if (repost.attachments[0].type === 'photo') {
                        image = repost.attachments[0].photo.photo_604;
                    }
                });
            } else {
                text = item.text;
                if (item.attachments && item.attachments[0].photo) {
                    image = item.attachments[0].photo.photo_604;
                } else {
                    image = 'assets/img/vk-post-placeholder.svg';
                }
            }

            let itemHTML = `
                <a class="block-events-item animate-5" 
                href="https://vk.com/chizhenkadeti?w=wall${link}" 
                target="_blank" 
                style="background-image: url(${image})">
                    <div class="block-events-item-text">${text}</div>
                </a>`;
            feed.insertAdjacentHTML("afterBegin", itemHTML);
        })

    },
    error: function (error) {
        console.log(error);
    }
});