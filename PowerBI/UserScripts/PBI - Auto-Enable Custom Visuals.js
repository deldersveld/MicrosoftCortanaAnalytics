// ==UserScript==
// @name         		Power BI Auto-Enable Custom Visuals
// @namespace    
// @version      		1.0
// @description  	Auto-enables Custom Visuals in the Power BI Service
// @author       		David Eldersveld
// @match        		https://app.powerbi.com/*
// @grant        		none
// @license			MIT
// ==/UserScript==

$(document).ready(function(){
    MutationObserver = window.MutationObserver || window.WebKitMutationObserver;
    var observer = new MutationObserver(function(mutations, observer) {
        EnableCustomVisuals();
    });

    observer.observe(document, {
        subtree: true,
        attributes: true
    });
});

function EnableCustomVisuals(){
    
    var noteBarButton = $(':button.ng-binding.ng-scope.primary.last');
    var noteBarButtonText = noteBarButton.text();
    
    if (noteBarButtonText == 'Enable custom visuals'){
        console.log('Power BI Auto-Enable Custom Visuals: enabling custom visual');
        noteBarButton.click();
    }
};
