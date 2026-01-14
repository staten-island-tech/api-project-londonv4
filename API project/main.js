const app = {
  apiResponse: document.querySelector("#api-response"),
  breedInput: document.querySelector("#breedInput"),
  searchBtn: document.querySelector("#searchBtn"),
  randomBtn: document.querySelector("#randomBtn"),

  fetchData: async function(url) {
    try {
      const response = await fetch(url)
      if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`)
      const data = await response.json()

      this.apiResponse.innerHTML = ""

      if (url.includes("random")) {
        const img = document.createElement("img")
        img.src = data.message
        img.className = "rounded-lg border-4 border-pink-300 shadow hover:scale-105 transition max-w-full"
        this.apiResponse.appendChild(img)
      } else {
        if (!data.message || data.message.length === 0) {
          this.apiResponse.textContent = "No images for breed"
          return
        }

        data.message.forEach(imgUrl => {
          const img = document.createElement("img")
          img.src = imgUrl
    
          this.apiResponse.appendChild(img)
        })
      }

      return data
    } catch (err) {
      console.error(err)
      this.apiResponse.textContent = "error"
    }
  }
}

app.randomBtn.addEventListener("click", () => app.fetchData("https://dog.ceo/api/breeds/image/random"))
app.searchBtn.addEventListener("click", () => {
  const breed = app.breedInput.value.toLowerCase().trim()
  if (breed === "") {
    app.apiResponse.textContent = "type a breed."
    return
  }
  app.fetchData(`https://dog.ceo/api/breed/${breed}/images`)
})

app.fetchData("https://dog.ceo/api/breeds/image/random")
