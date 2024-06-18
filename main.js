let defaultText="Sample text",defaultColor="#03a9f4",isColorBackgroundByDefault=!1,currentText=defaultText,currentColor=defaultColor,isColorBackground=isColorBackgroundByDefault;function generate4BitGrayscale(){let channel=16;return["#000",...new Array(15).fill("").map(()=>{var hexChannel=channel.toString(16),hexChannel="#"+hexChannel+hexChannel+hexChannel;return channel+=16,hexChannel}),"#fff"]}let textInput=document.querySelector("input#text-entry-field"),colorInput=document.querySelector("input#text-color-field"),useColorForBackground=document.querySelector("input#use-color-for-background-field"),swatchContainer=document.querySelector("div.text-color-display");function renderSwatches(text=defaultText,color=defaultColor,isColorBackground=isColorBackgroundByDefault){swatchContainer.innerHTML=generate4BitGrayscale().map((c,i,arr)=>`
      <div
        class="swatch"
        style="--animation-order: ${i}; background-color: ${isColorBackground?color:c}; border: 1px solid ${arr[arr.length-1-i]}">
        <span class="text" style="color: ${isColorBackground?c:color}">${text}</span>
      </div>`).join("\n")}function updateSwatches(text,color,isColorBackground){var swatches=swatchContainer.querySelectorAll(".swatch");if(0===swatches.length)renderSwatches();else{let grayscale=generate4BitGrayscale();swatches.forEach((e,k)=>{e.style.backgroundColor=isColorBackground?color:grayscale[k];var textContainer=e.querySelector(".text");textContainer&&(textContainer.style.color=isColorBackground?grayscale[k]:color,textContainer.innerText!==text)&&(e.innerHTML=`<span class="text" style="color: ${isColorBackground?grayscale[k]:color}">${text}</span>`)})}}textInput.value=defaultText,colorInput.value=defaultColor,useColorForBackground.checked=isColorBackgroundByDefault,textInput.addEventListener("change",e=>{updateSwatches(currentText=e.currentTarget.value,currentColor,isColorBackground)}),colorInput.addEventListener("change",e=>{currentColor=e.currentTarget.value,updateSwatches(currentText,currentColor,isColorBackground)}),useColorForBackground.addEventListener("change",e=>{isColorBackground=e.currentTarget.checked,updateSwatches(currentText,currentColor,isColorBackground)}),renderSwatches();