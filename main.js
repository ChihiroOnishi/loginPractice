console.clear()

const signupBtn = document.getElementById("signup")
const loginBtn = document.getElementById("login")

signupBtn.addEventListener('click', (e) => {
    let parent = e.target.parentNode
    Array.from(e.target.parentNode.classList).find((element) => {
        if(element !== "slide") {
            parent.classList.add('slide')
        } else {
            loginBtn.parentNode.parentNode.classList.add('slide')
            parent.classList.remove('slide')
        }
    })
})

loginBtn.addEventListener('click', (e) => {
	let parent = e.target.parentNode.parentNode
	Array.from(e.target.parentNode.parentNode.classList).find((element) => {
		if(element !== "slide") {
			parent.classList.add('slide')
		} else {
			signupBtn.parentNode.classList.add('slide')
			parent.classList.remove('slide')
		}
	})
})
