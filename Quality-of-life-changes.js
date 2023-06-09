// ==UserScript==
// @name         HH Home
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  adding/changing different things (everything was styled for ~75-90% page zoom)
// @author       -MM- (modified by Maskass)
// @match        https://www.hentaiheroes.com/*
// @match        https://www.hentaiheroes.com/home.html*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=hentaiheroes.com
// @updateURL    https://raw.githubusercontent.com/Kagetora120903/HH-script/main/Quality-of-life-changes.js
// @downloadURL  https://raw.githubusercontent.com/Kagetora120903/HH-script/main/Quality-of-life-changes.js
// @grant        none
// ==/UserScript==

//css
let css = document.createElement('style');
document.head.appendChild(css);

//remove the ! on my profile
css.sheet.insertRule('div.square-avatar-wrapper img.new_notif {display:none}');

//move story path
css.sheet.insertRule('div#breadcrumbs {top: 55px;}');

//tweak team filter box
css.sheet.insertRule('#arena_filter_box.form-wrapper {margin-right: 3px;margin-top: -7.75px;}');

//move the menu a bit
css.sheet.insertRule('#contains_all>nav.opened>[rel=content]>div {margin-top: 10px;}');

//fix HH++ positions of energy bar, text and xp bar
css.sheet.insertRule('body > div > header > div.energy_counter .energy_counter_icon span.hudEnergy_mix_icn {left: 12px !important;}');
css.sheet.insertRule('body > div > header > div.energy_counter[type="quest"] .bar-wrapper .over [rel="count_txt"], body > div > header > div.energy_counter[type="fight"] .bar-wrapper .over [rel="count_txt"] {margin-left: -1.5px !important;}');
css.sheet.insertRule('body > div > header > div.energy_counter[type="quest"] .bar-wrapper .over .energy_counter_amount {margin-left: 2px !important;}');
css.sheet.insertRule('body > div > header > div.energy_counter[type=quest] .bar-wrapper .over [rel=count_txt]>[rel=count],body>div>header>div.energy_counter[type=fight] .bar-wrapper .over [rel=count_txt]>[rel=count]{font-size:8.5px;line-height:11px !important;}');
css.sheet.insertRule('body>div>header div[rel=xp] .bar-wrapper .over span{font-size:11px !important;line-height:8px !important;}');
css.sheet.insertRule('body>div>header>div.energy_counter[type=kiss] .bar-wrapper .over [rel=count_txt]>[rel=count], body>div>header>div.energy_counter[type=challenge] .bar-wrapper .over [rel=count_txt]>[rel=count], body>div>header>div.energy_counter[type=worship] .bar-wrapper .over [rel=count_txt]>[rel=count]{font-size: 8.75px;line-height: 11.25px !important;margin-right:2.25px !important;}');
css.sheet.insertRule('body>div>header .script-pop-timer .text {margin-left: 19.5px !important;}');

//tweak battle button x1 and x10
css.sheet.insertRule('#pre-battle .battle-buttons .battle-buttons-row {justify-content: space-evenly;}');

//girl stat tooltip
css.sheet.insertRule('.new_girl_tooltip {background-color: #111111;text-shadow: 2px -2px 10px #000, 2px 2px 10px #000, -2px 2px 10px #000, -2px -2px 10px #000 !important;box-shadow: 0 0 10px 5px #00000080;pointer-events: none;}');
css.sheet.insertRule('.new_girl_tooltip .girl_tooltip_grade {filter: drop-shadow(0 0 1px #000) drop-shadow(0 0 5px #0fe) drop-shadow(0 0 10px #000);}');
css.sheet.insertRule('.new_girl_tooltip .girl_tooltip_positions {background-color: unset;}');
css.sheet.insertRule('.new_girl_tooltip .caracs {align-items: center;align-self: center;}');
css.sheet.insertRule('.new_girl_tooltip .caracs span {margin: 0px 5px !important;}');

//bigger champion buttons (good for mobile)
//css.sheet.insertRule('.champions-bottom__amount-slider i.increase {margin-top: -50px;height: 50px;}');
//css.sheet.insertRule('.champions-bottom__amount-slider i.decrease {height: 50px;}');
//css.sheet.insertRule('.champions-bottom__footer {margin-top: -7.5px;}');

//tweaks for SM
if(window.location.href.startsWith('https://www.hentaiheroes.com/event.html'))
{
    css.sheet.insertRule('.sultry-mysteries-container .sm-main #shop_tab_container .shop-section .restock-shop {margin-top: -7rem;margin-bottom: 3.5px;margin-left: 22.5rem;}');
    css.sheet.insertRule('div.shop-timer.timer {margin-left: 38.5rem; width: 30rem;scale:0.9;}');
    css.sheet.insertRule('.sultry-mysteries-container .sm-main #shop_tab_container .shop-section .shop-items-list {margin-top: 40px;margin-left: 50px;}');
}

