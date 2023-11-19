// Copyright 2023 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.





chrome.webNavigation.onCompleted.addListener(function (details) {
  // details.url contains the URL of the newly committed navigation
  

  // Execute the provided code
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    if (details.frameId === 0) {
    
    var currentTab = tabs[0];
    var currentUrl = currentTab.url;
    console.log("Current URL:", currentUrl);

    const blockList = ['https://www.youtube.com/','https://www.twitch.tv/','https://twitter.com/']

    if (blockList.includes(currentUrl)) {
      console.log("BLOCKED")
    } else {
      console.log("NOT BLOCKED")
    }

//   for (let i = 0; i < blockList.length ; i++){
//     if (blockList[i] === currentUrl){
//       console.log("YOU SHALL NOT PASS")
//     } else
//       console.log("NOT BLOCKED")
// }
    }

   



    

    // Add your additional code here, if needed
  });
});

