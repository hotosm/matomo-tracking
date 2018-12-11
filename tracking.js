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

  //old piwik tracker - remove this when ready
  var secondaryTracker = "https://piwik.hotosm.org/piwik.php"
  var secondaryWebsiteId = 5;
  // Also send all of the tracking data to this other Matomo server, in website ID 77
  _paq.push(['addTracker', secondaryTracker, secondaryWebsiteId]);
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
    document.getElementById("optout-form").classList.remove("optout-show");
    localStorage.setItem("optout-closed", "true");
  };

  if (!localStorage.getItem("optout-closed")) {
    document.getElementById("optout-form").classList.add("optout-show");
  }

});
