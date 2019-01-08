# HOTOSM Matomo Opt-in Form Code

This repo contains the code necessary to add the Matomo Opt-in form we use across our sites. The form creates a cookie that will opt the user out of tracking if they wish.

### Using this code

You may need to adapt this to make it work on different projects, but for the most part the process is straightforward. Simply add the following html to your home page, setting the `data-site-id` to the ID on Matomo: 
```
<div id="optout-form" data-site-id="1"></div>
```

And make sure this script shows up on every page you want to track: 
```
<script type="application/javascript" src="https://cdn.hotosm.org/tracking-v3.js"></script>
 ```

For questions, please drop into the [HOTOSM slack](https://slack.hotosm.org/)

### Versioning

Do not update versioned files, instead make a new file and increase the version. That way other sites won't break. 

### To-do
Add checks to circleci to prevent accidental updates to versioned files. 

### Changelog

Version 1: Initial application adds an optout form and tracking

Version 2: Adds hotjar support (use for tm3)

Version 3: removes hotjar and allows for multiple domains