//season scripts
if(window.location.href.startsWith('https://www.hentaiheroes.com/season.html'))
{
    //fix font size + img position
    css.sheet.insertRule('.rewards_pair .slot-item img {margin-top: -3.05rem !important;}');
    css.sheet.insertRule('.rewards_pair .slot-item .stack_num span {font-size: 15px !important;}');

    //fix text font
    css.sheet.insertRule('.white_text #mojo_data {font-size: .83rem;}');

    //move "find opponents" button
    css.sheet.insertRule('.blue_button_L {margin-left: 2.6rem !important;}');

    //fix calendar misalign after changes made above
    css.sheet.insertRule('#popup_daily_rewards .daily_rewards_week_container .daily_reward_container .daily-claim-btn {margin-left: 0rem !important}');
}

if(window.location.href.startsWith('https://www.hentaiheroes.com/season-arena.html'))
{
    //fix season-arena style
    css.sheet.insertRule('#season-arena .player_team_block.battle_hero {margin-top: 3px;}');
    css.sheet.insertRule('div#season-arena .energy_counter {margin-bottom:4.5px;}');
    css.sheet.insertRule('div#season_battle_user_block_kiss_energy .energy_counter span[rel=count_txt] {position: absolute;left: 5.8rem;margin-top: -17.25px;}');
    css.sheet.insertRule('.change_team_container {margin-top: -7.5px;}');
    css.sheet.insertRule('#season-arena .matchRating {margin-top: -3px;}');

    //fix mojo bar + font
    css.sheet.insertRule('.tier_bar_container .tier_bar {position: absolute;height: 107%;margin-top: -1.6px;margin-left: -1.7px;}');
    css.sheet.insertRule('.player_team_block .seasons_tab_mojo #bar_mojo_container .tier_bar_container .white_text.centered_s #mojo_data {font-size: .8rem !important;margin-left: 15px;}');

    //tweak to hover stat
    css.sheet.insertRule('.new_girl_tooltip {scale:65%;margin-top: 120px !important;margin-left:58px !important;}');
} else if(window.location.href.startsWith('https://www.hentaiheroes.com/tower-of-fame.html'))
{
    css.sheet.insertRule('.new_girl_tooltip {scale:70%;margin-top: 75px !important;margin-left:50px !important}');
    css.sheet.insertRule('#leagues_right .average-lvl {width: 130px;margin-left: -63px;margin-top: 45px;height: 1px;position: absolute;}');
    css.sheet.insertRule('#leagues .matchRating {margin-top: -11.5px;position: absolute;scale: 80%;margin-left: 1.5rem !important;}');
    css.sheet.insertRule('.leagues_team_block .challenge {margin-top: 90px;}');
    css.sheet.insertRule('#leagues .gridWrapper {margin-left: 25px;}');
    css.sheet.insertRule('#leagues_left .multiple-battles {margin-top: 6.75px;scale: 90%;margin-bottom: -3px;}');
} else
{
    css.sheet.insertRule('.new_girl_tooltip {opacity :81%;scale: 80%;top:auto !important;bottom:30% !important;margin-left: 35px !important)');
}

