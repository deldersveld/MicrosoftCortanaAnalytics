// ==UserScript==
// @name         		Power BI Feature Switches
// @namespace    
// @version      		1.0
// @description  		Prints the current Power BI Service feature switches to console
// @author       		David Eldersveld
// @match        		https://app.powerbi.com/*
// @grant        		none
// ==/UserScript==

var f = powerbi.common.featureSwitchService;

console.log('Power BI Feature Switches');
console.log(f);
