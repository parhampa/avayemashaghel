/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },  
	bindEvents: function() {
        document.addEventListener('backbutton', this.onBackButton, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },   
	onBackButton: function() {
		
		// alert('start');
		// alert($("[data-role=panel]").attr("href"));
		// alert($(".ui-panel").hasClass("ui-panel-open"));
		// if($("[data-role=panel]").attr("href") == "#"+$.mobile.activePage[0].id)
		if( $(".ui-panel").hasClass("ui-panel-open")=="true" ||  $(".ui-panel").hasClass("ui-panel-open")==true )
		{
			// alert('panel must closed');
			$("[data-role=panel]").panel("close");
			// $("[data-role=panel]").panel("close");
		}
		else
		{
			// alert('must back history');
			if($.mobile.activePage.is('#main'))
			{
				/*var khoroj=confirm("آیا تمایل به خروج از برنامه دارید ؟");
				if(khoroj)
				{
				navigator.app.exitApp();
				}
				else
				{
					
				}*/
				location.replace("#khoroj");
			}
			if($.mobile.activePage.is('#first'))
			{
				location.replace("#khoroj");
			}
			if($.mobile.activePage.is('#daste'))
			{
				location.replace("#main");
			}
			if($.mobile.activePage.is('#map'))
			{
				location.replace("#daste");
			}
			if($.mobile.activePage.is('#send-prog'))
			{
				location.replace("#main");
			}
			if($.mobile.activePage.is('#natije'))
			{
				location.replace("#main");
			}
			if($.mobile.activePage.is('#abute'))
			{
				location.replace("#main");
			}
			if($.mobile.activePage.is('#abuteus'))
			{
				location.replace("#main");
			}
			if($.mobile.activePage.is('#kasb'))
			{
				location.replace("#main");
			}
			if($.mobile.activePage.is('#shogl'))
			{
				location.replace("#daste");
			}
			if($.mobile.activePage.is('#mor-shogl'))
			{
				location.replace("#daste");
			}
			if($.mobile.activePage.is('#niaz'))
			{
				location.replace("#main");
			}
			if($.mobile.activePage.is('#mor-niaz'))
			{
				location.replace("#main");
			}
			if($.mobile.activePage.is('#takhf'))
			{
				location.replace("#main");
			}
			if($.mobile.activePage.is('#list-takhf'))
			{
				location.replace("#main");
			}
			if($.mobile.activePage.is('#mor-takhf'))
			{
				location.replace("#list-takhf");
			}
			if($.mobile.activePage.is('#masage'))
			{
				location.replace("#main");
			}
			if($.mobile.activePage.is('#mor-masage'))
			{
				location.replace("#main");
			}
			if($.mobile.activePage.is('#mor-news'))
			{
				location.replace("#main");
			}
			if($.mobile.activePage.is('#news'))
			{
				location.replace("#main");
			}
			if($.mobile.activePage.is('#fave'))
			{
				location.replace("#main");
			}
			if($.mobile.activePage.is('#add-job'))
			{
				location.replace("#main");
			}
			if($.mobile.activePage.is('#add-member'))
			{
				location.replace("#main");
			}
			/*else
			{
				navigator.app.backHistory();
			}*/
		}
		
		
		
		// return;	
		
		
		// if($.mobile.activePage.is('#main')){
			// navigator.app.exitApp();
			// alert('1');
		// }
		// else {
			// navigator.app.backHistory();
			// alert('2');
		// }
					
		//$("[data-role=panel]").panel("close");
        // alert('onBackButton');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};