//home scripts
if(window.location.href.startsWith('https://www.hentaiheroes.com/home.html'))
{
    //remove bundles & bunny-thanks
    //css.sheet.insertRule('div .bundles {display: none !important;}');
    css.sheet.insertRule('div #blog_button {display: none !important;}');

    //remove phone messenger
    css.sheet.insertRule('div .messenger-link {display: none !important;}');

    //move bundles and box container
    css.sheet.insertRule('#homepage .main-container .middle-container .chest-container {margin-left: 40px;}');
    css.sheet.insertRule('#homepage .main-container .middle-container .bottom-container .box-container {margin-left: 35px;}');
    css.sheet.insertRule('#homepage .main-container .middle-container .bottom-container .box-container .info-container #news_button {margin-top: 7px;}');
    css.sheet.insertRule('#homepage .main-container .middle-container .bottom-container .box-container .info-container .monthly_card {margin-top: 18px;}');
    css.sheet.insertRule('#homepage .main-container .middle-container .bottom-container .box-container .info-container .monthly_card>span {margin-top: -5px}');
    css.sheet.insertRule('#homepage .main-container .middle-container .waifu-and-right-side-container .right-side-container .event-container .event-widget-container .bundles .chest-container {text-shadow: 1px 1px 0 #369400, -1px 1px 0 #369400, -1px -1px 0 #369400, 1px -1px 0 #369400;}');

    //remove background blur effect
    css.sheet.insertRule('#bg_all {filter: none !important;}');

    //remove social links
    css.sheet.insertRule('#homepage .social_links {display: none !important;}');

    //change size of collect money button
    css.sheet.insertRule('#homepage .main-container .middle-container .waifu-and-right-side-container .right-side-container .event-container .season-pov-container .collect-button {right:6.25px !important;}');

    //change box style
    css.sheet.insertRule('div.left-side-container div.notif-position span {border-radius: 15px !important; background-color:rgba(32, 3, 7, 0.7) !important;}');

    //tweak and move feature icons added from HH++
    css.sheet.insertRule('#homepage .main-container .left-side-container a[rel=sex-god-path] .notif-position img{height:50.75px !important;top:1.5px !important;}');
    css.sheet.insertRule('#homepage .main-container .left-side-container a[rel=leaderboard] img{left:1.5px !important}');
    css.sheet.insertRule('.left-side-container>*:nth-child(odd) .script-home-icon {left:10.5px !important;}');
    css.sheet.insertRule('.left-side-container>*:nth-child(even) .script-home-icon {right:9px !important;}');

    //remove clock & league imgs + fix timers' positions
    css.sheet.insertRule('#homepage .main-container .left-side-container>a>.notif-position .additional-menu-data>img, .timerClock_icn {display: none !important;}');
    css.sheet.insertRule('#homepage .main-container .left-side-container .timer {font-size: .75rem;line-height: 5px !important;height: 20px !important;margin-left: 36px !important}');
    css.sheet.insertRule('#homepage .main-container .left-side-container a[rel=pachinko] .notif-position span .script-home-timer,#homepage .main-container .left-side-container a[rel=sex-god-path] .notif-position span .script-home-timer {font-size: .75rem;height: 20px !important;margin-left: 36px !important}');
    css.sheet.insertRule('#homepage .main-container .left-side-container>a>.notif-position .additional-menu-data p.league-rank {font-size: .75rem;height: 1.3rem;margin-left: 28px !important}');

    //change position of boxes and tweak shortcuts
    css.sheet.insertRule('#homepage .main-container .left-side-container .position-quest {top: -10px !important;flex-direction: column !important;}');
    css.sheet.insertRule('#homepage .main-container .left-side-container .position-quest .continue-quest-container {padding-top: 3.5px !important;}');
    css.sheet.insertRule('#homepage .main-container .left-side-container .position-sex-god-path .script-home-shortcut-container {padding-top: 3px !important;}');
    css.sheet.insertRule('#homepage .main-container .left-side-container .position-sex-god-path {flex-direction: column !important;}');
    css.sheet.insertRule('#homepage .main-container .left-side-container .position-clubs {flex-direction: initial;width: 22.125rem;margin-left:-20px;margin-top:15px}');
    css.sheet.insertRule('#homepage .main-container .left-side-container .position-clubs .script-home-shortcut-container {margin-left: -10px;margin-top: 10.6px;}');

    //tweak to waifu buttons container
    css.sheet.insertRule('#homepage .waifu-buttons-container .waifu-right, .waifu-edit {display: none !important;}');
    css.sheet.insertRule('#homepage .main-container .middle-container .bottom-container .box-container .waifu-buttons-container {position: absolute;right: 10.05px !important;}');
    css.sheet.insertRule('#homepage .waifu-buttons-container .girls-name {right: 51.5px;bottom: 28px;}');
    css.sheet.insertRule('#homepage .waifu-buttons-container .girls-name a {letter-spacing: 0.25px;color: white;-webkit-text-stroke-width: 0.925px;-webkit-text-stroke-color: black;}');
    css.sheet.insertRule('#homepage .waifu-buttons-container .girls-name img {margin-left: 7px;margin-right: -2px;margin-bottom: 2px;filter: drop-shadow(0px 4px 3px black) !important;}');

    //waifu image and position
    css.sheet.insertRule('#homepage .main-container .middle-container .waifu-and-right-side-container .waifu-container img {margin-left: 205px !important;margin-top: 40px !important;}');
    //css.sheet.insertRule('div.waifu-container img.avatar {content: url("https://hh2.hh-content.com/pictures/girls/963759359/ava1-1200x.webp"); margin-left: 200px !important; margin-top: 150px !important; object-fit: cover;}'); //Sifra
    //css.sheet.insertRule('div.waifu-container img.avatar {content: url("https://cdn.discordapp.com/attachments/1003407317477380096/1088828579313369138/ava0-1200x.png"); margin-left: 200px !important; margin-top: 150px !important; object-fit: cover;}'); //Mythic Sifra

    //fix seasonal event box
    css.sheet.insertRule('#homepage .main-container .middle-container .waifu-and-right-side-container .right-side-container .event-container .season-pov-container .seasonal-event {position: absolute;right: 5px;top: 260px;width: 200px;}');
}
