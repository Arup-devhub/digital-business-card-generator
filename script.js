// Grab Interactive Form Controls
const nameInput = document.getElementById('nameInput');
const titleInput = document.getElementById('titleInput');
const imageInput = document.getElementById('imageInput');
const emailInput = document.getElementById('emailInput');
const linkedinInput = document.getElementById('linkedinInput');
const githubInput = document.getElementById('githubInput');

// Grab DOM Target Elements on the Card Profile
const cardName = document.getElementById('cardName');
const cardTitle = document.getElementById('cardTitle');
const cardImage = document.getElementById('cardImage');
const cardEmail = document.getElementById('cardEmail');
const cardLinkedin = document.getElementById('cardLinkedin');
const cardGithub = document.getElementById('cardGithub');
const businessCard = document.getElementById('businessCard');

// Two-Way Data Binding: Event Listeners updating text instantly upon input
nameInput.addEventListener('input', (e) => {
    cardName.innerText = e.target.value || "Your Name";
});

titleInput.addEventListener('input', (e) => {
    cardTitle.innerText = e.target.value || "Your Designation";
});

imageInput.addEventListener('input', (e) => {
    // Falls back to standard placeholder image if text box is empty
    cardImage.src = e.target.value || "https://via.placeholder.com/150";
});

emailInput.addEventListener('input', (e) => {
    cardEmail.innerText = e.target.value || "developer@example.com";
});

linkedinInput.addEventListener('input', (e) => {
    cardLinkedin.innerText = e.target.value || "linkedin.com/in/username";
});

githubInput.addEventListener('input', (e) => {
    cardGithub.innerText = e.target.value || "github.com/username";
});

// Dynamic CSS Engine Selection
function changeTheme(themeName) {
    // Reset classes and apply the new layout background system
    businessCard.className = 'card ' + themeName;
    
    // Manage active state highlighting on the dashboard buttons
    const buttons = document.querySelectorAll('.btn-theme');
    buttons.forEach(btn => btn.classList.remove('active'));
    
    // Highlight the clicked template button layout
    event.target.classList.add('active');
}

// Image Export Engine using html2canvas
document.getElementById('downloadBtn').addEventListener('click', () => {
    // Temporarily clean scaling options up for highly crisp canvas snapshot resolutions
    const options = {
        scale: 2, // Increases quality significantly
        useCORS: true // Allows pulling external placeholder avatars smoothly
    };

    html2canvas(businessCard, options).then(canvas => {
        const link = document.createElement('a');
        link.download = `${cardName.innerText.replace(/\s+/g, '_')}_BusinessCard.png`;
        link.href = canvas.toDataURL('image/png');
        link.click(); // Fires the local file downloader pipe
    });
});