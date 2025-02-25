# Jira Autofill Chrome Extension

## Overview

Jira Autofill is a Chrome extension that simplifies the process of inserting pre-defined, formatted text into Jira's TinyMCE editor, saving you time and ensuring consistency in your Jira tickets.

## Installation

1. **Load the Extension**:
   - Download the extension files to your computer.
   - Open Chrome and go to `chrome://extensions/`.
   - Enable "Developer mode".
   - Click "Load unpacked" and select the downloaded extension folder.

2. **Verify Installation**:
   - Ensure the Jira Autofill icon appears in your Chrome toolbar.

## Usage

1. **Navigate to a Jira Page**:
   - Open a Jira ticket where you wish to insert text.

2. **Use the Extension**:
   - Click the Jira Autofill icon in the Chrome toolbar.
   - In the popup, click the "Insert Text" button to automatically populate your Jira form with the pre-defined template.

## Customization

To customize the template text, open the `content.js` file in the extension directory and modify the `formattedText` variable contents.