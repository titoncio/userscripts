// ==UserScript==
// @name         Change 'friends with badge' url on steam badge
// @version      1.0
// @description  On badge page theres a block titled 'friends have earned this badge'. I constatly want to se the badge levels for friends and by default the url is to user profile, so i just change to badge url
// @author       https://github.com/titoncio
// @match        https://steamcommunity.com/profiles/*/gamecards/*
// @match        https://steamcommunity.com/profiles/*/badges/*
// @match        https://steamcommunity.com/id/*/gamecards/*
// @match        https://steamcommunity.com/id/*/badges/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=steamcommunity.com
// @grant        GM_addStyle
// @run-at       document-idle
// ==/UserScript==

(function() {
  'use strict';
  if (document.querySelector('.badge_friends_have_earned_friends')) { //we only want to load if theres the 'friends with badge' block
    let currentUrl = window.location.href
    if (currentUrl.charAt(currentUrl.length - 1) == '/') { currentUrl = currentUrl.substring(0, currentUrl.length - 1) }
    const urlArray = currentUrl.split('/')
    const finalUrlPath = `/${urlArray[urlArray.length - 2]}/${urlArray[urlArray.length - 1]}`
    const friends = document.querySelector('.badge_friends_have_earned_friends').getElementsByClassName('playerAvatar')

    for (let i = 0; i < friends.length; i++) {
        friends[i].getElementsByTagName('a')[0].href += finalUrlPath
    }
  }
})();