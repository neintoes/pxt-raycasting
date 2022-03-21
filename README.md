A extension for Makecode Arcade, render a tilemap to 2.5D view, with directional animations of sprites, and minimap
based on mmoskal's "3d map", https://forum.makecode.com/t/3d-raycasting-in-arcade/474

## features:
* Directional multi sprites with animation
* Auto tex calculate, any count
* Simply interface, 
* Manipulate sprite in your main code, not need update to engine

## todo:
* collide & events
* enclose into blocks

## known issues:
sprite isn't drawn when it's center not inside screen, will fix later
sprite floating when reducing height rate, will fix later

> Open this page at [https://aqeeaqee.github.io/pxt-raycasting/](https://aqeeaqee.github.io/pxt-raycasting/)

## Use as Extension

This repository can be added as an **extension** in MakeCode.

* open [https://arcade.makecode.com/](https://arcade.makecode.com/)
* click on **New Project**
* click on **Extensions** under the gearwheel menu
* search for **https://github.com/aqeeaqee/pxt-raycasting** and import

## Edit this project ![Build status badge](https://github.com/aqeeaqee/pxt-raycasting/workflows/MakeCode/badge.svg)

To edit this repository in MakeCode.

* open [https://arcade.makecode.com/](https://arcade.makecode.com/)
* click on **Import** then click on **Import URL**
* paste **https://github.com/aqeeaqee/pxt-raycasting** and click import

## Blocks preview

This image shows the blocks code from the last commit in master.
This image may take a few minutes to refresh.

![A rendered view of the blocks](https://github.com/aqeeaqee/pxt-raycasting/raw/master/.github/makecode/blocks.png)

#### Metadata (used for search, rendering)

* for PXT/arcade
<script src="https://makecode.com/gh-pages-embed.js"></script><script>makeCodeRender("{{ site.makecode.home_url }}", "{{ site.github.owner_name }}/{{ site.github.repository_name }}");</script>