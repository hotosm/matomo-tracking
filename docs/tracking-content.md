# Guide to adding content tracking to a HOT website that has a tracking code

## Content Tracking

You can track any interaction on a page with Matomo. Matomo tracks two behaviors on a content block: content impression and content interaction

There are more advanced ways to track content according to [this guide](https://developer.matomo.org/guides/content-tracking) but below you can find some ways to force matomo to track specific content suck as outlinks and file downloads


## CSS Classes for Tracking Content

| CSS Class | Tracking Type |
|-----------|---------------|
| `class='piwik_link'`  | Tracks internal clicks as outlink |
| `class='piwik_download'` |  Tracks file downloads  |
| `class='piwik_ignore'` | Ignore specific links/files |

