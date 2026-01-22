
        // Replace with your Google Apps Script Web App URL
        const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbyhIzpBzDIeQ4Kfyy8wfm0K1P09IsnEkFwjtmQywrtJXRHe4JRmcmOKlfjbHEktQb5i8w/exec   ';

        document.getElementById('contactForm').addEventListener('submit', async function (e) {
            e.preventDefault();

            const btn = document.getElementById('submitBtn');
            const successMsg = document.getElementById('successMsg');
            const errorMsg = document.getElementById('errorMsg');

            successMsg.style.display = 'none';
            errorMsg.style.display = 'none';

            btn.innerHTML = 'Submitting...';
            btn.disabled = true;

            const formData = {
                name: document.getElementById('name').value,
                phone: document.getElementById('phone').value,
                email: document.getElementById('email').value,
                message: document.getElementById('message').value,
                timestamp: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })
            };

            try {
                await fetch("https://script.google.com/macros/s/AKfycbyhIzpBzDIeQ4Kfyy8wfm0K1P09IsnEkFwjtmQywrtJXRHe4JRmcmOKlfjbHEktQb5i8w/exec", {
                    method: 'POST',
                    mode: 'no-cors',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(formData)
                });

                successMsg.style.display = 'block';
                document.getElementById('contactForm').reset();

                setTimeout(() => {
                    successMsg.style.display = 'none';
                }, 5000);

            } catch (error) {
                console.error('Submit error:', error);
                errorMsg.style.display = 'block';
            } finally {
                btn.innerHTML = 'Submit Message';
                btn.disabled = false;
            }
        });
