
        const radiusInput = document.getElementById('radius');
        const volumeInput = document.getElementById('volume');
 
        function volumeSphere() {
            event.preventDefault();
 
            const radius = Math.abs(radiusInput.value);
            const volume = ((4 / 3) * Math.PI * Math.pow(radius, 3)).toFixed(4);
            volumeInput.value = volume;
        }
 
        window.onload = function () {
            document.getElementById('MyForm').onsubmit = volumeSphere;
        };

 