# HOTOSM Matomo Opt-in Form Code

This repo contains the code necessary to add the Matomo Opt-in form we use across our sites. The form creates a cookie that will opt the user out of tracking if they wish.

### Using this code

You may need to adapt this to make it work on different projects, but for the most part the process is straightforward:

1. Add the javascript and css files from this repo to the project
2. Link the added files as scripts, eg.
```html
<script src="/js/tracking.js"></script>
```
and import the scss.
3. Add the following `div` to the home page of the project:
```html
    <div id="optout-form">
      <div id="optout-contents">
        <p>This site uses Matomo to analyze traffic and help us improve your user experience. It is processing your IP address and stores cookies on your browser for 13 months. Those data are only processed by us and our web hosting platform. You may choose to opt of of this below. </p>
        <p><a href="/privacy-policy"> Learn more about our Privacy Policy</a></p>
        <p>
          <input type="checkbox" id="optout" />
          <label for="optout"><strong></strong></label>
        </p>
      </div>
      <div class="close-button optout-close">Close</div>
    </div>
```
4. Link the HOTOSM Privacy Policy in the link above 

For questions, please drop into the [HOTOSM slack](https://slack.hotosm.org/)


Todo: 
- turn this into a CDN:
  - use CI to sync with S3
  - Add Cloudfront to S3
  - Edit README