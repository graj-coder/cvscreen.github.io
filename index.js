console.log('Creating a CV Screener');
// Data is an array of objects which contains information about the candidates
const data = [
    {
        name: 'Revena Das',
        age: 18,
        city: 'Kolkata',
        language: 'Python',
        framework: 'Django',
        image: 'https://randomuser.me/api/portraits/women/75.jpg'

    },

    {
        name: 'Shurbhi Sharma',
        age: 20,
        city: 'Delhi',
        language: 'JS',
        framework: 'Angular',
        image: 'https://randomuser.me/api/portraits/women/76.jpg'

    },

    {
        name: 'Saurabh Singh',
        age: 28,
        city: 'Delhi',
        language: 'Python',
        framework: 'Flask',
        image: 'https://randomuser.me/api/portraits/men/75.jpg'

    },

    {
        name: 'Rohit Sharma',
        age: 28,
        city: 'Manali',
        language: 'Go',
        framework: 'Go framework',
        image: 'https://randomuser.me/api/portraits/men/75.jpg'

    }
]

// CV Iterator
function cvIterator(profiles) {
    let nextIndex = 0;
    return {
        next: function () {
            return nextIndex < profiles.length ?
                { value: profiles[nextIndex++], done: false } :
                { done: true }
        }
    };
}

// Button listener for next button
const next = document.getElementById('next');
next.addEventListener('click', nextCV);

const candidates = cvIterator(data);

nextCV();

function nextCV() {
    const currentCandidate = candidates.next().value;

    let image = document.getElementById('image');
    let profile = document.getElementById('profile');
    if(currentCandidate != undefined){
    image.innerHTML = `<img src='${currentCandidate.image}'>`;
    profile.innerHTML = `<ul class="list-group">
    <li class="list-group-item">Name: ${currentCandidate.name}</li>
    <li class="list-group-item">${currentCandidate.age} years old</li>
    <li class="list-group-item">Lives in ${currentCandidate.city}</li>
    <li class="list-group-item">Primarily works on ${currentCandidate.language}</li>
    <li class="list-group-item">uses ${currentCandidate.framework} framework</li>
  </ul>`
    }
    else{
        alert('End of candidate applications');
        window.location.reload();
    }
}