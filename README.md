# Chrome Drop-down Bug Workaround
**Chrome and Edge Dropdown Bug Workaround**

---

**Description:**

In the latest versions of Chrome and Edge (v124.x), a critical bug has been identified where selecting a dropdown option crashes the user interface, leading to the dreaded "Aw, snap!" page being displayed to the user. This issue impacts various websites, including the Automation Anywhere website, disrupting user experience and hindering productivity.

**Workaround:**

To address this issue until a permanent fix is released by the browser vendors, I have developed a simple workaround in the form of a browser extension. This extension intercepts the dropdown events and prevents the UI from crashing, ensuring uninterrupted browsing experience.

**Installation Instructions:**

1. **Download the Extension:**
   - Navigate to the [Chrome-drop-down-Bug-workaround repository](https://github.com/your_username/Chrome-drop-down-Bug-workaround).
   - Locate the "Drop down bug workaround" folder.
   - Download the folder containing the extension files: `content.js` and `manifest.json`.

2. **Install the Extension:**
   - **Chrome:**
     1. Open Google Chrome and go to `chrome://extensions/`.
     2. Enable Developer mode (toggle switch located in the top right corner).
     3. Drag and drop the downloaded folder onto the extensions page, or click on "Load unpacked" and select the folder.
     4. The extension should now be installed and ready to use.

   - **Edge:**
     1. Open Microsoft Edge and go to `edge://extensions/`.
     2. Enable Developer mode (toggle switch located in the bottom left corner).
     3. Follow the same steps as for Chrome to load the extension.

3. **Verify Installation:**
   - To confirm that the extension is installed and functioning correctly, visit the [Angular Material Select Component overview page](https://material.angular.io/components/select/overview).
   - Try selecting dropdown options

to ensure that the UI no longer crashes and the "Aw, snap!" page is not displayed.

**Note:** This workaround is applicable to all websites experiencing the dropdown bug, including the Automation Anywhere website.

---

I hope that this workaround provides a temporary solution until the issue is resolved by the browser vendors. If you encounter any issues or have feedback, please feel free to report them on the GitHub repository.
