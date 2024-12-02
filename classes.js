import  supabase from '/client.js';

// Modal and button selectors
const joinBtns = document.querySelectorAll('.join-btn');
const modal = document.querySelector('.join-modal');
const overlay = document.querySelector('.modal-overlay');

// Modal open/close functionality
if (joinBtns?.length) {
    joinBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            modal?.classList.add('active');
            overlay?.classList.add('active');
        });
    });
}

overlay?.addEventListener('click', () => {
    modal?.classList.remove('active');
    overlay?.classList.remove('active');
});

// Form submission handler
document.getElementById('joinForm')?.addEventListener('submit', async function(event) {
    event.preventDefault(); // Prevent default form submission

    const submitBtn = event.target.querySelector('button[type="submit"]');
    submitBtn.disabled = true; // Disable button to prevent duplicate submissions

    // Collect form data
    const formData = {
        name: document.getElementById('name')?.value.trim(),
        gender: document.getElementById('gender')?.value.trim(),
        age: document.getElementById('age')?.value.trim(),
        height: document.getElementById('height')?.value.trim(),
        weight: document.getElementById('weight')?.value.trim(),
        duration: document.getElementById('duration')?.value.trim()
    };

    // Input validation
    if (!formData.name || !formData.gender || !formData.age || !formData.height || !formData.weight) {
        alert('Please fill in all fields with valid data.');
        submitBtn.disabled = false; // Re-enable button if validation fails
        return;
    }

    // Log form data for debugging
    console.log('Form Data:', formData);

    // Insert data into Supabase
    const { error } = await supabase.from('classes_table').insert(formData);


    // Handle errors or success
    if (error) {
        console.error('Supabase Error:', error);
        alert(`Failed to add data: ${error.message}`);
    } else {
        alert('Data added successfully!');
        modal?.classList.remove('active');
        overlay?.classList.remove('active');
    }

    submitBtn.disabled = false; // Re-enable submit button after process completes
});

