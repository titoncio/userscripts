// ==UserScript==
// @name         Better SIH Interface
// @version      1.0
// @description  Steam default inventory interface is really bad if you have a lot of items. Inventory Helper Simplified Interface adds a great feature, but i wanted a more sofisticated interface, so i just changed some settings. Better on 1440+ width monitors
// @author       https://github.com/titoncio
// @match        https://steamcommunity.com/profiles/*/inventory/*
// @match        https://steamcommunity.com/id/*/inventory/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=steamcommunity.com
// @grant        GM_addStyle
// @run-at       document-idle
// ==/UserScript==

(function() {
    'use strict';

    GM_addStyle ( `
   .simple .games_list_tabs {
	left: -250px;
	width: 250px;
}
` )

    GM_addStyle ( `
   .simple .games_list_tabs .games_list_tab_name, .simple .games_list_tabs .games_list_tab_separator, .simple .games_list_tabs .games_list_tab_row_separator {
	display: contents;
}
` )

    GM_addStyle ( `
.simple .games_list_tabs .games_list_tab .games_list_tab_icon {
	float: left;
}
` )

    GM_addStyle ( `
.simple .games_list_tabs .games_list_tab {
	display: flex;
}
` )

    GM_addStyle ( `
.games_list_tab_icon {
	width: 50px;
}
` )

    GM_addStyle ( `
.simple .games_list_tabs .games_list_tab:hover {
    background: linear-gradient(to right, #292929, #1F1F1F);
}
` )
})();