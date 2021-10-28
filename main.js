const teste = 'Teste: ${menu}'
const linksSocialMedia = {
    github: "DeysiLopes",
    youtube: "maykbrito",
    facebook: "deeysi.lopes",
    instagram: "deysii_lps",
    twitter: "ladyprimm"
}

function changeLinksSocialMedia(){

    for(let li of socialLinks.children){
        const social = li.getAttribute('class')

        li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`
        //alert(li.children[0].href)
    
    }
}

changeLinksSocialMedia()


function getGithubProfileInfo (){
    const url = `https://api.github.com/users/${linksSocialMedia.github}`
    //alert(url) 

    fetch(url).then(response => response.json()).then(data => {
        userName.textContent = data.name
        userBio.textContent = data.bio
        userLink.href = data.html_url
        userImage.src = data.avatar_url
        userLogin.textContent = data.login
    })

}

getGithubProfileInfo()