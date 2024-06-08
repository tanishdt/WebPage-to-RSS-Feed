Web to RSS Converter Chrome Extension
=====================================

Description
-----------
The Web to RSS Converter Chrome Extension allows users to convert the currently opened web page into an RSS feed. This is useful for creating RSS feeds from web pages that don't natively offer them.

Features
--------
- Convert any currently open web page to an RSS feed with one click.
- Simple and easy-to-use interface.

Installation
------------
1. Clone the repository:
   - Open a terminal or command prompt.
   - Run the following commands:
     git clone https://github.com/tanishdt/WebPage-to-RSS-Feed.git
     cd web-to-rss-converter

2. Open Chrome and navigate to the Extensions page:
   - Open Chrome.
   - Go to chrome://extensions/.

3. Enable Developer Mode:
   - Toggle the "Developer mode" switch in the top right corner.

4. Load the unpacked extension:
   - Click on "Load unpacked".
   - Select the directory where you cloned the repository.

Usage
-----
1. Open the Web to RSS Converter extension:
   - Click on the extension icon in the Chrome toolbar.

2. Convert the current page to an RSS feed:
   - Click the "Convert to RSS" button.
   - The RSS feed URL will be processed and displayed in the console (for now).

File Structure
--------------
- background.js: Contains the background script for handling the conversion logic.
- icon-16.png, icon-48.png, icon-128.png: Icons for the extension.
- manifest.json: The extension manifest file.
- popup.html: The HTML file for the popup interface.
- popup.js: The JavaScript file for the popup interface.

Adding Icons
------------
Make sure you have the following icons in your project directory:
- icon-16.png
- icon-48.png
- icon-128.png

You can create these icons using any image editor or find icon resources online.

Notes
-----
- Replace YOUR_CONVERTER_API_URL in background.js with the URL of your API or server endpoint that converts the web page into an RSS feed.
- This is a basic example and may need further customization and error handling based on your requirements.

License
-------
This project is licensed under the MIT License. See the LICENSE file for details.
