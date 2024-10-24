function volume_sphere(event) {
    //Write your code here
    event.preventDefault(); // Prevent the form from submitting and refreshing the page
    
    // Retrieve the radius value from the input field
    const radiusInput = document.getElementById('radius').value;
    
    // Convert the input value to a float
    const radius = parseFloat(radiusInput);
    
    // Validate the input: it must be a non-negative number
    if (isNaN(radius) || radius < 0) {
        // If the input is invalid, display NaN in the output field
        document.getElementById('volume').value = 'NaN';
    } else {
        // Calculate the volume of the sphere using the formula
        const volume = (4/3) * Math.PI * Math.pow(radius, 3);
        
        // Round the volume to four decimal places
        const roundedVolume = volume.toFixed(4);
        
        // Display the calculated volume in the designated output field
        document.getElementById('volume').value = roundedVolume;
    }
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
