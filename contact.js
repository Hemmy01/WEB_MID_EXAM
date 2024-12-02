import  supabase from '/client.js';


        // Add a click event to the Submit Feedback button
        document.getElementById('submit-feedback').addEventListener('click', async function (event) {
            event.preventDefault(); // Prevent default form submission

            // Get values from the form fields
            const name1 = document.getElementById('name').value.trim();
            const email1 = document.getElementById('email').value.trim();
            const message1 = document.getElementById('message').value.trim();


            // Submit the form (uncomment for actual submission)
            // document.getElementById('feedback-form').submit();

            const { error } = await supabase
            .from('contacts_table')
             .insert({ name: name1, email: email1,message: message1 })

               // Handle errors or success
    if (error) {
        console.error('Supabase Error:', error);
        alert(`Failed to add data: ${error.message}`);
    } else {
        alert('Data added successfully!');
    }

        });
    