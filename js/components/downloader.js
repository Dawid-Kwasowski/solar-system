const downloader = (text="",element="",renderer) => {
   const mime = "image/octet-stream"
   const saveLink =  document.createElement(element)
   saveLink.innerHTML = `<a href="#" class="save-link__link">${text}</a>`;
   document.body.append(saveLink)

   const saveAsImg = (renderer,mime) => {
      let imgData, imgNode
      try {
         console.log(renderer)
         let strMime = "image/jpeg"
         imgData = renderer.domElement.toDataURL(strMime)
         
         saveFile(imgData.replace(strMime, mime), "test.jpg")
         

      } catch (error) {
         console.log(error)
         return
      }
   }

   const saveFile = (strData, filename) => {
      const link = document.querySelector('a')
      if (typeof link.download === 'string') {
         document.body.appendChild(link)
         link.download = filename
         link.href = strData
         link.click()
         // document.body.removeChild(link)
     } else {
         location.replace(uri)
     }
   }

   saveLink.addEventListener('click', () => {
      saveAsImg(renderer,mime)
   })
}

export {downloader}


// references:
//  http://jsfiddle.net/pYpqW/
//  https://codepen.io/shivasaxena/pen/QEzAAv?editors=0010