console.log("Content script loaded");

function hoverAndClickEditButton() {
  const descriptionContainer = document.querySelector('#description-val');
  if (descriptionContainer) {
    const mouseOverEvent = new MouseEvent('mouseover', { bubbles: true, cancelable: true, view: window });
    descriptionContainer.dispatchEvent(mouseOverEvent);

    const editButton = descriptionContainer.querySelector('.overlay-icon.aui-icon.aui-icon-small.aui-iconfont-edit');
    if (editButton) {
      editButton.click();
    }

    const mouseOutEvent = new MouseEvent('mouseout', { bubbles: true, cancelable: true, view: window });
    descriptionContainer.dispatchEvent(mouseOutEvent);
  }
}

function insertFormattedTextIntoEditor(text) {
  // Select all iframes with the specified class
  const contentFrames = document.querySelectorAll('.tox-edit-area__iframe');

  if (contentFrames.length > 0) {
    // Select the last iframe in the NodeList
    const contentFrame = contentFrames[contentFrames.length - 1];
    const iframeDocument = contentFrame.contentDocument || contentFrame.contentWindow.document;
    const body = iframeDocument.body;
    
    if (body) {
      body.innerHTML = text;
      console.log('Formatted text inserted into TinyMCE editor');
    } else {
      console.error('TinyMCE editor body not found');
    }
  } else {
    console.error('TinyMCE iframe not found');
  }
}


// Execute the script
hoverAndClickEditButton();
setTimeout(() => { 
  let formattedText = `
  <p><strong>Scope of Ticket:</strong></p>
  <p><span>[This ticket aims to address the following request or issue]</span></p>
  <ul>
    <li><span>[Insert ticket description here]</span></li>
  </ul>
  <p><strong>Expected behavior:</strong></p>
  <ul>
    <li><span>[Insert expected behavior here]<br></span></li>
  </ul>
  <p><strong>Previous behavior:</strong></p>
  <ul>
    <li><span>[Insert previous behavior here]</span></li>
  </ul>
  <p><span>------------------------------------------------------------------</span></p>
  <p><strong>Deliverables:</strong></p>
  <ul>
    <li><span>[Insert deliverables here]</span></li>
  </ul>
  <p><strong>Configuration:</strong></p>
  <ul>
    <li><span>[Insert any required configuration changes here]</span></li>
  </ul>
  <p><strong>DB:</strong></p>
  <ul>
    <li><span>[Insert any relevant information about the database, such as tables, enums, and useful queries here]</span></li>
  </ul>
  <p><strong>Logs:</strong></p>
  <ul>
    <li><span>[Insert any relevant log information here]</span></li>
  </ul>
  <p><strong>Breaking changes:</strong></p>
  <ul>
    <li><span>[Insert information about whether the request or issue will cause any current behaviors to break, and whether regression testing is necessary]</span></li>
  </ul>
  <p><strong>This ticket affects the following:</strong></p>
  <ul>
    <li><span>[Insert whether the request or issue affects a microservice, monolith, or both]</span></li>
  </ul>
  <p><strong>Dependencies:</strong></p>
  <ul>
    <li><span>[Insert information about other components that the request or issue depends on, including explanations about their role and how they affect the scope of testing]</span></li>
  </ul>
  <p><strong>Connection with other tasks:</strong></p>
  <ul>
    <li><span>[Insert information about how the request or issue is related to other tasks or requests]</span></li>
  </ul>
  <p><strong>For QA:</strong></p>
  <ul>
    <li><span>[Insert details and specifications for QA]</span></li>
  </ul>
`;
  insertFormattedTextIntoEditor(formattedText);
}); // Adjust the delay if necessary based on page responsiveness