
async function fetchProfileData() {
    const url = 'https://raw.githubusercontent.com/devrafcks/Portif-lio-DIO/refs/heads/main/data/profile.json';
    const response = await fetch(url)
    const profileData = await response.json()
    return profileData
}
