function volume_sphere(event) {
    //Write your code here
   event.preventDefault(); // Prevent form submission
            const radius = parseFloat(document.getElementById('radius').value);
            if (!isNaN(radius) && radius >= 0) {
                const volume = (4/3) * Math.PI * Math.pow(radius, 3);
                document.getElementById('volume').value = volume.toFixed(2); // Set volume in input field
            } else {
                alert('Please enter a valid radius.');
            }
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
