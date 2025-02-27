// profileswitch.js
browser.browserAction.onClicked.addListener(() => {
    // Set this dynamically based on user choice
    let profileName = "default";

    let profilePath = `-P ${profileName} --no-remote`;

    // This code is only indicative, external script needed for launching
    let command = `firefox ${profilePath}`;

    // Run the command 
    executeCommand(command);
});

// External functions to call from web-ext (node.js)
function executeCommand(command) {
    console.log(`Running: ${command}`);
}
