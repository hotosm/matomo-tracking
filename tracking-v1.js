/* Add div content */
var html = `
<div id="optout-contents">
  <p>This site uses Matomo to analyze traffic and help us improve your user experience. It is processing your IP address and stores cookies on your browser for 13 months. Those data are only processed by us and our web hosting platform. You may choose to opt of of this below. </p>
  <p><a id="privlink" href="https://hotosm.org/privacy"> Learn more about our Privacy Policy</a></p>
  <p>
    <input type="checkbox" id="optout" />
    <label for="optout"><strong></strong></label>
  </p>
</div>
<div class="close-button" id="optout-close">Close</div>
`;

var css = `
#optout-form {
  position: fixed;
  bottom: 0%;
  left: 0%;
  max-width: 100%;
  padding: 0 15%;
  background-color: #2C3038;
  z-index: 1001;
  display: none;
  grid-template-columns: 90% 10%;
}

#optout-contents {
  grid-column: 1;
  padding-top: 14px;
}

#optout-contents p {
  color: #E1E0E0;
  text-align: center;
}

#optout-contents p a {
  color: #d73f3f;
  font-weight: 700;
}

#optout-contents p a:hover {
  color: #68c7dd;
} 

#optout-close {
  grid-column: 2;
  color: #E1E0E0;
  font-size: 1rem;
  text-align: right;
  padding: 14px 0 11px 24px;
  margin-left: 16px;
  cursor: pointer;
  z-index: 1002;
}

`
var style = document.createElement('style');

if (style.styleSheet) {
    style.styleSheet.cssText = css;
} else {
    style.appendChild(document.createTextNode(css));
}

document.getElementsByTagName('head')[0].appendChild(style);

var form =  document.getElementById('optout-form');
if (typeof(form) != 'undefined' && form != null)
{
  form.innerHTML = html;

  var formContents = document.getElementById('optout-contents');
  var formContentsP = formContents.getElementsByTagName("P");
  var formClose = document.getElementById('optout-close');
  var privLink = document.getElementById('privlink');
  
  if (!localStorage.getItem("optout-closed")) {
    form.style.display = 'grid';
  }

}

// Matomo tracker
var _paq = _paq || [];
/* tracker methods like "setCustomDimension" should be called before "trackPageView" */
_paq.push(['requireConsent']);
_paq.push(["setDomains", ["*.hotosm.org","*.hot.openstreetmap.org","*.hot.osm.org"]]);
_paq.push(['trackPageView']);
_paq.push(['enableLinkTracking']);
(function() {
  var u="https://matomo.hotosm.org/";
  _paq.push(['setTrackerUrl', u+'piwik.php']);
  _paq.push(['setSiteId', '1']);

  //old piwik tracker - if you need to keep tracking on the old site, uncomment and replace the Id with the correct one
  //var secondaryTracker = "https://piwik.hotosm.org/piwik.php"
  //var secondaryWebsiteId = 5;
  // Also send all of the tracking data to this other Matomo server, in website ID 77
  //_paq.push(['addTracker', secondaryTracker, secondaryWebsiteId]);
  // End Piwik code

  var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
  g.type='text/javascript'; g.async=true; g.defer=true; g.src=u+'piwik.js'; s.parentNode.insertBefore(g,s);
})();

// Opt-out form
document.addEventListener("DOMContentLoaded", function(event) {
  
  function setOptOutText(element) {
    _paq.push([function() {
      element.checked = !this.isUserOptedOut();
      document.querySelector('label[for=optout] strong').innerText = this.isUserOptedOut()
        ? 'You are currently opted out. Click here to opt in.'
        : 'You are currently opted in. Click here to opt out.';
    }]);
  }

  var optOut = document.getElementById("optout");
  optOut.addEventListener("click", function() {
    if (this.checked) {
      _paq.push(['forgetUserOptOut']);
    } else {
      _paq.push(['optUserOut']);
    }
    setOptOutText(optOut);
  });

  setOptOutText(optOut);

  document.getElementById('optout-close').onclick = function() {
    form.style.display = 'none';
    localStorage.setItem("optout-closed", "true");
  };
});
